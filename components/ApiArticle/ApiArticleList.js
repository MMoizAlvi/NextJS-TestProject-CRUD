import articleStyle from '../../styles/article.module.css'
import ApiArticleItem from './ApiArticleItem'

const ArticleList = ({articles}) => {
  return(
    <div className={articleStyle.grid}>
      {articles.map((article) => (<ApiArticleItem article={article} key={article.id}/>))}
    </div>
  )
}

export default ArticleList
