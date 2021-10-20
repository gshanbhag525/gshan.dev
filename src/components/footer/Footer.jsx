import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="social">
        <a
          href="mailto:gshanbhag525@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>

        <a
          href="https://www.linkedin.com/in/gunesh-shanbhag525/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/gshanbhag525/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <br />
      </div>

      <span>Made with ❤️ by Gunesh</span>
    </div>
  );
}
