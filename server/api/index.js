const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Example API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from API' });
});

module.exports = app;
