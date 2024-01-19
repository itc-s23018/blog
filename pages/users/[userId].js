import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const User = ({ user }) => {
  const props = { title: 'UserList' }

  return (
    <Container>
      <Meta pageTitle='ユーザーネーム' />
      <Hero {...props} />
      <div>
        <h1>ID: {user.id}</h1>
        <h1>Name: {user.name}</h1>
        <br />
      </div>
    </Container>
  )
}

export async function getStaticProps (context) {
  const { params } = context
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  )
  const user = await res.json()

  return {
    props: {
      user
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
