let handler = async (m, { isPrems, conn }) => {

let img = 'https://sun9-22.userapi.com/s/v1/ig2/Trngl26skl2JN8NKvEkYVcBm-znSBjUxUrADm5Mlqb0ova9d__bENteO4XIqyTrOrneqfisdKq7j1pP8FMyV71fA.jpg?quality=95&as=32x41,48x62,72x93,108x139,160x206,240x308,360x463,480x617,540x694,640x823,720x925,736x946&from=bu&u=mEhBGrb6XThVawRK3-hsHZHEVyBEfyVtzYlrHiGOe9I&cs=628x807' 
let texto = `🌟 𝐌𝐄𝐍𝐔 🌟
*˚₊·˚₊· ͟͟͞͞➳❥ @${m.sender.split("@")[0]}*
*│* ┊▸ ✦ 
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*│ ㊂ ▸▸ _Создатель Серёга  
*│ ㊂ ▸▸ _Номер +79883576985
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│* ┊*│* ┊▸ ✦,
*│* ┊▸ ✦ вызов 
*│* ┊▸ ✦ внимание
*│* ┊▸ ✦ снести
*│* ┊▸ ✦ удалить
*│* ┊▸ ✦ молчуны
*│* ┊▸ ✦ неактивные
*│* ┊▸ ✦ ссылка
*│* ┊▸ ✦ создатель
*│* ┊▸ ✦ аренда 
*│* ┊▸ ✦ чекаренды 
*│* ┊▸ ✦ удалитьаренду
*│* ┊▸ ✦ автоадмин
*│* ┊▸ ✦ активность
*│* ┊▸ ✦ группу закрыть/открыть
*│* ┊▸ ✦ включить/выключить антиссылка
*│* ┊▸ ✦ включить/выключить антиссылка2
*│* ┊▸ ✦ включить/выключить приветствие
*│* ┊▸ ✦ включить/выключить ограничить
*│* ┊▸ ✦ включить/выключить авточтение
*│* ┊▸ ✦ включить/выключить антивызов
*│* ┊▸ ✦ включить/выключить антиличка
*│* ┊▸ ✦ включить/выключить антиудаление
*│* ┊▸ ✦ включить/выключить реакция
*│* ┊▸ ✦ включить/выключить толькоадмин
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
──────────────────
⚠️ *Ознакомтесь с правильностью команд*.`
const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
}
handler.help = ['menuhot (menu +18)']
handler.tags = ['main']
handler.command = ['меню'] 
export default handler;
