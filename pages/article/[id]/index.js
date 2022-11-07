import { Suspense } from 'react'

import { ArticleDetails, Loading } from '../../../components/index'

const Article = ({ article }) => (
  <Suspense fallback={<Loading />}>
    <ArticleDetails article={article}/>
  </Suspense>
)

export const getServerSideProps = async (context) => {
  const res = await fetch(`${process.env.GET_POSTS}/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

export default Article
