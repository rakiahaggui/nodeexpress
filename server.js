const express = require('express');
const app = express();
const PORT = 5000;

const closed = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  return (day !== 1 && day !== 5) && (hour > 9 && hour < 14);
};

app.use(function(req, res, next) {
  if (closed()) {
    next();
  } else {
    res.sendFile(__dirname + '/pages/Close.html');
    console.log('This App is not available!');
  }
});

app.use(express.static('pages'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/pages/Home.html');
});

app.get('/Contact', function(req, res) {
  res.sendFile(__dirname + '/pages/Contact.html');
});

app.get('/Service', function(req, res) {
  res.sendFile(__dirname + '/pages/Service.html');
});

app.get('/Close', function(req, res) {
  res.sendFile(__dirname + '/pages/Close.html');
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
