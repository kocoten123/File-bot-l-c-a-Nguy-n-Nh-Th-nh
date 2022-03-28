module.exports.config = {
	name: "chanle",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Horizon",
	description: "chanle [chẵn/lẻ] [Tiền]",
	commandCategory: "Horizon",
	usages: "như trên",
	cooldowns: 5
};
function isEven(n) {
    return n % 2 == 0;
}

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  );
}
function isOdd(n) {
    if (isEven(n)) {
        return false;
    } else {
        return true;
    }
}
module.exports.run = async function ({ api,event,Users,Currencies,args }) {
    var random = between(1,100000);
        var answer;
            switch(isOdd(parseInt(random))) {
                case true: answer = "lẻ";
                    break;
                case false: answer = "chẵn";
                    break;
                default: return api.sendMessage("[𝐇𝐋🌟] => Lỗi !",event.threadID);
            }
            if (!args[0]) return api.sendMessage("[𝐇𝐋🌟] => Bấm /chanle [Chẵn/Lẻ] [ Số Tiền ]",event.threadID);
        var option;
            switch (args[0].toLowerCase()) {
                case "chẵn": option = "chẵn";
                    break;
                case "lẻ": option = "lẻ";
                    break;
                default: return api.sendMessage("[𝐇𝐋🌟] => Bấm /chanle [Chẵn/Lẻ] [ Số Tiền ]",event.threadID);    
            }
        if (isNaN(args[1])) return api.sendMessage("[𝐇𝐋🌟] => Hãy Nhập Số Tiền !",event.threadID);
    try {
        if (answer == option) {
            var resault = parseInt(args[1]) * 2;
            await Currencies.increaseMoney(event.senderID, resault);
            return api.sendMessage("[𝐇𝐋🌟] => Bạn Đã Thắng Với Kết Quả Là : " + random + " => " + answer.toUpperCase() + ", Số Tiền Bạn Nhận Được Là: " + resault,event.threadID,event.messageID);
        }
        else {
            await Currencies.decreaseMoney(event.senderID, parseInt(args[1]));
            return api.sendMessage("[𝐇𝐋🌟] => Bạn Đã Thua Với Kết Quả Là : " + random + " => " + answer.toUpperCase() + ", Số Tiền Bạn Mất Là: " + parseInt(args[1]),event.threadID,event.messageID);
        }
        }
    catch (e) {
        console.log(e);
    }
};
