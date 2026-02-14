import { createRegularVerb } from '../verbUtils';
import { applyExamplesToVerb } from '../../utils/exampleGenerator';
import { aller as allerBase } from './aller';
import { asseoir as asseoirBase } from './asseoir';
import { avoir as avoirBase } from './avoir';
import { devoir as devoirBase } from './devoir';
import { etre as etreBase } from './etre';
import { faire as faireBase } from './faire';
import { pouvoir as pouvoirBase } from './pouvoir';
import { souvenir as souvenirBase } from './souvenir';
import { vouloir as vouloirBase } from './vouloir';

// Helper to Create Regular Verb with Auto-Examples
const crv = (...args: Parameters<typeof createRegularVerb>) => {
    const verb = createRegularVerb(...args);
    return applyExamplesToVerb(verb);
};

// Wrap Irregular Verbs & Apply Categories where obvious
export const aller = applyExamplesToVerb({ ...allerBase, category: 'General' });
export const asseoir = applyExamplesToVerb({ ...asseoirBase, category: 'General' });
export const avoir = applyExamplesToVerb({ ...avoirBase, category: 'General' });
export const devoir = applyExamplesToVerb({ ...devoirBase, category: 'General' });
export const etre = applyExamplesToVerb({ ...etreBase, category: 'General' });
export const faire = applyExamplesToVerb({ ...faireBase, category: 'General' });
export const pouvoir = applyExamplesToVerb({ ...pouvoirBase, category: 'General' });
export const se_souvenir = applyExamplesToVerb({ ...souvenirBase, category: 'Routine' });
export const vouloir = applyExamplesToVerb({ ...vouloirBase, category: 'General' });

// --- Education / Apprendre ---
export const etudier = crv('étudier', 'ER', 'avoir', 'to study', false, [], [], 'Education');
const apprendreBase = crv('apprendre', 'RE', 'avoir', 'to learn', false, [], [], 'Education');
export const apprendre = {
    ...apprendreBase,
    conjugations: {
        ...apprendreBase.conjugations,
        Indicatif: {
            ...apprendreBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'apprends' },
                { pronoun: 'tu', form: 'apprends' },
                { pronoun: 'il/elle', form: 'apprend' },
                { pronoun: 'nous', form: 'apprenons' },
                { pronoun: 'vous', form: 'apprenez' },
                { pronoun: 'ils/elles', form: 'apprennent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'apprenais' },
                { pronoun: 'tu', form: 'apprenais' },
                { pronoun: 'il/elle', form: 'apprenait' },
                { pronoun: 'nous', form: 'apprenions' },
                { pronoun: 'vous', form: 'appreniez' },
                { pronoun: 'ils/elles', form: 'apprenaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'apprendrai' },
                { pronoun: 'tu', form: 'apprendras' },
                { pronoun: 'il/elle', form: 'apprendra' },
                { pronoun: 'nous', form: 'apprendrons' },
                { pronoun: 'vous', form: 'apprendrez' },
                { pronoun: 'ils/elles', form: 'apprendront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai appris' },
                { pronoun: 'tu', form: 'as appris' },
                { pronoun: 'il/elle', form: 'a appris' },
                { pronoun: 'nous', form: 'avons appris' },
                { pronoun: 'vous', form: 'avez appris' },
                { pronoun: 'ils/elles', form: 'ont appris' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais appris' },
                { pronoun: 'tu', form: 'avais appris' },
                { pronoun: 'il/elle', form: 'avait appris' },
                { pronoun: 'nous', form: 'avions appris' },
                { pronoun: 'vous', form: 'aviez appris' },
                { pronoun: 'ils/elles', form: 'avaient appris' }
            ]
        },
        Subjonctif: {
            ...apprendreBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: 'apprenne' },
                { pronoun: 'que tu', form: 'apprennes' },
                { pronoun: 'qu\'il/elle', form: 'apprenne' },
                { pronoun: 'que nous', form: 'apprenions' },
                { pronoun: 'que vous', form: 'appreniez' },
                { pronoun: 'qu\'ils/elles', form: 'apprennent' }
            ]
        },
        Participe: {
            ...apprendreBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'apprenant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'appris' },
                { pronoun: 'Fem. Sing.', form: 'apprise' },
                { pronoun: 'Masc. Plur.', form: 'appris' },
                { pronoun: 'Fem. Plur.', form: 'apprises' }
            ]
        },
        Impératif: {
            ...apprendreBase.conjugations.Impératif,
            'Présent': [
                { pronoun: '(Tu)', form: 'apprends' },
                { pronoun: '(Nous)', form: 'apprenons' },
                { pronoun: '(Vous)', form: 'apprenez' }
            ]
        }
    }
};
export const reviser = crv('réviser', 'ER', 'avoir', 'to review/revise', false, [], [], 'Education');
const lireBase = crv('lire', 'RE', 'avoir', 'to read', false, [], [], 'Education');
export const lire = {
    ...lireBase,
    conjugations: {
        ...lireBase.conjugations,
        Indicatif: {
            ...lireBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'lis' },
                { pronoun: 'tu', form: 'lis' },
                { pronoun: 'il/elle', form: 'lit' },
                { pronoun: 'nous', form: 'lisons' },
                { pronoun: 'vous', form: 'lisez' },
                { pronoun: 'ils/elles', form: 'lisent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'lisais' },
                { pronoun: 'tu', form: 'lisais' },
                { pronoun: 'il/elle', form: 'lisait' },
                { pronoun: 'nous', form: 'lisions' },
                { pronoun: 'vous', form: 'lisiez' },
                { pronoun: 'ils/elles', form: 'lisaient' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai lu' },
                { pronoun: 'tu', form: 'as lu' },
                { pronoun: 'il/elle', form: 'a lu' },
                { pronoun: 'nous', form: 'avons lu' },
                { pronoun: 'vous', form: 'avez lu' },
                { pronoun: 'ils/elles', form: 'ont lu' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais lu' },
                { pronoun: 'tu', form: 'avais lu' },
                { pronoun: 'il/elle', form: 'avait lu' },
                { pronoun: 'nous', form: 'avions lu' },
                { pronoun: 'vous', form: 'aviez lu' },
                { pronoun: 'ils/elles', form: 'avaient lu' }
            ]
        },
        Participe: {
            ...lireBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'lisant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'lu' },
                { pronoun: 'Fem. Sing.', form: 'lue' },
                { pronoun: 'Masc. Plur.', form: 'lus' },
                { pronoun: 'Fem. Plur.', form: 'lues' }
            ]
        }
    }
};
const ecrireBase = crv('écrire', 'RE', 'avoir', 'to write', false, [], [], 'Education');
export const ecrire = {
    ...ecrireBase,
    conjugations: {
        ...ecrireBase.conjugations,
        Indicatif: {
            ...ecrireBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'j\'', form: 'écris' },
                { pronoun: 'tu', form: 'écris' },
                { pronoun: 'il/elle', form: 'écrit' },
                { pronoun: 'nous', form: 'écrivons' },
                { pronoun: 'vous', form: 'écrivez' },
                { pronoun: 'ils/elles', form: 'écrivent' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'écrivais' },
                { pronoun: 'tu', form: 'écrivais' },
                { pronoun: 'il/elle', form: 'écrivait' },
                { pronoun: 'nous', form: 'écrivions' },
                { pronoun: 'vous', form: 'écriviez' },
                { pronoun: 'ils/elles', form: 'écrivaient' }
            ],
            'Futur Simple': [
                { pronoun: 'j\'', form: 'écrirai' },
                { pronoun: 'tu', form: 'écriras' },
                { pronoun: 'il/elle', form: 'écrira' },
                { pronoun: 'nous', form: 'écrirons' },
                { pronoun: 'vous', form: 'écrirez' },
                { pronoun: 'ils/elles', form: 'écriront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai écrit' },
                { pronoun: 'tu', form: 'as écrit' },
                { pronoun: 'il/elle', form: 'a écrit' },
                { pronoun: 'nous', form: 'avons écrit' },
                { pronoun: 'vous', form: 'avez écrit' },
                { pronoun: 'ils/elles', form: 'ont écrit' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais écrit' },
                { pronoun: 'tu', form: 'avais écrit' },
                { pronoun: 'il/elle', form: 'avait écrit' },
                { pronoun: 'nous', form: 'avions écrit' },
                { pronoun: 'vous', form: 'aviez écrit' },
                { pronoun: 'ils/elles', form: 'avaient écrit' }
            ]
        },
        Conditionnel: {
            ...ecrireBase.conjugations.Conditionnel,
            'Présent': [
                { pronoun: 'j\'', form: 'écrirais' },
                { pronoun: 'tu', form: 'écrirais' },
                { pronoun: 'il/elle', form: 'écrirait' },
                { pronoun: 'nous', form: 'écririons' },
                { pronoun: 'vous', form: 'écririez' },
                { pronoun: 'ils/elles', form: 'écriraient' }
            ]
        },
        Participe: {
            ...ecrireBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'écrivant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'écrit' },
                { pronoun: 'Fem. Sing.', form: 'écrite' },
                { pronoun: 'Masc. Plur.', form: 'écrits' },
                { pronoun: 'Fem. Plur.', form: 'écrites' }
            ]
        }
    }
};
export const souligner = crv('souligner', 'ER', 'avoir', 'to underline', false, [], [], 'Education');
export const surligner = crv('surligner', 'ER', 'avoir', 'to highlight', false, [], [], 'Education');
export const memoriser = crv('mémoriser', 'ER', 'avoir', 'to memorize', false, [], [], 'Education');
export const repeter = crv('répéter', 'ER', 'avoir', 'to repeat', false, [], [], 'Education');

