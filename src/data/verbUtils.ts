
// Utility to generate regular conjugations

export type VerbEndingType = 'ER' | 'IR_ISS' | 'RE' | 'IR_COCOS' | 'IR_DORMIR';
// IR_ISS = finir (finis, finissons)
// IR_COCOS = ouvrir (ouvre, ouvres)
// IR_DORMIR = dormir (dors, dormons)

const ENDINGS = {
    ER: {
        present: ['e', 'es', 'e', 'ons', 'ez', 'ent'],
        imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        futur: ['ai', 'as', 'a', 'ons', 'ez', 'ont'],
        conditionnel: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        passe_simple: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'],
        subjonctif: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
        subj_imparfait: ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent'],
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
        subj_imparfait: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent'],
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
        subj_imparfait: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent'],
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
        subj_imparfait: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent'],
        participe_passe: ['ert'],
        participe_present: ['ant']
    },
    IR_DORMIR: {
        present: ['s', 's', 't', 'ons', 'ez', 'ent'],
        imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        futur: ['ai', 'as', 'a', 'ons', 'ez', 'ont'],
        conditionnel: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        passe_simple: ['is', 'is', 'it', 'îmes', 'îtes', 'irent'],
        subjonctif: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
        subj_imparfait: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent'],
        participe_passe: ['i'],
        participe_present: ['ant']
    }
};

const PRONOUNS = ['Je', 'Tu', 'Il/Elle', 'Nous', 'Vous', 'Ils/Elles'];
const REFLEXIVE_PRONOUNS = ['me', 'te', 'se', 'nous', 'vous', 'se'];
const J_APOSTROPHE_VOWELS = ['a', 'e', 'i', 'o', 'u', 'y', 'h', 'ê', 'î'];


