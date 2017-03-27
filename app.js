const express = require ('express')
const Sequelize = require ('sequelize')
const bodyParser = require ('body-parser')
const app = express ()
// const session = require('express-session')
const pg = require('pg');
const db = require(__dirname + '/models/db.js')

//setting view folder and view engine
app.set('views','./views');
app.set('view engine', 'pug');
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to ssupport URL-encoded bodies
	extended: false
})); 

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

app.get('/form', function (request, response) {
	response.render('form')
});

app.post('/questionnaire', function(request, response){
	db.Answer.create({
		q1: request.body.q1,
		q2: request.body.q2,
		q3: request.body.q3,
		q4: request.body.q4,
		q5: request.body.q5,
		q6: request.body.q6,
		q7: request.body.q7
	}).then(function(){
		response.redirect("/")
	})
	console.log('answers are added to table in db')
})

app.listen(3000, () => {
    console.log('the server is running on localhost:3000')
});