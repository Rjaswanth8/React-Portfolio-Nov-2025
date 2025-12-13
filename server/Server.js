const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

/* ===============================
   MIDDLEWARE
=============================== */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===============================
   DATABASE CONNECTION (MongoDB Atlas)
=============================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* ===============================
   SCHEMA & MODEL
=============================== */
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactSchema);

/* ===============================
   API ROUTES
=============================== */

app.get("/api/contact", (req, res) => {
  res.json({ success: true, message: "Contact API is reachable" });
});

// POST route for contact form
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 Received contact form data:", req.body);
    const { name, phone, email, subject, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields (Name, Email, Message).",
      });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, phone, email, subject, message });
    await newContact.save();

    res
      .status(201)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
      error: err.message,
    });
  }
});

/* ===============================
   SERVE REACT FRONTEND  mongodb+srv://raminenijaswanth26:<db_password>@cluster0.kg8eioh.mongodb.net/?appName=Cluster0
=============================== */
// app.use(express.static(path.join(__dirname, "../build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

/* ===============================
   START SERVER
=============================== */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
