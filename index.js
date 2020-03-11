// setInterval(function() {
// 	console.log('Hello World!!!');
// }, 1000);
const express = require('express');
const app = express();
const port = 5000;
const resources = require("./res/response.json");

app.get('/', (req, res) => {
	res.status(201).json({
		name: resources.name,
		time: new Date()
	});
});

app.listen(port, () => console.log(`Server started on port ${port}`));