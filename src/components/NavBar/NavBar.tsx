import Links from "./Links";
import Logo from "./Logo";
import Utilities from "./Utilities";

export default function NavBar() {
  return (
    <header className="border-b border-2bOpacity py-6">
      <div className="max-w-defaultWidth m-auto h-20">
        <nav className="flex items-center justify-between h-full">
          <Logo />
          <Links />
          <Utilities />
        </nav>
      </div>
    </header>
  );
}
