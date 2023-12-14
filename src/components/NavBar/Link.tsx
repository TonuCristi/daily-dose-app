import { NavLink } from "react-router-dom";

export default function Link({ link }: { link: string }) {
  return (
    <li className="px-8 py-3">
      <NavLink
        to={`/${link}`}
        className={({ isActive }: { isActive: boolean }) =>
          `text-2xl uppercase ${
            isActive ? `border-b-[1px]` : `hover:border-b-[1px]`
          }`
        }
      >
        {link}
      </NavLink>
    </li>
  );
}
