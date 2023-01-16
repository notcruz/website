export type PageProperties = {
    id: string;
    status?: "Not started" | "In progress" | "Done" | "Featured";
    title?: string;
    tags?: string[];
    description?: string;
    slug?: string;
    created?: string;
    readTime?: number;
    cover?: string;
}

export type GithubRepo = {
    owner: string;
    repo: string;
    description: string;
    language: string;
    languageColor: string;
    stars: string;
    forks: string;
    link: string;
}