import React from 'react';
import { pronounsData, type PronounSection } from '../data/pronouns';

const PronounSectionView: React.FC<{ section: PronounSection, level?: number }> = ({ section, level = 0 }) => {
    const HeaderTag = level === 0 ? 'h2' : 'h3';

    return (
        <div style={{
            marginBottom: '2rem',
            background: level === 0 ? 'var(--bg-secondary)' : 'rgba(0,0,0,0.02)',
            padding: '1.5rem',
            borderRadius: '12px',
            borderLeft: level === 0 ? '4px solid var(--accent-color)' : 'none',
            marginLeft: level * 20 + 'px'
        }}>
            <HeaderTag style={{ color: 'var(--accent-color)', marginTop: 0 }}>{section.title}</HeaderTag>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                    <strong style={{ color: '#27ae60' }}>Use (FR):</strong> {section.useFr}
                </div>
                <div>
                    <strong style={{ color: '#2980b9' }}>Use (EN):</strong> {section.useEn}
                </div>
                <div>
                    <strong>Structure:</strong> <span style={{ fontStyle: 'italic', fontFamily: 'monospace', background: 'rgba(0,0,0,0.05)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>{section.structure}</span>
                </div>
                {section.forms && (
                    <div>
                        <strong>Forms:</strong> {section.forms}
                    </div>
                )}
            </div>

            {section.examples && section.examples.length > 0 && (
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>EXAMPLES</strong>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                        {section.examples.map((ex, idx) => (
                            <li key={idx} style={{ marginBottom: '0.5rem' }}>
                                <strong>{ex.fr}</strong> <span style={{ opacity: 0.7 }}>→ {ex.en}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {section.subSections && (
                <div style={{ marginTop: '2rem' }}>
                    {section.subSections.map((sub, idx) => (
                        <PronounSectionView key={idx} section={sub} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

const GrammarPage = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--accent-color)' }}>Grammar: Pronouns</h1>

            <div className="grammar-content">
                {pronounsData.map((section, idx) => (
                    <PronounSectionView key={idx} section={section} />
                ))}
            </div>
        </div>
    );
};

export default GrammarPage;
