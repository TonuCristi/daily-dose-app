import { useArticles } from "../../../contexts/ArticlesContext";
import ArticleLink from "./ArticleLink";

export default function ArticlesList({
  selectedYear,
}: {
  selectedYear: number;
}) {
  const { data } = useArticles();

  return (
    <ul className="">
      {data
        .filter(
          (article) =>
            new Date(article.created_at).getFullYear() === selectedYear
        )
        .map(({ id, title, created_at, query }) => (
          <ArticleLink
            key={id}
            title={title}
            createdAt={created_at}
            query={query}
          />
        ))}
    </ul>
  );
}
