import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

const PlaceholderPage = () => {

    return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <Construction size={64} color="var(--text-secondary)" style={{ opacity: 0.5, marginBottom: '2rem' }} />
            <h1 style={{ color: 'var(--accent-color)', marginBottom: '0.25rem' }}>Lecture</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>(Reading)</p>
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
