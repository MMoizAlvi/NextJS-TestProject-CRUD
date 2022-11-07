import ApiArticleItem from './ApiArticleItem'

import articleStyle from '../../styles/article.module.css'

const ArticleList = ({ articles }) => (
  <div className={articleStyle.grid}>
    {articles.map((article) => (<ApiArticleItem article={article} key={article.id}/>))}
  </div>
)

export default ArticleList
