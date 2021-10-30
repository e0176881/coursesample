const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const app = express();
const cors = require('cors');
const { httpLogger } = require('./middlewares');
const { logger } = require('./utils');
const port = process.env.PORT || 3001;
var token = '';
const secret = 'supersecret';
const path = require('path');
const { randomInt } = require('crypto');

var productTypeDict = {
	'127': '',
	'070': '',
	'291': '',
	'969': '',
	'555': '',
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const upload = multer();
app.use(cors());
app.use(httpLogger);
// Register the home route that displays a welcome message
// This route can be accessed without a token

  message = 
["Logic will get you from A to B. Imagination will take you everywhere.", 
"There are 10 kinds of people. Those who know binary and those who don't.", 
"There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.", 
"It's not that I'm so smart, it's just that I stay with problems longer.", 
"It is pitch dark. You are likely to be eaten by a grue."]
  
app.use('/', express.static(__dirname + '/test'));
 
app.get('/getMessage', function (req, res) {
	randomNumber = Math.floor(Math.random() * message.length);
	res.send(JSON.stringify({msg:message[randomNumber]}));
});

app.listen(port, () => {
	logger.info(`Listening on port ${port}`);
	  console.log(`Listening on port ${port}`);
  });
