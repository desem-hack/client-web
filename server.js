const express     = require('express');
const path        = require('path');
const app         = express();
const static_path = path.join(__dirname, 'build');
const port        = 4000;

app.use(express.static(static_path));

app.get('/data', function (req, res) {
  res.sendFile('data.json', {
    root: static_path
  });
});

app.get('/*', function (req, res) {
  res.sendFile('index.html', {
    root: static_path
  });
});

app.listen(process.env.PORT || port, function (err) {
  if (err) { console.log(err) };
  console.log(`Listening at localhost:${port}`);
});
