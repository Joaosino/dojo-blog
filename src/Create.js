import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('hello')
  const [body, setBody] = useState('This is your text')
  const [author, setAuthor] = useState('this is the author')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault()
    const blog = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New blog added')
      setIsPending(false)
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a New B log</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label> Blog Body: </label>
        <input
          type="textarea"
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <label> Blog author: </label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {!isPending && <button> Add Blog </button>}
        {isPending && <button disabled> Loading... </button>}
      </form>
      <div>
        <h1>See here your new blog</h1>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>{author}</p>
      </div>
    </div>
  )
}

;<div className="create">
  <h2>Add a New Component</h2>
</div>
export default Create
