import React from "react";
import "./AboutMe.scss";
import coll from "../../assets/colloseum.png";

function AboutMe() {
  return (
    <div className="d-flex align-items-center mainCardContainer about-me">
      <div className="mainCard">
        <div className="position-relative main-content">
          <div className="position-absolute adjs">
            <div className="page-title">About Me</div>
            <div className="content">
              <div className="lil-info">
                Hi, I am a <mark>web developer</mark> and designing enthusiast.
                I can help you make beautiful websites and apps with high
                security and scalability, while keeping your project as fast as
                possible and highly performant. I currently aspire to be a MERN
                dev in a learning environment. I love mockups, mashups, modern
                web designs, clever one-liners of code and love playing with npm
                packages in my free time.
              </div>
              <div className="contact-lure my-4">
                You can contact me at{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=arun0808rana@gmail.com"
                  target="_blank"
                >
                  <mark>arun0808rana@gmail.com</mark>
                </a>{" "}
                or on these platforms.
              </div>
              <div className="resource-links">
                <ul className="d-flex p-0">
                  <li className="mr-4">
                    <a
                      href="https://www.facebook.com/arun.rana.585"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="mx-4">
                    <a href="https://twitter.com/Arun_Rana01" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="mx-4">
                    <a
                      href="https://www.linkedin.com/in/arun-rana-680800180"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="mx-4">
                    <a
                      href="https://www.instagram.com/arun.rana0808/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img src={coll} className="position-absolute coll" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
