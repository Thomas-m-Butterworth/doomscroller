import { getArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading..</p>;


  return <section className="articles-container">
      {articles.articles.map(({ article_id, title, topic, author, body, created_at, votes, comment_count }) => {
          return (
            <ArticleCard
            key={article_id}
            article_id={article_id}
            title={title}
            topic={topic}
            author={author}
            body={body}
            created_at={created_at}
            votes={votes}
            comment_count={comment_count}
            />
          );
        })}</section>;
}
