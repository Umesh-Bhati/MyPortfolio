import "./styles.css";
import { FaGithub, FaLinkedin} from "react-icons/fa";

function LeftSocialMediaIcons() {
  return (
    <div className="leftSocialMediaIcons">
      <hr className="leftSocialMediaIcons__mobileLeftBar mobile__hr" />
      <a
        href="https://github.com/Umesh-Bhati/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my GitHub"
      >
        <FaGithub className="leftSocialMediaIcons__github icon" size={50} />
      </a>
      <a
        href="https://www.linkedin.com/in/umesh-bhati-b7b557207/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Linkedin"
      >
        <FaLinkedin className="leftSocialMediaIcons__linkedin icon" size={50} />
      </a>
      
      <div className="leftSocialMediaIcons__verticalBar" />
      <hr className="leftSocialMediaIcons__mobileRightBar mobile__hr" />
    </div>
  );
}

export default LeftSocialMediaIcons;
