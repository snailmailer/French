import React from 'react';
import { Volume2 } from 'lucide-react';
import { speakFrench } from '../utils/tts';

interface ConjugationProps {
    verb: string;
    translation?: string; // Added translation
    tense: string;
    pronunciations: { [key: string]: string };
    conjugations: { pronoun: string; form: string; example?: string }[];
}

const ConjugationTable: React.FC<ConjugationProps> = ({ verb, translation, tense, conjugations }) => {
    const speak = (text: string) => speakFrench(text);

    return (
        <div className="conjugation-container" style={{ margin: '2rem 0', background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {verb} {translation && <span style={{ fontSize: '0.9em', color: 'var(--text-secondary)', fontWeight: 'normal' }}>({translation})</span>} - {tense}
                <button onClick={() => speak(verb)} title="Listen to verb" style={{ padding: '0.4rem', borderRadius: '50%', color: '#4CAF50', border: '1px solid #4CAF50' }}>
                    <Volume2 size={16} />
                </button>
            </h3>
            <table className="conjugation-table">
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
    );
};

export default ConjugationTable;
