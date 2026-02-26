import React, { useState, useEffect, useMemo } from 'react';
import { vocabularyData } from '../data/vocabulary';
import type { VocabularyItem } from '../data/vocabulary';
import { Volume2, CheckCircle, XCircle, RefreshCw, Type } from 'lucide-react';
import { speakFrench } from '../utils/tts';

// Extract all flat items
const getAllVocabItems = (): VocabularyItem[] => {
    const allItems: VocabularyItem[] = [];
    vocabularyData.forEach(section => {
        if (section.items) {
            allItems.push(...section.items);
        }
        if (section.subsections) {
            section.subsections.forEach(sub => {
                if (sub.items) {
                    allItems.push(...sub.items);
                }
            });
        }
    });
    // Remove duplicates based on French term just in case
    const unique = allItems.filter((item, index, self) =>
        index === self.findIndex((t) => t.fr === item.fr && t.en === item.en)
    );
    return unique;
};

const CHARACTERS = ['é', 'è', 'ê', 'ë', 'à', 'â', 'ç', 'î', 'ï', 'ô', 'ù', 'û', 'ü', 'œ', 'æ', 'É', 'È', 'Ê', 'Ë', 'À', 'Â', 'Ç', 'Î', 'Ï', 'Ô', 'Ù', 'Û', 'Ü', 'Œ', 'Æ'];

const shuffleArray = <T,>(array: T[]): T[] => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

