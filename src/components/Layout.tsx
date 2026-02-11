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
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    <BookOpen size={32} color="var(--accent-color)" />
                    <span>Le Français</span>
                </Link>
                <nav>
                    <nav style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="/conjugation" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                            Conjugation Tool
                        </Link>
                    </nav>        </nav>
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
