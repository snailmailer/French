import { Outlet, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Layout = () => {
    return (
        <div className="app-container">
            <header style={{
                padding: '1.5rem 2rem',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'var(--bg-secondary)'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    <BookOpen size={40} color="var(--accent-color)" />
                    <span>Le Français</span>
                </Link>
                <nav style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link to="/" style={{
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        background: 'transparent',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        transition: 'background 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        Home
                    </Link>
                    <Link to="/conjugation" style={{
                        color: 'white',
                        fontWeight: 500,
                        background: '#B4C540',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        transition: 'background 0.2s'
                    }}>
                        Conjugation Tool
                    </Link>
                    <Link to="/grammar" style={{
                        color: 'white',
                        fontWeight: 500,
                        background: '#3686C9',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        transition: 'background 0.2s'
                    }}>
                        Grammar
                    </Link>
                    <Link to="/reading" style={{
                        color: 'white',
                        fontWeight: 500,
                        background: '#575A6C', // Dark Grey for Reading to match Reading card text
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        transition: 'background 0.2s'
                    }}>
                        Reading
                    </Link>
                    <Link to="/writing" style={{
                        color: 'white',
                        fontWeight: 500,
                        background: '#3686C9', // Matching Writing card
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        transition: 'background 0.2s'
                    }}>
                        Writing
                    </Link>
                    <Link to="/speaking" style={{
                        color: 'white',
                        fontWeight: 500,
                        background: '#B4C540', // Matching Speaking card
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        transition: 'background 0.2s'
                    }}>
                        Speaking
                    </Link>
                </nav>
            </header>
            <main className="container">
                <Outlet />
            </main>
            <footer style={{
                textAlign: 'center',
                padding: '2rem',
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border-color)',
                marginTop: 'auto'
            }}>
                <p>Apprendre le français - Bon courage !</p>
            </footer>
        </div>
    );
};

export default Layout;