export const expliquer = crv('expliquer', 'ER', 'avoir', 'to explain', false, [], [], 'Education');
export const poser_question = crv('poser une question', 'ER', 'avoir', 'to ask a question', false, [], [], 'Education'); // Special handling for spaces? createRegularVerb handles it? regex matching endings might take last word?
export const repondre = crv('répondre', 'RE', 'avoir', 'to answer', false, [], [], 'Education');
export const reussir = crv('réussir', 'IR_ISS', 'avoir', 'to pass (exam)', false, [], [], 'Education');
export const echouer = crv('échouer', 'ER', 'avoir', 'to fail', false, [], [], 'Education');

// --- Work / Vie Professionnelle ---
export const travailler = crv('travailler', 'ER', 'avoir', 'to work', false, [], [], 'Work');
export const chercher_emploi = crv('chercher un emploi', 'ER', 'avoir', 'to look for a job', false, [], [], 'Work');
export const postuler = crv('postuler', 'ER', 'avoir', 'to apply', false, [], [], 'Work');
export const embaucher = crv('embaucher', 'ER', 'avoir', 'to hire', false, [], [], 'Work');
export const licencier = crv('licencier', 'ER', 'avoir', 'to fire', false, [], [], 'Work');
export const gagner_argent = crv('gagner de l\'argent', 'ER', 'avoir', 'to earn money', false, [], [], 'Work');
export const payer = crv('payer', 'ER', 'avoir', 'to pay', false, [], [], 'Work');
export const diriger = crv('diriger', 'ER', 'avoir', 'to manage/lead', false, [], [], 'Work');
export const organiser = crv('organiser', 'ER', 'avoir', 'to organize', false, [], [], 'Work');
export const planifier = crv('planifier', 'ER', 'avoir', 'to plan', false, [], [], 'Work');
export const participer = crv('participer', 'ER', 'avoir', 'to participate', false, [], [], 'Work');
export const negocier = crv('négocier', 'ER', 'avoir', 'to negotiate', false, [], [], 'Work');
export const signer = crv('signer', 'ER', 'avoir', 'to sign', false, [], [], 'Work');
export const envoyer_email = crv('envoyer un e-mail', 'ER', 'avoir', 'to send an email', false, [], [], 'Work');

// --- Hobbies / Loisirs ---
export const jouer = crv('jouer', 'ER', 'avoir', 'to play', false, [], [], 'Hobbies');
export const dessiner = crv('dessiner', 'ER', 'avoir', 'to draw', false, [], [], 'Hobbies');

export const chanter = crv('chanter', 'ER', 'avoir', 'to sing', false, [], [], 'Hobbies');
export const danser = crv('danser', 'ER', 'avoir', 'to dance', false, [], [], 'Hobbies');
export const regarder_film = crv('regarder un film', 'ER', 'avoir', 'to watch a movie', false, [], [], 'Hobbies');
export const ecouter_musique = crv('écouter de la musique', 'ER', 'avoir', 'to listen to music', false, [], [], 'Hobbies');
export const cuisiner = crv('cuisiner', 'ER', 'avoir', 'to cook', false, [], [], 'Hobbies');
export const jardiner = crv('jardiner', 'ER', 'avoir', 'to garden', false, [], [], 'Hobbies');
export const bricoler = crv('bricoler', 'ER', 'avoir', 'to do DIY', false, [], [], 'Hobbies');
export const voyager = crv('voyager', 'ER', 'avoir', 'to travel', false, [], [], 'Hobbies');
export const se_detendre = crv('se détendre', 'RE', 'avoir', 'to relax', true, [], [], 'Hobbies');
export const samuser = crv("s'amuser", 'ER', 'avoir', 'to have fun', true, [], [], 'Hobbies');

// --- Food / Manger ---
export const manger = crv('manger', 'ER', 'avoir', 'to eat', false, [], [], 'Food');
const boireBase = crv('boire', 'RE', 'avoir', 'to drink', false, [], [], 'Food');
export const boire = {
    ...boireBase,
    conjugations: {
        ...boireBase.conjugations,
        Indicatif: {
            ...boireBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'bois' },
                { pronoun: 'tu', form: 'bois' },
                { pronoun: 'il/elle', form: 'boit' },
                { pronoun: 'nous', form: 'buvons' },
                { pronoun: 'vous', form: 'buvez' },
                { pronoun: 'ils/elles', form: 'boivent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'buvais' },
                { pronoun: 'tu', form: 'buvais' },
                { pronoun: 'il/elle', form: 'buvait' },
                { pronoun: 'nous', form: 'buvions' },
                { pronoun: 'vous', form: 'buviez' },
                { pronoun: 'ils/elles', form: 'buvaient' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai bu' },
                { pronoun: 'tu', form: 'as bu' },
                { pronoun: 'il/elle', form: 'a bu' },
                { pronoun: 'nous', form: 'avons bu' },
                { pronoun: 'vous', form: 'avez bu' },
                { pronoun: 'ils/elles', form: 'ont bu' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais bu' },
                { pronoun: 'tu', form: 'avais bu' },
                { pronoun: 'il/elle', form: 'avait bu' },
                { pronoun: 'nous', form: 'avions bu' },
                { pronoun: 'vous', form: 'aviez bu' },
                { pronoun: 'ils/elles', form: 'avaient bu' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'boirai' },
                { pronoun: 'tu', form: 'boiras' },
                { pronoun: 'il/elle', form: 'boira' },
                { pronoun: 'nous', form: 'boirons' },
                { pronoun: 'vous', form: 'boirez' },
                { pronoun: 'ils/elles', form: 'boiront' }
            ]
        },
        Subjonctif: {
            ...boireBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: 'boive' },
                { pronoun: 'que tu', form: 'boives' },
                { pronoun: 'qu\'il/elle', form: 'boive' },
                { pronoun: 'que nous', form: 'buvions' },
                { pronoun: 'que vous', form: 'buviez' },
                { pronoun: 'qu\'ils/elles', form: 'boivent' }
            ]
        },
        Participe: {
            ...boireBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'buvant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'bu' },
                { pronoun: 'Fem. Sing.', form: 'bue' },
                { pronoun: 'Masc. Plur.', form: 'bus' },
                { pronoun: 'Fem. Plur.', form: 'bues' }
            ]
        }
    }
};
export const preparer_repas = crv('préparer le repas', 'ER', 'avoir', 'to prepare meal', false, [], [], 'Food');
export const gouter = crv('goûter', 'ER', 'avoir', 'to taste/snack', false, [], [], 'Food');
export const commander = crv('commander', 'ER', 'avoir', 'to order', false, [], [], 'Food');
export const servir = crv('servir', 'IR_DORMIR', 'avoir', 'to serve', false, [], [], 'Food');
export const dejeuner = crv('déjeuner', 'ER', 'avoir', 'to have lunch', false, [], [], 'Food');
export const diner = crv('dîner', 'ER', 'avoir', 'to have dinner', false, [], [], 'Food');
export const grignoter = crv('grignoter', 'ER', 'avoir', 'to snack', false, [], [], 'Food');

// --- Routine / Hygiène ---
export const se_reveiller = crv('se réveiller', 'ER', 'avoir', 'to wake up', true, [], [], 'Routine');
export const se_lever = crv('se lever', 'ER', 'avoir', 'to get up', true, [], [], 'Routine');
export const se_coucher = crv('se coucher', 'ER', 'avoir', 'to go to bed', true, [], [], 'Routine');
export const dormir = crv('dormir', 'IR_DORMIR', 'avoir', 'to sleep', false, [], [], 'Routine');
export const se_doucher = crv('se doucher', 'ER', 'avoir', 'to shower', true, [], [], 'Routine');
export const se_laver = crv('se laver', 'ER', 'avoir', 'to wash oneself', true, [], [], 'Routine');
export const se_brosser_dents = crv('se brosser les dents', 'ER', 'avoir', 'to brush teeth', true, [], [], 'Routine');
export const shabiller = crv("s'habiller", 'ER', 'avoir', 'to get dressed', true, [], [], 'Routine');
export const se_deshabiller = crv('se déshabiller', 'ER', 'avoir', 'to undress', true, [], [], 'Routine');
export const se_maquiller = crv('se maquiller', 'ER', 'avoir', 'to makeup', true, [], [], 'Routine');
export const se_coiffer = crv('se coiffer', 'ER', 'avoir', 'to do hair', true, [], [], 'Routine');
export const se_raser = crv('se raser', 'ER', 'avoir', 'to shave', true, [], [], 'Routine');
export const se_depecher = crv('se dépêcher', 'ER', 'avoir', 'to hurry', true, [], [], 'Routine');
export const se_reposer = crv('se reposer', 'ER', 'avoir', 'to rest', true, [], [], 'Routine');

