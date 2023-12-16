import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  query: string;
};

export default function ArticleLink({ title, query }: Props) {
  return (
    <li className="border-b border-gray-50 py-[2.4rem]">
      <NavLink
        to={`/${query.split(" ").join("-")}`}
        className="text-3xl font-semibold hover:border-b"
      >
        {title}
      </NavLink>
    </li>
  );
}
