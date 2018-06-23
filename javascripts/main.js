const {initializer,} = require('./events');
const firebase = require('./firebaseApi');

firebase.initialize();
initializer();
