import Description from "./Description";
import FooterNav from "./FooterNav";
import Info from "./Info";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="grid grid-cols-2">
        <Description />

        <div className="py-[6rem]">
          <FooterNav />
          <Info />
        </div>
      </div>
    </footer>
  );
}
