const router = require("express").Router();
const Service = require("../models/Service");

// GET
router.get("/", async (req, res) => {
  const data = await Service.find();
  res.json(data);
});

// CREATE
router.post("/", async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.json(service);
});

module.exports = router;