// --- Housing / Logement ---
const vivreBase = crv('vivre', 'RE', 'avoir', 'to live', false, [], [], 'Housing');
export const vivre = {
    ...vivreBase,
    conjugations: {
        ...vivreBase.conjugations,
        Indicatif: {
            ...vivreBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'vis' },
                { pronoun: 'tu', form: 'vis' },
                { pronoun: 'il/elle', form: 'vit' },
                { pronoun: 'nous', form: 'vivons' },
                { pronoun: 'vous', form: 'vivez' },
                { pronoun: 'ils/elles', form: 'vivent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'vivais' },
                { pronoun: 'tu', form: 'vivais' },
                { pronoun: 'il/elle', form: 'vivait' },
                { pronoun: 'nous', form: 'vivions' },
                { pronoun: 'vous', form: 'viviez' },
                { pronoun: 'ils/elles', form: 'vivaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'vivrai' },
                { pronoun: 'tu', form: 'vivras' },
                { pronoun: 'il/elle', form: 'vivra' },
                { pronoun: 'nous', form: 'vivrons' },
                { pronoun: 'vous', form: 'vivrez' },
                { pronoun: 'ils/elles', form: 'vivront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai vécu' },
                { pronoun: 'tu', form: 'as vécu' },
                { pronoun: 'il/elle', form: 'a vécu' },
                { pronoun: 'nous', form: 'avons vécu' },
                { pronoun: 'vous', form: 'avez vécu' },
                { pronoun: 'ils/elles', form: 'ont vécu' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais vécu' },
                { pronoun: 'tu', form: 'avais vécu' },
                { pronoun: 'il/elle', form: 'avait vécu' },
                { pronoun: 'nous', form: 'avions vécu' },
                { pronoun: 'vous', form: 'aviez vécu' },
                { pronoun: 'ils/elles', form: 'avaient vécu' }
            ]
        },
        Conditionnel: {
            ...vivreBase.conjugations.Conditionnel,
            'Présent': [
                { pronoun: 'je', form: 'vivrais' },
                { pronoun: 'tu', form: 'vivrais' },
                { pronoun: 'il/elle', form: 'vivrait' },
                { pronoun: 'nous', form: 'vivrions' },
                { pronoun: 'vous', form: 'vivriez' },
                { pronoun: 'ils/elles', form: 'vivraient' }
            ]
        },
        Participe: {
            ...vivreBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'vivant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'vécu' },
                { pronoun: 'Fem. Sing.', form: 'vécu' }, // Vivre mostly intransitive or used with avoir (no agreement usually unless direct object precedes, but base form is vécu)
                { pronoun: 'Masc. Plur.', form: 'vécus' },
                { pronoun: 'Fem. Plur.', form: 'vécues' }
            ]
        }
    }
};
export const habiter = crv('habiter', 'ER', 'avoir', 'to reside', false, [], [], 'Housing');
export const demenager = crv('déménager', 'ER', 'avoir', 'to move out', false, [], [], 'Housing');
export const louer = crv('louer', 'ER', 'avoir', 'to rent', false, [], [], 'Housing');
export const acheter = crv('acheter', 'ER', 'avoir', 'to buy', false, [], [], 'Housing');
export const vendre = crv('vendre', 'RE', 'avoir', 'to sell', false, [], [], 'Housing');
export const nettoyer = crv('nettoyer', 'ER', 'avoir', 'to clean', false, [], [], 'Housing');
export const balayer = crv('balayer', 'ER', 'avoir', 'to sweep', false, [], [], 'Housing');
export const passer_aspirateur = crv('passer l\'aspirateur', 'ER', 'avoir', 'to vacuum', false, [], [], 'Housing');
export const ranger = crv('ranger', 'ER', 'avoir', 'to tidy', false, [], [], 'Housing');
export const reparer = crv('réparer', 'ER', 'avoir', 'to repair', false, [], [], 'Housing');
export const arroser = crv('arroser les plantes', 'ER', 'avoir', 'to water plants', false, [], [], 'Housing');

// --- Sport ---
// export const faire_sport = crv('faire du sport', 'RE', 'avoir', 'to do sports', false, [], [], 'Sport'); // Removed duplicate
// Actually "faire du sport" conjugates like "faire". "aller au cinema" like "aller".
// createRegularVerb attempts to stem based on ending. "faire du sport" ends in "rt" (RE-ish?).
// IMPORTANT: For compound verbs based on irregulars, we should probably clone the base irregular.
// But for now, user listed them as "Verbes en -RE". "Faire" is irregular.
// Let's use `faire` base for `faire_sport` if possible, or just treat as regular RE if that's what `createRegularVerb` does (it doesn't do Irregulars well).
// Only "faire" is irregular. "faire du sport" is just "faire" + " du sport".
// Better strategy: Don't use `createRegularVerb` for "faire ...". Use `faire` and change infinitive.
const makeFaire = (inf: string, trans: string, cat: string) => applyExamplesToVerb({ ...faireBase, infinitive: inf, translation: trans, category: cat });
export const faire_du_sport = makeFaire('faire du sport', 'to do sports', 'Sport');
export const sentrainer = crv("s'entraîner", 'ER', 'avoir', 'to train', true, [], [], 'Sport');
const courirBase = crv('courir', 'IR_DORMIR', 'avoir', 'to run', false, [], [], 'Sport');
export const courir = {
    ...courirBase,
    conjugations: {
        ...courirBase.conjugations,
        Indicatif: {
            ...courirBase.conjugations.Indicatif,
            'Futur Simple': [
                { pronoun: 'je', form: 'courrai' },
                { pronoun: 'tu', form: 'courras' },
                { pronoun: 'il/elle', form: 'courra' },
                { pronoun: 'nous', form: 'courrons' },
                { pronoun: 'vous', form: 'courrez' },
                { pronoun: 'ils/elles', form: 'courront' }
            ],
            'Passé Composé': [ // Uses avoir usually
                { pronoun: 'j\'', form: 'ai couru' },
                { pronoun: 'tu', form: 'as couru' },
                { pronoun: 'il/elle', form: 'a couru' },
                { pronoun: 'nous', form: 'avons couru' },
                { pronoun: 'vous', form: 'avez couru' },
                { pronoun: 'ils/elles', form: 'ont couru' }
            ]
        },
        Conditionnel: {
            ...courirBase.conjugations.Conditionnel,
            'Présent': [
                { pronoun: 'je', form: 'courrais' },
                { pronoun: 'tu', form: 'courrais' },
                { pronoun: 'il/elle', form: 'courrait' },
                { pronoun: 'nous', form: 'courrions' },
                { pronoun: 'vous', form: 'courriez' },
                { pronoun: 'ils/elles', form: 'courraient' }
            ]
        },
        Participe: {
            ...courirBase.conjugations.Participe,
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'couru' },
                { pronoun: 'Fem. Sing.', form: 'courue' },
                { pronoun: 'Masc. Plur.', form: 'courus' },
                { pronoun: 'Fem. Plur.', form: 'courues' }
            ]
        }
    }
};
export const marcher = crv('marcher', 'ER', 'avoir', 'to walk', false, [], [], 'Sport');
export const musculation = makeFaire('faire de la musculation', 'to lift weights', 'Sport');
export const yoga = makeFaire('faire du yoga', 'to do yoga', 'Sport');
export const boxer = crv('boxer', 'ER', 'avoir', 'to box', false, [], [], 'Sport');
export const nager = crv('nager', 'ER', 'avoir', 'to swim', false, [], [], 'Sport');
export const sauter = crv('sauter', 'ER', 'avoir', 'to jump', false, [], [], 'Sport');
export const setirer = crv("s'étirer", 'ER', 'avoir', 'to stretch', true, [], [], 'Sport');
export const respirer = crv('respirer', 'ER', 'avoir', 'to breathe', false, [], [], 'Sport');

