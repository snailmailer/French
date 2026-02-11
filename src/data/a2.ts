import type { LevelData } from './types';

export const a2Data: LevelData = {
    id: 'A2',
    title: 'A2 - Élémentaire',
    description: 'Programme complet pas-à-pas.',
    topics: [
        { id: 'verbes-pronominaux', title: 'Les verbes pronominaux', description: 'Se lever, Se laver.', translation: 'Reflexive Verbs', blocks: [{ type: 'conjugation', verb: 'Se laver', tense: 'Présent', data: [{ pronoun: 'Je', form: 'me lave' }, { pronoun: 'Tu', form: 'te laves' }, { pronoun: 'Il', form: 'se lave' }, { pronoun: 'Nous', form: 'nous lavons' }, { pronoun: 'Vous', form: 'vous lavez' }, { pronoun: 'Ils', form: 'se lavent' }] }] },
        { id: 'avoir-mal', title: 'Avoir mal à', description: 'Douleur physique.', translation: 'To be in pain', blocks: [{ type: 'examples', list: [{ french: 'J\'ai mal à la tête.', translation: 'I have a headache.' }] }] },
        { id: 'pvd', title: 'Pouvoir, Vouloir, Devoir', description: 'Modaux.', translation: 'Can, Want, Must', blocks: [{ type: 'examples', list: [{ french: 'Je peux t\'aider.', translation: 'I can help you.' }] }] },
        { id: 'imperatif-1', title: 'Impératif 1', description: 'Ordres, Conseils.', translation: 'Imperative 1', blocks: [{ type: 'examples', list: [{ french: 'Écoute !', translation: 'Listen!' }] }] },
        { id: 'imperatif-2', title: 'Impératif 2', description: 'Interdictions.', translation: 'Imperative 2', blocks: [{ type: 'examples', list: [{ french: 'Ne parle pas !', translation: 'Don\'t speak!' }] }] },
        { id: 'emotions', title: 'Exprimer des émotions', description: 'Sentiments.', translation: 'Expressing emotions', blocks: [{ type: 'examples', list: [{ french: 'Je suis triste.', translation: 'I am sad.' }] }] },
        { id: 'desc-physique', title: 'Description physique', description: 'Apparence.', translation: 'Physical Description', blocks: [{ type: 'examples', list: [{ french: 'Il est grand.', translation: 'He is tall.' }] }] },
        { id: 'routine', title: 'Parler de la routine', description: 'Quotidien.', translation: 'Talking about routine', blocks: [{ type: 'examples', list: [{ french: 'Je me lève à 7h.', translation: 'I get up at 7.' }] }] },
        { id: 'parler-corps', title: 'Parler de votre corps', description: 'Anatomie.', translation: 'Talking about your body', blocks: [{ type: 'markdown', content: 'La main, le pied, le nez.' }] },
        {
            id: 'le-corps',
            title: 'Le corps',
            description: 'Vocabulaire.',
            translation: 'The Body',
            blocks: [{
                type: 'markdown',
                content: `<table style="width:100%; border-collapse:collapse;">
<thead><tr style="background:#333; color:white;"><th style="padding:8px;">English</th><th style="padding:8px;">French</th><th style="padding:8px;">Prep/Article</th></tr></thead>
<tbody>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Head</td><td style="padding:8px; border-bottom:1px solid #444;">la tête</td><td style="padding:8px; border-bottom:1px solid #444;">à la</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Face</td><td style="padding:8px; border-bottom:1px solid #444;">le visage</td><td style="padding:8px; border-bottom:1px solid #444;">au</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Hair</td><td style="padding:8px; border-bottom:1px solid #444;">les cheveux</td><td style="padding:8px; border-bottom:1px solid #444;">aux</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Eyes</td><td style="padding:8px; border-bottom:1px solid #444;">les yeux</td><td style="padding:8px; border-bottom:1px solid #444;">aux</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Nose</td><td style="padding:8px; border-bottom:1px solid #444;">le nez</td><td style="padding:8px; border-bottom:1px solid #444;">au</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Mouth</td><td style="padding:8px; border-bottom:1px solid #444;">la bouche</td><td style="padding:8px; border-bottom:1px solid #444;">à la</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Arm</td><td style="padding:8px; border-bottom:1px solid #444;">le bras</td><td style="padding:8px; border-bottom:1px solid #444;">au</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Hand</td><td style="padding:8px; border-bottom:1px solid #444;">la main</td><td style="padding:8px; border-bottom:1px solid #444;">à la</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Leg</td><td style="padding:8px; border-bottom:1px solid #444;">la jambe</td><td style="padding:8px; border-bottom:1px solid #444;">à la</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Foot</td><td style="padding:8px; border-bottom:1px solid #444;">le pied</td><td style="padding:8px; border-bottom:1px solid #444;">au</td></tr>
</tbody></table>`
            }]
        },
        { id: 'pvd-sortie', title: 'Pouvoir, Vouloir, Devoir et Proposer une sortie', description: 'Social.', translation: 'Modals & Outings', blocks: [{ type: 'examples', list: [{ french: 'Tu veux aller au ciné ?', translation: 'Do you want to go to the movies?' }] }] },
        { id: 'inviter-imperatif', title: 'Inviter , L\'impératif', description: 'Invitation.', translation: 'Inviting & Imperative', blocks: [{ type: 'examples', list: [{ french: 'Viens chez moi !', translation: 'Come to my place!' }] }] },
        { id: 'imperatif-pronominaux', title: 'Impératif - verbes pronominaux', description: 'Lève-toi.', translation: 'Imperative (Reflexive)', blocks: [{ type: 'examples', list: [{ french: 'Dépêche-toi !', translation: 'Hurry up!' }] }] },
        { id: 'couleurs', title: 'Les couleurs', description: 'Accords.', translation: 'Colors', blocks: [{ type: 'markdown', content: 'Rouge, Vert(e), Bleu(e), Noir(e), Blanc(he).' }] },
        { id: 'climat', title: 'Parler du climat', description: 'Météo.', translation: 'Thinking about climate', blocks: [{ type: 'examples', list: [{ french: 'Il fait beau.', translation: 'The weather is nice.' }] }] },
        { id: 'sensations', title: 'Les sensations', description: 'Chaud, Froid.', translation: 'Sensations', blocks: [{ type: 'examples', list: [{ french: 'J\'ai froid.', translation: 'I am cold.' }] }] },
        { id: 'heures-prononciation', title: 'Les heures-prononciation', description: 'Pratique orale.', translation: 'Time Pronunciation', blocks: [{ type: 'examples', list: [{ french: 'Il est midi et demi.', translation: 'It is half past noon.' }] }] },
        { id: 'futur-proche', title: 'Le futur proche', description: 'Aller + Infinitif.', translation: 'Near Future', blocks: [{ type: 'formula', items: ['Sujet + Aller + Infinitif'] }, { type: 'examples', list: [{ french: 'Je vais manger.', translation: 'I am going to eat.' }] }] },
        { id: 'futur-proche-pronom', title: 'Le futur proche - verbes pronominaux', description: 'Placement du pronom.', translation: 'Near Future (Reflexive)', blocks: [{ type: 'formula', items: ['Je vais ME laver.'] }, { type: 'examples', list: [{ french: 'Tu vas t\'habiller.', translation: 'You are going to get dressed.' }] }] },
        { id: 'professions', title: 'Les professions', description: 'Métiers.', translation: 'Professions', blocks: [{ type: 'examples', list: [{ french: 'Il est médecin.', translation: 'He is a doctor.' }] }] },
        { id: 'desc-physique-2', title: 'Description Physique', description: 'Révision.', translation: 'Physical Description', blocks: [{ type: 'examples', list: [{ french: 'Elle a les cheveux longs.', translation: 'She has long hair.' }] }] },
        { id: 'caracteriser', title: 'Caractériser une personne', description: 'Qualités/Défauts.', translation: 'Characterizing a person', blocks: [{ type: 'examples', list: [{ french: 'Il est gentil.', translation: 'He is kind.' }] }] },
        { id: 'numeros-inscription', title: 'Les numéros de téléphone et Inscription', description: 'Administratif.', translation: 'Phone numbers & Registration', blocks: [{ type: 'examples', list: [{ french: 'Quel est votre numéro ?', translation: 'What is your number?' }] }] },
        { id: 'audio-inscr', title: 'Audio - inscription', description: 'Écoute.', translation: 'Audio - Registration', blocks: [{ type: 'markdown', content: 'Écoute active.' }] },
        { id: 'audio-tel', title: 'Audio - n de téléphone', description: 'Écoute.', translation: 'Audio - Phone Numbers', blocks: [{ type: 'markdown', content: 'Écoute active.' }] },
        { id: 'questions-2', title: 'Poser des questions (2)', description: 'Avancé.', translation: 'Asking questions (2)', blocks: [{ type: 'examples', list: [{ french: 'Depuis quand habitez-vous ici ?', translation: 'Since when do you live here?' }] }] }
    ]
};
