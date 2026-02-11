
// Utility to generate regular conjugations

export type VerbEndingType = 'ER' | 'IR_ISS' | 'RE' | 'IR_COCOS';
// IR_ISS = finir (finis, finissons)
// IR_COCOS = ouvrir (ouvre, ouvres)

const ENDINGS = {
    ER: {
        present: ['e', 'es', 'e', 'ons', 'ez', 'ent'],
        imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        futur: ['ai', 'as', 'a', 'ons', 'ez', 'ont'],
        conditionnel: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        passe_simple: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'],
        subjonctif: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
        participe_passe: ['é'],
        participe_present: ['ant']
    },
    RE: {
        present: ['s', 's', '', 'ons', 'ez', 'ent'],
        imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        futur: ['ai', 'as', 'a', 'ons', 'ez', 'ont'],
        conditionnel: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        passe_simple: ['is', 'is', 'it', 'îmes', 'îtes', 'irent'],
        subjonctif: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
        participe_passe: ['u'],
        participe_present: ['ant']
    },
    IR_ISS: {
        present: ['is', 'is', 'it', 'issons', 'issez', 'issent'],
        imparfait: ['issais', 'issais', 'issait', 'issions', 'issiez', 'issaient'],
        futur: ['rai', 'ras', 'ra', 'rons', 'rez', 'ront'],
        conditionnel: ['rais', 'rais', 'rait', 'rions', 'riez', 'raient'],
        passe_simple: ['is', 'is', 'it', 'îmes', 'îtes', 'irent'],
        subjonctif: ['isse', 'isses', 'isse', 'issions', 'issiez', 'issent'],
        participe_passe: ['i'],
        participe_present: ['issant']
    },
    IR_COCOS: {
        present: ['e', 'es', 'e', 'ons', 'ez', 'ent'],
        imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        futur: ['ai', 'as', 'a', 'ons', 'ez', 'ont'],
        conditionnel: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        passe_simple: ['is', 'is', 'it', 'îmes', 'îtes', 'irent'],
        subjonctif: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
        participe_passe: ['ert'],
        participe_present: ['ant']
    }
};

const PRONOUNS = ['Je', 'Tu', 'Il/Elle', 'Nous', 'Vous', 'Ils/Elles'];
const J_APOSTROPHE_VOWELS = ['a', 'e', 'i', 'o', 'u', 'y', 'h', 'ê', 'î'];


export function createRegularVerb(infinitive: string, type: VerbEndingType, auxiliary: 'avoir' | 'etre' = 'avoir', definition: string = '') {
    let stem = '';
    let futurStem = '';

    if (type === 'ER') {
        stem = infinitive.slice(0, -2);
        futurStem = infinitive;
    } else if (type === 'RE') {
        stem = infinitive.slice(0, -2);
        futurStem = infinitive.slice(0, -1);
    } else if (type === 'IR_ISS') {
        stem = infinitive.slice(0, -2);
        futurStem = infinitive;
    } else if (type === 'IR_COCOS') {
        stem = infinitive.slice(0, -2);
        futurStem = infinitive;
    }

    const endings = ENDINGS[type];
    const data: any = {
        infinitive,
        translation: definition, // Helper maps definition to translation prop
        group: type === 'ER' ? '1st' : (type === 'IR_ISS' ? '2nd' : '3rd'),
        auxiliary: auxiliary === 'avoir' ? 'Avoir' : 'Être',
        rules: ['Regular conjugation pattern.'],
        conjugations: { // Changed from moods to conjugations
            Indicatif: {},
            Conditionnel: {}, // Key case matches ConjugationPage expects (Capitalized?)
            Subjonctif: {},
            Impératif: {},
            Participe: {}
        }
    };

    // Check capitalization in ConjugationPage: 
    // ['Indicatif', 'Subjonctif', 'Conditionnel', 'Impératif', 'Participe'].map... matches keys.

    const conjure = (tStem: string, tEndings: string[]) => {
        return PRONOUNS.map((p, i) => {
            const ending = tEndings[i];
            let verbosePronoun = p;
            if (i === 0) {
                const firstLetter = (tStem + ending).charAt(0).toLowerCase();
                if (J_APOSTROPHE_VOWELS.includes(firstLetter)) verbosePronoun = "J'";
            }
            return { pronoun: verbosePronoun, form: tStem + ending };
        });
    };

    // Indicatif Présent
    data.conjugations.Indicatif['Présent'] = conjure(stem, endings.present);
    data.conjugations.Indicatif['Imparfait'] = conjure(stem, endings.imparfait);
    data.conjugations.Indicatif['Futur Simple'] = conjure(futurStem, type === 'IR_ISS' ? ['ai', 'as', 'a', 'ons', 'ez', 'ont'] : endings.futur);
    data.conjugations.Indicatif['Passé Simple'] = conjure(stem, endings.passe_simple);

    // Conditionnel Présent
    data.conjugations.Conditionnel['Présent'] = conjure(futurStem, endings.conditionnel);

    // Subjonctif Présent
    data.conjugations.Subjonctif['Présent'] = conjure(stem, endings.subjonctif);

    // Participle
    data.conjugations.Participe['Présent'] = [{ pronoun: '', form: stem + endings.participe_present[0] }];
    data.conjugations.Participe['Passé'] = [{ pronoun: (auxiliary === 'etre' ? '(e)(s)' : ''), form: stem + endings.participe_passe[0] }];

    // Compounds
    const aux = auxiliary === 'avoir' ?
        {
            pres: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
            imp: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
            fut: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
            cond: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'],
            subj: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient']
        } :
        {
            pres: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
            imp: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'],
            fut: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'],
            cond: ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'],
            subj: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient']
        };

    const pp = stem + endings.participe_passe[0];

    const compound = (auxTense: string[]) => {
        return PRONOUNS.map((p, i) => {
            let pron = p;
            if (i === 0 && auxiliary === 'avoir') pron = "J'";
            return { pronoun: pron, form: auxTense[i] + ' ' + pp };
        });
    };

    data.conjugations.Indicatif['Passé Composé'] = compound(aux.pres);
    data.conjugations.Indicatif['Plus-que-parfait'] = compound(aux.imp);
    data.conjugations.Indicatif['Futur Antérieur'] = compound(aux.fut);
    data.conjugations.Conditionnel['Passé'] = compound(aux.cond);
    data.conjugations.Subjonctif['Passé'] = compound(aux.subj);

    // Futur Proche
    const aller = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];
    data.conjugations.Indicatif['Futur Proche'] = PRONOUNS.map((p, i) => ({ pronoun: p, form: aller[i] + ' ' + infinitive }));

    // Imperatif
    let impEndings = [];
    if (type === 'ER' || type === 'IR_COCOS') impEndings = ['e', 'ons', 'ez'];
    else if (type === 'RE') impEndings = ['s', 'ons', 'ez'];
    else impEndings = ['is', 'issons', 'issez'];

    data.conjugations.Impératif['Présent'] = [
        { pronoun: '(Tu)', form: stem + impEndings[0] },
        { pronoun: '(Nous)', form: stem + impEndings[1] },
        { pronoun: '(Vous)', form: stem + impEndings[2] }
    ];

    return data;
}
