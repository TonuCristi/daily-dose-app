import { NavLink } from "react-router-dom";

export default function Description() {
  return (
    <p className="text-4xl font-serif w-[65%] text-center leading-[4rem] mb-[4.8rem]">
      We are the #1 NY Times Bestselling author of
      <i>
        <NavLink to="" className="border-b-2 border-gray-50 hover:border-white">
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
      : A Book About Hope. I write life advice that is science-based, pragmatic,
      and non-bullshitty—a.k.a., life advice that doesn’t suck. Some people say
      I’m an idiot. Other people say I saved their life. Read on and decide for
      yourself.
    </p>
  );
}
