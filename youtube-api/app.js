const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const OAuth2 = google.auth.OAuth2;

const SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
const TOKEN_DIR = '.credentials/';
const TOKEN_PATH = TOEKN_DIR + 'token.json';

fs.readFile('client_secret.json', function processClientSecrets(err, content){
    if (err) {
        console.log('Error to load client secret file: ' + err);
        return;
    }

    authorize(JSON.parse(content), getChannel)
});

function authorize(credentials, callback) {
    const cred = credentials.installed;
    const clientSecret = cred.client_secret;
    const clientId = cred.client_id;
    const redirectUrl = cred.redirect_uris[0];
    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl)

    fs.readFile(TOKEN_PATH, function(err, token) {
        if(err) {
            
        } else {
            oauth2Client.credentials = JSON.parse(token);
            callback(oauth2Client);
        }
    });
}

function getChannel(){
    
}
