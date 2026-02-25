import React, { useState, useEffect } from 'react';
import type { GrammarQuizLevel } from '../data/grammarQuiz';
import { Volume2, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { speakFrench } from '../utils/tts';

interface Props {
    levelData: GrammarQuizLevel;
}

const GrammarDragDropQuiz: React.FC<Props> = ({ levelData }) => {
    // Check if the current environment is likely a touch device
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [selectedDraggable, setSelectedDraggable] = useState<string | null>(null);
    const [showResults, setShowResults] = useState(false);

    const handleDragStart = (e: React.DragEvent, word: string) => {
        e.dataTransfer.setData('text/plain', word);
        setSelectedDraggable(word);
    };

    const handleDrop = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        const word = e.dataTransfer.getData('text/plain');
        if (word && !showResults) {
            setAnswers(prev => ({ ...prev, [index]: word }));
            setSelectedDraggable(null);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    // Mobile fallback: click word, then click blank
    const handleWordClick = (word: string) => {
        if (!showResults) {
            setSelectedDraggable(word === selectedDraggable ? null : word);
        }
    };

    const handleBlankClick = (index: number) => {
        if (!showResults) {
            if (selectedDraggable) {
                setAnswers(prev => ({ ...prev, [index]: selectedDraggable }));
                setSelectedDraggable(null);
            } else if (answers[index]) {
                // Remove answer if clicking an already filled blank without a selected word
                const newAnswers = { ...answers };
                delete newAnswers[index];
                setAnswers(newAnswers);
            }
        }
    };

    const checkAnswers = () => {
        setShowResults(true);
    };

    const resetQuiz = () => {
        setAnswers({});
        setShowResults(false);
        setSelectedDraggable(null);
    };

    const score = levelData.sentences.reduce((acc, sentence, index) => {
        return acc + (answers[index] === sentence.answer ? 1 : 0);
    }, 0);

    const isComplete = Object.keys(answers).length === levelData.sentences.length;

    // Filter out words that are already correctly used? No, keep all available or just cross them out
    // Let's just keep them all available so they can change their mind, but maybe visually indicate if used.
    const usedAnswers = Object.values(answers);

    return (
        <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--accent-color)', margin: 0, fontSize: '1.4rem' }}>{levelData.level}</h3>
            </div>

            <p style={{ color: 'var(--text-primary)', fontWeight: 'bold', marginBottom: '0.2rem' }}>
                {levelData.instructionFr}
                <button onClick={() => speakFrench(levelData.instructionFr)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                    <Volume2 size={16} />
                </button>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>{levelData.instructionEn}</p>

            {isTouchDevice && !showResults && (
                <div style={{ background: 'rgba(0,120,212,0.1)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', color: 'var(--primary-color)', fontSize: '0.9rem' }}>
                    💡 <strong>Astuce (Tip):</strong> Tap a word below, then tap a blank to fill it. Tap a filled blank to clear it.
                </div>
            )}

            {/* Draggables Bank */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem', padding: '1rem', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px dashed var(--border-color)' }}>
                {levelData.draggables.map((word, idx) => {
                    const isUsed = usedAnswers.includes(word);
                    const isSelected = selectedDraggable === word;
                    return (
                        <div
                            key={idx}
                            draggable={!showResults}
                            onDragStart={(e) => handleDragStart(e, word)}
                            onClick={() => handleWordClick(word)}
                            style={{
                                padding: '0.5rem 1rem',
                                background: isSelected ? 'var(--primary-color)' : (isUsed ? 'var(--bg-secondary)' : 'var(--bg-primary)'),
                                color: isSelected ? 'white' : (isUsed ? 'var(--text-secondary)' : 'var(--text-primary)'),
                                border: `2px solid ${isSelected ? 'var(--primary-color)' : 'var(--border-color)'}`,
                                borderRadius: '20px',
                                cursor: showResults ? 'default' : 'grab',
                                userSelect: 'none',
                                opacity: isUsed && !isSelected ? 0.5 : 1,
                                fontWeight: 'bold',
                                boxShadow: isSelected ? '0 4px 8px rgba(0,0,0,0.2)' : 'none',
                                transition: 'all 0.2s',
                                touchAction: 'manipulation' // Better touch handling
                            }}
                        >
                            {word}
                        </div>
                    );
                })}
            </div>

            {/* Sentences */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {levelData.sentences.map((sentence, index) => {
                    const userAnswer = answers[index];
                    const isCorrect = userAnswer === sentence.answer;

                    return (
                        <div key={index} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                            <span>{index + 1}. </span>
                            <span>{sentence.textParts[0]}</span>
                            <span
                                onDrop={(e) => handleDrop(e, index)}
                                onDragOver={handleDragOver}
                                onClick={() => handleBlankClick(index)}
                                style={{
                                    display: 'inline-block',
                                    minWidth: '100px',
                                    padding: userAnswer ? '0 0.5rem' : '0 1.5rem',
                                    margin: '0 0.5rem',
                                    borderBottom: (showResults && isCorrect) ? '2px solid var(--success-color)' : (showResults && !isCorrect) ? '2px solid var(--error-color)' : '2px solid var(--primary-color)',
                                    background: userAnswer ? 'var(--bg-primary)' : 'rgba(0,0,0,0.02)',
                                    color: (showResults && isCorrect) ? 'var(--success-color)' : (showResults && !isCorrect) ? 'var(--error-color)' : 'var(--accent-color)',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    cursor: showResults ? 'default' : 'pointer',
                                    transition: 'all 0.2s',
                                    minHeight: '1.5em',
                                    verticalAlign: 'bottom'
                                }}
                            >
                                {userAnswer || ''}
                            </span>
                            <span>{sentence.textParts[1]}</span>
                            <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginLeft: '0.5rem', fontSize: '0.95rem' }}>
                                ({sentence.verbHint})
                            </span>

                            {showResults && (
                                <span style={{ marginLeft: '1rem', display: 'inline-flex', alignItems: 'center' }}>
                                    {isCorrect ? (
                                        <CheckCircle size={20} color="var(--success-color)" />
                                    ) : (
                                        <>
                                            <XCircle size={20} color="var(--error-color)" style={{ marginRight: '0.5rem' }} />
                                            <span style={{ color: 'var(--error-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>Réponse: {sentence.answer}</span>
                                        </>
                                    )}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {!showResults ? (
                    <button
                        onClick={checkAnswers}
                        disabled={!isComplete}
                        style={{
                            padding: '0.8rem 2rem',
                            background: isComplete ? 'var(--primary-color)' : 'var(--text-secondary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: isComplete ? 'pointer' : 'not-allowed',
                            transition: 'background 0.2s'
                        }}
                    >
                        Check Answers
                    </button>
                ) : (
                    <>
                        <div style={{ padding: '0.8rem 1.5rem', background: score === levelData.sentences.length ? 'rgba(0, 200, 83, 0.1)' : 'rgba(211, 47, 47, 0.1)', borderRadius: '8px', border: `1px solid ${score === levelData.sentences.length ? 'var(--success-color)' : 'var(--error-color)'}`, fontWeight: 'bold', fontSize: '1.2rem', color: score === levelData.sentences.length ? 'var(--success-color)' : 'var(--error-color)' }}>
                            Score: {score} / {levelData.sentences.length}
                        </div>
                        <button
                            onClick={resetQuiz}
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
                            <RefreshCw size={18} /> Retry
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default GrammarDragDropQuiz;
