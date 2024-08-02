require("./all/module")

global.owner = "27635696219" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "𝖈𝖍𝖗𝖔𝖓𝖔😈 𝐁𝐨𝐭" //NAMA BOT GANTI
global.namaCreator = "𝖈𝖍𝖗𝖔𝖓𝖔😈.ᵉˣᵉ" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = '1.0.0' //NOT CHANGE / JANGAN GANTI
global.sessionName = 'session'
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/2c32b2c7f6c9e36da978a.mp4' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.packname = "𝖈𝖍𝖗𝖔𝖓𝖔😈.ᵉˣᵉ" //GANTI AJ
global.author = "𝖈𝖍𝖗𝖔𝖓𝖔😈.ᵉˣᵉ" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
