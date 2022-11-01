import { useRouter } from "next/router"
import Loading from "../../../components/Loading/Loading"
import ArticleDetails from '../../../components/Article/ArticleDetails'

const test = ({article}) => {
  const router = useRouter

  if (router.isFallback) {
    return <Loading />
  }

  return <ArticleDetails article={article}/>
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/articles`)
  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async(context) => {
  const res = await fetch(`http://localhost:3000/api/articles/${context.params.id}`)
  const article = await res.json()
  return {
    props: {
      article
    }
  }
}

export default test