const VocabularyFillBlankQuiz: React.FC = () => {
    const [quizItems, setQuizItems] = useState<VocabularyItem[]>([]);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [focusedInput, setFocusedInput] = useState<number | null>(null);

    const generateQuiz = () => {
        const allVocab = getAllVocabItems();
        const randomItems = shuffleArray(allVocab).slice(0, 10);
        setQuizItems(randomItems);
        setAnswers({});
        setShowResults(false);
        setFocusedInput(null);
    };

    // Generate initial quiz on mount
    useEffect(() => {
        generateQuiz();
    }, []);

    const handleInputChange = (index: number, value: string) => {
        if (!showResults) {
            setAnswers(prev => ({ ...prev, [index]: value }));
        }
    };

    const insertCharacter = (char: string) => {
        if (focusedInput !== null && !showResults) {
            const currentVal = answers[focusedInput] || '';

            // Just append for simplicity. A real cursor-based insertion is complex but appending is usually fine for these small words
            setAnswers(prev => ({ ...prev, [focusedInput]: currentVal + char }));

            // Refocus the input
            const inputEl = document.getElementById(`vocab-input-${focusedInput}`);
            if (inputEl) {
                inputEl.focus();
            }
        }
    };

    const normalizeString = (str: string) => {
        return str.toLowerCase().trim().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ""); // Basic punctuation strip
    };

    const checkAnswers = () => {
        setShowResults(true);
    };

    const score = useMemo(() => {
        return quizItems.reduce((acc, item, index) => {
            const userAns = normalizeString(answers[index] || '');

            // Handle multiple correct forms e.g. "le frère" or just "frère", or "l'acteur (m) / l'actrice (f)"
            // A simple inclusive check: if user answer is substantial and included in the target, or exact match.
            // But to be precise, let's strip articles strictly or require them. We will require exact match for simplicity but ignore case.
            // Alternatively, check if the string includes the user's answer if the answer is > 3 chars?
            // Actually, we'll strip common articles for checking if they missed it, or just do a strict normalized match.

            // To be generous, if the answer exactly matches any listed options or without articles
            let correct = false;
            const possibleAnswers = normalizeString(item.fr).split('/').map(a => a.trim());

            for (const possible of possibleAnswers) {
                // Remove parentheticals like (m), (f), (jouet)
                const cleanPossible = possible.replace(/\(.*?\)/g, '').trim();

                // Also create a version without articles "le ", "la ", "l'", "les "
                const noArticle = cleanPossible.replace(/^(le |la |l'|les )/, '').trim();

                if (userAns === cleanPossible || userAns === noArticle) {
                    correct = true;
                    break;
                }
            }
            return acc + (correct ? 1 : 0);
        }, 0);
    }, [answers, quizItems, showResults]); // Only re-calc when these change

    if (quizItems.length === 0) return <div>Loading quiz...</div>;

    return (
        <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--accent-color)', margin: 0, fontSize: '1.4rem' }}>Vocabulary Practice Quiz</h3>
            </div>

            <p style={{ color: 'var(--text-primary)', fontWeight: 'bold', marginBottom: '0.2rem' }}>
                Translate the English words to French. (Articles like 'le', 'la' are recommended but optional)
            </p>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                Traduisez les mots anglais en français.
            </p>

            {/* Special Characters Keyboard */}
            <div style={{ background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '8px', marginBottom: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', border: '1px solid var(--border-color)' }}>
                <Type size={18} color="var(--text-secondary)" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginRight: '0.5rem' }}>Accents:</span>
                {CHARACTERS.map(char => (
                    <button
                        key={char}
                        onClick={(e) => { e.preventDefault(); insertCharacter(char); }}
                        disabled={showResults || focusedInput === null}
                        style={{
                            padding: '0.4rem 0.8rem',
                            background: (showResults || focusedInput === null) ? 'rgba(0,0,0,0.05)' : 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '4px',
                            cursor: (showResults || focusedInput === null) ? 'not-allowed' : 'pointer',
                            fontSize: '1.1rem',
                            color: 'var(--text-primary)'
                        }}
                    >
                        {char}
                    </button>
                ))}
            </div>

            {/* Quiz Items */}
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {quizItems.map((item, index) => {
                    const userAns = normalizeString(answers[index] || '');
                    let isCorrect = false;

                    if (showResults) {
                        const possibleAnswers = normalizeString(item.fr).split('/').map(a => a.trim());
                        for (const possible of possibleAnswers) {
                            const cleanPossible = possible.replace(/\(.*?\)/g, '').trim();
                            const noArticle = cleanPossible.replace(/^(le |la |l'|les )/, '').trim();
                            if (userAns === cleanPossible || userAns === noArticle) {
                                isCorrect = true;
                                break;
                            }
                        }
                    }

                    return (
                        <div key={index} style={{
                            background: 'var(--bg-primary)',
                            padding: '1.2rem',
                            borderRadius: '8px',
                            borderLeft: `4px solid ${showResults ? (isCorrect ? 'var(--success-color)' : 'var(--error-color)') : 'var(--primary-color)'}`,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', alignItems: 'center' }}>
                                <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{item.en}</strong>
                                <button
                                    onClick={() => speakFrench(item.fr)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'var(--accent-color)',
                                        padding: '0.2rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    title="Écouter en français"
                                >
                                    <Volume2 size={20} />
                                </button>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                                <input
                                    id={`vocab-input-${index}`}
                                    type="text"
                                    value={answers[index] || ''}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    onFocus={() => setFocusedInput(index)}
                                    placeholder="En français..."
                                    disabled={showResults}
                                    style={{
                                        flex: 1,
                                        padding: '0.6rem 1rem',
                                        fontSize: '1rem',
                                        borderRadius: '6px',
                                        border: `1px solid ${showResults ? (isCorrect ? 'var(--success-color)' : 'var(--error-color)') : 'var(--border-color)'}`,
                                        background: 'var(--bg-secondary)',
                                        color: 'var(--text-primary)',
                                        outline: 'none',
                                    }}
                                />

                                {showResults && (
                                    <span>
                                        {isCorrect ? <CheckCircle color="var(--success-color)" size={24} /> : <XCircle color="var(--error-color)" size={24} />}
                                    </span>
                                )}
                            </div>

                            {showResults && !isCorrect && (
                                <div style={{ marginTop: '0.75rem', padding: '0.5rem', background: 'rgba(211, 47, 47, 0.05)', borderRadius: '4px', border: '1px solid rgba(211, 47, 47, 0.2)' }}>
                                    <strong style={{ color: 'var(--error-color)', fontSize: '0.9rem' }}>Correct: </strong>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{item.fr}</span>
                                    <button onClick={() => speakFrench(item.fr)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                                        <Volume2 size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {!showResults ? (
                    <button
                        onClick={checkAnswers}
                        style={{
                            padding: '0.8rem 2rem',
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                    >
                        Check Answers
                    </button>
                ) : (
                    <>
                        <div style={{ padding: '0.8rem 1.5rem', background: score >= 7 ? 'rgba(0, 200, 83, 0.1)' : 'rgba(211, 47, 47, 0.1)', borderRadius: '8px', border: `1px solid ${score >= 7 ? 'var(--success-color)' : 'var(--error-color)'}`, fontWeight: 'bold', fontSize: '1.2rem', color: score >= 7 ? 'var(--success-color)' : 'var(--error-color)' }}>
                            Score: {score} / 10
                        </div>
                        <button
                            onClick={generateQuiz}
                            style={{
                                padding: '0.8rem 1.5rem',
                                background: 'transparent',
                                color: 'var(--primary-color)',
                                border: '2px solid var(--primary-color)',
                                borderRadius: '8px',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.2s'
                            }}
                        >
                            <RefreshCw size={18} /> Generate New Quiz
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default VocabularyFillBlankQuiz;
