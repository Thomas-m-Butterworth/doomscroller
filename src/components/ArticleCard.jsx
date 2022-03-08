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
        <h2>{topic.toUpperCase()}</h2>
        <p className="subtitle"> by {author}</p>
        <p className="article-body">{body}</p>
      </div>
      <div className="article-extras">
        <p>Votes: {votes}</p>
        <p>View Comments({comment_count})</p>
      </div>
    </article>
  );
}
