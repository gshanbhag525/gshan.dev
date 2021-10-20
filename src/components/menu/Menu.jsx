import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">About Me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#myworks">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#newblogs">Blogs</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#myvideos">Videos</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </div>
  );
}
