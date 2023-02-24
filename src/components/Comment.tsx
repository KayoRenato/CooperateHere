import styles from './Comment.module.css'
import { Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { titleDateFormatted, dateTimeISO, dateRelativeToNowFormatted } from '../Utils/formatDate'
import { CommentProps } from '../interfaces/IComment'

export function Comment({ id, publishedAt, author, comments, onDeletedComment }: CommentProps) {

    function handleDeleteComment() {
        onDeletedComment!(id)
    }

    function renderComments(userComment: string[]): any {
        return userComment.map(comment => 
             <p key={comment}>{comment}</p>
        )
    }

    return (
        <div className={styles.comment}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author.name}</strong>
                            <time title={titleDateFormatted(publishedAt)} dateTime={dateTimeISO(publishedAt)}> {dateRelativeToNowFormatted(publishedAt)} </time>
                        </div>
                        <button onClick={handleDeleteComment} title='delete comment'>
                            <Trash size={20} weight="light" />
                        </button>
                    </header>
                    <div className={styles.cooperation}>
                        {renderComments(comments)}
                    </div>
                </div>

            </div>
        </div>

    )
}