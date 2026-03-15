import React from 'react';
import { Volume2 } from 'lucide-react';
import { speakFrench } from '../utils/tts';

interface ConjugationProps {
    verb: string;
    translation?: string;
    tense: string;
    pronunciations: { [key: string]: string };
    conjugations: { pronoun: string; form: string; example?: string; exampleEn?: string; ttsText?: string }[];
    tenseUsage?: {
        useFr: string;
        useEn: string;
        structure: string;
        examples: { fr: string; en: string }[];
    };
}

const ConjugationTable: React.FC<ConjugationProps> = ({ verb, translation, tense, conjugations, tenseUsage }) => {
    const speak = (text: string) => speakFrench(text);

    const sanitizeForTTS = (text: string) => {
        if (!text) return '';
        return text.replace(/\(.*\)/g, '').replace(/\//g, ' ').trim();
    };

    const dynamicExamples = conjugations
        .filter(c => c.example)
        .slice(0, 3)
        .map(c => ({
            fr: c.example!,
            en: c.exampleEn,
            ttsText: c.ttsText || c.example!
        }));
    
    const examplesToShow = dynamicExamples.length > 0 && tenseUsage ? dynamicExamples : (tenseUsage?.examples || []);

    return (
        <div className="conjugation-container" style={{ margin: '2rem 0', background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: tenseUsage ? '2px solid #2ecc71' : 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--accent-color)' }}>
                <span>{tense}</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>
                    {verb} ({translation})
                </span>
                <button onClick={() => speak(verb)} title="Listen to verb" style={{ padding: '0.4rem', borderRadius: '50%', color: '#4CAF50', border: '1px solid #4CAF50', background: 'transparent', cursor: 'pointer' }}>
                    <Volume2 size={16} />
                </button>
            </h3>

            {tenseUsage && (
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', fontSize: '0.95rem' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: '#27ae60' }}>Use (FR):</strong> {tenseUsage.useFr}
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: '#2980b9' }}>Use (EN):</strong> {tenseUsage.useEn}
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <strong>Structure:</strong> <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)', whiteSpace: 'pre-line', display: 'block', marginTop: '0.5rem' }}>{tenseUsage.structure}</span>
                    </div>

                    {examplesToShow.length > 0 && (
                        <div style={{ marginTop: '1rem', borderTop: '1px dashed rgba(46, 204, 113, 0.4)', paddingTop: '1rem' }}>
                            <strong style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'block' }}>Examples:</strong>
                            <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyle: 'disc', color: 'var(--text-secondary)' }}>
                                {examplesToShow.map((ex, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                                        <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                                            {ex.fr}
                                            <button onClick={() => speak(sanitizeForTTS((ex as any).ttsText || ex.fr))} title="Listen" style={{ marginLeft: '0.5rem', padding: '0.2rem', borderRadius: '50%', color: '#4CAF50', border: 'none', background: 'transparent', cursor: 'pointer', verticalAlign: 'middle' }}>
                                                <Volume2 size={14} />
                                            </button>
                                        </div>
                                        {ex.en && (
                                            <div style={{ fontSize: '0.9em', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                                                {ex.en}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <table className="conjugation-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '300px' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Pronoun</th>
                            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Form</th>
                            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Example</th>
                            <th style={{ textAlign: 'right', padding: '0.5rem' }}>Listen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conjugations.map((item, index) => {
                            const sanitizeForTTS = (text: string) => {
                                if (!text) return '';
                                return text.replace(/\(.*\)/g, '').replace(/\//g, ' ').trim();
                            };
                            return (
                                <tr key={index} className="conjugation-row">
                                    <td style={{ fontWeight: 'bold', color: 'var(--accent-color)', padding: '0.5rem' }}>{item.pronoun}</td>
                                    <td style={{ padding: '0.5rem' }}>{item.form}</td>
                                    <td style={{ padding: '0.5rem' }}>
                                        {item.example && (
                                            <>
                                                <div style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                                                    {item.example}
                                                    <button
                                                        onClick={() => speak(sanitizeForTTS(item.ttsText || item.example || ''))}
                                                        style={{ marginLeft: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer', color: '#4CAF50', verticalAlign: 'middle' }}
                                                        aria-label={`Listen to example`}
                                                    >
                                                        <Volume2 size={16} />
                                                    </button>
                                                </div>
                                                {item.exampleEn && (
                                                    <div style={{ fontSize: '0.85em', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                                                        {item.exampleEn}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </td>
                                    <td style={{ textAlign: 'right', padding: '0.5rem' }}>
                                        <button
                                            onClick={() => speak(sanitizeForTTS(`${item.pronoun} ${item.form}`))}
                                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#4CAF50' }}
                                            aria-label={`Listen to ${item.pronoun} ${item.form}`}
                                        >
                                            <Volume2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConjugationTable;
