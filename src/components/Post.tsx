import styles from './Post.module.css'
import { useState } from 'react';

import { Avatar } from "./Avatar";
import { Comment } from './Comment'
import { renderComment } from './CommentBox';
import { dateRelativeToNowFormatted, titleDateFormatted, dateTimeISO } from '../Utils/formatDate';


export function Post({ author, publishedAt, comments }) {

    const commentsList = [
        {
            id: 1,
            author: { name: 'Pandora' },
            comments: [
                { type: 'paragraph', text: 'Hello folk,' },
                { type: 'paragraph', text: 'Great Job!' }
            ],
            dateTime: new Date('2023-02-17 03:12:56')
        },
        {
            id: 2,
            author: {
                name: 'Kayo Renato',
                avatarUrl: 'https://github.com/KayoRenato.png'
            },
            comments: [
                { type: 'paragraph', text: 'Congratulations 👏🏼' }
            ],
            dateTime: new Date('2023-02-17 11:02:32')
        },
        {
            id: 3,
            author: {
                name: 'Thiago Carlos',
                avatarUrl: 'https://github.com/tthiagocarlosdev.png'
            },
            comments: [
                { type: 'paragraph', text: 'Thanks Guys 🤟🏼' }
            ],
            dateTime: new Date('2023-02-18 21:03:12')
        },
    ]

    const [newComment, setNewComment] = useState('');
    const [showComments, setShowComments] = useState(commentsList);
    const [numbComments, setNumbComments] = useState(showComments.length);

    function handleCreateNewComment() {
        event.preventDefault()
        const commentStructure = {
            id: setNumbComments(numbComments + 1),
            author: {
                name: 'Kayo Renato',
                avatarUrl: 'https://github.com/KayoRenato.png'
            },
            comments: [
                { type: 'paragraph', text: newComment }
            ],
            dateTime: new Date()
        }

        setShowComments([...showComments, commentStructure]);
        setNewComment('');
    }

    function handleNewCommentChange() {
        setNewComment(event.target.value);
    }

    function handleDeleteComment(commentToDelete) {
        const commentsLastDeleded = showComments.filter(comment => {
            return comment.id !== commentToDelete
        })
        setShowComments(commentsLastDeleded);

    }

    const isNewCommentEmpty = newComment.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar url={author.avatarUrl} hasBorder />
                    <div>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={titleDateFormatted(publishedAt)} dateTime={dateTimeISO(publishedAt)}> {dateRelativeToNowFormatted(publishedAt)} </time>
            </header>
            <div className={styles.content}>
                {renderComment(comments)}
            </div>
            <div className={styles.commentForm}>
                <strong>Send your comment</strong>
                <form onSubmit={handleCreateNewComment}>
                    <textarea
                        placeholder='Send your feedback...'
                        rows="5"
                        name='comment'
                        value={newComment}
                        onChange={handleNewCommentChange}
                        required
                    />
                    <footer>
                        <button type='submit' disabled={isNewCommentEmpty}>Post</button>
                    </footer>
                </form>
            </div>
            <div className={styles.commentList}>
                {showComments.map((item, idx = item.id) => {
                    return (
                        <Comment
                            key={idx}
                            id={item.id}
                            author={item.author}
                            comments={item.comments}
                            dateTime={item.dateTime}
                            onDeletedComment={handleDeleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}