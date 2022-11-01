import articleStyle from '../../styles/article.module.css'
import Link from 'next/link'

const ApiArticleItem = ({article}) => {
  return(
    <Link legacyBehavior href='next/[id]' as={`next/${article.id}`}>
      <a className={articleStyle.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default ApiArticleItem
