import { ArticleItem } from '../index'

import articleStyle from '../../styles/article.module.css'

const ArticleList = ({ articles }) => (
  <div className={articleStyle.grid}>
    {articles.map((article) => (<ArticleItem article={article} key={article.id}/>))}
  </div>
)

export default ArticleList
