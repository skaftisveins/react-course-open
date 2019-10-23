const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ msg: 'Expenses Version: 3.0.0' }));

// Define Routes
app.use('/api/expenses', require('./routes/expenses'));
// app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
