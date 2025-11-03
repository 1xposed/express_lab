const express = require('express');

const app = express(); //calling this function, sets up a server
app.set('view engine', 'ejs');


app.get('/', (req, res)=> {
    console.log(`here`);
    res.render("index", {user:"karsten"});
}); //this function will run when someone goes to the root folder

app.get('/users', (req, res)=>{
    res.send('User List');

});

app.get('/users/new', (req, res)=>{
    res.send('new user form');
});



app.listen(3030);