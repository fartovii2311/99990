import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
await conn.reply(m.chat, `${sn}`, m, rcanal)
}
handler.help = ['sn']
handler.tags = ['tools']
handler.command = ['nserie', 'sn', 'mysn'] 

export default handler
