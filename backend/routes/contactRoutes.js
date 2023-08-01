const express = require("express");

const contactModel = require("../models/contact");

const contactController = express.Router();

contactController.post("/addcontact", async (req, res) => {
  const { yourname, email,message } = req.body;

  try {
    const contact = new contactModel({
      yourname, email,message
    });

    await contact.save();
    return res
      .status(200)
      .send({ status: 200, message: "contact register successfull", contact });
  } catch (error) {
    res.send(error)
  }
});

contactController.get("/getcontact", async (req, res) => {
  try {
    const contact = await contactModel.find();
    res.send(contact);
  } catch (error) {
    res.send(error)
  }
});

module.exports = contactController;
