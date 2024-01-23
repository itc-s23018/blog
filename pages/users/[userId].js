import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Pagination from 'components/pagination'

const User = ({ user, todos }) => {
  return (
    <Container>
      <Meta pageTitle={user.name} />
      <Hero />

      <div>
        <h1>ID: {user.id}</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>Name: {user.name}</h1>
        </div>

        {todos.map(todo => (
          <div key={todo.id} style={{ marginTop: '45px' }}>
            <h2 style={{ fontSize: '40px' }}>Title: {todo.title}</h2>
            <h3 style={{ fontSize: '25px' }}>
              Completed: {todo.completed ? 'true' : 'false'}
            </h3>
          </div>
        ))}

        <Pagination prevUrl='/users' prevText='ユーザーリストに戻る' />
        <br />
      </div>
    </Container>
  )
}

export async function getStaticProps (context) {
  const { params } = context
  const [userRes, todosRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.userId}`)
  ])

  const user = await userRes.json()
  const todos = await todosRes.json()

  return {
    props: {
      user,
      todos
    }
  }
}

export async function getStaticPaths () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  const paths = data.map(user => ({
    params: { userId: `${user.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export default User
