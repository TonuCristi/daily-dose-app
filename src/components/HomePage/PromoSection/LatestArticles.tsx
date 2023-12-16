import { useArticles } from "../../../contexts/ArticlesContext";

import ArticleLink from "./ArticleLink";

export default function LatestArticles() {
  const { data } = useArticles();

  return (
    <ul className="flex flex-col">
      {data
        ?.slice(0)
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .map(({ id, title, query }, i) =>
          i < 6 ? <ArticleLink key={id} title={title} query={query} /> : null
        )}
    </ul>
  );
}
