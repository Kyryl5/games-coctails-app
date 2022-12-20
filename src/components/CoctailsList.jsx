import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CoctailsList() {
  //test   ↓
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((response) => setData(response))
  }, [])
  //test  ↑

  return (
    <>
      <h1>COCTAILS</h1>
      {data.map((post) => (
        <Link key={post.title} to={`${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </>
  )
}
