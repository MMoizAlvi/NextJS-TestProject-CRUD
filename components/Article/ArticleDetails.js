import Link from 'next/link'

import articleStyle from '../../styles/article.module.css'

const ArticleDetails = ({ article }) => (
  <>
    <h1>{article.article}</h1>
    <p>{article.body}</p>
    <br />
    <nav className={articleStyle.btn}><Link href='/'>Back</Link></nav>
  </>
)


export default ArticleDetails
