import "./intro.scss";
import { Button } from "@material-ui/core";
import { resumeLink } from "../../data";

export default function Intro() {
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

          <a
            href={resumeLink.url}
            target="_blank"
            rel="noreferrer"
          >
            <Button>Download Resume</Button>
          </a>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="./assets/me.png" alt="" />
        </div>
      </div>
    </div>
  );
}
