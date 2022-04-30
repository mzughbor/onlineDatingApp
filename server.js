
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
// enviroment var for port , this one process.env.PORT for github 
const port = process.env.PORT || 3000;
// setup view engine 
// app.engine('hbs',exphbs({ extname: '.hbs', defaultLayout:'main'}));
app.engine('handlebars', exphbs.engine({ extname: 'handlebars', defaultLayout: 'main'}));

app.set('view engine','handlebars');

app.get('/', (req,res) => {
    //res.send('Hello')
    res.render('home', {
        title: 'Home',
    });
});

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About'
    }); //{layout: false}
});

app.get('/contact',(req,res) => {
    res.render('contact',{
        title: "Contact"
    });
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

