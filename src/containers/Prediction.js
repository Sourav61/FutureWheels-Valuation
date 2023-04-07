import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Prediction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("HHH")
    
    navigate("/predict");
  }
  return (
  <div style={{ overflow: "visible"}}>
    <img src="https://raw.githubusercontent.com/Sourav61/Car-Price-Prediction/main/static/original.png" alt="car-image" style={{ height:"100%", width :"100%", position: "relative" }}/>
    

  <div style={{ top: "0px", display: "flex", width: "100%", position: "absolute", justifyContent: "center" }}>
    <h1 class="text-center" style={{ position : "absolute" }}>Car Price Prediction</h1>
    <form action={handleClick} method="post" style={{backgroundColor:"#4cafaf"}}>

      <label htmlFor="Year">Year of Purchase</label><br />
      <input type="text" id="Year" name="Year" placeholder="Enter year of manufacture" required="required" /><br />
      <label htmlFor="Present_Price">Showroom Price(in lakhs)</label><br />
      <input type="text" id="Present_Price" name="Present_Price" placeholder="Enter Present price in lacs"
        required="required" /><br />
      <label htmlFor="Kms_Driven">Kilometers Driven</label><br />
      <input type="text" id="Kms_Driven" name="Kms_Driven" placeholder="Enter total Kms Driven" required="required" /><br />

      <label htmlFor="Owner">No. of owners</label><br />
      <select id="owner" name="Owner">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="3">3</option>
      </select><br />
      <label htmlFor="Fuel_Type_Petrol">Fuel</label><br />
      <select id="Fuel_Type_Petrol" name="Fuel_Type_Petrol" required="required">
        <option value="Petrol">petrol</option>
        <option value="Diesel">diesel</option>
        <option value="Cng">cng</option>
      </select><br />
      <label htmlFor="Seller_Type_Individual">Owner type</label><br />
      <select id="Seller_Type_Individual" name="Seller_Type_Individual" required="required">
        <option value="dealer">dealer</option>
        <option value="individual">individual</option>
      </select><br />
      <label htmlFor="Transmission_Mannual">Transmission type</label><br />
      <select id="Transmission_Mannual" name="Transmission_Mannual" required="required">
        <option value="mannual car">mannual car</option>
        <option value="automatic car">automatic car</option>
      </select> <br />

      <input type="submit" value="Calculate Selling Price" />
    </form>
  </div>

  <h2><b></b></h2>
  </div>)
};

export default Prediction;
