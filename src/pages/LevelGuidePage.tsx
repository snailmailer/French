import { Volume2 } from 'lucide-react';
import { speakFrench, speakEnglish } from '../utils/tts';

const levelGuideData = [
    {
        levelFR: "A1",
        levelEN: "A1",
        titleFR: "Débutant",
        titleEN: "Beginner",
        descFR: "Débutant : peut se présenter, poser et répondre à des questions simples, comprendre des phrases très courantes.",
        descEN: "Beginner: can introduce self, ask and answer simple questions, understand very common phrases.",
        listeningFR: "Comprendre des phrases simples et lentes sur des sujets familiers comme les présentations personnelles ou les besoins immédiats (ex. : commandes au café).",
        listeningEN: "Understand simple, slow phrases on familiar topics like personal introductions or immediate needs, e.g., café orders.",
        readingFR: "Lire des phrases très simples comme des panneaux, menus ou formulaires basiques (nom, adresse).",
        readingEN: "Read very simple phrases like signs, menus, or basic forms (name, address).",
        writingFR: 'Écrire des phrases simples sur soi-même (nom, adresse) ou des besoins basiques (ex. : "Je voudrais un café").',
        writingEN: 'Write simple phrases about oneself (name, address) or basic needs, e.g., "I would like a coffee."',
        speakingFR: "Se présenter et poser des questions simples sur des détails personnels (où habite-t-on ?).",
        speakingEN: "Introduce oneself and ask simple questions about personal details (where do you live?)."
    },
    {
        levelFR: "A2",
        levelEN: "A2",
        titleFR: "Élémentaire",
        titleEN: "Elementary",
        descFR: "Élémentaire : peut parler de sa routine, de sa famille, de son travail avec des phrases simples, gérer des tâches quotidiennes.",
        descEN: "Elementary: can talk about routine, family, work in simple sentences, handle everyday tasks.",
        listeningFR: "Saisir des expressions courantes liées à la vie quotidienne (famille, achats, géographie locale) et des questions simples posées clairement.",
        listeningEN: "Grasp everyday expressions related to daily life (family, shopping, local geography) and clearly asked simple questions.",
        readingFR: "Lire des textes courts et simples (annonces, horaires, emails personnels) sur des sujets concrets.",
        readingEN: "Read short, simple texts (ads, schedules, personal emails) on concrete topics.",
        writingFR: "Rédiger des notes courtes et personnelles (messages, cartes postales) sur des routines ou événements immédiats.",
        writingEN: "Write short, personal notes (messages, postcards) on routines or immediate events.",
        speakingFR: "Communiquer dans des tâches routinières simples nécessitant un échange direct et simple.",
        speakingEN: "Communicate in simple routine tasks requiring direct, simple exchanges."
    },
    {
        levelFR: "B1",
        levelEN: "B1",
        titleFR: "Intermédiaire",
        titleEN: "Intermediate",
        descFR: "Intermédiaire : peut expliquer ses opinions, raconter des expériences, se débrouiller en voyage, suivre les idées principales d’un film ou d’un article simple.",
        descEN: "Intermediate: can explain opinions, describe experiences, manage travel situations, follow main ideas in a movie or simple article.",
        listeningFR: "Comprendre les points principaux de discours clairs sur des sujets familiers (travail, école, loisirs) et des annonces ou actualités simples.",
        listeningEN: "Understand main points of clear speech on familiar topics (work, school, leisure) and simple announcements or news.",
        readingFR: "Comprendre des textes descriptifs sur des sujets familiers (articles courts, emails) et saisir l'essentiel.",
        readingEN: "Understand descriptive texts on familiar topics (short articles, emails) and grasp the essentials.",
        writingFR: "Écrire des textes simples et cohérents sur des sujets familiers (expériences, rêves, opinions avec raisons).",
        writingEN: "Write simple, coherent texts on familiar topics (experiences, dreams, opinions with reasons).",
        speakingFR: "Raconter des expériences, rêves ou ambitions ; expliquer brièvement opinions et plans.",
        speakingEN: "Narrate experiences, dreams, or ambitions; briefly explain opinions and plans."
    },
    {
        levelFR: "B2",
        levelEN: "B2",
        titleFR: "Intermédiaire avancé",
        titleEN: "Upper-intermediate",
        descFR: "Intermédiaire avancé : peut débattre, défendre un point de vue, travailler en français, lire des textes plus complexes (rapports, articles).",
        descEN: "Upper-intermediate: can debate, defend a point of view, work in French, read more complex texts (reports, articles).",
        listeningFR: "Suivre des discours étendus et des émissions comme des documentaires, en saisissant les idées principales même avec des accents variés.",
        listeningEN: "Follow extended speeches and shows like documentaries, grasping main ideas even with varied accents.",
        readingFR: "Lire des articles et rapports détaillés sur des sujets contemporains, en identifiant les détails et opinions.",
        readingEN: "Read detailed articles and reports on contemporary topics, identifying details and opinions.",
        writingFR: "Produire des textes clairs et détaillés (essais de 250 mots, rapports) avec structure, arguments et exemples.",
        writingEN: "Produce clear, detailed texts (250-word essays, reports) with structure, arguments, and examples.",
        speakingFR: "Discuter de manière fluide 5 minutes d'un sujet, défendre une position avec contre-arguments.",
        speakingEN: "Discuss fluently for 5 minutes on a topic, defend a position with counterarguments."
    },
    {
        levelFR: "C1",
        levelEN: "C1",
        titleFR: "Avancé",
        titleEN: "Advanced",
        descFR: "Avancé : parle couramment, avec peu d’hésitations, comprend des contenus longs et difficiles, écrit des textes clairs et bien structurés.",
        descEN: "Advanced: speaks fluently with few hesitations, understands long, difficult content, writes clear, well-structured texts.",
        listeningFR: "Comprendre des discours longs et complexes, y compris les implicites, dans des contextes professionnels ou académiques, avec des nuances.",
        listeningEN: "Understand long, complex speeches, including implicits, in professional or academic contexts, with nuances.",
        readingFR: "Comprendre des textes longs et complexes (articles spécialisés, littérature) avec distinction des tons et intentions.",
        readingEN: "Understand long, complex texts (specialized articles, literature) distinguishing tones and intentions.",
        writingFR: "Rédiger des textes complexes et bien structurés (analyses de 350-500 mots, rapports avec citations) sur divers sujets.",
        writingEN: "Write complex, well-structured texts (350-500 word analyses, cited reports) on various topics.",
        speakingFR: "S'exprimer spontanément avec fluidité sur des sujets complexes, en présentation persuasive ou débat.",
        speakingEN: "Express oneself spontaneously and fluently on complex topics, in persuasive presentations or debates."
    },
    {
        levelFR: "C2",
        levelEN: "C2",
        titleFR: "Maîtrise",
        titleEN: "Mastery",
        descFR: "Maîtrise : comprend pratiquement tout, y compris les nuances, et s’exprime avec une grande précision, comme un locuteur quasi natif.",
        descEN: "Mastery: understands almost everything, including nuance, and expresses ideas very precisely, near native level.",
        listeningFR: "Comprendre sans effort tout ce qui est entendu, y compris les émissions TV, radios et conversations rapides avec idioms et nuances subtiles.",
        listeningEN: "Understand effortlessly everything heard, including TV/radio shows and fast conversations with idioms and subtle nuances.",
        readingFR: "Lire sans effort des textes exigeants (ouvrages spécialisés, littérature) en reconstituant arguments et nuances fines.",
        readingEN: "Effortlessly read demanding texts (specialized works, literature) reconstructing arguments and fine nuances.",
        writingFR: "Écrire des textes précis, fluides et nuancés sur des thèmes complexes, adaptés au contexte (académique, professionnel).",
        writingEN: "Write precise, fluid, nuanced texts on complex themes, adapted to context (academic, professional).",
        speakingFR: "S'exprimer avec aisance, précision et distinction des nuances fines, même dans des situations complexes.",
        speakingEN: "Express oneself with ease, precision, and distinction of fine nuances, even in complex situations."
    }
];

