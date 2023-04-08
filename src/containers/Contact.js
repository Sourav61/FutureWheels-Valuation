import React from "react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div style={{ flex: 1, display: "flex" }}>
      <div id="browser">
        <div id="browser-bar">
          <div className="circles"></div>
          <p
            style={{
              marginBottom: "0px",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Contact Us
          </p>
          <span className="arrow entypo-resize-full"></span>
        </div>
        <div id="content">
          <div id="left">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109740.86108784034!2d76.69348820329914!3d30.735210199731238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1658137112078!5m2!1sen!2sin"
              width="100%"
              height="618px"
              style={{
                border: "0",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
              }}
            ></iframe>
          </div>
          <div id="right" className="contact-form">
            <h3
              className="text-center"
              style={{ textAlign: "center", fontSize: "3vh" }}
            >
              Connect
            </h3>
            <div id="social" className="text-center">
              <SocialIcon
                url="https://twitter.com/SouravPahwa9"
                fgColor="#ffffff"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/sourav-pahwa-93b4041b6/"
                fgColor="#ffffff"
              />
              <SocialIcon
                url="mailto:sourav61pahwa@gmail.com"
                fgColor="#ffffff"
                bgColor="#DB4437"
              />
            </div>
            <form className="text-center">
              <h3 style={{ margin: "2vh" }}>Send Message</h3>
              <input placeholder="Email" type="email" />
              <input placeholder="Subject" type="text" />
              <textarea
                placeholder="Message"
                type="text"
                rows="4"
                style={{ resize: "none", fontSize: "1rem" }}
              ></textarea>
              <input placeholder="Send" type="submit" className="submit-form" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
