const Service = require("../models/service-model");
const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ message: "No service found" });
      return;
    }
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const addService = async (req, res) => {
  try {
    const response = req.body;
    await Service.create(response);
    if (!response) {
      return res.status(400).json({ message: "Service not added"});
    }
    return res.status(200).json({ message: "Service Added Successfully!!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};





module.exports = { services, addService};


