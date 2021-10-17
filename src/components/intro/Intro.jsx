import "./intro.scss";
// import { init } from "ityped";
// import { useEffect, useRef } from "react";
import { Button } from "@material-ui/core";

export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["Developer", "Designer"],
  //   });
  // }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi, I am Gunesh,</h2>
          <br />
          <h2>Software dev</h2>
          <p>
            <span>
              Passionate Software Engineer with experience in building customer
              centric B2C applications. Currently seeking software development
              opportunities in a company working on scale.
            </span>
          </p>

          {/* <h2>Hi There, I'm</h2>
          <h1>Gunesh Shanbhag</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3> */}

          <a
            href="https://drive.google.com/file/d/1KiE368Zb8fYq3I-8Ff65t26qYRwE26o2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Download Resume</Button>
          </a>
        </div>
        {/* <div className="arrowdown">
          <a href="#myworks">
            <img src="assets/down.png" alt="" />
          </a>
        </div> */}
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="./assets/me.png" alt="" />
        </div>
      </div>
    </div>
  );
}
