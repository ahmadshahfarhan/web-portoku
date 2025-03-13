require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Email Gmail kamu
    pass: process.env.EMAIL_PASS, // App Password dari Google
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "ahmadshahfarhann@gmail.com", // Ganti dengan email tujuan
    subject: `Pesan dari ${name}`,
    nomor: `nomor: ${subject}`,
    text: `Email: ${email}\n\nPesan: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email berhasil dikirim!" });
  } catch (error) {
    res.status(500).json({ message: "Gagal mengirim email", error });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
