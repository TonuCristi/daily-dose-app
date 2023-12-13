import Link from "./Link";

const links = ["articles", "books", "courses", "newsletter", "podcast"];

export default function Links() {
  return (
    <ul className="flex items-center">
      {links.map((link) => (
        <Link key={link} link={link} />
      ))}
    </ul>
  );
}
