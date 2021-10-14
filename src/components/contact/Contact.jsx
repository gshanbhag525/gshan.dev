import { useState } from "react";
import "./contact.scss";
import footerBG from "../../global.scss";
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
        <h2>Social</h2>
      </div>
      <div className="container">
        <div className="left">
          <img src="./assets/social.png" alt="" />
        </div>
        <div className="right">
          <div className="social">
            <div className="itemContainer">
              <a href="mailto:gshanbhag525@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faGoogle} size="3x" />
              </a>
            </div>

            <div className="itemContainer">
              <a
                href="https://www.linkedin.com/in/gunesh-shanbhag525/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
            </div>

            <div className="itemContainer">
              <a href="https://github.com/gshanbhag525/" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h2>Made with  ❤️  using  🔯 </h2>
      </div>
    </div>
  );
}
