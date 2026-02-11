import { createRegularVerb } from '../verbUtils';
import { aimer } from './aimer';
import { aller } from './aller';
import { avoir } from './avoir';
import { devoir } from './devoir';
import { dire } from './dire';
import { etre } from './etre';
import { faire } from './faire';
import { mettre } from './mettre';
import { pouvoir } from './pouvoir';
import { prendre } from './prendre';
import { savoir } from './savoir';
import { venir } from './venir';
import { voir } from './voir';
import { vouloir } from './vouloir';

// --- Regular ER ---
export const accepter = createRegularVerb('accepter', 'ER');
export const amuser = createRegularVerb('amuser', 'ER');
export const baigner = createRegularVerb('baigner', 'ER');
export const coiffer = createRegularVerb('coiffer', 'ER');
export const connecter = createRegularVerb('connecter', 'ER');
export const coucher = createRegularVerb('coucher', 'ER');
export const deshabiller = createRegularVerb('déshabiller', 'ER');
export const dejeuner = createRegularVerb('déjeuner', 'ER');
export const diner = createRegularVerb('dîner', 'ER');
export const doucher = createRegularVerb('doucher', 'ER');
export const habiller = createRegularVerb('habiller', 'ER');
export const informer = createRegularVerb('informer', 'ER');
export const jouer = createRegularVerb('jouer', 'ER');
export const laver = createRegularVerb('laver', 'ER');
export const lever = createRegularVerb('lever', 'ER');
export const maquiller = createRegularVerb('maquiller', 'ER');
export const manger = createRegularVerb('manger', 'ER');
export const nettoyer = createRegularVerb('nettoyer', 'ER');
export const oublier = createRegularVerb('oublier', 'ER');
export const parler = createRegularVerb('parler', 'ER');
export const peigner = createRegularVerb('peigner', 'ER');
export const preciser = createRegularVerb('préciser', 'ER');
export const promener = createRegularVerb('promener', 'ER');
export const proposer = createRegularVerb('proposer', 'ER');
export const remercier = createRegularVerb('remercier', 'ER');
export const rentrer = createRegularVerb('rentrer', 'ER', 'etre');
export const reveiller = createRegularVerb('réveiller', 'ER');
export const raser = createRegularVerb('raser', 'ER');
export const secher = createRegularVerb('sécher', 'ER');
export const surfer = createRegularVerb('surfer', 'ER');
export const terminer = createRegularVerb('terminer', 'ER');
export const toucher = createRegularVerb('toucher', 'ER');

// --- Regular IR ---
export const couvrir = createRegularVerb('couvrir', 'IR_COCOS');
export const decouvrir = createRegularVerb('découvrir', 'IR_COCOS');
export const endormir = createRegularVerb('endormir', 'IR_ISS');
export const offrir = createRegularVerb('offrir', 'IR_COCOS');
export const rouvrir = createRegularVerb('rouvrir', 'IR_COCOS');
export const souffrir = createRegularVerb('souffrir', 'IR_COCOS');

// --- Regular RE ---
export const attendre = createRegularVerb('attendre', 'RE');
export const dependre = createRegularVerb('dépendre', 'RE');
export const defendre = createRegularVerb('défendre', 'RE');
export const descendre = createRegularVerb('descendre', 'RE', 'etre');
export const entendre = createRegularVerb('entendre', 'RE');
export const perdre = createRegularVerb('perdre', 'RE');
export const rendre = createRegularVerb('rendre', 'RE');
export const repondre = createRegularVerb('répondre', 'RE');
export const vendre = createRegularVerb('vendre', 'RE');

export const verbs = [
    aimer, aller, avoir, devoir, dire, etre, faire, mettre, pouvoir, prendre, savoir, venir, voir, vouloir,
    accepter, amuser, baigner, coiffer, connecter, coucher, deshabiller, dejeuner, diner, doucher,
    habiller, informer, jouer, laver, lever, maquiller, manger, nettoyer, oublier, parler, peigner,
    preciser, promener, proposer, remercier, rentrer, reveiller, raser, secher, surfer, terminer, toucher,
    couvrir, decouvrir, endormir, offrir, rouvrir, souffrir,
    attendre, dependre, defendre, descendre, entendre, perdre, rendre, repondre, vendre
];
