const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', userRoutes);

app.listen(3000, () => {
  console.log('App in esecuzione su http://localhost:3000');
});