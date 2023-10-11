import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        Trabalho realizado por <a href="">[João Nunes]</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://github.com/seu-username" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </div>
  );
}

export default Footer;
