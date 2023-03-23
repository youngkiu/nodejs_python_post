const express = require('express');
const app = express();

const port = 3000;
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {});
});

app.post('/build', (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
