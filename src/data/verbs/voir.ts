import type { VerbDefinition } from '../types';

export const voir: VerbDefinition = {
    infinitive: 'voir',
    translation: 'to see',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Irregular.', 'Participle: vu.', 'Future stem: verr-'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'vois' }, { pronoun: 'tu', form: 'vois' }, { pronoun: 'il/elle', form: 'voit' },
                { pronoun: 'nous', form: 'voyons' }, { pronoun: 'vous', form: 'voyez' }, { pronoun: 'ils/elles', form: 'voient' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai vu' }, { pronoun: 'tu', form: 'as vu' }, { pronoun: 'il/elle', form: 'a vu' },
                { pronoun: 'nous', form: 'avons vu' }, { pronoun: 'vous', form: 'avez vu' }, { pronoun: 'ils/elles', form: 'ont vu' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'voyais' }, { pronoun: 'tu', form: 'voyais' }, { pronoun: 'il/elle', form: 'voyait' },
                { pronoun: 'nous', form: 'voyions' }, { pronoun: 'vous', form: 'voyiez' }, { pronoun: 'ils/elles', form: 'voyaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'vis' }, { pronoun: 'tu', form: 'vis' }, { pronoun: 'il/elle', form: 'vit' },
                { pronoun: 'nous', form: 'vîmes' }, { pronoun: 'vous', form: 'vîtes' }, { pronoun: 'ils/elles', form: 'virent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais vu' }, { pronoun: 'tu', form: 'avais vu' }, { pronoun: 'il/elle', form: 'avait vu' },
                { pronoun: 'nous', form: 'avions vu' }, { pronoun: 'vous', form: 'aviez vu' }, { pronoun: 'ils/elles', form: 'avaient vu' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus vu' }, { pronoun: 'tu', form: 'eus vu' }, { pronoun: 'il/elle', form: 'eut vu' },
                { pronoun: 'nous', form: 'eûmes vu' }, { pronoun: 'vous', form: 'eûtes vu' }, { pronoun: 'ils/elles', form: 'eurent vu' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'verrai' }, { pronoun: 'tu', form: 'verras' }, { pronoun: 'il/elle', form: 'verra' },
                { pronoun: 'nous', form: 'verrons' }, { pronoun: 'vous', form: 'verrez' }, { pronoun: 'ils/elles', form: 'verront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai vu' }, { pronoun: 'tu', form: 'auras vu' }, { pronoun: 'il/elle', form: 'aura vu' },
                { pronoun: 'nous', form: 'aurons vu' }, { pronoun: 'vous', form: 'aurez vu' }, { pronoun: 'ils/elles', form: 'auront vu' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais voir' }, { pronoun: 'tu', form: 'vas voir' }, { pronoun: 'il/elle', form: 'va voir' },
                { pronoun: 'nous', form: 'allons voir' }, { pronoun: 'vous', form: 'allez voir' }, { pronoun: 'ils/elles', form: 'vont voir' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'voie' }, { pronoun: 'que tu', form: 'voies' }, { pronoun: 'qu\'il/elle', form: 'voie' },
                { pronoun: 'que nous', form: 'voyions' }, { pronoun: 'que vous', form: 'voyiez' }, { pronoun: 'qu\'ils/elles', form: 'voient' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'visse' }, { pronoun: 'que tu', form: 'visses' }, { pronoun: 'qu\'il/elle', form: 'vît' },
                { pronoun: 'que nous', form: 'vissions' }, { pronoun: 'que vous', form: 'vissiez' }, { pronoun: 'qu\'ils/elles', form: 'vissent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie vu' }, { pronoun: 'que tu', form: 'aies vu' }, { pronoun: 'qu\'il/elle', form: 'ait vu' },
                { pronoun: 'que nous', form: 'ayons vu' }, { pronoun: 'que vous', form: 'ayez vu' }, { pronoun: 'qu\'ils/elles', form: 'aient vu' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse vu' }, { pronoun: 'que tu', form: 'eusses vu' }, { pronoun: 'qu\'il/elle', form: 'eût vu' },
                { pronoun: 'que nous', form: 'eussions vu' }, { pronoun: 'que vous', form: 'eussiez vu' }, { pronoun: 'qu\'ils/elles', form: 'eussent vu' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'verrais' }, { pronoun: 'tu', form: 'verrais' }, { pronoun: 'il/elle', form: 'verrait' },
                { pronoun: 'nous', form: 'verrions' }, { pronoun: 'vous', form: 'verriez' }, { pronoun: 'ils/elles', form: 'verraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais vu' }, { pronoun: 'tu', form: 'aurais vu' }, { pronoun: 'il/elle', form: 'aurait vu' },
                { pronoun: 'nous', form: 'aurions vu' }, { pronoun: 'vous', form: 'auriez vu' }, { pronoun: 'ils/elles', form: 'auraient vu' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse vu' }, { pronoun: 'tu', form: 'eusses vu' }, { pronoun: 'il/elle', form: 'eût vu' },
                { pronoun: 'nous', form: 'eussions vu' }, { pronoun: 'vous', form: 'eussiez vu' }, { pronoun: 'ils/elles', form: 'eussent vu' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'vois' },
                { pronoun: '(nous)', form: 'voyons' },
                { pronoun: '(vous)', form: 'voyez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'voyant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'vu' },
                { pronoun: 'Fem. Sing.', form: 'vue' },
                { pronoun: 'Masc. Plur.', form: 'vus' },
                { pronoun: 'Fem. Plur.', form: 'vues' }
            ]
        }
    }
};
