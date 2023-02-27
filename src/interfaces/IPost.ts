export interface PostProps {
    id: string;
    author: AuthorProps;
    publishedAt: Date;
    contents: ContentProps[];
    comments?: CommentProps[];
}
export interface AuthorProps {
    name: string;
    role?: string;
    avatarUrl?: string;
}
export interface ContentProps {
    type: 'paragraph' | 'link';
    text?: string;
    title?: string;
    url?: string;
}
export interface CommentProps {
    id: string;
    author: AuthorProps;
    comments: string[];
    publishedAt: Date;
}