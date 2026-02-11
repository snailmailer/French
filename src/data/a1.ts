import type { LevelData } from './types';

export const a1Data: LevelData = {
    id: 'A1',
    title: 'A1 - Débutant',
    description: 'Programme complet pas-à-pas.',
    topics: [
        { id: 'greetings-1', title: 'Greetings, how are you', description: 'Salutations de base.', translation: 'Salutations', blocks: [{ type: 'examples', list: [{ french: 'Bonjour, comment ça va ?', translation: 'Hello, how are you?' }] }] },
        {
            id: 'nombres-0-69',
            title: 'Les nombres 0-69',
            description: 'Compter jusqu\'à 69.',
            translation: 'Numbers 0-69',
            blocks: [{
                type: 'markdown',
                content: `<table style="width:100%; border-collapse:collapse; margin-bottom:1rem;">
<thead><tr style="background:#333; color:white;"><th style="padding:8px;">Number</th><th style="padding:8px;">French</th><th style="padding:8px;">Pronunciation</th></tr></thead>
<tbody>
<tr><td style="padding:8px; border-bottom:1px solid #444;">0</td><td style="padding:8px; border-bottom:1px solid #444;">zéro</td><td style="padding:8px; border-bottom:1px solid #444;">zay-ro</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">1</td><td style="padding:8px; border-bottom:1px solid #444;">un</td><td style="padding:8px; border-bottom:1px solid #444;">uh</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">2</td><td style="padding:8px; border-bottom:1px solid #444;">deux</td><td style="padding:8px; border-bottom:1px solid #444;">uh</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">3</td><td style="padding:8px; border-bottom:1px solid #444;">trois</td><td style="padding:8px; border-bottom:1px solid #444;">twah</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">4</td><td style="padding:8px; border-bottom:1px solid #444;">quatre</td><td style="padding:8px; border-bottom:1px solid #444;">katr</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">5</td><td style="padding:8px; border-bottom:1px solid #444;">cinq</td><td style="padding:8px; border-bottom:1px solid #444;">sank</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">6</td><td style="padding:8px; border-bottom:1px solid #444;">six</td><td style="padding:8px; border-bottom:1px solid #444;">sees</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">7</td><td style="padding:8px; border-bottom:1px solid #444;">sept</td><td style="padding:8px; border-bottom:1px solid #444;">set</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">8</td><td style="padding:8px; border-bottom:1px solid #444;">huit</td><td style="padding:8px; border-bottom:1px solid #444;">weet</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">9</td><td style="padding:8px; border-bottom:1px solid #444;">neuf</td><td style="padding:8px; border-bottom:1px solid #444;">nuhf</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">10</td><td style="padding:8px; border-bottom:1px solid #444;">dix</td><td style="padding:8px; border-bottom:1px solid #444;">dees</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">11</td><td style="padding:8px; border-bottom:1px solid #444;">onze</td><td style="padding:8px; border-bottom:1px solid #444;">onz</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">12</td><td style="padding:8px; border-bottom:1px solid #444;">douze</td><td style="padding:8px; border-bottom:1px solid #444;">dooz</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">13</td><td style="padding:8px; border-bottom:1px solid #444;">treize</td><td style="padding:8px; border-bottom:1px solid #444;">trez</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">14</td><td style="padding:8px; border-bottom:1px solid #444;">quatorze</td><td style="padding:8px; border-bottom:1px solid #444;">ka-torz</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">15</td><td style="padding:8px; border-bottom:1px solid #444;">quinze</td><td style="padding:8px; border-bottom:1px solid #444;">kanz</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">16</td><td style="padding:8px; border-bottom:1px solid #444;">seize</td><td style="padding:8px; border-bottom:1px solid #444;">sez</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">17</td><td style="padding:8px; border-bottom:1px solid #444;">dix-sept</td><td style="padding:8px; border-bottom:1px solid #444;">dees-set</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">18</td><td style="padding:8px; border-bottom:1px solid #444;">dix-huit</td><td style="padding:8px; border-bottom:1px solid #444;">dees-weet</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">19</td><td style="padding:8px; border-bottom:1px solid #444;">dix-neuf</td><td style="padding:8px; border-bottom:1px solid #444;">dees-nuhf</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">20</td><td style="padding:8px; border-bottom:1px solid #444;">vingt</td><td style="padding:8px; border-bottom:1px solid #444;">van</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">30</td><td style="padding:8px; border-bottom:1px solid #444;">trente</td><td style="padding:8px; border-bottom:1px solid #444;">trant</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">40</td><td style="padding:8px; border-bottom:1px solid #444;">quarante</td><td style="padding:8px; border-bottom:1px solid #444;">ka-rant</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">50</td><td style="padding:8px; border-bottom:1px solid #444;">cinquante</td><td style="padding:8px; border-bottom:1px solid #444;">san-kant</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">60</td><td style="padding:8px; border-bottom:1px solid #444;">soixante</td><td style="padding:8px; border-bottom:1px solid #444;">swa-sant</td></tr>
</tbody></table>`,
                translation: 'Les bases des nombres.'
            }]
        },
        { id: 'verbes-sappeler-etre', title: 'Les verbes - s\'appeler, être', description: 'Se présenter.', translation: 'Verbs: To be named, To be', blocks: [{ type: 'conjugation', verb: 'S\'appeler', tense: 'Présent', data: [{ pronoun: 'Je', form: 'm\'appelle' }, { pronoun: 'Tu', form: 't\'appelles' }, { pronoun: 'Il', form: 's\'appelle' }, { pronoun: 'Nous', form: 'nous appelons' }, { pronoun: 'Vous', form: 'vous appelez' }, { pronoun: 'Ils', form: 's\'appellent' }] }, { type: 'conjugation', verb: 'Être', tense: 'Présent', data: [{ pronoun: 'Je', form: 'suis' }, { pronoun: 'Tu', form: 'es' }, { pronoun: 'Il', form: 'est' }, { pronoun: 'Nous', form: 'sommes' }, { pronoun: 'Vous', form: 'êtes' }, { pronoun: 'Ils', form: 'sont' }] }] },
        { id: 'articles-indefinis', title: 'Les articles indéfinis', description: 'Un, Une, Des.', translation: 'Indefinite Articles', blocks: [{ type: 'markdown', content: '<b>Un</b> (Masc), <b>Une</b> (Fem), <b>Des</b> (Plural).', translation: 'C\'est un livre. C\'est une chaise.' }] },
        { id: 'nationalities-1', title: 'Les nationalités', description: 'Pays et adjectifs.', translation: 'Nationalities', blocks: [{ type: 'examples', list: [{ french: 'Il est français / Elle est française.', translation: 'He is French / She is French.' }] }] },
        { id: 'time-schedule', title: 'Indiquer l\'heure et les horaires', description: 'Quelle heure est-il ?', translation: 'Telling Time', blocks: [{ type: 'examples', list: [{ french: 'Il est huit heures.', translation: 'It is 8 o\'clock.' }] }] },
        { id: 'exercice-er', title: 'Exercice Verbes en -er', description: 'Pratique des verbes réguliers.', translation: 'Exercise -er Verbs', blocks: [{ type: 'conjugation', verb: 'Parler', tense: 'Présent', data: [{ pronoun: 'Je', form: 'parle' }, { pronoun: 'Tu', form: 'parles' }, { pronoun: 'Il', form: 'parle' }, { pronoun: 'Nous', form: 'parlons' }, { pronoun: 'Vous', form: 'parlez' }, { pronoun: 'Ils', form: 'parlent' }] }] },
        { id: 'gouts', title: 'Exprimer vos goûts', description: 'Aimer, Adorer.', translation: 'Expressing tastes', blocks: [{ type: 'examples', list: [{ french: 'J\'aime le chocolat.', translation: 'I like chocolate.' }] }] },
        { id: 'loisirs', title: 'Les loisirs', description: 'Sports et activités.', translation: 'Hobbies', blocks: [{ type: 'examples', list: [{ french: 'Je joue au foot.', translation: 'I play soccer.' }] }] },
        { id: 'il-ya-cest', title: 'Il y a et c\'est et les adjectifs', description: 'Description.', translation: 'There is / It is / Adjectives', blocks: [{ type: 'markdown', content: '<b>Il y a</b> (Existence) vs <b>C\'est</b> (Identification).', translation: 'Il y a un chat. C\'est un petit chat.' }] },
        { id: 'aller-prendre', title: 'Les verbes aller et prendre', description: 'Mouvement et transport.', translation: 'Verbs Aller and Prendre', blocks: [{ type: 'conjugation', verb: 'Aller', tense: 'Présent', data: [{ pronoun: 'Je', form: 'vais' }, { pronoun: 'Tu', form: 'vas' }, { pronoun: 'Il', form: 'va' }, { pronoun: 'Nous', form: 'allons' }, { pronoun: 'Vous', form: 'allez' }, { pronoun: 'Ils', form: 'vont' }] }, { type: 'conjugation', verb: 'Prendre', tense: 'Présent', data: [{ pronoun: 'Je', form: 'prends' }, { pronoun: 'Tu', form: 'prends' }, { pronoun: 'Il', form: 'prend' }, { pronoun: 'Nous', form: 'prenons' }, { pronoun: 'Vous', form: 'prenez' }, { pronoun: 'Ils', form: 'prennent' }] }] },
        { id: 'negation', title: 'La négation', description: 'Ne... pas.', translation: 'Negation', blocks: [{ type: 'examples', list: [{ french: 'Je ne fume pas.', translation: 'I do not smoke.' }] }] },
        { id: 'prep-pays-ville', title: 'Les Prépositions + les pays, la ville', description: 'En, Au, Aux, À.', translation: 'Prepositions + Countries/Cities', blocks: [{ type: 'markdown', content: '<b>À</b> Paris. <b>En</b> France (F). <b>Au</b> Canada (M).', translation: 'Je vais à Paris.' }] },
        { id: 'demo-adj', title: 'Les adjectifs démonstratifs', description: 'Ce, Cet, Cette, Ces.', translation: 'Demonstrative Adjectives', blocks: [{ type: 'markdown', content: 'Ce (M), Cet (M+Vowel), Cette (F), Ces (Pl).', translation: 'Ce livre. Cette table.' }] },
        { id: 'sappeler-only', title: 'S\'appeler', description: 'Se présenter (Rappel).', translation: 'To be named', blocks: [{ type: 'examples', list: [{ french: 'Je m\'appelle Marie.', translation: 'My name is Marie.' }] }] },
        { id: 'nombres-dates-full', title: 'Les nombres (0-20), jours, mois, date', description: 'Calendrier.', translation: 'Numbers 0-20, Days, Months', blocks: [{ type: 'markdown', content: 'Lundi, Mardi, Mercredi... Janvier, Février...', translation: 'C\'est le 12 mars.' }] },
        { id: 'nombres-21-69', title: 'Les nombres 21-69', description: 'Compter (Suite).', translation: 'Numbers 21-69', blocks: [{ type: 'markdown', content: 'Vingt et un, Vingt-deux...', translation: 'Pratique des dizaines.' }] },
        { id: 'nombres-70-100', title: 'Les nombres (70-100)', description: 'Nombres complexes.', translation: 'Numbers 70-100', blocks: [{ type: 'markdown', content: '70 (soixante-dix), 80 (quatre-vingts), 90 (quatre-vingt-dix).', translation: 'Attention aux exceptions belges/suisses (septante/nonante).' }] },
        { id: 'comment-ca-va-2', title: 'Comment ça va ?', description: 'Salutations informelles.', translation: 'How are you?', blocks: [{ type: 'examples', list: [{ french: 'Ça roule ?', translation: 'How\'s it going?' }, { french: 'Ça va fort.', translation: 'Going strong.' }] }] },
        { id: 'pays-article', title: 'Les Pays, l\'article défini', description: 'Le Japon, La France.', translation: 'Countries & Definite Articles', blocks: [{ type: 'markdown', content: 'Le (M), La (F), Les (Pl) devant les pays.', translation: 'La France est belle.' }] },
        { id: 'pronoms-sujets', title: 'Les pronoms sujets, s\'appeler, être', description: 'Révision.', translation: 'Subject Pronouns, etc.', blocks: [{ type: 'markdown', content: 'Je, Tu, Il, Elle, On, Nous, Vous, Ils, Elles.', translation: 'Révision des bases.' }] },
        { id: 'objets-classe', title: 'Les objets de la classe', description: 'Le stylo, le cahier.', translation: 'Classroom Objects', blocks: [{ type: 'examples', list: [{ french: 'Un stylo', translation: 'A pen' }, { french: 'Une chaise', translation: 'A chair' }] }] },
        { id: 'quest-ce-que-cest', title: 'Qu\'est-ce que c\'est et les articles indéfinis', description: 'Identifier des objets.', translation: 'What is it?', blocks: [{ type: 'examples', list: [{ french: 'Qu\'est-ce que c\'est ? C\'est un livre.', translation: 'What is it? It\'s a book.' }] }] },
        { id: 'nat-avoir', title: 'Les nationalités et avoir', description: 'Avoir + Age/Caractéristique.', translation: 'Nationalities & To Have', blocks: [{ type: 'examples', list: [{ french: 'J\'ai un passeport français.', translation: 'I have a French passport.' }] }] },
        { id: 'nat-only', title: 'Les nationalités', description: 'Adjectifs de nationalité.', translation: 'Nationalities', blocks: [{ type: 'markdown', content: 'Masculin vs Féminin (Français / Française).', translation: 'Accord avec le sujet.' }] },
        {
            id: 'famille-mon-ton',
            title: 'La famille et les adjectifs possessifs - mon, ton, son',
            description: 'Singulier.',
            translation: 'Family & Possessives (Singular)',
            blocks: [{
                type: 'markdown',
                content: `<table style="width:100%; border-collapse:collapse;">
<thead><tr style="background:#333; color:white;"><th style="padding:8px;">Subject</th><th style="padding:8px;">Masc.</th><th style="padding:8px;">Fem.</th><th style="padding:8px;">Plural</th><th style="padding:8px;">English</th></tr></thead>
<tbody>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Je</td><td style="padding:8px; border-bottom:1px solid #444;">mon</td><td style="padding:8px; border-bottom:1px solid #444;">ma</td><td style="padding:8px; border-bottom:1px solid #444;">mes</td><td style="padding:8px; border-bottom:1px solid #444;">my</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Tu</td><td style="padding:8px; border-bottom:1px solid #444;">ton</td><td style="padding:8px; border-bottom:1px solid #444;">ta</td><td style="padding:8px; border-bottom:1px solid #444;">tes</td><td style="padding:8px; border-bottom:1px solid #444;">your</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Il/Elle</td><td style="padding:8px; border-bottom:1px solid #444;">son</td><td style="padding:8px; border-bottom:1px solid #444;">sa</td><td style="padding:8px; border-bottom:1px solid #444;">ses</td><td style="padding:8px; border-bottom:1px solid #444;">his/her</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Nous</td><td style="padding:8px; border-bottom:1px solid #444;">notre</td><td style="padding:8px; border-bottom:1px solid #444;">notre</td><td style="padding:8px; border-bottom:1px solid #444;">nos</td><td style="padding:8px; border-bottom:1px solid #444;">our</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Vous</td><td style="padding:8px; border-bottom:1px solid #444;">votre</td><td style="padding:8px; border-bottom:1px solid #444;">votre</td><td style="padding:8px; border-bottom:1px solid #444;">vos</td><td style="padding:8px; border-bottom:1px solid #444;">your</td></tr>
<tr><td style="padding:8px; border-bottom:1px solid #444;">Ils/Elles</td><td style="padding:8px; border-bottom:1px solid #444;">leur</td><td style="padding:8px; border-bottom:1px solid #444;">leur</td><td style="padding:8px; border-bottom:1px solid #444;">leurs</td><td style="padding:8px; border-bottom:1px solid #444;">their</td></tr>
</tbody></table>`,
                translation: 'Possession au singulier.'
            }]
        },
        { id: 'heure-possessifs-pluriel', title: 'L\'heure et les possessifs - nos, vos, leurs', description: 'Pluriel.', translation: 'Time & Possesives (Plural)', blocks: [{ type: 'markdown', content: 'Nos parents, Vos enfants.', translation: 'Possession au pluriel.' }] },
        { id: 'verbes-er-2', title: 'Les verbes en -er', description: 'Révision.', translation: '-er Verbs', blocks: [{ type: 'markdown', content: 'Manger, Chanter, Danser.', translation: 'Verbes réguliers.' }] },
        { id: 'parler-ecouter', title: 'Parler, écouter', description: 'Compétences.', translation: 'Speaking, Listening', blocks: [{ type: 'examples', list: [{ french: 'Écoutez le dialogue.', translation: 'Listen to the dialogue.' }] }] },
        { id: 'meme-diff', title: 'Même / Différent', description: 'Comparaison simple.', translation: 'Same / Different', blocks: [{ type: 'examples', list: [{ french: 'C\'est la même chose.', translation: 'It\'s the same thing.' }] }] },
        { id: 'parler-gouts', title: 'Parler de vos goûts', description: 'Expression personnelle.', translation: 'Talking about tastes', blocks: [{ type: 'examples', list: [{ french: 'Je préfère le thé.', translation: 'I prefer tea.' }] }] },
        { id: 'parler-loisirs', title: 'Parler de vos loisirs', description: 'Activités.', translation: 'Talking about hobbies', blocks: [{ type: 'examples', list: [{ french: 'Le week-end, je fais du vélo.', translation: 'On weekends, I bike.' }] }] },
        { id: 'parler-ville', title: 'Parler de votre ville', description: 'Description locale.', translation: 'Talking about your city', blocks: [{ type: 'examples', list: [{ french: 'Ma ville est grande et belle.', translation: 'My city is big and beautiful.' }] }] },
        { id: 'transport-moyens', title: 'Aller venir prendre et les moyens de transport', description: 'Se déplacer.', translation: 'Transport methods', blocks: [{ type: 'examples', list: [{ french: 'Je viens en voiture.', translation: 'I come by car.' }] }] },
        { id: 'prep-itineraire', title: 'Les prépositions de lieu, Indiquer l\'itinéraire', description: 'Directions.', translation: 'Prepositions & Directions', blocks: [{ type: 'markdown', content: 'Devant, Derrière, À côté de.', translation: 'Tournez à gauche.' }] },
        { id: 'prep-ville-pays-2', title: 'Les Prépositions + la ville, les pays', description: 'Révision géo.', translation: 'Prepositions (City/Country)', blocks: [{ type: 'markdown', content: 'En Italie, Au Portugal.', translation: 'Révision.' }] },
        { id: 'carte-postale', title: 'Écrire une carte postale', description: 'Expression écrite.', translation: 'Writing a postcard', blocks: [{ type: 'examples', list: [{ french: 'Bises de Paris !', translation: 'Kisses from Paris!' }] }] },
        { id: 'poser-questions', title: 'Poser des questions', description: 'Interrogation.', translation: 'Asking questions', blocks: [{ type: 'markdown', content: 'Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?', translation: 'Les mots interrogatifs.' }] }
    ]
};
