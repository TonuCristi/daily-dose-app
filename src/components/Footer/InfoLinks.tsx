import { NavLink } from "react-router-dom";

const links = [
  "Privacy Policy",
  "Manage Cookie Settings",
  "Your Privacy Choices",
  "Terms and Conditions",
];

export default function InfoLinks() {
  return (
    <ul className="flex flex-col gap-5 items-start">
      {links.map((link) => (
        <li key={link}>
          <NavLink
            to={`${link.toLowerCase().split(" ").join("-")}`}
            className="text-xl hover:border-b"
          >
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
