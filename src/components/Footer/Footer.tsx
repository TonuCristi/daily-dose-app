import Copyright from "./Copyright";
import AboutAuthor from "./AboutAuthor";
import FooterNav from "./FooterNav";
import Info from "./Info";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="grid grid-cols-2">
        <div className="border-r border-2bOpacity">
          <div className="pl-[37rem] pr-[6.4rem] pt-[6rem]">
            <AboutAuthor />
          </div>
          <Copyright />
        </div>

        <div className="py-[6rem]">
          <FooterNav />
          <Info />
        </div>
      </div>
    </footer>
  );
}
