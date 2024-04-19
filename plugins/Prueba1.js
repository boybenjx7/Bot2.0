import translate from "@vitalets/google-translate-api";
import {es, en, pt} from "../lib/idiomas/total-idiomas.js";

let handler = async (m, {conn, args, usedPrefix, command}) => {
  let fkontak = {
    key: {participants: "0@s.whatsapp.net", remoteJid: "status@broadcast", fromMe: false, id: "Halo"},
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split("@")[0]}:${
          m.sender.split("@")[0]
        }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    participant: "0@s.whatsapp.net",
  };

  let texto = `_. ᩭ✎Idioma de Igna • Bot cambiado Correctamente :_ `;
  let texto2 = `_. ᩭ✎Seleccione el idioma para Igna • Bot_`;
  let texto3 = `_. ᩭ✎Los Comandos no cambiaran de Idioma, solo el contenido del Mensaje_`;
  let idioma = await translate(`${texto}`, {to: args[0], autoCorrect: true});
  let idioma2 = await translate(`${texto2}`, {to: lenguajeGB.lenguaje(), autoCorrect: true});
  let idioma3 = await translate(`${texto3}`, {to: lenguajeGB.lenguaje(), autoCorrect: true});

  try {
    if (args[0] == "es") {
      global.lenguajeGB = es;
      await conn.sendButton(
        m.chat,
        lenguajeGB["smsAvisoEG"]() + idioma.text + "\n" + "დ ```Español```",
        wm,
        null,
        [[`☘️ 𝗠 𝗘 𝗡 𝗨`, `${usedPrefix}menu`]],
        fkontak,
        m
      );
    } else if (args[0] == "en") {
      global.lenguajeGB = en;
      await conn.sendButton(
        m.chat,
        lenguajeGB["smsAvisoEG"]() + idioma.text + "\n" + "დ ```English```",
        wm,
        null,
        [[`☘️ 𝗠 𝗘 𝗡 𝗨`, `${usedPrefix}menu`]],
        fkontak,
        m
      );
    } else if (args[0] == "pt") {
      global.lenguajeGB = pt;
      await conn.sendButton(
        m.chat,
        lenguajeGB["smsAvisoEG"]() + idioma.text + "\n" + "დ ```Português```",
        wm,
        null,
        [[`☘️ 𝗠 𝗘 𝗡 𝗨`, `${usedPrefix}menu`]],
        fkontak,
        m
      );
    } else {
      const sections = [
        {
          title: "✨ IDIOMAS DISPONIBLES : AVAILABLE LANGUAGES ✨",
          rows: [
            {title: "👑 Español", rowId: `${usedPrefix + command} es`},
            {title: "👑 English", rowId: `${usedPrefix + command} en`},
            {title: "👑 Português", rowId: `${usedPrefix + command} pt`},
          ],
        },
      ];

      const listMessage = {
        text: idioma2.text + "\n\n" + idioma3.text,
        footer:
          `✦ Español = ${usedPrefix + command} es
✦ English = ${usedPrefix + command} en
✦ Português = ${usedPrefix + command} pt\n\n` + wm,
        title: `${htki} Idioma : Language 🌎`,
        buttonText: `Seleccionar : Select`,
        sections,
      };
      await conn.sendMessage(m.chat, listMessage, {quoted: fkontak});
    }
  } catch (e) {
    await m.reply(`${fg}\`\`\`NO SE LOGRÓ CAMBIAR DE IDIOMA, REPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO ${usedPrefix}reporte\`\`\``);
    console.log(e);
  }
};

handler.command = /^(idioma|languaje|idiomas|languajes|languages)$/i;
handler.owner = true;

export default handler;
