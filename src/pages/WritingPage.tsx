
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Check, X, RefreshCw, Volume2 } from 'lucide-react';
import { writingData } from '../data/writingPrompts';
import type { WritingPrompt } from '../data/writingPrompts';
import { speakFrench, speakEnglish } from '../utils/tts';

const WritingPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedTense = searchParams.get('tense') || writingData[0].name;
    const direction = (searchParams.get('dir') as 'en-to-fr' | 'fr-to-en') || 'en-to-fr';
    const setSelectedTense = (val: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('tense', val);
        setSearchParams(params);
    };
    const setDirection = (val: 'en-to-fr' | 'fr-to-en') => {
        const params = new URLSearchParams(searchParams);
        params.set('dir', val);
        setSearchParams(params);
    };
    const [currentPrompt, setCurrentPrompt] = useState<WritingPrompt | null>(null);
    const [userInput, setUserInput] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

    // Get prompts for the selected tense
    const availablePrompts = useMemo(() => {
        const category = writingData.find(c => c.name === selectedTense);
        return category ? category.prompts : [];
    }, [selectedTense]);

    // Function to pick a random prompt
    const pickRandomPrompt = () => {
        if (availablePrompts.length > 0) {
            const randomIndex = Math.floor(Math.random() * availablePrompts.length);
            setCurrentPrompt(availablePrompts[randomIndex]);
            setUserInput('');
            setShowAnswer(false);
            setFeedback(null);
        }
    };

    // Pick a prompt when tense changes or on mount
    useEffect(() => {
        pickRandomPrompt();
    }, [selectedTense, availablePrompts, direction]);

    const handleCheck = () => {
        if (!currentPrompt) return;

        // Simple normalization for comparison (remove extra spaces, case insensitive)
        const normalize = (str: string) => str.trim().toLowerCase().replace(/[.,!?;:]/g, '');
        const userNorm = normalize(userInput);

        const targetText = direction === 'en-to-fr' ? currentPrompt.french : currentPrompt.english;
        const correctNorm = normalize(targetText);

        if (userNorm === correctNorm) {
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
        setShowAnswer(true);
    };

    return (
        <div className="writing-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '0.25rem', color: '#E0E2D2', textTransform: 'uppercase' }}>
                Pratique d'Écriture
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#B4C540', fontWeight: 'bold', marginBottom: '2rem' }}>
                (Writing Practice)
            </p>

            {/* Controls Container */}
            <div className="writing-controls" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {/* Tense Selection */}
                <div style={{ flex: 2, minWidth: '200px' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        Select Tense / Mood:
                    </label>
                    <select
                        value={selectedTense}
                        onChange={(e) => setSelectedTense(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '12px',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem'
                        }}
                    >
                        {writingData.sort((a, b) => a.name.localeCompare(b.name)).map(cat => (
                            <option key={cat.name} value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                {/* Direction Toggle */}
                <div style={{ flex: 1, minWidth: '200px' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        Direction:
                    </label>
                    <button
                        onClick={() => setDirection(direction === 'en-to-fr' ? 'fr-to-en' : 'en-to-fr')}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '12px',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <RefreshCw size={18} />
                        {direction === 'en-to-fr' ? 'English → French' : 'French → English'}
                    </button>
                </div>
            </div>

            {/* Practice Area */}
            {currentPrompt && (
                <div className="writing-card" style={{
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    border: '1px solid var(--border-color)'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            background: 'rgba(54, 134, 201, 0.2)',
                            color: '#3686C9',
                            fontSize: '0.875rem',
                            marginBottom: '1rem'
                        }}>
                            {direction === 'en-to-fr' ? 'Translate to French' : 'Translate to English'}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <h2 className="writing-prompt-text" style={{ fontSize: '1.5rem', lineHeight: '1.4', flex: 1 }}>
                                {direction === 'en-to-fr' ? currentPrompt.english : currentPrompt.french}
                            </h2>
                            <button
                                onClick={() => direction === 'en-to-fr' ? speakEnglish(currentPrompt.english) : speakFrench(currentPrompt.french)}
                                title="Listen to sentence"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#4CAF50',
                                    padding: '0.5rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexShrink: 0
                                }}
                            >
                                <Volume2 size={24} />
                            </button>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <textarea
                            className="writing-textarea"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder={direction === 'en-to-fr' ? "Type the French translation here..." : "Type the English translation here..."}
                            rows={3}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `2px solid ${feedback === 'correct' ? '#4CAF50' : feedback === 'incorrect' ? '#FF5252' : 'var(--border-color)'}`,
                                background: 'var(--bg-primary)',
                                color: 'var(--text-primary)',
                                fontSize: '1.1rem',
                                resize: 'vertical',
                                boxSizing: 'border-box'
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    if (!showAnswer) handleCheck();
                                    else pickRandomPrompt();
                                }
                            }}
                        />
                    </div>

                    {/* Feedback Section */}
                    {showAnswer && (
                        <>
                            <div style={{
                                marginBottom: '1.5rem',
                                padding: '1rem',
                                borderRadius: '8px',
                                background: feedback === 'correct' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 82, 82, 0.1)',
                                borderLeft: `4px solid ${feedback === 'correct' ? '#4CAF50' : '#FF5252'}`
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold', color: feedback === 'correct' ? '#4CAF50' : '#FF5252' }}>
                                    {feedback === 'correct' ? <Check size={20} /> : <X size={20} />}
                                    {feedback === 'correct' ? 'Correct!' : 'Incorrect'}
                                </div>

                                {feedback === 'incorrect' && (
                                    <div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Correct Answer:</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '500', flex: 1 }}>
                                                {direction === 'en-to-fr' ? currentPrompt.french : currentPrompt.english}
                                            </div>
                                            <button
                                                onClick={() => direction === 'en-to-fr' ? speakFrench(currentPrompt.french) : speakEnglish(currentPrompt.english)}
                                                title="Listen to correct answer"
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: '#4CAF50',
                                                    padding: '0.25rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexShrink: 0
                                                }}
                                            >
                                                <Volume2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Full sentence TTS after answer revealed */}
                            <div className="writing-tts-buttons" style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <button
                                    onClick={() => speakFrench(currentPrompt.french)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '8px',
                                        border: '1px solid #4CAF50',
                                        background: 'rgba(76, 175, 80, 0.1)',
                                        color: '#4CAF50',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    <Volume2 size={16} />
                                    Listen in French
                                </button>
                                <button
                                    onClick={() => speakEnglish(currentPrompt.english)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '8px',
                                        border: '1px solid #3686C9',
                                        background: 'rgba(54, 134, 201, 0.1)',
                                        color: '#3686C9',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    <Volume2 size={16} />
                                    Listen in English
                                </button>
                            </div>
                        </>
                    )}

                    {/* Actions */}
                    <div className="writing-actions" style={{ display: 'flex', gap: '1rem' }}>
                        {!showAnswer ? (
                            <button
                                onClick={handleCheck}
                                disabled={!userInput.trim()}
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: '#4CAF50',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: userInput.trim() ? 'pointer' : 'not-allowed',
                                    opacity: userInput.trim() ? 1 : 0.7,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Check size={20} />
                                Check Answer
                            </button>
                        ) : (
                            <button
                                onClick={pickRandomPrompt}
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: '#3686C9',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <ArrowRight size={20} />
                                Next Sentence
                            </button>
                        )}

                        <button
                            onClick={pickRandomPrompt}
                            title="Skip / New Sentence"
                            style={{
                                padding: '1rem',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)',
                                background: 'transparent',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer'
                            }}
                        >
                            <RefreshCw size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WritingPage;
