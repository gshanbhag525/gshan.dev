import "./newBlogs.scss";

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
      title: "Hosting your static site for free.",
      desc: "AWS",
      img: "./assets/aws.png",
      url: "",
    },
  ];

  return (
    <div className="newblogs" id="newblogs">
      <div className="slider">
        <h1> My Blogs </h1>

        <div className="container">
          <div className="item">
            {data.map((d) => (
              // <div className="blogitem">
                <div class="item-3">
                  <a
                    href={d.url}
                    class="card"
                  >
                    <div
                      class="thumb"
                      style={ {backgroundImage: `url(${d.img})` }}
                    ></div>
                    <article>
                      <h1>{d.title}</h1>
                      <p>
                        
                      </p>
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
      </div>
    </div>
  );
}
