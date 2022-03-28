module.exports.config = {
	name: "gai3",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "Như Thành",
	description: "Random ảnh có Ko",
	commandCategory: "random-img",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
		axios.get('https://Api-vip.thanhnhu2.repl.co/gaibox').then(res => {
		let callback = function () {
					api.sendMessage({
						body : `Gái xinh cho bạn nè`,
						attachment: fs.createReadStream(__dirname + '/cache/gaidep.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/gaidep.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/gaidep.jpg')).on("close", callback);
			})
}
