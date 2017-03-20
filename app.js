const express = require ('express')
// const Sequelize = require ('sequelize')
// const bodyParser = require ('body-parser')
const app = express ()
// const session = require('express-session')
// const db = require(__dirname + '/models/db.js')

//setting view folder and view engine
app.set('views','./views');
app.set('view engine', 'pug');
// app.use(bodyParser.json() );       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to ssupport URL-encoded bodies
// 	extended: false
// })); 

// MIDDLEWARE
// app.use(session({
// 	secret: 'oh wow very secret much security',
// 	resave: true,
// 	saveUninitialized: false
// }));

app.use(express.static('static'));

// ROUTES
// HOME
app.get('/', function (request, response){
	response.render('index')
})

app.listen(3000, () => {
    console.log('the server is running on localhost:3000')
});