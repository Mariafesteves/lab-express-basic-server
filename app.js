// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require('express');
const morgan= require('morgan');

// CREATE EXPRESS APP
// Here you should create your Express app:

const app= express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));


// ROUTES
// Start defining your routes here:

app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/blog', function(req, res, next){
    res.sendFile(__dirname + 'views/blog.html')
});

app.get('/api/projects', function(req, res, next){
    res.json(projects)
});

app.get('/api/articles', function(req, res, next){
    res.json(articles)
});

app.get('*', function(req, res, next){
    res.status(404).sendFile(__dirname + 'views/notfound.html')
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, ()=>{
    console.log('Server is running on port 5005');
})