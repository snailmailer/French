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
export const accepter = createRegularVerb('accepter', 'ER');
export const samuser = createRegularVerb("s'amuser", 'ER', 'avoir', '', true);
export const sappeler = createRegularVerb("s'appeler", 'ER', 'avoir', '', true);
export const sasseoir = asseoir;
export const attendre = createRegularVerb('attendre', 'RE');
export const se_baigner = createRegularVerb('se baigner', 'ER', 'avoir', '', true);
export const se_brosser_les_dents = createRegularVerb('se brosser les dents', 'ER', 'avoir', '', true);
export const se_coiffer = createRegularVerb('se coiffer', 'ER', 'avoir', '', true);
export const se_concentrer = createRegularVerb('se concentrer', 'ER', 'avoir', '', true);
export const se_connecter = createRegularVerb('se connecter', 'ER', 'avoir', '', true);
export const se_coucher = createRegularVerb('se coucher', 'ER', 'avoir', '', true);
export const couvrir = createRegularVerb('couvrir', 'IR_COCOS');
export const se_debrouiller = createRegularVerb('se débrouiller', 'ER', 'avoir', '', true);
export const decouvrir = createRegularVerb('découvrir', 'IR_COCOS');
export const defendre = createRegularVerb('défendre', 'RE');
export const dejeuner = createRegularVerb('déjeuner', 'ER');
export const se_depecher = createRegularVerb('se dépêcher', 'ER', 'avoir', '', true);
export const dependre = createRegularVerb('dépendre', 'RE');
export const descendre = createRegularVerb('descendre', 'RE', 'etre');
export const se_deshabiller = createRegularVerb('se déshabiller', 'ER', 'avoir', '', true);
export const diner = createRegularVerb('dîner', 'ER');
export const se_disputer = createRegularVerb('se disputer', 'ER', 'avoir', '', true);
export const se_doucher = createRegularVerb('se doucher', 'ER', 'avoir', '', true);
export const sendormir = createRegularVerb("s'endormir", 'IR_DORMIR', 'avoir', '', true);
export const sennuyer = createRegularVerb("s'ennuyer", 'ER', 'avoir', '', true);
export const entendre = createRegularVerb('entendre', 'RE');
export const se_facher = createRegularVerb('se fâcher', 'ER', 'avoir', '', true);
export const shabiller = createRegularVerb("s'habiller", 'ER', 'avoir', '', true);
export const informer = createRegularVerb('informer', 'ER');
export const sinquieter = createRegularVerb("s'inquiéter", 'ER', 'avoir', '', true);
export const sinteresser = createRegularVerb("s'intéresser à", 'ER', 'avoir', '', true);
export const jouer = createRegularVerb('jouer', 'ER');
export const se_laver = createRegularVerb('se laver', 'ER', 'avoir', '', true);
export const se_laver_les_mains = createRegularVerb('se laver les mains', 'ER', 'avoir', '', true);
export const se_laver_le_visage = createRegularVerb('se laver le visage', 'ER', 'avoir', '', true);
export const se_lever = createRegularVerb('se lever', 'ER', 'avoir', '', true);
export const manger = createRegularVerb('manger', 'ER');
export const se_maquiller = createRegularVerb('se maquiller', 'ER', 'avoir', '', true);
export const se_marier = createRegularVerb('se marier', 'ER', 'avoir', '', true);
export const nettoyer = createRegularVerb('nettoyer', 'ER');
export const offrir = createRegularVerb('offrir', 'IR_COCOS');
export const oublier = createRegularVerb('oublier', 'ER');
export const parler = createRegularVerb('parler', 'ER');
export const se_peigner = createRegularVerb('se peigner', 'ER', 'avoir', '', true);
export const perdre = createRegularVerb('perdre', 'RE');
export const preciser = createRegularVerb('préciser', 'ER');
export const se_preparer = createRegularVerb('se préparer', 'ER', 'avoir', '', true);
export const se_promener = createRegularVerb('se promener', 'ER', 'avoir', '', true);
export const proposer = createRegularVerb('proposer', 'ER');
export const se_raser = createRegularVerb('se raser', 'ER', 'avoir', '', true);
export const se_reconcilier = createRegularVerb('se réconcilier', 'ER', 'avoir', '', true);
export const remercier = createRegularVerb('remercier', 'ER');
export const rendre = createRegularVerb('rendre', 'RE');
export const se_rendre = createRegularVerb('se rendre', 'RE', 'avoir', '', true);
export const rentrer = createRegularVerb('rentrer', 'ER', 'etre');
export const repondre = createRegularVerb('répondre', 'RE');
export const se_reposer = createRegularVerb('se reposer', 'ER', 'avoir', '', true);
export const se_reveiller = createRegularVerb('se réveiller', 'ER', 'avoir', '', true);
export const rouvrir = createRegularVerb('rouvrir', 'IR_COCOS');
export const se_secher = createRegularVerb('se sécher', 'ER', 'avoir', '', true);
export const se_secher_les_cheveux = createRegularVerb('se sécher les cheveux', 'ER', 'avoir', '', true);
export const se_sentir = createRegularVerb('se sentir', 'IR_DORMIR', 'avoir', '', true);
export const se_souvenir = souvenir;
export const souffrir = createRegularVerb('souffrir', 'IR_COCOS');
export const surfer = createRegularVerb('surfer', 'ER');
export const terminer = createRegularVerb('terminer', 'ER');
export const toucher = createRegularVerb('toucher', 'ER');
export const se_tromper = createRegularVerb('se tromper', 'ER', 'avoir', '', true);
export const vendre = createRegularVerb('vendre', 'RE');

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
