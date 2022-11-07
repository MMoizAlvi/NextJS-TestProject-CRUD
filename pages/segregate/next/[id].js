import { Suspense } from 'react'
import { useRouter } from 'next/router'

import { ArticleDetails, Loading } from '../../../components/index'

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
  const res = await fetch(process.env.GET_ARTICLES)
  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async(context) => {
  const res = await fetch(`${process.env.GET_ARTICLES}/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

export default Article
