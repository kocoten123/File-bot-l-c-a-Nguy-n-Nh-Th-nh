module.exports.config = {
  name: "crush",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "Xem ảnh crush",
  commandCategory: "image",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://crush.thanhnhu2.repl.co').then(res => { //link ảnh
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `Đây là những admin mà bot crush`,
            attachment: fs.createReadStream(__dirname + `/cache/lienquan.${ext}`) //làm gì thì làm
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/lienquan.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/lienquan.${ext}`)).on("close", callback);
      })
}
