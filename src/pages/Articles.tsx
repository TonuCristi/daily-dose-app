import ArticlesByDateSection from "../components/ArticlesPage/ArticlesByDateSection/ArticlesByDateSection";
import ArticlesByTopicSection from "../components/ArticlesPage/ArticlesByTopicSection/ArticlesByTopicSection";
import HeroSection from "../components/ArticlesPage/HeroSection/HeroSection";
import SearchSection from "../components/ArticlesPage/SearchSection/SearchSection";

export default function Articles() {
  return (
    <main className="">
      <HeroSection />
      <SearchSection />
      <ArticlesByTopicSection />
      <ArticlesByDateSection />
    </main>
  );
}
