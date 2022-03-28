module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hung",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://imgur.com/j4SCKM2.jpg",
    "https://imgur.com/03UvtQb.jpg",
    "https://imgur.com/vxtN3IW.jpg",
    "https://imgur.com/e1ng2sC.jpg",
  ];
  var callback = () => api.sendMessage({body:`\n۞𝕋𝕙𝕠̂𝕟𝕘 𝕋𝕚𝕟 𝔸𝕕𝕞𝕚𝕟۞\n😍𝔸𝔻𝕄𝕀ℕ ℕ𝔸𝕄𝔼😍: 𝐍𝐠𝐮𝐲𝐞̂̃𝐧❤️𝐍𝐡𝐮̛🧡𝐓𝐡𝐚̀𝐧𝐡\n🥺𝔹𝕚𝕖̣̂𝕥 𝔻𝕒𝕟𝕙🥺:Trùm👏 cu👏 bự\n🎊𝕋𝕦𝕠̂̉𝕚🎊: 𝟙𝟟+\n🔯ℂ𝕦𝕟𝕘 ℍ𝕠𝕒̀𝕟𝕘 Đ𝕒̣𝕠🔯: 𝕤𝕠𝕟𝕘 𝕥𝕦̛̉\n🤷𝕋𝕚́𝕟𝕙 ℂ𝕒́𝕔𝕙🤷: 𝗟𝗮̀ 𝗺𝗼̣̂𝘁 𝗰𝗼𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘃𝗼̛́𝗶 𝗻𝗶𝗲̂̀𝗺 đ𝗮𝗺 𝗺𝗲̂ 𝘁𝗵𝘂̛̉ 𝘁𝗵𝗮́𝗰𝗵 𝗯𝗮̉𝗻 𝘁𝗵𝗮̂𝗻 𝘃𝗮̀ 𝗺𝘂𝗼̂́𝗻 𝘃𝘂̛𝗼̛̣𝘁 𝗾𝘂𝗮 𝗴𝗶𝗼̛́𝗶 𝗵𝗮̣𝗻 𝗯𝗮̉𝗻 𝘁𝗵𝗮̂𝗻 đ𝗲̂̉ đ𝗮̣𝘁 đ𝘂̛𝗼̛̣𝗰 𝗺𝘂̣𝗰 𝘁𝗶𝗲̂𝘂 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵. \n🤗ℂ𝕙𝕚𝕖̂̀𝕦 𝕔𝕒𝕠🤗: m70\n🔰ℂ𝕒̂𝕟 ℕ𝕒̣̆𝕟𝕘🔰: 53kg\n🧐𝕊𝕚𝕟𝕙 𝕟𝕘𝕒̀𝕪🧐: 𝟙𝟚/𝟘𝟞/𝟚𝟘𝟘𝟜 \nꕥ𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞 ꕥ:....\n♆𝕋𝕚𝕜𝕋𝕠𝕜♆: @𝕟𝕙𝕦𝕥𝕙𝕒𝕟𝕙𝟚𝕜𝟘𝟜\n🍀𝐋𝐈𝐍𝐊 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊🍀:https://www.facebook.com/thanhdz.adminbot/\n🍃𝗜𝗗 𝗙𝗔𝗖𝗘🍃: 𝟏𝟎𝟎𝟎𝟓𝟒𝟕𝟔𝟗𝟓𝟕𝟏𝟔𝟑𝟔\n↪𝑵𝒈𝒖𝒚𝒆̂̃𝒏 𝑵𝒉𝒖̛ 𝑻𝒉𝒂̀𝒏𝒉↩\n𝑵𝒈𝒖𝒚𝒆̂̃𝒏 𝑵𝒉𝒖̛ 𝑻𝒉𝒂̀𝒏𝒉`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
