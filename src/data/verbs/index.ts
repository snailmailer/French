import { createRegularVerb } from '../verbUtils';
import { aller } from './aller';
import { asseoir } from './asseoir';
import { avoir } from './avoir';
import { devoir } from './devoir';
import { faire } from './faire';
import { pouvoir } from './pouvoir';
import { souvenir } from './souvenir';
import { vouloir } from './vouloir';

// --- Regular Verbs from User List ---
export const accepter = createRegularVerb('accepter', 'ER', 'avoir', 'to accept');
export const samuser = createRegularVerb("s'amuser", 'ER', 'avoir', 'to have fun', true);
export const sappeler = createRegularVerb("s'appeler", 'ER', 'avoir', 'to be called', true);
export const sasseoir = asseoir;
export const attendre = createRegularVerb('attendre', 'RE', 'avoir', 'to wait');
export const se_baigner = createRegularVerb('se baigner', 'ER', 'avoir', 'to bathe/swim', true);
export const se_brosser_les_dents = createRegularVerb('se brosser les dents', 'ER', 'avoir', 'to brush one\'s teeth', true);
export const se_coiffer = createRegularVerb('se coiffer', 'ER', 'avoir', 'to fix one\'s hair', true);
export const se_concentrer = createRegularVerb('se concentrer', 'ER', 'avoir', 'to concentrate', true);
export const se_connecter = createRegularVerb('se connecter', 'ER', 'avoir', 'to connect', true);
export const se_coucher = createRegularVerb('se coucher', 'ER', 'avoir', 'to go to bed', true);
export const couvrir = createRegularVerb('couvrir', 'IR_COCOS', 'avoir', 'to cover');
export const se_debrouiller = createRegularVerb('se débrouiller', 'ER', 'avoir', 'to manage/cope', true);
export const decouvrir = createRegularVerb('découvrir', 'IR_COCOS', 'avoir', 'to discover');
export const defendre = createRegularVerb('défendre', 'RE', 'avoir', 'to defend');
export const dejeuner = createRegularVerb('déjeuner', 'ER', 'avoir', 'to have lunch');
export const se_depecher = createRegularVerb('se dépêcher', 'ER', 'avoir', 'to hurry', true);
export const dependre = createRegularVerb('dépendre', 'RE', 'avoir', 'to depend');
export const descendre = createRegularVerb('descendre', 'RE', 'etre', 'to go down');
export const se_deshabiller = createRegularVerb('se déshabiller', 'ER', 'avoir', 'to undress', true);
export const diner = createRegularVerb('dîner', 'ER', 'avoir', 'to have dinner');
export const se_disputer = createRegularVerb('se disputer', 'ER', 'avoir', 'to argue', true);
export const se_doucher = createRegularVerb('se doucher', 'ER', 'avoir', 'to shower', true);
export const sendormir = createRegularVerb("s'endormir", 'IR_DORMIR', 'avoir', 'to fall asleep', true);
export const sennuyer = createRegularVerb("s'ennuyer", 'ER', 'avoir', 'to get bored', true);
export const entendre = createRegularVerb('entendre', 'RE', 'avoir', 'to hear');
export const se_facher = createRegularVerb('se fâcher', 'ER', 'avoir', 'to get angry', true);
export const shabiller = createRegularVerb("s'habiller", 'ER', 'avoir', 'to get dressed', true);
export const informer = createRegularVerb('informer', 'ER', 'avoir', 'to inform');
export const sinquieter = createRegularVerb("s'inquiéter", 'ER', 'avoir', 'to worry', true);
export const sinteresser = createRegularVerb("s'intéresser à", 'ER', 'avoir', 'to be interested in', true);
export const jouer = createRegularVerb('jouer', 'ER', 'avoir', 'to play');
export const se_laver = createRegularVerb('se laver', 'ER', 'avoir', 'to wash oneself', true);
export const se_laver_les_mains = createRegularVerb('se laver les mains', 'ER', 'avoir', 'to wash one\'s hands', true);
export const se_laver_le_visage = createRegularVerb('se laver le visage', 'ER', 'avoir', 'to wash one\'s face', true);
export const se_lever = createRegularVerb('se lever', 'ER', 'avoir', 'to get up', true);
export const manger = createRegularVerb('manger', 'ER', 'avoir', 'to eat');
export const se_maquiller = createRegularVerb('se maquiller', 'ER', 'avoir', 'to put on makeup', true);
export const se_marier = createRegularVerb('se marier', 'ER', 'avoir', 'to get married', true);
export const nettoyer = createRegularVerb('nettoyer', 'ER', 'avoir', 'to clean');
export const offrir = createRegularVerb('offrir', 'IR_COCOS', 'avoir', 'to offer');
export const oublier = createRegularVerb('oublier', 'ER', 'avoir', 'to forget');
export const parler = createRegularVerb('parler', 'ER', 'avoir', 'to speak');
export const se_peigner = createRegularVerb('se peigner', 'ER', 'avoir', 'to comb one\'s hair', true);
export const perdre = createRegularVerb('perdre', 'RE', 'avoir', 'to lose');
export const preciser = createRegularVerb('préciser', 'ER', 'avoir', 'to specify');
export const se_preparer = createRegularVerb('se préparer', 'ER', 'avoir', 'to get ready', true);
export const se_promener = createRegularVerb('se promener', 'ER', 'avoir', 'to take a walk', true);
export const proposer = createRegularVerb('proposer', 'ER', 'avoir', 'to propose');
export const se_raser = createRegularVerb('se raser', 'ER', 'avoir', 'to shave', true);
export const se_reconcilier = createRegularVerb('se réconcilier', 'ER', 'avoir', 'to reconcile', true);
export const remercier = createRegularVerb('remercier', 'ER', 'avoir', 'to thank');
export const rendre = createRegularVerb('rendre', 'RE', 'avoir', 'to give back');
export const se_rendre = createRegularVerb('se rendre', 'RE', 'avoir', 'to go to', true);
export const rentrer = createRegularVerb('rentrer', 'ER', 'etre', 'to return/go home');
export const repondre = createRegularVerb('répondre', 'RE', 'avoir', 'to answer');
export const se_reposer = createRegularVerb('se reposer', 'ER', 'avoir', 'to rest', true);
export const se_reveiller = createRegularVerb('se réveiller', 'ER', 'avoir', 'to wake up', true);
export const rouvrir = createRegularVerb('rouvrir', 'IR_COCOS', 'avoir', 'to reopen');
export const se_secher = createRegularVerb('se sécher', 'ER', 'avoir', 'to dry oneself', true);
export const se_secher_les_cheveux = createRegularVerb('se sécher les cheveux', 'ER', 'avoir', 'to dry one\'s hair', true);
export const se_sentir = createRegularVerb('se sentir', 'IR_DORMIR', 'avoir', 'to feel', true);
export const se_souvenir = souvenir;
export const souffrir = createRegularVerb('souffrir', 'IR_COCOS', 'avoir', 'to suffer');
export const surfer = createRegularVerb('surfer', 'ER', 'avoir', 'to surf');
export const terminer = createRegularVerb('terminer', 'ER', 'avoir', 'to finish');
export const toucher = createRegularVerb('toucher', 'ER', 'avoir', 'to touch');
export const se_tromper = createRegularVerb('se tromper', 'ER', 'avoir', 'to be mistaken', true);
export const vendre = createRegularVerb('vendre', 'RE', 'avoir', 'to sell');

