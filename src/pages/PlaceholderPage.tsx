import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

const PlaceholderPage = () => {

    return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <Construction size={64} color="var(--text-secondary)" style={{ opacity: 0.5, marginBottom: '2rem' }} />
            <h1 style={{ color: '#E0E2D2', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Lecture</h1>
            <p style={{ fontSize: '1.5rem', color: '#3686C9', fontWeight: 'bold', marginBottom: '2rem' }}>
                (Reading)
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Cette section est en cours de développement. Restez à l'écoute !
            </p>
            <Link to="/" style={{
                background: 'var(--accent-color)',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500
            }}>
                Back to Home
            </Link>
        </div>
    );
};

export default PlaceholderPage;
