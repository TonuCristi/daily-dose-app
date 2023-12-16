import Button from "../../Button/Button";

export default function Form() {
  return (
    <form className="grid grid-cols-[75fr_25fr] items-center rounded-[2.7rem] p-1 mb-[3.2rem] bg-white border border-gray-200">
      <input
        type="text"
        placeholder="Your Email Address"
        className="w-full bg-transparent px-8 py-6 text-black text-xl outline-none placeholder:text-gray-200"
      />

      <Button border="border" hBorder="hover:border-gray-200">
        Sign up
      </Button>
    </form>
  );
}
