type Props = {
  author: string;
  category: string;
};

export default function ArticleInfo({ author, category }: Props) {
  return (
    <div>
      <p className="text-2xl font-medium mb-[1.6rem]">
        written by &nbsp;&nbsp;&nbsp; {author?.toUpperCase()}
      </p>
      <p className="text-2xl font-medium">
        category &nbsp;&nbsp;&nbsp; {category?.toUpperCase()}
      </p>
    </div>
  );
}
