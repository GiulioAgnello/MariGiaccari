import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="default-layout">
      <header>
        <h1>Il mio sito</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2023 Il mio sito. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
