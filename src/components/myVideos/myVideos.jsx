import { useState } from "react";
import "./myVideos.scss";

export default function MyVideos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Golang for Beginners",
      desc:
        "A gentle introduction to Golang Programming Language.",
      img:
        "./assets/golang.png",
      url:
        "https://www.youtube.com/watch?v=3iuoQkQOx2w&list=PLS1QulWo1RIaRoN4vQQCYHWDuubEU8Vij",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Introduction to AWS Services",
      desc:
        "Introduction to different AWS services and \
          how to host your static website on AWS.",
      img:
        "./assets/aws.png",
      url:
        "https://www.youtube.com/playlist?list=PLS1QulWo1RIa8yYw9CPe6B30g4NhYr8z_",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Data visualization using Python",
      desc:
        "Data visualization of using \
        Python libraries such as Matplotlib and Seaborn ",
      img:
      "./assets/python.png",
      url:
        "https://www.youtube.com/playlist?list=PLS1QulWo1RIZ3tcrdZodjuXTDTIIXH8EW",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="videos" id="myvideos">
      <div
        className="slider"
        // style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <h1> My Videos </h1>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="right">
                <a href={d.url} target="_blank">
                <img
                  src={d.img}
                  alt=""
                />
                </a>
              </div>
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                  <h2>{d.title}</h2>
                  <span>YouTube - ProgrammingKnowledge</span>
                  <p>{d.desc}</p>
                  
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      /> */}
    </div>
  );
}
