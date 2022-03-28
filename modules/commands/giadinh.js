const coindown = 500
module.exports.config = {
	name: "giadinh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "Ghép đôi với những người trong nhóm",
	commandCategory: "game",
	cooldowns: 5,
	dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}
module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'araa.jpg');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://imgur.com/D35mTwa.jpg", path);
}

async function makeImage({ one, two, three }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let pairing_img = await jimp.read(__root + "/araa.jpg");
    let pathImg = __root + `/araa_${one}_${two}_${three}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    let avatarThree = __root + `/avt_${three}.png`;
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
  let getAvatarThree = (await axios.get(`https://graph.facebook.com/${three}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarThree, Buffer.from(getAvatarThree, 'utf-8'));  
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
  let circleThree = await jimp.read(await circle(avatarThree));
    pairing_img.composite(circleOne.resize(65, 65), 135, 260).composite(circleTwo.resize(65, 65), 230, 210).composite(circleThree.resize(60, 60), 193, 370);
    
    let raw = await pairing_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    fs.unlinkSync(avatarThree);
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
  const axios = require("axios");
    const fs = require("fs-extra");
  const { threadID, messageID, senderID } = event;
   let balance = (await Currencies.getData(senderID)).money;
    if (balance <= coindown) return api.sendMessage('Nghèo mà đòi ghép đôi =))',threadID,messageID);
     await Currencies.decreaseMoney(event.senderID, parseInt(coindown));
   
    
   
       if (!args[0]) {
         var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
 let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var e = emoji[Math.floor(Math.random() * emoji.length)];
 let abc = await api.getThreadInfo(event.threadID);
        var emoji123 = loz.participantIDs;
        var r = emoji123[Math.floor(Math.random() * emoji123.length)];
         var name1 = (await Users.getData(e)).name
         var name2 = (await Users.getData(r)).name
var one = senderID, two = e, three = r;
    return makeImage({ one, two, three }).then(path => api.sendMessage({ body: `Chúc mừng ${nameSender} đã ghép đôi thành công -${coindown}\nChúc mừng bạn đã có một gđ hạnh phúc với ${name1} và ${name2}\nTỉ Lệ Hợp Đôi là ${tle}`,mentions: arraytag, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
      }
