// setInterval(function() {
// 	console.log('Hello World!!!');
// }, 1000);
const express = require('express');
const app = express();
const port = 5000;
// const resources = require("./res/response.json");
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const mongoClient = MongoClient(url, {useNewUrlParser: true});



app.get('/', (req, res) => {
	// res.status(201).json({
	// 	name: resources.name,
	// 	time: new Date()
	// });
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
	mongoClient.connect(function(err, client) {
		const db = client.db('usersdb');
		const collection = db.collection('users');
		let user = {name: 'Tom2', age: 23};
		collection.insertOne(user, function(error, result) {
			if(err) {
				return console.log(err);
			}

			console.log(result.ops);
		});
		collection.find().toArray().then(function(items) {
			console.log(items);
		});
		client.close();
	});
});