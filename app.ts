import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('welcome to our world');
});

app.listen(PORT, () => {
	console.log('listening on port : ', PORT);
});
