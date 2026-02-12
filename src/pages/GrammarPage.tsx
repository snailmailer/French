import React, { useState } from 'react';
import { pronounsData, type PronounSection } from '../data/pronouns';
import { Search, X, BookOpen } from 'lucide-react';

const PronounSectionView: React.FC<{ section: PronounSection, level?: number }> = ({ section, level = 0 }) => {
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
                        <PronounSectionView key={idx} section={sub} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

const GrammarPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<PronounSection | null>(null);

    // Filter topics
    const filteredTopics = pronounsData.filter(topic =>
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.useEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.useFr.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        // Auto-select if 1 match? Maybe not, keep generic.
    };

    return (
        <div className="container" style={{ maxWidth: '900px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--accent-color)' }}>
                Grammar Reference
            </h1>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Search for a grammar topic to view rules and examples.
            </p>

            {/* Search Bar */}
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <input
                    type="text"
                    placeholder="Search grammar (e.g., pronouns, subject, relative)..."
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

            {/* Topic Dropdown */}
            <div style={{ marginBottom: '3rem' }}>
                <select
                    value={selectedTopic?.title || 'All'}
                    onChange={(e) => {
                        if (e.target.value === 'All') {
                            setSelectedTopic(null); // Use null to represent 'All'
                        } else {
                            const topic = pronounsData.find(t => t.title === e.target.value);
                            if (topic) setSelectedTopic(topic);
                        }
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
                    <option value="All">Show All Topics ({filteredTopics.length})</option>
                    {filteredTopics.map((t) => (
                        <option key={t.title} value={t.title}>
                            {t.title}
                        </option>
                    ))}
                </select>
            </div>

            {/* Content Display */}
            <div className="grammar-content">
                {selectedTopic ? (
                    <PronounSectionView section={selectedTopic} />
                ) : (
                    <>
                        {filteredTopics.length > 0 ? (
                            filteredTopics.map((topic, idx) => (
                                <PronounSectionView key={idx} section={topic} />
                            ))
                        ) : (
                            <div style={{
                                textAlign: 'center',
                                padding: '4rem',
                                color: 'var(--text-secondary)',
                                border: '2px dashed var(--border-color)',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <BookOpen size={48} style={{ opacity: 0.5 }} />
                                <p>No topics found match your search.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default GrammarPage;
