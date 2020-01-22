var express = require('express');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//importing my routes from the controllers file.
const htmlRoutes = require('./controllers/htmlController');
const userRoutes = require('./controllers/userController');
const thingRoutes = require('./controllers/thingController');

//setting my app to use the routes, the first arguent is the prefix applied to all routes in the file
app.use("/",htmlRoutes);
//all routes in userRoutes will start with /api/user
app.use('/api/user',userRoutes);
//all routes in thingRoutes will start with /api/thing
app.use('/api/thing',thingRoutes);


db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});