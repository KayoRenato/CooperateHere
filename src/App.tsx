import './global.css'
import styles from './App.module.css'

import { Post } from './components/Post.jsx'
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

function App() {

  const posts = [
    {
      id: 1,
      author: {
        name: 'Thiago Carlos',
        role: 'Fullstack Dev',
        avatarUrl: 'https://github.com/tthiagocarlosdev.png'
      },
      publishedAt: new Date('2023-02-16 23:49:00'),
      comments: [
        { type: 'paragraph', text: 'Hey Guys 🤟🏼' },
        { type: 'paragraph', text: `Another project for my portfolio! It's a project made with Next. I will be happy if you rate and comment on improvements.` },
        { type: 'link', title: 'Crud Next',  url: 'https://crudnext.kayoio.com' },
      ]
    },
    {
      id: 2,
      author: {
        name: 'André Teixeira',
        role: 'Java Developer',
        avatarUrl: 'https://github.com/andretc94.png',
      },
      publishedAt: new Date('2023-02-18 07:02:34'),
      comments: [
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
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                comments={post.comments}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App