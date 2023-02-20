import { AuthorProps } from "./IPost";

export interface CommentProps {
    id: string;
    author: AuthorProps;
    comments: string[];
    publishedAt: Date;
    onDeletedComment?: (id: string) => void;
}
