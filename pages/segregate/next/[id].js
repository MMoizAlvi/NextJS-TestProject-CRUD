import { Suspense } from 'react'
import { useRouter } from 'next/router'

import { ArticleDetails, Loading } from '../../../components/index'
import articleResponse from '../../../components/Api/ArticleApi'
import showArticleApi from '../../../components/Api/ShowArticleApi'

const Article = ({ article }) => {
  const router = useRouter

  if (router.isFallback)
    return <Loading />

  return (
    <Suspense fallback={<Loading/>}>
      <ArticleDetails article={article}/>
    </Suspense>
  )
}

export async function getStaticPaths() {
  const res = await articleResponse()
  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async(context) => {
  const res = await showArticleApi(context)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

export default Article
