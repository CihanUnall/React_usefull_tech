import { Routes, Route, useLocation } from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import About from "./pages/About";
import ZurGallerie from "./pages/ZurGallerie";
import FilmBibliothek from "./pages/FilmBibliothek";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  return (
    <>
      {isLandingPage && <Header />}
      <Nav />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/filmbibliothek" element={<FilmBibliothek />} />
        <Route path="/zurgallerie" element={<ZurGallerie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
