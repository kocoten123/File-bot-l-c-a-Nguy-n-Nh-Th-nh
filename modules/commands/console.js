module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "???",//Mod by H.Thanh
    description: "",
    commandCategory: "Hệ thống",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại";
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"Ảnh, video hoặc kí tự đặc biệt";
    var job = ["#FF99FF","#99CCFF","#33FF00","#CCFFCC","#FF66FF","#FF9966","#CCCC00","#0099FF"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
  var random4 = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.hex("#" + random)(`𝑻𝒆̂𝒏 𝒏𝒉𝒐́𝒎 : ${nameBox}`) + " | " + chalk.hex("#" + random1)(`𝙏𝙚̂𝙣 𝙣𝙜𝙪̛𝙤̛̀𝙞 𝙙𝙪̀𝙣𝙜: ${nameUser}`) + " | " + chalk.hex("#" + random2)(`𝙉𝙤̣̂𝙞 𝙙𝙪𝙣𝙜: ${msg}`) + `\n` + chalk.hex("#" + random3)(`[ ${time} ]`) + `\n` + chalk.hex("#" + random4)(`◆━━━━━━━━━━𝙁𝙞𝙡𝙚 𝙗𝙤𝙩 𝙡𝙤̉ 𝙘𝙪̉𝙖 𝙉𝙜𝙪𝙮𝙚̂̃𝙣 𝙉𝙝𝙪̛ 𝙏𝙝𝙖̀𝙣𝙝◆━━━━━━━━━◆`)+ `\n` + chalk.white(`𝓒𝓪́𝓶 𝓸̛𝓷 𝓫𝓪̣𝓷 𝓭𝓾̀𝓷𝓰 𝓯𝓲𝓵𝓮 𝓫𝓸𝓽 𝓝.𝓣𝓱𝓪̀𝓷𝓱`)) ;
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
}
