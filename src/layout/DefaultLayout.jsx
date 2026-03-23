import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div className="default-layout">
      <header className="sticky-top">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-5">
        <Footer />
      </footer>
    </div>
  );
}
