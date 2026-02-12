import { useState, useEffect, useRef } from 'react';
import { speakingQuestions } from '../data/speakingQuestions';
import { Mic, Square, RotateCcw, ChevronLeft } from 'lucide-react';

// Type definition for SpeechRecognition
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

const SpeakingPage = () => {
    // Navigation State
    const [view, setView] = useState<'categories' | 'questions' | 'practice'>('categories');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);

    // Practice State
    const [isRecording, setIsRecording] = useState(false);
    const [timer, setTimer] = useState(0);
    const [transcript, setTranscript] = useState('');
    const [score, setScore] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    // Refs
    const recognitionRef = useRef<any>(null);
    const timerIntervalRef = useRef<any>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    // Get unique categories
    const categories = Array.from(new Set(speakingQuestions.map(q => q.category)));
    const categoryQuestions = selectedCategory ? speakingQuestions.filter(q => q.category === selectedCategory) : [];
    const currentQuestion = speakingQuestions.find(q => q.id === currentQuestionId);

    useEffect(() => {
        // Initialize Speech Recognition
        const { webkitSpeechRecognition, SpeechRecognition } = window as unknown as IWindow;
        const SpeechRecognitionClass = SpeechRecognition || webkitSpeechRecognition;

        if (SpeechRecognitionClass) {
            recognitionRef.current = new SpeechRecognitionClass();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.lang = 'fr-FR'; // French

            recognitionRef.current.onresult = (event: any) => {
                let currentTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    currentTranscript += event.results[i][0].transcript;
                }
                setTranscript(currentTranscript);
            };
        }
    }, []);

    const startRecording = async () => {
        setTranscript('');
        setScore(null);
        setTimer(0);
        setAudioUrl(null);
        setIsRecording(true);
        setShowResult(false);
        audioChunksRef.current = [];

        // Start Speech Recognition
        if (recognitionRef.current) {
            recognitionRef.current.start();
        }

        // Start Audio Recording
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(audioBlob);
                setAudioUrl(url);

                // Stop all tracks to release microphone
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
        } catch (err) {
            console.error("Error accessing microphone:", err);
        }

        // Timer
        timerIntervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
    };

    const stopRecording = () => {
        setIsRecording(false);

        // Stop Recognition
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }

        // Stop Audio Recorder
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }

        clearInterval(timerIntervalRef.current);
        calculateScore();
        setShowResult(true);
    };

    const calculateScore = () => {
        // Simple scoring based on word count
        const wordCount = transcript.trim().split(/\s+/).length;
        let calculatedScore = 0;
        if (transcript.length === 0) calculatedScore = 0;
        else if (wordCount < 3) calculatedScore = 2;
        else if (wordCount < 6) calculatedScore = 5;
        else if (wordCount < 10) calculatedScore = 8;
        else calculatedScore = 10;

        setScore(calculatedScore);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setView('questions');
    };

    const handleQuestionSelect = (id: string) => {
        setCurrentQuestionId(id);
        setView('practice');
        // Reset state
        setTranscript('');
        setScore(null);
        setTimer(0);
        setAudioUrl(null);
        setShowResult(false);
    };

    const handleGoBack = () => {
        if (view === 'practice') {
            setView('questions');
            // Clean up audio url
            if (audioUrl) URL.revokeObjectURL(audioUrl);
        } else if (view === 'questions') {
            setView('categories');
            setSelectedCategory(null);
        }
    };

    // --- RENDERERS ---

    // 1. Category Selection View
    if (view === 'categories') {
        return (
            <div className="container" style={{ maxWidth: '1000px', padding: '2rem' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--accent-color)' }}>Speaking Practice</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Select a topic to begin your speaking test.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {categories.map(cat => (
                        <div
                            key={cat}
                            onClick={() => handleCategorySelect(cat)}
                            style={{
                                background: '#FFFFFF', // Requested White
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '2px solid transparent', // Default border
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: '#2C3E50',
                                outline: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = '#B4C540'; // Green highlight
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'transparent';
                            }}
                        >
                            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>{cat}</h3>
                            <span style={{ color: '#7f8c8d' }}>
                                {speakingQuestions.filter(q => q.category === cat).length} Questions
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 2. Question Selection View
    if (view === 'questions') {
        return (
            <div className="container" style={{ maxWidth: '800px', padding: '2rem' }}>
                <button
                    onClick={handleGoBack}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', marginBottom: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <ChevronLeft size={20} /> Back to Categories
                </button>

                <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--accent-color)' }}>
                    {selectedCategory}: Choose a Question
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {categoryQuestions.map((q) => (
                        <div
                            key={q.id}
                            onClick={() => handleQuestionSelect(q.id)}
                            style={{
                                background: '#FFFFFF', // White
                                padding: '1.5rem',
                                borderRadius: '12px',
                                border: '1px solid #e0e0e0',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#B4C540'; // Green highlight
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(180, 197, 64, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#e0e0e0';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <span style={{ fontSize: '1.1rem', color: '#2C3E50', fontWeight: 500 }}>{q.question}</span>
                            <ChevronLeft size={20} style={{ transform: 'rotate(180deg)', color: '#B4C540' }} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 3. Practice View
    if (!currentQuestion) return null;

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '2rem' }}>
            <button
                onClick={handleGoBack}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', marginBottom: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
                <ChevronLeft size={20} /> Back to Questions
            </button>

            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <span style={{ background: '#B4C540', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    {selectedCategory}
                </span>
            </div>

            <div style={{
                background: '#FFFFFF', // White background requested
                padding: '3rem 2rem',
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                border: '2px solid #E0E2D2', // Subtle border
                marginBottom: '2rem',
                position: 'relative'
            }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#2C3E50' }}>
                    {currentQuestion.question}
                </h2>

                <div style={{ fontSize: '3rem', fontFamily: 'monospace', color: isRecording ? '#e74c3c' : '#2C3E50', marginBottom: '2rem' }}>
                    {formatTime(timer)}
                </div>

                {!isRecording && !showResult && (
                    <button
                        onClick={startRecording}
                        className="action-btn"
                        style={{
                            background: '#FFFFFF',
                            color: '#2C3E50',
                            border: '2px solid #B4C540', // Green border
                            padding: '1rem 3rem',
                            borderRadius: '50px',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            transition: 'all 0.2s',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#B4C540';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#FFFFFF';
                            e.currentTarget.style.color = '#2C3E50';
                        }}
                    >
                        <Mic size={24} /> Start Answer
                    </button>
                )}

                {isRecording && (
                    <button
                        onClick={stopRecording}
                        style={{
                            background: '#e74c3c',
                            color: 'white',
                            border: 'none',
                            padding: '1rem 3rem',
                            borderRadius: '50px',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            animation: 'pulse 1.5s infinite'
                        }}
                    >
                        <Square size={24} fill="white" /> Stop
                    </button>
                )}

                {showResult && (
                    <div className="result-area" style={{ marginTop: '2rem', animation: 'fadeIn 0.5s' }}>
                        <div style={{
                            background: '#f8f9fa',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            textAlign: 'left',
                            marginBottom: '2rem',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h4 style={{ margin: '0 0 1rem 0', color: '#7f8c8d' }}>You said:</h4>
                            <p style={{ fontSize: '1.1rem', fontStyle: transcript ? 'normal' : 'italic', color: '#2C3E50' }}>
                                {transcript || "(No speech detected)"}
                            </p>

                            {/* Audio Replay */}
                            {audioUrl && (
                                <div style={{ marginTop: '1rem', borderTop: '1px solid #e0e0e0', paddingTop: '1rem' }}>
                                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#7f8c8d', fontSize: '0.9rem' }}>Playback:</h4>
                                    <audio controls src={audioUrl} style={{ width: '100%', height: '40px' }} />
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem' }}>SCORE</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#B4C540' }}>{score}/10</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem' }}>TIME</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3686C9' }}>{formatTime(timer)}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <button
                                onClick={startRecording}
                                style={{
                                    background: 'transparent',
                                    border: '2px solid #B4C540',
                                    color: '#2C3E50',
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: 'bold'
                                }}
                            >
                                <RotateCcw size={18} /> Retry
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7); }
                    70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(231, 76, 60, 0); }
                    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(231, 76, 60, 0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default SpeakingPage;
