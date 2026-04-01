import React from "react";
import "./AdminDashboard.css";

function Dashboard() {
  const bookings = [
    {
      name: "Kasun",
      vehicle: "CAB-1234",
      service: "Oil Change",
      status: "Pending",
    },
    {
      name: "Nimal",
      vehicle: "CAR-5678",
      service: "Brake Service",
      status: "Approved",
    },
    {
      name: "Saman",
      vehicle: "CAD-9999",
      service: "Full Service",
      status: "Completed",
    },
  ];

  return (
    <div className="dashboard-container">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>🚗</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Bookings</li>
          <li>Services</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main */}
      <div className="main">
        <h1>Admin Dashboard</h1>

        {/* Cards */}
        <div className="cards">
          <div className="card total">Total Bookings <span>25</span></div>
          <div className="card pending">Pending <span>10</span></div>
          <div className="card approved">Approved <span>8</span></div>
          <div className="card completed">Completed <span>7</span></div>
        </div>

        {/* Table */}
        <div className="table-card">
          <h3>Recent Bookings</h3>

          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Vehicle</th>
                <th>Service</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b, index) => (
                <tr key={index}>
                  <td>{b.name}</td>
                  <td>{b.vehicle}</td>
                  <td>{b.service}</td>
                  <td>
                    {/* ✅ FIXED */}
                    <span className={`status ${b.status.toLowerCase()}`}>
                      {b.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn approve">✔</button>
                    <button className="btn reject">✖</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;