const Contact = require("../models/contactModel");

const createContact = async (req, res) => {
  try {
    console.log("Incoming Data:", req.body);

    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    const savedData = await newContact.save();

    console.log("Saved:", savedData);

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: savedData,
    });
  } catch (error) {
    console.log("BACKEND ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
};