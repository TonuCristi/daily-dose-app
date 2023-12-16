import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  createdAt: Date;
  query: string;
};

const options: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
};

export default function ArticleLink({ title, createdAt, query }: Props) {
  return (
    <li className="border-b border-gray-50 py-[2.4rem]">
      <NavLink
        to={`/${query.split(" ").join("-")}`}
        className="group grid grid-cols-[30fr_60fr_10fr] items-center"
      >
        <p className="text-xl uppercase font-medium">
          {new Intl.DateTimeFormat("en-US", options).format(
            new Date(createdAt)
          )}
        </p>

        <h3 className="text-3xl font-semibold border-b border-transparent group-hover:border-white justify-self-start">
          {title}
        </h3>

        <div className="bg-white text-2xl group-hover:bg-orange-50 text-gray-200 rounded-[100%] py-2 px-2 justify-self-end">
          &rarr;
        </div>
      </NavLink>
    </li>
  );
}
