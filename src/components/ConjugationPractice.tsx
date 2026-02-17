import { useState, useMemo, useEffect } from 'react';
import { X, Check, RefreshCw } from 'lucide-react';
import type { VerbDefinition } from '../data/types';

interface ConjugationPracticeProps {
    verb: VerbDefinition;
    onClose: () => void;
}

const ConjugationPractice = ({ verb, onClose }: ConjugationPracticeProps) => {
    // Flatten available tenses for the dropdown
    const availableTenses = useMemo(() => {
        const options: { mood: string; tense: string; label: string }[] = [];

        // Order of moods to display
        const moodOrder = ['Indicatif', 'Subjonctif', 'Conditionnel', 'Impératif', 'Participe'];

        moodOrder.forEach(mood => {
            const moodData = verb.conjugations[mood as keyof typeof verb.conjugations];
            if (moodData) {
                Object.keys(moodData).forEach(tense => {
                    options.push({
                        mood,
                        tense,
                        label: `${mood} - ${tense}`
                    });
                });
            }
        });
        return options;
    }, [verb]);

    const [selectedOption, setSelectedOption] = useState(availableTenses[0]);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    // Reset when tense changes
    useEffect(() => {
        setUserAnswers({});
        setShowResults(false);
        setScore({ correct: 0, total: 0 });
    }, [selectedOption]);

    const currentConjugations = useMemo(() => {
        if (!selectedOption) return [];
        // @ts-ignore - dynamic access is safe here given how we built the list
        return verb.conjugations[selectedOption.mood][selectedOption.tense] || [];
    }, [verb, selectedOption]);

    const handleInputChange = (pronoun: string, value: string) => {
        if (showResults) return; // Prevent editing after check
        setUserAnswers(prev => ({
            ...prev,
            [pronoun]: value
        }));
    };

    const normalize = (str: string) => str.trim().toLowerCase().replace(/\s+/g, ' ');

    const handleCheck = () => {
        let correctCount = 0;
        currentConjugations.forEach((c: { pronoun: string; form: string }) => {
            const user = normalize(userAnswers[c.pronoun] || '');
            const correct = normalize(c.form);
            if (user === correct) {
                correctCount++;
            }
        });
        setScore({ correct: correctCount, total: currentConjugations.length });
        setShowResults(true);
    };

    const handleRetry = () => {
        setUserAnswers({});
        setShowResults(false);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '1rem'
        }}>
            <div className="conjugation-practice-modal" style={{
                background: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '800px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                border: '1px solid var(--border-color)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '1rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                    }}
                >
                    <X size={24} />
                </button>

                <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                    Practice: {verb.infinitive}
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Test your conjugation skills.
                </p>

                {/* Tense Selection */}
                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        Select Tense:
                    </label>
                    <select
                        value={`${selectedOption.mood}-${selectedOption.tense}`}
                        onChange={(e) => {
                            const [mood, tense] = e.target.value.split('-');
                            const opt = availableTenses.find(o => o.mood === mood && o.tense === tense);
                            if (opt) setSelectedOption(opt);
                        }}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem'
                        }}
                    >
                        {availableTenses.map(opt => (
                            <option key={`${opt.mood}-${opt.tense}`} value={`${opt.mood}-${opt.tense}`}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Practice Table */}
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>Pronoun</th>
                                <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>Your Answer</th>
                                {showResults && (
                                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border-color)', color: '#4CAF50' }}>Correct Answer</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {currentConjugations.map((c: { pronoun: string; form: string }, idx: number) => {
                                const isCorrect = normalize(userAnswers[c.pronoun] || '') === normalize(c.form);
                                return (
                                    <tr key={idx} style={{ borderBottom: '1px solid var(--bg-primary)' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                                            {c.pronoun}
                                        </td>
                                        <td style={{ padding: '0.5rem' }}>
                                            <input
                                                type="text"
                                                value={userAnswers[c.pronoun] || ''}
                                                onChange={(e) => handleInputChange(c.pronoun, e.target.value)}
                                                disabled={showResults}
                                                placeholder="..."
                                                autoComplete="off"
                                                spellCheck={false}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    borderRadius: '6px',
                                                    border: showResults
                                                        ? `1px solid ${isCorrect ? '#4CAF50' : '#FF5252'}`
                                                        : '1px solid var(--border-color)',
                                                    background: showResults
                                                        ? (isCorrect ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 82, 82, 0.1)')
                                                        : 'var(--bg-primary)',
                                                    color: 'var(--text-primary)',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                        </td>
                                        {showResults && (
                                            <td style={{ padding: '1rem', color: isCorrect ? '#4CAF50' : '#FF5252' }}>
                                                {!isCorrect && (
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <span style={{ fontWeight: 'bold' }}>{c.form}</span>
                                                    </div>
                                                )}
                                                {isCorrect && <Check size={20} />}
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Results */}
                <div className="practice-footer" style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {showResults && (
                        <div style={{ marginRight: 'auto', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            Score: <span style={{ color: score.correct === score.total ? '#4CAF50' : '#FF5252' }}>{score.correct} / {score.total}</span>
                        </div>
                    )}

                    {!showResults ? (
                        <button
                            onClick={handleCheck}
                            style={{
                                padding: '1rem 2rem',
                                background: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <Check size={20} /> Check Answers
                        </button>
                    ) : (
                        <button
                            onClick={handleRetry}
                            style={{
                                padding: '1rem 2rem',
                                background: 'transparent',
                                border: '1px solid var(--text-secondary)',
                                color: 'var(--text-primary)',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <RefreshCw size={20} /> Retry
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConjugationPractice;
