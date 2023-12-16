import Logo from "../NavBar/Logo";
import AboutLink from "./AboutLink";
import Description from "./Description";

export default function AboutAuthor() {
  return (
    <div className="">
      <Logo mb="mb-[2rem]" />
      <Description />
      <div className="mb-[16rem]">
        <AboutLink link="about">Learn more about daily dose</AboutLink>
      </div>
    </div>
  );
}
