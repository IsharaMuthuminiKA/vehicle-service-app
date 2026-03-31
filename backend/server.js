const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/vehicleDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// server run
app.listen(5000, () => console.log("Server running on port 5000"));