import { Link } from 'react-router-dom';
import { Book, PenTool, Mic, BookOpen, GraduationCap } from 'lucide-react';

const features = [
    {
        id: 'grammar',
        title: 'Grammaire et Vocabulaire (Grammar & Vocabulary)',
        desc: 'Master French rules, vocabulary, pronouns, and sentence structures.',
        icon: <Book size={32} />,
        path: '/grammar',
        color: 'var(--card-bg)',
        textColor: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    },
    {
        id: 'conjugation',
        title: 'Outil de Conjugaison (Conjugation Tool)',
        desc: 'Explore 100+ verbs with tenses, usage guides, and audio.',
        icon: <BookOpen size={32} />,
        path: '/conjugation',
        color: 'var(--card-bg)',
        textColor: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    },
    {
        id: 'reading',
        title: 'Lecture et Écoute (Reading & Listening)',
        desc: 'Practice reading comprehension and listening skills with engaging stories.',
        icon: <Book size={32} />,
        path: '/reading',
        color: 'var(--card-bg)',
        textColor: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    },
    {
        id: 'writing',
        title: 'Pratique d\'Écriture (Writing Practice)',
        desc: 'Improve your written French with exercises and prompts.',
        icon: <PenTool size={32} />,
        path: '/writing',
        color: 'var(--card-bg)',
        textColor: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    },
    {
        id: 'speaking',
        title: 'Expression Orale (Speaking Practice)',
        desc: 'Enhance pronunciation and speaking confidence.',
        icon: <Mic size={32} />,
        path: '/speaking',
        color: 'var(--card-bg)',
        textColor: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    },
    {
        id: 'resources',
        title: 'Ressources Externes (External Resources)',
        desc: 'External tools, news, and practice materials.',
        icon: <BookOpen size={32} />,
        path: '/resources',
        color: 'var(--card-bg)',
        textColor: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    },
];

const LandingPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                BIENVENUE !
            </h1>
            <p style={{ fontSize: '1.4rem', color: 'var(--accent-cyan)', fontWeight: 'bold', marginBottom: '4rem' }}>
                (Welcome!)
            </p>

            {/* BIG BUTTON FOR LEVEL GUIDE & TRANSLATE */}
            <div style={{ maxWidth: '1200px', margin: '0 auto 4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <Link
                    to="/level-guide"
                    className="command-card-style"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2rem',
                        padding: '2.5rem 2rem',
                        textDecoration: 'none',
                        borderLeft: '8px solid var(--accent-color)',
                        background: 'var(--bg-secondary)',
                        flex: 1
                    }}
                >
                    <div style={{
                        color: 'var(--accent-color)',
                        background: 'rgba(76, 175, 80, 0.08)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <GraduationCap size={48} />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h2 style={{ margin: '0 0 0.5rem', fontSize: '2rem', color: 'var(--text-primary)' }}>
                            Guide des Niveaux CECR
                        </h2>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.2rem', fontStyle: 'italic' }}>
                            (French CEFR Level Guide)
                        </p>
                    </div>
                </Link>

                <Link
                    to="/translate"
                    className="command-card-style"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2rem',
                        padding: '2.5rem 2rem',
                        textDecoration: 'none',
                        borderLeft: '8px solid var(--accent-purple)',
                        background: 'var(--bg-secondary)',
                        flex: 1
                    }}
                >
                    <div style={{
                        color: 'var(--accent-purple)',
                        background: 'rgba(156, 39, 176, 0.08)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Book size={48} />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h2 style={{ margin: '0 0 0.5rem', fontSize: '2rem', color: 'var(--text-primary)' }}>
                            Traduction
                        </h2>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.2rem', fontStyle: 'italic' }}>
                            (Translation Tool)
                        </p>
                    </div>
                </Link>
            </div>

            <div className="feature-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {features.map((feature) => {
                    const [frTitle, enTitle] = feature.title.split(' (');
                    const cleanedEnTitle = enTitle ? enTitle.replace(')', '') : '';

                    return (
                        <Link
                            to={feature.path}
                            key={feature.id}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                textDecoration: 'none',
                                padding: '2.5rem 2rem',
                                fontFamily: "'Segoe UI', system-ui, sans-serif"
                            }}
                            className="command-card-style"
                        >
                            <div style={{
                                color: 'var(--primary-color)',
                                background: 'rgba(0, 120, 212, 0.2)',
                                padding: '1rem',
                                borderRadius: '50%',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{
                                margin: '0.25rem 0 1rem',
                                color: 'var(--text-primary)',
                                fontSize: '1.4rem',
                                fontWeight: 700,
                                fontFamily: "'Segoe UI', system-ui, sans-serif",
                                textTransform: 'uppercase'
                            }}>
                                {frTitle}
                            </h3>
                            {cleanedEnTitle && (
                                <p style={{
                                    padding: '0.35rem 0.75rem',
                                    background: 'rgba(0, 120, 212, 0.2)',
                                    border: '1px solid var(--primary-color)',
                                    borderRadius: '20px',
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                    color: 'var(--primary-color)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    whiteSpace: 'nowrap',
                                    margin: '0 0 1.5rem',
                                }}>
                                    {cleanedEnTitle}
                                </p>
                            )}
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginTop: 'auto' }}>{feature.desc}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default LandingPage;
