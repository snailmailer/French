import type { VerbDefinition } from '../types';

export const aller: VerbDefinition = {
    infinitive: 'aller',
    translation: 'to go',
    group: 3,
    auxiliary: 'etre',
    rules: ['Irregular conjugation.', 'Uses être as auxiliary.'],
    examples: [
        { sentence: "Je vais au cinéma.", translation: "I am going to the cinema." },
        { sentence: "Comment allez-vous ?", translation: "How are you?" }
    ],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'vais' }, { pronoun: 'tu', form: 'vas' }, { pronoun: 'il/elle', form: 'va' },
                { pronoun: 'nous', form: 'allons' }, { pronoun: 'vous', form: 'allez' }, { pronoun: 'ils/elles', form: 'vont' }
            ],
            'Passé Composé': [
                { pronoun: 'je', form: 'suis allé(e)' }, { pronoun: 'tu', form: 'es allé(e)' }, { pronoun: 'il/elle', form: 'est allé(e)' },
                { pronoun: 'nous', form: 'sommes allés(es)' }, { pronoun: 'vous', form: 'êtes allés(es)' }, { pronoun: 'ils/elles', form: 'sont allés(es)' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'allais' }, { pronoun: 'tu', form: 'allais' }, { pronoun: 'il/elle', form: 'allait' },
                { pronoun: 'nous', form: 'allions' }, { pronoun: 'vous', form: 'alliez' }, { pronoun: 'ils/elles', form: 'allaient' }
            ],
            'Passé Simple': [
                { pronoun: 'j\'', form: 'allai' }, { pronoun: 'tu', form: 'allas' }, { pronoun: 'il/elle', form: 'alla' },
                { pronoun: 'nous', form: 'allâmes' }, { pronoun: 'vous', form: 'allâtes' }, { pronoun: 'ils/elles', form: 'allèrent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'étais allé(e)' }, { pronoun: 'tu', form: 'étais allé(e)' }, { pronoun: 'il/elle', form: 'était allé(e)' },
                { pronoun: 'nous', form: 'étions allés(es)' }, { pronoun: 'vous', form: 'étiez allés(es)' }, { pronoun: 'ils/elles', form: 'étaient allés(es)' }
            ],
            'Passé Antérieur': [
                { pronoun: 'je', form: 'fus allé(e)' }, { pronoun: 'tu', form: 'fus allé(e)' }, { pronoun: 'il/elle', form: 'fut allé(e)' },
                { pronoun: 'nous', form: 'fûmes allés(es)' }, { pronoun: 'vous', form: 'fûtes allés(es)' }, { pronoun: 'ils/elles', form: 'furent allés(es)' }
            ],
            'Futur Simple': [
                { pronoun: 'j\'', form: 'irai' }, { pronoun: 'tu', form: 'iras' }, { pronoun: 'il/elle', form: 'ira' },
                { pronoun: 'nous', form: 'irons' }, { pronoun: 'vous', form: 'irez' }, { pronoun: 'ils/elles', form: 'iront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'je', form: 'serai allé(e)' }, { pronoun: 'tu', form: 'seras allé(e)' }, { pronoun: 'il/elle', form: 'sera allé(e)' },
                { pronoun: 'nous', form: 'serons allés(es)' }, { pronoun: 'vous', form: 'serez allés(es)' }, { pronoun: 'ils/elles', form: 'seront allés(es)' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais aller' }, { pronoun: 'tu', form: 'vas aller' }, { pronoun: 'il/elle', form: 'va aller' },
                { pronoun: 'nous', form: 'allons aller' }, { pronoun: 'vous', form: 'allez aller' }, { pronoun: 'ils/elles', form: 'vont aller' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que j\'', form: 'aille' }, { pronoun: 'que tu', form: 'ailles' }, { pronoun: 'qu\'il/elle', form: 'aille' },
                { pronoun: 'que nous', form: 'allions' }, { pronoun: 'que vous', form: 'alliez' }, { pronoun: 'qu\'ils/elles', form: 'aillent' }
            ],
            'Imparfait': [
                { pronoun: 'que j\'', form: 'allasse' }, { pronoun: 'que tu', form: 'allasses' }, { pronoun: 'qu\'il/elle', form: 'allât' },
                { pronoun: 'que nous', form: 'allassions' }, { pronoun: 'que vous', form: 'allassiez' }, { pronoun: 'qu\'ils/elles', form: 'allassent' }
            ],
            'Passé': [
                { pronoun: 'que je', form: 'sois allé(e)' }, { pronoun: 'que tu', form: 'sois allé(e)' }, { pronoun: 'qu\'il/elle', form: 'soit allé(e)' },
                { pronoun: 'que nous', form: 'soyons allés(es)' }, { pronoun: 'que vous', form: 'soyez allés(es)' }, { pronoun: 'qu\'ils/elles', form: 'soient allés(es)' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que je', form: 'fusse allé(e)' }, { pronoun: 'que tu', form: 'fusses allé(e)' }, { pronoun: 'qu\'il/elle', form: 'fût allé(e)' },
                { pronoun: 'que nous', form: 'fussions allés(es)' }, { pronoun: 'que vous', form: 'fussiez allés(es)' }, { pronoun: 'qu\'ils/elles', form: 'fussent allés(es)' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'j\'', form: 'irais' }, { pronoun: 'tu', form: 'irais' }, { pronoun: 'il/elle', form: 'irait' },
                { pronoun: 'nous', form: 'irions' }, { pronoun: 'vous', form: 'iriez' }, { pronoun: 'ils/elles', form: 'iraient' }
            ],
            'Passé': [
                { pronoun: 'je', form: 'serais allé(e)' }, { pronoun: 'tu', form: 'serais allé(e)' }, { pronoun: 'il/elle', form: 'serait allé(e)' },
                { pronoun: 'nous', form: 'serions allés(es)' }, { pronoun: 'vous', form: 'seriez allés(es)' }, { pronoun: 'ils/elles', form: 'seraient allés(es)' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'je', form: 'fusse allé(e)' }, { pronoun: 'tu', form: 'fusses allé(e)' }, { pronoun: 'il/elle', form: 'fût allé(e)' },
                { pronoun: 'nous', form: 'fussions allés(es)' }, { pronoun: 'vous', form: 'fussiez allés(es)' }, { pronoun: 'ils/elles', form: 'fussent allés(es)' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'va' },
                { pronoun: '(nous)', form: 'allons' },
                { pronoun: '(vous)', form: 'allez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'allant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'allé' },
                { pronoun: 'Fem. Sing.', form: 'allée' },
                { pronoun: 'Masc. Plur.', form: 'allés' },
                { pronoun: 'Fem. Plur.', form: 'allées' }
            ]
        }
    }
};
