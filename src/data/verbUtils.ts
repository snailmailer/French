
// Utility to generate regular conjugations

export type VerbEndingType = 'ER' | 'IR_ISS' | 'RE' | 'IR_COCOS' | 'IR_DORMIR' | 'IR_VENIR';
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
    },
    IR_VENIR: {
        present: ['s', 's', 't', 'ons', 'ez', 'nent'], // viens, viens, vient, ven-ons, ven-ez, vien-nent (stem logic needed)
        imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        futur: ['drai', 'dras', 'dra', 'drons', 'drez', 'dront'], // viendrai
        conditionnel: ['drais', 'drais', 'drait', 'drions', 'driez', 'draient'],
        passe_simple: ['s', 's', 't', 'mes', 'tes', 'rent'], // vins, vins, vint, vînmes... irregular formatting?
        subjonctif: ['ne', 'nes', 'ne', 'ions', 'iez', 'nent'], // vienne
        subj_imparfait: ['sse', 'sses', 't', 'ssions', 'ssiez', 'ssent'], // vinsse
        participe_passe: ['u'], // venu
        participe_present: ['ant']
    }
};

const PRONOUNS = ['Je', 'Tu', 'Il/Elle', 'Nous', 'Vous', 'Ils/Elles'];
const REFLEXIVE_PRONOUNS = ['me', 'te', 'se', 'nous', 'vous', 'se'];
const J_APOSTROPHE_VOWELS = ['a', 'e', 'i', 'o', 'u', 'y', 'h', 'ê', 'î'];


