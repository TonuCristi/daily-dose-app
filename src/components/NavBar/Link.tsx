import { NavLink } from "react-router-dom";

export default function Link({ link }: { link: string }) {
  return (
    <li className="px-8 py-3">
      <NavLink
        to={`/${link}`}
        className={`text-2xl uppercase hover:border-b-[1px] ${({
          isActive,
        }: {
          isActive: boolean;
        }) => (isActive ? "active" : "")}`}
      >
        {link}
      </NavLink>
    </li>
  );
}
