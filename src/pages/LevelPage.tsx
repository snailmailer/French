import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { a1Data } from '../data/a1';
import { a2Data } from '../data/a2';
import { b1Data } from '../data/b1';
import { b2Data } from '../data/b2';
import type { LevelData } from '../data/types';

import { speakFrench } from '../utils/tts';

const dataMap: { [key: string]: LevelData } = {
    'A1': a1Data,
    'A2': a2Data,
    'B1': b1Data,
    'B2': b2Data,
};

const LevelPage = () => {
    const { levelId } = useParams<{ levelId: string }>();
    const levelData = levelId ? dataMap[levelId] : null;

    if (!levelData) {
        return <div className="container">Level not found</div>;
    }

    const speak = (text: string) => speakFrench(text);

    return (
        <div className="container">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                <ArrowLeft size={20} /> Back to Levels
            </Link>

            <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <h1 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {levelData.title}
                    <button
                        onClick={() => speak(levelData.title)}
                        style={{ background: 'transparent', border: '1px solid var(--success-color)', borderRadius: '50%', cursor: 'pointer', padding: '0.4rem', color: 'var(--success-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        title="Listen"
                    >
                        <span style={{ fontSize: '1.2rem' }}>🔊</span>
                    </button>
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{levelData.description}</p>
            </header>

            <div className="topics-list">
                {levelData.topics.map((topic) => (
                    <section key={topic.id} style={{ marginBottom: '4rem', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid var(--primary-color)' }}>
                        <h2 style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {topic.title}
                                <button
                                    onClick={() => speak(topic.title)}
                                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)', padding: 0 }}
                                    title="Listen"
                                >
                                    🔊
                                </button>
                            </span>
                            <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>{topic.translation}</span>
                        </h2>

                        {/* Topic-level Formula */}
                        {topic.formula && (
                            <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)', marginBottom: '1.5rem' }}>
                                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-cyan)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Formula</h4>
                                <div style={{ fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{topic.formula}</div>
                            </div>
                        )}

                        {topic.blocks.map((block, idx) => {
                            if (block.type === 'markdown') {
                                return (
                                    <div key={idx} style={{ display: 'grid', gridTemplateColumns: block.translation ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '2rem', alignItems: 'start' }}>
                                        <div dangerouslySetInnerHTML={{ __html: block.content }} className="topic-content" />
                                        {block.translation && (
                                            <div style={{ color: 'var(--text-secondary)', fontStyle: 'italic', borderLeft: '2px solid var(--border-color)', paddingLeft: '1rem' }}>
                                                <div dangerouslySetInnerHTML={{ __html: block.translation }} />
                                            </div>
                                        )}
                                    </div>
                                );
                            } else if (block.type === 'formula') {
                                return (
                                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                                        <h4 style={{ margin: 0, color: 'var(--accent-cyan)' }}>Structure</h4>
                                        {block.items.map((item, i) => (
                                            <div key={i} style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>{item}</div>
                                        ))}
                                    </div>
                                );
                            } else if (block.type === 'conjugation') {
                                return (
                                    <div key={idx} style={{ margin: '2rem 0' }}>
                                        <h4 style={{ color: 'var(--accent-color)' }}>{block.verb} ({block.tense})</h4>
                                        <table className="conjugation-table">
                                            <tbody>
                                                {block.data.map((row, rIdx) => (
                                                    <tr key={rIdx}>
                                                        <td style={{ fontWeight: 'bold' }}>{row.pronoun}</td>
                                                        <td>{row.form}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => speak(`${row.pronoun} ${row.form}`)}
                                                                title="Listen"
                                                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)' }}
                                                            >
                                                                🔊
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                );
                            } else if (block.type === 'examples') {
                                return (
                                    <div key={idx} style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)' }}>
                                        <h4 style={{ color: 'var(--accent-cyan)' }}>Examples</h4>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            {block.list.map((ex, eIdx) => (
                                                <li key={eIdx} style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <span style={{ fontWeight: '500', fontSize: '1.1em' }}>{ex.french}</span>
                                                        <button
                                                            onClick={() => speak(ex.french)}
                                                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--success-color)' }}
                                                        >
                                                            🔊
                                                        </button>
                                                    </div>
                                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>{ex.translation}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </section>
                ))}
            </div>
        </div>
    );
};

export default LevelPage;
