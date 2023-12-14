import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";

export default function DescriptionSection() {
  return (
    <section className="bg-[rgb(44,43,43)]">
      <div className="max-w-defaultWidth m-auto py-[9.6rem] flex flex-col items-center border-b border-dashed">
        <h2 className="text-[4.8rem] font-bold mb-[4.8rem]">
          Hi, We are Daily Dose
        </h2>

        <p className="text-4xl font-serif w-[65%] text-center leading-[4rem] mb-[4.8rem]">
          We are the #1 NY Times Bestselling author of
          <i>
            <NavLink
              to=""
              className="border-b-2 border-gray-50 hover:border-white"
            >
              &nbsp;The Subtle Art of Not Giving a F*ck&nbsp;
            </NavLink>
          </i>
          and
          <i>
            <NavLink
              to=""
              className="border-b-2 border-gray-50 hover:border-white px"
            >
              &nbsp;Everything Is F*cked
            </NavLink>
          </i>
          : A Book About Hope. I write life advice that is science-based,
          pragmatic, and non-bullshitty—a.k.a., life advice that doesn’t suck.
          Some people say I’m an idiot. Other people say I saved their life.
          Read on and decide for yourself.
        </p>

        <div className="flex gap-[2.4rem]">
          <Button
            color="text-gray-200"
            bg="bg-white"
            fW="font-semibold"
            px="px-20"
            py="py-8"
          >
            Read my articles
          </Button>
          <Button
            color="text-gray-200"
            bg="bg-white"
            fW="font-semibold"
            px="px-20"
            py="py-8"
          >
            Take my courses
          </Button>
        </div>
      </div>
    </section>
  );
}
