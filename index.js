const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');
const app = express();


// DB Setup
mongoose.connect('mongodb://localhost:27017/auth',{ useNewUrlParser: true });

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
app.use(cors());
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port', port);
