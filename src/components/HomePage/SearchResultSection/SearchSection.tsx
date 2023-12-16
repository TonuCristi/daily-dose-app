import { useSearchParams } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function SearchSection() {
  const [searchParams] = useSearchParams();

  return (
    <section className="bg-orange-50 py-[3.2rem]">
      <div className="max-w-[120rem] m-auto flex items-center justify-between">
        <p className="text-3xl uppercase font-bold">
          Search results for "{searchParams.get("s")}"
        </p>
        <SearchForm />
      </div>
    </section>
  );
}
