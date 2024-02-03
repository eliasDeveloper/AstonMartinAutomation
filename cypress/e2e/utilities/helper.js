class Helper {
	generateRandomText = (length) => {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	generateNDigits = (n) => {
		let len = n.toString().length
		let value = Math.floor(n + Math.random() * len)
		return value
	}
}
module.exports = new Helper()