export const verbs = [
    accepter,
    aller,
    samuser,
    sappeler,
    sasseoir,
    attendre,
    avoir,
    se_baigner,
    se_brosser_les_dents,
    se_coiffer,
    se_concentrer,
    se_connecter,
    se_coucher,
    couvrir,
    se_debrouiller,
    decouvrir,
    defendre,
    dejeuner,
    se_depecher,
    dependre,
    descendre,
    se_deshabiller,
    devoir,
    diner,
    se_disputer,
    se_doucher,
    sendormir,
    sennuyer,
    entendre,
    se_facher,
    faire,
    shabiller,
    informer,
    sinquieter,
    sinteresser,
    jouer,
    se_laver,
    se_laver_les_mains,
    se_laver_le_visage,
    se_lever,
    manger,
    se_maquiller,
    se_marier,
    nettoyer,
    offrir,
    oublier,
    parler,
    se_peigner,
    perdre,
    pouvoir,
    preciser,
    se_preparer,
    se_promener,
    proposer,
    se_raser,
    se_reconcilier,
    remercier,
    rendre,
    se_rendre,
    rentrer,
    repondre,
    se_reposer,
    se_reveiller,
    rouvrir,
    se_secher,
    se_secher_les_cheveux,
    se_sentir,
    se_souvenir,
    souffrir,
    surfer,
    terminer,
    toucher,
    se_tromper,
    vendre,
    vouloir
];
