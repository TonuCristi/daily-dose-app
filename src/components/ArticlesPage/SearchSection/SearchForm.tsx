import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../Button/Button";

export default function SearchForm() {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/?s=${value}`);
  }

  return (
    <form
      className="grid grid-cols-[65fr_35fr] items-center w-[30%] rounded-[2.7rem] bg-white border border-gray-200"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full bg-transparent px-8 py-6 text-black text-xl outline-none placeholder:text-gray-200"
        value={value}
        onChange={handleChange}
      />

      <Button border="border" hBorder="hover:border-gray-200">
        Search
      </Button>
    </form>
  );
}
