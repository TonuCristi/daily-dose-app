import PrivacyPolicy from "../HeroSection/PrivacyPolicy";
import Description from "./Description";
import Form from "./Form";
import Image from "./Image";
import Title from "./Title";

export default function NewsletterSection() {
  return (
    <section className="bg-orange-50">
      <div className="max-w-[120rem] m-auto grid grid-cols-[70fr_30fr] py-[8.8rem] px-[8.8rem] gap-[9.6rem]">
        <div className="p-[2.4rem]">
          <Title />
          <Description />
          <Form />
          <PrivacyPolicy
            color="text-gray-200"
            linkBorderC="border-gray-100"
            linkHBorder="border-black"
          />
        </div>

        <Image />
      </div>
    </section>
  );
}
