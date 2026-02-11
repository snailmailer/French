import type { VerbDefinition } from '../types';

export const venir: VerbDefinition = {
    infinitive: 'venir',
    translation: 'to come',
    group: 3,
    auxiliary: 'être',
    rules: ['Irregular.', 'Takes "être".', 'Future stem: viendr-'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'viens' }, { pronoun: 'tu', form: 'viens' }, { pronoun: 'il/elle', form: 'vient' },
                { pronoun: 'nous', form: 'venons' }, { pronoun: 'vous', form: 'venez' }, { pronoun: 'ils/elles', form: 'viennent' }
            ],
            'Passé Composé': [
                { pronoun: 'je', form: 'suis venu(e)' }, { pronoun: 'tu', form: 'es venu(e)' }, { pronoun: 'il/elle', form: 'est venu(e)' },
                { pronoun: 'nous', form: 'sommes venus(es)' }, { pronoun: 'vous', form: 'êtes venus(es)' }, { pronoun: 'ils/elles', form: 'sont venus(es)' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'venais' }, { pronoun: 'tu', form: 'venais' }, { pronoun: 'il/elle', form: 'venait' },
                { pronoun: 'nous', form: 'venions' }, { pronoun: 'vous', form: 'veniez' }, { pronoun: 'ils/elles', form: 'venaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'vins' }, { pronoun: 'tu', form: 'vins' }, { pronoun: 'il/elle', form: 'vint' },
                { pronoun: 'nous', form: 'vînmes' }, { pronoun: 'vous', form: 'vîntes' }, { pronoun: 'ils/elles', form: 'vinrent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'étais venu(e)' }, { pronoun: 'tu', form: 'étais venu(e)' }, { pronoun: 'il/elle', form: 'était venu(e)' },
                { pronoun: 'nous', form: 'étions venus(es)' }, { pronoun: 'vous', form: 'étiez venus(es)' }, { pronoun: 'ils/elles', form: 'étaient venus(es)' }
            ],
            'Passé Antérieur': [
                { pronoun: 'je', form: 'fus venu(e)' }, { pronoun: 'tu', form: 'fus venu(e)' }, { pronoun: 'il/elle', form: 'fut venu(e)' },
                { pronoun: 'nous', form: 'fûmes venus(es)' }, { pronoun: 'vous', form: 'fûtes venus(es)' }, { pronoun: 'ils/elles', form: 'furent venus(es)' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'viendrai' }, { pronoun: 'tu', form: 'viendras' }, { pronoun: 'il/elle', form: 'viendra' },
                { pronoun: 'nous', form: 'viendrons' }, { pronoun: 'vous', form: 'viendrez' }, { pronoun: 'ils/elles', form: 'viendront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'je', form: 'serai venu(e)' }, { pronoun: 'tu', form: 'seras venu(e)' }, { pronoun: 'il/elle', form: 'sera venu(e)' },
                { pronoun: 'nous', form: 'serons venus(es)' }, { pronoun: 'vous', form: 'serez venus(es)' }, { pronoun: 'ils/elles', form: 'seront venus(es)' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais venir' }, { pronoun: 'tu', form: 'vas venir' }, { pronoun: 'il/elle', form: 'va venir' },
                { pronoun: 'nous', form: 'allons venir' }, { pronoun: 'vous', form: 'allez venir' }, { pronoun: 'ils/elles', form: 'vont venir' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'vienne' }, { pronoun: 'que tu', form: 'viennes' }, { pronoun: 'qu\'il/elle', form: 'vienne' },
                { pronoun: 'que nous', form: 'venions' }, { pronoun: 'que vous', form: 'veniez' }, { pronoun: 'qu\'ils/elles', form: 'viennent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'vinsse' }, { pronoun: 'que tu', form: 'vinsses' }, { pronoun: 'qu\'il/elle', form: 'vint' },
                { pronoun: 'que nous', form: 'vinssions' }, { pronoun: 'que vous', form: 'vinssiez' }, { pronoun: 'qu\'ils/elles', form: 'vinssent' }
            ],
            'Passé': [
                { pronoun: 'que je', form: 'sois venu(e)' }, { pronoun: 'que tu', form: 'sois venu(e)' }, { pronoun: 'qu\'il/elle', form: 'soit venu(e)' },
                { pronoun: 'que nous', form: 'soyons venus(es)' }, { pronoun: 'que vous', form: 'soyez venus(es)' }, { pronoun: 'qu\'ils/elles', form: 'soient venus(es)' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que je', form: 'fusse venu(e)' }, { pronoun: 'que tu', form: 'fusses venu(e)' }, { pronoun: 'qu\'il/elle', form: 'fût venu(e)' },
                { pronoun: 'que nous', form: 'fussions venus(es)' }, { pronoun: 'que vous', form: 'fussiez venus(es)' }, { pronoun: 'qu\'ils/elles', form: 'fussent venus(es)' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'viendrais' }, { pronoun: 'tu', form: 'viendrais' }, { pronoun: 'il/elle', form: 'viendrait' },
                { pronoun: 'nous', form: 'viendrions' }, { pronoun: 'vous', form: 'viendriez' }, { pronoun: 'ils/elles', form: 'viendraient' }
            ],
            'Passé': [
                { pronoun: 'je', form: 'serais venu(e)' }, { pronoun: 'tu', form: 'serais venu(e)' }, { pronoun: 'il/elle', form: 'serait venu(e)' },
                { pronoun: 'nous', form: 'serions venus(es)' }, { pronoun: 'vous', form: 'seriez venus(es)' }, { pronoun: 'ils/elles', form: 'seraient venus(es)' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'je', form: 'fusse venu(e)' }, { pronoun: 'tu', form: 'fusses venu(e)' }, { pronoun: 'il/elle', form: 'fût venu(e)' },
                { pronoun: 'nous', form: 'fussions venus(es)' }, { pronoun: 'vous', form: 'fussiez venus(es)' }, { pronoun: 'ils/elles', form: 'fussent venus(es)' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'viens' },
                { pronoun: '(nous)', form: 'venons' },
                { pronoun: '(vous)', form: 'venez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'venant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'venu' },
                { pronoun: 'Fem. Sing.', form: 'venue' },
                { pronoun: 'Masc. Plur.', form: 'venus' },
                { pronoun: 'Fem. Plur.', form: 'venues' }
            ]
        }
    }
};
