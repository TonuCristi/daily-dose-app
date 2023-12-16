import { NavLink } from "react-router-dom";

interface Article {
  id: number;
  userId: number;
  created_at: Date;
  title: string;
  text: string;
  category: string;
  query: string;
  author: string;
}

type Props = {
  article: Article;
};

const options: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

export default function ArticleLink({ article }: Props) {
  const { title, created_at, query, category } = article;

  return (
    <li className="border-b border-gray-50 py-[2.4rem]">
      <NavLink
        to={`/${query.split(" ").join("-")}`}
        className="group grid grid-cols-[65fr_15fr_15fr_5fr] items-center"
      >
        <h3 className="text-3xl font-semibold border-b border-transparent group-hover:border-white justify-self-start">
          {title}
        </h3>

        <p className="text-xl uppercase font-medium">{category}</p>

        <p className="text-xl uppercase font-medium">
          {new Intl.DateTimeFormat("en-US", options).format(
            new Date(created_at)
          )}
        </p>

        <div className="bg-white text-2xl group-hover:bg-orange-50 text-gray-200 rounded-[100%] py-2 px-2 justify-self-end">
          &rarr;
        </div>
      </NavLink>
    </li>
  );
}
