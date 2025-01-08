import fetch from 'node-fetch';

const videoLimit = 300 * 1024 * 1024; // 300 MB límite para MP4

let handler = async (m, { conn, text }) => {
  if (!m.quoted) {
    return conn.reply(m.chat, `⚠️ Debes etiquetar el mensaje que contenga el resultado de YouTube Play.`, m);
  }

  if (!m.quoted.text.includes("乂  Y O U T U B E  -  P L A Y")) {
    return conn.reply(m.chat, `⚠️ El mensaje etiquetado no contiene un resultado de YouTube Play.`, m);
  }

  const urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9_-]+)/gi);

  if (!urls || urls.length < 1) {
    return conn.reply(m.chat, `⚠️ No se encontraron enlaces válidos en el mensaje etiquetado.`, m);
  }

  const videoUrl = urls[0];
  await m.react('🕓'); // Indica que está procesando

  try {
    // API principal
    const apiUrl1 = `https://delirius-apiofc.vercel.app/download/ytmp4?url=${videoUrl}`;
    const response1 = await fetch(apiUrl1);
    const result1 = await response1.json();

    if (result1.status && result1.data) {
      await handleVideoDownload(conn, m, result1.data);
      return;
    }

    const apiUrl2 = `https://restapi.apibotwa.biz.id/api/ytmp4?url=${videoUrl}`;
    const response2 = await fetch(apiUrl2);
    const result2 = await response2.json();

    if (result2.status && result2.data) {
      await handleVideoDownload(conn, m, result2.data);
      return;
    }

  } catch (error) {
    console.error('Error al procesar el video:', error);
    await m.react('✖️');
  }
};

const handleVideoDownload = async (conn, m, data) => {
  const { title, download, duration, image_max_resolution } = data;
  const { url: downloadUrl, size, filename } = download;

  const fileSize = Number(size.replace(/[^0-9]/g, '')) * 1024;

  if (fileSize > videoLimit) {
    await conn.sendMessage(m.chat,
      {
        document: { url: downloadUrl },
        fileName: filename || `${title}.mp4`,
        mimetype: 'video/mp4',
        caption: `⚠️ El archivo supera el límite permitido (${videoLimit / 1024 / 1024} MB). Enviado como documento.\n🎥 *Título:* ${title}\n⏱️ *Duración:* ${duration.timestamp}`,
      },
      { quoted: m }
    );
  } else {
    await conn.sendMessage(m.chat,
      {
        video: { url: downloadUrl },
        fileName: filename || `${title}.mp4`,
        mimetype: 'video/mp4',
        caption: `🎥 *Título:* ${title}\n⏱️ *Duración:* ${duration.timestamp}`,
        thumbnail: image_max_resolution ? { url: image_max_resolution } : undefined,
      },
      { quoted: m }
    );
  }

  await m.react('✅');
};

handler.help = ['Video'];
handler.tags = ['downloader'];
handler.customPrefix = /^(Video|video|vídeo|Vídeo)/i;
handler.command = new RegExp;

export default handler;
