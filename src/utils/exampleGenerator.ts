import type { VerbDefinition, VerbConjugations, ConjugationRow } from '../data/types';

export const generateExample = (pronoun: string, form: string, mood: string, tense: string, _infinitive: string, translation: string): { fr: string, en: string } => {
    const cleanForm = form.replace(/\(.*\)/g, '').trim(); // Remove optional parts like (e)

    // Helper to capitalize first letter
    const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

    // Crude english base derivation
    const engVerb = translation.replace(/^to\s+/i, '');
    let engPronoun = pronoun.toLowerCase();
    if (engPronoun.includes("je") || engPronoun.includes("j'")) engPronoun = "I";
    else if (engPronoun.includes("tu") || engPronoun.includes("vous")) engPronoun = "You";
    else if (engPronoun.includes("il/elle")) engPronoun = "He/She";
    else if (engPronoun.includes("nous")) engPronoun = "We";
    else if (engPronoun.includes("ils/elles")) engPronoun = "They";
    else engPronoun = "It";

    let fr = '';
    let en = '';

    // Subjonctif handling (form usually includes "que")
    if (mood === 'Subjonctif') {
        const base = `Il faut ${form}`;
        if (tense === 'Présent') { fr = `Il faut ${form} maintenant.`; en = `It is necessary that ${engPronoun} ${engVerb} now.`; }
        else if (tense === 'Passé') { fr = `Il est possible ${form} hier.`; en = `It is possible that ${engPronoun} ${engVerb} yesterday.`; }
        else if (tense === 'Imparfait') { fr = `Il fallait ${form}.`; en = `It was necessary that ${engPronoun} ${engVerb}.`; }
        else if (tense === 'Plus-que-parfait') { fr = `Il aurait fallu ${form}.`; en = `It would have been necessary that ${engPronoun} ${engVerb}.`; }
        else { fr = `${base}.`; en = `It is necessary that ${engPronoun} ${engVerb}.`; }
    } else if (mood === 'Conditionnel') {
        if (tense === 'Présent') { fr = `${pronoun} ${cleanForm} si possible.`; en = `${engPronoun} would ${engVerb} if possible.`; }
        else if (tense === 'Passé') { fr = `${pronoun} ${cleanForm} si j'avais pu.`; en = `${engPronoun} would have ${engVerb} if possible.`; }
        else if (tense === 'Passé (2ème forme)') { fr = `${pronoun} ${cleanForm} (littéraire).`; en = `${engPronoun} would have ${engVerb} (literary).`; }
        else { fr = `${pronoun} ${cleanForm}.`; en = `${engPronoun} would ${engVerb}.`; }
    } else if (mood === 'Impératif') {
        fr = `${cleanForm} !`; en = `${engVerb.charAt(0).toUpperCase() + engVerb.slice(1)}!`;
    } else if (mood === 'Participe') {
        if (tense === 'Présent') { fr = `En ${cleanForm}, on apprend.`; en = `By / While ${engVerb}ing, one learns.`; }
        else { fr = `${cleanForm} est le participe passé.`; en = `Past participle of ${engVerb}.`; }
    } else {
        // Indicatif
        switch (tense) {
            case 'Présent':
                fr = `${pronoun} ${cleanForm} souvent.`; en = `${engPronoun} often ${engVerb}.`; break;
            case 'Passé Composé':
                fr = `${pronoun} ${cleanForm} hier.`; en = `${engPronoun} ${engVerb} (past) yesterday.`; break;
            case 'Imparfait':
                fr = `${pronoun} ${cleanForm} autrefois.`; en = `${engPronoun} used to ${engVerb}.`; break;
            case 'Futur Simple':
                fr = `${pronoun} ${cleanForm} demain.`; en = `${engPronoun} will ${engVerb} tomorrow.`; break;
            case 'Futur Proche':
                fr = `${pronoun} ${cleanForm} bientôt.`; en = `${engPronoun} am/is/are going to ${engVerb} soon.`; break;
            case 'Plus-que-parfait':
                fr = `${pronoun} ${cleanForm} déjà.`; en = `${engPronoun} had already ${engVerb}.`; break;
            case 'Passé Simple':
                fr = `${pronoun} ${cleanForm} soudain.`; en = `${engPronoun} suddenly ${engVerb} (past).`; break;
            case 'Passé Antérieur':
                fr = `Dès que ${pronoun} ${cleanForm}, nous partîmes.`; en = `As soon as ${engPronoun} had ${engVerb}, we left.`; break;
            case 'Futur Antérieur':
                fr = `Quand ${pronoun} ${cleanForm}, ce sera fini.`; en = `When ${engPronoun} will have ${engVerb}, it will be over.`; break;
            default:
                fr = `${pronoun} ${cleanForm}.`; en = `${engPronoun} ${engVerb}.`; break;
        }
    }

    return { fr: capitalize(fr), en: capitalize(en) };
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
                const generated = generateExample(row.pronoun, row.form, moodKey, tenseKey, verb.infinitive, verb.translation);
                if (!row.example) {
                    row.example = generated.fr;
                }
                if (!row.exampleEn) {
                    row.exampleEn = generated.en;
                }
            });
        });
    });

    return newVerb;
};
