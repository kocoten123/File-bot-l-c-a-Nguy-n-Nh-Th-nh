module.exports.config = {
  name: "gỡ",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Như Thành mod từ mdl Bốc thăm",
  description: "là lệnh gỡ thay bằng unsend",
  commandCategory: "random-text",
  cooldowns: 1
};

module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {

  const axios = require("axios");

  const fs = require("fs-extra");

  const request = require("request");
   const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["Hỡi cô cắt cỏ bên đê \nCó nghe anh hò đứng dậy mà nghe \nNghe xong thì nói quê nhà \nCó nhiều anh chị hay là mình em",
               
              "Trời mưa xăn ống cao quần \n Hỡi cô bán thuốc nhà gần hay xa",  
              "Boi 2 mái \nĐi đái vẫn nhớ em",
              "Học ăn học nói, học gói mang về",
              "Tôi có một vài người bạn. Không nhiều nhưng mà ít",
              "Chớ nghe lời phỉnh tiếng phờ  \nThò tay vào lờ, mắc kẹt cái hom",
              "Ai ơi chớ vội cười nhau \nCây nào mà chẳng có sâu chạm cành",
              "Đã cam quấn quít má đào, \nNhững mong chim nhạn mai trao chỉ hồng.",
              "Đa tình thì vướng nợ tình, \nTrách người đã vậy, trách mình sao đây !",
              "Bán anh em xa, mua láng giềng gần.",
              "Cây ngay không sợ chết đứng.\n Người xinh xắn đâu sợ ko bị đ*t",
              "Trời đổ mưa rồi, sao anh chưa đổ em?",
              "Tớ có một siêu năng lực, nhắm mắt lại là có thể nhìn thấy cậu.",
              " Anh có thể cười 1 cái được không? Cafe của em quên cho đường rồi.\n Could you smile? I forgot putting sugar in my cafe.",
              "Anh ơi có cháy này! Cháy trong tim em! \nFire!!! Fire in my heart!",
              "Có rất nhiều cách để hạnh phúc, nhưng nhanh nhất chính là được nhìn thấy anh."]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
api.sendMessage(`H̶i̶ ̶b̶ạ̶n̶ ̶n̶è̶ ̶ :` 
 + " [ {name} ] "
  .replace(/\{name}/g, nameUser) 
 + `\n\n𝕋𝕙𝕚́𝕟𝕙 🥰🥰🥰: [ ${random_emoji} ]\n[ ! ] =>  !\n L̴ệ̴n̴h̴ ̴g̴ỡ̴ ̴l̴à̴ ̴>̴u̴n̴s̴e̴n̴d̴ ̴n̴h̴a̴ ̴h̴o̴ặ̴c̴ ̴(̴ ̴>̴u̴n̴s̴)̴ !!!`, event.threadID, event.messageID);
} 
