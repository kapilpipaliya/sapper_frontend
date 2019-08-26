import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import bodyParser from 'body-parser';
import 'dotenv/config';
const { PORT, NODE_ENV, NOW, SECRET } = process.env;
const dev = NODE_ENV === 'development';
polka()
	.use(
		bodyParser.json(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({ session: (req, res) => { return {}; } })
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});