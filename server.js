const express = require('express')
const app = express()
const redis = require('redis'),
      client = redis.createClient(6379, 'redis');

app.get('/', (req, res) => {
	client.incr('hits');
	client.get('hits', (err, reply) => {
		res.send("Hello Container! I have been hit "+reply+"\n");
	})
	//res.send('Hello Container! I have been hit '+client.get('hits'));
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));
