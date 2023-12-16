import { NavLink } from "react-router-dom";

type Props = {
  children: string | string[];
  link: string;
};

export default function AboutLink({ children, link }: Props) {
  return (
    <NavLink
      to={`/${link}`}
      className="group flex items-center uppercase font-bold text-xl gap-6"
    >
      <div className="bg-gray-100 group-hover:bg-orange-50 text-white rounded-[100%] py-2 px-2">
        &rarr;
      </div>
      {children}
    </NavLink>
  );
}
