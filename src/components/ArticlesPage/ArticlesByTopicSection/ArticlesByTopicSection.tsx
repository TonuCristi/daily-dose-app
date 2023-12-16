import { useEffect } from "react";
import { useArticles } from "../../../contexts/ArticlesContext";

import Title from "./Title";
import ArticlesListByTopic from "./ArticlesListByTopic";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";

export default function ArticlesByTopicSection() {
  const { categories, getCategories, isLoading, error } = useArticles();

  const catsFiltered = categories.filter(
    (cat, i) => categories.indexOf(cat) === i
  );

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <section id="by-topic" className="bg-gray-150">
      <div className="max-w-[120rem] m-auto py-[9.6rem]">
        <Title>Articles by Topic</Title>
        {isLoading && <Loader />}
        {error && <Error message="Something went wrong" />}
        {!isLoading && !error && (
          <div className="grid grid-cols-2 gap-[6.4rem]">
            {catsFiltered.map((cat) => (
              <ArticlesListByTopic key={cat} category={cat} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
