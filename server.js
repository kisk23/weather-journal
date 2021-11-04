// Setup empty JS object to act as endpoint for all routes
let projectData = {};
// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
//Some other dependancies
app.use(express.json());
const { json } = require('body-parser');
const { request, response } = require('express');
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 3003;
const server = app.listen(port, () => {
    console.log(`Weather journal listenting on port [${port}] ...`)
}
);
app.get("/all",(req,res)=>{
    res.send(projectData);
});


const postData=(req,res)=>{
    projectData=req.body ;
    console.log(projectData);
    res.send(projectData) ;
    
}
app.post("/add",postData);

