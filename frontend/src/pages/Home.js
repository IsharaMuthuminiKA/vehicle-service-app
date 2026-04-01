import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Wrench, Shield, Circle, Activity } from "lucide-react";
import carImg from "../assets/cAR123.jpeg";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      <nav className="navbar">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/login")}>Login</span>
        <span onClick={() => navigate("/booking")}>Booking</span>
        <span onClick={() => navigate("/services")}>Services</span>
      </nav>

      <div className="hero">

        <div className="hero-left">
          <h1>Vehicle Service Booking System</h1>

          <div className="buttons">
            <button onClick={() => navigate("/booking")}>
              Book Service
            </button>

            <button 
              className="outline"
              onClick={() => navigate("/dashboard")}
            >
              Admin Dashboard
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src={carImg} alt="car" />
        </div>

      </div>

      {/* 🔥 SERVICES CARDS (FIXED) */}
      <div className="cards">

        <div className="card">
          <Wrench />
          <h3>Oil & Filter Change</h3>
          <p>Keep your engine running smoothly.</p>
        </div>

        <div className="card">
          <Shield />
          <h3>Brake Service</h3>
          <p>Safe stopping power you can trust.</p>
        </div>

        <div className="card">
          <Circle />
          <h3>Tire Care</h3>
          <p>Regular rotations and balance.</p>
        </div>

        <div className="card">
          <Activity />
          <h3>Engine Diagnostics</h3>
          <p>Full system check & tuning.</p>
        </div>

      </div>

    </div>
  );
};

export default Home;