export function createRegularVerb(infinitive: string, type: VerbEndingType, auxiliary: 'avoir' | 'etre' = 'avoir', definition: string = '', isReflexive: boolean = false, customRules: string[] = [], examples: { sentence: string, translation: string }[] = [], category: string = '') {
    // If reflexive, force auxiliary to be être for compound tenses
    const actualAux = isReflexive ? 'etre' : auxiliary;

    // Handle "Se laver" input -> strip "Se " for stemming
    let cleanInfinitive = infinitive;
    if (infinitive.toLowerCase().startsWith('se ')) cleanInfinitive = infinitive.substring(3);
    else if (infinitive.toLowerCase().startsWith("s'")) cleanInfinitive = infinitive.substring(2);

    // Handle "se sécher les cheveux" -> verb "sécher", suffix " les cheveux"
    let verbPart = cleanInfinitive;
    let suffix = '';
    const spaceIndex = cleanInfinitive.indexOf(' ');
    if (spaceIndex !== -1) {
        verbPart = cleanInfinitive.substring(0, spaceIndex);
        suffix = cleanInfinitive.substring(spaceIndex);
    }

    let stem = '';
    let futurStem = verbPart;
    let changedStem = ''; // For e->è changes (lève, sèche)
    let yToIStem = ''; // For ayer/oyer/uyer -> ie (nettoie, ennuie)
    let doubleLStem = ''; // For eler -> elle (appelle)
    let futureStemHasAccent = false;

    // Auto-detect stem changes for ER verbs
    if (type === 'ER') {
        stem = verbPart.slice(0, -2);

        // 1. Y -> I (oyer/uyer. ayer is optional, usually keeps y)
        // nettoyer -> nettoie. s'ennuyer -> m'ennuie.
        const yMatch = verbPart.match(/^(.*)(oy|uy)er$/);
        if (yMatch) {
            // netoy -> nettoi. Stem is 'nettoy'. 
            // We want 'nettoi'.
            yToIStem = stem.slice(0, -1) + 'i';
        }

        // 2. L -> LL (appeler -> appelle)
        if (verbPart.endsWith('appeler')) {
            doubleLStem = stem + 'l'; // appel -> appell
        }

        // 3. E -> È (lever, promener, sécher)
        // Only if not handled by above
        if (!doubleLStem && !yToIStem) {
            // Regex for e..er or é..er (e.g. lever, sécher, promener)
            // Groups: 1=Prefix, 2=Vowel(e/é), 3=Consonants
            const match = verbPart.match(/^(.*)(e|é)([^aeiou]+)er$/);
            if (match) {
                const prefix = match[1];
                const vowel = match[2];
                const cons = match[3];
                changedStem = `${prefix}è${cons}`; // lève, sèche

                if (vowel === 'e') {
                    // e_er (lever) -> Future uses è (lèverai)
                    futureStemHasAccent = true;
                } else {
                    // é_er (sécher) -> Future keeps é (sécherai)
                    futureStemHasAccent = false;
                }
            }
        }
    } else if (type === 'RE') {
        stem = verbPart.slice(0, -2);
        futurStem = verbPart.slice(0, -1);
    } else if (type === 'IR_ISS') {
        stem = verbPart.slice(0, -2);
        futurStem = verbPart;
    } else if (type === 'IR_COCOS') {
        stem = verbPart.slice(0, -2);
        futurStem = verbPart;
    } else if (type === 'IR_DORMIR') {
        stem = verbPart.slice(0, -2);
        futurStem = verbPart;
    } else if (type === 'IR_VENIR') {
        stem = verbPart.slice(0, -2); // ven
        // Special stems for Venir
        // Pres S: vien-s
        // Pres P: ven-ons, vien-nent
        // Fut: viendr-ai
        // PS: vin-s
        // PP: ven-u
        futurStem = stem.replace('en', 'iend'); // viend
    }

    const generatedRules: string[] = [];
    if (isReflexive) generatedRules.push('Reflexive verb.');
    if (yToIStem) generatedRules.push('Stem change: y -> i (e.g. ' + yToIStem + 'e).');
    if (doubleLStem) generatedRules.push('Stem change: l -> ll (e.g. ' + doubleLStem + 'e).');
    if (changedStem) generatedRules.push('Stem change: e -> è (e.g. ' + changedStem + 'e).');
    if (cleanInfinitive.endsWith('ger')) generatedRules.push('Spelling change: g -> ge before a/o (e.g. mangeons).');
    if (cleanInfinitive.endsWith('cer')) generatedRules.push('Spelling change: c -> ç before a/o (e.g. lançons).');
    if (type === 'IR_COCOS') generatedRules.push('Conjugates like ER verbs in Present (e.g. ouvre).');
    if (type === 'IR_DORMIR') generatedRules.push('Short stem in Singular Present (e.g. dors).');

    if (generatedRules.length === 0 && customRules.length === 0) {
        generatedRules.push('Regular conjugation pattern.');
    }

    const endings = ENDINGS[type];
    const data: any = {
        infinitive,
        translation: definition,
        group: type === 'ER' ? '1st' : (type === 'IR_ISS' ? '2nd' : '3rd'),
        auxiliary: isReflexive ? 'Être (Reflexive)' : (auxiliary === 'avoir' ? 'Avoir' : 'Être'),
        rules: [...generatedRules, ...customRules],
        examples,
        category,
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

    const conjure = (tStem: string, tEndings: string[], useFutureStem: boolean = false) => {
        return PRONOUNS.map((_, i) => {
            let currentStem = tStem;
            const changes = [0, 1, 2, 5]; // Je, Tu, Il, Ils

            // Handle Stem Changes (Present & Subjunctive)
            if ((tEndings === endings.present || tEndings === endings.subjonctif)) {
                if (changes.includes(i)) {
                    if (yToIStem) currentStem = yToIStem;
                    else if (doubleLStem) currentStem = doubleLStem;
                    else if (changedStem) currentStem = changedStem;
                }
            }

            // Future/Cond
            if (useFutureStem) {
                if (yToIStem) currentStem = yToIStem + 'er'; // nettoierai
                else if (doubleLStem) currentStem = doubleLStem + 'er'; // appellerai
                else if (changedStem && futureStemHasAccent) {
                    currentStem = changedStem + 'er'; // lèverai
                }
            }

            // IR_DORMIR Short Stem logic for Present Singular
            if (type === 'IR_DORMIR' && tEndings === endings.present && i < 3) {
                currentStem = tStem.slice(0, -1);
            }

            // GER/CER handling
            // manger -> mangeons (add e before a/o), manageais (add e before a/o)
            // lancer -> lançons (c->ç before a/o), lançais (c->ç before a/o)
            let stemToUse = currentStem;
            if (type === 'ER') {
                const isGer = cleanInfinitive.endsWith('ger');
                const isCer = cleanInfinitive.endsWith('cer');

                if (isGer || isCer) {
                    const firstLetter = tEndings[i].charAt(0); // 'o' (ons) or 'a' (ais/as/a/aient)
                    if (firstLetter === 'o' || firstLetter === 'a') {
                        if (isGer) {
                            stemToUse = stem + 'e'; // mang -> mange
                        } else if (isCer) {
                            stemToUse = stem.slice(0, -1) + 'ç'; // lanc -> lanç
                        }
                    }
                }
            }

            const ending = tEndings[i];
            const verbForm = stemToUse + ending + suffix;
            const { p, r } = getPronoun(i, verbForm);

            return { pronoun: p, form: r + verbForm };
        });
    };

    // Indicatif Présent
    data.conjugations.Indicatif['Présent'] = conjure(stem, endings.present);
    data.conjugations.Indicatif['Imparfait'] = conjure(stem, endings.imparfait);
    data.conjugations.Indicatif['Futur Simple'] = conjure(futurStem, type === 'IR_ISS' ? ['ai', 'as', 'a', 'ons', 'ez', 'ont'] : endings.futur, true);
    data.conjugations.Indicatif['Passé Simple'] = conjure(stem, endings.passe_simple);

    // Conditionnel Présent
    data.conjugations.Conditionnel['Présent'] = conjure(futurStem, endings.conditionnel, true);

    // Subjonctif Présent
    data.conjugations.Subjonctif['Présent'] = conjure(stem, endings.subjonctif).map((item: any) => ({ ...item, pronoun: 'que ' + item.pronoun }));

    // Subjonctif Imparfait
    data.conjugations.Subjonctif['Imparfait'] = conjure(stem, endings.subj_imparfait);

    // Participle
    const ppStem = stem + endings.participe_present[0];
    const ppReflexive = isReflexive ? 'se ' + ppStem : ppStem;
    data.conjugations.Participe['Présent'] = [{ pronoun: '', form: ppReflexive + suffix }];

    const ppBase = stem + endings.participe_passe[0] + suffix;
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

    const pp = stem + endings.participe_passe[0] + suffix;

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

    data.conjugations.Conditionnel['Passé'] = compound(aux.cond); // Forme 1
    data.conjugations.Conditionnel['Passé - forme alternative'] = compound(aux.subj_imp); // Forme 2

    data.conjugations.Subjonctif['Passé'] = compound(aux.subj);
    data.conjugations.Subjonctif['Plus-que-parfait'] = compound(aux.subj_imp);


    // Futur Proche
    const aller = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];
    data.conjugations.Indicatif['Futur Proche'] = PRONOUNS.map((_, i) => {
        const vAller = aller[i];
        let p = PRONOUNS[i];

        let infPart = cleanInfinitive;
        if (suffix) infPart = cleanInfinitive; // cleanInfinitive has suffix if I didn't slice it. But I didn't. 
        // cleanInfinitive is full phrase minus "se ". "sécher les cheveux".
        // check conj function logic:
        // if (isReflexive) r + cleanInfinitive. -> "me sécher les cheveux". Correct.

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

    let impStemTu = stem;
    if (yToIStem) impStemTu = yToIStem;
    else if (doubleLStem) impStemTu = doubleLStem;
    else if (changedStem && type === 'ER') impStemTu = changedStem; // Lève-toi

    if (isReflexive) {
        data.conjugations.Impératif['Présent'] = [
            { pronoun: '(Tu)', form: impStemTu + impEndings[0] + suffix + '-toi' },
            { pronoun: '(Nous)', form: stem + impEndings[1] + suffix + '-nous' },
            { pronoun: '(Vous)', form: stem + impEndings[2] + suffix + '-vous' }
        ];
    } else {
        data.conjugations.Impératif['Présent'] = [
            { pronoun: '(Tu)', form: impStemTu + impEndings[0] + suffix },
            { pronoun: '(Nous)', form: stem + impEndings[1] + suffix },
            { pronoun: '(Vous)', form: stem + impEndings[2] + suffix }
        ];
    }

    return data;
}
