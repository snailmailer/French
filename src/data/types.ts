export interface ConjugationRow {
    pronoun: string;
    form: string;
}

export interface VerbMood {
    [tense: string]: ConjugationRow[];
}

export interface VerbConjugations {
    Indicatif: VerbMood;
    Subjonctif: VerbMood;
    Conditionnel: VerbMood;
    Impératif: VerbMood;
    Participe: VerbMood;
}

export interface VerbDefinition {
    infinitive: string;
    translation: string;
    group: 1 | 2 | 3;
    auxiliary: 'avoir' | 'être';
    rules: string[];
    conjugations: VerbConjugations;
}


export type ContentBlock =
    | { type: 'markdown'; content: string; translation?: string } // Added translation for split view
    | { type: 'conjugation'; verb: string; tense: string; data: ConjugationRow[] }
    | { type: 'examples'; list: { french: string; translation: string }[] }
    | { type: 'formula'; items: string[] }; // New Formula block type

export interface Topic {
    id: string;
    title: string;
    description: string;
    translation: string;
    formula?: string; // High-level formula for the topic
    blocks: ContentBlock[];
}

export interface LevelData {
    id: string;
    title: string;
    description: string;
    topics: Topic[];
}
