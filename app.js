const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json({ extended: false }));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Hey! listening to you on port ${PORT}`);
  });

  app.get('/', (req, res) => {
      console.log(req.headers)
    res.send({ msg: 'Hello-1B' });
  });

  
