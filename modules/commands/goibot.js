const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "manhIT",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Bạn biết bot này do 👉 Thành 👈tạo ra ko?🤞🤞","Vợ yêu của bot là ...  👉👈","Gọi j đấy em nghe :*","Dạ em nghe nè ><","Yêu ko mà kêu em thế","Em dễ thww mà đúng ko?","E là để yêu thw mà","Em cute lắm đúng o","Gọi em chi zậy","Đừng spam admin em mệt lắm r","Yêu cậu như 1 cực hình\nNhấp lên nhấp xuống kiểu j cx ra :*","Đừng đè em mạnh ko em sướng ><","Yêu ko mà gọi","Bạn đã bị bot bắt vô trại","Ai gọi em đấy có em đây","Yêu em đi em cho cái ấy🤞🤞","Sao thế eiu🤞🤞","Biết bot tạo ra chỉ để đi ngủ ko","Nếu 1 ngày mng gọi em mà ko thấy em trả lời thì chứng tỏ\nEm bị bay acc :v 🤞🤞","Yêu Thành nhất🤞🤞","Em là bot của Thành🤞🤞","Admin của em đáng iu nhất hệ mặt trời","chắc bạn chx biết admin bot đang ế ko ?"];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  if ((event.body.toLowerCase() == "bot ngu")) {
    data.reason = reason || null;
    data.dateAdded = time;
    global.data.threadBanned.set(idgr, { reason: data.reason, dateAdded: data.dateAdded });
    return api.sendMessage(`Nhóm ${idgr} của bạn đã bị ban, không thể sử dụng bot!, lý do: chửi bot `, threadID);
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "Bot out")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  
  if ((event.body.toLowerCase() == "bot lồn") || (event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("Dùng ngu chửi clmm á", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó") || (event.body.toLowerCase() == "bot oc")) {
    return api.sendMessage("óc chó mới chửi bot, cmm súc vật học thiếu ý thức", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") || (event.body.toLowerCase() == "bot oi")) {
    return api.sendMessage("Đây là tin nhắn tự động 💏\n Bạn đừng lo tôi luôn ở đây với bạn mà🥺", threadID);
  };


  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "Dạ")) {
    return api.sendMessage("Cậu ăn gì mà ngoan thế biết dạ vâng cơ :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "link admin") || (event.body.toLowerCase() == "Link admin")) {
    return api.sendMessage("️Link admin bot chính đây nè câu ơi kb lw nhá .\nhttps://www.facebook.com/thanhdz.adminbot/", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao tên Thành có gì dùng lệnh >admin list hoặc >info để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao tên Thành có gì dùng lệnh >admin list hoặc >ad để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "Admin") || (event.body.toLowerCase() == "admin")) {
    return api.sendMessage("Link admin chính đây:\nhttps://www.facebook.com/thanhdz.adminbot/", threadID);
  };

  if ((event.body.toLowerCase() == "Fb admin") || (event.body.toLowerCase() == "db admin")) {
    return api.sendMessage("Link admin chính đây:\nhttps://www.facebook.com/thanhdz.adminbot/", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan thế cậu xứng đáng có tớ nhá :*", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("Yêu cc, tiền, xe, nhà thì đéo có mà yêu với đương, lo học hành và đi làm kiếm tiền đê yêu sau", threadID);
  };

  if ((event.body.toLowerCase() == "Thành") || (event.body.toLowerCase() == "Thanh")) {
    return api.sendMessage("Anh ấy tuy ko đẹp trai hay giỏi gì nhưng được cái hài hước và luôn mong đạt được mục tiêu anh ấy muốn <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "thành") || (event.body.toLowerCase() == "thanh")) {
    return api.sendMessage("Anh ấy tuy ko đẹp trai hay giỏi gì nhưng được cái hài hước và luôn mong đạt được mục tiêu anh ấy muốn <3 <3 ", threadID);
  };


  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("Im cc :))) m bớt sủa lại hộ tao, nưng hay gì bảo t im :>>", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("Mày cút rồi bố mày cút, ko khiến mày lên tiếng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