// --- General / Social ---
export const sortir = crv('sortir', 'IR_DORMIR', 'etre', 'to go out', false, [], [], 'Social');
export const se_promener = crv('se promener', 'ER', 'avoir', 'to take a walk', true, [], [], 'Social');
export const rencontrer = crv('rencontrer', 'ER', 'avoir', 'to meet', false, [], [], 'Social');
export const discuter = crv('discuter', 'ER', 'avoir', 'to discuss', false, [], [], 'Social');
export const inviter = crv('inviter', 'ER', 'avoir', 'to invite', false, [], [], 'Social');
export const rester = crv('rester', 'ER', 'etre', 'to stay', false, [], [], 'Social');
export const se_connecter = crv('se connecter', 'ER', 'avoir', 'to go online', true, [], [], 'Social');
export const jouer_jeux = crv('jouer aux jeux vidéo', 'ER', 'avoir', 'to play video games', false, [], [], 'Social');
export const sappeler = crv("s'appeler", 'ER', 'avoir', 'to be called', true, [], [], 'General');
export const accepter = crv('accepter', 'ER', 'avoir', 'to accept', false, [], [], 'General');
export const aider = crv('aider', 'ER', 'avoir', 'to help', false, [], [], 'General');
export const appeler = crv('appeler', 'ER', 'avoir', 'to call', false, [], [], 'General');
export const arriver = crv('arriver', 'ER', 'etre', 'to arrive', false, [], [], 'General');
export const attendre = crv('attendre', 'RE', 'avoir', 'to wait', false, [], [], 'General');
export const commencer = crv('commencer', 'ER', 'avoir', 'to start', false, [], [], 'General');
export const demander = crv('demander', 'ER', 'avoir', 'to ask', false, [], [], 'General');
const direBase = crv('dire', 'RE', 'avoir', 'to say', false, [], [], 'General');
export const dire = {
    ...direBase,
    conjugations: {
        ...direBase.conjugations,
        Indicatif: {
            ...direBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'dis' },
                { pronoun: 'tu', form: 'dis' },
                { pronoun: 'il/elle', form: 'dit' },
                { pronoun: 'nous', form: 'disons' },
                { pronoun: 'vous', form: 'dites' },
                { pronoun: 'ils/elles', form: 'disent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'disais' },
                { pronoun: 'tu', form: 'disais' },
                { pronoun: 'il/elle', form: 'disait' },
                { pronoun: 'nous', form: 'disions' },
                { pronoun: 'vous', form: 'disiez' },
                { pronoun: 'ils/elles', form: 'disaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'dirai' },
                { pronoun: 'tu', form: 'diras' },
                { pronoun: 'il/elle', form: 'dira' },
                { pronoun: 'nous', form: 'dirons' },
                { pronoun: 'vous', form: 'direz' },
                { pronoun: 'ils/elles', form: 'diront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai dit' },
                { pronoun: 'tu', form: 'as dit' },
                { pronoun: 'il/elle', form: 'a dit' },
                { pronoun: 'nous', form: 'avons dit' },
                { pronoun: 'vous', form: 'avez dit' },
                { pronoun: 'ils/elles', form: 'ont dit' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais dit' },
                { pronoun: 'tu', form: 'avais dit' },
                { pronoun: 'il/elle', form: 'avait dit' },
                { pronoun: 'nous', form: 'avions dit' },
                { pronoun: 'vous', form: 'aviez dit' },
                { pronoun: 'ils/elles', form: 'avaient dit' }
            ]
        },
        Participe: {
            ...direBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'disant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'dit' },
                { pronoun: 'Fem. Sing.', form: 'dite' },
                { pronoun: 'Masc. Plur.', form: 'dits' },
                { pronoun: 'Fem. Plur.', form: 'dites' }
            ]
        },
        Impératif: {
            ...direBase.conjugations.Impératif,
            'Présent': [
                { pronoun: '(Tu)', form: 'dis' },
                { pronoun: '(Nous)', form: 'disons' },
                { pronoun: '(Vous)', form: 'dites' }
            ]
        }
    }
};
export const ecouter = crv('écouter', 'ER', 'avoir', 'to listen', false, [], [], 'General');
export const entendre = crv('entendre', 'RE', 'avoir', 'to hear', false, [], [], 'General');
export const finir = crv('finir', 'IR_ISS', 'avoir', 'to finish', false, [], [], 'General');
export const grandir = crv('grandir', 'IR_ISS', 'avoir', 'to grow', false, [], [], 'General');
export const choisir = crv('choisir', 'IR_ISS', 'avoir', 'to choose', false, [], [], 'General');
export const grossir = crv('grossir', 'IR_ISS', 'avoir', 'to gain weight', false, [], [], 'General');
export const maigrir = crv('maigrir', 'IR_ISS', 'avoir', 'to lose weight', false, [], [], 'General');
export const remplir = crv('remplir', 'IR_ISS', 'avoir', 'to fill', false, [], [], 'General');
export const batir = crv('bâtir', 'IR_ISS', 'avoir', 'to build', false, [], [], 'General');
export const punir = crv('punir', 'IR_ISS', 'avoir', 'to punish', false, [], [], 'General');
export const ralentir = crv('ralentir', 'IR_ISS', 'avoir', 'to slow down', false, [], [], 'General');
export const guerir = crv('guérir', 'IR_ISS', 'avoir', 'to heal/cure', false, [], [], 'General');
export const vieillir = crv('vieillir', 'IR_ISS', 'avoir', 'to age', false, [], [], 'General');
export const rougir = crv('rougir', 'IR_ISS', 'avoir', 'to blush', false, [], [], 'General');
export const blanchir = crv('blanchir', 'IR_ISS', 'avoir', 'to whiten', false, [], [], 'General');
export const salir = crv('salir', 'IR_ISS', 'avoir', 'to dirty', false, [], [], 'General');
export const reflechir = crv('réfléchir', 'IR_ISS', 'avoir', 'to reflect/think', false, [], [], 'General');
export const convertir = crv('convertir', 'IR_ISS', 'avoir', 'to convert', false, [], [], 'General');
export const agir = crv('agir', 'IR_ISS', 'avoir', 'to act', false, [], [], 'General');
export const reagir = crv('réagir', 'IR_ISS', 'avoir', 'to react', false, [], [], 'General');
export const benir = crv('bénir', 'IR_ISS', 'avoir', 'to bless', false, [], [], 'General');
export const verdir = crv('verdir', 'IR_ISS', 'avoir', 'to turn green', false, [], [], 'General');
const hairBase = crv('haïr', 'IR_ISS', 'avoir', 'to hate', false, [], [], 'General');
export const hair = {
    ...hairBase,
    conjugations: {
        ...hairBase.conjugations,
        Indicatif: {
            ...hairBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'hais' },
                { pronoun: 'tu', form: 'hais' },
                { pronoun: 'il/elle', form: 'hait' },
                { pronoun: 'nous', form: 'haïssons' },
                { pronoun: 'vous', form: 'haïssez' },
                { pronoun: 'ils/elles', form: 'haïssent' }
            ],
            // Regular IR_ISS pattern for others preserves tréma because stem is 'ha' + 'ïss...' ? No.
            // crv('haïr', 'IR_ISS') -> stem 'ha'.
            // Imparfait: 'ha' + 'issais' -> 'haissais' (missing tréma).
            // Need to fix all tenses to have tréma.
            'Imparfait': [
                { pronoun: 'je', form: 'haïssais' },
                { pronoun: 'tu', form: 'haïssais' },
                { pronoun: 'il/elle', form: 'haïssait' },
                { pronoun: 'nous', form: 'haïssions' },
                { pronoun: 'vous', form: 'haïssiez' },
                { pronoun: 'ils/elles', form: 'haïssaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'haïrai' },
                { pronoun: 'tu', form: 'haïras' },
                { pronoun: 'il/elle', form: 'haïra' },
                { pronoun: 'nous', form: 'haïrons' },
                { pronoun: 'vous', form: 'haïrez' },
                { pronoun: 'ils/elles', form: 'haïront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai haï' },
                { pronoun: 'tu', form: 'as haï' },
                { pronoun: 'il/elle', form: 'a haï' },
                { pronoun: 'nous', form: 'avons haï' },
                { pronoun: 'vous', form: 'avez haï' },
                { pronoun: 'ils/elles', form: 'ont haï' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais haï' },
                { pronoun: 'tu', form: 'avais haï' },
                { pronoun: 'il/elle', form: 'avait haï' },
                { pronoun: 'nous', form: 'avions haï' },
                { pronoun: 'vous', form: 'aviez haï' },
                { pronoun: 'ils/elles', form: 'avaient haï' }
            ]
        },
        Subjonctif: {
            ...hairBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: 'haïsse' },
                { pronoun: 'que tu', form: 'haïsses' },
                { pronoun: 'qu\'il/elle', form: 'haïsse' },
                { pronoun: 'que nous', form: 'haïssions' },
                { pronoun: 'que vous', form: 'haïssiez' },
                { pronoun: 'qu\'ils/elles', form: 'haïssent' }
            ]
        },
        Participe: {
            ...hairBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'haïssant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'haï' },
                { pronoun: 'Fem. Sing.', form: 'haïe' },
                { pronoun: 'Masc. Plur.', form: 'haïs' },
                { pronoun: 'Fem. Plur.', form: 'haïes' }
            ]
        },
        Impératif: {
            ...hairBase.conjugations.Impératif,
            'Présent': [
                { pronoun: '(Tu)', form: 'hais' },
                { pronoun: '(Nous)', form: 'haïssons' },
                { pronoun: '(Vous)', form: 'haïssez' }
            ]
        }
    }
};
const mettreBase = crv('mettre', 'RE', 'avoir', 'to put', false, [], [], 'General');
export const mettre = {
    ...mettreBase,
    conjugations: {
        ...mettreBase.conjugations,
        Indicatif: {
            ...mettreBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'mets' },
                { pronoun: 'tu', form: 'mets' },
                { pronoun: 'il/elle', form: 'met' },
                { pronoun: 'nous', form: 'mettons' },
                { pronoun: 'vous', form: 'mettez' },
                { pronoun: 'ils/elles', form: 'mettent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'mettais' },
                { pronoun: 'tu', form: 'mettais' },
                { pronoun: 'il/elle', form: 'mettait' },
                { pronoun: 'nous', form: 'mettions' },
                { pronoun: 'vous', form: 'mettiez' },
                { pronoun: 'ils/elles', form: 'mettaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'mettrai' },
                { pronoun: 'tu', form: 'mettras' },
                { pronoun: 'il/elle', form: 'mettra' },
                { pronoun: 'nous', form: 'mettrons' },
                { pronoun: 'vous', form: 'mettrez' },
                { pronoun: 'ils/elles', form: 'mettront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai mis' },
                { pronoun: 'tu', form: 'as mis' },
                { pronoun: 'il/elle', form: 'a mis' },
                { pronoun: 'nous', form: 'avons mis' },
                { pronoun: 'vous', form: 'avez mis' },
                { pronoun: 'ils/elles', form: 'ont mis' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais mis' },
                { pronoun: 'tu', form: 'avais mis' },
                { pronoun: 'il/elle', form: 'avait mis' },
                { pronoun: 'nous', form: 'avions mis' },
                { pronoun: 'vous', form: 'aviez mis' },
                { pronoun: 'ils/elles', form: 'avaient mis' }
            ]
        },
        Participe: {
            ...mettreBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'mettant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'mis' },
                { pronoun: 'Fem. Sing.', form: 'mise' },
                { pronoun: 'Masc. Plur.', form: 'mis' },
                { pronoun: 'Fem. Plur.', form: 'mises' }
            ]
        },
        Impératif: {
            ...mettreBase.conjugations.Impératif,
            'Présent': [
                { pronoun: '(Tu)', form: 'mets' },
                { pronoun: '(Nous)', form: 'mettons' },
                { pronoun: '(Vous)', form: 'mettez' }
            ]
        }
    }
};
const mourirBase = crv('mourir', 'IR_DORMIR', 'etre', 'to die', false, [], [], 'General');
export const mourir = {
    ...mourirBase,
    conjugations: {
        ...mourirBase.conjugations,
        Indicatif: {
            ...mourirBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'meurs' },
                { pronoun: 'tu', form: 'meurs' },
                { pronoun: 'il/elle', form: 'meurt' },
                { pronoun: 'nous', form: 'mourons' },
                { pronoun: 'vous', form: 'mourez' },
                { pronoun: 'ils/elles', form: 'meurent' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'mourrai' },
                { pronoun: 'tu', form: 'mourras' },
                { pronoun: 'il/elle', form: 'mourra' },
                { pronoun: 'nous', form: 'mourrons' },
                { pronoun: 'vous', form: 'mourrez' },
                { pronoun: 'ils/elles', form: 'mourront' }
            ],
            'Passé Composé': [
                { pronoun: 'je', form: 'suis mort(e)' },
                { pronoun: 'tu', form: 'es mort(e)' },
                { pronoun: 'il/elle', form: 'est mort(e)' },
                { pronoun: 'nous', form: 'sommes mort(e)s' },
                { pronoun: 'vous', form: 'êtes mort(e)(s)' },
                { pronoun: 'ils/elles', form: 'sont mort(e)s' }
            ]
        },
        Subjonctif: {
            ...mourirBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: 'meure' },
                { pronoun: 'que tu', form: 'meures' },
                { pronoun: 'qu\'il/elle', form: 'meure' },
                { pronoun: 'que nous', form: 'mourions' },
                { pronoun: 'que vous', form: 'mouriez' },
                { pronoun: 'qu\'ils/elles', form: 'meurent' }
            ]
        },
        Participe: {
            ...mourirBase.conjugations.Participe,
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'mort' },
                { pronoun: 'Fem. Sing.', form: 'morte' },
                { pronoun: 'Masc. Plur.', form: 'morts' },
                { pronoun: 'Fem. Plur.', form: 'mortes' }
            ]
        }
    }
};

