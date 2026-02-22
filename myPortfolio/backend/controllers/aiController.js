const { polishMessage } = require("../services/aiService");

const polishText = async (req, res) => {
  try {
    const { message } = req.body;
    console.log(message);
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("Service calling");
    const polished = await polishMessage(message);
    res.json(polished);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { polishText };
