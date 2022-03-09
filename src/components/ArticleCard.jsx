import { Link } from "react-router-dom";

export default function ArticleCard({
  article_id,
  title,
  topic,
  author,
  body,
  created_at,
  votes,
  comment_count,
}) {
  return (
    <article className="article-card" id={article_id}>
      <div className="article-info">
      <Link to={`/articles/${article_id}`} className="article-link" ><h2>{title}</h2></Link>
        <p>{topic}</p>
        <p className="subtitle"> by {author}</p>
      </div>
    </article>
    
  );
}
