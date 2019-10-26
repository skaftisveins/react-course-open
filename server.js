const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// app.get('/', (req, res) => res.json({ msg: 'React Transactions Version: 3.0.0' }));

// Define Routes
app.use('/api/transactions', require('./routes/transactions'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
