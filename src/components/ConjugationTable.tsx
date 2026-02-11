import React from 'react';
import { Volume2 } from 'lucide-react';

interface ConjugationProps {
    verb: string;
    tense: string;
    pronunciations: { [key: string]: string }; // Map pronoun to pronunciation text/ipa if needed, or just use the pronoun+verb for TTS
    conjugations: { pronoun: string; form: string }[];
}

const ConjugationTable: React.FC<ConjugationProps> = ({ verb, tense, conjugations }) => {
    const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="conjugation-container" style={{ margin: '2rem 0', background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {verb} - {tense}
                <button onClick={() => speak(verb)} title="Listen to verb" style={{ padding: '0.4rem', borderRadius: '50%' }}>
                    <Volume2 size={16} />
                </button>
            </h3>
            <table className="conjugation-table">
                <thead>
                    <tr>
                        <th>Pronoun</th>
                        <th>Form</th>
                        <th>Listen</th>
                    </tr>
                </thead>
                <tbody>
                    {conjugations.map((item, index) => (
                        <tr key={index} className="conjugation-row">
                            <td style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{item.pronoun}</td>
                            <td>{item.form}</td>
                            <td>
                                <button
                                    onClick={() => speak(`${item.pronoun} ${item.form}`)}
                                    style={{ background: 'transparent', padding: '0.2rem' }}
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
