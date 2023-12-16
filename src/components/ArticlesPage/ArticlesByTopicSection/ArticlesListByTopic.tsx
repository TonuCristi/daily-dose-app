import AboutLink from "../../Footer/AboutLink";

import ArticlesList from "./ArticlesList";
import CategoryTitle from "./CategoryTitle";

export default function ArticlesListByTopic({
  category,
}: {
  category: string;
}) {
  return (
    <div className="flex flex-col">
      <CategoryTitle category={category} />
      <ArticlesList category={category} />

      <div className="mt-auto">
        <AboutLink link={category}>Read more about {category}</AboutLink>
      </div>
    </div>
  );
}
