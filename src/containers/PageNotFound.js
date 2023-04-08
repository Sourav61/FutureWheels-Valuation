import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("HHH2")
    
    // navigate("/predict");
  }

  
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Oh! You Seem To Be Lost
    </div>
  );
}

export default PageNotFound;
