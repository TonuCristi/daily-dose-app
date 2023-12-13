import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const links = [
  "Privacy Policy",
  "Manage Cookie Settings",
  "Your Privacy Choices",
  "Terms and Conditions",
];

export default function Info() {
  return (
    <div className="pl-[14rem] pt-[4rem] pr-[36rem] pb-[5.6rem] flex items-center justify-between">
      <ul className="flex flex-col gap-5">
        {links.map((link) => (
          <NavLink
            key={link}
            to={`${link.toLowerCase().split(" ").join("-")}`}
            className="text-xl"
          >
            {link}
          </NavLink>
        ))}
      </ul>

      <ul className="flex items-center gap-8 text-3xl">
        <FaFacebookSquare className="hover:text-[rgb(242,104,34)] cursor-pointer" />
        <FaTiktok className="hover:text-[rgb(242,104,34)] cursor-pointer" />
        <FaInstagram className="hover:text-[rgb(242,104,34)] cursor-pointer" />
        <FaLinkedinIn className="hover:text-[rgb(242,104,34)] cursor-pointer" />
        <FaYoutube className="hover:text-[rgb(242,104,34)] cursor-pointer" />
        <FaTwitter className="hover:text-[rgb(242,104,34)] cursor-pointer" />
      </ul>
    </div>
  );
}
