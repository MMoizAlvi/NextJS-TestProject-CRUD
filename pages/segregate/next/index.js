import { Suspense } from 'react'

import articleResponse from '../../../components/Api/ArticleApi'
import { ApiArticleList, Loading } from '../../../components/index'

const ArticleIndex = ({ articles }) => (
  <Suspense fallback={<Loading />}>
    <ApiArticleList articles={articles}/>
  </Suspense>
)

export const getStaticProps = async() => {
  const res =  await articleResponse()
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

export default ArticleIndex