export function createRegularVerb(infinitive: string, type: VerbEndingType, auxiliary: 'avoir' | 'etre' = 'avoir', definition: string = '', isReflexive: boolean = false) {
    // If reflexive, force auxiliary to be être for compound tenses
    const actualAux = isReflexive ? 'etre' : auxiliary;

    // Handle "Se laver" input -> strip "Se " for stemming
    let cleanInfinitive = infinitive;
    if (infinitive.toLowerCase().startsWith('se ')) cleanInfinitive = infinitive.substring(3);
    else if (infinitive.toLowerCase().startsWith("s'")) cleanInfinitive = infinitive.substring(2);

    let stem = '';
    let futurStem = '';

    if (type === 'ER') {
        stem = cleanInfinitive.slice(0, -2);
        futurStem = cleanInfinitive;
    } else if (type === 'RE') {
        stem = cleanInfinitive.slice(0, -2);
        futurStem = cleanInfinitive.slice(0, -1);
    } else if (type === 'IR_ISS') {
        stem = cleanInfinitive.slice(0, -2);
        futurStem = cleanInfinitive;
    } else if (type === 'IR_COCOS') {
        stem = cleanInfinitive.slice(0, -2);
        futurStem = cleanInfinitive;
    } else if (type === 'IR_DORMIR') {
        // Dormir -> Dorm (Long), Dor (Short for Sg Present)
        stem = cleanInfinitive.slice(0, -2);
        futurStem = cleanInfinitive;
    }

    const endings = ENDINGS[type];
    const data: any = {
        infinitive,
        translation: definition,
        group: type === 'ER' ? '1st' : (type === 'IR_ISS' ? '2nd' : '3rd'),
        auxiliary: isReflexive ? 'Être (Reflexive)' : (auxiliary === 'avoir' ? 'Avoir' : 'Être'),
        rules: ['Regular conjugation pattern.'],
        conjugations: {
            Indicatif: {},
            Conditionnel: {},
            Subjonctif: {},
            Impératif: {},
            Participe: {}
        }
    };

    // Helper for reflexive pronouns
    const getPronoun = (i: number, nextWord: string) => {
        let p = PRONOUNS[i];
        let r = '';
        if (isReflexive) {
            r = REFLEXIVE_PRONOUNS[i];
            const firstLetter = nextWord.charAt(0).toLowerCase();
            if (J_APOSTROPHE_VOWELS.includes(firstLetter) && ['me', 'te', 'se'].includes(r)) {
                r = r.slice(0, -1) + "'";
            } else {
                r += ' ';
            }
        }

        if (!isReflexive && i === 0) {
            const firstLetter = nextWord.charAt(0).toLowerCase();
            if (J_APOSTROPHE_VOWELS.includes(firstLetter)) p = "J'";
        }

        return { p, r };
    };

    const conjure = (tStem: string, tEndings: string[]) => {
        return PRONOUNS.map((_, i) => {
            let currentStem = tStem;
            // IR_DORMIR Short Stem logic for Present Singular
            if (type === 'IR_DORMIR' && tEndings === endings.present && i < 3) {
                currentStem = tStem.slice(0, -1);
            }

            const ending = tEndings[i];
            const verbForm = currentStem + ending;
            const { p, r } = getPronoun(i, verbForm);

            return { pronoun: p, form: r + verbForm };
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
    data.conjugations.Subjonctif['Présent'] = conjure(stem, endings.subjonctif).map((item: any) => ({ ...item, pronoun: 'que ' + item.pronoun }));

    // Subjonctif Imparfait
    data.conjugations.Subjonctif['Imparfait'] = conjure(stem, endings.subj_imparfait);

    // Participle
    const ppStem = stem + endings.participe_present[0];
    const ppReflexive = isReflexive ? 'se ' + ppStem : ppStem;
    data.conjugations.Participe['Présent'] = [{ pronoun: '', form: ppReflexive }];

    const ppBase = stem + endings.participe_passe[0];
    data.conjugations.Participe['Passé'] = [{ pronoun: (actualAux === 'etre' ? '(e)(s)' : ''), form: ppBase }];


    // Compounds
    const aux = actualAux === 'avoir' ?
        {
            pres: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
            imp: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
            fut: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
            cond: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'],
            subj: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
            passe_simple: ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'],
            subj_imp: ['eusse', 'eusses', 'eût', 'eussions', 'eussiez', 'eussent']
        } :
        {
            pres: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
            imp: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'],
            fut: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'],
            cond: ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'],
            subj: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'],
            passe_simple: ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'],
            subj_imp: ['fusse', 'fusses', 'fût', 'fussions', 'fussiez', 'fussent']
        };

    const pp = stem + endings.participe_passe[0];

    const compound = (auxTense: string[]) => {
        return PRONOUNS.map((_, i) => {
            const auxForm = auxTense[i];
            const { p, r } = getPronoun(i, auxForm);
            return { pronoun: p, form: r + auxForm + ' ' + pp };
        });
    };

    data.conjugations.Indicatif['Passé Composé'] = compound(aux.pres);
    data.conjugations.Indicatif['Plus-que-parfait'] = compound(aux.imp);
    data.conjugations.Indicatif['Futur Antérieur'] = compound(aux.fut);
    data.conjugations.Indicatif['Passé Antérieur'] = compound(aux.passe_simple);

    data.conjugations.Conditionnel['Passé'] = compound(aux.cond);
    data.conjugations.Conditionnel['Passé - forme alternative'] = compound(aux.subj_imp);

    data.conjugations.Subjonctif['Passé'] = compound(aux.subj);
    data.conjugations.Subjonctif['Plus-que-parfait'] = compound(aux.subj_imp);


    // Futur Proche
    const aller = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];
    data.conjugations.Indicatif['Futur Proche'] = PRONOUNS.map((_, i) => {
        const vAller = aller[i];
        let p = PRONOUNS[i];

        // Je vais ME laver.
        let infPart = cleanInfinitive;
        if (isReflexive) {
            let r = REFLEXIVE_PRONOUNS[i];
            const firstLetter = cleanInfinitive.charAt(0).toLowerCase();
            if (J_APOSTROPHE_VOWELS.includes(firstLetter)) r = r.slice(0, -1) + "'";
            else r += ' ';
            infPart = r + cleanInfinitive;
        }

        return { pronoun: p, form: vAller + ' ' + infPart };
    });

    // Imperatif
    let impEndings = [];
    if (type === 'ER' || type === 'IR_COCOS') impEndings = ['e', 'ons', 'ez'];
    else if (type === 'RE') impEndings = ['s', 'ons', 'ez'];
    else impEndings = ['is', 'issons', 'issez'];

    if (isReflexive) {
        data.conjugations.Impératif['Présent'] = [
            { pronoun: '(Tu)', form: stem + impEndings[0] + '-toi' },
            { pronoun: '(Nous)', form: stem + impEndings[1] + '-nous' },
            { pronoun: '(Vous)', form: stem + impEndings[2] + '-vous' }
        ];
    } else {
        data.conjugations.Impératif['Présent'] = [
            { pronoun: '(Tu)', form: stem + impEndings[0] },
            { pronoun: '(Nous)', form: stem + impEndings[1] },
            { pronoun: '(Vous)', form: stem + impEndings[2] }
        ];
    }

    return data;
}
