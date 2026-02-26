import React, { useState } from 'react';
import { CheckCircle2, XCircle, Type, Volume2 } from 'lucide-react';
import { speakFrench } from '../utils/tts';

const CHARACTERS = ['é', 'è', 'ê', 'ë', 'à', 'â', 'ç', 'î', 'ï', 'ô', 'ù', 'û', 'ü', 'œ', 'æ', 'É', 'È', 'Ê', 'Ë', 'À', 'Â', 'Ç', 'Î', 'Ï', 'Ô', 'Ù', 'Û', 'Ü', 'Œ', 'Æ'];

interface TimeQuestion {
    digital: string;
    answer: string;
}

// Generate simple time ranges for the quiz
const timeQuestions: TimeQuestion[] = [
    { digital: '01:00', answer: 'il est une heure' },
    { digital: '02:00', answer: 'il est deux heures' },
    { digital: '12:00', answer: 'il est midi' },
    { digital: '00:00', answer: 'il est minuit' },
    { digital: '10:15', answer: 'il est dix heures et quart' },
    { digital: '15:30', answer: 'il est quinze heures trente' },
    { digital: '08:45', answer: 'il est neuf heures moins le quart' },
    { digital: '07:10', answer: 'il est sept heures dix' },
    { digital: '18:50', answer: 'il est dix-neuf heures moins dix' },
    { digital: '20:00', answer: 'il est vingt heures' },
];

export const TimePracticeQuiz: React.FC = () => {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [focusedInput, setFocusedInput] = useState<number | null>(null);

    const handleInputChange = (index: number, value: string) => {
        setAnswers({
            ...answers,
            [index]: value
        });
        if (isSubmitted) setIsSubmitted(false);
    };

    const insertCharacter = (char: string) => {
        if (focusedInput !== null && !isSubmitted) {
            const currentVal = answers[focusedInput] || '';
            setAnswers(prev => ({ ...prev, [focusedInput]: currentVal + char }));
            const inputEl = document.getElementById(`time-input-${focusedInput}`);
            if (inputEl) {
                inputEl.focus();
            }
        }
    };

    const normalizeString = (str: string) => {
        return str
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove accents
            .replace(/[^a-z0-9 ]/g, ""); // Remove punctuation
    };

    const checkAnswers = () => {
        let currentScore = 0;
        timeQuestions.forEach((q, index) => {
            const userAnswer = answers[index] || '';
            if (normalizeString(userAnswer) === normalizeString(q.answer)) {
                currentScore += 1;
            }
        });
        setScore(currentScore);
        setIsSubmitted(true);
    };

    return (
        <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <h3 style={{
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                fontSize: '1.4rem'
            }}>
                Quelle heure est-il ? (What time is it?)
            </h3>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.5' }}>
                Write the digital time out in complete French sentences. Don't forget to start with "Il est...".
                <br />
                <em style={{ fontSize: '0.9em', color: 'var(--accent-cyan)' }}>Ex: 08:30 → il est huit heures trente</em>
            </p>

            {/* Special Characters Keyboard */}
            <div style={{ background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '8px', marginBottom: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', border: '1px solid var(--border-color)' }}>
                <Type size={18} color="var(--text-secondary)" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginRight: '0.5rem' }}>Accents:</span>
                {CHARACTERS.map(char => (
                    <button
                        key={char}
                        onClick={(e) => { e.preventDefault(); insertCharacter(char); }}
                        disabled={isSubmitted || focusedInput === null}
                        style={{
                            padding: '0.4rem 0.8rem',
                            background: (isSubmitted || focusedInput === null) ? 'rgba(0,0,0,0.05)' : 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '4px',
                            cursor: (isSubmitted || focusedInput === null) ? 'not-allowed' : 'pointer',
                            fontSize: '1.1rem',
                            color: 'var(--text-primary)'
                        }}
                    >
                        {char}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                {timeQuestions.map((q, index) => {
                    const userAnswer = answers[index] || '';
                    const isCorrect = isSubmitted && normalizeString(userAnswer) === normalizeString(q.answer);
                    const isWrong = isSubmitted && !isCorrect && userAnswer.trim() !== '';

                    return (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            padding: '1rem',
                            background: 'var(--bg-primary)',
                            borderRadius: '12px',
                            border: `1px solid ${isCorrect ? 'var(--success-color)' : isWrong ? 'var(--error-color)' : 'var(--border-color)'}`
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    background: 'var(--primary-color)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    minWidth: '80px',
                                    textAlign: 'center',
                                    letterSpacing: '2px'
                                }}>
                                    {q.digital}
                                </div>

                                <input
                                    id={`time-input-${index}`}
                                    type="text"
                                    value={userAnswer}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    onFocus={() => setFocusedInput(index)}
                                    placeholder="il est..."
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem 1rem',
                                        fontSize: '1rem',
                                        borderRadius: '8px',
                                        border: `2px solid ${isCorrect ? 'var(--success-color)' : isWrong ? 'var(--error-color)' : 'var(--border-color)'}`,
                                        background: 'transparent',
                                        color: 'var(--text-primary)',
                                        outline: 'none'
                                    }}
                                />

                                {isSubmitted && (
                                    <div style={{ marginLeft: '1rem' }}>
                                        {isCorrect ? (
                                            <CheckCircle2 color="var(--success-color)" size={24} />
                                        ) : (
                                            <XCircle color="var(--error-color)" size={24} />
                                        )}
                                    </div>
                                )}
                            </div>

                            {isSubmitted && !isCorrect && (
                                <div style={{
                                    color: 'var(--success-color)',
                                    fontSize: '0.9rem',
                                    marginTop: '0.5rem',
                                    padding: '0.5rem',
                                    background: 'rgba(0, 200, 83, 0.1)',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    Réponse attendue : <strong>{q.answer}</strong>
                                    <button onClick={() => speakFrench(q.answer)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', padding: 0, display: 'flex' }} title="Écouter la réponse">
                                        <Volume2 size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                    onClick={checkAnswers}
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        background: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s, transform 0.1s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Vérifier les réponses (Check Answers)
                </button>

                {isSubmitted && (
                    <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: score === timeQuestions.length ? 'var(--success-color)' : 'var(--text-primary)',
                        background: 'var(--bg-primary)',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '12px',
                        border: `2px solid ${score === timeQuestions.length ? 'var(--success-color)' : 'var(--border-color)'}`
                    }}>
                        Score : {score} / {timeQuestions.length}
                    </div>
                )}
            </div>
        </div>
    );
};
