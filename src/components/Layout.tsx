import { useState, useRef, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Grid, Book, PenTool, Mic, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const themeMenuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const { theme, setTheme, activeTheme } = useTheme();

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (menuRef.current && !menuRef.current.contains(target)) {
                setIsMenuOpen(false);
            }
            if (themeMenuRef.current && !themeMenuRef.current.contains(target)) {
                setIsThemeMenuOpen(false);
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
        setIsThemeMenuOpen(false);
    }, [location]);

    const navItems = [
        { path: '/', label: 'Accueil (Home)', icon: <BookOpen size={24} />, color: '#2C3E50' },
        { path: '/conjugation', label: 'Conjugaison (Conjugation)', icon: <BookOpen size={24} />, color: '#B4C540' },
        { path: '/grammar', label: 'Grammaire (Grammar)', icon: <Book size={24} />, color: '#3686C9' },
        { path: '/reading', label: 'Lecture (Reading)', icon: <Book size={24} />, color: '#575A6C' },
        { path: '/writing', label: 'Écriture (Writing)', icon: <PenTool size={24} />, color: '#3686C9' },
        { path: '/speaking', label: 'Expression orale (Speaking)', icon: <Mic size={24} />, color: '#B4C540' },
        { path: '/resources', label: 'Ressources (Resources)', icon: <BookOpen size={24} />, color: '#E67E22' },
        { path: '/level-guide', label: 'Guide CEFR (Level Guide)', icon: <BookOpen size={24} />, color: '#4CAF50' },
        { path: '/translate', label: 'Traduction (Translate)', icon: <Book size={24} />, color: '#9C27B0' },
    ];

    return (
        <div className="app-container">
            <header style={{
                padding: '1rem 2rem',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'var(--bg-primary)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '3.5rem', fontWeight: 800, textDecoration: 'none' }}>
                    <BookOpen size={48} color="var(--primary-color)" />
                    <span style={{
                        letterSpacing: '-1px',
                        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 40%, var(--accent-cyan) 70%, var(--accent-purple) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>Le Français</span>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Theme Toggle */}
                    <div ref={themeMenuRef} style={{ position: 'relative' }}>
                        <button
                            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
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
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'system' ? <Monitor size={24} /> : activeTheme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                        </button>

                        {isThemeMenuOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '120%',
                                right: 0,
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                                padding: '0.5rem',
                                minWidth: '150px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.25rem',
                                zIndex: 1000
                            }}>
                                {[
                                    { value: 'light', label: 'Light', icon: <Sun size={18} /> },
                                    { value: 'dark', label: 'Dark', icon: <Moon size={18} /> },
                                    { value: 'system', label: 'System', icon: <Monitor size={18} /> }
                                ].map((t) => (
                                    <button
                                        key={t.value}
                                        onClick={() => {
                                            setTheme(t.value as 'light' | 'dark' | 'system');
                                            setIsThemeMenuOpen(false);
                                        }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem 1rem',
                                            background: theme === t.value ? 'var(--bg-tertiary)' : 'transparent',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: 'var(--text-primary)',
                                            width: '100%',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (theme !== t.value) e.currentTarget.style.background = 'var(--bg-tertiary)'
                                        }}
                                        onMouseLeave={(e) => {
                                            if (theme !== t.value) e.currentTarget.style.background = 'transparent'
                                        }}
                                    >
                                        {t.icon}
                                        <span>{t.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* App Launcher */}
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
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
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
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                                padding: '1rem',
                                width: 'min(320px, calc(100vw - 4rem))',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                                gap: '0.5rem',
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
                                            padding: '0.75rem 0.25rem',
                                            borderRadius: '12px',
                                            textDecoration: 'none',
                                            color: 'var(--text-primary)',
                                            transition: 'background 0.2s',
                                            textAlign: 'center',
                                            wordBreak: 'break-word',
                                            hyphens: 'auto'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <div style={{
                                            color: item.color,
                                            marginBottom: '0.5rem',
                                            background: activeTheme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
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