const mainBands = [
    { fr: "A1–A2 : utilisateur élémentaire (débutant).", en: "A1–A2: basic user (beginner)." },
    { fr: "B1–B2 : utilisateur indépendant.", en: "B1–B2: independent user." },
    { fr: "C1–C2 : utilisateur expérimenté (avancé).", en: "C1–C2: proficient user (advanced)." }
];

const LevelGuidePage = () => {
    return (
        <div className="container" style={{ padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.25rem', color: '#E0E2D2', textTransform: 'uppercase' }}>
                Guide des Niveaux CECR
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#B4C540', fontWeight: 'bold', marginBottom: '3rem' }}>
                (CEFR Level Guide)
            </p>

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', fontStyle: 'italic', flex: 1 }}>
                        French level is described using the CEFR scale (A1 to C2: beginner to mastery).
                    </p>
                    <button onClick={() => speakEnglish("French level is described using the CEFR scale (A1 to C2: beginner to mastery).")} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--accent-cyan)' }}><Volume2 size={24} /></button>
                </div>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '1rem' }}>Catégories principales (Main bands)</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {mainBands.map((band, idx) => (
                        <li key={idx} style={{ marginBottom: '1rem', background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 500 }}>{band.fr}</span>
                                <button onClick={() => speakFrench(band.fr)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)' }}><Volume2 size={20} /></button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontStyle: 'italic' }}>{band.en}</span>
                                <button onClick={() => speakEnglish(band.en)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--accent-cyan)' }}><Volume2 size={20} /></button>
                            </div>
                        </li>
                    ))}
                </ul>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem' }}>Examens (Exams)</h3>
                <p style={{ margin: '0.5rem 0', color: 'var(--text-primary)' }}>DELF A1, A2, B1, B2 : valident les niveaux de base et intermédiaires.</p>
                <p style={{ margin: '0.5rem 0', color: 'var(--text-secondary)', fontStyle: 'italic' }}>DELF A1, A2, B1, B2: validate basic and intermediate levels.</p>
                <p style={{ margin: '0.5rem 0 0.5rem', color: 'var(--text-primary)' }}>DALF C1, C2 : valident les niveaux avancés.</p>
                <p style={{ margin: '0 0 1rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>DALF C1, C2: validate advanced levels.</p>
            </div>

            <h2 style={{ color: 'var(--accent-cyan)', fontSize: '2rem', margin: '4rem 0 2rem', textAlign: 'center' }}>
                Détail des Niveaux (Level Breakdown)
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
                                    <h3 style={{ margin: '0 0 0.25rem', color: 'var(--text-primary)', fontSize: '1.4rem' }}>{lvl.titleFR} ({lvl.titleEN})</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', flex: 1 }}>{lvl.descFR}</p>
                                        <button onClick={() => speakFrench(lvl.descFR)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)' }}><Volume2 size={18} /></button>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}>
                                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic', flex: 1 }}>{lvl.descEN}</p>
                                        <button onClick={() => speakEnglish(lvl.descEN)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--accent-cyan)' }}><Volume2 size={18} /></button>
                                    </div>
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
                                            {skill.labelFR} ({skill.labelEN})
                                        </h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                                                <span style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: 1.5 }}>{skill.fr}</span>
                                                <button onClick={() => speakFrench(skill.fr)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--success-color)', flexShrink: 0 }}><Volume2 size={20} /></button>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                                                <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.5 }}>{skill.en}</span>
                                                <button onClick={() => speakEnglish(skill.en)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--accent-cyan)', flexShrink: 0 }}><Volume2 size={20} /></button>
                                            </div>
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
