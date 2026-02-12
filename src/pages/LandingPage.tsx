import { Link } from 'react-router-dom';
import { Book, PenTool, Mic, BookOpen } from 'lucide-react';

const features = [
    {
        id: 'grammar',
        title: 'Grammar',
        desc: 'Master French rules, pronouns, and sentence structures.',
        icon: <Book size={32} />,
        path: '/grammar',
        color: '#ffffff',
        textColor: '#3686C9',
        borderColor: '#3686C9'
    },
    {
        id: 'conjugation',
        title: 'Conjugation Tool',
        desc: 'Explore 100+ verbs with tenses, usage guides, and audio.',
        icon: <BookOpen size={32} />,
        path: '/conjugation',
        color: '#ffffff',
        textColor: '#B4C540',
        borderColor: '#B4C540'
    },
    {
        id: 'reading',
        title: 'Reading',
        desc: 'Practice reading comprehension with engaging stories.',
        icon: <Book size={32} />,
        path: '/reading',
        color: '#ffffff',
        textColor: '#575A6C',
        borderColor: '#575A6C'
    },
    {
        id: 'writing',
        title: 'Writing',
        desc: 'Improve your written French with exercises and prompts.',
        icon: <PenTool size={32} />,
        path: '/writing',
        color: '#ffffff',
        textColor: '#3686C9',
        borderColor: '#3686C9'
    },
    {
        id: 'speaking',
        title: 'Speaking',
        desc: 'Enhance pronunciation and speaking confidence.',
        icon: <Mic size={32} />,
        path: '/speaking',
        color: '#ffffff',
        textColor: '#B4C540',
        borderColor: '#B4C540'
    },
];

const LandingPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Bienvenue !</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                Start your French learning journey with our comprehensive tools.
            </p>

            <div className="feature-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {features.map((feature) => (
                    <Link
                        to={feature.path}
                        key={feature.id}
                        style={{
                            background: feature.color,
                            padding: '2rem',
                            borderRadius: '16px',
                            textDecoration: 'none',
                            color: 'var(--text-primary)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            borderLeft: `6px solid ${feature.borderColor}`,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            color: feature.textColor,
                            background: 'rgba(255,255,255,0.6)',
                            padding: '1rem',
                            borderRadius: '50%',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {feature.icon}
                        </div>
                        <h3 style={{ margin: '0.5rem 0 1rem', color: feature.textColor, fontSize: '1.5rem' }}>{feature.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
