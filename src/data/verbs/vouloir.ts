import type { VerbDefinition } from '../types';

export const vouloir: VerbDefinition = {
    infinitive: 'vouloir',
    translation: 'to want',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Irregular.', 'Stem "veux/veu" in present, "voudr" in future.', 'Two imperative forms.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'veux' }, { pronoun: 'tu', form: 'veux' }, { pronoun: 'il/elle', form: 'veut' },
                { pronoun: 'nous', form: 'voulons' }, { pronoun: 'vous', form: 'voulez' }, { pronoun: 'ils/elles', form: 'veulent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai voulu' }, { pronoun: 'tu', form: 'as voulu' }, { pronoun: 'il/elle', form: 'a voulu' },
                { pronoun: 'nous', form: 'avons voulu' }, { pronoun: 'vous', form: 'avez voulu' }, { pronoun: 'ils/elles', form: 'ont voulu' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'voulais' }, { pronoun: 'tu', form: 'voulais' }, { pronoun: 'il/elle', form: 'voulait' },
                { pronoun: 'nous', form: 'voulions' }, { pronoun: 'vous', form: 'vouliez' }, { pronoun: 'ils/elles', form: 'voulaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'voulus' }, { pronoun: 'tu', form: 'voulus' }, { pronoun: 'il/elle', form: 'voulut' },
                { pronoun: 'nous', form: 'voulûmes' }, { pronoun: 'vous', form: 'voulûtes' }, { pronoun: 'ils/elles', form: 'voulurent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais voulu' }, { pronoun: 'tu', form: 'avais voulu' }, { pronoun: 'il/elle', form: 'avait voulu' },
                { pronoun: 'nous', form: 'avions voulu' }, { pronoun: 'vous', form: 'aviez voulu' }, { pronoun: 'ils/elles', form: 'avaient voulu' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus voulu' }, { pronoun: 'tu', form: 'eus voulu' }, { pronoun: 'il/elle', form: 'eut voulu' },
                { pronoun: 'nous', form: 'eûmes voulu' }, { pronoun: 'vous', form: 'eûtes voulu' }, { pronoun: 'ils/elles', form: 'eurent voulu' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'voudrai' }, { pronoun: 'tu', form: 'voudras' }, { pronoun: 'il/elle', form: 'voudra' },
                { pronoun: 'nous', form: 'voudrons' }, { pronoun: 'vous', form: 'voudrez' }, { pronoun: 'ils/elles', form: 'voudront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai voulu' }, { pronoun: 'tu', form: 'auras voulu' }, { pronoun: 'il/elle', form: 'aura voulu' },
                { pronoun: 'nous', form: 'aurons voulu' }, { pronoun: 'vous', form: 'aurez voulu' }, { pronoun: 'ils/elles', form: 'auront voulu' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais vouloir' }, { pronoun: 'tu', form: 'vas vouloir' }, { pronoun: 'il/elle', form: 'va vouloir' },
                { pronoun: 'nous', form: 'allons vouloir' }, { pronoun: 'vous', form: 'allez vouloir' }, { pronoun: 'ils/elles', form: 'vont vouloir' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'veuille' }, { pronoun: 'que tu', form: 'veuilles' }, { pronoun: 'qu\'il/elle', form: 'veuille' },
                { pronoun: 'que nous', form: 'voulions' }, { pronoun: 'que vous', form: 'vouliez' }, { pronoun: 'qu\'ils/elles', form: 'veuillent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'voulusse' }, { pronoun: 'que tu', form: 'voulusses' }, { pronoun: 'qu\'il/elle', form: 'voulût' },
                { pronoun: 'que nous', form: 'voulussions' }, { pronoun: 'que vous', form: 'voulussiez' }, { pronoun: 'qu\'ils/elles', form: 'voulussent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie voulu' }, { pronoun: 'que tu', form: 'aies voulu' }, { pronoun: 'qu\'il/elle', form: 'ait voulu' },
                { pronoun: 'que nous', form: 'ayons voulu' }, { pronoun: 'que vous', form: 'ayez voulu' }, { pronoun: 'qu\'ils/elles', form: 'aient voulu' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse voulu' }, { pronoun: 'que tu', form: 'eusses voulu' }, { pronoun: 'qu\'il/elle', form: 'eût voulu' },
                { pronoun: 'que nous', form: 'eussions voulu' }, { pronoun: 'que vous', form: 'eussiez voulu' }, { pronoun: 'qu\'ils/elles', form: 'eussent voulu' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'voudrais' }, { pronoun: 'tu', form: 'voudrais' }, { pronoun: 'il/elle', form: 'voudrait' },
                { pronoun: 'nous', form: 'voudrions' }, { pronoun: 'vous', form: 'voudriez' }, { pronoun: 'ils/elles', form: 'voudraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais voulu' }, { pronoun: 'tu', form: 'aurais voulu' }, { pronoun: 'il/elle', form: 'aurait voulu' },
                { pronoun: 'nous', form: 'aurions voulu' }, { pronoun: 'vous', form: 'auriez voulu' }, { pronoun: 'ils/elles', form: 'auraient voulu' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse voulu' }, { pronoun: 'tu', form: 'eusses voulu' }, { pronoun: 'il/elle', form: 'eût voulu' },
                { pronoun: 'nous', form: 'eussions voulu' }, { pronoun: 'vous', form: 'eussiez voulu' }, { pronoun: 'ils/elles', form: 'eussent voulu' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'veuille' },
                { pronoun: '(nous)', form: 'veuillons' },
                { pronoun: '(vous)', form: 'veuillez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'voulant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'voulu' },
                { pronoun: 'Fem. Sing.', form: 'voulue' },
                { pronoun: 'Masc. Plur.', form: 'voulus' },
                { pronoun: 'Fem. Plur.', form: 'voulues' }
            ]
        }
    }
};
