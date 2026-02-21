
import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Check, X, RefreshCw, Volume2 } from 'lucide-react';
import { writingData } from '../data/writingPrompts';
import type { WritingPrompt, TenseCategory } from '../data/writingPrompts';
import { speakFrench, speakEnglish } from '../utils/tts';

const WritingPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    // Initial selection logic
    const initialTense = searchParams.get('tense');
    const getLevelFromTense = (tenseName: string | null) => {
        if (!tenseName) return null;
        const category = writingData.find(c => c.name === tenseName);
        if (!category) return null;
        return getLevel(category.name);
    };

    const selectedTense = initialTense || writingData[0].name;
    const selectedLevel = searchParams.get('level') || getLevelFromTense(selectedTense) || 'A2';

    const direction = (searchParams.get('dir') as 'en-to-fr' | 'fr-to-en') || 'en-to-fr';

    const updateParams = (updates: Record<string, string>) => {
        const params = new URLSearchParams(searchParams);
        Object.entries(updates).forEach(([key, val]) => params.set(key, val));
        setSearchParams(params);
    };

    const handleLevelChange = (level: string) => {
        // Find first tense in that level
        const levelGroup = groupsWithItems.find(([l]) => l === level);
        if (levelGroup && levelGroup[1].length > 0) {
            updateParams({ level, tense: levelGroup[1][0].name });
        } else {
            updateParams({ level });
        }
    };

    const setSelectedTense = (val: string) => updateParams({ tense: val });
    const setDirection = (val: 'en-to-fr' | 'fr-to-en') => updateParams({ dir: val });
    const [currentPrompt, setCurrentPrompt] = useState<WritingPrompt | null>(null);
    const [userInput, setUserInput] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Helper to extract level from name
    const getLevel = (name: string) => {
        const match = name.match(/\(([A-Z][1-2])(?:.*)?\)/);
        return match ? match[1] : 'Themes';
    };

    // Group categories
    const groupsWithItems = useMemo(() => {
        const groups: Record<string, TenseCategory[]> = {
            'A1': [],
            'A2': [],
            'B1': [],
            'B2': [],
            'C1': [],
            'C2': [],
            'Themes': []
        };

        writingData.forEach(cat => {
            const level = getLevel(cat.name);
            groups[level].push(cat);
        });

        return Object.entries(groups)
            .filter(([_, items]) => items.length > 0)
            .sort(([a], [b]) => {
                if (a === 'Themes') return 1;
                if (b === 'Themes') return -1;
                return a.localeCompare(b);
            });
    }, []);

    const availableTensesForLevel = useMemo(() => {
        const group = groupsWithItems.find(([level]) => level === selectedLevel);
        return group ? group[1].sort((a, b) => a.name.localeCompare(b.name)) : [];
    }, [groupsWithItems, selectedLevel]);

    const frenchChars = ['é', 'è', 'ê', 'ë', 'à', 'â', 'ç', 'ù', 'û', 'ô', 'î', 'ï', 'œ'];

    const insertChar = (char: string) => {
        if (textareaRef.current) {
            const start = textareaRef.current.selectionStart;
            const end = textareaRef.current.selectionEnd;
            const newValue = userInput.substring(0, start) + char + userInput.substring(end);
            setUserInput(newValue);

            setTimeout(() => {
                if (textareaRef.current) {
                    textareaRef.current.focus();
                    textareaRef.current.setSelectionRange(start + char.length, start + char.length);
                }
            }, 0);
        } else {
            setUserInput(prev => prev + char);
        }
    };

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
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#3686C9', fontWeight: 'bold', marginBottom: '2rem' }}>
                (Writing Practice)
            </p>

            {/* Controls Container */}
            <div className="writing-controls" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {/* Level Selection */}
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        Select Level:
                    </label>
                    <select
                        value={selectedLevel}
                        onChange={(e) => handleLevelChange(e.target.value)}
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
                        {groupsWithItems.map(([level]) => (
                            <option key={level} value={level}>
                                {level === 'Themes' ? 'Themes' : `Level ${level}`}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Tense Selection */}
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        Select Topic:
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
                        {availableTensesForLevel.map(cat => (
                            <option key={cat.name} value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                {/* Direction Toggle */}
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        Direction:
                    </label>
                    <button
                        onClick={() => setDirection(direction === 'en-to-fr' ? 'fr-to-en' : 'en-to-fr')}
                        style={{
                            width: '100%',
                            height: '54px', // Align with select height
                            padding: '0 1rem',
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
                        {direction === 'en-to-fr' ? 'EN → FR' : 'FR → EN'}
                    </button>
                </div>
            </div>

            {/* Practice Area */}
            {currentPrompt && (
                <div className="writing-card" style={{
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-hover)',
                    borderLeft: '6px solid var(--primary-color)'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            background: 'rgba(0, 188, 212, 0.2)',
                            color: 'var(--accent-cyan)',
                            fontSize: '0.875rem',
                            marginBottom: '1rem',
                            fontWeight: 600
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
                                    color: 'var(--success-color)',
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
                            ref={textareaRef}
                            className="writing-textarea"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder={direction === 'en-to-fr' ? "Type the French translation here..." : "Type the English translation here..."}
                            rows={3}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `2px solid ${feedback === 'correct' ? 'var(--success-color)' : feedback === 'incorrect' ? '#FF5252' : 'var(--border-color)'}`,
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

                        {!showAnswer && (
                            <div style={{
                                display: 'flex',
                                gap: '0.4rem',
                                flexWrap: 'wrap',
                                marginTop: '1rem',
                                padding: '0.75rem',
                                background: 'var(--bg-primary)',
                                borderRadius: '8px'
                            }}>
                                {frenchChars.map(char => (
                                    <button
                                        key={char}
                                        onClick={() => insertChar(char)}
                                        type="button"
                                        style={{
                                            padding: '0.4rem 0.7rem',
                                            minWidth: '2.2rem',
                                            textAlign: 'center',
                                            borderRadius: '8px'
                                        }}
                                    >
                                        {char}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Feedback Section */}
                    {showAnswer && (
                        <>
                            <div style={{
                                marginBottom: '1.5rem',
                                padding: '1rem',
                                borderRadius: '8px',
                                background: feedback === 'correct' ? 'rgba(0, 200, 83, 0.1)' : 'rgba(255, 82, 82, 0.1)',
                                borderLeft: `6px solid ${feedback === 'correct' ? 'var(--success-color)' : '#FF5252'}`
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold', color: feedback === 'correct' ? 'var(--success-color)' : '#FF5252' }}>
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
                                                    color: 'var(--success-color)',
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
                                        border: '1px solid var(--success-color)',
                                        background: 'rgba(0, 200, 83, 0.1)',
                                        color: 'var(--success-color)',
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
                                        border: '1px solid var(--accent-cyan)',
                                        background: 'rgba(54, 134, 201, 0.1)',
                                        color: 'var(--accent-cyan)',
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
                                className="btn-primary"
                                onClick={handleCheck}
                                disabled={!userInput.trim()}
                                style={{
                                    flex: 1,
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
                                className="btn-primary"
                                onClick={pickRandomPrompt}
                                style={{
                                    flex: 1,
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
