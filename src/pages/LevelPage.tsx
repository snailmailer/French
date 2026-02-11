import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { a1Data } from '../data/a1';
import { a2Data } from '../data/a2';
import { b1Data } from '../data/b1';
import { b2Data } from '../data/b2';
import type { LevelData } from '../data/types';

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

    const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="container">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                <ArrowLeft size={20} /> Back to Levels
            </Link>

            <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <h1 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{levelData.title}</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{levelData.description}</p>
            </header>

            <div className="topics-list">
                {levelData.topics.map((topic) => (
                    <section key={topic.id} style={{ marginBottom: '4rem', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px' }}>
                        <h2 style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>{topic.title}</h2>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{topic.translation}</p>

                        {topic.blocks.map((block, idx) => {
                            if (block.type === 'markdown') {
                                return <div key={idx} dangerouslySetInnerHTML={{ __html: block.content }} className="topic-content" style={{ marginBottom: '1.5rem' }} />;
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
                                                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--accent-color)' }}
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
                                    <div key={idx} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                                        <h4>Examples</h4>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            {block.list.map((ex, eIdx) => (
                                                <li key={eIdx} style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <span style={{ fontWeight: '500', fontSize: '1.1em' }}>{ex.french}</span>
                                                        <button
                                                            onClick={() => speak(ex.french)}
                                                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
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
