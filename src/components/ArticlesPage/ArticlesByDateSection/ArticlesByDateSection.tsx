import { useEffect, useState } from "react";
import { useArticles } from "../../../contexts/ArticlesContext";

import Title from "../ArticlesByTopicSection/Title";
import Years from "./Years";
import ArticlesList from "./ArticlesList";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";

export default function ArticlesByDateSection() {
  const { articlesDate, getDates, isLoading, error } = useArticles();
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    getDates();
  }, [getDates]);

  return (
    <section id="by-date" className="max-w-[120rem] m-auto py-[9.6rem]">
      <Title>Articles by Date</Title>

      {isLoading && <Loader />}
      {error && <Error message="Something went wrong..." />}
      {!isLoading && !error && (
        <>
          <Years
            articlesDate={articlesDate}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
          <div className="border-b border-gray-50 pb-[2.4rem]">
            <Title>{selectedYear.toString()}</Title>
          </div>
          <ArticlesList selectedYear={selectedYear} />
        </>
      )}
    </section>
  );
}
