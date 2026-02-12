import { useState, useEffect, useRef } from 'react';
import { speakingQuestions } from '../data/speakingQuestions';
import { Mic, Square, RotateCcw, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

// Type definition for SpeechRecognition
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

const SpeakingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [timer, setTimer] = useState(0);
    const [transcript, setTranscript] = useState('');
    const [score, setScore] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);

    // Recognition ref
    const recognitionRef = useRef<any>(null);
    const timerIntervalRef = useRef<any>(null);

    // Get unique categories
    const categories = Array.from(new Set(speakingQuestions.map(q => q.category)));
    const categoryQuestions = selectedCategory ? speakingQuestions.filter(q => q.category === selectedCategory) : [];

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

    const startRecording = () => {
        setTranscript('');
        setScore(null);
        setTimer(0);
        setIsRecording(true);
        setShowResult(false);

        if (recognitionRef.current) {
            recognitionRef.current.start();
        }

        timerIntervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
    };

    const stopRecording = () => {
        setIsRecording(false);
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
        clearInterval(timerIntervalRef.current);
        calculateScore();
        setShowResult(true);
    };

    const calculateScore = () => {
        // Simple scoring algorithm: Length of response vs Time?
        // Or just Word Count * Factor.
        // Let's assume a good answer is at least 5 words.
        const wordCount = transcript.trim().split(/\s+/).length;
        // Base score on word count (up to 10 points)
        // 1-2 words = 2 pts
        // 3-5 words = 5 pts
        // 6-10 words = 8 pts
        // >10 words = 10 pts
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

    const nextQuestion = () => {
        setShowResult(false);
        setTranscript('');
        setScore(null);
        setTimer(0);
        if (currentQuestionIndex < categoryQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Finished category
            setSelectedCategory(null);
            setCurrentQuestionIndex(0);
        }
    };

    if (!selectedCategory) {
        return (
            <div className="container" style={{ maxWidth: '1000px', padding: '2rem' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    <Home size={20} /> Back to Dashboard
                </Link>
                <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--accent-color)' }}>Speaking Practice</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Select a topic to begin your speaking test. Capture your response, track time, and get a simplified fluency score.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {categories.map(cat => (
                        <div
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid var(--border-color)',
                                cursor: 'pointer',
                                transition: 'transform 0.2s, border-color 0.2s',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                            }}
                        >
                            <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>{cat}</h3>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                {speakingQuestions.filter(q => q.category === cat).length} Questions
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const currentQuestion = categoryQuestions[currentQuestionIndex];

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '2rem' }}>
            <button
                onClick={() => setSelectedCategory(null)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
                ← Back to Categories
            </button>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{
                    background: '#B4C540',
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    display: 'inline-block'
                }}>
                    {selectedCategory}
                </span>
                <span style={{ display: 'block', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    Question {currentQuestionIndex + 1} of {categoryQuestions.length}
                </span>
            </div>

            <div style={{
                background: 'var(--bg-secondary)',
                padding: '3rem 2rem',
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '1px solid var(--border-color)',
                marginBottom: '2rem'
            }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
                    {currentQuestion.question}
                </h2>

                <div style={{ fontSize: '3rem', fontFamily: 'monospace', color: isRecording ? '#e74c3c' : 'var(--text-primary)', marginBottom: '2rem' }}>
                    {formatTime(timer)}
                </div>

                {!isRecording && !showResult && (
                    <button
                        onClick={startRecording}
                        style={{
                            background: '#3686C9',
                            color: 'white',
                            border: 'none',
                            padding: '1rem 3rem',
                            borderRadius: '50px',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            transition: 'transform 0.2s'
                        }}
                    >
                        <Mic size={24} /> Start Answer
                    </button>
                )}

                {isRecording && (
                    <button
                        onClick={stopRecording}
                        style={{
                            background: '#e74c3c', // Red for stop
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
                            background: 'rgba(0,0,0,0.2)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            textAlign: 'left',
                            marginBottom: '2rem'
                        }}>
                            <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-secondary)' }}>You said:</h4>
                            <p style={{ fontSize: '1.1rem', fontStyle: transcript ? 'normal' : 'italic', color: 'var(--text-primary)' }}>
                                {transcript || "(No speech detected)"}
                            </p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>SCORE</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#B4C540' }}>{score}/10</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>TIME</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3686C9' }}>{formatTime(timer)}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <button
                                onClick={startRecording}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid var(--text-secondary)',
                                    color: 'var(--text-primary)',
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <RotateCcw size={18} /> Retry
                            </button>
                            <button
                                onClick={nextQuestion}
                                style={{
                                    background: '#B4C540',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.8rem 2rem',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '1.1rem'
                                }}
                            >
                                Next Question <ChevronRight size={20} />
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
