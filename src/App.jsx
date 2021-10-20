import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import MyWorks from "./components/myWorks/myWorks";
import MyVideos from "./components/myVideos/myVideos";
import NewBlogs from "./components/newBlogs/newBlogs";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <MyWorks />
        <NewBlogs />
        <MyVideos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
