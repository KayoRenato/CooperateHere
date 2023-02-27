import { ArrowSquareOut } from 'phosphor-react'
import { ContentProps } from '../../interfaces/IPost'
import styles from './ContentPost.module.css'



export function renderContent(comments: ContentProps[]) {
    return comments.map((comment: ContentProps, idx: any = comment) => {
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