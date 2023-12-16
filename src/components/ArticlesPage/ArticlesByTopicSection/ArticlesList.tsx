import { useArticles } from "../../../contexts/ArticlesContext";

import ArticleLink from "../../HomePage/PromoSection/ArticleLink";

export default function ArticlesList({ category }: { category: string }) {
  const { data } = useArticles();

  return (
    <ul className="mb-[2.4rem]">
      {data
        .filter((article) => article.category === category)
        .map(({ id, title, query }, i) =>
          i < 3 ? <ArticleLink key={id} title={title} query={query} /> : null
        )}
    </ul>
  );
}
