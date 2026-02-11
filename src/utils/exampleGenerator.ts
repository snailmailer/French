import type { VerbDefinition, VerbConjugations, ConjugationRow } from '../data/types';

export const generateExample = (pronoun: string, form: string, mood: string, tense: string, _infinitive: string): string => {
    const cleanForm = form.replace(/\(.*\)/g, '').trim(); // Remove optional parts like (e)

    // Subjonctif handling (form usually includes "que")
    if (mood === 'Subjonctif') {
        const base = `Il faut ${form}`;
        if (tense === 'Présent') return `Il faut ${form} maintenant.`;
        if (tense === 'Passé') return `Il est possible ${form} hier.`;
        if (tense === 'Imparfait') return `Il fallait ${form}.`;
        if (tense === 'Plus-que-parfait') return `Il aurait fallu ${form}.`;
        return `${base}.`;
    }

    if (mood === 'Conditionnel') {
        if (tense === 'Présent') return `${pronoun} ${cleanForm} si possible.`;
        if (tense === 'Passé') return `${pronoun} ${cleanForm} si j'avais pu.`;
        if (tense === 'Passé (2ème forme)') return `${pronoun} ${cleanForm} (littéraire).`;
        return `${pronoun} ${cleanForm}.`;
    }

    if (mood === 'Impératif') {
        return `${cleanForm} !`;
    }

    if (mood === 'Participe') {
        if (tense === 'Présent') return `En ${cleanForm}, on apprend.`;
        return `${cleanForm} est le participe passé.`;
    }

    // Indicatif
    switch (tense) {
        case 'Présent':
            return `${pronoun} ${cleanForm} souvent.`;
        case 'Passé Composé':
            return `${pronoun} ${cleanForm} hier.`;
        case 'Imparfait':
            return `${pronoun} ${cleanForm} autrefois.`;
        case 'Futur Simple':
            return `${pronoun} ${cleanForm} demain.`;
        case 'Futur Proche':
            return `${pronoun} ${cleanForm} bientôt.`;
        case 'Plus-que-parfait':
            return `${pronoun} ${cleanForm} déjà.`;
        case 'Passé Simple':
            return `${pronoun} ${cleanForm} soudain.`;
        case 'Passé Antérieur':
            return `Dès que ${pronoun} ${cleanForm}, nous partîmes.`;
        case 'Futur Antérieur':
            return `Quand ${pronoun} ${cleanForm}, ce sera fini.`;
        default:
            return `${pronoun} ${cleanForm}.`;
    }
};

export const applyExamplesToVerb = (verb: VerbDefinition): VerbDefinition => {
    // Return a new object to avoid mutating the original if it's frozen or reused
    const newVerb = {
        ...verb,
        conjugations: JSON.parse(JSON.stringify(verb.conjugations))
    };

    Object.keys(newVerb.conjugations).forEach((moodKey) => {
        const mood = newVerb.conjugations[moodKey as keyof VerbConjugations];
        Object.keys(mood).forEach((tenseKey) => {
            const rows = mood[tenseKey];
            rows.forEach((row: ConjugationRow) => {
                if (!row.example) {
                    row.example = generateExample(row.pronoun, row.form, moodKey, tenseKey, verb.infinitive);
                }
            });
        });
    });

    return newVerb;
};
