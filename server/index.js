const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const port = 3000;

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist/index.html')));

app.listen(port, () => console.log(`Listening on PORT${port}`));