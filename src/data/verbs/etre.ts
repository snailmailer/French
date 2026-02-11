import type { VerbDefinition } from '../types';

export const etre: VerbDefinition = {
    infinitive: 'être',
    translation: 'to be',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Auxiliary verb.', 'Very irregular.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'suis' }, { pronoun: 'tu', form: 'es' }, { pronoun: 'il/elle', form: 'est' },
                { pronoun: 'nous', form: 'sommes' }, { pronoun: 'vous', form: 'êtes' }, { pronoun: 'ils/elles', form: 'sont' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai été' }, { pronoun: 'tu', form: 'as été' }, { pronoun: 'il/elle', form: 'a été' },
                { pronoun: 'nous', form: 'avons été' }, { pronoun: 'vous', form: 'avez été' }, { pronoun: 'ils/elles', form: 'ont été' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'étais' }, { pronoun: 'tu', form: 'étais' }, { pronoun: 'il/elle', form: 'était' },
                { pronoun: 'nous', form: 'étions' }, { pronoun: 'vous', form: 'étiez' }, { pronoun: 'ils/elles', form: 'étaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'fus' }, { pronoun: 'tu', form: 'fus' }, { pronoun: 'il/elle', form: 'fut' },
                { pronoun: 'nous', form: 'fûmes' }, { pronoun: 'vous', form: 'fûtes' }, { pronoun: 'ils/elles', form: 'furent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais été' }, { pronoun: 'tu', form: 'avais été' }, { pronoun: 'il/elle', form: 'avait été' },
                { pronoun: 'nous', form: 'avions été' }, { pronoun: 'vous', form: 'aviez été' }, { pronoun: 'ils/elles', form: 'avaient été' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus été' }, { pronoun: 'tu', form: 'eus été' }, { pronoun: 'il/elle', form: 'eut été' },
                { pronoun: 'nous', form: 'eûmes été' }, { pronoun: 'vous', form: 'eûtes été' }, { pronoun: 'ils/elles', form: 'eurent été' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'serai' }, { pronoun: 'tu', form: 'seras' }, { pronoun: 'il/elle', form: 'sera' },
                { pronoun: 'nous', form: 'serons' }, { pronoun: 'vous', form: 'serez' }, { pronoun: 'ils/elles', form: 'seront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai été' }, { pronoun: 'tu', form: 'auras été' }, { pronoun: 'il/elle', form: 'aura été' },
                { pronoun: 'nous', form: 'aurons été' }, { pronoun: 'vous', form: 'aurez été' }, { pronoun: 'ils/elles', form: 'auront été' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais être' }, { pronoun: 'tu', form: 'vas être' }, { pronoun: 'il/elle', form: 'va être' },
                { pronoun: 'nous', form: 'allons être' }, { pronoun: 'vous', form: 'allez être' }, { pronoun: 'ils/elles', form: 'vont être' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'sois' }, { pronoun: 'que tu', form: 'sois' }, { pronoun: 'qu\'il/elle', form: 'soit' },
                { pronoun: 'que nous', form: 'soyons' }, { pronoun: 'que vous', form: 'soyez' }, { pronoun: 'qu\'ils/elles', form: 'soient' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'fusse' }, { pronoun: 'que tu', form: 'fusses' }, { pronoun: 'qu\'il/elle', form: 'fût' },
                { pronoun: 'que nous', form: 'fussions' }, { pronoun: 'que vous', form: 'fussiez' }, { pronoun: 'qu\'ils/elles', form: 'fussent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie été' }, { pronoun: 'que tu', form: 'aies été' }, { pronoun: 'qu\'il/elle', form: 'ait été' },
                { pronoun: 'que nous', form: 'ayons été' }, { pronoun: 'que vous', form: 'ayez été' }, { pronoun: 'qu\'ils/elles', form: 'aient été' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse été' }, { pronoun: 'que tu', form: 'eusses été' }, { pronoun: 'qu\'il/elle', form: 'eût été' },
                { pronoun: 'que nous', form: 'eussions été' }, { pronoun: 'que vous', form: 'eussiez été' }, { pronoun: 'qu\'ils/elles', form: 'eussent été' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'serais' }, { pronoun: 'tu', form: 'serais' }, { pronoun: 'il/elle', form: 'serait' },
                { pronoun: 'nous', form: 'serions' }, { pronoun: 'vous', form: 'seriez' }, { pronoun: 'ils/elles', form: 'seraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais été' }, { pronoun: 'tu', form: 'aurais été' }, { pronoun: 'il/elle', form: 'aurait été' },
                { pronoun: 'nous', form: 'aurions été' }, { pronoun: 'vous', form: 'auriez été' }, { pronoun: 'ils/elles', form: 'auraient été' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse été' }, { pronoun: 'tu', form: 'eusses été' }, { pronoun: 'il/elle', form: 'eût été' },
                { pronoun: 'nous', form: 'eussions été' }, { pronoun: 'vous', form: 'eussiez été' }, { pronoun: 'ils/elles', form: 'eussent été' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'sois' },
                { pronoun: '(nous)', form: 'soyons' },
                { pronoun: '(vous)', form: 'soyez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'étant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'été' },
                { pronoun: 'Fem. Sing.', form: 'été' },
                { pronoun: 'Masc. Plur.', form: 'été' }, // Invariable
                { pronoun: 'Fem. Plur.', form: 'été' }
            ]
        }
    }
};
