import { NavLink } from "react-router-dom";
import Logo from "../NavBar/Logo";

export default function Description() {
  return (
    <div className="border-r border-2bOpacity pl-[37rem] pr-[6.4rem] pt-[6rem] pb-[4rem]">
      <Logo mb="2" />

      <p className="font-serif text-2xl leading-9 w-[80%] mb-[2.4rem]">
        Daily Dose is the three-time #1 New York Times bestselling author of The
        Subtle Art of Not Giving a F*ck, as well as other titles. His books have
        sold around 20 million copies, been translated into more than 65
        languages, and reached number one in more than a dozen countries. In
        2023, a feature film about his life and ideas was released worldwide by
        Universal Pictures.
      </p>

      <NavLink
        to="/about"
        className="group flex items-center uppercase font-bold text-xl gap-6 mb-[16rem]"
      >
        <div className="bg-gray-100 group-hover:bg-orange-50 text-white rounded-[100%] py-2 px-2">
          &rarr;
        </div>
        Learn more about daily dose
      </NavLink>

      <p className="">© 2023 Daily Dose</p>
    </div>
  );
}
