import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { speakingQuestions, examTopics, speakingTips, levelStructures } from '../data/speakingQuestions';
import { Mic, Square, RotateCcw, ChevronLeft, Volume2, BookOpen, GraduationCap, Wrench, Clock, Play } from 'lucide-react';
import { speakFrench } from '../utils/tts';

// Type definition for SpeechRecognition
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

const SpeakingPage = () => {
    // URL-persisted Navigation State
    const [searchParams, setSearchParams] = useSearchParams();
    const view = (searchParams.get('view') as string) || 'categories';
    const selectedCategory = searchParams.get('category') || null;
    const selectedTopicId = searchParams.get('topicId') || null;
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

    // Exam practice state
    const [selectedExamTopic, setSelectedExamTopic] = useState<string | null>(null);
    const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
    const [examTimer, setExamTimer] = useState(0);
    const [examPhase, setExamPhase] = useState<'idle' | 'prep' | 'speak' | 'done'>('idle');
    const examTimerRef = useRef<any>(null);

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
            const recognition = new SpeechRecognitionClass();
            recognition.lang = 'fr-FR';
            recognition.interimResults = false;
            recognition.continuous = true;

            recognition.onresult = (event: any) => {
                let fullTranscript = '';
                for (let i = 0; i < event.results.length; i++) {
                    fullTranscript += event.results[i][0].transcript + ' ';
                }
                setTranscript(fullTranscript.trim());
            };

            recognition.onerror = () => { /* Silently handle */ };
            recognitionRef.current = recognition;
        }

        return () => {
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            if (examTimerRef.current) clearInterval(examTimerRef.current);
        };
    }, []);

    // --- Recording functions ---
    const handleStartClick = () => {
        setIsCountingDown(true);
        setCountdown(10);
        setShowResult(false);
        setTranscript('');
        setTimer(0);
        setAudioUrl(null);
    };

    const startActualRecording = () => {
        setIsRecording(true);
        timerIntervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);

        if (recognitionRef.current) {
            try { recognitionRef.current.start(); } catch { /* already started */ }
        }

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const recorder = new MediaRecorder(stream);
                audioChunksRef.current = [];
                mediaRecorderRef.current = recorder;

                recorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        audioChunksRef.current.push(event.data);
                    }
                };

                recorder.onstop = () => {
                    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                    const url = URL.createObjectURL(audioBlob);
                    setAudioUrl(url);
                    stream.getTracks().forEach(track => track.stop());
                };

                recorder.start();
            })
            .catch(() => { /* Permission denied */ });
    };

    useEffect(() => {
        if (isCountingDown && countdown > 0) {
            const t = setTimeout(() => setCountdown(prev => prev - 1), 1000);
            return () => clearTimeout(t);
        } else if (isCountingDown && countdown === 0) {
            setIsCountingDown(false);
            startActualRecording();
        }
    }, [isCountingDown, countdown]);

    const stopRecording = () => {
        setIsRecording(false);
        setShowResult(true);

        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }

        if (recognitionRef.current) {
            try { recognitionRef.current.stop(); } catch { /* not started */ }
        }

        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // --- Navigation ---
    const handleCategorySelect = (category: string) => {
        setSearchParams({ view: 'questions', category });
    };

    const handleExamSelect = (topicId: string) => {
        setSearchParams({ view: 'exam-topic', topicId });
    };

    const handleLevelGuideLink = () => {
        setSearchParams({ view: 'cefr-guide' });
    };

    const handleQuestionSelect = (id: string) => {
        setCurrentQuestionId(id);
        const params: any = { view: 'practice' };
        if (selectedCategory) params.category = selectedCategory;
        setSearchParams(params);
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
            if (audioUrl) URL.revokeObjectURL(audioUrl);
        } else if (view === 'exam-topic' || view === 'cefr-guide' || view === 'questions') {
            setSearchParams({ view: 'categories' });
        } else {
            setSearchParams({ view: 'categories' });
        }
    };

    // --- Exam timer ---
    const startExamTimer = (topic: typeof examTopics[0], scenario: string) => {
        setSelectedExamTopic(topic.id);
        setSelectedScenario(scenario);
        if (topic.prepTime > 0) {
            setExamPhase('prep');
            setExamTimer(topic.prepTime);
            examTimerRef.current = setInterval(() => {
                setExamTimer(prev => {
                    if (prev <= 1) {
                        clearInterval(examTimerRef.current);
                        // Auto-start speak phase
                        setExamPhase('speak');
                        setExamTimer(topic.speakTime);
                        examTimerRef.current = setInterval(() => {
                            setExamTimer(p => {
                                if (p <= 1) {
                                    clearInterval(examTimerRef.current);
                                    setExamPhase('done');
                                    return 0;
                                }
                                return p - 1;
                            });
                        }, 1000);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            setExamPhase('speak');
            setExamTimer(topic.speakTime);
            examTimerRef.current = setInterval(() => {
                setExamTimer(prev => {
                    if (prev <= 1) {
                        clearInterval(examTimerRef.current);
                        setExamPhase('done');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    };

    const resetExam = () => {
        if (examTimerRef.current) clearInterval(examTimerRef.current);
        setExamPhase('idle');
        setExamTimer(0);
        setSelectedScenario(null);
    };

    // Common styles
    const cardStyle = {
        background: 'var(--bg-secondary)',
        padding: '1.5rem',
        borderRadius: '12px',
        borderLeft: '4px solid var(--accent-color)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '1rem'
    };

    const sectionHeading = (text: string) => (
        <h2 style={{ color: 'var(--accent-color)', fontSize: '1.8rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--border-color)' }}>
            {text}
        </h2>
    );

    // ========================
    // 1. CATEGORIES HOME VIEW
    // ========================
    if (view === 'categories') {
        return (
            <div className="container" style={{ padding: '3rem 1rem', maxWidth: '1400px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.25rem', color: '#8BC34A' }}>
                    Expression Orale
                </h1>
                <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#B4C540', fontWeight: 'bold', marginBottom: '1rem' }}>
                    (Speaking Practice)
                </p>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    Pratiquez votre expression orale avec des questions par catégorie, des examens TEF/TCF, et un guide de niveaux CECR.
                </p>

                {/* Two-column layout: main content + toolbox sidebar */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    {/* === Left: Main Content === */}
                    <div style={{ flex: '1 1 650px', minWidth: 0 }}>

                        {/* === Question Categories === */}
                        {sectionHeading('📋 Catégories de questions (Question Categories)')}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                            {categories.map(cat => (
                                <div
                                    key={cat}
                                    onClick={() => handleCategorySelect(cat)}
                                    style={{
                                        ...cardStyle,
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        padding: '2rem'
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
                                        color: 'var(--accent-color)',
                                        background: 'rgba(76, 175, 80, 0.08)',
                                        padding: '1rem',
                                        borderRadius: '50%',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Mic size={32} />
                                    </div>
                                    <h3 style={{ margin: '0.5rem 0 0.5rem', fontSize: '1.3rem', color: 'var(--accent-color)' }}>{cat}</h3>
                                    <span style={{ color: 'var(--text-secondary)' }}>
                                        {speakingQuestions.filter(q => q.category === cat).length} Questions
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* === Exam Practice Grid === */}
                        {sectionHeading('🎓 Pratique d\'examen (Exam Practice)')}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                            {examTopics.map(topic => (
                                <div
                                    key={topic.id}
                                    onClick={() => handleExamSelect(topic.id)}
                                    style={{
                                        ...cardStyle,
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        padding: '2rem'
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
                                        color: '#3686C9',
                                        background: 'rgba(54, 134, 201, 0.08)',
                                        padding: '1rem',
                                        borderRadius: '50%',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <GraduationCap size={32} />
                                    </div>
                                    <h3 style={{ margin: '0.5rem 0 0.5rem', fontSize: '1.2rem', color: '#3686C9' }}>{topic.title}</h3>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        {topic.scenarios.length} Scénarios
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* === CEFR Level Guide Link === */}
                        {sectionHeading('📊 Guide des Niveaux (Level Guide)')}
                        <div
                            onClick={handleLevelGuideLink}
                            style={{
                                ...cardStyle,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2rem',
                                padding: '2rem',
                                borderLeft: '8px solid var(--accent-color)'
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
                                color: 'var(--accent-color)',
                                background: 'rgba(76, 175, 80, 0.08)',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <BookOpen size={40} />
                            </div>
                            <div>
                                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                                    Niveaux CECR : Guide de structure
                                </h3>
                                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                    (CEFR Level Guide: How to structure your answers)
                                </p>
                            </div>
                        </div>

                    </div>{/* end main content */}

                    {/* === Right Sidebar: Boîte à Outils === */}
                    <div style={{ flex: '0 0 320px', position: 'sticky', top: '5rem', alignSelf: 'flex-start' }}>
                        <h2 style={{ color: 'var(--accent-color)', fontSize: '1.4rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--border-color)' }}>
                            🧰 Boîte à Outils
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>(Speaking Toolbox)</p>

                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                            <Wrench size={16} /> Connecteurs logiques
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            {speakingTips.connectors.map((group, idx) => (
                                <div key={idx} style={{ ...cardStyle, padding: '1rem' }}>
                                    <h5 style={{ margin: '0 0 0.5rem', color: 'var(--accent-color)', fontSize: '0.9rem' }}>{group.category}</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {group.phrases.map((phrase, pIdx) => (
                                            <span
                                                key={pIdx}
                                                onClick={() => speakFrench(phrase.replace('...', ''))}
                                                style={{
                                                    background: 'var(--bg-primary)',
                                                    border: '1px solid var(--border-color)',
                                                    borderRadius: '16px',
                                                    padding: '0.25rem 0.6rem',
                                                    fontSize: '0.8rem',
                                                    color: 'var(--text-primary)',
                                                    cursor: 'pointer',
                                                    transition: 'background 0.2s'
                                                }}
                                                title="Cliquez pour écouter"
                                            >
                                                {phrase}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                            <BookOpen size={16} /> Conseils (Tips)
                        </h4>
                        <div style={{ ...cardStyle, padding: '1rem' }}>
                            <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.8, fontSize: '0.85rem' }}>
                                {speakingTips.advice.map((tip, idx) => (
                                    <li key={idx} style={{ color: 'var(--text-primary)' }}>{tip}</li>
                                ))}
                            </ul>
                        </div>
                    </div>{/* end sidebar */}

                </div>{/* end two-column layout */}
            </div>
        );
    }

    // ========================
    // 3. EXAM TOPIC VIEW (Dedicated)
    // ========================
    if (view === 'exam-topic') {
        const topic = examTopics.find(t => t.id === selectedTopicId);
        if (!topic) return null;

        return (
            <div className="container" style={{ maxWidth: '900px', padding: '3rem 1rem' }}>
                <button
                    onClick={handleGoBack}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', marginBottom: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
                >
                    <ChevronLeft size={20} /> Retour aux catégories
                </button>

                <div style={cardStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <GraduationCap size={28} style={{ color: '#3686C9' }} />
                        <h2 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.8rem' }}>{topic.title}</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '1.1rem' }}>{topic.description}</p>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        {topic.prepTime > 0 && (
                            <span style={{ fontSize: '1rem', background: 'rgba(54, 134, 201, 0.1)', color: '#3686C9', padding: '0.5rem 1rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={18} /> Préparation: {formatTime(topic.prepTime)}
                            </span>
                        )}
                        <span style={{ fontSize: '1rem', background: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50', padding: '0.5rem 1rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mic size={18} /> Parole: {formatTime(topic.speakTime)}
                        </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            Choisissez un scénario (Select a Scenario):
                        </h4>
                        {topic.scenarios.map((scenario, idx) => {
                            const isActive = selectedExamTopic === topic.id && selectedScenario === scenario;
                            return (
                                <div key={idx} style={{
                                    background: isActive ? 'rgba(76, 175, 80, 0.08)' : 'var(--bg-primary)',
                                    border: isActive ? '2px solid var(--accent-color)' : '1px solid var(--border-color)',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem' }}>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ margin: 0, color: 'var(--text-primary)', lineHeight: 1.6, fontSize: '1.1rem', fontStyle: 'italic' }}>
                                                « {scenario} »
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
                                            <button
                                                onClick={() => speakFrench(scenario)}
                                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#4CAF50', padding: '0.5rem' }}
                                                title="Écouter"
                                            >
                                                <Volume2 size={24} />
                                            </button>
                                            {!isActive ? (
                                                <button
                                                    onClick={() => startExamTimer(topic, scenario)}
                                                    style={{
                                                        background: 'var(--accent-color)',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        padding: '0.6rem 1.2rem',
                                                        cursor: 'pointer',
                                                        fontSize: '1rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    <Play size={18} /> Commencer
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={resetExam}
                                                    style={{
                                                        background: '#e74c3c',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        padding: '0.6rem 1.2rem',
                                                        cursor: 'pointer',
                                                        fontSize: '1rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    <RotateCcw size={18} /> Réinitialiser
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    {isActive && examPhase !== 'idle' && (
                                        <div style={{
                                            marginTop: '1.5rem',
                                            padding: '2rem',
                                            background: examPhase === 'prep' ? 'rgba(54, 134, 201, 0.1)' : examPhase === 'speak' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(155, 89, 182, 0.1)',
                                            borderRadius: '12px',
                                            textAlign: 'center',
                                            border: `1px dashed ${examPhase === 'prep' ? '#3686C9' : '#4CAF50'}`
                                        }}>
                                            <div style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: examPhase === 'prep' ? '#3686C9' : examPhase === 'speak' ? '#4CAF50' : '#9B59B6', fontWeight: 'bold', marginBottom: '1rem' }}>
                                                {examPhase === 'prep' ? '⏳ Temps de Préparation' : examPhase === 'speak' ? '🎤 Parlez maintenant !' : '✅ Exercice Terminé'}
                                            </div>
                                            {examPhase !== 'done' && (
                                                <div style={{ fontSize: '4rem', fontFamily: 'monospace', fontWeight: 'bold', color: examPhase === 'prep' ? '#3686C9' : '#4CAF50' }}>
                                                    {formatTime(examTimer)}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // ========================
    // 4. CEFR GUIDE VIEW (Dedicated)
    // ========================
    if (view === 'cefr-guide') {
        return (
            <div className="container" style={{ maxWidth: '1200px', padding: '3rem 1rem' }}>
                <button
                    onClick={handleGoBack}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', marginBottom: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
                >
                    <ChevronLeft size={20} /> Retour aux catégories
                </button>

                <h1 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                    📊 Niveaux CECR : Guide de structure
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                    Apprenez à structurer vos réponses selon votre niveau cible (CEFR Level Guide).
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
                    {levelStructures.map(level => {
                        const levelColors: Record<string, string> = {
                            'A1': '#4CAF50', 'A2': '#8BC34A',
                            'B1': '#FF9800', 'B2': '#F57C00',
                            'C1': '#E91E63', 'C2': '#9C27B0'
                        };
                        const color = levelColors[level.level] || 'var(--accent-color)';
                        return (
                            <div key={level.level} style={{
                                ...cardStyle,
                                borderTop: `6px solid ${color}`,
                                padding: '2rem'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                    <span style={{
                                        background: color,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '1.5rem',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '12px',
                                        minWidth: '80px',
                                        textAlign: 'center',
                                        boxShadow: `0 4px 10px ${color}44`
                                    }}>
                                        {level.level}
                                    </span>
                                    <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: 500, lineHeight: 1.6 }}>
                                        {level.intro}
                                    </p>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                                    gap: '2.5rem',
                                    borderTop: '1px solid var(--border-color)',
                                    paddingTop: '2rem'
                                }}>
                                    {/* Basic Structure */}
                                    <div>
                                        <h4 style={{ color: color, fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                            Structure de base (Basic Structure)
                                        </h4>
                                        <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.8, margin: 0 }}>
                                            {level.structure}
                                        </p>
                                    </div>

                                    {/* Practical Example */}
                                    <div>
                                        <h4 style={{ color: color, fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                            Exemple Pratique (Practical Example)
                                        </h4>
                                        <div style={{
                                            background: 'var(--bg-primary)',
                                            padding: '1.5rem',
                                            borderRadius: '12px',
                                            border: '1px solid var(--border-color)',
                                            position: 'relative',
                                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                                        }}>
                                            <p style={{ margin: '0 0 1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                                Question: "{level.exampleQuestion}"
                                            </p>
                                            {level.exampleParts.map((part, pIdx) => (
                                                <div key={pIdx} style={{ marginBottom: pIdx === level.exampleParts.length - 1 ? 0 : '1rem' }}>
                                                    {part.label && (
                                                        <span style={{ color: color, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>
                                                            {part.label}:
                                                        </span>
                                                    )}
                                                    <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.5 }}>
                                                        "{part.text}"
                                                    </p>
                                                </div>
                                            ))}
                                            <button
                                                onClick={() => speakFrench(level.exampleParts.map(p => p.text).join(' '))}
                                                style={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    right: '15px',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: color,
                                                    opacity: 0.7,
                                                    transition: 'all 0.2s'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.opacity = '1';
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.opacity = '0.7';
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                                title="Écouter l'exemple complet"
                                            >
                                                <Volume2 size={24} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Progression Tips */}
                                    <div style={{ gridColumn: '1 / -1' }}>
                                        <h4 style={{ color: color, fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                            Conseils de progression (Progression Tips)
                                        </h4>
                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '1rem',
                                            lineHeight: 1.8,
                                            margin: 0,
                                            background: 'rgba(0,0,0,0.02)',
                                            padding: '1rem 1.5rem',
                                            borderRadius: '8px',
                                            borderLeft: `5px solid ${color}`
                                        }}>
                                            {level.tips}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    // ========================
    // 5. QUESTION LIST VIEW
    // ========================
    if (view === 'questions') {
        return (
            <div className="container" style={{ maxWidth: '900px', padding: '3rem 1rem' }}>
                <button
                    onClick={handleGoBack}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', marginBottom: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
                >
                    <ChevronLeft size={20} /> Retour aux catégories
                </button>

                <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--accent-color)', fontSize: '2rem' }}>
                    {selectedCategory}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {categoryQuestions.map((q) => (
                        <div
                            key={q.id}
                            onClick={() => handleQuestionSelect(q.id)}
                            style={{
                                ...cardStyle,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(5px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                            }}
                        >
                            <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>{q.question}</span>
                            <ChevronLeft size={20} style={{ transform: 'rotate(180deg)', color: 'var(--accent-color)' }} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // ========================
    // 3. PRACTICE VIEW
    // ========================
    if (!currentQuestion) return null;

    return (
        <div className="container" style={{ maxWidth: '900px', padding: '3rem 1rem' }}>
            <button
                onClick={handleGoBack}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', marginBottom: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
            >
                <ChevronLeft size={20} /> Retour aux questions
            </button>

            <div style={{
                ...cardStyle,
                padding: '3rem 2rem',
                textAlign: 'center',
                borderLeft: '6px solid var(--accent-color)',
                position: 'relative'
            }}>
                <div style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {selectedCategory}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', margin: 0 }}>
                        {currentQuestion.question}
                    </h2>
                    <button
                        onClick={() => speakFrench(currentQuestion.question)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#4CAF50' }}
                        aria-label="Speak question"
                    >
                        <Volume2 size={24} />
                    </button>
                </div>

                {isCountingDown ? (
                    <div style={{ marginBottom: '2.5rem' }}>
                        <div style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Enregistrement dans...</div>
                        <div style={{ fontSize: '5rem', fontWeight: 'bold', color: '#e74c3c' }}>{countdown}</div>
                    </div>
                ) : (
                    <div style={{ fontSize: '3.5rem', fontFamily: 'monospace', color: isRecording ? '#e74c3c' : 'var(--text-primary)', marginBottom: '2.5rem', fontWeight: 'bold' }}>
                        {formatTime(timer)}
                    </div>
                )}

                {!isRecording && !showResult && !isCountingDown && (
                    <button
                        onClick={handleStartClick}
                        style={{
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            border: '2px solid var(--accent-color)',
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
                    >
                        <Mic size={24} /> Commencer
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
                        <Square size={24} fill="white" /> Arrêter
                    </button>
                )}

                {showResult && (
                    <div className="result-area" style={{ marginTop: '3rem', animation: 'fadeIn 0.5s' }}>
                        <div style={{
                            background: 'var(--bg-primary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            textAlign: 'left',
                            marginBottom: '2rem',
                            border: '1px solid var(--border-color)'
                        }}>
                            <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Transcription</h4>
                            <p style={{ fontSize: '1.2rem', fontStyle: transcript ? 'normal' : 'italic', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                                {transcript || "(Aucune parole détectée)"}
                            </p>

                            {audioUrl && (
                                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                                    <h4 style={{ margin: '0 0 0.8rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Réécouter l'enregistrement</h4>
                                    <audio controls src={audioUrl} style={{ width: '100%', height: '40px' }} />
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '2rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Durée</div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3686C9' }}>{formatTime(timer)}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <button
                                onClick={handleStartClick}
                                style={{
                                    background: 'transparent',
                                    border: '2px solid var(--accent-color)',
                                    color: 'var(--text-primary)',
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
                                <RotateCcw size={18} /> Recommencer
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
