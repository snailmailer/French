
export interface WritingPrompt {
    english: string;
    french: string;
}

export interface TenseCategory {
    name: string;
    prompts: WritingPrompt[];
}

export const writingData: TenseCategory[] = [
    // --- INDICATIF ---
    {
        name: "Indicatif Présent (A2)",
        prompts: [
            { french: "Je mange une pomme.", english: "I eat an apple." },
            { french: "Tu lis un livre.", english: "You read a book." },
            { french: "Il joue au foot.", english: "He plays soccer." },
            { french: "Nous allons au parc.", english: "We go to the park." },
            { french: "Vous boivez du café.", english: "You drink coffee." },
            { french: "Elles dansent bien.", english: "They dance well." },
            { french: "Je vois la maison.", english: "I see the house." },
            { french: "Tu écris une lettre.", english: "You write a letter." },
            { french: "Il parle français.", english: "He speaks French." },
            { french: "Nous marchons vite.", english: "We walk fast." }
        ]
    },
    {
        name: "Indicatif Présent (B2)",
        prompts: [
            { french: "Il gère ses responsabilités avec efficacité.", english: "He manages his responsibilities efficiently." },
            { french: "Nous analysons les conséquences de nos choix.", english: "We analyze the consequences of our choices." },
            { french: "Elle poursuit ses objectifs malgré les obstacles.", english: "She pursues her goals despite obstacles." },
            { french: "Tu coordonnes l'équipe technique habilement.", english: "You coordinate the technical team skillfully." },
            { french: "Ils évaluent la rentabilité du projet soigneusement.", english: "They evaluate the project's profitability carefully." },
            { french: "Je m'adapte aux réglementations nouvelles rapidement.", english: "I adapt to new regulations quickly." },
            { french: "Vous développez des solutions innovantes constamment.", english: "You develop innovative solutions constantly." },
            { french: "Elle surmonte ses luttes personnelles courageusement.", english: "She overcomes her personal struggles courageously." },
            { french: "Nous consultons les enquêtes consommateurs régulièrement.", english: "We consult consumer surveys regularly." },
            { french: "Il maîtrise les aspects techniques complexes aisément.", english: "He masters complex technical aspects easily." }
        ]
    },
    {
        name: "Indicatif Imparfait (A2)",
        prompts: [
            { french: "Je mangeais du pain.", english: "I was eating bread." },
            { french: "Tu lisais un journal.", english: "You were reading a newspaper." },
            { french: "Il jouait avec le chien.", english: "He was playing with the dog." },
            { french: "Nous allions à l'école.", english: "We were going to school." },
            { french: "Vous buviez du thé.", english: "You were drinking tea." },
            { french: "Elles dansaient dans la rue.", english: "They were dancing in the street." },
            { french: "Je voyais un film.", english: "I was seeing a movie." },
            { french: "Tu écrivais ton nom.", english: "You were writing your name." },
            { french: "Il parlait au téléphone.", english: "He was talking on the phone." },
            { french: "Nous marchions dans le jardin.", english: "We were walking in the garden." }
        ]
    },
    {
        name: "Indicatif Imparfait (B2)",
        prompts: [
            { french: "Je gestionnais plusieurs projets simultanément.", english: "I was managing several projects simultaneously." },
            { french: "Elle analysait les données méthodiquement.", english: "She was analyzing the data methodically." },
            { french: "Nous poursuivions nos rêves avec passion.", english: "We were pursuing our dreams with passion." },
            { french: "Tu coordonnais les réunions efficacement.", english: "You were coordinating meetings efficiently." },
            { french: "Ils évaluaient les risques continuellement.", english: "They were evaluating risks continuously." },
            { french: "Je m'adaptais aux changements fréquemment.", english: "I was adapting to changes frequently." },
            { french: "Vous développiez des stratégies gagnantes.", english: "You were developing winning strategies." },
            { french: "Elle surmontait les défis avec détermination.", english: "She was overcoming challenges with determination." },
            { french: "Nous consultions des experts régulièrement.", english: "We were consulting experts regularly." },
            { french: "Il maîtrisait les outils numériques parfaitement.", english: "He was mastering digital tools perfectly." }
        ]
    },
    {
        name: "Indicatif Passé Simple (A2)",
        prompts: [
            { french: "Je mangeai une pizza.", english: "I ate a pizza." },
            { french: "Tu lis un magazine.", english: "You read a magazine." },
            { french: "Il joua au tennis.", english: "He played tennis." },
            { french: "Nous allâmes au cinéma.", english: "We went to the cinema." },
            { french: "Vous bûtes du lait.", english: "You drank milk." },
            { french: "Elles dansèrent toute la nuit.", english: "They danced all night." },
            { french: "Je vis un oiseau.", english: "I saw a bird." },
            { french: "Tu écrivis une carte.", english: "You wrote a card." },
            { french: "Il parla longtemps.", english: "He spoke a long time." },
            { french: "Nous marchâmes loin.", english: "We walked far." }
        ]
    },
    {
        name: "Indicatif Passé Simple (B2)",
        prompts: [
            { french: "Il géra la crise avec autorité.", english: "He managed the crisis authoritatively." },
            { french: "Nous analysâmes les résultats minutieusement.", english: "We analyzed the results meticulously." },
            { french: "Elle poursuivit son enquête sans relâche.", english: "She pursued her investigation relentlessly." },
            { french: "Tu coordonnas l'événement parfaitement.", english: "You coordinated the event perfectly." },
            { french: "Ils évaluèrent les options stratégiquement.", english: "They evaluated the options strategically." },
            { french: "Je m'adaptai à l'environnement hostile.", english: "I adapted to the hostile environment." },
            { french: "Vous développâtes une approche innovante.", english: "You developed an innovative approach." },
            { french: "Elle surmonta ses peurs ancestrales.", english: "She overcame her ancestral fears." },
            { french: "Nous consultâmes les archives anciennes.", english: "We consulted ancient archives." },
            { french: "Il maîtrisa l'art oratoire rapidement.", english: "He mastered oratory quickly." }
        ]
    },
    {
        name: "Indicatif Futur Simple (A2)",
        prompts: [
            { french: "Je mangerai demain.", english: "I will eat tomorrow." },
            { french: "Tu liras ce livre.", english: "You will read this book." },
            { french: "Il jouera demain.", english: "He will play tomorrow." },
            { french: "Nous irons en ville.", english: "We will go to town." },
            { french: "Vous boirez de l'eau.", english: "You will drink water." },
            { french: "Elles danseront ce soir.", english: "They will dance tonight." },
            { french: "Je verrai mon ami.", english: "I will see my friend." },
            { french: "Tu écriras une lettre.", english: "You will write a letter." },
            { french: "Il parlera français.", english: "He will speak French." },
            { french: "Nous marcherons ensemble.", english: "We will walk together." }
        ]
    },
    {
        name: "Indicatif Futur Simple (B2)",
        prompts: [
            { french: "Il gérera la transition en douceur.", english: "He will manage the transition smoothly." },
            { french: "Nous analyserons les tendances futures.", english: "We will analyze future trends." },
            { french: "Elle poursuivra ses études à l'étranger.", english: "She will pursue her studies abroad." },
            { french: "Tu coordonneras les équipes internationales.", english: "You will coordinate international teams." },
            { french: "Ils évalueront l'impact environnemental.", english: "They will evaluate environmental impact." },
            { french: "Je m'adapterai aux nouvelles technologies.", english: "I will adapt to new technologies." },
            { french: "Vous développerez des applications mobiles.", english: "You will develop mobile applications." },
            { french: "Elle surmontera tous les obstacles futurs.", english: "She will overcome all future obstacles." },
            { french: "Nous consulterons des spécialistes demain.", english: "We will consult specialists tomorrow." },
            { french: "Il maîtrisera plusieurs langues bientôt.", english: "He will master several languages soon." }
        ]
    },
    {
        name: "Indicatif Passé Composé (A2)",
        prompts: [
            { french: "J'ai mangé une banane.", english: "I have eaten a banana." },
            { french: "Tu as lu un journal.", english: "You have read a newspaper." },
            { french: "Il a joué au basket.", english: "He has played basketball." },
            { french: "Nous sommes allés au zoo.", english: "We have gone to the zoo." },
            { french: "Vous avez bu du jus.", english: "You have drunk juice." },
            { french: "Elles ont dansé hier.", english: "They danced yesterday." },
            { french: "J'ai vu un chat.", english: "I have seen a cat." },
            { french: "Tu as écrit ton nom.", english: "You have written your name." },
            { french: "Il a parlé anglais.", english: "He has spoken English." },
            { french: "Nous avons marché longtemps.", english: "We walked a long time." }
        ]
    },
    {
        name: "Indicatif Passé Composé (B2)",
        prompts: [
            { french: "Il a géré la situation brillamment.", english: "He has managed the situation brilliantly." },
            { french: "Nous avons analysé les données récentes.", english: "We have analyzed recent data." },
            { french: "Elle a poursuivi ses ambitions professionnelles.", english: "She has pursued her professional ambitions." },
            { french: "Tu as coordonné l'ensemble du projet.", english: "You have coordinated the entire project." },
            { french: "Ils ont évalué les coûts cachés.", english: "They have evaluated hidden costs." },
            { french: "Je me suis adapté au climat extrême.", english: "I have adapted to extreme climate." },
            { french: "Vous avez développé une stratégie solide.", english: "You have developed a solid strategy." },
            { french: "Elle a surmonté ses complexes d'enfance.", english: "She has overcome childhood complexes." },
            { french: "Nous avons consulté plusieurs avocats.", english: "We have consulted several lawyers." },
            { french: "Il a maîtrisé les négociations difficiles.", english: "He has mastered difficult negotiations." }
        ]
    },
    {
        name: "Indicatif Plus-que-parfait (A2)",
        prompts: [
            { french: "J'avais mangé avant d'arriver.", english: "I had eaten before arriving." },
            { french: "Tu avais lu le livre.", english: "You had read the book." },
            { french: "Il avait joué dehors.", english: "He had played outside." },
            { french: "Nous étions allés au marché.", english: "We had gone to the market." },
            { french: "Vous aviez bu tout le café.", english: "You had drunk all the coffee." },
            { french: "Elles avaient dansé longtemps.", english: "They had danced a long time." },
            { french: "J'avais vu le film.", english: "I had seen the movie." },
            { french: "Tu avais écrit la lettre.", english: "You had written the letter." },
            { french: "Il avait parlé trop vite.", english: "He had spoken too fast." },
            { french: "Nous avions marché deux heures.", english: "We had walked two hours." }
        ]
    },
    {
        name: "Indicatif Plus-que-parfait (B2)",
        prompts: [
            { french: "Il avait géré plusieurs crises avant cela.", english: "He had managed several crises before that." },
            { french: "Nous avions analysé toutes les options possibles.", english: "We had analyzed all possible options." },
            { french: "Elle avait poursuivi des formations continues.", english: "She had pursued continuous training." },
            { french: "Tu avais coordonné des événements majeurs.", english: "You had coordinated major events." },
            { french: "Ils avaient évalué les risques potentiels.", english: "They had evaluated potential risks." },
            { french: "Je m'étais adapté à la culture locale.", english: "I had adapted to local culture." },
            { french: "Vous aviez développé des prototypes avancés.", english: "You had developed advanced prototypes." },
            { french: "Elle avait surmonté des épreuves personnelles.", english: "She had overcome personal trials." },
            { french: "Nous avions consulté des historiens renommés.", english: "We had consulted renowned historians." },
            { french: "Il avait maîtrisé les bases théoriques.", english: "He had mastered theoretical basics." }
        ]
    },
    {
        name: "Indicatif Passé Antérieur (A2)",
        prompts: [
            { french: "Dès que j'eus mangé, je dormis.", english: "As soon as I had eaten, I slept." },
            { french: "Tu eus lu le message.", english: "You had read the message." },
            { french: "Il eut joué le match.", english: "He had played the match." },
            { french: "Nous fûmes allés là-bas.", english: "We had gone there." },
            { french: "Vous eûtes bu l'eau.", english: "You had drunk the water." },
            { french: "Elles eurent dansé bien.", english: "They had danced well." },
            { french: "J'eus vu la photo.", english: "I had seen the photo." },
            { french: "Tu eus écrit vite.", english: "You had written quickly." },
            { french: "Il eut parlé clairement.", english: "He had spoken clearly." },
            { french: "Nous eûmes marché ensemble.", english: "We had walked together." }
        ]
    },
    {
        name: "Indicatif Passé Antérieur (B2)",
        prompts: [
            { french: "Dès qu'il eut géré la crise, il partit.", english: "As soon as he had managed the crisis, he left." },
            { french: "Nous eûmes analysé les faits avant la réunion.", english: "We had analyzed the facts before the meeting." },
            { french: "Elle eut poursuivi sa quête longtemps.", english: "She had pursued her quest a long time." },
            { french: "Tu eus coordonné tout parfaitement.", english: "You had coordinated everything perfectly." },
            { french: "Ils eurent évalué les conséquences graves.", english: "They had evaluated serious consequences." },
            { french: "Je me fus adapté complètement avant.", english: "I had completely adapted before." },
            { french: "Vous eûtes développé le concept clé.", english: "You had developed the key concept." },
            { french: "Elle eut surmonté ses doutes profonds.", english: "She had overcome deep doubts." },
            { french: "Nous eûmes consulté tous les experts.", english: "We had consulted all experts." },
            { french: "Il eut maîtrisé la situation tendue.", english: "He had mastered the tense situation." }
        ]
    },
    {
        name: "Indicatif Futur Antérieur (A2)",
        prompts: [
            { french: "J'aurai mangé avant midi.", english: "I will have eaten before noon." },
            { french: "Tu auras lu le texte.", english: "You will have read the text." },
            { french: "Il aura joué le jeu.", english: "He will have played the game." },
            { french: "Nous serons allés au parc.", english: "We will have gone to the park." },
            { french: "Vous aurez bu le thé.", english: "You will have drunk the tea." },
            { french: "Elles auront dansé beaucoup.", english: "They will have danced a lot." },
            { french: "J'aurai vu le spectacle.", english: "I will have seen the show." },
            { french: "Tu auras écrit tout.", english: "You will have written everything." },
            { french: "Il aura parlé avec elle.", english: "He will have spoken with her." },
            { french: "Nous aurons marché loin.", english: "We will have walked far." }
        ]
    },
    {
        name: "Indicatif Futur Antérieur (B2)",
        prompts: [
            { french: "Il aura géré toute la logistique d'ici là.", english: "He will have managed all logistics by then." },
            { french: "Nous aurons analysé toutes les propositions.", english: "We will have analyzed all proposals." },
            { french: "Elle aura poursuivi sa carrière internationale.", english: "She will have pursued her international career." },
            { french: "Tu auras coordonné les départements clés.", english: "You will have coordinated key departments." },
            { french: "Ils auront évalué l'efficacité globale.", english: "They will have evaluated overall efficiency." },
            { french: "Je me serai adapté parfaitement.", english: "I will have adapted perfectly." },
            { french: "Vous aurez développé des solutions durables.", english: "You will have developed sustainable solutions." },
            { french: "Elle aura surmonté ses limites personnelles.", english: "She will have overcome personal limits." },
            { french: "Nous aurons consulté tous les partenaires.", english: "We will have consulted all partners." },
            { french: "Il aura maîtrisé les défis techniques.", english: "He will have mastered technical challenges." }
        ]
    },
    // --- CONDITIONNEL ---
    {
        name: "Conditionnel Présent (A2)",
        prompts: [
            { french: "Je mangerais plus de fruits.", english: "I would eat more fruit." },
            { french: "Tu lirais tous les jours.", english: "You would read every day." },
            { french: "Il jouerait avec moi.", english: "He would play with me." },
            { french: "Nous irions en vacances.", english: "We would go on vacation." },
            { french: "Vous boiriez moins de soda.", english: "You would drink less soda." },
            { french: "Elles danseraient mieux.", english: "They would dance better." },
            { french: "Je verrais mes amis.", english: "I would see my friends." },
            { french: "Tu écrirais une histoire.", english: "You would write a story." },
            { french: "Il parlerait plus lentement.", english: "He would speak more slowly." },
            { french: "Nous marcherions ensemble.", english: "We would walk together." }
        ]
    },
    {
        name: "Conditionnel Présent (B2)",
        prompts: [
            { french: "Il gérerait mieux avec plus d'informations.", english: "He would manage better with more information." },
            { french: "Nous analyserions la situation différemment.", english: "We would analyze the situation differently." },
            { french: "Elle poursuivrait ses rêves sans hésiter.", english: "She would pursue her dreams without hesitation." },
            { french: "Tu coordonnerais parfaitement les efforts.", english: "You would coordinate efforts perfectly." },
            { french: "Ils évalueraient les priorités autrement.", english: "They would evaluate priorities differently." },
            { french: "Je m'adapterais facilement à tout changement.", english: "I would adapt easily to any change." },
            { french: "Vous développeriez des idées brillantes.", english: "You would develop brilliant ideas." },
            { french: "Elle surmonterait n'importe quel défi.", english: "She would overcome any challenge." },
            { french: "Nous consulterions des conseillers experts.", english: "We would consult expert advisors." },
            { french: "Il maîtriserait la langue rapidement.", english: "He would master the language quickly." }
        ]
    },
    {
        name: "Conditionnel Passé (A2)",
        prompts: [
            { french: "J'aurais mangé la pomme.", english: "I would have eaten the apple." },
            { french: "Tu aurais lu le livre.", english: "You would have read the book." },
            { french: "Il aurait joué hier.", english: "He would have played yesterday." },
            { french: "Nous serions allés plus loin.", english: "We would have gone further." },
            { french: "Vous auriez bu l'eau.", english: "You would have drunk the water." },
            { french: "Elles auraient dansé bien.", english: "They would have danced well." },
            { french: "J'aurais vu tout.", english: "I would have seen everything." },
            { french: "Tu aurais écrit mieux.", english: "You would have written better." },
            { french: "Il aurait parlé français.", english: "He would have spoken French." },
            { french: "Nous aurions marché vite.", english: "We would have walked fast." }
        ]
    },
    {
        name: "Conditionnel Passé (B2)",
        prompts: [
            { french: "Il aurait géré la crise plus tôt.", english: "He would have managed the crisis earlier." },
            { french: "Nous aurions analysé les risques mieux.", english: "We would have analyzed risks better." },
            { french: "Elle aurait poursuivi ses études à temps.", english: "She would have pursued studies on time." },
            { french: "Tu aurais coordonné tout sans problème.", english: "You would have coordinated everything without issue." },
            { french: "Ils auraient évalué les coûts précisément.", english: "They would have evaluated costs precisely." },
            { french: "Je me serais adapté immédiatement.", english: "I would have adapted immediately." },
            { french: "Vous auriez développé le projet clé.", english: "You would have developed the key project." },
            { french: "Elle aurait surmonté ses peurs facilement.", english: "She would have overcome fears easily." },
            { french: "Nous aurions consulté les bonnes personnes.", english: "We would have consulted the right people." },
            { french: "Il aurait maîtrisé la technique parfaite.", english: "He would have mastered perfect technique." }
        ]
    },
    // --- SUBJONCTIF ---
    {
        name: "Subjonctif Présent (A2)",
        prompts: [
            { french: "Il faut que je mange.", english: "I must eat." },
            { french: "Je veux que tu lises.", english: "I want you to read." },
            { french: "Il est bon qu'il joue.", english: "It is good that he plays." },
            { french: "Bien que nous allions tard.", english: "Although we go late." },
            { french: "J'espère que vous buvez.", english: "I hope you drink." },
            { french: "Il faut qu'elles dansent.", english: "They must dance." },
            { french: "Je veux que je voie.", english: "I want to see." },
            { french: "Bien qu'il écrive mal.", english: "Although he writes badly." },
            { french: "Il faut qu'il parle.", english: "He must speak." },
            { french: "J'espère que nous marchons.", english: "I hope we walk." }
        ]
    },
    {
        name: "Subjonctif Présent (B2)",
        prompts: [
            { french: "Il faut qu'il gère ses émotions mieux.", english: "It is necessary that he manage his emotions better." },
            { french: "Je veux que nous analysions ensemble.", english: "I want us to analyze together." },
            { french: "Il est possible qu'elle poursuive seule.", english: "It is possible that she pursue alone." },
            { french: "Bien qu'il coordonne parfaitement, vérifie.", english: "Although he coordinates perfectly, check." },
            { french: "J'espère qu'ils évaluent objectivement.", english: "I hope they evaluate objectively." },
            { french: "Il importe que je m'adapte rapidement.", english: "It is important that I adapt quickly." },
            { french: "Bien que vous développiez bien, innovez.", english: "Although you develop well, innovate." },
            { french: "Il faut qu'elle surmonte ses doutes.", english: "She must overcome her doubts." },
            { french: "Je doute que nous consultions assez.", english: "I doubt we consult enough." },
            { french: "Il est essentiel qu'il maîtrise cela.", english: "It is essential that he master that." }
        ]
    },
    {
        name: "Subjonctif Passé (A2)",
        prompts: [
            { french: "Il faut que j'aie mangé.", english: "I must have eaten." },
            { french: "Je veux que tu aies lu.", english: "I want you to have read." },
            { french: "Il est bon qu'il ait joué.", english: "It is good he has played." },
            { french: "Bien que nous soyons allés.", english: "Although we have gone." },
            { french: "J'espère que vous ayez bu.", english: "I hope you have drunk." },
            { french: "Il faut qu'elles aient dansé.", english: "They must have danced." },
            { french: "Je veux que j'aie vu.", english: "I want to have seen." },
            { french: "Bien qu'il ait écrit.", english: "Although he has written." },
            { french: "Il faut qu'il ait parlé.", english: "He must have spoken." },
            { french: "J'espère que nous ayons marché.", english: "I hope we have walked." }
        ]
    },
    {
        name: "Subjonctif Passé (B2)",
        prompts: [
            { french: "Il faut qu'il ait géré la crise hier.", english: "It is necessary he has managed the crisis yesterday." },
            { french: "Je suis content que nous ayons analysé bien.", english: "I am glad we have analyzed well." },
            { french: "Il est probable qu'elle ait poursuivi longtemps.", english: "It is probable she has pursued long." },
            { french: "Bien qu'il ait coordonné tout, erreur.", english: "Although he has coordinated everything, error." },
            { french: "J'espère qu'ils aient évalué correctement.", english: "I hope they have evaluated correctly." },
            { french: "Il importe que je me sois adapté.", english: "It is important I have adapted." },
            { french: "Bien que vous ayez développé bien.", english: "Although you have developed well." },
            { french: "Il faut qu'elle ait surmonté ses peurs.", english: "She must have overcome her fears." },
            { french: "Je doute que nous ayons consulté assez.", english: "I doubt we have consulted enough." },
            { french: "Il est essentiel qu'il ait maîtrisé cela.", english: "It is essential he has mastered that." }
        ]
    },
    {
        name: "Subjonctif Imparfait (A2 Simplified)",
        prompts: [
            { french: "Bien qu'il mangeât peu.", english: "Although he ate little." },
            { french: "Il fallait que tu lisses.", english: "It was necessary you read." },
            { french: "Il était temps qu'il jouât.", english: "It was time he played." },
            { french: "S'il allât plus vite.", english: "If he went faster." },
            { french: "Il était bon que vous bussiez.", english: "It was good you drank." },
            { french: "Qu'elles dansassent mieux.", english: "That they danced better." },
            { french: "Il convenait que je visse.", english: "It was fitting I saw." },
            { french: "Bien qu'il écrivît mal.", english: "Although he wrote badly." },
            { french: "Qu'il parlât clairement.", english: "That he spoke clearly." },
            { french: "Il semblait que nous marchassions.", english: "It seemed we walked." }
        ]
    },
    {
        name: "Subjonctif Imparfait (B2 Literary)",
        prompts: [
            { french: "Bien qu'il gérât mal, il apprit.", english: "Although he managed badly, he learned." },
            { french: "Il fallait que nous analysassions mieux.", english: "It was necessary we analyzed better." },
            { french: "Il était temps qu'elle poursuivît seule.", english: "It was time she pursued alone." },
            { french: "S'il coordonât mieux, succès.", english: "If he coordinated better, success." },
            { french: "Il était bon qu'ils évaluassent objectivement.", english: "It was good they evaluated objectively." },
            { french: "Il importait que je m'adaptasse.", english: "It mattered that I adapted." },
            { french: "Quoique vous développassiez bien.", english: "Although you developed well." },
            { french: "Il convenait qu'elle surmontât ses peurs.", english: "It was fitting she overcame her fears." },
            { french: "Il semblait que nous consultassions assez.", english: "It seemed we consulted enough." },
            { french: "Il paraissait qu'il maîtrisât cela.", english: "It appeared he mastered that." }
        ]
    },
    {
        name: "Subjonctif Plus-que-parfait (A2 Simplified)",
        prompts: [
            { french: "Bien qu'il eût mangé peu.", english: "Although he had eaten little." },
            { french: "Il fallait que tu eusses lu.", english: "It was necessary you had read." },
            { french: "Il était temps qu'il eût joué.", english: "It was time he had played." },
            { french: "S'il fût allé plus tôt.", english: "If he had gone earlier." },
            { french: "Il était bon que vous eussiez bu.", english: "It was good you had drunk." },
            { french: "Qu'elles eussent dansé bien.", english: "That they had danced well." },
            { french: "Il convenait que j'eusse vu.", english: "It was fitting I had seen." },
            { french: "Bien qu'il eût écrit vite.", english: "Although he had written quickly." },
            { french: "Qu'il eût parlé assez.", english: "That he had spoken enough." },
            { french: "Il semblait que nous eussions marché.", english: "It seemed we had walked." }
        ]
    },
    {
        name: "Subjonctif Plus-que-parfait (B2 Literary)",
        prompts: [
            { french: "Bien qu'il eût géré mal avant, il réussit.", english: "Although he had managed badly before, he succeeded." },
            { french: "Il était regrettable que nous eussions analysé tard.", english: "It was regrettable we had analyzed late." },
            { french: "Il était essentiel qu'elle eût poursuivi longtemps.", english: "It was essential she had pursued long." },
            { french: "S'il eût coordonné mieux, victoire.", english: "If he had coordinated better, victory." },
            { french: "Il était sage qu'ils eussent évalué bien.", english: "It was wise they had evaluated well." },
            { french: "Il importait que je me fusse adapté.", english: "It mattered I had adapted." },
            { french: "Quoique vous eussiez développé parfaitement.", english: "Although you had developed perfectly." },
            { french: "Il convenait qu'elle eût surmonté tout.", english: "It was fitting she had overcome everything." },
            { french: "Il semblait que nous eussions consulté assez.", english: "It seemed we had consulted enough." },
            { french: "Il paraissait qu'il eût maîtrisé l'art.", english: "It appeared he had mastered the art." }
        ]
    },
    // --- IMPÉRATIF ---
    {
        name: "Impératif Présent (A2)",
        prompts: [
            { french: "Mange ta soupe !", english: "Eat your soup!" },
            { french: "Lis ton livre !", english: "Read your book!" },
            { french: "Joue dehors !", english: "Play outside!" },
            { french: "Allons au parc !", english: "Let's go to the park!" },
            { french: "Buvez votre eau !", english: "Drink your water!" },
            { french: "Dansez maintenant !", english: "Dance now!" },
            { french: "Vois ça !", english: "See this!" },
            { french: "Écris ton nom !", english: "Write your name!" },
            { french: "Parle plus fort !", english: "Speak louder!" },
            { french: "Marchons vite !", english: "Let's walk fast!" }
        ]
    },
    {
        name: "Impératif Présent (B2)",
        prompts: [
            { french: "Gère cette situation calmement !", english: "Manage this situation calmly!" },
            { french: "Analysons les faits ensemble !", english: "Let's analyze the facts together!" },
            { french: "Poursuis tes ambitions !", english: "Pursue your ambitions!" },
            { french: "Coordonne les équipes efficacement !", english: "Coordinate the teams efficiently!" },
            { french: "Évalue les risques objectivement !", english: "Evaluate risks objectively!" },
            { french: "Adapte-toi rapidement !", english: "Adapt quickly!" },
            { french: "Développez des solutions créatives !", english: "Develop creative solutions!" },
            { french: "Surmonte tes peurs !", english: "Overcome your fears!" },
            { french: "Consultez les experts !", english: "Consult the experts!" },
            { french: "Maîtrise cette compétence !", english: "Master this skill!" }
        ]
    },
    {
        name: "Impératif Passé (A2)",
        prompts: [
            { french: "Aie mangé tout !", english: "Have eaten everything!" },
            { french: "Aie lu le texte !", english: "Have read the text!" },
            { french: "Aie joué bien !", english: "Have played well!" },
            { french: "Soyez allés là !", english: "Have gone there!" },
            { french: "Ayez bu l'eau !", english: "Have drunk the water!" },
            { french: "Ayez dansé fort !", english: "Have danced strongly!" },
            { french: "Aie vu ça !", english: "Have seen that!" },
            { french: "Aie écrit vite !", english: "Have written quickly!" },
            { french: "Aie parlé clair !", english: "Have spoken clearly!" },
            { french: "Ayez marché loin !", english: "Have walked far!" }
        ]
    },
    {
        name: "Impératif Passé (B2)",
        prompts: [
            { french: "Aie géré cela avant !", english: "Have managed that before!" },
            { french: "Ayez analysé les données !", english: "Have analyzed the data!" },
            { french: "Aie poursuivi tes rêves !", english: "Have pursued your dreams!" },
            { french: "Aie coordonné tout !", english: "Have coordinated everything!" },
            { french: "Ayez évalué bien !", english: "Have evaluated well!" },
            { french: "Sois adapté maintenant !", english: "Have adapted now!" },
            { french: "Ayez développé l'idée !", english: "Have developed the idea!" },
            { french: "Aie surmonté tes doutes !", english: "Have overcome your doubts!" },
            { french: "Ayez consulté les pros !", english: "Have consulted the pros!" },
            { french: "Aie maîtrisé la leçon !", english: "Have mastered the lesson!" }
        ]
    },
    // --- INFINITIF ---
    {
        name: "Infinitif Présent (A2)",
        prompts: [
            { french: "Manger sain est important.", english: "Eating healthy is important." },
            { french: "Lire beaucoup enseigne.", english: "Reading a lot teaches." },
            { french: "Jouer fait plaisir.", english: "Playing brings pleasure." },
            { french: "Aller au parc relaxe.", english: "Going to park relaxes." },
            { french: "Boire de l'eau hydrate.", english: "Drinking water hydrates." },
            { french: "Danser libère l'énergie.", english: "Dancing releases energy." },
            { french: "Voir des amis réjouit.", english: "Seeing friends rejoices." },
            { french: "Écrire exprime.", english: "Writing expresses." },
            { french: "Parler communique.", english: "Speaking communicates." },
            { french: "Marcher maintient la forme.", english: "Walking keeps fit." }
        ]
    },
    {
        name: "Infinitif Présent (B2)",
        prompts: [
            { french: "Gérer un projet demande méthode.", english: "Managing a project requires method." },
            { french: "Analyser les données révèle des patterns.", english: "Analyzing data reveals patterns." },
            { french: "Poursuivre ses rêves motive.", english: "Pursuing dreams motivates." },
            { french: "Coordonner des équipes unit.", english: "Coordinating teams unites." },
            { french: "Évaluer objectivement guide.", english: "Evaluating objectively guides." },
            { french: "S'adapter assure la survie.", english: "Adapting ensures survival." },
            { french: "Développer des idées crée.", english: "Developing ideas creates." },
            { french: "Surmonter les obstacles renforce.", english: "Overcoming obstacles strengthens." },
            { french: "Consulter des experts éclaire.", english: "Consulting experts enlightens." },
            { french: "Maîtriser une langue ouvre des portes.", english: "Mastering a language opens doors." }
        ]
    },
    {
        name: "Infinitif Passé (A2)",
        prompts: [
            { french: "Avoir mangé bien nourrit.", english: "Having eaten well nourishes." },
            { french: "Avoir lu enrichit.", english: "Having read enriches." },
            { french: "Avoir joué fatigue agréablement.", english: "Having played tires pleasantly." },
            { french: "Être allé au parc revigore.", english: "Having gone to park rejuvenates." },
            { french: "Avoir bu désaltère.", english: "Having drunk quenches thirst." },
            { french: "Avoir dansé energise.", english: "Having danced energizes." },
            { french: "Avoir vu amis réjouit.", english: "Having seen friends delights." },
            { french: "Avoir écrit soulage.", english: "Having written relieves." },
            { french: "Avoir parlé clarifie.", english: "Having spoken clarifies." },
            { french: "Avoir marché détend.", english: "Having walked relaxes." }
        ]
    },
    {
        name: "Infinitif Passé (B2)",
        prompts: [
            { french: "Avoir géré la crise prouve compétence.", english: "Having managed the crisis proves competence." },
            { french: "Avoir analysé bien prédit succès.", english: "Having analyzed well predicts success." },
            { french: "Avoir poursuivi longtemps montre détermination.", english: "Having pursued long shows determination." },
            { french: "Avoir coordonné tout démontre leadership.", english: "Having coordinated everything demonstrates leadership." },
            { french: "Avoir évalué précisément évite erreurs.", english: "Having evaluated precisely avoids errors." },
            { french: "S'être adapté rapidement sauve temps.", english: "Having adapted quickly saves time." },
            { french: "Avoir développé innovant impressionne.", english: "Having developed innovative impresses." },
            { french: "Avoir surmonté défis inspire.", english: "Having overcome challenges inspires." },
            { french: "Avoir consulté experts confirme.", english: "Having consulted experts confirms." },
            { french: "Avoir maîtrisé technique certifie expertise.", english: "Having mastered technique certifies expertise." }
        ]
    },
    // --- PARTICIPE ---
    {
        name: "Participe Présent (A2)",
        prompts: [
            { french: "Mangeant une pomme, souris.", english: "Eating an apple, smile." },
            { french: "Lis un livre, apprends.", english: "Reading a book, learn." },
            { french: "Jouant au foot, cours.", english: "Playing soccer, run." },
            { french: "Allant au magasin, achète.", english: "Going to store, buy." },
            { french: "Buvant du café, réveille-toi.", english: "Drinking coffee, wake up." },
            { french: "Dansant bien, amuse-toi.", english: "Dancing well, have fun." },
            { french: "Voyant la mer, émerveille.", english: "Seeing the sea, marvel." },
            { french: "Écrivant vite, termine.", english: "Writing quickly, finish." },
            { french: "Parlant fort, écoute.", english: "Speaking loudly, listen." },
            { french: "Marchant lentement, profite.", english: "Walking slowly, enjoy." }
        ]
    },
    {
        name: "Participe Présent (B2)",
        prompts: [
            { french: "Gérant plusieurs tâches, il excelle.", english: "Managing several tasks, he excels." },
            { french: "Analysant les tendances, prédis.", english: "Analyzing trends, predict." },
            { french: "Poursuivant l'objectif, persévère.", english: "Pursuing the goal, persevere." },
            { french: "Coordinant l'équipe, dirige.", english: "Coordinating the team, lead." },
            { french: "Évaluant les options, choisis.", english: "Evaluating options, choose." },
            { french: "S'adaptant vite, prospère.", english: "Adapting quickly, prosper." },
            { french: "Développant des idées, innove.", english: "Developing ideas, innovate." },
            { french: "Surmontant les peurs, avance.", english: "Overcoming fears, advance." },
            { french: "Consultant experts, décide sage.", english: "Consulting experts, decide wisely." },
            { french: "Maîtrisant la langue, communique fluide.", english: "Mastering the language, communicate fluently." }
        ]
    },
    {
        name: "Participe Passé (A2)",
        prompts: [
            { french: "Le repas mangé, dors.", english: "Meal having been eaten, sleep." },
            { french: "Le livre lu, raconte.", english: "Book having been read, tell." },
            { french: "Le jeu joué, gagne.", english: "Game having been played, win." },
            { french: "Le parc visité, rentre.", english: "Park having been visited, return." },
            { french: "L'eau bue, rafraîchis.", english: "Water having been drunk, refresh." },
            { french: "La danse finie, applaudis.", english: "Dance having finished, applaud." },
            { french: "Le film vu, discute.", english: "Movie having been seen, discuss." },
            { french: "La lettre écrite, envoie.", english: "Letter having been written, send." },
            { french: "Les mots parlés, écoute.", english: "Words having been spoken, listen." },
            { french: "Le chemin marché, arrive.", english: "Path having been walked, arrive." }
        ]
    },
    {
        name: "Participe Passé (B2)",
        prompts: [
            { french: "La crise gérée, avance.", english: "The crisis having been managed, move forward." },
            { french: "Les données analysées, conclus.", english: "Data having been analyzed, conclude." },
            { french: "L'ambition poursuivie, récolte.", english: "Ambition having been pursued, harvest." },
            { french: "Le projet coordonné, célèbre.", english: "Project having been coordinated, celebrate." },
            { french: "Les risques évalués, investis.", english: "Risks having been evaluated, invest." },
            { french: "Adapté au changement, prospère.", english: "Having adapted to change, prosper." },
            { french: "L'idée développée, lance.", english: "Idea having been developed, launch." },
            { french: "Les obstacles surmontés, triomphe.", english: "Obstacles having been overcome, triumph." },
            { french: "Les experts consultés, confirme.", english: "Experts having been consulted, confirm." },
            { french: "La compétence maîtrisée, enseigne.", english: "Skill having been mastered, teach." }
        ]
    },
    // --- GÉRONDIF ---
    {
        name: "Gérondif Présent (A2)",
        prompts: [
            { french: "En mangeant lentement, savoure.", english: "By eating slowly, savor." },
            { french: "En lisant attentivement, comprends.", english: "By reading attentively, understand." },
            { french: "En jouant ensemble, ris.", english: "By playing together, laugh." },
            { french: "En allant doucement, arrive.", english: "By going slowly, arrive." },
            { french: "En buvant beaucoup, hydrate.", english: "By drinking a lot, hydrate." },
            { french: "En dansant librement, libère.", english: "By dancing freely, free yourself." },
            { french: "En voyant bien, apprécie.", english: "By seeing well, appreciate." },
            { french: "En écrivant clairement, communique.", english: "By writing clearly, communicate." },
            { french: "En parlant simplement, explique.", english: "By speaking simply, explain." },
            { french: "En marchant régulièrement, reste fit.", english: "By walking regularly, stay fit." }
        ]
    },
    {
        name: "Gérondif Présent (B2)",
        prompts: [
            { french: "En gérant calmement, réussis.", english: "By managing calmly, succeed." },
            { french: "En analysant bien, anticipe.", english: "By analyzing well, anticipate." },
            { french: "En poursuivant constant, avance.", english: "By pursuing constantly, advance." },
            { french: "En coordonnant habilement, unit.", english: "By coordinating skillfully, unite." },
            { french: "En évaluant objectivement, décide.", english: "By evaluating objectively, decide." },
            { french: "En s'adaptant vite, survis.", english: "By adapting quickly, survive." },
            { french: "En développant créativement, innove.", english: "By developing creatively, innovate." },
            { french: "En surmontant courageusement, grandis.", english: "By overcoming courageously, grow." },
            { french: "En consultant régulièrement, progresse.", english: "By consulting regularly, progress." },
            { french: "En maîtrisant progressivement, excelle.", english: "By mastering progressively, excel." }
        ]
    },
    {
        name: "Gérondif Passé (A2)",
        prompts: [
            { french: "Après avoir mangé, dors bien.", english: "After having eaten, sleep well." },
            { french: "Après avoir lu, raconte-moi.", english: "After having read, tell me." },
            { french: "Après avoir joué, lave-toi.", english: "After having played, wash up." },
            { french: "Après être allé au parc, rentre.", english: "After having gone to park, return." },
            { french: "Après avoir bu, rince le verre.", english: "After having drunk, rinse the glass." },
            { french: "Après avoir dansé, bois de l'eau.", english: "After having danced, drink water." },
            { french: "Après avoir vu le film, discute.", english: "After having seen the movie, discuss." },
            { french: "Après avoir écrit, relis.", english: "After having written, reread." },
            { french: "Après avoir parlé, écoute.", english: "After having spoken, listen." },
            { french: "Après avoir marché, repose-toi.", english: "After having walked, rest." }
        ]
    },
    {
        name: "Gérondif Passé (B2)",
        prompts: [
            { french: "Après avoir géré la crise, repose-toi.", english: "After having managed the crisis, rest." },
            { french: "Après avoir analysé les faits, agis.", english: "After having analyzed facts, act." },
            { french: "Après avoir poursuivi longtemps, récolte.", english: "After having pursued long, harvest." },
            { french: "Après avoir coordonné tout, célèbre.", english: "After having coordinated everything, celebrate." },
            { french: "Après avoir évalué les risques, avance.", english: "After having evaluated risks, move forward." },
            { french: "Après m'être adapté, prospère.", english: "After having adapted, prosper." },
            { french: "Après avoir développé l'idée, partage.", english: "After having developed the idea, share." },
            { french: "Après avoir surmonté les défis, inspire.", english: "After having overcome challenges, inspire." },
            { french: "Après avoir consulté experts, confirme.", english: "After having consulted experts, confirm." },
            { french: "Après avoir maîtrisé la matière, enseigne.", english: "After having mastered the subject, teach." }
        ]
    }
];
