module.exports.config = {
	name: "adminUpdate",
	eventType: ["log:thread-admins","log:thread-name", "log:user-nickname"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Cập nhật thông tin nhóm một cách nhanh chóng",
    envConfig: {
        autoUnsend: true,
        sendNoti: true,
        timeToUnsend: 10
    }
};

module.exports.run = async function ({ event, api, Threads }) { 
    const { threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
        switch (logMessageType) {
            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐔𝐩𝐝𝐚𝐭𝐞 ] Đ𝓪̃ 𝓬𝓪̣̂𝓹 𝓷𝓱𝓪̣̂𝓽 𝓷𝓰𝓾̛𝓸̛̀𝓲 𝓭𝓾̀𝓷𝓰 ${logMessageData.TARGET_ID} 𝓽𝓻𝓸̛̉ 𝓽𝓱𝓪̀𝓷𝓱 𝓺𝓾𝓪̉𝓷 𝓽𝓻𝓲̣ 𝓿𝓲𝓮̂𝓷 𝓷𝓱𝓸́𝓶`, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 9000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐔𝐩𝐝𝐚𝐭𝐞 ] Đ𝓪̃ 𝓬𝓪̣̂𝓹 𝓷𝓱𝓪̣̂𝓽 𝓷𝓰𝓾̛𝓸̛̀𝓲 𝓭𝓾̀𝓷𝓰 ${logMessageData.TARGET_ID} 𝓽𝓻𝓸̛̉ 𝓽𝓱𝓪̀𝓷𝓱 𝓽𝓱𝓪̀𝓷𝓱 𝓿𝓲𝓮̂𝓷`, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 9000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                break;
            }

            case "log:user-nickname": {
                dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                if (typeof global.configModule["nickname"] != "undefined" && !global.configModule["nickname"].allowChange.includes(threadID) && !dataThread.adminIDs.some(item => item.id == event.author) || event.author == api.getCurrentUserID()) return;
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐔𝐩𝐝𝐚𝐭𝐞 ] Đ𝓪̃ 𝓬𝓪̣̂𝓹 𝓷𝓱𝓪̣̂𝓽 𝓫𝓲𝓮̣̂𝓽 𝓭𝓪𝓷𝓱 𝓬𝓾̉𝓪 𝓷𝓰𝓾̛𝓸̛̀𝓲 𝓭𝓾̀𝓷𝓰 ${logMessageData.participant_id} 𝓽𝓱𝓪̀𝓷𝓱: ${(logMessageData.nickname.length == 0) ? "tên gốc": logMessageData.nickname}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 9000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }

            case "log:thread-name": {
                dataThread.threadName = event.logMessageData.name || "Không tên";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐔𝐩𝐝𝐚𝐭𝐞 ] Đ𝕒̃ 𝕔𝕒̣̂𝕡 𝕟𝕙𝕒̣̂𝕥 𝕥𝕖̂𝕟 𝕟𝕙𝕠́𝕞 𝕥𝕙𝕒̀𝕟𝕙 ${dataThread.threadName}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 9000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
}
