import React from "react";
import "./Services.css";
import { Wrench, Settings, Activity, Circle } from "lucide-react";

const Services = () => {
  return (
    <div className="services-page">

      <h1 className="title">Service Categories</h1>

      <div className="service-grid">

        <div className="service-card">
          <div className="icon"><Wrench /></div>
          <h3>Oil Change</h3>
          <p>Regular & synthetic oil and filter change</p>
        </div>

        <div className="service-card">
          <div className="icon"><Settings /></div>
          <h3>Brake Service</h3>
          <p>Brake pad and fluid check/replacement</p>
        </div>

        <div className="service-card">
          <div className="icon"><Circle /></div>
          <h3>Tire Rotation</h3>
          <p>Balanced tire shifting for wear reduction</p>
        </div>

        <div className="service-card">
          <div className="icon"><Activity /></div>
          <h3>Engine Diagnostics</h3>
          <p>Full system inspection and tuning</p>
        </div>

      </div>

    </div>
  );
};

export default Services;