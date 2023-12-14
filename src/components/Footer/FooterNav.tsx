import Link from "../NavBar/Link";

const links = [
  "articles",
  "books",
  "courses",
  "newsletter",
  "about daily dose",
  "sign up",
  "contact",
];

export default function FooterNav() {
  return (
    <nav className="border-b border-2bOpacity pl-[12rem] pr-[36rem] pb-[5.6rem]">
      <ul className="grid grid-cols-2 gap-7">
        {links.map((link) => (
          <Link key={link} link={link} />
        ))}
      </ul>
    </nav>
  );
}
