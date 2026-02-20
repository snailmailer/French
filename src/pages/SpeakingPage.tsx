import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { speakingQuestions } from '../data/speakingQuestions';
import { Mic, Square, RotateCcw, ChevronLeft, Volume2 } from 'lucide-react';
import { speakFrench } from '../utils/tts';

// Type definition for SpeechRecognition
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

const SpeakingPage = () => {
    // URL-persisted Navigation State
    const [searchParams, setSearchParams] = useSearchParams();
    const view = (searchParams.get('view') as 'categories' | 'questions' | 'practice') || 'categories';
    const selectedCategory = searchParams.get('category') || null;
    const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);

    // Practice State
    const [isRecording, setIsRecording] = useState(false);
    const [timer, setTimer] = useState(0);
    const [transcript, setTranscript] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    // Countdown State
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [countdown, setCountdown] = useState(10);

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

    // Countdown Logic
    useEffect(() => {
        let interval: any;
        if (isCountingDown && countdown > 0) {
            interval = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        } else if (isCountingDown && countdown === 0) {
            setIsCountingDown(false);
            startActualRecording();
        }
        return () => clearInterval(interval);
    }, [isCountingDown, countdown]);

    const handleStartClick = () => {
        setTranscript('');
        setTimer(0);
        setAudioUrl(null);
        setShowResult(false);
        setIsCountingDown(true);
        setCountdown(10);
    };

    const startActualRecording = async () => {
        setIsRecording(true);
        audioChunksRef.current = [];

        // Start Speech Recognition
        if (recognitionRef.current) {
            try {
                recognitionRef.current.start();
            } catch (e) {
                console.error("Speech recognition error:", e);
            }
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
            try {
                recognitionRef.current.stop();
            } catch (e) {
                console.error("Speech recognition stop error", e);
            }
        }

        // Stop Audio Recorder
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }

        clearInterval(timerIntervalRef.current);
        setShowResult(true);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleCategorySelect = (category: string) => {
        setSearchParams({ view: 'questions', category });
    };

    const handleQuestionSelect = (id: string) => {
        setCurrentQuestionId(id);
        if (selectedCategory) {
            setSearchParams({ view: 'practice', category: selectedCategory });
        } else {
            setSearchParams({ view: 'practice' });
        }
        // Reset state
        setTranscript('');
        setTimer(0);
        setAudioUrl(null);
        setShowResult(false);
        setIsCountingDown(false);
    };

    const handleGoBack = () => {
        if (view === 'practice') {
            if (selectedCategory) {
                setSearchParams({ view: 'questions', category: selectedCategory });
            } else {
                setSearchParams({ view: 'questions' });
            }
            // Clean up audio url
            if (audioUrl) URL.revokeObjectURL(audioUrl);
        } else if (view === 'questions') {
            setSearchParams({ view: 'categories' });
        }
    };

    // --- RENDERERS ---

    // 1. Category Selection View
    if (view === 'categories') {
        const homeGridStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
        };

        return (
            <div className="container" style={{ padding: '3rem 1rem' }}>
                <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Expression orale (Speaking Practice)</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                    Choisissez un sujet pour commencer votre test oral.
                </p>

                <div style={homeGridStyle}>
                    {categories.map(cat => (
                        <div
                            key={cat}
                            onClick={() => handleCategorySelect(cat)}
                            style={{
                                background: '#ffffff',
                                padding: '2rem',
                                borderRadius: '16px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                cursor: 'pointer',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                borderLeft: '6px solid #B4C540', // Matching Home Page style
                                color: '#2C3E50'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{
                                color: '#B4C540',
                                background: 'rgba(180, 197, 64, 0.1)', // Light green bg for icon
                                padding: '1rem',
                                borderRadius: '50%',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Mic size={32} />
                            </div>
                            <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.5rem', color: '#B4C540' }}>{cat}</h3>
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
            <div className="container" style={{ maxWidth: '900px', padding: '3rem 1rem' }}>
                <button
                    onClick={handleGoBack}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', marginBottom: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
                >
                    <ChevronLeft size={20} /> Back to Categories
                </button>

                <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#B4C540', fontSize: '2rem' }}>
                    {selectedCategory}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {categoryQuestions.map((q) => (
                        <div
                            key={q.id}
                            onClick={() => handleQuestionSelect(q.id)}
                            style={{
                                background: '#ffffff',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                cursor: 'pointer',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderLeft: '4px solid #B4C540' // Consistent style
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(5px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
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
        <div className="container" style={{ maxWidth: '900px', padding: '3rem 1rem' }}>
            <button
                onClick={handleGoBack}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', marginBottom: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
            >
                <ChevronLeft size={20} /> Back to Questions
            </button>

            <div style={{
                background: '#ffffff',
                padding: '3rem 2rem',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                borderLeft: '6px solid #B4C540', // Consistent style
                marginBottom: '2rem',
                position: 'relative',
                color: '#2C3E50'
            }}>
                <div style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#B4C540', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {selectedCategory}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '2.2rem', color: '#2C3E50', margin: 0 }}>
                        {currentQuestion.question}
                    </h2>
                    <button
                        onClick={() => speakFrench(currentQuestion.question)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#4CAF50'
                        }}
                        aria-label="Speak question"
                    >
                        <Volume2 size={24} />
                    </button>
                </div>

                {isCountingDown ? (
                    <div style={{ marginBottom: '2.5rem' }}>
                        <div style={{ fontSize: '1.5rem', color: '#7f8c8d', marginBottom: '1rem' }}>Recording in...</div>
                        <div style={{ fontSize: '5rem', fontWeight: 'bold', color: '#e74c3c' }}>{countdown}</div>
                    </div>
                ) : (
                    <div style={{ fontSize: '3.5rem', fontFamily: 'monospace', color: isRecording ? '#e74c3c' : '#2C3E50', marginBottom: '2.5rem', fontWeight: 'bold' }}>
                        {formatTime(timer)}
                    </div>
                )}


                {!isRecording && !showResult && !isCountingDown && (
                    <button
                        onClick={handleStartClick}
                        style={{
                            background: '#ffffff',
                            color: '#2C3E50',
                            border: '2px solid #B4C540',
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
                            e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
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
                            animation: 'pulse 1.5s infinite',
                            boxShadow: '0 4px 10px rgba(231, 76, 60, 0.4)'
                        }}
                    >
                        <Square size={24} fill="white" /> Stop
                    </button>
                )}

                {showResult && (
                    <div className="result-area" style={{ marginTop: '3rem', animation: 'fadeIn 0.5s' }}>
                        <div style={{
                            background: '#f8f9fa',
                            padding: '2rem',
                            borderRadius: '12px',
                            textAlign: 'left',
                            marginBottom: '2rem',
                            border: '1px solid #edf2f7'
                        }}>
                            <h4 style={{ margin: '0 0 1rem 0', color: '#7f8c8d', fontSize: '0.9rem', textTransform: 'uppercase' }}>Transcript</h4>
                            <p style={{ fontSize: '1.2rem', fontStyle: transcript ? 'normal' : 'italic', color: '#2C3E50', lineHeight: 1.6 }}>
                                {transcript || "(No speech detected)"}
                            </p>

                            {/* Audio Replay */}
                            {audioUrl && (
                                <div style={{ marginTop: '1.5rem', borderTop: '1px solid #edf2f7', paddingTop: '1.5rem' }}>
                                    <h4 style={{ margin: '0 0 0.8rem 0', color: '#7f8c8d', fontSize: '0.9rem', textTransform: 'uppercase' }}>Recording playback</h4>
                                    <audio controls src={audioUrl} style={{ width: '100%', height: '40px' }} />
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '2rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', color: '#7f8c8d', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Duration</div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3686C9' }}>{formatTime(timer)}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <button
                                onClick={handleStartClick}
                                style={{
                                    background: 'transparent',
                                    border: '2px solid #B4C540',
                                    color: '#2C3E50',
                                    padding: '0.8rem 2rem',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: 'bold',
                                    fontSize: '1rem'
                                }}
                            >
                                <RotateCcw size={18} /> Retake
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
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default SpeakingPage;
