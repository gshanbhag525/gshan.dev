import "./myVideos.scss";

export default function MyVideos() {
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Golang for Beginners",
      desc: "A gentle introduction to Golang Programming Language.",
      img: "./assets/golang.png",
      url: "https://www.youtube.com/watch?v=3iuoQkQOx2w&list=PLS1QulWo1RIaRoN4vQQCYHWDuubEU8Vij",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Introduction to AWS Services",
      desc: "Introduction to different AWS services and how to host your static website on AWS.",
      img: "./assets/aws.png",
      url: "https://www.youtube.com/playlist?list=PLS1QulWo1RIa8yYw9CPe6B30g4NhYr8z_",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Data visualization using Python",
      desc: "Data visualization of using Python libraries such as Matplotlib and Seaborn ",
      img: "./assets/python.png",
      url: "https://www.youtube.com/playlist?list=PLS1QulWo1RIZ3tcrdZodjuXTDTIIXH8EW",
    },
  ];

  return (
    <div className="videos" id="myvideos">
      <div className="slider">
        <h1> My Videos </h1>
        {data.map((d, key) => (
          <div className="container" key={key}>
            <div className="item" >
              <div className="left">
                <a href={d.url} target="_blank" rel="noreferrer">
                  <img src={d.img} alt="" />
                </a>
              </div>
              <div className="right">
                <div className="rightContainer">
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h2>{d.title}</h2>
                  </a>
                  <span>YouTube - ProgrammingKnowledge</span>
                  <p>{d.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
