export default function CategoryTitle({ category }: { category: string }) {
  return (
    <h3 className="border-b border-gray-50 py-[2.4rem] text-3xl uppercase font-medium">
      {category}
    </h3>
  );
}
