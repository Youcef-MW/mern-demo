const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://localhost:3000'
}));
=======
const app = express();
const PORT = process.env.PORT || 5000;
>>>>>>> eeeb75ca32498d3589f2246579bbfa521a97fbc8

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Backend operational',
    timestamp: new Date().toISOString()
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;