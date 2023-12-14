import Button from "../../Button/Button";

export default function Subscription() {
  return (
    <form className="grid grid-cols-[75fr_25fr] items-center rounded-[2.7rem] p-1 mb-[3.2rem] bg-white">
      <input
        type="text"
        placeholder="Your Email Address"
        className="w-full bg-transparent px-8 py-6 text-black text-xl outline-none placeholder:text-gray-200"
      />

      <Button>Sign up</Button>

      {/* <button className="text-white bg-gray-200 hover:text-gray-200 hover:bg-orange-50 h-full px-8 py-6 rounded-[2.7rem] text-xl uppercase font-bold">
        Sign up
      </button> */}
    </form>
  );
}
