const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// ✅ CREATE booking
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking({
      ...req.body,
      status: "Pending",
      createdAt: new Date(),
    });

    const saved = await newBooking.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ GET all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ UPDATE STATUS 🔥
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ DELETE BOOKING 🔥
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;