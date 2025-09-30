
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopNav from "./components/ScrollToTopNav";

const RootLayout = () => {
  return (
    <div>
      <div className="Root-layout">
        <Navbar/>
        <main>
          <Outlet />
        </main>
        <ScrollToTop/>
        <ScrollToTopNav/>
        <Footer />
      </div>
      </div>
  );
}

export default RootLayout