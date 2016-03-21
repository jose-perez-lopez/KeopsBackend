'use strict';

const fs = require('fs');
const config = fs.existsSync(process.cwd() + '/src/config.json') ? require('./config.json') : {};

module.exports = {
	APP_NAME: process.env.APP_NAME || config.APP_NAME,
	PORT: process.env.PORT || config.PORT,
	API_URL: process.env.API_URL || config.API_URL,
	MONGO_URL: process.env.MONGO_URL || config.MONGO_URL,
	API_KEY: process.env.API_KEY || config.API_KEY,
	ACCESS_CONTROL_ALLOW: {
		"headers": [
			"x-experience-version",
			"content-type",
			"Authorization"
		],
		"origins": [
			"http://localhost:8080", "http://vfusa-xr-web.herokuapp.com", "https://vfusa-xr-web.herokuapp.com"
		]
	},
	VERSION_CONTROL: {
		"header": "x-experience-version",
		"platforms": {
			"ios": {
				"link": "itms-services://?action=download-manifest&url=https://s3-us-west-2.amazonaws.com/experience-ios/__IOS_BUILD_NUMBER__/experience.plist",
				"__IOS_LATEST_VERSION__": true
			},
			"www": {
				"link": "",
				"1.0": true
			}
		},
		"public": [],
		"installPath": "/install",
		"versionPath": "/version"
	}
};
