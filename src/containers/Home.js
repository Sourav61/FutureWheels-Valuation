import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "100vh",
          // justifyContent: "space-around",
        }}
      >
        <img src="B.jpg" alt="car" className="carImage" />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="Imgif1 tooltip">
            <img src="about.gif" alt="gif imag" className="gif1 img-circle" />
            <Link to="/about" className="toolTipLink">
              <span className="toolTipText">About Us</span>
            </Link>
          </div>
          <div className="Imgif2 tooltip">
            <img
              src="prediction.gif"
              alt="gif imag"
              className="gif1 img-circle"
            />
            <Link to="/predict">
              <span className="toolTipText" style={{ left: "75%" }}>
                Prediction
              </span>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="Imgif3 tooltip">
            <img
              src="contact.gif"
              alt="gif image"
              className="gif1 img-circle"
            />
            <Link to="/contact">
              <span className="toolTipText" style={{ top: "75%" }}>
                Contact Us
              </span>
            </Link>
          </div>
          <div className="Imgif4 tooltip">
            <img
              src="feedback.gif"
              alt="gif image"
              className="gif1 img-circle"
            />
            <Link to="/feedback">
              <span className="toolTipText" style={{ top: "75%", left: "75%" }}>
                Feedback/Review
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
