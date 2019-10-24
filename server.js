const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// app.get('/', (req, res) => res.json({ msg: 'React Expenses Version: 3.0.0' }));
// app.get('/', (req, res));

app.get('/', (req, res));
// Define Routes
// app.use('/api/expenses', (req, res) =>
//   //   res.json({ msg: 'React Expenses Version: 3.0.0' })
//   console.log(res)y
//   res.json()
// );
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
