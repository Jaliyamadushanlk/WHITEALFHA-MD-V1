const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭───────────────◎◎▷
👋𝐇𝐄𝐋𝐋𝐎 ........................🔰

> ᗯᗴᒪᑕOᗰ TO ᗯᕼITᗴᗩᒪᖴᕼᗩ ᗰᗪ ᗰᑌᒪTIᗪᗴᐯIᑕᗴ ᗯᕼᗩTՏᗩᑭᑭ ᗷOT☢︎︎

☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎
𝗟𝗢𝗢𝗞𝗜𝗡𝗚 𝗡𝗢𝗪 ☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎

> 𝕎ℍ𝕆𝕋𝔼𝔸𝕃𝔽ℍ𝔸 𝕄𝔻 𝔹𝕆𝕋 𝕆𝕎𝔼ℕ𝔼ℝ 𝔸𝔹𝕆𝕌𝕋»

> ➪𝐌𝐘 𝐑𝐄𝐀𝐋 𝐍𝐀𝐌𝐄☞︎︎︎𝙹𝙰𝙻𝙸𝚈𝙰 𝙼𝙰𝙳𝚄𝚂𝙷𝙰𝙽 𝚁𝙰𝚃𝙷𝙽𝙰𝚈𝙰𝙺𝙰

> ➪𝐈'𝐌 𝐅𝐑𝐎𝐌☞︎︎︎𝙺𝚄𝚁𝚄𝙽𝙴𝙶𝙰𝙻𝙰

> ➪𝐌𝐘 𝐀𝐆𝐄☞︎︎︎♕︎14♕︎

~☯︎☯︎𝑰 𝑨𝑴 𝑪𝑹𝑨𝒁𝒀 𝑩𝑶𝒀☯︎☯︎~
ʕ•ᴥ•ʔℕ𝕀ℂ𝔼 𝕋𝕆 𝕄𝔼𝔼𝕋 𝕐𝕆𝕌

> 𝗠𝗬 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗡𝗨𝗠𝗕𝗘𝗥☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎

 https://wa.me/+94766946854?text=_♕︎ᗯᕼITᗴᗩᒪᖴᕼᗩ-ᗰᗪ♕︎_𝙸_𝚕𝚒𝚔𝚎_𝚖𝚎𝚎𝚝_𝚢𝚘𝚞👻👋_

> 𝐨𝐰𝐞𝐧𝐞𝐫 : ᗯᕼITᗴᗩᒪᖴᕼᗩ OᖴIᑕIᗩᒪ
╰───────────────◎◎▷
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/p22J5nQ/file-1nh1gowb-Fqjz1-YJGzgo8u1e-J.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
