import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
// import uuid from 'uuid/v4';

import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser'; // depends on "cookie" and "cookie-signature" 

// import session from 'express-session'; //Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
// import sessionFileStore from 'session-file-store';
import 'dotenv/config';

// import jwt from 'jsonwebtoken'

//Error: unable to verify the first certificate in nodejs

const { PORT, NODE_ENV, NOW, SECRET } = process.env;
const dev = NODE_ENV === 'development';
// const FileStore = sessionFileStore(session);

function logger(req, res, next) {
    console.log(`~> Received ${req.method} on ${req.url}`);
    next();
}
function redirect (req, res) {
	const location = '/authenticate'
	res.writeHead(302, { Location: location })
	return res.end()
  }
function protect(req, res, next) {

    const allowed = [
        '/login',
        '/reset',
        '/auth/login',
        '/auth/register',
        '/register'
    ];

    const isPrivate = !allowed.includes(req.path);
    const isFile = req.path.includes('.');
    const hasToken = req.session.token;

    if ( isPrivate && !isFile && !hasToken ) {
        return redirect(req, res)
	}

    next();
}

polka() // You can also use Express
	.use(
		// logger,
		bodyParser.json(),
		// session({
		// 	genid: function(req) {
		// 		return uuid() // use UUIDs for session IDs
		// 	  },
		// 	secret: SECRET,
		// 	resave: false,
		// 	saveUninitialized: false,
		// 	cookie: { maxAge: 31536000 },
		// 	// store: new FileStore({ path: NOW ? `/tmp/sessions` : `.sessions` })
		// }),
		//protect,
		// cookieParser(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		// cookieParser(),  req.headers.cookie  --> req.cookies and res.cookie()

		sapper.middleware({ session: (req, res) => { return {}; } })
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

	// polka - cookieParser - issue
	// https://github.com/lukeed/polka/issues/83
	// 