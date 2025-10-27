const express = require('express');

const app = express(); //calling this function, sets up a server

app.get('/', (req, res)=> {
    console.log(`here`);
    res.send("Hello World!")
}); //this function will run when someone goes to the root folder




app.listen(3030);