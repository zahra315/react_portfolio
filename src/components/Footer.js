import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-dark text-center">
      <div class="container">
        <section>
          <a
            class="btn btn-outline-light btn-floating m-1 "
            href="https://www.linkedin.com/in/zahra-seyedi-2020/"
            role="button"
          >
            <FaLinkedinIn />
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://github.com/zahra315"
            role="button"
          >
            <FaGithubSquare />
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://stackoverflow.com/users/16347056/zahra315"
            role="button"
          >
            <FaStackOverflow />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
