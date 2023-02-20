import { ArrowSquareOut } from 'phosphor-react'
import styles from './ContentPost.module.css'
import { CommentProps } from '../interfaces/IPost'


export function renderContent(comments: CommentProps[]) {
    return comments.map((comment: CommentProps, idx: any = comment) => {
        if (comment.type === 'paragraph') {
            return (
                <p key={idx}>{comment.text}</p>
            )
        }
        else if (comment.type === 'link') {
            return (
                <p key={idx}>
                    <a href={comment.url} target='_blank'>
                        {comment.title}
                        <ArrowSquareOut className={styles.iconNewTab} size={16} />
                    </a>
                </p>
            )
        } else {
            return <br key={idx} />
        }
    })
}