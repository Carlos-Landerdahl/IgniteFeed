import { Header } from "./components/Header"
import { Post, PostProps } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import './global.css'

import styles from './App.module.css';

interface Posts extends PostProps {
  id: number
}

const posts:Posts[] = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/carlos-landerdahl.png',
      name: 'Carlos Roberto',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Bem vindos a mais um projeto usando React.js, este projeto foi feito dentro do curso da Rocketseat, curta e comente este post 🤯'},
      {type: 'link', content: 'https://www.linkedin.com/in/carloslanderdahl/'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Alencar',
      role: 'CTO'
    },
    content: [
      {type: 'paragraph', content: 'Boa tarde pessoal 😎'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'diego3g/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Mais um projeto finalizado e testado, espero que gostem 🥳'},
      {type: 'link', content: 'maykbrito/nfts'}
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]

export function App(){
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </div>
  )
}
