//
var express = require ('express')
//it runs the whole file, backend and frontend
var bodyParser = require('body-parser')
//it puts everything in string 
var methodOverride = require ('method-override')
var exphbs = require ('express-handlebars');

var app = express();
app.use(express.static('_dirname' +'/public'));
//

app.use (bodyParser.urlencoded({
    extended :false
}));

app.use (methodOverride('_method'));
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
 app.set('view engine', 'handlebars');
 var routs = require ('./controllers/routes.js');
 app.use ('/',routs);

 var PORT = process.env.PORT|| 3000;
app.listen(PORT, function(){
    console.log("listening on port: "+PORT)
});

// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

// var port = 3000;

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/public"));

// app.use(bodyParser.urlencoded({ extended: false }));

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");

// app.use("/", routes);

// app.listen(port);