import { NavLink } from "react-router-dom";

export default function Subscription() {
  return (
    <div className="flex items-center flex-col">
      <p className="font-serif text-3xl mb-[1.2rem] border-b border-gray-50 hover:border-white cursor-pointer">
        <i>Sign up in 60 seconds:</i>
      </p>

      <NavLink
        to=""
        className="px-[3.2rem] py-[1.8rem] bg-white text-gray-200 uppercase font-semibold text-xl 
        hover:bg-orange-50 rounded-[2.7rem]"
      >
        Sign up now
      </NavLink>
    </div>
  );
}
