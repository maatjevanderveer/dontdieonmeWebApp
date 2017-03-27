//- JAVASCRIPT CODE TO COMMUNICATE WITH DATABASE BY USING SEQUELIZE //-


// SET UP CONNECTION WITH DATABASE
const Sequelize = require('sequelize')
var db = new Sequelize ('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/plantquest');

// TESTING DATABASE CONNECTION
db
.authenticate()
.then(function(err) {
	console.log('Connection has been established successfully.');
}, function (err) {
	console.log('Unable to connect to the database:', err);
});

// DEFINE MODEL (W/ ANSWERS TO QUESTIONS)
const Answer = db.define('answer', {
	q1: {
		type: Sequelize.INTEGER,
		allowNull: true,
	},
	q2:{
		type:Sequelize.BOOLEAN,
		allowNull:true, 
	},
	q3: {
		type: Sequelize.BOOLEAN,
		allowNull:true,
	},
	q4: {
		type: Sequelize.BOOLEAN,
		allowNull:true,
	},
	q5: {
		type: Sequelize.BOOLEAN,
		allowNull:true,
	},
	q6: {
		type: Sequelize.BOOLEAN,
		allowNull:true,
	},
	q7: {
		type: Sequelize.BOOLEAN,
		allowNull:true,
	},
});

// SYNC DATABASE
db.sync({
	force:true			// drops tables before recreating
})
.then(function(){
	return Answer.create ({
		q1: "1",
		q2: "true",
		q3: "true",
		q4: "true",
		q5: "true",
		q6: "true",
		q7: "true",
	})
	// .then(function(user){
	// 	return user.createPlant ({
	// 		plantName: "pancakeplant",
	// 		description: "ik bied een stekje aan van mijn lieve pannekoekenplantje",
	// 		userId: "user.userId"
	// 	})
	// })
	// .then(function(){
	// 	return User.create ({
	// 		userName: "Kirsten",
	// 		email: "kirsten@mail.com",
	// 		password: "123",
	// 		name: "kirsten",
	// 		address: "Utrechtsestraat",
	// 		houseNumber: "241",
	// 		zipcode: "1015DT",
	// 		city: "Utrecht"
	// 	})
	// })
	// .then(function(user){
	// 	return user.createPlant ({
	// 		plantName: "Cactus",
	// 		description: "Pas op ik prik!",
	// 		userId: "user.userId"
	// 	})
	// })
	// .then(function(){
	// 	return User.create ({
	// 		userName: "Cinerama",
	// 		email: "cinerama@mail.com",
	// 		password: "123",
	// 		name: "Cinerama",
	// 		address: "Westblaak",
	// 		houseNumber: "18",
	// 		zipcode: "3012KL",
	// 		city: "Rotterdam"
	// 	})
	// })
	.catch ( function (error){
		console.log(error)
	})
})

// EXPORT MODEL TO APP.JS
module.exports = {
	db: db,
	Answer:Answer,
}