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
        <div
            className={level === 0 ? "command-card-style" : ""}
            style={{
                marginBottom: '2rem',
                background: level === 0 ? undefined : 'rgba(0,0,0,0.02)',
                padding: '1.5rem',
                borderLeft: '4px solid var(--primary-color)',
                marginLeft: level === 0 ? '0' : '1rem' // Reduced margin for mobile
            }}
        >
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
                    <strong style={{ color: 'var(--success-color)' }}>Use (FR):</strong> {section.useFr}
                    <button onClick={() => speakFrench(section.useFr)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                        <Volume2 size={16} />
                    </button>
                </div>
                <div>
                    <strong style={{ color: 'var(--secondary-color)' }}>Use (EN):</strong> {section.useEn}
                </div>
                <div>
                    <strong style={{ color: 'var(--success-color)' }}>Structure:</strong> <span style={{ fontStyle: 'italic', fontFamily: 'monospace', background: 'rgba(0,0,0,0.05)', padding: '0.2rem 0.4rem', borderRadius: '4px', color: 'var(--text-primary)' }}>{section.structure}</span>
                </div>
                {section.forms && (
                    <div>
                        <strong>Forms:</strong> {section.forms}
                        <button onClick={() => speakFrench(section.forms!)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                            <Volume2 size={16} />
                        </button>
                    </div>
                )}
            </div>

            {section.examples && section.examples.length > 0 && (
                <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8, color: 'var(--accent-cyan)' }}>EXAMPLES</strong>
                    <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                        {section.examples.map((ex, idx) => (
                            <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <div>
                                    <strong style={{ color: 'var(--text-primary)' }}>{ex.fr}</strong> <br />
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>→ {ex.en}</span>
                                </div>
                                <button
                                    onClick={() => speakFrench(ex.fr)}
                                    style={{
                                        background: 'rgba(0, 200, 83, 0.1)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'var(--success-color)',
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
        borderLeft: '4px solid var(--primary-color)'
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
                color: 'var(--success-color)',
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
        <div className="command-card-style" style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            borderLeft: '4px solid var(--primary-color)'
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
                        color: 'var(--accent-cyan)',
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
                                    <tr style={{ background: 'rgba(0, 120, 212, 0.1)' }}>
                                        <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--primary-color)', fontWeight: 700, borderBottom: '2px solid var(--border-color)' }}>Français</th>
                                        <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--secondary-color)', fontWeight: 700, borderBottom: '2px solid var(--border-color)' }}>English</th>
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
                                                <button onClick={() => speakFrench(item.fr)} title="Écouter en français" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)', padding: '0.3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
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

    // All grammar topic titles (unfiltered, for sidebar)
    const allGrammarTopics = grammarData.map(t => t.title);
    const allVocabTopics = vocabularyData.map(s => s.title).sort((a, b) => a.localeCompare(b, 'fr'));
    // Deduplicate vocab topics
    const uniqueVocabTopics = Array.from(new Set(allVocabTopics));

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const handleSidebarClick = (topic: string) => {
        setSelectedTopic(topic);
        setSearchTerm('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Sidebar topics based on active tab
    const sidebarTopics = activeTab === 'grammar' ? allGrammarTopics : uniqueVocabTopics;
    const sidebarTitle = activeTab === 'grammar' ? 'Grammaire (Grammar)' : 'Vocabulaire (Vocabulary)';

    return (
        <div className="container" style={{ maxWidth: '1200px', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            {/* Main Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <h1 style={{ textAlign: 'center', marginBottom: '0.25rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
                    Grammaire et Vocabulaire
                </h1>
                <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--accent-cyan)', fontWeight: 'bold', marginBottom: '2rem' }}>
                    (Grammar & Vocabulary)
                </p>

                {/* Toggle Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1rem' }}>
                    <button
                        className={`filter-btn ${activeTab === 'grammar' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('grammar'); setSelectedTopic('All'); setSearchTerm(''); }}
                    >
                        Grammaire (Grammar)
                    </button>
                    <button
                        className={`filter-btn ${activeTab === 'vocabulary' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('vocabulary'); setSelectedTopic('All'); setSearchTerm(''); }}
                    >
                        Vocabulaire (Vocabulary)
                    </button>
                </div>

                {/* Search Bar — sized to match dropdown */}
                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                    <input
                        type="text"
                        placeholder={activeTab === 'grammar' ? "Search grammar rules..." : "Search vocabulary words..."}
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem 1rem 1rem 3rem',
                            fontSize: '1.1rem',
                            borderRadius: '12px',
                            border: '2px solid var(--border-color)',
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            outline: 'none',
                            boxSizing: 'border-box'
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

                {/* Filter Dropdown */}
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
                            cursor: 'pointer',
                            boxSizing: 'border-box'
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

            {/* Right Sidebar — Topic Shortcuts */}
            <div style={{
                width: '300px',
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                position: 'sticky',
                top: '5rem',
                display: 'none'
            }} className="grammar-sidebar">
                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--accent-color)', fontSize: '1.2rem', textTransform: 'uppercase' }}>
                    {sidebarTitle}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                    <button
                        onClick={() => { setSelectedTopic('All'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        style={{
                            textAlign: 'left',
                            padding: '0.6rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid transparent',
                            background: selectedTopic === 'All' ? 'rgba(0, 120, 212, 0.2)' : 'transparent',
                            color: selectedTopic === 'All' ? 'var(--accent-color)' : 'var(--text-primary)',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            fontSize: '0.95rem',
                            fontWeight: selectedTopic === 'All' ? 700 : 400
                        }}
                    >
                        Tout afficher (Show All)
                    </button>
                    {sidebarTopics.map((topic) => {
                        const isActive = selectedTopic === topic;
                        return (
                            <button
                                key={topic}
                                onClick={() => handleSidebarClick(topic)}
                                style={{
                                    textAlign: 'left',
                                    padding: '0.6rem 1rem',
                                    borderRadius: '8px',
                                    border: '1px solid transparent',
                                    background: isActive ? 'rgba(0, 120, 212, 0.2)' : 'transparent',
                                    color: isActive ? 'var(--accent-color)' : 'var(--text-primary)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    fontSize: '0.9rem',
                                    fontWeight: isActive ? 700 : 400
                                }}
                            >
                                {topic}
                            </button>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @media (min-width: 1024px) {
                    .grammar-sidebar {
                        display: block !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default GrammarPage;
