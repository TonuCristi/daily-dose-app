import { NavLink } from "react-router-dom";
import { useArticles } from "../../../contexts/ArticlesContext";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";

export default function PromoSection() {
  const { data, isLoading, error } = useArticles();

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <section className="max-w-defaultWidth m-auto px-[4.8rem] py-[6.4rem] flex flex-col items-center">
      <div className="w-[50%]">
        <h2 className="text-3xl uppercase font-bold border-b border-gray-50 pb-[2.4rem] w-full text-center">
          Latest articles
        </h2>

        <ul className="flex flex-col">
          {data?.map(({ id, title, query }) => (
            <li key={id} className="border-b border-gray-50 py-[2.4rem]">
              <NavLink
                to={`${query.split(" ").join("-")}`}
                className="text-3xl font-semibold hover:border-b"
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
