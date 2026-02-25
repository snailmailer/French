import { useState } from 'react';
import { RefreshCw, Volume2, Book, CheckSquare } from 'lucide-react';

const TranslatePage = () => {
    const [sourceText, setSourceText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [isTranslating, setIsTranslating] = useState(false);
    const [direction, setDirection] = useState<'EN_TO_FR' | 'FR_TO_EN'>('EN_TO_FR');

    const handleSwapLanguages = () => {
        setDirection((prev) => (prev === 'EN_TO_FR' ? 'FR_TO_EN' : 'EN_TO_FR'));
        setSourceText(translatedText);
        setTranslatedText(sourceText);
    };

    const handleTranslate = async () => {
        if (!sourceText.trim()) return;
        setIsTranslating(true);

        try {
            const sl = direction === 'EN_TO_FR' ? 'en' : 'fr';
            const tl = direction === 'EN_TO_FR' ? 'fr' : 'en';
            const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(sourceText)}`);
            const data = await response.json();

            if (data && data[0]) {
                const translated = data[0].map((item: any) => item[0]).join('');
                setTranslatedText(translated);
            } else {
                setTranslatedText('Erreur de traduction. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Translation error:', error);
            setTranslatedText('Error connecting to translation service.');
        } finally {
            setIsTranslating(false);
        }
    };

    const handleTTS = (text: string, lang: 'en-US' | 'fr-FR') => {
        if (!text) return;
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9;
        synth.speak(utterance);
    };

    // MOCK DATA for CEFR Comparisons
    const cefrComparisons = [
        { level: 'A1', type: 'Written', sentence: 'Voici un chat.' },
        { level: 'A1', type: 'Spoken', sentence: 'C\'est un chat.' },
        { level: 'A2', type: 'Written', sentence: 'Je vois un petit chat noir dans la rue.' },
        { level: 'A2', type: 'Spoken', sentence: 'Regarde le petit chat là-bas.' },
        { level: 'B1', type: 'Written', sentence: 'Le chat, qui appartient à mon voisin, se repose au soleil.' },
        { level: 'B1', type: 'Spoken', sentence: 'Le chat du voisin est en train de se reposer au soleil.' },
        { level: 'B2', type: 'Written', sentence: 'Bien que le chat soit un animal indépendant, il apprécie néanmoins la compagnie.' },
        { level: 'B2', type: 'Spoken', sentence: 'Même si c\'est un chat assez indépendant, il aime bien être avec nous.' },
        { level: 'C1', type: 'Written', sentence: 'La nature intrinsèquement solitaire du félin contraste singulièrement avec son besoin d\'affection sporadique.' },
        { level: 'C1', type: 'Spoken', sentence: 'Le côté solitaire du chat contraste pas mal avec ses moments où il est hyper affectueux.' },
    ];

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-primary)', fontSize: '2.5rem' }}>
                Traduction & Comparaison
            </h1>

            {/* Translation Box */}
            <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                padding: '2rem',
                marginBottom: '4rem'
            }}>
                {/* Language Swap Controls */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '2rem'
                }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                        {direction === 'EN_TO_FR' ? 'English' : 'Français'}
                    </span>
                    <button
                        onClick={handleSwapLanguages}
                        style={{
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '50%',
                            padding: '0.75rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-primary)',
                            transition: 'all 0.2s ease',
                        }}
                        title="Swap Languages"
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(180deg)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                    >
                        <RefreshCw size={24} />
                    </button>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                        {direction === 'EN_TO_FR' ? 'Français' : 'English'}
                    </span>
                </div>

                {/* Text Areas */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    alignItems: 'stretch'
                }}>
                    {/* Source Container */}
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                        <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <textarea
                                value={sourceText}
                                onChange={(e) => setSourceText(e.target.value)}
                                placeholder={direction === 'EN_TO_FR' ? 'Enter English text...' : 'Entrez le texte en français...'}
                                style={{
                                    width: '100%',
                                    minHeight: '220px',
                                    flex: 1,
                                    padding: '1rem',
                                    paddingBottom: '3.5rem',
                                    borderRadius: '12px',
                                    border: '2px solid var(--border-color)',
                                    background: 'var(--bg-primary)',
                                    color: 'var(--text-primary)',
                                    fontSize: '1.1rem',
                                    resize: 'none',
                                    fontFamily: 'inherit',
                                    boxSizing: 'border-box'
                                }}
                            />
                            <button
                                onClick={() => handleTTS(sourceText, direction === 'EN_TO_FR' ? 'en-US' : 'fr-FR')}
                                style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    right: '1rem',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--text-secondary)',
                                }}
                                title="Listen"
                            >
                                <Volume2 size={24} />
                            </button>
                        </div>
                        {direction === 'FR_TO_EN' && (
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                                justifyContent: 'center',
                                padding: '0.5rem',
                                background: 'var(--bg-tertiary)',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)'
                            }}>
                                {['é', 'è', 'ê', 'ë', 'à', 'â', 'ç', 'ù', 'û', 'ô', 'î', 'ï', 'œ'].map((char) => (
                                    <button
                                        key={char}
                                        onClick={() => setSourceText(prev => prev + char)}
                                        style={{
                                            padding: '0.5rem 0.8rem',
                                            fontSize: '1.1rem',
                                            cursor: 'pointer',
                                            backgroundColor: 'var(--bg-primary)',
                                            color: 'var(--text-primary)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '6px',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
                                    >
                                        {char}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Translation Container */}
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <textarea
                            value={translatedText}
                            readOnly
                            placeholder={direction === 'EN_TO_FR' ? 'La traduction apparaîtra ici...' : 'Translation will appear here...'}
                            style={{
                                width: '100%',
                                minHeight: '220px',
                                flex: 1,
                                padding: '1rem',
                                paddingBottom: '3.5rem',
                                borderRadius: '12px',
                                border: '2px solid transparent',
                                background: 'var(--bg-tertiary)',
                                color: 'var(--text-primary)',
                                fontSize: '1.1rem',
                                resize: 'none',
                                outline: 'none',
                                fontFamily: 'inherit',
                                boxSizing: 'border-box'
                            }}
                        />
                        {translatedText && (
                            <button
                                onClick={() => handleTTS(translatedText, direction === 'EN_TO_FR' ? 'fr-FR' : 'en-US')}
                                style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    right: '1rem',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--primary-color)',
                                }}
                                title="Listen"
                            >
                                <Volume2 size={24} />
                            </button>
                        )}
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button
                        onClick={handleTranslate}
                        disabled={isTranslating || !sourceText.trim()}
                        style={{
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            padding: '1rem 3rem',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            borderRadius: '30px',
                            cursor: isTranslating || !sourceText.trim() ? 'not-allowed' : 'pointer',
                            opacity: isTranslating || !sourceText.trim() ? 0.7 : 1,
                            transition: 'background 0.2s',
                            boxShadow: '0 4px 15px rgba(54, 134, 201, 0.4)'
                        }}
                    >
                        {isTranslating ? 'Traduction en cours...' : 'Translate'}
                    </button>
                </div>
            </div>

            {/* Comparisons Section */}
            {translatedText && direction === 'EN_TO_FR' && (
                <div style={{ marginTop: 'auto', paddingTop: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                        <Book size={32} color="var(--accent-purple)" />
                        Level Comparisons
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {/* Column 1: Written French */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                color: 'var(--primary-color)',
                                borderBottom: '2px solid var(--primary-color)',
                                paddingBottom: '0.5rem',
                                margin: 0,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                <CheckSquare size={24} /> Written French
                            </h3>
                            {cefrComparisons.filter(c => c.type === 'Written').map((item, index) => (
                                <div key={index} style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--border-color)',
                                    borderLeft: '4px solid var(--primary-color)',
                                    borderRadius: '8px',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    height: '100%'
                                }}>
                                    <span style={{
                                        background: 'var(--bg-tertiary)',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '12px',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        color: 'var(--text-primary)',
                                        alignSelf: 'flex-start'
                                    }}>
                                        CEFR {item.level}
                                    </span>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: 0, flex: 1 }}>
                                        "{item.sentence}"
                                    </p>
                                    <button
                                        onClick={() => handleTTS(item.sentence, 'fr-FR')}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: 'var(--text-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            padding: 0,
                                            marginTop: 'auto'
                                        }}
                                    >
                                        <Volume2 size={18} /> Écouter
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Column 2: Spoken French */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                color: 'var(--accent-cyan)',
                                borderBottom: '2px solid var(--accent-cyan)',
                                paddingBottom: '0.5rem',
                                margin: 0,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                <CheckSquare size={24} /> Spoken French
                            </h3>
                            {cefrComparisons.filter(c => c.type === 'Spoken').map((item, index) => (
                                <div key={index} style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--border-color)',
                                    borderLeft: '4px solid var(--accent-cyan)',
                                    borderRadius: '8px',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    height: '100%'
                                }}>
                                    <span style={{
                                        background: 'var(--bg-tertiary)',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '12px',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        color: 'var(--text-primary)',
                                        alignSelf: 'flex-start'
                                    }}>
                                        CEFR {item.level}
                                    </span>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: 0, flex: 1 }}>
                                        "{item.sentence}"
                                    </p>
                                    <button
                                        onClick={() => handleTTS(item.sentence, 'fr-FR')}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: 'var(--text-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            padding: 0,
                                            marginTop: 'auto'
                                        }}
                                    >
                                        <Volume2 size={18} /> Écouter
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TranslatePage;
