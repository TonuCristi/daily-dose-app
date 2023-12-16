import { NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";

export default function Utilities() {
  return (
    <div className="text-2xl uppercase flex items-center gap-8">
      <NavLink to="log-in" className="hover:border-b-[1px]">
        Log in
      </NavLink>

      <NavLink
        to="sign-up"
        className="flex gap-4 font-semibold hover:bg-white hover:text-black border border-2bOpacity px-14 py-5 rounded-[2.7rem]"
      >
        <FaUser className="" />
        Sign up
      </NavLink>

      <button className="rotate-[-24deg] hover:rotate-[-45deg] transition-all duration-300 px-3 py-3">
        <FaMoon />
        {false && <FaSun />}
      </button>
    </div>
  );
}
