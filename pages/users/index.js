import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'

const UserList = ({ users }) => {
  const props = { title: 'UserList' }
  return (
    <Container>
      <Meta pageTitle='ユーザーリスト' />
      <Hero {...props} />
      {users.map(user => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`} passHref>
              <h1>{user.name}</h1>
            </Link>
            <hr />
          </div>
        )
      })}
    </Container>
  )
}

const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: {
      users: data
    }
  }
}

export default UserList
export { getStaticProps }
