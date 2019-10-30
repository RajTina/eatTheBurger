//
var express = require ('express')
//it runs the whole file, backend and frontend
var bodyParser = require('body-parser')
//it puts everything in string 
var methodOverride = require ('method-override')
var exphbs = require ('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));
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

