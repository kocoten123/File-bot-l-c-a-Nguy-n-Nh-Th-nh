const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(80,200,120)('» Lỗi rồi «  ') + data);
			break;
		case "error":
			console.log(chalk.rgb(222,49,99)('» Lỗi rồi «  ') + data);
			break;
		default:
			console.log(chalk.rgb(153,102,204)(`» ${option} « `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(	255,0,255)('» ℕ𝕙𝕦̛ 𝕋𝕙𝕒̀𝕟𝕙 «  ') + data);
			break;
		case "error":
			console.log(chalk.rgb(223,115,255)('» ℕ𝕙𝕦̛ 𝕋𝕙𝕒̀𝕟𝕙 «  ') + data);
			break;
		default:
			console.log(chalk.rgb(0,255,0)(`» ℕ𝕙𝕦̛ 𝕋𝕙𝕒̀𝕟𝕙 «  `) + data);
			break;
	}
}
