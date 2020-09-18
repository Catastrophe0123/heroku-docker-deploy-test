import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('from the CI pipeline');
});

app.listen(PORT, () => {
	console.log('listening on port : ', PORT);
});
