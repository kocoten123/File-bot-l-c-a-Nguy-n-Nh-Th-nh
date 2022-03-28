 module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người rời khỏi nhóm",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "đã không tán được em nào nên đã tự cút" : "bị quản trị viên đá";
	const path = join(__dirname, "cache", "leaveMp4");
	const gifPath = join(path, `bye.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "𝕋𝕒̣𝕞 𝕓𝕚𝕖̣̂𝕥 𝕟𝕙𝕖́, 𝕋𝕒̣𝕞 𝕓𝕚𝕖̣̂𝕥 𝕟𝕙𝕖́ 𝕟𝕘𝕦̛𝕠̛̀𝕚 𝕒𝕟𝕙 𝕪𝕖̂𝕦 {name} 😞" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}
