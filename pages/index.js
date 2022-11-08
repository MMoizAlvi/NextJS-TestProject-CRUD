import Head from 'next/head'
import { Suspense } from 'react'

import { ArticleList, Loading } from '../components/index'
import postsResponse from '../components/Api/PostsApi'

const Home = ({ articles }) => (
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

export const getStaticProps = async() => {
  const res = await postsResponse()
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}

export default Home
