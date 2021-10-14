import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Blogs from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import MyWorks from "./components/myWorks/myWorks";
import MyVideos from "./components/myVideos/myVideos";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <MyWorks />
        <Blogs />
        <MyVideos />
        <Contact />
      </div>
    </div>
  );
}

export default App;
