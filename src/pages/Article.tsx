import { useParams } from "react-router-dom";
import { useArticles } from "../contexts/ArticlesContext";
import { useEffect } from "react";

import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import Title from "../components/ArticlePage/Title";
import ArticleInfo from "../components/ArticlePage/ArticleInfo";
import SocialLinks from "../components/Footer/SocialLinks";
import Logo from "../components/NavBar/Logo";
import Description from "../components/Footer/Description";
import AboutLink from "../components/Footer/AboutLink";
import Subscription from "../components/ArticlePage/Subscription";

export default function Article() {
  const { articleId } = useParams();

  const { isLoading, error, article, getArticle } = useArticles();

  useEffect(() => {
    getArticle(articleId);
  }, [articleId, getArticle]);

  const { title, text, category, author } = article;

  if (isLoading) return <Loader />;
  if (error) return <Error message="Something went wrong..." />;

  return (
    <main className="max-w-[120rem] m-auto grid grid-cols-[70fr_30fr]">
      <section className="border-r border-2bOpacity py-[8rem] px-[9.6rem]">
        <header className="border-b border-2bOpacity pb-[6.4rem] mb-[6.4rem]">
          <Title title={title} />
          <ArticleInfo author={author} category={category} />
        </header>
        <section className="text-3xl font-serif leading-[3.2rem] mb-[3.2rem]">
          {text}
        </section>

        <Subscription />
      </section>

      <div className="py-[8rem] pl-[4.8rem] pr-[2.4rem]">
        <Logo mb="mb-[2.4rem]" />
        <Description />
        <div className="mb-[4rem]">
          <AboutLink link="about">Learn more about daily dose</AboutLink>
        </div>
        <SocialLinks />
      </div>
    </main>
  );
}
