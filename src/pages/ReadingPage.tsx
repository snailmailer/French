import { useState } from 'react';
import { Volume2, PlayCircle, Eye, EyeOff } from 'lucide-react';
import { speakFrench } from '../utils/tts';
import { readingStories } from '../data/readingStories';
import { listeningStories } from '../data/listeningStories';

const ReadingPage = () => {
    const [mode, setMode] = useState<'reading' | 'listening'>('reading');
    const [selectedLevel, setSelectedLevel] = useState<string>('A1');
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [showTranscript, setShowTranscript] = useState(false);

    // Reading specific data
    const currentReadingStory = readingStories.find(s => s.level === selectedLevel) || readingStories[0];

    // Listening specific data
    const currentListeningStory = listeningStories.find(s => s.level === selectedLevel) || listeningStories[0];

    const handleAnswerChange = (questionIndex: string, value: string) => {
        setUserAnswers(prev => ({ ...prev, [questionIndex]: value }));
    };

    // Derived states
    const storiesArray = mode === 'reading' ? readingStories : listeningStories;

    return (
        <div className="reading-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '0.25rem', color: '#E0E2D2', textTransform: 'uppercase' }}>
                Pratique de Lecture et d'Écoute
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#3686C9', fontWeight: 'bold', marginBottom: '2rem' }}>
                (Reading & Listening Practice)
            </p>

            {/* Mode Toggle Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                    className={`filter-btn ${mode === 'reading' ? 'active' : ''}`}
                    onClick={() => { setMode('reading'); setUserAnswers({}); setShowTranscript(false); }}
                    style={{ padding: '0.75rem 2rem', fontSize: '1.1rem', flex: '1', minWidth: '200px', maxWidth: '300px' }}
                >
                    Lecture (Reading)
                </button>
                <button
                    className={`filter-btn ${mode === 'listening' ? 'active' : ''}`}
                    onClick={() => { setMode('listening'); setUserAnswers({}); setShowTranscript(false); }}
                    style={{ padding: '0.75rem 2rem', fontSize: '1.1rem', flex: '1', minWidth: '200px', maxWidth: '300px' }}
                >
                    Écoute (Listening)
                </button>
            </div>

            {/* Mobile Top Navigation for Levels */}
            <div className="mobile-level-nav" style={{ display: 'none', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {storiesArray.map(story => (
                    <button
                        key={story.level}
                        onClick={() => { setSelectedLevel(story.level); setUserAnswers({}); }}
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '12px',
                            border: `2px solid ${selectedLevel === story.level ? 'var(--primary-color)' : 'var(--border-color)'}`,
                            background: selectedLevel === story.level ? 'rgba(54, 134, 201, 0.1)' : 'var(--bg-secondary)',
                            color: selectedLevel === story.level ? 'var(--primary-color)' : 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            transition: 'all 0.2s',
                            flex: '1 1 auto'
                        }}
                    >
                        {story.level}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                {/* READING MODE CONTENT */}
                {mode === 'reading' && (
                    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ background: 'var(--bg-secondary)', borderRadius: '16px', padding: '2rem', boxShadow: 'var(--shadow-hover)' }}>
                            <h2 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontSize: '1.8rem', textAlign: 'center' }}>{currentReadingStory.title}</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontStyle: 'italic', fontSize: '1.1rem', textAlign: 'center' }}>Personnages : {currentReadingStory.characters}</p>

                            {/* Comic Strip Image */}
                            <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto 3rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
                                <img src={currentReadingStory.image} alt={currentReadingStory.title} style={{ width: '100%', display: 'block' }} />
                                <div style={{
                                    /* Speech bubble styling */
                                    position: 'absolute',
                                    top: '15%',
                                    right: '10%',
                                    background: 'white',
                                    color: 'black',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '30px',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                                    maxWidth: '50%',
                                    textAlign: 'center',
                                    border: '3px solid black',
                                    zIndex: 10
                                }}>
                                    {currentReadingStory.comicDialogue}
                                    {/* CSS triangle for speech bubble tail */}
                                    <div style={{ position: 'absolute', bottom: '-15px', right: '40px', width: '0', height: '0', borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderTop: '20px solid black' }} />
                                    <div style={{ position: 'absolute', bottom: '-10px', right: '42px', width: '0', height: '0', borderLeft: '11px solid transparent', borderRight: '11px solid transparent', borderTop: '16px solid white' }} />
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>

                            {/* Left Column: Dialogue */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <h3 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Dialogue</h3>
                                {currentReadingStory.dialogue.map((line, idx) => (
                                    <div key={idx} style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                            <strong style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem' }}>{line.speaker}</strong>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button onClick={() => speakFrench(line.french)} title="Listen in French" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)' }}>
                                                    <Volume2 size={20} />
                                                </button>
                                            </div>
                                        </div>
                                        <div style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>{line.french}</div>
                                        {line.english && (
                                            <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '0.25rem' }}>{line.english}</div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right Column: Grammar & Expressions */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                {/* Grammar Box */}
                                <div style={{ background: 'rgba(54, 134, 201, 0.05)', border: '1px solid var(--primary-color)', borderRadius: '12px', padding: '1.5rem' }}>
                                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        📚 {currentReadingStory.grammar.title}
                                    </h3>
                                    <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: 0 }}>
                                        {currentReadingStory.grammar.points.map((pt, idx) => (
                                            <li key={idx} style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}>{pt}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Expressions Box */}
                                <div style={{ background: 'rgba(0, 200, 83, 0.05)', border: '1px solid var(--success-color)', borderRadius: '12px', padding: '1.5rem' }}>
                                    <h3 style={{ color: 'var(--success-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        💡 Expressions Clés
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {currentReadingStory.expressions.map((exp, idx) => (
                                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border-color)', paddingBottom: '0.75rem' }}>
                                                <div style={{ flex: 1, paddingRight: '1rem' }}>
                                                    <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.french}</div>
                                                    {exp.english && <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{exp.english}</div>}
                                                </div>
                                                <button onClick={() => speakFrench(exp.french)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', padding: '0.25rem' }}>
                                                    <Volume2 size={20} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Questions Section */}
                        <div style={{ marginTop: '3rem', borderTop: '2px solid var(--border-color)', paddingTop: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--text-primary)' }}>Questions de Compréhension</h3>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>

                                {/* Open Questions */}
                                <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                    <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.3rem', borderBottom: '2px solid rgba(54, 134, 201, 0.2)', paddingBottom: '0.5rem' }}>Questions Ouvertes</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {currentReadingStory.openQuestions.map((q, idx) => (
                                            <div key={`open-${idx}`}>
                                                <div style={{ marginBottom: '0.75rem', fontWeight: 500, color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.4, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                    <div style={{ flex: '1 1 auto', minWidth: 'min-content' }}>
                                                        <div>{idx + 1}. {q.french}</div>
                                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '0.25rem' }}>{q.english}</div>
                                                    </div>
                                                    <button onClick={() => speakFrench(q.french)} title="Listen to question" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-cyan)', padding: 0, marginTop: '2px', flexShrink: 0 }}>
                                                        <Volume2 size={18} />
                                                    </button>
                                                </div>
                                                <textarea
                                                    placeholder="→ Answer here..."
                                                    value={userAnswers[`open-${idx}`] || ''}
                                                    onChange={(e) => handleAnswerChange(`open-${idx}`, e.target.value)}
                                                    style={{
                                                        width: '100%',
                                                        padding: '1rem',
                                                        borderRadius: '8px',
                                                        border: '1px solid var(--border-color)',
                                                        background: 'var(--bg-secondary)',
                                                        color: 'var(--text-primary)',
                                                        minHeight: '80px',
                                                        resize: 'vertical',
                                                        fontSize: '1rem',
                                                        boxSizing: 'border-box'
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Info Questions */}
                                <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                    <h4 style={{ color: 'var(--success-color)', marginBottom: '1.5rem', fontSize: '1.3rem', borderBottom: '2px solid rgba(0, 200, 83, 0.2)', paddingBottom: '0.5rem' }}>Questions d'Information</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {currentReadingStory.infoQuestions.map((q, idx) => (
                                            <div key={`info-${idx}`}>
                                                <div style={{ marginBottom: '0.75rem', fontWeight: 500, color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.4, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                    <div style={{ flex: '1 1 auto', minWidth: 'min-content' }}>
                                                        <div>{idx + 1}. {q.french}</div>
                                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '0.25rem' }}>{q.english}</div>
                                                    </div>
                                                    <button onClick={() => speakFrench(q.french)} title="Listen to question" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', padding: 0, marginTop: '2px', flexShrink: 0 }}>
                                                        <Volume2 size={18} />
                                                    </button>
                                                </div>
                                                <textarea
                                                    placeholder="→ Answer here..."
                                                    value={userAnswers[`info-${idx}`] || ''}
                                                    onChange={(e) => handleAnswerChange(`info-${idx}`, e.target.value)}
                                                    style={{
                                                        width: '100%',
                                                        padding: '1rem',
                                                        borderRadius: '8px',
                                                        border: '1px solid var(--border-color)',
                                                        background: 'var(--bg-secondary)',
                                                        color: 'var(--text-primary)',
                                                        minHeight: '80px',
                                                        resize: 'vertical',
                                                        fontSize: '1rem',
                                                        boxSizing: 'border-box'
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* LISTENING MODE CONTENT */}
                {mode === 'listening' && (
                    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ background: 'var(--bg-secondary)', borderRadius: '16px', padding: '2rem', boxShadow: 'var(--shadow-hover)' }}>
                            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.8rem', textAlign: 'center' }}>{currentListeningStory.title}</h2>

                            {/* Audio Controls */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                                <button
                                    onClick={() => speakFrench(currentListeningStory.script, 0.9)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                                        padding: '1rem 2rem', background: 'var(--primary-color)', color: 'white',
                                        borderRadius: '50px', border: 'none', fontSize: '1.1rem', fontWeight: 'bold',
                                        cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', transition: 'all 0.2s'
                                    }}
                                >
                                    <PlayCircle size={24} /> Écouter (Vitesse Naturelle)
                                </button>
                                <button
                                    onClick={() => speakFrench(currentListeningStory.script, 0.6)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                                        padding: '0.75rem 1.5rem', background: 'transparent', color: 'var(--accent-cyan)',
                                        borderRadius: '50px', border: '2px solid var(--accent-cyan)', fontSize: '1rem', fontWeight: 'bold',
                                        cursor: 'pointer', transition: 'all 0.2s'
                                    }}
                                >
                                    <Volume2 size={20} /> Écouter Lentement (Version Lente)
                                </button>
                            </div>

                            {/* Transcript Toggle */}
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <button
                                    onClick={() => setShowTranscript(!showTranscript)}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                        background: 'none', border: 'none', color: 'var(--text-secondary)',
                                        cursor: 'pointer', fontSize: '1rem', textDecoration: 'underline'
                                    }}
                                >
                                    {showTranscript ? <EyeOff size={18} /> : <Eye size={18} />}
                                    {showTranscript ? 'Cacher la transcription' : 'Afficher la transcription'}
                                </button>
                            </div>

                            {/* Transcript Content */}
                            {showTranscript && (
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '1.5rem',
                                    border: '1px solid var(--border-color)', marginBottom: '2rem',
                                    color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: 1.6, whiteSpace: 'pre-wrap'
                                }}>
                                    {currentListeningStory.script}
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                            {/* Left: Questions */}
                            <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.3rem', borderBottom: '2px solid rgba(54, 134, 201, 0.2)', paddingBottom: '0.5rem' }}>
                                    Questions de Compréhension
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {currentListeningStory.questions.map((q, idx) => (
                                        <div key={`listen-q-${idx}`}>
                                            <div style={{ marginBottom: '0.75rem', fontWeight: 500, color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.4, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                <div style={{ flex: '1 1 auto', minWidth: 'min-content' }}>
                                                    <div>{idx + 1}. {q.french}</div>
                                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '0.25rem' }}>{q.english}</div>
                                                </div>
                                                <button onClick={() => speakFrench(q.french)} title="Listen to question" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-cyan)', padding: 0, marginTop: '2px', flexShrink: 0 }}>
                                                    <Volume2 size={18} />
                                                </button>
                                            </div>
                                            <textarea
                                                placeholder="→ Answer here..."
                                                value={userAnswers[`listen-q-${idx}`] || ''}
                                                onChange={(e) => handleAnswerChange(`listen-q-${idx}`, e.target.value)}
                                                style={{
                                                    width: '100%', padding: '1rem', borderRadius: '8px',
                                                    border: '1px solid var(--border-color)', background: 'var(--bg-secondary)',
                                                    color: 'var(--text-primary)', minHeight: '80px', resize: 'vertical',
                                                    fontSize: '1rem', boxSizing: 'border-box'
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Vocabulary */}
                            <div style={{ background: 'rgba(0, 200, 83, 0.05)', border: '1px solid var(--success-color)', borderRadius: '12px', padding: '1.5rem' }}>
                                <h3 style={{ color: 'var(--success-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    💡 Vocabulaire Utile
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {currentListeningStory.vocabulary.map((vocab, idx) => (
                                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border-color)', paddingBottom: '0.75rem' }}>
                                            <div style={{ flex: 1, paddingRight: '1rem' }}>
                                                <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{vocab.french}</div>
                                                {vocab.english && <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{vocab.english}</div>}
                                            </div>
                                            <button onClick={() => speakFrench(vocab.french)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success-color)', padding: '0.25rem' }}>
                                                <Volume2 size={20} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Desktop Right Sidebar for Levels */}
                <div className="reading-sidebar" style={{
                    width: '320px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '1px solid var(--border-color)',
                    position: 'sticky',
                    top: '5rem',
                    display: 'none',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    <h3 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.4rem' }}>
                        Niveaux (Levels)
                    </h3>
                    {storiesArray.map(story => (
                        <button
                            key={story.level}
                            onClick={() => {
                                setSelectedLevel(story.level);
                                setUserAnswers({});
                                setShowTranscript(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            style={{
                                textAlign: 'left',
                                padding: '1rem',
                                borderRadius: '12px',
                                border: `2px solid ${selectedLevel === story.level ? 'var(--primary-color)' : 'transparent'}`,
                                background: selectedLevel === story.level ? 'rgba(54, 134, 201, 0.1)' : 'var(--bg-primary)',
                                color: selectedLevel === story.level ? 'var(--primary-color)' : 'var(--text-primary)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.25rem'
                            }}
                        >
                            <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{story.level}</span>
                            <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>{story.title}</span>
                        </button>
                    ))}
                </div>
            </div>

            <style>{`
            @media (min-width: 1024px) {
                .reading-sidebar {
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

export default ReadingPage;
