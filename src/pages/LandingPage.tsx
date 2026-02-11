import { Link } from 'react-router-dom';

const levels = [
    { id: 'A1', title: 'A1 - Absolute Beginner', desc: 'Present tense, basic verbs, simple phrases, food.' },
    { id: 'A2', title: 'A2 - Elementary', desc: 'Past tense, comparisons, pronouns, daily life.' },
    { id: 'B1', title: 'B1 - Intermediate', desc: 'Narrative past, future, advice, complex speech.' },
    { id: 'B2', title: 'B2 - Upper Intermediate', desc: 'Nuance, complex pronouns, advanced tenses.' },
];

const LandingPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h1>Choose Your Level</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                Select a proficiency level to start your French learning journey.
            </p>

            <div className="level-grid">
                {levels.map((level) => (
                    <Link to={`/level/${level.id}`} key={level.id} className="level-card">
                        <div className="level-title" style={{ color: 'var(--accent-color)' }}>{level.id}</div>
                        <h3 style={{ margin: '0.5rem 0' }}>{level.title.split(' - ')[1]}</h3>
                        <p className="level-desc">{level.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
