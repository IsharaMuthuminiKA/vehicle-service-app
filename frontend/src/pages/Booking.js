import React, { useState } from "react";
import "./Booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted ✅");
    console.log(formData);
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h2>🚗 Vehicle Service Booking</h2>
        <p className="subtitle">
          Your professional auto care, just a click away.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Customer Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              name="vehicle"
              placeholder="Vehicle Number"
              onChange={handleChange}
            />

            <select name="service" onChange={handleChange}>
              <option>Select Service Type</option>
              <option>Oil Change</option>
              <option>Brake Service</option>
              <option>Tire Rotation</option>
              <option>Full Service</option>
            </select>
          </div>

          <div className="row">
            <input type="date" name="date" onChange={handleChange} />
          </div>

          <button type="submit" className="submit-btn">
            Submit Booking →
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;