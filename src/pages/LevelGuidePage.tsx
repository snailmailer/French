import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { speakFrench } from '../utils/tts';

const levelGuideData = [
    {
        levelFR: "A1",
        levelEN: "Beginner",
        titleFR: "Débutant",
        tcfScore: "331-368",
        tefScore: "0-72 (Comp.), 181-225",
        descFR: "Peut se présenter, poser et répondre à des questions simples, comprendre des phrases très courantes.",
        descEN: "Can introduce self, ask/answer simple questions, understand very common phrases.",
        listeningFR: "Comprendre phrases simples/lentes (sujets familiers).",
        listeningEN: "Understand simple slow phrases (familiar topics).",
        readingFR: "Lire phrases basiques (panneaux, menus).",
        readingEN: "Read basic phrases (signs, menus).",
        writingFR: "Phrases simples (besoins basiques).",
        writingEN: "Simple phrases (basic needs).",
        speakingFR: "Se présenter, questions personnelles simples.",
        speakingEN: "Introduce self, simple personal questions."
    },
    {
        levelFR: "A2",
        levelEN: "Elementary",
        titleFR: "Élémentaire",
        tcfScore: "369-397",
        tefScore: "73-111 (Comp.), 226-270",
        descFR: "Peut parler de sa routine, famille, travail avec phrases simples, gérer tâches quotidiennes.",
        descEN: "Can talk about routine, family, work in simple sentences, handle everyday tasks.",
        listeningFR: "Expressions quotidiennes (famille, achats).",
        listeningEN: "Everyday expressions (family, shopping).",
        readingFR: "Textes courts simples (annonces, emails).",
        readingEN: "Short simple texts (ads, emails).",
        writingFR: "Notes personnelles courtes (routines).",
        writingEN: "Short personal notes (routines).",
        speakingFR: "Tâches routinières simples.",
        speakingEN: "Simple routine tasks."
    },
    {
        levelFR: "B1",
        levelEN: "Intermediate",
        titleFR: "Intermédiaire",
        tcfScore: "398-458",
        tefScore: "112-222 (Comp.), 271-360",
        descFR: "Peut expliquer opinions, raconter expériences, se débrouiller en voyage, suivre idées principales d’un film/article simple.",
        descEN: "Can explain opinions, describe experiences, manage travel, follow main ideas in movie/simple article.",
        listeningFR: "Points principaux discours familiers (travail, loisirs).",
        listeningEN: "Main points of clear familiar speech (work, leisure).",
        readingFR: "Textes descriptifs familiers (articles courts).",
        readingEN: "Descriptive familiar texts (short articles).",
        writingFR: "Textes cohérents (expériences, opinions).",
        writingEN: "Coherent texts (experiences, opinions).",
        speakingFR: "Raconter expériences, expliquer opinions/plans.",
        speakingEN: "Narrate experiences, explain opinions/plans."
    },
    {
        levelFR: "B2",
        levelEN: "Upper-Intermediate",
        titleFR: "Intermédiaire supérieur",
        tcfScore: "459-498",
        tefScore: "223-333 (Comp.), 361-450",
        descFR: "Peut débattre, défendre un point de vue, travailler en français, lire textes complexes (rapports, articles).",
        descEN: "Can debate, defend views, work in French, read complex texts (reports, articles).",
        listeningFR: "Discours étendus (documentaires, accents variés).",
        listeningEN: "Extended speeches (documentaries, varied accents).",
        readingFR: "Articles/rapports détaillés contemporains.",
        readingEN: "Detailed contemporary articles/reports.",
        writingFR: "Textes détaillés structurés (250 mots).",
        writingEN: "Detailed structured texts (250 words).",
        speakingFR: "Discuter fluide 5 min, défendre position.",
        speakingEN: "Fluent 5-min discussion, defend position."
    },
    {
        levelFR: "C1",
        levelEN: "Advanced",
        titleFR: "Avancé",
        tcfScore: "499-558",
        tefScore: "334-450 (Comp.), 451-549",
        descFR: "Parle couramment peu hésitations, comprend contenus longs/difficiles, écrit textes clairs/structurés.",
        descEN: "Speaks fluently with few hesitations, understands long/difficult content, writes clear structured texts.",
        listeningFR: "Discours longs complexes (implicites, nuances).",
        listeningEN: "Long complex speeches (implicits, nuances).",
        readingFR: "Textes longs complexes (spécialisés).",
        readingEN: "Long complex texts (specialized).",
        writingFR: "Analyses structurées (350-500 mots).",
        writingEN: "Structured analyses (350-500 words).",
        speakingFR: "S'exprimer spontané fluide complexe.",
        speakingEN: "Spontaneous fluent on complex topics."
    },
    {
        levelFR: "C2",
        levelEN: "Mastery",
        titleFR: "Maîtrise",
        tcfScore: "559+",
        tefScore: "451+ (Comp.), 550+",
        descFR: "Comprend tout y compris nuances, s’exprime avec grande précision quasi-natif.",
        descEN: "Understands almost everything incl. nuance, expresses very precisely near-native.",
        listeningFR: "Tout sans effort (TV, conversations rapides).",
        listeningEN: "Everything effortlessly (TV, fast talks).",
        readingFR: "Textes exigeants nuances fines.",
        readingEN: "Demanding texts fine nuances.",
        writingFR: "Textes précis nuancés complexes.",
        writingEN: "Precise nuanced complex texts.",
        speakingFR: "Aisance précision nuances fines.",
        speakingEN: "Ease, precision, fine nuances."
    }
];

