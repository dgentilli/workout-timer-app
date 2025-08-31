// server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB (replace URI with your own)
mongoose
  .connect('mongodb://127.0.0.1:27017/workoutApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
