import { articles } from '../../../data';

export default function handler(req, res) {
  const article = articles.filter((article) => article.id === req.query.id)
  res.status(200).json(article[0])
}
