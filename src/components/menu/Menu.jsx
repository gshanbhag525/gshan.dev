import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#myworks">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Blogs</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#myvideos">Videos</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
