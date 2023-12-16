import { useArticles } from "../../../contexts/ArticlesContext";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import LatestArticles from "./LatestArticles";
import Title from "./Title";

export default function PromoSection() {
  const { isLoading, error } = useArticles();

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <section className="max-w-defaultWidth m-auto px-[4.8rem] py-[6.4rem] flex flex-col items-center">
      <div className="w-[50%]">
        <Title />
        <LatestArticles />
      </div>
    </section>
  );
}
