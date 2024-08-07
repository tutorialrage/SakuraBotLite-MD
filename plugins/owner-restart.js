let { spawn }  = require('child_process')
let handler  = async (m, { conn }) => {

if (!process.send) throw 'Dont: node start.js\nDo: node index.js'
if (conn.user.jid == conn.user.jid) {
await conn.reply(m.chat, '🍟 R E I N I C I A N D O 🍟', m, )
process.send('reset')
} else throw '_eeeeeiiittsssss..._'

}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart']
handler.owner = true

handler.fail = null

module.exports = handler