const fuirBase = crv('fuir', 'IR_ISS', 'avoir', 'to flee', false, [], [], 'General'); // Base irrelevant, overriding
export const fuir = {
    ...fuirBase,
    conjugations: {
        ...fuirBase.conjugations,
        Indicatif: {
            ...fuirBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'fuis' },
                { pronoun: 'tu', form: 'fuis' },
                { pronoun: 'il/elle', form: 'fuit' },
                { pronoun: 'nous', form: 'fuyons' },
                { pronoun: 'vous', form: 'fuyez' },
                { pronoun: 'ils/elles', form: 'fuient' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'fuyais' },
                { pronoun: 'tu', form: 'fuyais' },
                { pronoun: 'il/elle', form: 'fuyait' },
                { pronoun: 'nous', form: 'fuyions' },
                { pronoun: 'vous', form: 'fuyiez' },
                { pronoun: 'ils/elles', form: 'fuyaient' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai fui' },
                { pronoun: 'tu', form: 'as fui' },
                { pronoun: 'il/elle', form: 'a fui' },
                { pronoun: 'nous', form: 'avons fui' },
                { pronoun: 'vous', form: 'avez fui' },
                { pronoun: 'ils/elles', form: 'ont fui' }
            ]
        },
        Subjonctif: {
            ...fuirBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: 'fuie' },
                { pronoun: 'que tu', form: 'fuies' },
                { pronoun: 'qu\'il/elle', form: 'fuie' },
                { pronoun: 'que nous', form: 'fuyions' },
                { pronoun: 'que vous', form: 'fuyiez' },
                { pronoun: 'qu\'ils/elles', form: 'fuient' }
            ]
        },
        Participe: {
            ...fuirBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'fuyant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'fui' },
                { pronoun: 'Fem. Sing.', form: 'fuie' },
                { pronoun: 'Masc. Plur.', form: 'fuis' },
                { pronoun: 'Fem. Plur.', form: 'fuies' }
            ]
        },
        Impératif: {
            ...fuirBase.conjugations.Impératif,
            'Présent': [
                { pronoun: '(Tu)', form: 'fuis' },
                { pronoun: '(Nous)', form: 'fuyons' },
                { pronoun: '(Vous)', form: 'fuyez' }
            ]
        }
    }
};
export const partir = crv('partir', 'IR_DORMIR', 'etre', 'to leave', false, [], [], 'General');
export const ouvrir = crv('ouvrir', 'IR_COCOS', 'avoir', 'to open', false, [], [], 'General');
export const cueillir = crv('cueillir', 'IR_COCOS', 'avoir', 'to gather', false, [], [], 'General');
export const accueillir = crv('accueillir', 'IR_COCOS', 'avoir', 'to welcome', false, [], [], 'General');
export const offrir = crv('offrir', 'IR_COCOS', 'avoir', 'to offer', false, [], [], 'General');
export const oublier = crv('oublier', 'ER', 'avoir', 'to forget', false, [], [], 'General');
export const parler = crv('parler', 'ER', 'avoir', 'to speak', false, [], [], 'General');
export const perdre = crv('perdre', 'RE', 'avoir', 'to lose', false, [], [], 'General');
export const porter = crv('porter', 'ER', 'avoir', 'to wear/carry', false, [], [], 'General');
const prendreBase = crv('prendre', 'RE', 'avoir', 'to take', false, [], [], 'General');
export const prendre = {
    ...prendreBase,
    conjugations: {
        ...prendreBase.conjugations,
        Indicatif: {
            ...prendreBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'prends' },
                { pronoun: 'tu', form: 'prends' },
                { pronoun: 'il/elle', form: 'prend' },
                { pronoun: 'nous', form: 'prenons' },
                { pronoun: 'vous', form: 'prenez' },
                { pronoun: 'ils/elles', form: 'prennent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'prenais' },
                { pronoun: 'tu', form: 'prenais' },
                { pronoun: 'il/elle', form: 'prenait' },
                { pronoun: 'nous', form: 'prenions' },
                { pronoun: 'vous', form: 'preniez' },
                { pronoun: 'ils/elles', form: 'prenaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'prendrai' },
                { pronoun: 'tu', form: 'prendras' },
                { pronoun: 'il/elle', form: 'prendra' },
                { pronoun: 'nous', form: 'prendrons' },
                { pronoun: 'vous', form: 'prendrez' },
                { pronoun: 'ils/elles', form: 'prendront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai pris' },
                { pronoun: 'tu', form: 'as pris' },
                { pronoun: 'il/elle', form: 'a pris' },
                { pronoun: 'nous', form: 'avons pris' },
                { pronoun: 'vous', form: 'avez pris' },
                { pronoun: 'ils/elles', form: 'ont pris' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais pris' },
                { pronoun: 'tu', form: 'avais pris' },
                { pronoun: 'il/elle', form: 'avait pris' },
                { pronoun: 'nous', form: 'avions pris' },
                { pronoun: 'vous', form: 'aviez pris' },
                { pronoun: 'ils/elles', form: 'avaient pris' }
            ]
        },
        Subjonctif: {
            ...prendreBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: 'prenne' },
                { pronoun: 'que tu', form: 'prennes' },
                { pronoun: 'qu\'il/elle', form: 'prenne' },
                { pronoun: 'que nous', form: 'prenions' },
                { pronoun: 'que vous', form: 'preniez' },
                { pronoun: 'qu\'ils/elles', form: 'prennent' }
            ]
        },
        Participe: {
            ...prendreBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'prenant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'pris' },
                { pronoun: 'Fem. Sing.', form: 'prise' },
                { pronoun: 'Masc. Plur.', form: 'pris' },
                { pronoun: 'Fem. Plur.', form: 'prises' }
            ]
        },
        Impératif: {
            ...prendreBase.conjugations.Impératif,
            'Présent': [
                { pronoun: '(Tu)', form: 'prends' },
                { pronoun: '(Nous)', form: 'prenons' },
                { pronoun: '(Vous)', form: 'prenez' }
            ]
        }
    }
};
export const proposer = crv('proposer', 'ER', 'avoir', 'to propose', false, [], [], 'General');
export const remercier = crv('remercier', 'ER', 'avoir', 'to thank', false, [], [], 'General');
export const rendre = crv('rendre', 'RE', 'avoir', 'to give back', false, [], [], 'General');
export const se_rendre = crv('se rendre', 'RE', 'etre', 'to go to', true, [], [], 'General');
export const rentrer = crv('rentrer', 'ER', 'etre', 'to return', false, [], [], 'General');
export const rouvrir = crv('rouvrir', 'IR_COCOS', 'avoir', 'to reopen', false, [], [], 'General');
export const se_sentir = crv('se sentir', 'IR_DORMIR', 'avoir', 'to feel', true, [], [], 'General');
export const souffrir = crv('souffrir', 'IR_COCOS', 'avoir', 'to suffer', false, [], [], 'General');
export const terminer = crv('terminer', 'ER', 'avoir', 'to finish', false, [], [], 'General');
export const toucher = crv('toucher', 'ER', 'avoir', 'to touch', false, [], [], 'General');
export const trouver = crv('trouver', 'ER', 'avoir', 'to find', false, [], [], 'General');
export const utiliser = crv('utiliser', 'ER', 'avoir', 'to use', false, [], [], 'General');
const venirBase = crv('venir', 'IR_VENIR', 'etre', 'to come', false, [], [], 'General');
export const venir = {
    ...venirBase,
    conjugations: {
        ...venirBase.conjugations,
        Indicatif: {
            ...venirBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'viens' },
                { pronoun: 'tu', form: 'viens' },
                { pronoun: 'il/elle', form: 'vient' },
                { pronoun: 'nous', form: 'venons' },
                { pronoun: 'vous', form: 'venez' },
                { pronoun: 'ils/elles', form: 'viennent' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'viendrai' },
                { pronoun: 'tu', form: 'viendras' },
                { pronoun: 'il/elle', form: 'viendra' },
                { pronoun: 'nous', form: 'viendrons' },
                { pronoun: 'vous', form: 'viendrez' },
                { pronoun: 'ils/elles', form: 'viendront' }
            ],
            'Passé Composé': [
                { pronoun: 'je', form: 'suis venu(e)' },
                { pronoun: 'tu', form: 'es venu(e)' },
                { pronoun: 'il/elle', form: 'est venu(e)' },
                { pronoun: 'nous', form: 'sommes venu(e)s' },
                { pronoun: 'vous', form: 'êtes venu(e)(s)' },
                { pronoun: 'ils/elles', form: 'sont venu(e)s' }
            ]
        },
        Conditionnel: {
            ...venirBase.conjugations.Conditionnel,
            'Présent': [
                { pronoun: 'je', form: 'viendrais' },
                { pronoun: 'tu', form: 'viendrais' },
                { pronoun: 'il/elle', form: 'viendrait' },
                { pronoun: 'nous', form: 'viendrions' },
                { pronoun: 'vous', form: 'viendriez' },
                { pronoun: 'ils/elles', form: 'viendraient' }
            ]
        },
        Subjonctif: {
            ...venirBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: 'vienne' },
                { pronoun: 'que tu', form: 'viennes' },
                { pronoun: 'qu\'il/elle', form: 'vienne' },
                { pronoun: 'que nous', form: 'venions' },
                { pronoun: 'que vous', form: 'veniez' },
                { pronoun: 'qu\'ils/elles', form: 'viennent' }
            ]
        },
        Participe: {
            ...venirBase.conjugations.Participe,
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'venu' },
                { pronoun: 'Fem. Sing.', form: 'venue' },
                { pronoun: 'Masc. Plur.', form: 'venus' },
                { pronoun: 'Fem. Plur.', form: 'venues' }
            ]
        }
    }
};

