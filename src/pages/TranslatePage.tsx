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
            const langpair = direction === 'EN_TO_FR' ? 'en|fr' : 'fr|en';
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(sourceText)}&langpair=${langpair}`);
            const data = await response.json();

            if (data && data.responseData && data.responseData.translatedText) {
                setTranslatedText(data.responseData.translatedText);
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
        utterance.rate = 0.9; // Slightly slower for language learning
        synth.speak(utterance);
    };

    // MOCK DATA for CEFR/IELTS Comparisons
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

    const ieltsComparisons = [
        { level: 'Band 4.0-5.0', type: 'Written', sentence: 'This is a cat.' },
        { level: 'Band 4.0-5.0', type: 'Spoken', sentence: 'It is a cat.' },
        { level: 'Band 5.5-6.5', type: 'Written', sentence: 'I see a small black cat walking in the street.' },
        { level: 'Band 5.5-6.5', type: 'Spoken', sentence: 'Look at that little black cat over there.' },
        { level: 'Band 7.0-8.0', type: 'Written', sentence: 'Despite being a fiercely independent creature, the cat occasionally seeks out human companionship.' },
        { level: 'Band 7.0-8.0', type: 'Spoken', sentence: 'Even though they are super independent, cats still kind of want to hang out sometimes.' },
        { level: 'Band 8.5-9.0', type: 'Written', sentence: 'The inherently solitary disposition of the feline stands in stark contrast to its sporadic yearning for affection.' },
        { level: 'Band 8.5-9.0', type: 'Spoken', sentence: 'The cat\'s inherent solitary nature really contrasts with the times it randomly just craves attention.' },
    ];

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '2.5rem' }}>
                Traduction & Comparaison
            </h1>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                Translate texts and compare sentence structures across different language learning levels.
            </p>

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
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: direction === 'EN_TO_FR' ? 'var(--primary-color)' : 'var(--text-secondary)' }}>English</span>
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
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: direction === 'FR_TO_EN' ? 'var(--primary-color)' : 'var(--text-secondary)' }}>Français</span>
                </div>

                {/* Text Areas */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Source Container */}
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <textarea
                                value={sourceText}
                                onChange={(e) => setSourceText(e.target.value)}
                                placeholder={direction === 'EN_TO_FR' ? 'Enter English text...' : 'Entrez le texte en français...'}
                                style={{
                                    width: '100%',
                                    minHeight: '200px',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: '2px solid var(--border-color)',
                                    background: 'var(--bg-primary)',
                                    color: 'var(--text-primary)',
                                    fontSize: '1.1rem',
                                    resize: 'vertical',
                                    fontFamily: 'inherit'
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
                    <div style={{ position: 'relative' }}>
                        <textarea
                            value={translatedText}
                            readOnly
                            placeholder={direction === 'EN_TO_FR' ? 'La traduction apparaîtra ici...' : 'Translation will appear here...'}
                            style={{
                                width: '100%',
                                minHeight: '200px',
                                padding: '1rem',
                                borderRadius: '12px',
                                border: '2px solid transparent',
                                background: 'var(--bg-tertiary)',
                                color: 'var(--text-primary)',
                                fontSize: '1.1rem',
                                resize: 'vertical',
                                outline: 'none',
                                fontFamily: 'inherit'
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
            {translatedText && (
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Book size={32} color="var(--accent-purple)" />
                        Level Comparisons
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        {/* Comparison Box */}
                        {(direction === 'EN_TO_FR' ? cefrComparisons : ieltsComparisons).map((item, index) => (
                            <div key={index} style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '6px',
                                    height: '100%',
                                    background: item.type === 'Written' ? 'var(--primary-color)' : 'var(--accent-cyan)'
                                }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span style={{
                                        background: 'var(--bg-tertiary)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        color: 'var(--text-primary)'
                                    }}>
                                        {direction === 'EN_TO_FR' ? `CEFR ${item.level}` : `IELTS ${item.level}`}
                                    </span>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: item.type === 'Written' ? 'var(--primary-color)' : 'var(--accent-cyan)',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem'
                                    }}>
                                        <CheckSquare size={16} />
                                        {item.type} {direction === 'EN_TO_FR' ? 'French' : 'English'}
                                    </span>
                                </div>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>
                                    "{item.sentence}"
                                </p>
                                <button
                                    onClick={() => handleTTS(item.sentence, direction === 'EN_TO_FR' ? 'fr-FR' : 'en-US')}
                                    style={{
                                        marginTop: '1rem',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    <Volume2 size={18} /> Écouter (Listen)
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TranslatePage;
