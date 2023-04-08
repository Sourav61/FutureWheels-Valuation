import React from "react";

const About = () => {
  return (
    <div style={{ display: "flex", flex: 1,height: "100vh", width: "100vh", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1, backgroundColor: "red", flexDirection: "row", alignItems:"center" }}>
      <div style={{ display: "flex",flex: 1, justifyContent: "center" }}>
        <img src="https://avatars.githubusercontent.com/u/70853906?v=4" alt="Sourav Pahwa" style={{ height: "30vh", borderRadius: "50%", display: "flex" }} />
       </div> 
       <div style={{ flex: 2 }}>
        <h1>Hel</h1>
       </div>
      </div>
      <div style={{ display: "flex", flex: 1, backgroundColor: "green", flexDirection: "row", alignItems:"center" }}>
        <div style={{ flex: 2 }}>
          <h1>Lo</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="https://avatars.githubusercontent.com/u/74090377?v=4" alt="Mandeep Singh Saini" style={{ height: "30vh", borderRadius: "50%", display: "flex" }} />
        </div>
      </div>
    </div>
  )
};

export default About;
