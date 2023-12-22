import Head from 'next/head'

import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocal, siteType, siteIcon } = siteMeta

const Meta = ({ pageTitle }) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  return (
    <Head>
      <title>{title}</title>
      <mata prpperty='og:title' content={title} />
    </Head>
  )
}

export default Meta
