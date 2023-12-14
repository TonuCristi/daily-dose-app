import DescriptionSection from "../components/HomePage/DescriptionSection/DescriptionSection";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import PromoSection from "../components/HomePage/PromoSection/PromoSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <DescriptionSection />
      <PromoSection />
    </main>
  );
}
