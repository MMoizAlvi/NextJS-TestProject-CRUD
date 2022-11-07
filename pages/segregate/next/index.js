import { Suspense } from 'react'

import { ApiArticleList, Loading } from '../../../components/index'

const ArticleIndex = ({ articles }) => (
  <Suspense fallback={<Loading />}>
    <ApiArticleList articles={articles}/>
  </Suspense>
)

export const getStaticProps = async() => {
  const res = await fetch(process.env.GET_ARTICLES)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

export default ArticleIndex
