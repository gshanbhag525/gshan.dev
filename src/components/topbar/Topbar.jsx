import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            gshan.
          </a>
        </div>
        <div className="right">
          <a href="#intro">About Me</a>
          <a href="#myworks">Works</a>
          <a href="#newblogs">Blogs</a>
          <a href="#myvideos">Videos</a>

          {/* <a href="#myvideos" className="logo">
            Videos
          </a> */}

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
