import mongoose from "mongoose";

/* ===============================
   MongoDB Connection
=============================== */
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ Please define MONGO_URI in Vercel Environment Variables");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/* ===============================
   Schema & Model
=============================== */
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

/* ===============================
   API Handler
=============================== */
export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectDB();

    const { name, phone, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Message are required",
      });
    }

    // Save data
    await Contact.create({
      name,
      phone,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("❌ Contact API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
