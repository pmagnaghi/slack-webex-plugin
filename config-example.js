var slackbot = require('./lib/bot');

var config = {
    bot_name: "WebExCTO",//Provide the name to post under.  Default is WebexBo
    token: 'xoxp-2535239080-2535280320-187280725122-70e3fd8a12d8142a9cc2875a10da0144',
    webex_urls: {
      "launch": "https://go.webex.com/meet/",//REPLACE THESE W/ YOUR COMPANY URLs
      "join": "https://go.webex.com/join/",
      "DEFAULT": "https://go.webex.com/"
    },
    pattern: /^\:webex\s+(personal\s+(\w+))\s*$/, //Default is: /webex personal username
    verbose: true,
    emoji: ":webex:"//NOTE: you'll need to add this emoji

};

//DO NOT EDIT BELOW HERE
var slackbot = new slackbot.Bot(config);
slackbot.run();
