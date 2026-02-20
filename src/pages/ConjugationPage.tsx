import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Info, X, PenLine } from 'lucide-react';
import { verbs } from '../data/verbs';
import type { VerbDefinition } from '../data/types';
import ConjugationTable from '../components/ConjugationTable';
import ConjugationPractice from '../components/ConjugationPractice';
import { tenseUsageData } from '../data/tenseUsage';

const ConjugationPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVerb, setSelectedVerb] = useState<VerbDefinition | null>(null);
    const categoryFilter = searchParams.get('category') || 'All';
    const groupFilter = searchParams.get('group') || 'All';
    const tenseFilter = searchParams.get('tense') || 'All';
    const setCategoryFilter = (val: string) => {
        const params = new URLSearchParams(searchParams);
        if (val === 'All') params.delete('category'); else params.set('category', val);
        setSearchParams(params);
    };
    const setGroupFilter = (val: string) => {
        const params = new URLSearchParams(searchParams);
        if (val === 'All') params.delete('group'); else params.set('group', val);
        setSearchParams(params);
    };
    const setTenseFilter = (val: string) => {
        const params = new URLSearchParams(searchParams);
        if (val === 'All') params.delete('tense'); else params.set('tense', val);
        setSearchParams(params);
    };
    const [showPractice, setShowPractice] = useState(false);

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
            <h1 style={{ textAlign: 'center', marginBottom: '0.25rem', color: '#E0E2D2', textTransform: 'uppercase' }}>
                Outil de Conjugaison
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#3686C9', fontWeight: 'bold', marginBottom: '1rem' }}>
                (Conjugation Tool)
            </p>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Cherchez un verbe pour voir sa conjugaison complète et ses règles.
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

            {/* Tense Filter */}
            <div style={{ flex: 1, position: 'relative' }}>
                <select
                    value={tenseFilter}
                    onChange={(e) => setTenseFilter(e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                >
                    <option value="All">All Tenses</option>
                    <option value="Présent">Présent</option>
                    <option value="Imparfait">Imparfait</option>
                    <option value="Futur Simple">Futur Simple</option>
                    <option value="Passé Composé">Passé Composé</option>
                    <option value="Plus-que-parfait">Plus-que-parfait</option>
                    <option value="Conditionnel">Conditionnel</option>
                    <option value="Subjonctif">Subjonctif</option>
                    <option value="Impératif">Impératif</option>
                </select>
                {tenseFilter !== 'All' && (
                    <X
                        size={16}
                        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--text-secondary)' }}
                        onClick={() => setTenseFilter('All')}
                    />
                )}
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
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1rem', // Keep original padding for select
                        fontSize: '1.2rem', // Keep original font size for select
                        borderRadius: '12px', // Keep original border radius for select
                        border: '2px solid var(--border-color)', // Keep original border for select
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

            {
                selectedVerb ? (
                    <div className="verb-details">
                        <div className="verb-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', margin: 0 }}>
                                    {selectedVerb.infinitive}
                                    <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginLeft: '1rem', fontWeight: 'normal' }}>
                                        ({selectedVerb.translation})
                                    </span>
                                </h2>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                    <span className="badge" style={{ background: '#2c3e50', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                                        Group {selectedVerb.group}
                                    </span>
                                    <span className="badge" style={{ background: '#2c3e50', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                                        Auxiliary: {selectedVerb.auxiliary}
                                    </span>
                                    <span className="badge" style={{ background: '#2c3e50', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                                        Gérondif: {selectedVerb.gerund || (selectedVerb.conjugations.Participe?.Présent?.[0]?.form ? `en ${selectedVerb.conjugations.Participe.Présent[0].form}` : 'N/A')}
                                    </span>
                                    <button
                                        onClick={() => setShowPractice(true)}
                                        style={{
                                            padding: '0.4rem 1rem',
                                            borderRadius: '8px',
                                            border: '1px solid #4CAF50',
                                            background: 'rgba(76, 175, 80, 0.15)',
                                            color: '#4CAF50',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem',
                                            fontSize: '0.9rem',
                                            fontWeight: 600
                                        }}
                                    >
                                        <PenLine size={16} />
                                        Practice
                                    </button>
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
                                <h3 style={{ color: '#B4C540', marginBottom: '1rem' }}>Examples</h3>
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
                                                if (tenseFilter !== 'All') {
                                                    // Simple filter: Check if tense name includes filter (e.g., "Passé Composé" matches "Passé Composé")
                                                    // Or if mood matches (e.g. "Conditionnel" matches "Conditionnel Present")
                                                    // Let's do exact match or inclusion
                                                    const normalizedFilter = tenseFilter.toLowerCase();
                                                    const normalizedTense = tense.toLowerCase();
                                                    const normalizedMood = mood.toLowerCase();

                                                    let show = false;
                                                    if (normalizedMood.includes(normalizedFilter)) show = true; // Show all Conditionnel if filter is Conditionnel
                                                    if (normalizedTense.includes(normalizedFilter)) show = true; // Show Présent if filter is Présent

                                                    if (!show) return null;
                                                }

                                                const usage = tenseUsageData.find(u => {
                                                    const normName = u.name.toLowerCase();
                                                    const normTense = tense.toLowerCase();
                                                    const normMood = mood.toLowerCase();

                                                    // For non-Indicatif moods, the mood name generally appears in the tense name
                                                    // e.g. "Subjonctif présent", "Conditionnel passé"
                                                    if (normMood !== 'indicatif') {
                                                        // Ensure the mood is part of the name (e.g. "subjonctif" is in "Subjonctif présent")
                                                        // And the tense is part of the name (e.g. "présent" is in "Subjonctif présent")
                                                        return normName.includes(normMood) && normName.includes(normTense);
                                                    }

                                                    // For Indicatif (default), we want to avoid matching names that belong to other moods
                                                    // e.g. "Présent" should match "Présent de l'indicatif" but NOT "Subjonctif présent"
                                                    const otherMoods = ['subjonctif', 'conditionnel', 'impératif', 'participe'];
                                                    if (otherMoods.some(m => normName.includes(m))) {
                                                        return false;
                                                    }

                                                    // Specific mapping for "Présent" in Indicatif which is often "Présent de l'indicatif"
                                                    if (normTense === 'présent' && normName.includes('présent')) return true;

                                                    // General fallback for Indicatif tenses (e.g. "Imparfait", "Futur Simple")
                                                    return normName.includes(normTense);
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
                )
            }

            {/* Practice Modal */}
            {showPractice && selectedVerb && (
                <ConjugationPractice
                    verb={selectedVerb}
                    onClose={() => setShowPractice(false)}
                />
            )}
        </div >
    );
};

export default ConjugationPage;
