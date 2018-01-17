const express = require('express');
const hbs = require('hbs');

var app = express();

app.use((req, res, next) => {
  res.render('maintenance.hbs')
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('currentYear', () => {
  return new Date().getFullYear();
  // return 'test';
});

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});


app.get('/', (req, res) => {
  // res.send('<h1>Hello express!<h1>')
  res.render('home.hbs',{
    pageTitle: 'Home page',
    message: 'Welcome to my site',
    // currentYear: new Date().getFullYear(),
  });
});

app.get('/about', (req, res) => {
  // res.send('About page')
  res.render('about.hbs', {
    pageTitle: 'About page',
    // currentYear: new Date().getFullYear(),
  });

})

app.listen(3000);
