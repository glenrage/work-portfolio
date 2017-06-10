'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.use (express.static('./public'));

app.get('/', (req, res) => res.sendFile('public/index.html', {root: '.'}));

app.listen(PORT, function(){
  console.log(`The PORT is: http://localhost:${PORT}`);
});
