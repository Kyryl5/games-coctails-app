import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function GamesList() {
  //test ↓
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((response) => setData(response))
  }, [])
  //test  ↑

  return (
    <>
      <h1>GAMES</h1>
      {data.map((post) => (
        <Link key={post.title} to={`${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </>
  )
}
