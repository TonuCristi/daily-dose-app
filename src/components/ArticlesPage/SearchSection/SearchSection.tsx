import SearchForm from "./SearchForm";
import Title from "./Title";

export default function SearchSection() {
  return (
    <section className="bg-orange-50">
      <div className="max-w-[120rem] m-auto flex items-center justify-between py-[3.2rem]">
        <Title />
        <SearchForm />
      </div>
    </section>
  );
}
