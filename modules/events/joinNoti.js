module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "HĐGN",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`🇻🇳 ${global.config.PREFIX} 🇻🇳 🐷 ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`✌️KẾT✌️ ✌️NỐI✌️ ✌️THÀNH✌️ ✌️CÔNG✌️\n◆━━━━━━━━━━━━━◆\n𝕃𝕖̣̂𝕟𝕙 𝕓𝕠𝕥 (𝕡𝕣𝕖𝕗𝕚𝕩): [ > ]\n\n𝐁𝐎𝐓 ĐƯỢ𝐂 𝐐𝐔Ả𝐍 𝐋Í 𝐁Ở𝐈 𝐍𝐠𝐮𝐲𝐞̂̃𝐧 𝐍𝐡𝐮̛ 𝐓𝐡𝐚̀𝐧𝐡.\n❤𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠❤\nXin❤️cảm🧡ơn💛đã💚đọc--UwU--\n✅FB:https://www.facebook.com/thanhdz.adminbot/ 🌸`, attachment: fs.createReadStream(__dirname + "/cache/joinGif/join.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinMp4");
			const pathGif = join(path, `hi.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝓗𝓮𝓵𝓵𝓸 𝓬𝓪̣̂𝓾 {name}.\n𝐂𝐡𝐚̀𝐨 𝐦𝐮̛̀𝐧𝐠 𝐜𝐚̣̂𝐮 đ𝐚̃ đ𝐞̂́𝐧 𝐯𝐨̛́𝐢 {threadName}.\n𝗖𝗮̣̂𝘂 𝗹𝗮̀ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝘂̛́ {soThanhVien} 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦\n𝐍𝐡𝐨̛́ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐧𝐡𝐚 𝐯𝐨̛́𝐢 𝐧𝐡𝐨́𝐦 đ𝐞̂̀𝐮 đ𝐚̣̆𝐧 𝐧𝐡𝐚 𝐤𝐡𝐨̂𝐧𝐠 𝐥𝐚̀ 𝐚̆𝐧 𝐤𝐢𝐜𝐤 đ𝐚̂́𝐲 🥳🥳" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