const tenirBase = crv('tenir', 'IR_VENIR', 'avoir', 'to hold', false, [], [], 'General');
export const tenir = {
    ...tenirBase,
    conjugations: {
        ...tenirBase.conjugations,
        Indicatif: {
            ...tenirBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'tiens' },
                { pronoun: 'tu', form: 'tiens' },
                { pronoun: 'il/elle', form: 'tient' },
                { pronoun: 'nous', form: 'tenons' },
                { pronoun: 'vous', form: 'tenez' },
                { pronoun: 'ils/elles', form: 'tiennent' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'tiendrai' },
                { pronoun: 'tu', form: 'tiendras' },
                { pronoun: 'il/elle', form: 'tiendra' },
                { pronoun: 'nous', form: 'tiendrons' },
                { pronoun: 'vous', form: 'tiendrez' },
                { pronoun: 'ils/elles', form: 'tiendront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai tenu' },
                { pronoun: 'tu', form: 'as tenu' },
                { pronoun: 'il/elle', form: 'a tenu' },
                { pronoun: 'nous', form: 'avons tenu' },
                { pronoun: 'vous', form: 'avez tenu' },
                { pronoun: 'ils/elles', form: 'ont tenu' }
            ]
        },
        Conditionnel: {
            ...tenirBase.conjugations.Conditionnel,
            'Présent': [
                { pronoun: 'je', form: 'tiendrais' },
                { pronoun: 'tu', form: 'tiendrais' },
                { pronoun: 'il/elle', form: 'tiendrait' },
                { pronoun: 'nous', form: 'tiendrions' },
                { pronoun: 'vous', form: 'tiendriez' },
                { pronoun: 'ils/elles', form: 'tiendraient' }
            ]
        },
        Subjonctif: {
            ...tenirBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: 'tienne' },
                { pronoun: 'que tu', form: 'tiennes' },
                { pronoun: 'qu\'il/elle', form: 'tienne' },
                { pronoun: 'que nous', form: 'tenions' },
                { pronoun: 'que vous', form: 'teniez' },
                { pronoun: 'qu\'ils/elles', form: 'tiennent' }
            ]
        },
        Participe: {
            ...tenirBase.conjugations.Participe,
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'tenu' },
                { pronoun: 'Fem. Sing.', form: 'tenue' },
                { pronoun: 'Masc. Plur.', form: 'tenus' },
                { pronoun: 'Fem. Plur.', form: 'tenues' }
            ]
        }
    }
};

const voirBase = crv('voir', 'IR_DORMIR', 'avoir', 'to see', false, [], [], 'General');
export const voir = {
    ...voirBase,
    conjugations: {
        ...voirBase.conjugations,
        Indicatif: {
            ...voirBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'vois' },
                { pronoun: 'tu', form: 'vois' },
                { pronoun: 'il/elle', form: 'voit' },
                { pronoun: 'nous', form: 'voyons' },
                { pronoun: 'vous', form: 'voyez' },
                { pronoun: 'ils/elles', form: 'voient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'verrai' },
                { pronoun: 'tu', form: 'verras' },
                { pronoun: 'il/elle', form: 'verra' },
                { pronoun: 'nous', form: 'verrons' },
                { pronoun: 'vous', form: 'verrez' },
                { pronoun: 'ils/elles', form: 'verront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai vu' },
                { pronoun: 'tu', form: 'as vu' },
                { pronoun: 'il/elle', form: 'a vu' },
                { pronoun: 'nous', form: 'avons vu' },
                { pronoun: 'vous', form: 'avez vu' },
                { pronoun: 'ils/elles', form: 'ont vu' }
            ]
        },
        Conditionnel: {
            ...voirBase.conjugations.Conditionnel,
            'Présent': [
                { pronoun: 'je', form: 'verrais' },
                { pronoun: 'tu', form: 'verrais' },
                { pronoun: 'il/elle', form: 'verrait' },
                { pronoun: 'nous', form: 'verrions' },
                { pronoun: 'vous', form: 'verriez' },
                { pronoun: 'ils/elles', form: 'verraient' }
            ]
        },
        Participe: {
            ...voirBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'voyant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'vu' },
                { pronoun: 'Fem. Sing.', form: 'vue' },
                { pronoun: 'Masc. Plur.', form: 'vus' },
                { pronoun: 'Fem. Plur.', form: 'vues' }
            ]
        }
    }
};

const croireBase = crv('croire', 'RE', 'avoir', 'to believe', false, [], [], 'General');
export const croire = {
    ...croireBase,
    conjugations: {
        ...croireBase.conjugations,
        Indicatif: {
            ...croireBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'crois' },
                { pronoun: 'tu', form: 'crois' },
                { pronoun: 'il/elle', form: 'croit' },
                { pronoun: 'nous', form: 'croyons' },
                { pronoun: 'vous', form: 'croyez' },
                { pronoun: 'ils/elles', form: 'croient' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai cru' },
                { pronoun: 'tu', form: 'as cru' },
                { pronoun: 'il/elle', form: 'a cru' },
                { pronoun: 'nous', form: 'avons cru' },
                { pronoun: 'vous', form: 'avez cru' },
                { pronoun: 'ils/elles', form: 'ont cru' }
            ]
        },
        Participe: {
            ...croireBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'croyant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'cru' },
                { pronoun: 'Fem. Sing.', form: 'crue' },
                { pronoun: 'Masc. Plur.', form: 'crus' },
                { pronoun: 'Fem. Plur.', form: 'crues' }
            ]
        }
    }
};

