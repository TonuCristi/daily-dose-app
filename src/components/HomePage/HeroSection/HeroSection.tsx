import Breakthrough from "./Breakthrough";
import Title from "./Title";

export default function HeroSection() {
  return (
    <section className="border-b border-2bOpacity">
      <div className="max-w-defaultWidth m-auto px-[4.8rem] py-[6.4rem]">
        <Title />
        <Breakthrough />
      </div>
    </section>
  );
}
