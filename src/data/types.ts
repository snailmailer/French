export interface ConjugationRow {
    pronoun: string;
    form: string;
}

export type ContentBlock =
    | { type: 'markdown'; content: string }
    | { type: 'conjugation'; verb: string; tense: string; data: ConjugationRow[] }
    | { type: 'examples'; list: { french: string; translation: string }[] };

export interface Topic {
    id: string;
    title: string;
    description: string;
    translation: string; // English
    blocks: ContentBlock[];
}

export interface LevelData {
    id: string;
    title: string;
    description: string;
    topics: Topic[];
}
