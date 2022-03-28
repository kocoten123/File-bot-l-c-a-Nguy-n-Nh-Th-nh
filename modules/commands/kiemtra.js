Code:
const axios = require("axios");
module.exports.config = {
  name: "kiemtra",
  version: "0.0.1-beta",
  hasPermssion: 0,
  credits: "Ỏ",
  description: "",
  commandCategory: "người dùng",
  usages: "check ",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": ""
  }
};

module.exports.run = async ({ args, api, event, Currencies, client }) => {
  const { threadID, senderID, messageID, type, mentions } = event;
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  if (args.length == 0) return api.sendMessage(` ===  Bạn có thể dùng  === \n--------\n» kiemtra checkpoint => Lọc thành viên bị bay acc khỏi nhóm\n--------\n» kiemtra del => Lọc thành viên khỏi nhóm theo số tin nhắn\n--------\n» kiemtra luotdung => Check số lượt dùng bot còn lại của bạn\n--------\n» kiemtra nude => Check những ảnh gợi cảm\n--------\n    === 「${timeNow}」 ===`, event.threadID, event.messageID);
  var arr = [];
  var mention = Object.keys(event.mentions);
  const data = await api.getThreadInfo(event.threadID);

  ///////////// lọc ndfb ////////////////
  
  if (args[0] == "checkpoint") {// kick người dùng fb
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());

    if (!find) return api.sendMessage(`» Bạn và bot cần là quản trị viên!`, event.threadID);
    let storage = [];
    for (const value of data.userInfo) storage.push({ "id": value.id, "gender": value.gender });
    for (const user of storage) {
      if (user.gender == undefined) api.removeUserFromGroup(user.id, event.threadID)
    } return;
  }
  ////////// lọc tv //////////////
    
  else if (args[0] == "del") {// lọc thành viên theo số tin nhắn bạn cần
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());
    if (!find) return api.sendMessage(`» Bạn và bot cần là quản trị viên!`, event.threadID);
    if (!args[1]) return api.sendMessage(`» HDSD: check del => số tin nhắn cần lọc `, event.threadID);
    let storage = [];
    for (const value of data.userInfo) storage.push({ "id": value.id, "name": value.name });
    for (const user of storage) {
      const countMess = (await Currencies.getData(user.id)).exp;
      if (typeof countMess == "undefined") await Currencies.setEXP(mention, parseInt(0))
      // if (countMess ==  undefined) api.removeUserFromGroup(user.id,event.threadID)
      if (countMess <= args[1]) setTimeout(function () { api.removeUserFromGroup(user.id, event.threadID) }, 2000);
    } return;
  }
    ////////// xem tỷ lệ ảnh 18+ ////////
  else if (args[0] == "nude") {
    var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if (!linkanh) return api.sendMessage('Vui lòng reply hoặc nhập link 1 hình ảnh!!!', event.threadID, event.messageID)
    const res = await axios.get(`https://manhict.tech/checknude?key=mzk_G8D0BIPFX70FXUYEUL5&link=${encodeURIComponent(linkanh)}`);
    var img = res.data.NSFW_Prob;
    return api.sendMessage(`» tỷ lệ nude của ảnh là: ${img}`, event.threadID, event.messageID);

  }
    
    ////////     //////////////         //////////////
    
  else if (args[0] == "luotdung") {
    var usages = JSON.parse(require("fs").readFileSync(__dirname + '/../../includes/handle/usages.json'));
    if (args[1] == "all") {
      let storage = [], sl = [];
      for (const value of data.userInfo) storage.push({ "id": value.id, "name": value.name });
      let getDay = require("moment-timezone").tz("Asia/Ho_Chi_Minh").day();
      for (const user of storage) {
        if (!(user.id in usages)) usages[user.id] = {
          day: getDay,
          usages: 20
        }
        sl.push({ "name": user.name, "sl": (typeof usages[user.id].usages == "undefined") ? 0 : usages[user.id].usages, "uid": user.id });
      }
      sl.sort((a, b) => {
        if (a.sl > b.sl) return -1;
        if (a.sl < b.sl) return 1;
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        a.name.localeCompare(b.name, undefined, { numeric: true });
      });
      msg = "==「KIỂM TRA LƯỢT DÙNG」==\n";
      let countsl = 0
      for (let e of sl) {
        msg += `\n${countsl += 1}. ${e.name} - ${e.sl} lượt.`
      }
      msg += `\n=== 「${timeNow}」 ===`;
      require("fs").writeFileSync(__dirname + '/../../includes/handle/usages.json', JSON.stringify(usages, null, 4));
      return api.sendMessage(msg, threadID);
    }
    api.sendMessage(`Bạn còn ${usages[senderID].usages} lượt dùng bot.`, threadID, messageID);
  }
}
Back to front page
