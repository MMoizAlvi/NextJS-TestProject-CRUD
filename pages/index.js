import Head from 'next/head'
import { Suspense } from 'react'

import { ArticleList, Loading } from '../components/index'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>tools</title>
        <meta name='keywords' content='web, dev'/>
      </Head>
      <Suspense fallback={<Loading />}>
        <ArticleList articles={articles}/>
      </Suspense>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(process.env.GET_POSTS)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}