const mainBands = [
    { fr: "A1–A2 : utilisateur élémentaire (débutant).", en: "Basic user (beginner)." },
    { fr: "B1–B2 : utilisateur indépendant.", en: "Independent user." },
    { fr: "C1–C2 : utilisateur expérimenté (avancé).", en: "Proficient user (advanced)." }
];

const LevelGuidePage = () => {
    const [showEnglish, setShowEnglish] = useState(false);

    return (
        <div className="container" style={{ padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.25rem', color: '#E0E2D2', textTransform: 'uppercase' }}>
                Guide des Niveaux CECR
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#B4C540', fontWeight: 'bold', marginBottom: '3rem' }}>
                (CEFR Level Guide with TCF/TEF Scores)
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <button 
                    onClick={() => setShowEnglish(!showEnglish)}
                    style={{ background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', cursor: 'pointer', color: 'var(--text-primary)' }}
                >
                    {showEnglish ? 'Cacher la traduction' : 'Afficher la traduction'}
                </button>
            </div>

            <div style={{
                background: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--accent-color)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                marginBottom: '2rem'
            }}>
                <h2 style={{ color: 'var(--accent-color)', fontSize: '1.8rem', marginBottom: '1rem' }}>Vue d’ensemble / Overview</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem', flex: 1 }}>
                        Le niveau de français se décrit avec l’échelle du CECR (A1 à C2 : débutant à maîtrise).
                    </p>
                    <button onClick={() => speakFrench("Le niveau de français se décrit avec l’échelle du CECR (A1 à C2 : débutant à maîtrise).")} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)' }}><Volume2 size={24} /></button>
                </div>
                {showEnglish && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', fontStyle: 'italic', flex: 1 }}>
                            French level is described using the CEFR scale (A1 to C2: beginner to mastery).
                        </p>
                    </div>
                )}

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '1rem' }}>Catégories principales / Main bands</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {mainBands.map((band, idx) => (
                        <li key={idx} style={{ marginBottom: '1rem', background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 500 }}>{band.fr}</span>
                                <button onClick={() => speakFrench(band.fr)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)' }}><Volume2 size={20} /></button>
                            </div>
                            {showEnglish && (
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontStyle: 'italic' }}>{band.en}</span>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem' }}>Examens / Exams (TCF/TEF Focus)</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 'bold' }}>TCF <span style={{ fontWeight: 'normal' }}>: Scores modulaires (écoute/lecture obligatoires ; expression optionnelle) ; valable 2 ans ; adapté immigration Canada.</span></p>
                            <button onClick={() => speakFrench("TCF : Scores modulaires (écoute/lecture obligatoires ; expression optionnelle) ; valable 2 ans ; adapté immigration Canada.")} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)', flexShrink: 0 }}><Volume2 size={20} /></button>
                        </div>
                        {showEnglish && <p style={{ margin: 0, color: 'var(--text-secondary)', fontStyle: 'italic' }}>Modular scores (listening/reading mandatory; optional speaking/writing); 2-year validity; Canada immigration-friendly.</p>}
                    </div>

                    <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 'bold' }}>TEF <span style={{ fontWeight: 'normal' }}>: 5 compétences obligatoires ; plus business-oriented ; scores similaires.</span></p>
                            <button onClick={() => speakFrench("TEF : 5 compétences obligatoires ; plus business-oriented ; scores similaires.")} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)', flexShrink: 0 }}><Volume2 size={20} /></button>
                        </div>
                        {showEnglish && <p style={{ margin: 0, color: 'var(--text-secondary)', fontStyle: 'italic' }}>5 mandatory skills; business-oriented; similar scoring.</p>}
                    </div>
                </div>
                {showEnglish && (
                    <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem' }}>
                        * TCF often feels easier for practical skills; use official prep for Toronto centers (e.g., Alliance Française).
                    </p>
                )}
            </div>

            <h2 style={{ color: 'var(--accent-cyan)', fontSize: '2rem', margin: '4rem 0 2rem', textAlign: 'center' }}>
                Détail des Niveaux / Level Breakdown
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {levelGuideData.map((lvl) => {
                    const levelColors: Record<string, string> = {
                        'A1': 'var(--success-color)', 'A2': '#8BC34A',
                        'B1': '#FF9800', 'B2': '#F57C00',
                        'C1': '#E91E63', 'C2': '#9C27B0'
                    };
                    const color = levelColors[lvl.levelFR];

                    return (
                        <div key={lvl.levelFR} style={{
                            background: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            borderTop: `6px solid ${color}`,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            overflow: 'hidden'
                        }}>
                            {/* Header */}
                            <div style={{
                                padding: '1.5rem 2rem',
                                background: 'rgba(0,0,0,0.02)',
                                borderBottom: '1px solid var(--border-color)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                flexWrap: 'wrap'
                            }}>
                                <span style={{
                                    background: color,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '1.5rem',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '12px',
                                    minWidth: '80px',
                                    textAlign: 'center',
                                    boxShadow: `0 4px 10px ${color}44`
                                }}>
                                    {lvl.levelFR}
                                </span>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ margin: '0 0 0.25rem', color: 'var(--text-primary)', fontSize: '1.4rem' }}>{lvl.titleFR}{showEnglish ? ` / ${lvl.levelEN}` : ''}</h3>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                        <div style={{ background: 'rgba(54, 134, 201, 0.1)', border: '1px solid var(--accent-cyan)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem' }}>
                                            <strong style={{ color: 'var(--accent-cyan)' }}>TCF Score Range:</strong> <span style={{ color: 'var(--text-primary)' }}>{lvl.tcfScore}</span>
                                        </div>
                                        <div style={{ background: 'rgba(76, 175, 80, 0.1)', border: '1px solid var(--success-color)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem' }}>
                                            <strong style={{ color: 'var(--success-color)' }}>TEF Score Range:</strong> <span style={{ color: 'var(--text-primary)' }}>{lvl.tefScore}</span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                                        <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.95rem', flex: 1 }}>{lvl.descFR}</p>
                                        <button onClick={() => speakFrench(lvl.descFR)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)' }}><Volume2 size={18} /></button>
                                    </div>
                                    {showEnglish && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}>
                                            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic', flex: 1 }}>{lvl.descEN}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Detailed Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '1rem',
                                padding: '1.5rem 2rem'
                            }}>
                                {[
                                    { labelFR: 'Écoute', labelEN: 'Listening', fr: lvl.listeningFR, en: lvl.listeningEN },
                                    { labelFR: 'Lecture', labelEN: 'Reading', fr: lvl.readingFR, en: lvl.readingEN },
                                    { labelFR: 'Écriture', labelEN: 'Writing', fr: lvl.writingFR, en: lvl.writingEN },
                                    { labelFR: 'Parole', labelEN: 'Speaking', fr: lvl.speakingFR, en: lvl.speakingEN }
                                ].map((skill, idx) => (
                                    <div key={idx} style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                        <h4 style={{ margin: '0 0 1rem', color: color, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                            {skill.labelFR}{showEnglish ? ` / ${skill.labelEN}` : ''}
                                        </h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                                                <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{skill.fr}</span>
                                                <button onClick={() => speakFrench(skill.fr)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)', flexShrink: 0 }}><Volume2 size={20} /></button>
                                            </div>
                                            {showEnglish && (
                                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.5 }}>{skill.en}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LevelGuidePage;
