import './global.css'
import styles from './App.module.css'

import { Post } from './components/PostComponent/Post'
import { Header } from "./components/Header"
import { v4 as uuidv4 } from 'uuid';
import { renderSidebar } from './components/SidebarComponent/SidebarMain'
import { PostProps } from './interfaces/IPost';


function App() {

  const posts: PostProps[] = [
    {
      id: uuidv4(),
      author: {
        name: 'Thiago Carlos',
        role: 'Fullstack Dev',
        avatarUrl: 'https://github.com/tthiagocarlosdev.png'
      },
      publishedAt: new Date('2023-02-16 23:49:00'),
      contents: [
        { type: 'paragraph', text: 'Hey Guys 🤟🏼' },
        { type: 'paragraph', text: `Another project for my portfolio! It's a project made with Next. I will be happy if you rate and comment on improvements.` },
        { type: 'link', title: 'Crud Next', url: 'https://crudnext.kayoio.com' },
      ]
    },
    {
      id: uuidv4(),
      author: {
        name: 'André Teixeira',
        role: 'Java Developer',
        avatarUrl: 'https://github.com/andretc94.png',
      },
      publishedAt: new Date('2023-02-18 07:02:34'),
      contents: [
        { type: 'paragraph', text: 'Hello folks,' },
        { type: 'paragraph', text: `I just finished the Monty Hall game exploring some exciting points about probability. I hope you like and cooperate to better. ` },
        { type: 'link', title: 'Monty Hall Game', url: 'https://montyhall.kayoio.com/' },
      ]
    }
  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div>
          {renderSidebar()}
        </div>
        <main>
          {posts.map(post => {
            return (
              <Post key={post.id}
                id={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                contents={post.contents}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App