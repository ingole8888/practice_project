const express = require("express");

const detailsModel = require("../models/detailsmodal");

const detailsController = express.Router();

detailsController.post("/adddetails", async (req, res) => {
  const { name,number } = req.body;

  try {

    const details = new detailsModel({
      name,number
    });

    await details.save();
    return res
      .status(200)
      .send({ status: 200, message: " successfull" });
  } catch (error) {
    res.send(error)
  }
});


module.exports = detailsController;
