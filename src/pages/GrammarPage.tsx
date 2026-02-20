import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { grammarData } from '../data/grammar';
import { vocabularyData, type VocabularySection } from '../data/vocabulary';
import type { PronounSection } from '../data/pronouns';
import { Search, X, BookOpen, Volume2 } from 'lucide-react';
import { speakFrench } from '../utils/tts';

// --- Components ---

const GrammarSectionView: React.FC<{ section: PronounSection, level?: number }> = ({ section, level = 0 }) => {
    const HeaderTag = level === 0 ? 'h2' : 'h3';

    return (
        <div style={{
            marginBottom: '2rem',
            background: level === 0 ? 'var(--bg-secondary)' : 'rgba(0,0,0,0.02)',
            padding: '1.5rem',
            borderRadius: '12px',
            borderLeft: level === 0 ? '4px solid var(--accent-color)' : 'none',
            marginLeft: level === 0 ? '0' : '1rem', // Reduced margin for mobile
            boxShadow: level === 0 ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <HeaderTag style={{ color: 'var(--accent-color)', margin: 0 }}>{section.title}</HeaderTag>
                <button
                    onClick={() => speakFrench(section.title)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
                    aria-label="Speak title"
                >
                    <Volume2 size={20} />
                </button>
            </div>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
                {section.image && (
                    <div style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <img src={section.image} alt={section.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                )}
                <div>
                    <strong style={{ color: '#B4C540' }}>Use (FR):</strong> {section.useFr}
                    <button onClick={() => speakFrench(section.useFr)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#B4C540', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                        <Volume2 size={16} />
                    </button>
                </div>
                <div>
                    <strong style={{ color: '#3686C9' }}>Use (EN):</strong> {section.useEn}
                </div>
                <div>
                    <strong style={{ color: '#B4C540' }}>Structure:</strong> <span style={{ fontStyle: 'italic', fontFamily: 'monospace', background: 'rgba(0,0,0,0.05)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>{section.structure}</span>
                </div>
                {section.forms && (
                    <div>
                        <strong>Forms:</strong> {section.forms}
                        <button onClick={() => speakFrench(section.forms!)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#B4C540', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                            <Volume2 size={16} />
                        </button>
                    </div>
                )}
            </div>

            {section.examples && section.examples.length > 0 && (
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8, color: '#B4C540' }}>EXAMPLES</strong>
                    <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                        {section.examples.map((ex, idx) => (
                            <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <div>
                                    <strong style={{ color: 'var(--text-primary)' }}>{ex.fr}</strong> <br />
                                    <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>→ {ex.en}</span>
                                </div>
                                <button
                                    onClick={() => speakFrench(ex.fr)}
                                    style={{
                                        background: 'rgba(76, 175, 80, 0.1)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#4CAF50',
                                        padding: '0.4rem',
                                        borderRadius: '50%',
                                        flexShrink: 0
                                    }}
                                    aria-label="Speak example"
                                >
                                    <Volume2 size={18} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {section.subSections && (
                <div style={{ marginTop: '2rem' }}>
                    {section.subSections.map((sub, idx) => (
                        <GrammarSectionView key={idx} section={sub} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

const VocabularyItemCard: React.FC<{ item: { fr: string; en: string } }> = ({ item }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.8rem',
        background: 'var(--bg-primary)',
        borderRadius: '8px',
        border: '1px solid var(--border-color)'
    }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.fr}</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.en}</span>
        </div>
        <button
            onClick={() => speakFrench(item.fr)}
            aria-label={`Pronounce ${item.fr}`}
            title="Écouter en français"
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#4CAF50',
                padding: '0.4rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Volume2 size={20} />
        </button>
    </div>
);

const VocabularySectionView: React.FC<{ section: VocabularySection }> = ({ section }) => {
    return (
        <div style={{
            marginBottom: '2rem',
            background: 'var(--bg-secondary)',
            padding: '1.5rem',
            borderRadius: '12px',
            borderLeft: '4px solid var(--accent-color)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
            <h2 style={{ color: 'var(--accent-color)', marginTop: 0, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                {section.title}
            </h2>

            {/* Flat items (simple vocabulary sections) */}
            {section.items && section.items.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                    {section.items.map((item, idx) => (
                        <VocabularyItemCard key={idx} item={item} />
                    ))}
                </div>
            )}

            {/* Subsections (grouped content like Telling Time, Phone Numbers) */}
            {section.subsections && section.subsections.map((sub, subIdx) => (
                <div key={subIdx} style={{ marginBottom: subIdx < section.subsections!.length - 1 ? '1.5rem' : 0 }}>
                    <h3 style={{
                        color: '#B4C540',
                        fontSize: '1.15rem',
                        marginTop: subIdx === 0 ? 0 : '1.5rem',
                        marginBottom: '0.75rem',
                        paddingBottom: '0.4rem',
                        borderBottom: '1px dashed var(--border-color)'
                    }}>
                        {sub.subtitle}
                    </h3>
                    {sub.format === 'table' ? (
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                fontSize: '1rem'
                            }}>
                                <thead>
                                    <tr style={{ background: 'rgba(76, 175, 80, 0.08)' }}>
                                        <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--accent-color)', fontWeight: 700, borderBottom: '2px solid var(--border-color)' }}>Français</th>
                                        <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: '#3686C9', fontWeight: 700, borderBottom: '2px solid var(--border-color)' }}>English</th>
                                        <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', borderBottom: '2px solid var(--border-color)', width: '80px' }}>🔊</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sub.items.map((item, idx) => (
                                        <tr key={idx} style={{
                                            background: idx % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                                            borderBottom: '1px solid var(--border-color)'
                                        }}>
                                            <td style={{ padding: '0.65rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.fr}</td>
                                            <td style={{ padding: '0.65rem 1rem', color: 'var(--text-secondary)' }}>{item.en}</td>
                                            <td style={{ padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                                                <button onClick={() => speakFrench(item.fr)} title="Écouter en français" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#4CAF50', padding: '0.3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                                                    <Volume2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                            {sub.items.map((item, idx) => (
                                <VocabularyItemCard key={idx} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// --- Main Page ---

const GrammarPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = (searchParams.get('tab') as 'grammar' | 'vocabulary') || 'grammar';
    const setActiveTab = (tab: 'grammar' | 'vocabulary') => {
        setSearchParams({ tab });
    };
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<string>('All');

    // -- Derived State for Grammar --
    const filteredGrammarTopics = grammarData.filter(topic =>
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.useEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.useFr.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // -- Derived State for Vocabulary --
    const filteredVocabSections = vocabularyData
        .map(section => {
            const term = searchTerm.toLowerCase();
            const filteredItems = (section.items || []).filter(item =>
                item.en.toLowerCase().includes(term) ||
                item.fr.toLowerCase().includes(term)
            );
            const filteredSubsections = (section.subsections || []).map(sub => ({
                ...sub,
                items: sub.items.filter(item =>
                    item.en.toLowerCase().includes(term) ||
                    item.fr.toLowerCase().includes(term)
                )
            })).filter(sub => sub.items.length > 0);
            return { ...section, items: filteredItems.length > 0 ? filteredItems : undefined, subsections: filteredSubsections.length > 0 ? filteredSubsections : undefined };
        })
        .filter(section =>
            section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (section.items && section.items.length > 0) ||
            (section.subsections && section.subsections.length > 0)
        )
        .sort((a, b) => a.title.localeCompare(b.title, 'fr'));


    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <div className="container" style={{ maxWidth: '1000px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '0.25rem', color: '#E0E2D2', textTransform: 'uppercase' }}>
                Grammaire et Vocabulaire
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#B4C540', fontWeight: 'bold', marginBottom: '2rem' }}>
                (Grammar &amp; Vocabulary)
            </p>

            {/* Toggle Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1rem' }}>
                <button
                    onClick={() => { setActiveTab('grammar'); setSelectedTopic('All'); setSearchTerm(''); }}
                    style={{
                        padding: '0.8rem 2rem',
                        fontSize: '1.1rem',
                        borderRadius: '25px',
                        border: 'none',
                        background: activeTab === 'grammar' ? 'var(--accent-color)' : 'var(--bg-secondary)',
                        color: activeTab === 'grammar' ? 'white' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                        boxShadow: activeTab === 'grammar' ? '0 4px 10px rgba(52, 152, 219, 0.3)' : 'none'
                    }}
                >
                    Grammaire (Grammar)
                </button>
                <button
                    onClick={() => { setActiveTab('vocabulary'); setSelectedTopic('All'); setSearchTerm(''); }}
                    style={{
                        padding: '0.8rem 2rem',
                        fontSize: '1.1rem',
                        borderRadius: '25px',
                        border: 'none',
                        background: activeTab === 'vocabulary' ? '#9B59B6' : 'var(--bg-secondary)', // Lavender button
                        color: activeTab === 'vocabulary' ? 'white' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                        boxShadow: activeTab === 'vocabulary' ? '0 4px 10px rgba(155, 89, 182, 0.3)' : 'none'
                    }}
                >
                    Vocabulaire (Vocabulary)
                </button>
            </div>

            {/* Search Bar */}
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <input
                    type="text"
                    placeholder={activeTab === 'grammar' ? "Search grammar rules..." : "Search vocabulary words..."}
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
                        onClick={() => setSearchTerm('')}
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

            {/* Filter Dropdown (Optional but helpful for large lists) */}
            <div style={{ marginBottom: '3rem' }}>
                <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        fontSize: '1.1rem',
                        borderRadius: '12px',
                        border: '2px solid var(--border-color)',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <option value="All">Show All {activeTab === 'grammar' ? 'Topics' : 'Categories'}</option>
                    {activeTab === 'grammar'
                        ? filteredGrammarTopics.map(t => <option key={t.title} value={t.title}>{t.title}</option>)
                        : filteredVocabSections.map(s => <option key={s.title} value={s.title}>{s.title}</option>)
                    }
                </select>
            </div>


            {/* Content Display */}
            <div className="content-area">
                {activeTab === 'grammar' ? (
                    // --- GRAMMAR VIEW ---
                    <>
                        {filteredGrammarTopics.length > 0 ? (
                            filteredGrammarTopics
                                .filter(t => selectedTopic === 'All' || t.title === selectedTopic)
                                .map((topic, idx) => (
                                    <GrammarSectionView key={idx} section={topic} />
                                ))
                        ) : (
                            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
                                <BookOpen size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                                <p>No grammar topics found.</p>
                            </div>
                        )}
                    </>
                ) : (
                    // --- VOCABULARY VIEW ---
                    <>
                        {filteredVocabSections.length > 0 ? (
                            filteredVocabSections
                                .filter(s => selectedTopic === 'All' || s.title === selectedTopic)
                                .map((section, idx) => (
                                    <VocabularySectionView key={idx} section={section} />
                                ))
                        ) : (
                            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
                                <BookOpen size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                                <p>No vocabulary words found.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default GrammarPage;
