export interface PostProps {
    id: string;
    author: AuthorProps;
    publishedAt: Date;
    comments: CommentProps[];
}

export interface AuthorProps {
    name: string;
    role?: string;
    avatarUrl?: string;
}

export interface CommentProps {
    type: string;
    text?: string;
    title?: string;
    url?: string;
}