const recevoirBase = crv('recevoir', 'RE', 'avoir', 'to receive', false, [], [], 'General');
export const recevoir = {
    ...recevoirBase,
    conjugations: {
        ...recevoirBase.conjugations,
        Indicatif: {
            ...recevoirBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'reçois' },
                { pronoun: 'tu', form: 'reçois' },
                { pronoun: 'il/elle', form: 'reçoit' },
                { pronoun: 'nous', form: 'recevons' },
                { pronoun: 'vous', form: 'recevez' },
                { pronoun: 'ils/elles', form: 'reçoivent' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'recevrai' },
                { pronoun: 'tu', form: 'recevras' },
                { pronoun: 'il/elle', form: 'recevra' },
                { pronoun: 'nous', form: 'recevrons' },
                { pronoun: 'vous', form: 'recevrez' },
                { pronoun: 'ils/elles', form: 'recevront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai reçu' },
                { pronoun: 'tu', form: 'as reçu' },
                { pronoun: 'il/elle', form: 'a reçu' },
                { pronoun: 'nous', form: 'avons reçu' },
                { pronoun: 'vous', form: 'avez reçu' },
                { pronoun: 'ils/elles', form: 'ont reçu' }
            ]
        },
        Conditionnel: {
            ...recevoirBase.conjugations.Conditionnel,
            'Présent': [
                { pronoun: 'je', form: 'recevrais' },
                { pronoun: 'tu', form: 'recevrais' },
                { pronoun: 'il/elle', form: 'recevrait' },
                { pronoun: 'nous', form: 'recevrions' },
                { pronoun: 'vous', form: 'recevriez' },
                { pronoun: 'ils/elles', form: 'recevraient' }
            ]
        },
        Subjonctif: {
            ...recevoirBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: 'reçoive' },
                { pronoun: 'que tu', form: 'reçoives' },
                { pronoun: 'qu\'il/elle', form: 'reçoive' },
                { pronoun: 'que nous', form: 'recevions' },
                { pronoun: 'que vous', form: 'receviez' },
                { pronoun: 'qu\'ils/elles', form: 'reçoivent' }
            ]
        },
        Participe: {
            ...recevoirBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'recevant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'reçu' },
                { pronoun: 'Fem. Sing.', form: 'reçue' },
                { pronoun: 'Masc. Plur.', form: 'reçus' },
                { pronoun: 'Fem. Plur.', form: 'reçues' }
            ]
        }
    }
};

export const mentir = crv('mentir', 'IR_DORMIR', 'avoir', 'to lie', false, [], [], 'General');

// --- Missing / Extra Verbs ---
export const amuser = crv('amuser', 'ER', 'avoir', 'to amuse', false, [], [], 'General');
export const baigner = crv('baigner', 'ER', 'avoir', 'to bathe', false, [], [], 'General');
export const coiffer = crv('coiffer', 'ER', 'avoir', 'to style hair', false, [], [], 'General');
export const se_concentrer = crv('se concentrer', 'ER', 'avoir', 'to concentrate', true, [], [], 'General');
export const connecter = crv('connecter', 'ER', 'avoir', 'to connect', false, [], [], 'General');
export const couvrir = crv('couvrir', 'IR_COCOS', 'avoir', 'to cover', false, [], [], 'General');
export const decouvrir = crv('découvrir', 'IR_COCOS', 'avoir', 'to discover', false, [], [], 'General');
export const defendre = crv('défendre', 'RE', 'avoir', 'to defend', false, [], [], 'General');
export const dependre = crv('dépendre', 'RE', 'avoir', 'to depend', false, [], [], 'General');
const descendreBase = crv('descendre', 'RE', 'etre', 'to go down', false, [], [], 'General');
export const descendre = {
    ...descendreBase,
    conjugations: {
        ...descendreBase.conjugations,
        Indicatif: {
            ...descendreBase.conjugations.Indicatif,
            'Passé Composé': [
                { pronoun: 'je', form: 'suis descendu(e)' }, // Being explicit as requested/standard for user tools
                { pronoun: 'tu', form: 'es descendu(e)' },
                { pronoun: 'il/elle', form: 'est descendu(e)' },
                { pronoun: 'nous', form: 'sommes descendu(e)s' },
                { pronoun: 'vous', form: 'êtes descendu(e)(s)' },
                { pronoun: 'ils/elles', form: 'sont descendu(e)s' }
            ],
            'Plus-que-parfait': [ // Also takes être
                { pronoun: 'j\'', form: 'étais descendu(e)' },
                { pronoun: 'tu', form: 'étais descendu(e)' },
                { pronoun: 'il/elle', form: 'était descendu(e)' },
                { pronoun: 'nous', form: 'étions descendu(e)s' },
                { pronoun: 'vous', form: 'étiez descendu(e)(s)' },
                { pronoun: 'ils/elles', form: 'étaient descendu(e)s' }
            ]
        },
        Participe: {
            ...descendreBase.conjugations.Participe,
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'descendu' },
                { pronoun: 'Fem. Sing.', form: 'descendue' },
                { pronoun: 'Masc. Plur.', form: 'descendus' },
                { pronoun: 'Fem. Plur.', form: 'descendues' }
            ]
        }
    }
};
export const deshabiller = crv('déshabiller', 'ER', 'avoir', 'to undress', false, [], [], 'General');
export const se_disputer = crv('se disputer', 'ER', 'avoir', 'to argue', true, [], [], 'General');
export const doucher = crv('doucher', 'ER', 'avoir', 'to shower', false, [], [], 'General');
export const endormir = crv('endormir', 'IR_DORMIR', 'avoir', 'to put to sleep', false, [], [], 'General');
export const sendormir = crv("s'endormir", 'IR_DORMIR', 'avoir', 'to fall asleep', true, [], [], 'General');
export const sennuyer = crv("s'ennuyer", 'ER', 'avoir', 'to get bored', true, [], [], 'General');
export const se_facher = crv('se fâcher', 'ER', 'avoir', 'to get angry', true, [], [], 'General');
export const habiller = crv('habiller', 'ER', 'avoir', 'to dress', false, [], [], 'General');
export const informer = crv('informer', 'ER', 'avoir', 'to inform', false, [], [], 'General');
export const sinquieter = crv("s'inquiéter", 'ER', 'avoir', 'to worry', true, [], [], 'General');
export const sinteresser = crv("s'intéresser à", 'ER', 'avoir', 'to be interested in', true, [], [], 'General');
export const laver = crv('laver', 'ER', 'avoir', 'to wash', false, [], [], 'General');
export const se_laver_les_mains = crv('se laver les mains', 'ER', 'avoir', 'to wash hands', true, [], [], 'General');
export const se_laver_le_visage = crv('se laver le visage', 'ER', 'avoir', 'to wash face', true, [], [], 'General');
export const lever = crv('lever', 'ER', 'avoir', 'to lift', false, [], [], 'General');
export const maquiller = crv('maquiller', 'ER', 'avoir', 'to makeup', false, [], [], 'General');
export const peigner = crv('peigner', 'ER', 'avoir', 'to comb', false, [], [], 'General');
export const se_peigner = crv('se peigner', 'ER', 'avoir', 'to comb hair', true, [], [], 'General');
export const preciser = crv('préciser', 'ER', 'avoir', 'to specify', false, [], [], 'General');
export const promener = crv('promener', 'ER', 'avoir', 'to walk someone', false, [], [], 'General');
export const raser = crv('raser', 'ER', 'avoir', 'to shave', false, [], [], 'General');
export const se_reconcilier = crv('se réconcilier', 'ER', 'avoir', 'to reconcile', true, [], [], 'General');
export const reveiller = crv('réveiller', 'ER', 'avoir', 'to wake', false, [], [], 'General');
export const secher = crv('sécher', 'ER', 'avoir', 'to dry', false, [], [], 'General');
export const se_secher = crv('se sécher', 'ER', 'avoir', 'to dry oneself', true, [], [], 'General');
export const se_secher_les_cheveux = crv('se sécher les cheveux', 'ER', 'avoir', 'to dry hair', true, [], [], 'General');
export const se_tromper = crv('se tromper', 'ER', 'avoir', 'to be mistaken', true, [], [], 'General');
// --- More Missing Verbs ---
export const se_debrouiller = crv('se débrouiller', 'ER', 'avoir', 'to manage', true, [], [], 'General');
export const se_marier = crv('se marier', 'ER', 'avoir', 'to get married', true, [], [], 'General');
export const se_preparer = crv('se préparer', 'ER', 'avoir', 'to get ready', true, [], [], 'General');
// export const sasseoir = asseoir; // Removed alias
// export const sentire = se_sentir; // Removed alias
export const coucher = crv('coucher', 'ER', 'avoir', 'to put to bed', false, [], [], 'Routine');



