import Title from "./Title";
import Description from "./Description";

export default function HeroSection() {
  return (
    <section className="max-w-[120rem] m-auto flex flex-col items-center p-[1.6rem] px-[4.8rem] py-[6.4rem]">
      <Title />
      <Description />
    </section>
  );
}
