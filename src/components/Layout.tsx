import { useState, useRef, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Grid, Book, PenTool, Mic } from 'lucide-react';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navItems = [
        { path: '/', label: 'Accueil (Home)', icon: <BookOpen size={24} />, color: '#2C3E50' },
        { path: '/conjugation', label: 'Conjugaison (Conjugation)', icon: <BookOpen size={24} />, color: '#B4C540' },
        { path: '/grammar', label: 'Grammaire (Grammar)', icon: <Book size={24} />, color: '#3686C9' },
        { path: '/reading', label: 'Lecture (Reading)', icon: <Book size={24} />, color: '#575A6C' },
        { path: '/writing', label: 'Écriture (Writing)', icon: <PenTool size={24} />, color: '#3686C9' },
        { path: '/speaking', label: 'Expression orale (Speaking)', icon: <Mic size={24} />, color: '#B4C540' },
        { path: '/resources', label: 'Ressources (Resources)', icon: <BookOpen size={24} />, color: '#E67E22' },
    ];

    return (
        <div className="app-container">
            <header style={{
                padding: '1rem 2rem',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'var(--bg-secondary)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)' // Added shadow for better visibility when scrolling
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-primary)', textDecoration: 'none' }}>
                    <BookOpen size={48} color="var(--accent-color)" />
                    <span style={{ letterSpacing: '-1px' }}>Le Français</span>
                </Link>

                <div ref={menuRef} style={{ position: 'relative' }}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.8rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-primary)',
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        aria-label="App Launcher"
                    >
                        <Grid size={48} />
                    </button>

                    {isMenuOpen && (
                        <div style={{
                            position: 'absolute',
                            top: '120%',
                            right: 0,
                            background: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: '16px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            padding: '1rem',
                            width: '320px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1rem',
                            zIndex: 1000
                        }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1rem 0.5rem',
                                        borderRadius: '12px',
                                        textDecoration: 'none',
                                        color: '#000000', // Darker font as requested
                                        transition: 'background 0.2s',
                                        textAlign: 'center'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    <div style={{
                                        color: item.color,
                                        marginBottom: '0.5rem',
                                        background: 'rgba(0,0,0,0.03)',
                                        padding: '0.8rem',
                                        borderRadius: '50%'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
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
