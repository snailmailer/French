import type { VerbDefinition } from '../types';

export const aimer: VerbDefinition = {
    infinitive: 'aimer',
    translation: 'to like/love',
    group: 1,
    auxiliary: 'avoir',
    rules: ['Regular -er verb.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'j\'', form: 'aime' }, { pronoun: 'tu', form: 'aimes' }, { pronoun: 'il/elle', form: 'aime' },
                { pronoun: 'nous', form: 'aimons' }, { pronoun: 'vous', form: 'aimez' }, { pronoun: 'ils/elles', form: 'aiment' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai aimé' }, { pronoun: 'tu', form: 'as aimé' }, { pronoun: 'il/elle', form: 'a aimé' },
                { pronoun: 'nous', form: 'avons aimé' }, { pronoun: 'vous', form: 'avez aimé' }, { pronoun: 'ils/elles', form: 'ont aimé' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'aimais' }, { pronoun: 'tu', form: 'aimais' }, { pronoun: 'il/elle', form: 'aimait' },
                { pronoun: 'nous', form: 'aimions' }, { pronoun: 'vous', form: 'aimiez' }, { pronoun: 'ils/elles', form: 'aimaient' }
            ],
            'Passé Simple': [
                { pronoun: 'j\'', form: 'aimai' }, { pronoun: 'tu', form: 'aimas' }, { pronoun: 'il/elle', form: 'aima' },
                { pronoun: 'nous', form: 'aimâmes' }, { pronoun: 'vous', form: 'aimâtes' }, { pronoun: 'ils/elles', form: 'aimèrent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais aimé' }, { pronoun: 'tu', form: 'avais aimé' }, { pronoun: 'il/elle', form: 'avait aimé' },
                { pronoun: 'nous', form: 'avions aimé' }, { pronoun: 'vous', form: 'aviez aimé' }, { pronoun: 'ils/elles', form: 'avaient aimé' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus aimé' }, { pronoun: 'tu', form: 'eus aimé' }, { pronoun: 'il/elle', form: 'eut aimé' },
                { pronoun: 'nous', form: 'eûmes aimé' }, { pronoun: 'vous', form: 'eûtes aimé' }, { pronoun: 'ils/elles', form: 'eurent aimé' }
            ],
            'Futur Simple': [
                { pronoun: 'j\'', form: 'aimerai' }, { pronoun: 'tu', form: 'aimeras' }, { pronoun: 'il/elle', form: 'aimera' },
                { pronoun: 'nous', form: 'aimerons' }, { pronoun: 'vous', form: 'aimerez' }, { pronoun: 'ils/elles', form: 'aimeront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai aimé' }, { pronoun: 'tu', form: 'auras aimé' }, { pronoun: 'il/elle', form: 'aura aimé' },
                { pronoun: 'nous', form: 'aurons aimé' }, { pronoun: 'vous', form: 'aurez aimé' }, { pronoun: 'ils/elles', form: 'auront aimé' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais aimer' }, { pronoun: 'tu', form: 'vas aimer' }, { pronoun: 'il/elle', form: 'va aimer' },
                { pronoun: 'nous', form: 'allons aimer' }, { pronoun: 'vous', form: 'allez aimer' }, { pronoun: 'ils/elles', form: 'vont aimer' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que j\'', form: 'aime' }, { pronoun: 'que tu', form: 'aimes' }, { pronoun: 'qu\'il/elle', form: 'aime' },
                { pronoun: 'que nous', form: 'aimions' }, { pronoun: 'que vous', form: 'aimiez' }, { pronoun: 'qu\'ils/elles', form: 'aiment' }
            ],
            'Imparfait': [
                { pronoun: 'que j\'', form: 'aimasse' }, { pronoun: 'que tu', form: 'aimasses' }, { pronoun: 'qu\'il/elle', form: 'aimât' },
                { pronoun: 'que nous', form: 'aimassions' }, { pronoun: 'que vous', form: 'aimassiez' }, { pronoun: 'qu\'ils/elles', form: 'aimassent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie aimé' }, { pronoun: 'que tu', form: 'aies aimé' }, { pronoun: 'qu\'il/elle', form: 'ait aimé' },
                { pronoun: 'que nous', form: 'ayons aimé' }, { pronoun: 'que vous', form: 'ayez aimé' }, { pronoun: 'qu\'ils/elles', form: 'aient aimé' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse aimé' }, { pronoun: 'que tu', form: 'eusses aimé' }, { pronoun: 'qu\'il/elle', form: 'eût aimé' },
                { pronoun: 'que nous', form: 'eussions aimé' }, { pronoun: 'que vous', form: 'eussiez aimé' }, { pronoun: 'qu\'ils/elles', form: 'eussent aimé' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'j\'', form: 'aimerais' }, { pronoun: 'tu', form: 'aimerais' }, { pronoun: 'il/elle', form: 'aimerait' },
                { pronoun: 'nous', form: 'aimerions' }, { pronoun: 'vous', form: 'aimeriez' }, { pronoun: 'ils/elles', form: 'aimeraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais aimé' }, { pronoun: 'tu', form: 'aurais aimé' }, { pronoun: 'il/elle', form: 'aurait aimé' },
                { pronoun: 'nous', form: 'aurions aimé' }, { pronoun: 'vous', form: 'auriez aimé' }, { pronoun: 'ils/elles', form: 'auraient aimé' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse aimé' }, { pronoun: 'tu', form: 'eusses aimé' }, { pronoun: 'il/elle', form: 'eût aimé' },
                { pronoun: 'nous', form: 'eussions aimé' }, { pronoun: 'vous', form: 'eussiez aimé' }, { pronoun: 'ils/elles', form: 'eussent aimé' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'aime' },
                { pronoun: '(nous)', form: 'aimons' },
                { pronoun: '(vous)', form: 'aimez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'aimant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'aimé' },
                { pronoun: 'Fem. Sing.', form: 'aimée' },
                { pronoun: 'Masc. Plur.', form: 'aimés' },
                { pronoun: 'Fem. Plur.', form: 'aimées' }
            ]
        }
    }
};
