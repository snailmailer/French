import { useState } from 'react';
import { Search, Info } from 'lucide-react';
import { verbs } from '../data/verbs';
import type { VerbDefinition } from '../data/types';
import ConjugationTable from '../components/ConjugationTable';

const ConjugationPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVerb, setSelectedVerb] = useState<VerbDefinition | null>(null);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        if (!term) {
            setSelectedVerb(null);
            return;
        }

        // Exact match first
        const exact = verbs.find(v => v.infinitive.toLowerCase() === term.toLowerCase());
        if (exact) {
            setSelectedVerb(exact);
        } else {
            // Or find the first partial match
            const partial = verbs.find(v => v.infinitive.toLowerCase().includes(term.toLowerCase()));
            setSelectedVerb(partial || null);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '900px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--accent-color)' }}>
                Conjugation Tool
            </h1>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Search for a verb to see its full conjugation and rules.
            </p>

            {/* Search Bar */}
            <div style={{ position: 'relative', marginBottom: '3rem' }}>
                <input
                    type="text"
                    placeholder="Search verb (e.g., aimer, être)..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '1rem 1rem 1rem 3rem',
                        fontSize: '1.2rem',
                        borderRadius: '12px',
                        border: '2px solid var(--border-color)',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        outline: 'none'
                    }}
                />
                <Search
                    style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}
                />
            </div>

            {selectedVerb ? (
                <div className="verb-details">
                    <div className="verb-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', margin: 0 }}>
                                {selectedVerb.infinitive}
                                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginLeft: '1rem', fontWeight: 'normal' }}>
                                    ({selectedVerb.translation})
                                </span>
                            </h2>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                <span className="badge" style={{ background: '#2c3e50', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                                    Group {selectedVerb.group}
                                </span>
                                <span className="badge" style={{ background: '#2c3e50', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                                    Auxiliary: {selectedVerb.auxiliary}
                                </span>
                            </div>
                        </div>

                        {/* Rules Box */}
                        <div style={{ background: 'rgba(100, 108, 255, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)', maxWidth: '300px' }}>
                            <h4 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Info size={16} /> Rules & Notes
                            </h4>
                            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                {selectedVerb.rules.map((rule, idx) => (
                                    <li key={idx}>{rule}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="conjugation-container">
                        {['Indicatif', 'Subjonctif', 'Conditionnel', 'Impératif', 'Participe'].map((mood) => {
                            const moodKey = mood as keyof typeof selectedVerb.conjugations;
                            const moodData = selectedVerb.conjugations[moodKey];

                            if (!moodData) return null;

                            return (
                                <div key={mood} className="mood-section" style={{ marginBottom: '3rem' }}>
                                    <h3 style={{ fontSize: '1.8rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                                        {mood}
                                    </h3>
                                    <div className="conjugation-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                        {Object.entries(moodData).map(([tense, data]) => (
                                            <ConjugationTable
                                                key={tense}
                                                verb={selectedVerb.infinitive}
                                                tense={tense}
                                                conjugations={data}
                                                pronunciations={{}}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)', border: '2px dashed var(--border-color)', borderRadius: '12px' }}>
                    {searchTerm ? 'Verb not found in database yet. Try "aimer", "aller", "avoir", "être", "faire".' : 'Type a verb to begin.'}
                </div>
            )}
        </div>
    );
};

export default ConjugationPage;
