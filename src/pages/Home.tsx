import { useSearchParams } from "react-router-dom";

import DescriptionSection from "../components/HomePage/DescriptionSection/DescriptionSection";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import NewsletterSection from "../components/HomePage/NewsletterSection/NewsletterSection";
import PromoSection from "../components/HomePage/PromoSection/PromoSection";
import SearchResultSection from "../components/HomePage/SearchResultSection/SearchResultSection";

export default function Home() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("s");

  if (searchValue) {
    return <SearchResultSection />;
  }

  return (
    <main className="">
      <HeroSection />
      <DescriptionSection />
      <PromoSection />
      <NewsletterSection />
    </main>
  );
}
