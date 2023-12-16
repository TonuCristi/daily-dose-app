import { NavLink } from "react-router-dom";

export default function Description() {
  return (
    <p className="text-gray-200 font-serif text-2xl leading-[2.8rem] mb-[3.2rem]">
      Enter your email address below to sign up for my free newsletter, &nbsp;
      <NavLink
        to="/newsletter"
        className="border-b border-gray-100 hover:border-black font-semibold"
      >
        <i>Your Next Breakthrough</i>
      </NavLink>
      . Each week, you’ll receive a few prompts and exercises designed to create
      your next breakthrough. No fluff, no filler, no BS. Just five minutes each
      week that might change your life.
    </p>
  );
}
