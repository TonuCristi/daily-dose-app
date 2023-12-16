import { Dispatch, SetStateAction } from "react";

type Props = {
  articlesDate: number[];
  selectedYear: number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
};

export default function Years({
  articlesDate,
  selectedYear,
  setSelectedYear,
}: Props) {
  const articlesFiltered = articlesDate
    .filter((date, i) => articlesDate.indexOf(date) === i)
    .sort((a, b) => b - a);

  return (
    <div className="flex gap-2 flex-wrap py-[2.4rem] mb-[2.4rem]">
      {articlesFiltered.map((year) => (
        <button
          key={year}
          className={`text-3xl border border-transparent hover:text-white py-[1rem] px-[1.8rem] ${
            selectedYear === year
              ? "font-medium border-white rounded-[2.7rem] text-white"
              : "text-gray-50"
          }`}
          onClick={() => setSelectedYear(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
