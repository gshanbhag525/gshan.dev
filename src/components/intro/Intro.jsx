import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Button } from "@material-ui/core";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Gunesh Shanbhag</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
          
          <a href="https://drive.google.com/file/d/1KiE368Zb8fYq3I-8Ff65t26qYRwE26o2/view?usp=sharing" target="_blank">
            <Button>
              Download Resume
            </Button>
          </a>
          
          
        </div>
        <div className="arrowdown">
          <a href="#myworks">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
