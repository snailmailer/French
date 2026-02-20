import { ExternalLink, Globe } from 'lucide-react';

const resources = [
    {
        title: 'TV5Monde: Apprendre le français',
        url: 'https://apprendre.tv5monde.com/fr',
        desc: 'Interactive exercises, videos, and news for all levels (A1-B2).',
        color: '#00AEEF'
    },
    {
        title: 'Alliance Française: Review and Practice',
        url: 'https://www.alliance-francaise.ca/en/education/review-and-practice',
        desc: 'Official practice materials and grammar reviews.',
        color: '#E30613'
    },
    {
        title: 'Vitrine linguistique (OQLF)',
        url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/ressources-linguistiques/outils-apprendre-francais',
        desc: 'Tools and resources for learning French from the Office québécois de la langue française.',
        color: '#2C3E50'
    },
    {
        title: 'FrenchLearner.com',
        url: 'https://www.frenchlearner.com/learning-french/french-for-beginners/',
        desc: 'Comprehensive guides and lessons for beginners.',
        color: '#27ae60'
    }
];

const ResourcesPage = () => {
    return (
        <div className="container" style={{ maxWidth: '900px', padding: '3rem 1rem' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.25rem', color: '#E0E2D2', textTransform: 'uppercase' }}>
                Ressources Externes
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#3686C9', fontWeight: 'bold', marginBottom: '2rem' }}>
                (External Resources)
            </p>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
                Liens sélectionnés pour approfondir vos études de français.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                {resources.map((res, index) => (
                    <a
                        key={index}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: '#ffffff',
                            padding: '2rem',
                            borderRadius: '16px',
                            textDecoration: 'none',
                            color: 'var(--text-primary)',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            borderLeft: `6px solid ${res.color}`
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                        }}
                    >
                        <div style={{
                            background: `${res.color}20`,
                            padding: '1rem',
                            borderRadius: '50%',
                            marginRight: '1.5rem',
                            color: res.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Globe size={28} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem', color: res.color }}>{res.title}</h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                {res.desc}
                            </p>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#95a5a6', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                <ExternalLink size={14} /> {new URL(res.url).hostname}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ResourcesPage;
