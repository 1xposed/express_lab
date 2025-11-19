const express = require('express');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const app = express(); //calling this function, sets up a server


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))

// app.use(logger);

app.use('/users', userRouter);
app.use(`/posts`, postRouter);


app.get('/', (req, res)=> {
    console.log(`here`);
    res.render("index", {user:"karsten"});
}); //this function will run when someone goes to the root folder






function logger(req, res, next){
    console.log(`page accessed: ${req.originalUrl}`);
    next();
}


app.listen(3030);