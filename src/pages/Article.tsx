import { useParams } from "react-router-dom";
import { useArticles } from "../contexts/ArticlesContext";
import { useEffect } from "react";

export default function Article() {
  const { articleId } = useParams();

  const { article, getArticle } = useArticles();

  useEffect(() => {
    getArticle(articleId);
  }, [articleId, getArticle]);

  const { title } = article;

  return <div>asda{title}</div>;
}
