import styles from './Comment.module.css'
import { useState } from 'react'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { titleDateFormatted, dateTimeISO, dateRelativeToNowFormatted } from '../Utils/formatDate'
import { renderComment } from './CommentBox'

import { AuthorProps, CommentProps } from './Post'
export interface ContentProps {
    id: number;
    author: AuthorProps;
    comments: CommentProps[];
    dateTime: Date;
    likes?: number;
    onDeletedComment: (id: number) => void;
}


export function Comment({ id, dateTime, author, comments, onDeletedComment }: ContentProps) {
    const [clapNumber, setClapNumber] = useState(0)

    function handleDeleteComment() {
        onDeletedComment(id)
    }

    return (

        <div className={styles.comment}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author.name}</strong>
                            <time title={titleDateFormatted(dateTime)} dateTime={dateTimeISO(dateTime)}> {dateRelativeToNowFormatted(dateTime)} </time>
                        </div>
                        <button onClick={handleDeleteComment} title='delete comment'>
                            <Trash size={20} weight="light" />
                        </button>
                    </header>
                    {renderComment(comments)}
                </div>
                <footer >
                    <button title='clap comment' onClick={() => setClapNumber(clapNumber + 1)}>
                        <ThumbsUp size={16} />
                        <span>
                            Clap
                        </span>
                        {clapNumber}
                    </button>
                </footer>
            </div>
        </div>

    )
}