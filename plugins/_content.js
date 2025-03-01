import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

let handler = m => m
handler.before = async function (m, { conn } ) {

// redes
global.tk = 'https://www.tiktok.com/'
global.ths = 'https://www.threads.net/'
global.yt = 'https://youtube.com/'
global.yt2 = 'https://youtu.be/'
global.ig = 'https://www.instagram.com/'
global.md = 'https://github.com/'
global.fb = ''
global.paypal = 'https://paypal.me'
global.asistencia = 'https://wa.me'
global.tg = 'https://t.me/' // canal

// canales
global.canal1 = "https://whatsapp.com"
global.canal2 = "https://whatsapp.com"
global.canal3 = "https://whatsapp.com"
global.canal4 = "https://whatsapp.com"
global.canal5 = "https://whatsapp.com"

// grupos (algunos pueden estar repetidos con otros, es temporal)
global.nna = 'https://whatsapp.com' //CANAL UPDATE
global.nn2 = 'http:'
global.nna2 = 'http' //Help
global.nn = 'http' //Grupo 1
global.nnn = 'http' //Grupo 2
global.nnnt = 'http' //Grupo 3
global.nnntt = 'http' //Grupo 4
global.nnnttt = 'http' //Grupo 5
global.nnnttt1 = 'http' //Grupo 6 COL
global.nnnttt2 = 'http' //Grupo 7 COL
global.nnnttt3 = 'http' //Grupo 8 COL
global.nnnttt4 = 'http' //Grupo 9 COL
global.nnnttt5 = 'http' //A.T.M.M

// Imágenes locales
global.imagen1 = fs.readFileSync('./storage/img/logo.png');


// Imágenes en la nube
global.img = '/media/menus/меню11.mp4'
global.img2 = '/media/menus/меню11.mp4'
global.img3 = '/media/menus/меню11.mp4' //ft rectangular
global.img5 = '/media/menus/меню11.mp4'
global.img6 = '/media/menus/меню11.mp4'
global.img7 = '/media/menus/меню11.mp4'
global.img8 = '/media/menus/меню11.mp4'
global.img9 = '/media/menus/меню11.mp4'
global.img10 = '/media/menus/меню11.mp4'
global.img11 = '/media/menus/меню11.mp4'
global.img12 = '/media/menus/меню11.mp4'
global.img13 = '/media/menus/меню11.mp4'
global.img14 = '/media/menus/меню11.mp4'
global.img15 = '/media/menus/меню11.mp4'
global.img17 = '/media/menus/меню11.mp4'
global.img18 = '/media/menus/меню11.mp4'
global.img19 = '/media/menus/меню11.mp4'
global.img20 = '/media/menus/меню11.mp4'
global.img21 = '/media/menus/меню11.mp4'
global.img21 = '/media/menus/меню11.mp4' // imagen paypal

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tg]
global.redesMenu = [nna, nn2, nn, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, md, ig, paypal, yt, asistencia, fb, tg]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.gataImg = [imagen1]
global.accountsgb = [canal1, canal2, canal3, canal4, canal5, tk, ig, yt, paypal, fb, ths, md, asistencia, tg].getRandom()

global.canalIdGB = ["120363350099548761@newsletter", "120363371366801178@newsletter", "120363377833048768@newsletter", "120363220939514640@newsletter", "120363220939514640@newsletter", "120363368073378190@newsletter", "120363374486687514@newsletter", "120363183614708156@newsletter"]
global.canalNombre = ["𑁯🥢ᰰᩧ ְ  Лилит  💫ִ ᡣ𐭩᷼ ֺ Лилит  💫֔  𔖮𔖰 ִ","Лилит  💫 ", "Лилит  💫", "Лилит  💫", "Лилит  💫", "Лилит  💫", "Лилит  💫", 'Лилит  💫']
global.channelRD = await getRandomChannel()

global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: gataImg.getRandom(), thumbnail: imagen1, sourceUrl: accountsgb }}}, { quoted: m }
global.fakeChannel2 = { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }, forwardingScore: 200, externalAdReply: { title: packname, body: author, thumbnailUrl: gataMenu.getRandom(), sourceUrl: accountsgb, mediaType: 1, renderLargerThumbnail: false }}
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
}
export default handler

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdGB.length)
let id = canalIdGB[randomIndex]
let nombre = canalNombre[randomIndex]
return { id, nombre }
} 	