// --- -uire Verbs (conduire, construire, etc.) ---
const conduireBase = crv('conduire', 'RE', 'avoir', 'to drive', false, [], [], 'General');
const makeConduire = (inf: string, trans: string) => ({
    ...conduireBase,
    infinitive: inf,
    translation: trans,
    conjugations: {
        ...conduireBase.conjugations,
        Indicatif: {
            ...conduireBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: inf.slice(0, -2) + 's' },
                { pronoun: 'tu', form: inf.slice(0, -2) + 's' },
                { pronoun: 'il/elle', form: inf.slice(0, -2) + 't' },
                { pronoun: 'nous', form: inf.slice(0, -2) + 'sons' },
                { pronoun: 'vous', form: inf.slice(0, -2) + 'sez' },
                { pronoun: 'ils/elles', form: inf.slice(0, -2) + 'sent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: inf.slice(0, -2) + 'sais' },
                { pronoun: 'tu', form: inf.slice(0, -2) + 'sais' },
                { pronoun: 'il/elle', form: inf.slice(0, -2) + 'sait' },
                { pronoun: 'nous', form: inf.slice(0, -2) + 'sions' },
                { pronoun: 'vous', form: inf.slice(0, -2) + 'siez' },
                { pronoun: 'ils/elles', form: inf.slice(0, -2) + 'saient' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai ' + inf.slice(0, -2) + 't' },
                { pronoun: 'tu', form: 'as ' + inf.slice(0, -2) + 't' },
                { pronoun: 'il/elle', form: 'a ' + inf.slice(0, -2) + 't' },
                { pronoun: 'nous', form: 'avons ' + inf.slice(0, -2) + 't' },
                { pronoun: 'vous', form: 'avez ' + inf.slice(0, -2) + 't' },
                { pronoun: 'ils/elles', form: 'ont ' + inf.slice(0, -2) + 't' }
            ]
        },
        Subjonctif: {
            ...conduireBase.conjugations.Subjonctif,
            'Présent': [
                { pronoun: 'que je', form: inf.slice(0, -2) + 'se' },
                { pronoun: 'que tu', form: inf.slice(0, -2) + 'ses' },
                { pronoun: 'qu\'il/elle', form: inf.slice(0, -2) + 'se' },
                { pronoun: 'que nous', form: inf.slice(0, -2) + 'sions' },
                { pronoun: 'que vous', form: inf.slice(0, -2) + 'siez' },
                { pronoun: 'qu\'ils/elles', form: inf.slice(0, -2) + 'sent' }
            ]
        },
        Participe: {
            ...conduireBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: inf.slice(0, -2) + 'sant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: inf.slice(0, -2) + 't' },
                { pronoun: 'Fem. Sing.', form: inf.slice(0, -2) + 'te' },
                { pronoun: 'Masc. Plur.', form: inf.slice(0, -2) + 'ts' },
                { pronoun: 'Fem. Plur.', form: inf.slice(0, -2) + 'tes' }
            ]
        }
    }
});

export const conduire = makeConduire('conduire', 'to drive');
export const construire = makeConduire('construire', 'to build');
export const instruire = makeConduire('instruire', 'to instruct');
export const produire = makeConduire('produire', 'to produce');
export const reduire = makeConduire('réduire', 'to reduce');

// --- -ndre Verbs (rejoindre, peindre, etc.) ---
const rejoindreBase = crv('rejoindre', 'RE', 'avoir', 'to join', false, [], [], 'General');
const makeRejoindre = (inf: string, trans: string) => {
    const base = inf.slice(0, -4); // rejoi, pei, crai
    return {
        ...rejoindreBase,
        infinitive: inf,
        translation: trans,
        conjugations: {
            ...rejoindreBase.conjugations,
            Indicatif: {
                ...rejoindreBase.conjugations.Indicatif,
                'Présent': [
                    { pronoun: 'je', form: base + 'ns' },
                    { pronoun: 'tu', form: base + 'ns' },
                    { pronoun: 'il/elle', form: base + 'nt' },
                    { pronoun: 'nous', form: base + 'gnons' },
                    { pronoun: 'vous', form: base + 'gnez' },
                    { pronoun: 'ils/elles', form: base + 'gnent' }
                ],
                'Imparfait': [
                    { pronoun: 'je', form: base + 'gnais' },
                    { pronoun: 'tu', form: base + 'gnais' },
                    { pronoun: 'il/elle', form: base + 'gnait' },
                    { pronoun: 'nous', form: base + 'gnions' },
                    { pronoun: 'vous', form: base + 'gniez' },
                    { pronoun: 'ils/elles', form: base + 'gnaient' }
                ],
                'Passé Composé': [
                    { pronoun: 'j\'', form: 'ai ' + base + 'nt' },
                    { pronoun: 'tu', form: 'as ' + base + 'nt' },
                    { pronoun: 'il/elle', form: 'a ' + base + 'nt' },
                    { pronoun: 'nous', form: 'avons ' + base + 'nt' },
                    { pronoun: 'vous', form: 'avez ' + base + 'nt' },
                    { pronoun: 'ils/elles', form: 'ont ' + base + 'nt' }
                ]
            },
            'Subjonctif': {
                ...rejoindreBase.conjugations.Subjonctif,
                'Présent': [
                    { pronoun: 'que je', form: base + 'gne' },
                    { pronoun: 'que tu', form: base + 'gnes' },
                    { pronoun: 'qu\'il/elle', form: base + 'gne' },
                    { pronoun: 'que nous', form: base + 'gnions' },
                    { pronoun: 'que vous', form: base + 'gniez' },
                    { pronoun: 'qu\'ils/elles', form: base + 'gnent' }
                ]
            },
            Participe: {
                ...rejoindreBase.conjugations.Participe,
                'Présent': [{ pronoun: '', form: base + 'gnant' }],
                'Passé': [
                    { pronoun: 'Masc. Sing.', form: base + 'nt' },
                    { pronoun: 'Fem. Sing.', form: base + 'nte' },
                    { pronoun: 'Masc. Plur.', form: base + 'nts' },
                    { pronoun: 'Fem. Plur.', form: base + 'ntes' }
                ]
            }
        }
    };
};

export const rejoindre = makeRejoindre('rejoindre', 'to join/rejoin');
export const peindre = makeRejoindre('peindre', 'to paint');

// --- Dependent Verbs ---
export const comprendre = {
    ...apprendre,
    infinitive: 'comprendre',
    translation: 'to understand',
    conjugations: {
        ...apprendre.conjugations,
        Indicatif: {
            ...apprendre.conjugations.Indicatif,
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai compris' },
                { pronoun: 'tu', form: 'as compris' },
                { pronoun: 'il/elle', form: 'a compris' },
                { pronoun: 'nous', form: 'avons compris' },
                { pronoun: 'vous', form: 'avez compris' },
                { pronoun: 'ils/elles', form: 'ont compris' }
            ]
        },
        Participe: {
            ...apprendre.conjugations.Participe,
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'compris' },
                { pronoun: 'Fem. Sing.', form: 'comprise' },
                { pronoun: 'Masc. Plur.', form: 'compris' },
                { pronoun: 'Fem. Plur.', form: 'comprises' }
            ]
        }
    }
};

export const survivre = {
    ...vivre,
    infinitive: 'survivre',
    translation: 'to survive',
    conjugations: {
        ...vivre.conjugations,
        Indicatif: {
            ...vivre.conjugations.Indicatif,
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai survécu' },
                { pronoun: 'tu', form: 'as survécu' },
                { pronoun: 'il/elle', form: 'a survécu' },
                { pronoun: 'nous', form: 'avons survécu' },
                { pronoun: 'vous', form: 'avez survécu' },
                { pronoun: 'ils/elles', form: 'ont survécu' }
            ] // Rest fits vivre pattern (survis, survis, survit...)
        },
        Participe: {
            ...vivre.conjugations.Participe,
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'survécu' },
                { pronoun: 'Fem. Sing.', form: 'survécue' },
                { pronoun: 'Masc. Plur.', form: 'survécus' },
                { pronoun: 'Fem. Plur.', form: 'survécues' }
            ]
        }
    }
};


// Export Dictionary
export const verbs = [
    accepter, accueillir, acheter, agir, aider, aller, amuser, appeler, apprendre, arriver, arroser, asseoir, attendre, avoir,
    baigner, balayer, batir, benir, blanchir, boire, boxer, bricoler, se_brosser_dents,
    chanter, chercher_emploi, choisir, coiffer, se_coiffer, commander, commencer, comprendre, se_concentrer, conduire, construire, instruire, produire, reduire, rejoindre, peindre, connecter, convertir, se_coucher, coucher, courir, couvrir, cueillir, cuisiner,
    danser, se_debrouiller, decouvrir, defendre, dejeuner, demander, demenager, se_depecher, dependre, descendre, se_deshabiller, deshabiller, dessiner, se_detendre, devoir, diner, dire, diriger, discuter, se_disputer, dormir, se_doucher, doucher,
    echouer, ecouter, ecouter_musique, ecrire, embaucher, endormir, sendormir, sennuyer, entendre, envoyer_email, etudier, etre, expliquer,
    se_facher, faire, faire_du_sport, finir, fuir,
    gagner_argent, gouter, grandir, grignoter, grossir, guerir,
    habiter, habiller, shabiller, hair,
    informer, sinquieter, sinteresser, inviter,
    jardiner, jouer, jouer_jeux,
    laver, se_laver, se_laver_les_mains, se_laver_le_visage, se_lever, lever, licencier, lire, louer,
    maigrir, manger, marcher, maquiller, se_maquiller, se_marier, memoriser, mentir, mettre, mourir, musculation,
    nager, negocier, nettoyer,
    offrir, organiser, oublier, ouvrir,
    parler, participer, partir, passer_aspirateur, payer, peigner, se_peigner, peindre, perdre, planifier, porter, poser_question, postuler, pouvoir, preciser, prendre, preparer_repas, se_preparer, promener, se_promener, proposer, punir,
    ralentir, ranger, raser, se_raser, reagir, recevoir, se_reconcilier, reflechir, regarder_film, rejoindre, remercier, remplir, rencontrer, rendre, se_rendre, rentrer, reparer, repeter, repondre, se_reposer, respirer, rester, reussir, reveiller, se_reveiller, reviser, rougir, rouvrir,
    salir, samuser, sappeler, sauter, secher, se_secher, se_secher_les_cheveux, se_sentir, sentrainer, servir, setirer, signer, sortir, souffrir, souligner, se_souvenir, surligner,
    tenir, terminer, toucher, travailler, se_tromper, trouver,
    utiliser,
    vendre, venir, verdir, vieillir, vivre, voir, vouloir, voyager,
    yoga
].filter(Boolean);
