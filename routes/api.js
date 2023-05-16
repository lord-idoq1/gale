const express = require('express');

const router = express.Router();

const axios = require('axios')

const path = require('path');

const { readFileTxt, readFileJson } = require('../lib/function');

const { ytMp4, ytMp3, ytPlay } = require('../lib/youtube');

const { cekKey, limitAdd, isLimit } = require('../database/db');

const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');

const { cakLontong, bijak, quotes, fakta, ptl, motivasi } = require('../controllers/randomtext');

const { photoOxy } = require('./oxy');

const  request  = require('request');

var zrapi = require("zrapi");

var creatorList = ['Aria Putra Pratama'];

var fs = require('fs');

 var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

 var download = function(uri, filename, callback){

  request.head(uri, function(err, res, body){

    console.log('content-type:', res.headers['content-type']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

  });

};

 _ = require('lodash')

__path = process.cwd();

async function Joox(query) {

    return new Promise((resolve, reject) => {

      const time = Math.floor(new Date() / 1000)

      axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)

        .then(({

          data

        }) => {

          let result = []

          let hasil = []

          let promoses = []

          let ids = []

          data.itemlist.forEach(result => {

            ids.push(result.songid)

          });

          for (let i = 0; i < data.itemlist.length; i++) {

            const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]

            promoses.push(

              axios.get(get, {

                headers: {

                  Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'

                }

              })

              .then(({

                data

              }) => {

                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))

                hasil.push({

                  lagu: res.msong,

                  album: res.malbum,

                  penyanyi: res.msinger,

                  publish: res.public_time,

                  img: res.imgSrc,

                  mp3: res.mp3Url

                })

  

                axios.get('http://api.joox.com/web-fcgi-bin/web_lyric?musicid=' + ids[i] + '&lang=id&country=id&_=' + time)

                  .then(({

                    data

                  }) => {

                    const lirik = JSON.parse(data.replace('MusicJsonCallback(', '').replace('\n)', '')).lyric

                    const buff = new Buffer.from(lirik, 'base64')

                    const ash = buff.toString('utf-8')

                    result.push({

                      result: ash

                    })

                    Promise.all(promoses).then(() => resolve({status: 200, result: hasil}))

                  }).catch(reject)

              }).catch(reject)

            )

          }

        }).catch(reject)

    })

  }

loghandler = {

    nottext: {

        status: false,

        creator: `${creator}`,

        code: 406,

        message: 'masukan parameter text'

    },

    noemote: {

      status: false,

      creator: `${creator}`,

      code: 406,

      message: 'masukan parameter emot'

  },

      query: {

      status: false,

      creator: `${creator}`,

      code: 406,

      message: 'masukan parameter query'

  },

  nousername: {

    status: false,

    creator: `${creator}`,

    code: 406,

    message: 'masukan parameter username'

},

  notype: {

    status: false,

    creator: `${creator}`,

    code: 406,

    message: 'masukan parameter type'

},

    domain: {

      status: false,

      creator: `${creator}`,

      code: 406,

      message: 'masukan parameter domain'

  },

    nomor: {

      status: false,

      creator: `${creator}`,

      code: 406,

      message: 'masukan parameter nomor'

  },

    nottext2: {

        status: false,

        creator: `${creator}`,

        code: 406,

        message: 'masukan parameter text2'

    },

    error: {

        status: false,

        creator: `${creator}`,

        message: 'mungkin sedang dilakukan perbaikan'

    },

    img: {

      status: false,

      creator: `${creator}`,

      message: 'Silahkan Masukan Url Image'

  },

    nottheme: {

      status: false,

      creator: `${creator}`,

      code: 406,

      message: 'masukan parameter theme'

    },

    noname: {

      status: false,

      creator: `${creator}`,

      code: 406,

      message: 'masukan parameter nama'

    },

    noname2: {

      status: false,

      creator: `${creator}`,

      code: 406,

      message: 'masukan parameter nama2'

    },

    username: {

      status: false,

      creator: `${creator}`,

      code: 406,

      message: 'masukan parameter username'

    },

    mimpi: {

      status: false,

      creator: `${creator}`,

      code: 406,

      message: 'masukan parameter mimpi'

    },

    invalidlink: {

      status: false,

      creator: `${creator}`,

      message: 'error, mungkin link anda tidak valid.'

    },

    }

    const { 

      whois, 

      Tiktok,

      TiktokStalk,

      Github,

      Simi,

      WPUser,

      Emoji,

      KBBI,

      igStory,

      tebakGambar,

      otakuDesuOngoing,

      tiktokDown,

      emojiScraper,

      genPassword 

  } = require("../function/lainya");

    const { 

      igStalk, 

      igDownload 

  } = require("../function/ig");

    const { 

      artiNama, 

      artiMimpi, 

      ramalJodoh, 

      nomorHoki 

  } = require("../function/primbon");

  const { 

    yDonlod, 

    yPlay, 

    ySearch 

} = require("../function/yt");

router.get('/ytplay', youtubePlay);

router.get('/ytmp4', youtubeMp4);

router.get('/ytmp3', youtubeMp3);

router.get('/caklontong', cakLontong);

router.get('/quotes1', quotes);

router.get('/fakta', fakta);

router.get('/bijak', bijak);

router.get('/motivasi', motivasi);

router.get('/oxy/:tema', photoOxy);

module.exports = router;
