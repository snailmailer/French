import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { speakFrench } from '../utils/tts';
import { readingStories } from '../data/readingStories';

const ReadingPage = () => {
    const [selectedLevel, setSelectedLevel] = useState<string>('A1');
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

    const currentStory = readingStories.find(s => s.level === selectedLevel) || readingStories[0];

    const handleAnswerChange = (questionIndex: string, value: string) => {
        setUserAnswers(prev => ({ ...prev, [questionIndex]: value }));
    };

    return (
        <div className="reading-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '0.25rem', color: '#E0E2D2', textTransform: 'uppercase' }}>
                Pratique de Lecture
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#3686C9', fontWeight: 'bold', marginBottom: '2rem' }}>
                (Reading Practice)
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(level => (
                    <button
                        key={level}
                        onClick={() => { setSelectedLevel(level); setUserAnswers({}); }}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '12px',
                            border: `2px solid ${selectedLevel === level ? 'var(--primary-color)' : 'var(--border-color)'}`,
                            background: selectedLevel === level ? 'rgba(54, 134, 201, 0.1)' : 'var(--bg-secondary)',
                            color: selectedLevel === level ? 'var(--primary-color)' : 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            transition: 'all 0.2s',
                            flex: '1 1 auto',
                            maxWidth: '120px'
                        }}
                    >
                        {level}
                    </button>
                ))}
            </div>

            <div style={{ background: 'var(--bg-secondary)', borderRadius: '16px', padding: '2rem', boxShadow: 'var(--shadow-hover)' }}>
                <h2 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontSize: '1.8rem', textAlign: 'center' }}>{currentStory.title}</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontStyle: 'italic', fontSize: '1.1rem', textAlign: 'center' }}>Personnages : {currentStory.characters}</p>

                {/* Comic Strip Image */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto 3rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
                    <img src={currentStory.image} alt={currentStory.title} style={{ width: '100%', display: 'block' }} />
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
                        {currentStory.comicDialogue}
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
                    {currentStory.dialogue.map((line, idx) => (
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
                            📚 {currentStory.grammar.title}
                        </h3>
                        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: 0 }}>
                            {currentStory.grammar.points.map((pt, idx) => (
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
                            {currentStory.expressions.map((exp, idx) => (
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
                            {currentStory.openQuestions.map((q, idx) => (
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
                            {currentStory.infoQuestions.map((q, idx) => (
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
    );
};

export default ReadingPage;
