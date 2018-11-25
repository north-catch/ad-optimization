const HOST_URL = '<YOUR HOST URL HERE>';
const RENDERTRON_ENDPOINT = 'https://render-tron.appspot.com/render';
const DATABASE_URL = 'https://north-catch-automation.firebaseio.com/';

const admin = require('firebase-admin');
admin.initializeApp({
  databaseURL: DATABASE_URL,
});

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const cookieParser = require('cookie-parser')();
const session = require('./middleware/session-firebase')(admin);
const validateFirebaseIdToken = require('./middleware/validate-firebase-id-token')(admin);
const rendertron = require('./middleware/rendertron')(RENDERTRON_ENDPOINT, HOST_URL);
const defaultRoute = require('./routes/default');

const app = express();

app.use(cors);
app.use(cookieParser);
app.use(session);
app.use(validateFirebaseIdToken);
app.use(rendertron);

app.get('/*', defaultRoute);

exports.app = functions.https.onRequest(app);
