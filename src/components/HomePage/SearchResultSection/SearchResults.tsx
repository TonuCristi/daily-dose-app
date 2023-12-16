import { useSearchParams } from "react-router-dom";
import { useArticles } from "../../../contexts/ArticlesContext";
import ArticleLink from "./ArticleLink";

export default function SearchResults() {
  const { data } = useArticles();
  const [searchParams] = useSearchParams();

  const filteredData = data.filter(({ title, text }) =>
    (title + text).toLowerCase().includes(searchParams.get("s") ?? "")
  );

  console.log(filteredData);

  return (
    <section className="max-w-[120rem] m-auto py-[6.4rem]">
      <ul className="">
        <li className="grid grid-cols-[65fr_15fr_15fr_5fr] text-3xl font-medium border-b border-gray-50 py-[2.4rem]">
          <div>Name</div>
          <div>Category</div>
          <div>Date published</div>
        </li>
        {filteredData.map((article) => (
          <ArticleLink key={article.id} article={article} />
        ))}
      </ul>
    </section>
  );
}
