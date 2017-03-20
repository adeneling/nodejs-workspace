/* Connect to API Team Treehouse */

/* require https */
const https = require('https');
const username = "bramantyaprakosa2";

function printMessage(username, badgeCount, points){
	const message = `${username} has ${badgeCount} total badge(s) and ${points} points in javascript`;
	console.log(message);
}

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
	console.dir(response.statusCode);
});