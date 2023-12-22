import Head from 'next/head'

const Meta = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <mata prpperty='og:title' content={pageTitle} />
    </Head>
  )
}

export default Meta
