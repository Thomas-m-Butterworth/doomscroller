import { getArticle } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
    const [article, setArticle] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams()

    useEffect(() => {
        setIsLoading(true);
        getArticle(article_id).then((article) => {
          setArticle(article);
          setIsLoading(false);
        });
      }, [article_id]);
    
      if (isLoading) return <p>loading...</p>;

  return <article className="single-article">
      <h2 className="article-title">{article.title}</h2>
      <p>{article.topic}: by {article.author}</p>
      <hr/>
      <p>{article.body}</p>
      </article>
}
