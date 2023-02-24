import './global.css'
import styles from './App.module.css'

import { Post } from './components/Post.jsx'
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { PostProps } from './interfaces/IPost'
import { v4 as uuidv4 } from 'uuid';
import { SidebarLogin } from './components/SidebarLogin'
import { SidebarForm } from './components/SidebarForm'
import { useState } from 'react'

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
      comments: [
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
      comments: [
        { type: 'paragraph', text: 'Hello folks,' },
        { type: 'paragraph', text: `I just finished the Monty Hall game exploring some exciting points about probability. I hope you like and cooperate to better. ` },
        { type: 'link', title: 'Monty Hall Game', url: 'https://montyhall.kayoio.com/' },
      ]
    }
  ]

  const [sidebarLogin, setSidebarLogin] = useState(true)
  const handleLogin = () => {
    setSidebarLogin(false)
    setSidebarForm(true)
  }

  const [sidebarForm, setSidebarForm] = useState(false)
  const handleEditProfile = () => {
    setSidebar(false)
    setSidebarForm(true)
  }
  const handleFormSave = () => {
    setSidebar(true)
    setSidebarForm(false)
  }

  const [sidebar, setSidebar] = useState(false)
  const handleFormClose = () => {
    // //TODO Check context API of Name, UrlAvatar and Rules is empty
    // //! If empty - Render Login Component
    // if (ContextAPI) {
    //   setSidebarForm(false)
    //   setSidebarLogin(true)
    //   setSidebar(false)
    // }
    // //! Else - Render Sidebar Component
    // else {
    //   setSidebarLogin(false)
    //   setSidebarForm(false)
    //   setSidebar(true)
    // }
  }
  const handleSignOut = () => {
    // TODO ContextApi Clear with params profile
    setSidebarForm(false)
    setSidebar(false)
    setSidebarLogin(true)
  }

  const renderSidebar = function () {
    return (

      sidebarLogin ?
        <SidebarLogin handleSignIn={handleLogin} />
        : sidebarForm ?
          <SidebarForm handleSubmit={handleFormSave} handleCancel={handleFormClose} />
          :
          <Sidebar handleEditProfile={handleEditProfile} handleSignOut={handleSignOut} />
    );
  }

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