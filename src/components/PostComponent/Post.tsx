import styles from './Post.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { HandsClapping } from 'phosphor-react'
import { Avatar } from "../Avatar";
import { Comment } from '../Comment'
import { renderContent } from './ContentPost';
import { CommentProps } from '../../interfaces/IComment';
import { PostProps } from '../../interfaces/IPost';
import userData from '../../context/userData';
import { dateRelativeToNowFormatted, dateTimeISO, titleDateFormatted } from '../../Utils/formatDate';


export function Post({ author, publishedAt, contents }: PostProps) {

    const commentsList: CommentProps[] = [
        {
            id: uuidv4(),
            author: { name: 'Pandora' },
            comments: [
                'Hello folk,',
                'Great Job!'
            ],
            publishedAt: new Date('2023-02-17 03:12:56')
        },
        {
            id: uuidv4(),
            author: {
                name: 'Kayo Renato',
                avatarUrl: 'https://github.com/KayoRenato.png'
            },
            comments: ['Congratulations 👏🏼'],
            publishedAt: new Date('2023-02-17 11:02:32')
        },
        {
            id: uuidv4(),
            author: {
                name: 'Thiago Carlos',
                avatarUrl: 'https://github.com/tthiagocarlosdev.png'
            },
            comments: ['Thanks Guys 🤟🏼'],
            publishedAt: new Date('2023-02-18 21:03:12')
        },
    ]

    const [clapNumber, setClapNumber] = useState(0)
    const [newComment, setNewComment] = useState('');
    const [showComments, setShowComments] = useState(commentsList);
    const isNewCommentEmpty = newComment.length === 0;

    const { userComment } = userData()

    const hasUserComment = !!userComment?.name && !!userComment?.role

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewComment(event.target.value);
    }

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        const treatedComment = newComment.split('\n')

        const currentComment: CommentProps = {
            id: uuidv4(),
            author: {
                name: userComment!.name,
                avatarUrl: userComment!.avatar
            },
            comments: treatedComment,
            publishedAt: new Date()
        }

        setShowComments([...showComments, currentComment]);
        setNewComment('');
    }

    function handleDeleteComment(commentToDelete: string) {
        const commentsLastDeleted = showComments.filter(comment => {
            return comment.id !== commentToDelete
        })
        setShowComments(commentsLastDeleted);

    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} hasBorder />
                    <div>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={titleDateFormatted(publishedAt)} dateTime={dateTimeISO(publishedAt)}> {dateRelativeToNowFormatted(publishedAt)} </time>
            </header>
            <div className={styles.content}>
                {renderContent(contents)}
            </div>
            <div className={styles.clap}>
                <button title='clap' onClick={() => setClapNumber(clapNumber + 1)}>
                    <HandsClapping size={16} weight='light' />
                    <span>
                        Clap
                    </span>
                    {clapNumber}
                </button>
            </div>

            {hasUserComment ? (
                <div className={styles.commentForm}>
                    <strong>Cooperate here</strong>
                <form onSubmit={handleCreateNewComment}>
                    <textarea
                        placeholder='Send your feedback'
                        rows={5}
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
            ) : (
                <>
                    <br />
                    <hr />
                    <br />
                </>
            )}

            <div className={styles.commentList}>
                {showComments.map(item => {
                    return (
                        <Comment
                            key={item.id}
                            id={item.id}
                            author={item.author}
                            comments={item.comments}
                            publishedAt={item.publishedAt}
                            onDeletedComment={handleDeleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}