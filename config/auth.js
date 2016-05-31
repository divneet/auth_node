// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1744827005801374', // your App ID
        'clientSecret'  : '273fa304316a3516109aa0a0deb0b4b5', // your App Secret
        'callbackURL'   : 'http://localhost:8000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '306213439586-1sknm0ivq6ks8mm3h83s1b57di95ihas.apps.googleusercontent.com',
        'clientSecret'  : 'IuprTfZ0tvb0DhHQCx-cQrzY',
        'callbackURL'   : 'http://localhost:8000/auth/google/callback'
    }

};