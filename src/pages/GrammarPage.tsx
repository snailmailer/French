import React, { useState } from 'react';
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
            marginLeft: level * 20 + 'px',
            boxShadow: level === 0 ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
        }}>
            <HeaderTag style={{ color: 'var(--accent-color)', marginTop: 0 }}>{section.title}</HeaderTag>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                    <strong style={{ color: '#B4C540' }}>Use (FR):</strong> {section.useFr}
                </div>
                <div>
                    <strong style={{ color: '#3686C9' }}>Use (EN):</strong> {section.useEn}
                </div>
                <div>
                    <strong>Structure:</strong> <span style={{ fontStyle: 'italic', fontFamily: 'monospace', background: 'rgba(0,0,0,0.05)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>{section.structure}</span>
                </div>
                {section.forms && (
                    <div>
                        <strong>Forms:</strong> {section.forms}
                    </div>
                )}
            </div>

            {section.examples && section.examples.length > 0 && (
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>EXAMPLES</strong>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                        {section.examples.map((ex, idx) => (
                            <li key={idx} style={{ marginBottom: '0.5rem' }}>
                                <strong>{ex.fr}</strong> <span style={{ opacity: 0.7 }}>→ {ex.en}</span>
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

const VocabularySectionView: React.FC<{ section: VocabularySection }> = ({ section }) => {
    return (
        <div style={{
            marginBottom: '2rem',
            background: 'var(--bg-secondary)',
            padding: '1.5rem',
            borderRadius: '12px',
            borderLeft: '4px solid #e67e22', // Orange for vocab
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
            <h2 style={{ color: '#d35400', marginTop: 0, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                {section.title}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {section.items.map((item, idx) => (
                    <div key={idx} style={{
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
                ))}
            </div>
        </div>
    );
};

// --- Main Page ---

const GrammarPage = () => {
    const [activeTab, setActiveTab] = useState<'grammar' | 'vocabulary'>('grammar');
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
        .map(section => ({
            ...section,
            items: section.items.filter(item =>
                item.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.fr.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }))
        .filter(section =>
            section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            section.items.length > 0
        );


    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <div className="container" style={{ maxWidth: '1000px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--accent-color)' }}>
                Grammar & Vocabulary
            </h1>

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
                    Grammar
                </button>
                <button
                    onClick={() => { setActiveTab('vocabulary'); setSelectedTopic('All'); setSearchTerm(''); }}
                    style={{
                        padding: '0.8rem 2rem',
                        fontSize: '1.1rem',
                        borderRadius: '25px',
                        border: 'none',
                        background: activeTab === 'vocabulary' ? '#e67e22' : 'var(--bg-secondary)',
                        color: activeTab === 'vocabulary' ? 'white' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                        boxShadow: activeTab === 'vocabulary' ? '0 4px 10px rgba(230, 126, 34, 0.3)' : 'none'
                    }}
                >
                    Vocabulary
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
