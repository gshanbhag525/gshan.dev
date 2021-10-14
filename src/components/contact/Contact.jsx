import { useState } from "react";
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="contactCenter">
        <h2>Contact</h2>
      </div>
      <div className="container">
        <div className="left">
          <img src="./assets/contact.png" alt="" />
        </div>
        <div className="right">
          <div className="social">
            <div className="itemContainer">
              <a href="mailto:gshanbhag525@gmail.com">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </a>
              <span>Gmail</span>
            </div>

            <div className="itemContainer">
              <a href="https://www.linkedin.com/in/gunesh-shanbhag525/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <span>LinkedIn</span>
            </div>

            <div className="itemContainer">
              <a href="https://github.com/gshanbhag525/">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <span>Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
