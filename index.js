// setInterval(function() {
// 	console.log('Hello World!!!');
// }, 1000);
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.status(201).json({
		name: "Viktor"
	});
});

app.listen(port, () => console.log(`Server started on port ${port}`));