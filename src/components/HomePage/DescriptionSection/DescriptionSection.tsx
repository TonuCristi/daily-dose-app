import Button from "../../Button/Button";
import Description from "./Description";
import Title from "./Title";

export default function DescriptionSection() {
  return (
    <section className="bg-[rgb(44,43,43)]">
      <div className="max-w-defaultWidth m-auto py-[9.6rem] flex flex-col items-center border-b border-dashed">
        <Title />
        <Description />

        <div className="flex gap-[2.4rem]">
          <Button
            color="text-gray-200"
            bg="bg-white"
            fW="font-semibold"
            px="px-20"
            py="py-8"
          >
            Read my articles
          </Button>
          <Button
            color="text-gray-200"
            bg="bg-white"
            fW="font-semibold"
            px="px-20"
            py="py-8"
          >
            Take my courses
          </Button>
        </div>
      </div>
    </section>
  );
}
