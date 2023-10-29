import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="line"></div>
      <div className="imformation">
        <div className="phone">
          <p>Phone</p>
          <p>0963-690-880</p>
        </div>

        <div className="email">
          <p>Email</p>
          <p>ph3207ph3207@gmail.com</p>
        </div>

        <div className="follow">
          <p>Follow Me</p>
          <div className="icon">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
            </a>
          </div>
        </div>

        <div className="cpoyright">
          <p>© 2023 By Phil Lee.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
