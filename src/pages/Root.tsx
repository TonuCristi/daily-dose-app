import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ArticlesProvider from "../contexts/ArticlesContext";

export default function Root() {
  return (
    <div className="">
      <NavBar />
      <ArticlesProvider>
        <Outlet />
      </ArticlesProvider>
      <Footer />
    </div>
  );
}
