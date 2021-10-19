import "./newBlogs.scss";
import { resumeLink } from "../../data";
import { Button } from "@material-ui/core";

export default function NewBlogs() {
  const data = [
    {
      id: "1",
      title: "Beginner friendly Redux - Redux Toolkit",
      desc: "ReactJS",
      img: "./assets/reduxtoolkit.png",
      url: "",
    },
    {
      id: "2",
      title: "Host your portfolio website for FREE",
      desc: "AWS",
      img: "./assets/ghpages.jpeg",
      url: "",
    },
  ];

  return (
    <div className="newblogs" id="newblogs">
      <div className="slider">
        <h1> My Blogs </h1>

        <div className="container">
          <div className="item" >
            {data.map((d, key) => (
              // <div className="blogitem">
              <div className="item-3" key={key} style={{width: "50%"}}>
                <a href={d.url} className="card">
                  <div
                    className="thumb"
                    style={{ backgroundImage: `url(${d.img})` }}
                  ></div>
                  <article>
                    <h1>{d.title}</h1>
                    <p></p>
                    {/* <span>Melody Nieves</span> */}
                  </article>
                </a>
              </div>

              /* <a href={d.url} target="_blank" rel="noreferrer">
                  <img src={d.img} alt="" />
                </a>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2>{d.title}</h2>
                </a>
                <p>{d.desc}</p> */

              // </div>
            ))}
          </div>
        </div>

        <a href={resumeLink.url} target="_blank" rel="noreferrer">
          <Button>Download Resume</Button>
        </a>
      </div>
    </div>
  );
}
