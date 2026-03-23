import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contatti from "./pages/Contatti";
import DefaultLayout from "./layout/DefaultLayout";
import Esperienza from "./pages/Esperienza";
import WeddingStories from "./pages/WeddingStories";
import Video from "./pages/Video";
import AlbumPage from "./pages/AlbumPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/esperienza" element={<Esperienza />} />
          <Route path="/weddingstories" element={<WeddingStories />} />
          <Route path="/video" element={<Video />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
