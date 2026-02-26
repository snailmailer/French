import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { grammarData } from '../data/grammar';
import { vocabularyData, type VocabularySection } from '../data/vocabulary';
import type { PronounSection } from '../data/pronouns';
import { Search, X, BookOpen, Volume2, ArrowUp } from 'lucide-react';
import { speakFrench } from '../utils/tts';
import GrammarDragDropQuiz from '../components/GrammarDragDropQuiz';
import VocabularyFillBlankQuiz from '../components/VocabularyFillBlankQuiz';
import { TimePracticeQuiz } from '../components/TimePracticeQuiz';
import { grammarQuizData } from '../data/grammarQuiz';

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
                    <strong style={{ color: 'var(--success-color)' }}>Structure:</strong> <span style={{ fontStyle: 'italic', fontFamily: 'monospace', background: 'rgba(0,0,0,0.05)', padding: '0.2rem 0.4rem', borderRadius: '4px', color: 'var(--text-primary)', whiteSpace: 'pre-line', display: 'inline-block', verticalAlign: 'top', marginTop: '0.2rem' }}>{section.structure}</span>
                </div>
                {section.forms && (
                    <div>
                        <strong style={{ verticalAlign: 'top' }}>Forms:</strong> <span style={{ whiteSpace: 'pre-line', display: 'inline-block', marginLeft: '0.2rem' }}>{section.forms}</span>
                        <button onClick={() => speakFrench(section.forms!)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', marginLeft: '0.5rem', verticalAlign: 'top', marginTop: '0.2rem' }}>
                            <Volume2 size={16} />
                        </button>
                    </div>
                )}
            </div>

            {section.conjugations && section.conjugations.length > 0 && (
                <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                    <table className="conjugation-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '300px', background: 'var(--bg-secondary)', borderRadius: '8px', overflow: 'hidden' }}>
                        <thead style={{ background: 'rgba(0, 120, 212, 0.1)' }}>
                            <tr>
                                <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--primary-color)' }}>{section.conjugationHeaders?.[0] || 'Pronoun'}</th>
                                <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--primary-color)' }}>{section.conjugationHeaders?.[1] || 'Form'}</th>
                                <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--primary-color)' }}>{section.conjugationHeaders?.[2] || 'Example'}</th>
                                <th style={{ textAlign: 'right', padding: '0.75rem', color: 'var(--primary-color)' }}>🔊</th>
                            </tr>
                        </thead>
                        <tbody>
                            {section.conjugations.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ fontWeight: 'bold', color: 'var(--accent-color)', padding: '0.75rem' }}>{item.pronoun}</td>
                                    <td style={{ padding: '0.75rem' }}>{item.form}</td>
                                    <td style={{ padding: '0.75rem' }}>
                                        <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.example}</div>
                                        {item.exampleEn && <div style={{ fontSize: '0.9em', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{item.exampleEn}</div>}
                                    </td>
                                    <td style={{ textAlign: 'right', padding: '0.75rem' }}>
                                        <button
                                            onClick={() => speakFrench(item.ttsText || `${item.pronoun} ${item.form}`)}
                                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#4CAF50' }}
                                            aria-label="Listen"
                                        >
                                            <Volume2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

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

            {section.descriptionFr && (
                <p style={{ color: 'var(--success-color)', marginBottom: '0.5rem', fontWeight: 500 }}>
                    {section.descriptionFr}
                    <button onClick={() => speakFrench(section.descriptionFr!)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                        <Volume2 size={16} />
                    </button>
                </p>
            )}
            {section.descriptionEn && (
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                    {section.descriptionEn}
                </p>
            )}

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

                    {sub.descriptionFr && (
                        <p style={{ color: 'var(--success-color)', marginBottom: '0.25rem', fontWeight: 500, fontSize: '1rem' }}>
                            {sub.descriptionFr}
                            <button onClick={() => speakFrench(sub.descriptionFr!)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                                <Volume2 size={16} />
                            </button>
                        </p>
                    )}
                    {sub.descriptionEn && (
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
                            {sub.descriptionEn}
                        </p>
                    )}

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
                                            <td style={{ padding: '0.65rem 1rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>{item.fr}</td>
                                            <td style={{ padding: '0.65rem 1rem', color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>{item.en}</td>
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

                    {sub.notesFr && (
                        <p style={{ marginTop: '1rem', color: 'var(--text-primary)', fontWeight: 600, borderLeft: '3px solid var(--success-color)', paddingLeft: '1rem' }}>
                            {sub.notesFr}
                            <button onClick={() => speakFrench(sub.notesFr!)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                                <Volume2 size={16} />
                            </button>
                        </p>
                    )}
                    {sub.notesEn && (
                        <p style={{ color: 'var(--text-secondary)', paddingLeft: '1rem', marginLeft: '3px', fontStyle: 'italic' }}>
                            {sub.notesEn}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

// --- Main Page ---

const GrammarPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = (searchParams.get('tab') as 'grammar' | 'vocabulary' | 'practice') || 'grammar';
    const setActiveTab = (tab: 'grammar' | 'vocabulary' | 'practice') => {
        setSearchParams({ tab });
    };
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<string>('All');
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [selectedPracticeLevel, setSelectedPracticeLevel] = useState<string>('A1');

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
    const sidebarTopics = activeTab === 'grammar' ? allGrammarTopics : activeTab === 'vocabulary' ? uniqueVocabTopics : [];
    const sidebarTitle = activeTab === 'grammar' ? 'Grammaire (Grammar)' : activeTab === 'vocabulary' ? 'Vocabulaire (Vocabulary)' : 'Pratique (Practice)';

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
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                        className={`filter-btn ${activeTab === 'grammar' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('grammar'); setSelectedTopic('All'); setSearchTerm(''); }}
                        style={{ padding: '1rem 2.5rem', fontSize: '1.25rem', flex: '1', minWidth: '250px', maxWidth: '350px' }}
                    >
                        Grammaire<br /><small style={{ fontSize: '0.75em', fontWeight: 'normal' }}>(Grammar)</small>
                    </button>
                    <button
                        className={`filter-btn ${activeTab === 'vocabulary' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('vocabulary'); setSelectedTopic('All'); setSearchTerm(''); }}
                        style={{ padding: '1rem 2.5rem', fontSize: '1.25rem', flex: '1', minWidth: '250px', maxWidth: '350px' }}
                    >
                        Vocabulaire<br /><small style={{ fontSize: '0.75em', fontWeight: 'normal' }}>(Vocabulary)</small>
                    </button>
                    <button
                        className={`filter-btn ${activeTab === 'practice' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('practice'); setSelectedTopic('All'); setSearchTerm(''); }}
                        style={{ padding: '1rem 2.5rem', fontSize: '1.25rem', flex: '1', minWidth: '250px', maxWidth: '350px', color: activeTab === 'practice' ? 'white' : 'var(--primary-color)' }}
                    >
                        Pratique<br /><small style={{ fontSize: '0.75em', fontWeight: 'normal' }}>(Practice)</small>
                    </button>
                </div>

                {/* Search Bar & Dropdown (Hidden in Practice Mode) */}
                {activeTab !== 'practice' && (
                    <>
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
                    </>
                )}

                {/* Mobile Top Navigation for Levels */}
                {activeTab === 'practice' && (
                    <div className="mobile-level-nav" style={{ display: 'none', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        {['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Vocabulaire', "L'heure"].map(level => (
                            <button
                                key={level}
                                onClick={() => { setSelectedPracticeLevel(level); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '12px',
                                    border: `2px solid ${selectedPracticeLevel === level ? 'var(--primary-color)' : 'var(--border-color)'}`,
                                    background: selectedPracticeLevel === level ? 'rgba(54, 134, 201, 0.1)' : 'var(--bg-secondary)',
                                    color: selectedPracticeLevel === level ? 'var(--primary-color)' : 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    transition: 'all 0.2s',
                                    flex: '1 1 auto'
                                }}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                )}

                {/* Content Display */}
                <div className="content-area" style={{ width: '100%' }}>
                    {activeTab === 'practice' ? (
                        <div style={{ marginTop: '2rem' }}>
                            {selectedPracticeLevel === 'Vocabulaire' ? (
                                <>
                                    <h2 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>Vocabulary Quizzes</h2>
                                    <VocabularyFillBlankQuiz />
                                </>
                            ) : selectedPracticeLevel === "L'heure" ? (
                                <>
                                    <h2 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>Telling Time Practice</h2>
                                    <TimePracticeQuiz />
                                </>
                            ) : (
                                <>
                                    <h2 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>Grammaire Niveau {selectedPracticeLevel}</h2>
                                    {grammarQuizData.filter(d => d.id === selectedPracticeLevel).map((levelData) => (
                                        <GrammarDragDropQuiz key={levelData.id} levelData={levelData} />
                                    ))}
                                </>
                            )}
                        </div>
                    ) : activeTab === 'grammar' ? (
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

            {/* Right Sidebar */}
            {activeTab !== 'practice' ? (
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
            ) : (
                <div style={{
                    width: '300px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    border: '1px solid var(--border-color)',
                    position: 'sticky',
                    top: '5rem',
                    display: 'none',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    boxShadow: 'var(--shadow-sm)'
                }} className="practice-sidebar">
                    <h3 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.4rem' }}>
                        Niveaux (Levels)
                    </h3>
                    {['A1', 'A2', 'B1', 'B2', 'C1', 'C2', "L'heure", 'Vocabulaire'].map(level => (
                        <button
                            key={level}
                            onClick={() => { setSelectedPracticeLevel(level); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            style={{
                                textAlign: 'left',
                                padding: '1rem',
                                borderRadius: '12px',
                                border: `2px solid ${selectedPracticeLevel === level ? 'var(--primary-color)' : 'transparent'}`,
                                background: selectedPracticeLevel === level ? 'rgba(54, 134, 201, 0.1)' : 'var(--bg-primary)',
                                color: selectedPracticeLevel === level ? 'var(--primary-color)' : 'var(--text-primary)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.25rem'
                            }}
                        >
                            <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{level}</span>
                            <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                                {level === 'Vocabulaire' ? 'Pratique du vocabulaire' : level === "L'heure" ? 'Lire l\'heure' : `Grammaire niveau ${level}`}
                            </span>
                        </button>
                    ))}
                </div>
            )}

            {/* Back to Top Button */}
            {showBackToTop && activeTab !== 'practice' && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        background: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        zIndex: 1000,
                        transition: 'all 0.2s',
                    }}
                    aria-label="Back to Top"
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <ArrowUp size={24} />
                </button>
            )}

            <style>{`
                @media (min-width: 1024px) {
                    .grammar-sidebar {
                        display: block !important;
                    }
                    .practice-sidebar {
                        display: flex !important;
                    }
                }
                @media (max-width: 1023px) {
                    .mobile-level-nav {
                        display: flex !important;
                    }
                }
            `}</style>
        </div >
    );
};

export default GrammarPage;
