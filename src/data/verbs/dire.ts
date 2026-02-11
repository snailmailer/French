import type { VerbDefinition } from '../types';

export const dire: VerbDefinition = {
    infinitive: 'dire',
    translation: 'to say',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Irregular.', 'Note "vous dites" in present.', 'Participle: dit.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'dis' }, { pronoun: 'tu', form: 'dis' }, { pronoun: 'il/elle', form: 'dit' },
                { pronoun: 'nous', form: 'disons' }, { pronoun: 'vous', form: 'dites' }, { pronoun: 'ils/elles', form: 'disent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai dit' }, { pronoun: 'tu', form: 'as dit' }, { pronoun: 'il/elle', form: 'a dit' },
                { pronoun: 'nous', form: 'avons dit' }, { pronoun: 'vous', form: 'avez dit' }, { pronoun: 'ils/elles', form: 'ont dit' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'disais' }, { pronoun: 'tu', form: 'disais' }, { pronoun: 'il/elle', form: 'disait' },
                { pronoun: 'nous', form: 'disions' }, { pronoun: 'vous', form: 'disiez' }, { pronoun: 'ils/elles', form: 'disaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'dis' }, { pronoun: 'tu', form: 'dis' }, { pronoun: 'il/elle', form: 'dit' },
                { pronoun: 'nous', form: 'dîmes' }, { pronoun: 'vous', form: 'dîtes' }, { pronoun: 'ils/elles', form: 'dirent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais dit' }, { pronoun: 'tu', form: 'avais dit' }, { pronoun: 'il/elle', form: 'avait dit' },
                { pronoun: 'nous', form: 'avions dit' }, { pronoun: 'vous', form: 'aviez dit' }, { pronoun: 'ils/elles', form: 'avaient dit' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus dit' }, { pronoun: 'tu', form: 'eus dit' }, { pronoun: 'il/elle', form: 'eut dit' },
                { pronoun: 'nous', form: 'eûmes dit' }, { pronoun: 'vous', form: 'eûtes dit' }, { pronoun: 'ils/elles', form: 'eurent dit' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'dirai' }, { pronoun: 'tu', form: 'diras' }, { pronoun: 'il/elle', form: 'dira' },
                { pronoun: 'nous', form: 'dirons' }, { pronoun: 'vous', form: 'direz' }, { pronoun: 'ils/elles', form: 'diront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai dit' }, { pronoun: 'tu', form: 'auras dit' }, { pronoun: 'il/elle', form: 'aura dit' },
                { pronoun: 'nous', form: 'aurons dit' }, { pronoun: 'vous', form: 'aurez dit' }, { pronoun: 'ils/elles', form: 'auront dit' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais dire' }, { pronoun: 'tu', form: 'vas dire' }, { pronoun: 'il/elle', form: 'va dire' },
                { pronoun: 'nous', form: 'allons dire' }, { pronoun: 'vous', form: 'allez dire' }, { pronoun: 'ils/elles', form: 'vont dire' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'dise' }, { pronoun: 'que tu', form: 'dises' }, { pronoun: 'qu\'il/elle', form: 'dise' },
                { pronoun: 'que nous', form: 'disions' }, { pronoun: 'que vous', form: 'disiez' }, { pronoun: 'qu\'ils/elles', form: 'disent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'disse' }, { pronoun: 'que tu', form: 'disses' }, { pronoun: 'qu\'il/elle', form: 'dît' },
                { pronoun: 'que nous', form: 'dissions' }, { pronoun: 'que vous', form: 'dissiez' }, { pronoun: 'qu\'ils/elles', form: 'dissent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie dit' }, { pronoun: 'que tu', form: 'aies dit' }, { pronoun: 'qu\'il/elle', form: 'ait dit' },
                { pronoun: 'que nous', form: 'ayons dit' }, { pronoun: 'que vous', form: 'ayez dit' }, { pronoun: 'qu\'ils/elles', form: 'aient dit' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse dit' }, { pronoun: 'que tu', form: 'eusses dit' }, { pronoun: 'qu\'il/elle', form: 'eût dit' },
                { pronoun: 'que nous', form: 'eussions dit' }, { pronoun: 'que vous', form: 'eussiez dit' }, { pronoun: 'qu\'ils/elles', form: 'eussent dit' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'dirais' }, { pronoun: 'tu', form: 'dirais' }, { pronoun: 'il/elle', form: 'dirait' },
                { pronoun: 'nous', form: 'dirions' }, { pronoun: 'vous', form: 'diriez' }, { pronoun: 'ils/elles', form: 'diraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais dit' }, { pronoun: 'tu', form: 'aurais dit' }, { pronoun: 'il/elle', form: 'aurait dit' },
                { pronoun: 'nous', form: 'aurions dit' }, { pronoun: 'vous', form: 'auriez dit' }, { pronoun: 'ils/elles', form: 'auraient dit' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse dit' }, { pronoun: 'tu', form: 'eusses dit' }, { pronoun: 'il/elle', form: 'eût dit' },
                { pronoun: 'nous', form: 'eussions dit' }, { pronoun: 'vous', form: 'eussiez dit' }, { pronoun: 'ils/elles', form: 'eussent dit' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'dis' },
                { pronoun: '(nous)', form: 'disons' },
                { pronoun: '(vous)', form: 'dites' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'disant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'dit' },
                { pronoun: 'Fem. Sing.', form: 'dite' },
                { pronoun: 'Masc. Plur.', form: 'dits' },
                { pronoun: 'Fem. Plur.', form: 'dites' }
            ]
        }
    }
};
