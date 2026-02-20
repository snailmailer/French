import React from 'react';
import { Volume2 } from 'lucide-react';
import { speakFrench } from '../utils/tts';

interface ConjugationProps {
    verb: string;
    translation?: string;
    tense: string;
    pronunciations: { [key: string]: string };
    conjugations: { pronoun: string; form: string; example?: string }[];
    tenseUsage?: {
        useFr: string;
        useEn: string;
        structure: string;
        examples: { fr: string; en: string }[];
    };
}

const ConjugationTable: React.FC<ConjugationProps> = ({ verb, tense, conjugations, tenseUsage }) => {
    const speak = (text: string) => speakFrench(text);

    return (
        <div className="conjugation-container" style={{ margin: '2rem 0', background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: tenseUsage ? '2px solid #2ecc71' : 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-color)' }}>
                {tense}
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
                    <div style={{ marginBottom: '0.5rem' }}>
                        <strong>Structure:</strong> <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)', whiteSpace: 'pre-line', display: 'block', marginTop: '0.5rem' }}>{tenseUsage.structure}</span>
                    </div>
                    {/* Examples could be collapsible or small text to save space, but user asked for them. */}
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
                        {conjugations.map((item, index) => (
                            <tr key={index} className="conjugation-row">
                                <td style={{ fontWeight: 'bold', color: 'var(--accent-color)', padding: '0.5rem' }}>{item.pronoun}</td>
                                <td style={{ padding: '0.5rem' }}>{item.form}</td>
                                <td style={{ padding: '0.5rem', fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.9em' }}>{item.example}</td>
                                <td style={{ textAlign: 'right', padding: '0.5rem' }}>
                                    <button
                                        onClick={() => speak(`${item.pronoun} ${item.form}`)}
                                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#4CAF50' }}
                                        aria-label={`Listen to ${item.pronoun} ${item.form}`}
                                    >
                                        <Volume2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConjugationTable;
