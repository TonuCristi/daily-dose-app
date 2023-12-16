import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Button from "../../Button/Button";

export default function SearchForm() {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState<string>(() => searchParams.get("s") ?? "");
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (value) navigate(`/?s=${value}`);
  }

  return (
    <form
      className="grid grid-cols-[60fr_10fr_30fr] items-center w-[30%] rounded-[2.7rem] bg-gray-200 border border-gray-200"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full bg-transparent px-8 py-6 text-white text-xl outline-none placeholder:text-gray-200"
        value={value}
        onChange={handleChange}
      />

      <button className="text-5xl" onClick={() => setValue("")}>
        &#215;
      </button>

      <Button bg="bg-white" color="text-gray-200" hColor="text-white">
        Search
      </Button>
    </form>
  );
}
