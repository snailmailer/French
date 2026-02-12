import { useState } from 'react';
import { Search, Info, X } from 'lucide-react';
import { verbs } from '../data/verbs';
import type { VerbDefinition } from '../data/types';
import ConjugationTable from '../components/ConjugationTable';
import { tenseUsageData } from '../data/tenseUsage';

const ConjugationPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVerb, setSelectedVerb] = useState<VerbDefinition | null>(null);
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [groupFilter, setGroupFilter] = useState<string>('All');

    // Extract unique categories
    const categories = ['All', ...Array.from(new Set(verbs.map(v => v.category).filter(Boolean)))].sort();

    const filteredVerbs = verbs.filter(v => {
        const matchesSearch = v.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
            v.translation.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || v.category === categoryFilter;

        let matchesGroup = true;
        if (groupFilter !== 'All') {
            if (groupFilter === 'Reflexive') {
                matchesGroup = v.infinitive.startsWith('se ') || v.infinitive.startsWith("s'");
            } else if (groupFilter === 'Irregular') {
                matchesGroup = v.group === 3; // Check logic
            } else if (groupFilter === '-ER') {
                matchesGroup = v.infinitive.endsWith('er') && !v.infinitive.startsWith('se ') && !v.infinitive.startsWith("s'") && v.group !== 3;
            } else if (groupFilter === '-IR') {
                matchesGroup = v.infinitive.endsWith('ir') && !v.infinitive.startsWith('se ') && !v.infinitive.startsWith("s'") && v.group !== 3;
            } else if (groupFilter === '-RE') {
                matchesGroup = v.infinitive.endsWith('re') && !v.infinitive.startsWith('se ') && !v.infinitive.startsWith("s'") && v.group !== 3;
            }
        }

        return matchesSearch && matchesCategory && matchesGroup;
    });

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        // If term is empty, don't auto-select null, let user browse
        if (!term) return;

        // Auto-select if exact match in filtered list
        const exact = filteredVerbs.find(v => v.infinitive.toLowerCase() === term.toLowerCase());
        if (exact) setSelectedVerb(exact);
    };

    return (
        <div className="container" style={{ maxWidth: '900px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--accent-color)' }}>
                Conjugation Tool
            </h1>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Search for a verb to see its full conjugation and rules.
            </p>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    >
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    {categoryFilter !== 'All' && (
                        <X
                            size={16}
                            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--text-secondary)' }}
                            onClick={() => setCategoryFilter('All')}
                        />
                    )}
                </div>

                <div style={{ flex: 1, position: 'relative' }}>
                    <select
                        value={groupFilter}
                        onChange={(e) => setGroupFilter(e.target.value)}
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    >
                        <option value="All">All Groups</option>
                        <option value="-ER">-ER Verbs</option>
                        <option value="-IR">-IR Verbs</option>
                        <option value="-RE">-RE Verbs</option>
                        <option value="Irregular">Irregular</option>
                        <option value="Reflexive">Reflexive</option>
                    </select>
                    {groupFilter !== 'All' && (
                        <X
                            size={16}
                            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--text-secondary)' }}
                            onClick={() => setGroupFilter('All')}
                        />
                    )}
                </div>
            </div>

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
                {searchTerm && (
                    <X
                        size={20}
                        onClick={() => {
                            setSearchTerm('');
                            // Optional: Reset selection if you want clearing search to clear result
                            // setSelectedVerb(null); 
                        }}
                        style={{
                            position: 'absolute',
                            right: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer'
                        }}
                    />
                )}
            </div>

            {/* Verb Dropdown */}
            <div style={{ marginBottom: '3rem', position: 'relative' }}>
                <select
                    value={selectedVerb?.infinitive || ''}
                    onChange={(e) => {
                        const v = verbs.find(verb => verb.infinitive === e.target.value);
                        if (v) setSelectedVerb(v);
                    }}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        fontSize: '1.2rem',
                        borderRadius: '12px',
                        border: '2px solid var(--border-color)',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <option value="">Select a verb ({filteredVerbs.length} available)...</option>
                    {filteredVerbs.map((v) => (
                        <option key={v.infinitive} value={v.infinitive}>
                            {v.infinitive} ({v.translation})
                        </option>
                    ))}
                </select>
                {selectedVerb && (
                    <X
                        size={20}
                        style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--text-secondary)' }}
                        onClick={() => setSelectedVerb(null)}
                    />
                )}
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

                    {/* Examples Section */}
                    {selectedVerb.examples && selectedVerb.examples.length > 0 && (
                        <div style={{ marginBottom: '2rem', background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Examples</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {selectedVerb.examples.map((ex, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{ex.sentence}</span>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic' }}>{ex.translation}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

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
                                    <div className="conjugation-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                                        {Object.entries(moodData).map(([tense, data]) => {
                                            const usage = tenseUsageData.find(u => {
                                                const normName = u.name.toLowerCase();
                                                const normTense = tense.toLowerCase();
                                                const normMood = mood.toLowerCase();
                                                if (normMood === 'indicatif') {
                                                    if (normTense === 'présent') return normName.includes('présent de l’indicatif');
                                                    if (normTense === 'passé') return normName.includes('passé composé');
                                                }
                                                return normName.toLowerCase().includes(normTense.toLowerCase()) || normTense.toLowerCase().includes(normName.toLowerCase());
                                            });

                                            return (
                                                <ConjugationTable
                                                    key={tense}
                                                    verb={selectedVerb.infinitive}
                                                    translation={selectedVerb.translation}
                                                    tense={tense}
                                                    pronunciations={{}}
                                                    conjugations={data}
                                                    tenseUsage={usage}
                                                />
                                            );
                                        })}
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
