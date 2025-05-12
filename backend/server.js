import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://akash123:akash123@akashdb.kdlcig9.mongodb.net/?retryWrites=true&w=majority&appName=AkashDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Contact Form Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

const ContactForm = mongoose.model('ContactForm', contactSchema);

// Send Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akashlucaas@gmail.com',  // Replace with your email
    pass: 'vxesvgxstztyybrc',   // Replace with your email password or app-specific password
  },
});

const sendMail = (formData) => {
  const mailOptions = {
    from: 'akashlucaas@gmail.com',  // Replace with your email
    to: 'akashlucaas@gmail.com',  // Replace with the recipient's email
    subject: 'New Contact Form Submission',
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Message: ${formData.message}
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Error sending email: ', err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// POST route to handle form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Save to MongoDB
  const newContactForm = new ContactForm({ name, email, phone, message });
  try {
    await newContactForm.save();
    sendMail(req.body);  // Send the email after saving the form
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});