import ApiArticleList from "../../../components/ApiArticle/ApiArticleList"

const test = ({articles}) => {
  return <ApiArticleList articles={articles}/>
}

export const getStaticProps = async() => {
  const res = await fetch(`http://localhost:3000/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}

export default test
