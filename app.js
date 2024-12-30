const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const { Pool } = require('@neondatabase/serverless');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true
  }
});

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Messages array
const messages = [
  { 
    text: "Hi there!", 
    user: "Amando", 
    added: new Date(),
    email: "amando@example.com",
    topic: "general" 
  },
  { 
    text: "Hello World!", 
    user: "Charles", 
    added: new Date(),
    email: "charles@example.com",
    topic: "feedback" 
  },
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

app.post("/new", (req, res) => {
  const { text, user, email, topic, date } = req.body;
  
  if (text && user) {
    const newMessage = {
      text,
      user,
      added: date ? new Date(date) : new Date(),
      email: email || '',
      topic: topic || 'general'
    };
    
    messages.unshift(newMessage); // Add new message to the beginning
  }
  res.redirect("/");
});

app.get("/messages/:id", (req, res) => {
  const message = messages[req.params.id];
  if (message) {
    res.render("message", { title: "Message Details", message: message });
  } else {
    res.status(404).send("Message not found");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;