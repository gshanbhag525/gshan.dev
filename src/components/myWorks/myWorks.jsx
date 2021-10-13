import { useState } from "react";
import "./myWorks.scss";

export default function MyWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "SnapOrder Consumer App",
      desc:
        "Incorporated JWT based authentication system.",
      img:
        "./assets/snaporder.png",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "SnapOrder Merchant App",
      desc:
        "Implemented product search used by 10k+ kirana stores.",
      img:
        "./assets/snapmerchant.png",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Fiserv App",
      desc:
        "Implemented product search used by 10k+ kirana stores.",
      img:
      "./assets/fiserv.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="myworks">
      <div
        className="slider"
        // style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <h1> My Works </h1>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                  <h2>{d.title}</h2>
                  <span>SDE - SnapBizz CloudTech Pvt. Ltd.</span>
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
