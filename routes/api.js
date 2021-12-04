const express = require('express');
const router = express.Router();
const axios = require('axios')
var { fetchJson } = require('../lib/fetcher.js')
const path = require('path');
const { readFileTxt, readFileJson } = require('../lib/function');
const { ytMp4, ytMp3, ytPlay } = require('../lib/youtube');
const { cekKey, limitAdd, isLimit } = require('../database/db');
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');
const { cakLontong, bijak, quotes, fakta, ptl, motivasi } = require('../controllers/randomtext');
const { photoOxy } = require('./oxy');
const { herolist, herodetail } = require('../lib/heroml');
const  request  = require('request');
const make = require('claire-cord');
var zrapi = require("zrapi");
var creatorList = ['IdoGanz'];
var fetch = require('node-fetch');
var fs = require('fs');
var NanaAPI = require('nana-api');
var nana = new NanaAPI()
var RemoveBg = require('remove.bg');
var aexm = require('@lolikillers/aexm-api');
var ytstalk = require('euphoriachan-api');
var nekopoi = require('nekobocc');
var fbdl = require('fbdl-core');
var brainly = require('brainly-scraper-ts');
var TikTokScraper = require('tiktok-scraper');
var ch = require('canvas-hikki');
var kc = require('knights-canvas');
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
      palingmurah_, 
      layarkaca_, 
      Amino_, 
  } = require("../function/search");   
    const { 
      artiNama, 
      artiMimpi, 
      ramalJodoh, 
      nomorHoki 
  } = require("../function/primbon");
   const { 
      twitterDown,
  } = require("../lib/ig");
  const { 
      getVideosLink,
  } = require("../lib/facebook");
  const { 
      FB,
  } = require("../lib/downloader");
  const { 
    GSMArena,
	zodiakMing,
	zodiakHar,
	Shoope,
	pinterest
  } = require("../lib/index");
  const { 
    yDonlod, 
    yPlay, 
    ySearch 
} = require("../function/yt");

router.get('/simsimi', async (req, res, next) => {
             const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
       fetch(encodeURI(`https://api.simsimi.net/v1/?text=${query}&lang=id&cf=true`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	status: `200`,        	
             	result: {
             		query: `${query}`,
             		answer: `${data.messages[0].response}`
             	},
             	Note: `Jangan Di Spam Ya Cok (emote batu)`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/emoji', async(req, res, next) => {
  const emoji = req.query.emo
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!emoji) return res.json(loghandler.noemote)
  emojiScraper(emoji)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/otakudesu', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      otakuDesuOngoing()
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/brainly2', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      brainly(query)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/javhdd', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
   if(!query) return res.json(loghandler.query)
fetch(encodeURI(`https://api.dapuhy.ga/api/search/javhdd?query=${query}&apikey=ojan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/amazon/search', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
   if(!query) return res.json(loghandler.query)
fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/amazon?text=${query}&apikey=alpin1`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/nhentaidownloader', async (req, res, next) => {
const nhdl = require('nhentaidownloader');
  ID = req.query.kode
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!req.query.kode) return res.json({ status: 404, error: 'masukkan param kode'})
  nhdl(ID).then(async buffer => {
  await fs.writeFileSync(__path +`/public/storage/${ID}.zip`, buffer)
  const result = {
        status: true,
        code: 200,
        
        result: `https://xtream-api.herokuapp.com/storage/${ID}.zip`
      }
      res.json(result)
});
})
router.get("/search/palingmurah", async(req, res, next) => {
    const query = req.query.query;
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);        
    if(!query) return res.json(loghandler.notquery)
    
    
    palingmurah_(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      
});

router.get("/search/layarkaca", async(req, res, next) => {
    const query = req.query.query;
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);        
    if(!query) return res.json(loghandler.notquery)
    
    
    layarkaca_(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      
});

router.get("/search/amino", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);    
    if(!query) return res.json(loghandler.notquery)
    
    
    Amino_(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      
});
router.get('/javhdporn', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
   if(!query) return res.json(loghandler.query)
fetch(encodeURI(`https://api.dapuhy.ga/api/search/javhdporn?query=${query}&apikey=i`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/xnxx', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
   if(!query) return res.json(loghandler.query)
fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/xnxx-search?q=${query}&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/xvideo', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
   if(!query) return res.json(loghandler.query)
fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/xvids-search?q=${query}&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/phub', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
   if(!query) return res.json(loghandler.query)
fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/phub-search?q=${query}&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/no/hoki', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
   if(!query) return res.json(loghandler.query)
fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/nomorhoki?q=${query}&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});

router.get("/news/cnn", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/cnn-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/cnbc", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/cnbc-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/republika", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/republika-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/tempo", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/tempo-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/antara", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/antara-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/kumparan", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/kumparan-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/okezone", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/okezone-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/liputan6", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/liputan6-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/bbc", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/bbc-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/tribun", async(req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/tribun-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get('/tebakgambar', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  tebakGambar()
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/ttdl', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink)
  tiktokDown(url)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/google', async (req, res, next) => {
   yt = require('google-it')
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
 if (!req.query.q) return res.json({ status: false, msg: 'Masukkan Parameter q'})
 ser = await yt({ query: req.query.q})
 res.json({ status: 'success', result: ser})
 });
 router.get('/herodetail', async (req, res, next) => {
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
 if (!req.query.q) return res.json({ status: false, msg: 'Masukkan Parameter q'})
 ser = await herodetail(req.query.q)
 res.json(ser)
 });
router.get('/kbbi', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const kata = req.query.text || req.query.q;
  if (!kata) return res.json(loghandler.nottext);
  KBBI(kata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get('/quotes/bucin', async (req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const flag = JSON.parse(fs.readFileSync(__path +'/data/quotesbucin.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/quotes/islam', async (req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const flag = JSON.parse(fs.readFileSync(__path +'/data/quotesislam.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/quotes/anime', async (req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const flag = JSON.parse(fs.readFileSync(__path +'/data/quotesanime.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/nickepep', async (req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const flag = JSON.parse(fs.readFileSync(__path +'/data/nickepep.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/faktaunik', async (req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const flag = JSON.parse(fs.readFileSync(__path +'/data/faktaunik.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/katabijak', async (req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const flag = JSON.parse(fs.readFileSync(__path +'/data/katabijak.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/katacinta', async (req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const flag = JSON.parse(fs.readFileSync(__path +'/data/katacinta.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/katasenja', async (req, res, next) => {
const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const flag = JSON.parse(fs.readFileSync(__path +'/data/katasenja.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/igstory', async(req, res, next) => {
  const username = req.query.username
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!username) return res.json(loghandler.nousername)
  igStory(username)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/githubstalk', async(req, res, next) => {
  const username = req.query.username
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!username) return res.json(loghandler.nousername)
fetch(encodeURI(`https://api.github.com/users/${username}`))
        .then(response => response.json())
        .then(data => {
    	var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    
});
router.get('/imgedit/gay', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/gay?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/oppai/nime', async(req, res, next) => {
         const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});             
              {
        let hasil = `https://raw.githubusercontent.com/lord-idoq1/Asupan/main/gabut/oppainime1.json`
        data = await fetch(hasil).then(v => v.buffer())
        await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
        res.sendFile(__path +'/tmp/tahta.jpg')
        }
      })
router.get('/imgedit/gay2', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/gay?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/komunis', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/communism?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/hitler', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/hitler?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/discordblack', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/discordblack?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/discordblack', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/discordblue?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/crush', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Crush().getImage(img)
await fs.writeFileSync(__path +'/crush.jpeg', hamsil)
res.sendFile(__path+'/crush.jpeg')
});

router.get('/approved', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Approved().getImage(img)
await fs.writeFileSync(__path +'/approved.jpeg', hamsil)
res.sendFile(__path+'/approved.jpeg')
});

router.get('/airpods', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Airpods().getImage(img)
await fs.writeFileSync(__path +'/airpods.jpeg', hamsil)
res.sendFile(__path+'/airpods.jpeg')
});

router.get('/meth', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Meth().getImage(img)
await fs.writeFileSync(__path +'/meth.jpeg', hamsil)
res.sendFile(__path+'/meth.jpeg')
});

router.get('/bjp', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Bjp().getImage(img)
await fs.writeFileSync(__path +'/bjp.jpeg', hamsil)
res.sendFile(__path+'/bjp.jpeg')
});

router.get('/stonk', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Stonk().getImage(img)
await fs.writeFileSync(__path +'/stonk.jpeg', hamsil)
res.sendFile(__path+'/stonk.jpeg')
});

router.get('/notstonk', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.NotStonk().getImage(img)
await fs.writeFileSync(__path +'/notstonk.jpeg', hamsil)
res.sendFile(__path+'/notstonk.jpeg')
});

router.get('/poutine', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Poutine().getImage(img)
await fs.writeFileSync(__path +'/poutine.jpeg', hamsil)
res.sendFile(__path+'/poutine.jpeg')
})

router.get('/spank', async(req, res, next) => {
img1 = req.query.img1,
img2 = req.query.img2
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img1) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img1'})
if(!img2) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img2'})
const hamsil = await new make.Spank().getImage(img1, img2)
await fs.writeFileSync(__path +'/spank.jpeg', hamsil)
res.sendFile(__path+'/spank.jpeg')
});

router.get('/what', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.What().getImage(img)
await fs.writeFileSync(__path +'/what.jpeg', hamsil)
res.sendFile(__path+'/what.jpeg')
});

router.get('/kiss', async(req, res, next) => {
img1 = req.query.img1,
img2 = req.query.img2
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img1) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img1'})
if(!img2) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img2'})
const hamsil = await new make.Kiss().getImage(img1, img2)
await fs.writeFileSync(__path +'/kiss.jpeg', hamsil)
res.sendFile(__path+'/kiss.jpeg')
});

router.get('/linus', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Linus().getImage(img)
await fs.writeFileSync(__path +'/linus.jpeg', hamsil)
res.sendFile(__path+'/linus.jpeg')
});

router.get('/ad', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Ad().getImage(img)
await fs.writeFileSync(__path +'/ad.jpeg', hamsil)
res.sendFile(__path+'/ad.jpeg')
});

router.get('/bobross', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Bobross().getImage(img)
await fs.writeFileSync(__path +'/bobross.jpeg', hamsil)
res.sendFile(__path+'/bobross.jpeg')
});

router.get('/hitler', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Hitler().getImage(img)
await fs.writeFileSync(__path +'/hitler.jpeg', hamsil)
res.sendFile(__path+'/hitler.jpeg')
});

router.get('/mms', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Mms().getImage(img)
await fs.writeFileSync(__path +'/mms.jpeg', hamsil)
res.sendFile(__path+'/mms.jpeg')
});

router.get('/tatoo', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Tatoo().getImage(img)
await fs.writeFileSync(__path +'/tatoo.jpeg', hamsil)
res.sendFile(__path+'/tatoo.jpeg')
})

router.get('/boruto', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/boruto.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/kaneki', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/kaneki.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/isuzu', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/isuzu.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/itori', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/itori.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/emilia', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/emilia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/erza', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/erza.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/waifuu', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/waifu')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/hentaii', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/hentai')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/highfive', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/highfive')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/happy', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/happy')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/smile', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/smile')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/bonk', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/bonk')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/bully', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/bully')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/wave', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/wave')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/cuddle', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/cuddle')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/lick', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/lick')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/blush', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/blush')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
                                      
              router.get('/bite', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/bite')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/nom', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/nom')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/cry', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/cry')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/kick', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/kick')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              router.get('/scdl', async(req, res, next) => {
const link = req.query.link
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if(!link) return res.json({creator: 'idoganz', status: true, message: 'masukan parameter link'})
fetch(encodeURI(`https://api-idoganz1.herokuapp.com/downloader/scdl?link=${link}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/search/tiktok', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if(!query) return res.json({creator: 'idoganz', status: true, message: 'masukan parameter query'})
fetch(encodeURI(`https://api-idoganz1.herokuapp.com/search/tiktok?query=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/search/stickerpack', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if(!query) return res.json({creator: 'idoganz', status: true, message: 'masukan parameter query'})
fetch(encodeURI(`https://api-idoganz1.herokuapp.com/search/sticker?query=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/search/zero', async(req, res, next) => {
const query = req.query.query
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if(!query) return res.json({creator: 'idoganz', status: true, message: 'masukan parameter query'})
fetch(encodeURI(`https://api-idoganz1.herokuapp.com/search/konachan?query=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/tiktokk', async(req, res, next) => {
const link = req.query.link
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if(!link) return res.json({creator: 'idoganz', status: true, message: 'masukan parameter link'})
fetch(encodeURI(`https://api-idoganz1.herokuapp.com/downloader/tiktok?link=${link}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/fbdl', async(req, res, next) => {
const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if(!url) return res.json({creator: 'idoganz', status: true, message: 'masukan parameter url'})
fetch(encodeURI(`https://hardianto-chan.herokuapp.com/api/fbdl?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/pindl', async(req, res, next) => {
const link = req.query.link
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if(!link) return res.json({creator: 'idoganz', status: true, message: 'masukan parameter link'})
fetch(encodeURI(`https://api-idoganz1.herokuapp.com/downloader/pindl?link=${link}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});

              router.get('/trap', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/nsfw/trap')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/nsfw/blowjob', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/nsfw/blowjob')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/nsfww/neko', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/nsfw/neko')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/nsfww/waifu', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/nsfw/waifu')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/kill', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/kill')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/kisss', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/kiss')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/yeet', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/yeet')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/slap', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/slap')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/awoo', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/awoo')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/shinobu', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/shinobu')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/cringe', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/cringe')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
              
              router.get('/wink', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/wink')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })
router.get('/ayuzawa', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/ayuzawa.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/welcome3', async (req, res, next) => {
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.msg) return res.json({ status: 404, error: 'masukkan param msg'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
var canvas = require('discanvas')
const welcomer = await new canvas.Welcome()
    .setAvatar(req.query.picurl)
    .setUsername(`${req.query.name}#${req.query.mem}`)
    .setBackground("BACKGROUND", req.query.bgurl)
    //or : .setBackground("COLOR", "#ff5555")
    .setMainText("Welcome")
    .setSecondText(req.query.msg)
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toWelcome() 
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png');
               res.send(buffer)
        
})
router.get('/goodbye3', async (req, res, next) => {
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.msg) return res.json({ status: 404, error: 'masukkan param msg'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
var canvas = require('discanvas')
const welcomer = await new canvas.Welcome()
    .setAvatar(req.query.picurl)
    .setUsername(`${req.query.name}#${req.query.mem}`)
    .setBackground("BACKGROUND", req.query.bgurl)
    //or : .setBackground("COLOR", "#ff5555")
    .setMainText("Goodbye")
    .setSecondText(req.query.msg)
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toWelcome() 
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png');
               res.send(buffer)
        
})

router.get('/promote', async (req, res, next) => {
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.msg) return res.json({ status: 404, error: 'masukkan param msg'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
var canvas = require('discanvas')
const welcomer = await new canvas.Welcome()
    .setAvatar(req.query.picurl)
    .setUsername(`${req.query.name}#${req.query.mem}`)
    .setBackground("BACKGROUND", req.query.bgurl)
    //or : .setBackground("COLOR", "#ff5555")
    .setMainText("Promote")
    .setSecondText(req.query.msg)
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toWelcome() 
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png');
               res.send(buffer)
        
})
router.get('/demote', async (req, res, next) => {
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.msg) return res.json({ status: 404, error: 'masukkan param msg'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
var canvas = require('discanvas')
const welcomer = await new canvas.Welcome()
    .setAvatar(req.query.picurl)
    .setUsername(`${req.query.name}#${req.query.mem}`)
    .setBackground("BACKGROUND", req.query.bgurl)
    //or : .setBackground("COLOR", "#ff5555")
    .setMainText("Demote")
    .setSecondText(req.query.msg)
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toWelcome() 
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png');
               res.send(buffer)
        
})

router.get('/welcome', async (req, res, next) => {
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
let hasil = `https://gatauajg.yogipw.repl.co/api/welcome?name=${req.query.name}&mem=${req.query.mem}&gcname=${req.query.gcname}&picurl=${req.query.picurl}&bgurl=${req.query.bgurl}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tod.png', data)
  res.sendFile(__path+'/tmp/tod.png')
  
});
router.get('/goodbye', async (req, res, next) => {
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
let hasil = `https://gatauajg.yogipw.repl.co/api/goodbye?name=${req.query.name}&mem=${req.query.mem}&gcname=${req.query.gcname}&picurl=${req.query.picurl}&bgurl=${req.query.bgurl}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tod.png', data)
  res.sendFile(__path+'/tmp/tod.png')
  
});
router.get('/welcome2', async (req, res, next) => {
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
if (!req.query.gcicon) return res.json({ status: 404, error: 'masukkan param gcicon'})
let hasil = `https://gatauajg.yogipw.repl.co/api/welcome2?name=${encodeURIComponent(req.query.name.toUpperCase())}&mem=${encodeURIComponent(req.query.mem.toUpperCase())}&gcname=${encodeURIComponent(req.query.gcname.toUpperCase())}&picurl=${req.query.picurl}&bgurl=${req.query.bgurl}&gcicon=${req.query.gcicon}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tod.png', data)
  res.sendFile(__path+'/tmp/tod.png')
  
});
router.get('/goodbye2', async (req, res, next) => {
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
if (!req.query.gcicon) return res.json({ status: 404, error: 'masukkan param gcicon'})
let hasil = `https://gatauajg.yogipw.repl.co/api/goodbye2?name=${encodeURIComponent(req.query.name.toUpperCase())}&mem=${encodeURIComponent(req.query.mem.toUpperCase())}&gcname=${encodeURIComponent(req.query.gcname.toUpperCase())}&picurl=${req.query.picurl}&bgurl=${req.query.bgurl}&gcicon=${req.query.gcicon}`
  data = await fetch(hasil).then(v => v.buffer())
  & fs.writeFileSync(__path +'/tmp/tod.png', data)
  res.sendFile(__path+'/tmp/tod.png')
  
});
router.get('/canvas/welcome', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
	    namagc = req.query.namagc,
            member = req.query.member
             const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
    
let Welcome = await new ch.Welcome2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setGroupname(namagc)
.setMember(member)
.toAttachment()
    
 data = Welcome.toBuffer();
  await fs.writeFileSync(__path +'/database/welcome.png', data)
  res.sendFile(__path+'/database/welcome.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/goodbye', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
            member = req.query.member
             const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
let Goodbye = await new ch.Goodbye2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setMember(member)
.toAttachment()
    
 data = Goodbye.toBuffer();
  await fs.writeFileSync(__path +'/database/goodbye.png', data)
  res.sendFile(__path+'/database/goodbye.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/promote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Promote = await new kc.Promote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Promote.toBuffer();
  await fs.writeFileSync(__path +'/database/promote.png', data)
  res.sendFile(__path+'/database/promote.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/demote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
             const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Demote = await new kc.Demote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Demote.toBuffer();
  await fs.writeFileSync(__path +'/database/demote.png', data)
  res.sendFile(__path+'/database/demote.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/level', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,
            needxp = req.query.needxp,
            currxp = req.query.currxp,
            level = req.query.level,
            logorank = req.query.logorank
               const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey); 
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!needxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter needxp"})
    if (!currxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter currxp"})
    if (!level) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter level"})
    if (!logorank) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter logorank"})
    
var level = await new ch.Rank()
    .setAvatar(`${pp}`) 
    .setUsername(`${nama}`) 
    .setBg(`${bg}`)
    .setNeedxp(`${needxp}`) 
    .setCurrxp(`${currxp}`) 
    .setLevel(`${level}`) 
    .setRank(`${logorank}`) 
    .toAttachment();
  data = level.toBuffer();
  await fs.writeFileSync(__path +'/database/rank.png', data)
  res.sendFile(__path +'/database/rank.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/canvas/levelup', async (req, res, next) => {
            pp = req.query.pp
             const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})       
var levelup = await new ch.Up()
    .setAvatar(`${pp}`)
    .toAttachment();
  data = levelup.toBuffer();
  await fs.writeFileSync(__path +'/database/sup.png', data)
  res.sendFile(__path +'/database/sup.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/gfx1', async (req, res) => {
            nama = req.query.teks
             const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var gfx1 = await new ch.Gfx1()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = gfx1.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx1.png', data)
  res.sendFile(__path +'/database/gfx1.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/canvas/gfx2', async (req, res) => {
        nama = req.query.teks
         const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var image = await new ch.Gfx2()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx2.png', data)
  res.sendFile(__path +'/database/gfx2.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/canvas/gfx3', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   
var image = await new ch.Gfx3()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx3.png', data)
  res.sendFile(__path +'/database/gfx3.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/canvas/gfx4', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   
var image = await new ch.Gfx4()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx4.png', data)
  res.sendFile(__path +'/database/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/canvas/gfx5', async (req, res) => {
            text = req.query.teks
 const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var image = await new ch.Gfx5()
    .setText(`${text}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx4.png', data)
  res.sendFile(__path +'/database/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/customgfx1', async (req, res) => {
            text = req.query.teks,
            bg = req.query.bg
             const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
     if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
   
var cgfx = await new ch.customGfx()
    .setText(text)
    .setBg(bg)
    .toAttachment();
    
  data = cgfx.toBuffer();
  await fs.writeFileSync(__path +'/database/cgfx.png', data)
  res.sendFile(__path +'/database/cgfx.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/customgfx2', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2,
            bg = req.query.bg
             const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
   
var cgfx = await new ch.customGfx2()
    .setText1(text1)
    .setText2(text2)
    .setBg(bg)
    .toAttachment();
    
  data = cgfx.toBuffer();
  await fs.writeFileSync(__path +'/database/cgfx2.png', data)
  res.sendFile(__path +'/database/cgfx2.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/gura', async (req, res) => {
            teks = req.query.teks
             const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!teks) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
var gura = await new ch.Gura()
    .setName(teks) 
    .toAttachment();
  data = gura.toBuffer();
  await fs.writeFileSync(__path +'/database/Gura.png', data)
  res.sendFile(__path +'/database/Gura.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/spongebob', async (req, res) => {
        image = req.query.image
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var burn = await new ch.Burn()
    .setAvatar(image)
    .toAttachment();
  
  data = burn.toBuffer();
  await fs.writeFileSync(__path +'/database/spongebob.png', data)
  res.sendFile(__path +'/database/spongebob.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/canvas/patrick', async (req, res) => {
           image = req.query.image
           const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var patrick = await new ch.Patrick()
    .setAvatar(image)
    .toAttachment();
  
  data = patrick.toBuffer();
  await fs.writeFileSync(__path +'/database/patrick.png', data)
  res.sendFile(__path +'/database/patrick.png')
  .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/canvas/instagram', async (req, res) => {
    pp = req.query.pp,
    username = req.query.username,
        post = req.query.post,
        followers = req.query.followers,
        following = req.query.following
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    if (!post) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter post"})
    if (!followers) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter followers"})
    if (!following) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter following"})
var Ig = await new ch.Ig()
    .setAvatar(pp)
    .setUsername(username)
    .setPost(post)
    .setFollowers(followers)
    .setFollowing(following)
    .toAttachment();
  data = Ig.toBuffer();
  await fs.writeFileSync(__path +'/database/instagram.png', data)
  res.sendFile(__path +'/database/instagram.png')
  .catch(e => {
            res.json(loghandler.error)
});
});
router.get('/canvas/xnxx', async (req, res) => {
    pp = req.query.pp,
    username = req.query.username
    const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    var Xnxx = await new ch.Xnxx()
    .setImage(pp)
    .setTitle(username)
    .toAttachment();
  data = Xnxx.toBuffer();
  await fs.writeFileSync(__path +'/database/xnxx.png', data)
  res.sendFile(__path +'/database/xnxx.png')
  .catch(e => {
            res.json(loghandler.error)
});
});
router.get('/ana', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/ana.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/kurumi', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/kurumi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/megumin', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/megumin.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/mikasa', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/mikasa.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/miku', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/miku.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/minato', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/minato.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/onepiece', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/onepiece.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/sagiri', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/sagiri.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/sasuke', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/sasuke.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/shina', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/shina.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/shinka', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/shinka.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/yuki', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/yuki.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/shota', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/shota.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/gremory', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/gremory.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/hestia', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/hestia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/hinata', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/hinata.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/naruto', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/naruto.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/rize', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/rize.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nezuko', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/nezuko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/tsunade', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/tsunade.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/neko', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/neko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nekonisme', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/nekonisme.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/chitoge', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/chitoge.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/waifu', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/lord-idoq1/pojand/main/random anime/waifu.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/beautiful', async(req, res, next) => {
img1 = req.query.img1,
img2 = req.query.img2
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img1) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img1'})
if(!img2) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img2'})
const hamsil = await new make.Beautiful().getImage(img1, img2)
await fs.writeFileSync(__path +'/beautiful.jpeg', hamsil)
res.sendFile(__path+'/beautiful.jpeg')
});

router.get('/blur', async(req, res, next) => {
img = req.query.img,
level = req.query.level
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
if(!level) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter level'})
const hamsil = await new make.Blur().getImage(img, level)
await fs.writeFileSync(__path +'/blur.jpeg', hamsil)
res.sendFile(__path+'/blur.jpeg')
});

router.get('/circle', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Circle().getImage(img)
await fs.writeFileSync(__path +'/circle.jpeg', hamsil)
res.sendFile(__path+'/circle.jpeg')
});

router.get('/karaba', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Karaba().getImage(img)
await fs.writeFileSync(__path +'/karaba.jpeg', hamsil)
res.sendFile(__path+'/karaba.jpeg')
});

router.get('/facepalm', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Facepalm().getImage(img)
await fs.writeFileSync(__path +'/facepalm.jpeg', hamsil)
res.sendFile(__path+'/facepalm.jpeg')
});

router.get('/captcha', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Captcha().getImage(img)
await fs.writeFileSync(__path +'/captcha.jpeg', hamsil)
res.sendFile(__path+'/captcha.jpeg')
});
router.get('/bobross', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})

const hamsil = await new make.Bobross().getImage(img)
await fs.writeFileSync(__path +'/bobross.jpeg', hamsil)
res.sendFile(__path+'/bobross.jpeg')
});
router.get('/confusedstonk', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.ConfusedStonk().getImage(img)
await fs.writeFileSync(__path +'/confusedstonk.jpeg', hamsil)
res.sendFile(__path+'/confusedstonk.jpeg')
});
router.get('/delete', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Delete().getImage(img)
await fs.writeFileSync(__path +'/delete.jpeg', hamsil)
res.sendFile(__path+'/delete.jpeg')
});
router.get('/bed', async(req, res, next) => {
img1 = req.query.img1,
img2 = req.query.img2
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img1) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img1'})
if(!img2) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img2'})

const hamsil = await new make.Bed().getImage(img1, img2)
await fs.writeFileSync(__path +'/bed.jpeg', hamsil)
res.sendFile(__path+'/bed.jpeg')
});
router.get('/doublestonk', async(req, res, next) => {
img1 = req.query.img1,
img2 = req.query.img2
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img1) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img1'})
if(!img2) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img2'})
const hamsil = await new make.DoubleStonk().getImage(img1, img2)
await fs.writeFileSync(__path +'/doublestonk.jpeg', hamsil)
res.sendFile(__path+'/doublestonk.jpeg')
});

router.get('/imgedit/circle', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/circle?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/captcha', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/captcha?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/police', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/police?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/continued', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });      
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/communism?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/putin', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });      
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/putin?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/petimati', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/petimati?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/presentasi', async(req, res, next) => {
  const text = req.query.text;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  let hasil = `https://gatauajg.yogipw.repl.co/api/lisapresentation?text=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/penjara', async(req, res, next) => {
  const url = req.query.text
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/jail?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/glass', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/glass?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/glass.png', data)
        res.sendFile(__path+'/tmp/glass.png')
});
router.get('/imgedit/wasted', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/wasted?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/wasted.png', data)
        res.sendFile(__path+'/tmp/wasted.png')
});

router.get('/crush', async(req, res, next) => {
img = req.query.img
const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
if(!img) return res.json({creator: 'DappaUhuy', status: true, message: 'masukan parameter img'})
const hamsil = await new make.Crush().getImage(img)
await fs.writeFileSync(__path +'/crush.jpeg', hamsil)
res.sendFile(__path+'/crush.jpeg')
});

router.get('/imgedit/greyscale', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/greyscale?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gscale.png', data)
        res.sendFile(__path+'/tmp/gscale.png')
});
router.get('/imgedit/invert', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/invert?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/invert.png', data)
        res.sendFile(__path+'/tmp/invert.png')
});
router.get('/imgedit/brightness', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/brightness?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/cerah.png', data)
        res.sendFile(__path+'/tmp/cerah.png')
});
router.get('/imgedit/sepia', async(req, res, next) => {
 const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/sepia?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/sepia.png', data)
        res.sendFile(__path+'/tmp/sepia.png')
  
});
router.get('/imgedit/enhance', async (req, res) => {
    var img = req.query.img;
     const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
try {
     var media = await getBuffer(img)
     var body = new FormData
         body.append('image', media, 'image')
         var ress = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
            method: 'POST',
            body
            })
  if (ress.status !== 200) return await res.json(ress)
    await fs.writeFileSync(__path + '/tmp/hd.png', await ress.buffer())

    res.sendFile(__path + '/tmp/hd.png')
   } catch (e) {
	 console.log(e)
    res.sendFile(error)
  }
});
router.get('/tiktokdl', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  Tiktok(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get('/cewe/thailand', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/thailand.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/igdll', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
aexm.igdl(url)
	.then(data => {
		var result = data;
		res.json({
			result
			 })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nekopoii', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
	var hasil = await nekopoi.getHentai(url)
            var result = hasil.results
		    res.json({
                 status: 200,
                 creator: `${creator}`,
                 result
            });
       });

router.get('/nekopoi/search', async(req, res, next) => {
        const query = req.query.query
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      if(!query) return res.json(loghandler.query)
var hasil = await nekopoi.search(query)
            var result = hasil.results
		    res.json({
                 status: 200,
                 creator: `${creator}`,
                 result
            });
       });
       router.get('/brainlyy', async(req, res, next) => {
        const query = req.query.query
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      if(!query) return res.json(loghandler.query)
var hasil = await brainly.getData(query)
            var result = hasil.results
		    res.json({
                 status: 200,
                 creator: `${creator}`,
                 result
            });
       });
router.get('/nekopoi/data', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
var hasil = await nekopoi.getHentaiEpisode(url)
            var result = hasil.results
		    res.json({
                 status: 200,
                 creator: `${creator}`,
                 result
            });
       });
router.get('/fb/dl', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
aexm.fbdown(url)
	.then(data => {
		var result = data;
		res.json({
			result
			 })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/ttdownloader', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
aexm.ttdownloader(url)
	.then(data => {
		var result = data;
		res.json({
			result
			 })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/linkwa', async(req, res, next) => {
const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
aexm.linkwa(query)
	.then(data => {
		var result = data;
		res.json({
			result
			 })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/cewe/korea', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/korea.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/cewe/indonesia', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/indonesia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/cewe/malaysia', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/cewe/china', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/china.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/cewe/japan', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/japan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/cewe/coli', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/coli.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/cewe/malaysia', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/twitter', async(req, res, next) => {
const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
twitterDown(url)
    .then(data => {
        var result = data;
             res.json({
           status : true,
                 creator : `${creator}`,    
                 result                              
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/asupan/hots', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/asupan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/bocil', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/ukhty', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/stalk/pinterest', async (req, res, next) => {
const username = req.query.username
          const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
          if(!username) return res.json(loghandler.username)
fetch(encodeURI(`https://api.pinterest.com/v3/pidgets/users/${username}/pins/`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
 				result: {
 					location: `${result.data.user.location}`,
 					about: `${result.data.user.about}`,
 					username: `${result.data.user.full_name}`,
 					image_url: `${result.data.user.image_small_url}`,
 					pin_count: `${result.data.user.pin_count}`,
 					follower_count: `${result.data.user.follower_count}`,
 					profile_url: `${result.data.user.profile_url}`
 				},
 				message: `${result.status}`,
 				endpoint: `${result.endpoint_name}`,
 				status: `${result.status}`,
 				maintanied_by: `${creator}`
 				     })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/asupan/tiktok', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/tiktok.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/ukhty2', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/geayubi', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/kuis/caklontong', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });                
	
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/kuis/math', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
    bu = await fetch('https://salism3api.pythonanywhere.com/math').then(v => v.json())
  res.json({ status: true, soal: bu.image, jawaban: bu.answer})
});

router.get('/kuis/tebakGambar', async (req, res, next) => {
 apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
   let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
});
router.get('/kuis/tebakbendera', async (req, res, next) => {
  apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakbendera.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/tebaklirik', async (req, res, next) => {
 apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
   const flag = JSON.parse(fs.readFileSync(__path +'/data/tebaklirik.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/tebakchara', async (req, res, next) => {
 apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
   const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakchara.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/tebakkimia', async (req, res, next) => {
  apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakkimia.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/tebakjenaka', async (req, res, next) => {
 apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
   const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakjenaka.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/family100', async (req, res, next) => {
   apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const f = JSON.parse(fs.readFileSync(__path +'/data/family100.json'));
  const tod = f[Math.floor(Math.random() * f.lenght)];
  var result = tod.result;
             res.json(result)

});

router.get('/search/image', async(req, res, next) => {
const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
  
  
    try {
        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              
              result: hasil
            })
        })
    } catch (e) {}
  
});
router.get('/search/gsmarena', async (req, res, next) => {
const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
     GSMArena(query)
     .then((data) => {
     var result = data.result;
       res.json(result)
     })
    
})

router.get('/search/pinterest', async (req, res, next) => {
const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
     pinterest(query)
     .then((data) => {
     var result = data.result;
       res.json(result)
     });
    
});

router.get('/search/shopee', async (req, res, next) => {
    const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)       
     Shoope(query, 50)
     .then((data) => {
       res.json(data)
     });
    
});
router.get('/wallpaper/cyberspace', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
    Cc = JSON.parse(fs.readFileSync(__path +'/data/CyberSpace.json'));
  const randCc = Cc[Math.floor(Math.random() * Cc.length)]
  data = await fetch(randCc).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/CyberSpace.jpeg', data)
  res.sendFile(__path +'/tmp/CyberSpace.jpeg')

});


router.get('/wallpaper/teknologi', async (req, res, next) => {
        apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
       
const Techno = JSON.parse(fs.readFileSync(__path +'/data/Technology.json'))
const randTech = Techno[Math.floor(Math.random() * Techno.length)]
data = await fetch(randTech).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/techno.jpeg', data)
res.sendFile(__path +'/tmp/techno.jpeg')

});


router.get('/wallpaper/muslim', async (req, res, next) => {
  apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const Muslim = JSON.parse(fs.readFileSync(__path +'/data/Islamic.json'));
  const randMuslim = Muslim[Math.floor(Math.random() * Muslim.length)];
  data = await fetch(randMuslim).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/muslim.jpeg', data)
  res.sendFile(__path +'/tmp/muslim.jpeg');

});


router.get('/wallpaper/programming', async (req, res, next) => {
  apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const Progam = JSON.parse(fs.readFileSync(__path +'/data/Programming.json'));
  const randProgam = Progam[Math.floor(Math.random() * Progam.length)];
  data = await fetch(randProgam).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/Programming.jpeg', data)
  res.sendFile(__path +'/tmp/Programming.jpeg')

});


router.get('/wallpaper/pegunungan', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
    const Mount = JSON.parse(fs.readFileSync(__path +'/data/Mountain.json'));
  const randMount = Mount[Math.floor(Math.random() * Mount.length)];
  data = await fetch(randMount).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/Mountain.jpeg', data)
  res.sendFile(__path+ '/tmp/Mountain.jpeg');

});
router.get('/nsfw/ahegao', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/bdsm', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/blowjob', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/cuckold', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/cum', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/ero', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/femdom', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/foot', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/gangbang', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/glasses', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/hentai', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/hentaigif', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/jahy', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/masturbation', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/nsfwNeko', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/orgy', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/panties', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/pussy', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/thighs', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/yuri', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/asupan/cecan', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/hijab', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/ghea', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/rikagusriani', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/igstalk', async(req, res, next) => {
          const username = req.query.username
          const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
          if(!username) return res.json(loghandler.username)
          fetch(encodeURI(`https://hardianto.xyz/api//igstalk?username=${username}&apikey=hardianto`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/snaptik', async(req, res, next) => {
const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
fetch(encodeURI(`https://api.dapuhy.ga/api/socialmedia/nguteksnaptik?url=${url}&apikey=i`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/sticker/webp', async(req, res, next) => {
const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
fetch(encodeURI(`https://api-lpg.herokuapp.com/converter/towebp?link=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
router.get('/socialmedia/download', async(req, res, next) => {
const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
fetch(encodeURI(`https://api-lpg.herokuapp.com/downloader/fbdl?link=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
  router.get('/ytsearch', async(req, res, next) => {
    const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
    ySearch(query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
      router.get('/textpro/graffiti', async(req, res, next) => {
      const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const text = req.query.text;
        const text2 = req.query.text2;
        if(!text) return res.json(loghandler.nottext)
        if(!text2) return res.json(loghandler.nottext2)
        {
          zrapi 
        .textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [
          text, text2
        ])
        .then((data) => {
          var urlnya = data
          download(urlnya, './tmp/pubg.jpg', function(){
            res.sendFile(path.resolve('./tmp/pubg.jpg'))
        })
        })
          }
        })
        router.get('/textpro/neonn', async(req, res, next) => {
      const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const text = req.query.text;
        if(!text) return res.json(loghandler.nottext)
        {
          zrapi 
        .textpro("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [
          text,
        ])
        .then((data) => {
          var urlnya = data
          download(urlnya, './tmp/pubg.jpg', function(){
            res.sendFile(path.resolve('./tmp/pubg.jpg'))
        })
        })
          }
        })
        router.get('/textpro/1917', async(req, res, next) => {
      const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const text = req.query.text;
        if(!text) return res.json(loghandler.nottext)
        {
          zrapi 
        .textpro("https://textpro.me/1917-style-text-effect-online-980.html", [
          text,
        ])
        .then((data) => {
          var urlnya = data
          download(urlnya, './tmp/pubg.jpg', function(){
            res.sendFile(path.resolve('./tmp/pubg.jpg'))
        })
        })
          }
        })
        router.get('/ig/stalk', async(req, res, next) => {
          const username = req.query.username
          const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
          if(!username) return res.json(loghandler.username)
          igStalk(username)
              .then((data) => {
                  res.send(data);
              })
              .catch((err) => {
                  res.send(err);
              });
      });
       router.get('/tiktok/stalk', async(req, res, next) => {
          const username = req.query.username
          const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
          if(!username) return res.json(loghandler.username)
TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             });
         });
   
});
      router.get('/ig/dl', async(req, res, next) => {
        const url = req.query.url
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
        if(!url) return res.json(loghandler.invalidlink)
        igDownload(url)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            });
    });
    router.get('/facebook4', async(req, res, next) => {
        const url = req.query.url
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
        if(!url) return res.json(loghandler.invalidlink)
        FB(url)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            });
    });
    router.get('/fb/downloadd', async(req, res, next) => {
        const url = req.query.url
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      if(!url) return res.json(loghandler.invalidlink)
FB(url)
	.then(data => {
		var result = data;
		res.json({
			result
			 })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/hentaisearch', async(req, res, next) => {
        const query = req.query.query
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      if(!query) return res.json(loghandler.query)
var hasil = await nana.search(query)
            var result = hasil.results
		    res.json({
                 status: 200,
                 creator: `${creator}`,
                 result
            });
       });
       router.get('/ytstalkk', async(req, res, next) => {
        const query = req.query.query
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      if(!query) return res.json(loghandler.query)
ytstalk.getYTStalk(query)
	.then(data => {
		var result = data;
		res.json({
			result
			 })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
 
 router.get('/fb/download', async(req, res, next) => {
        const url = req.query.url
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      if(!url) return res.json(loghandler.invalidlink)
fbdl.getInfo(url)
	.then(data => {
		var result = data;
		res.json({
			result
			 })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
 router.get('/igstalkk', async(req, res, next) => {
        const query = req.query.query
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      if(!query) return res.json(loghandler.query)
ytstalk.getIGStalk(query)
	.then(data => {
		var result = data;
		res.json({
			result
			 })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/anime/info', async(req, res, next) => {
        const query = req.query.query
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      if(!query) return res.json(loghandler.query)
ytstalk.getAnimeInfo(query)
	.then(data => {
		var result = data;
		res.json({
			result
			 })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

    router.get('/whois', async(req, res, next) => {
      const domain = req.query.domain
      const apikey = req.query.apikey;
      if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `Input Parameter apikey`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
      const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
      if(!domain) return res.json(loghandler.domain)
      whois(domain)
          .then((data) => {
              res.send(data);
          })
          .catch((err) => {
              res.send(err);
          });
  });

    router.get('/generatepw', async(req, res, next) => {
      const apikey = req.query.apikey;
      if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `Input Parameter apikey`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
      const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    genPassword()
          .then((data) => {
              res.send(data);
          })
          .catch((err) => {
              res.send(err);
          });
  });

 router.get('/artinama11', async(req, res, next) => {
 const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
  const nama = req.query.nama;
  if(!nama) return res.json(loghandler.noname)
  artiNama(nama)
      .then((data) => {
          res.send(data);
      })
      .catch((error) => {
          res.send(error);
      });
});
router.get('/artinama', async (req, res, next) => {
          nama = req.query.nama
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
        fetch(encodeURI(`https://ariarestapii.herokuapp.com/api/artinama11?nama=${nama}&apikey=aria`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
               status: 200,
               data
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
         router.get('/artimimpi', async (req, res, next) => {
          mimpi = req.query.mimpi
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!mimpi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter mimpi"})
        fetch(encodeURI(`https://ariarestapii.herokuapp.com/api/artimimpi11?mimpi=${mimpi}&apikey=aria`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
               data
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
router.get('/artimimpi11', async(req, res, next) => {
  const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 let limit = await isLimit(apikey);
 if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
   status: 403,
   message: `apikey ${apikey} not found, please register first!`
});
 const mimpi = req.query.mimpi;
 if(!mimpi) return res.json(loghandler.nomimpi)
 artiMimpi(mimpi)
     .then((data) => {
         res.send(data);
     })
     .catch((error) => {
         res.send(error);
     });
});
router.get('/nomorhoki111111111111111111111', async(req, res, next) => {
  const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 let limit = await isLimit(apikey);
 if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
   status: 403,
   message: `apikey ${apikey} not found, please register first!`
});
 const nomor = req.query.nomor;
 if(!nomor) return res.json(loghandler.nomor)
 nomorHoki(nomor)
     .then((data) => {
         res.send(data);
     })
     .catch((error) => {
         res.send(error);
     });
});
router.get('/jodo1h', async(req, res, next) => {
  const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
 const nama1 = req.query.nama1;
 const nama2 = req.query.nama2;
 if(!nama1) return res.json(loghandler.noname)
 if(!nama2) return res.json(loghandler.noname2)
 ramalJodoh(nama1, nama2)
     .then((data) => {
         res.send(data);
     })
     .catch((error) => {
         res.send(error);
     });
});
router.get('/aesthetic', async (req, res, next) => {
   const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    hem = ''
 link = 'https://source.unsplash.com/random'
         axios.get(link).then(async (result) => {
             hem = result.request.res.responseUrl
             baper = await fetch(hem).then(v => v.buffer())
             res.type('png')
             res.send(baper)
         })
  })
        router.get('/wanted', async (req, res, next) => {
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          mim = req.query
          if (!mim.url) return res.json({ status: 404, msg: 'Masukkan Param Url'})
          try {
            canva = await require('canvacord').Canvas.wanted(mim.url)
            res.type('png')
            res.send(canva)
            
          } catch {
            res.json({ status: 404, msg: 'Server Error, Please Report To wa.me/6281215199447'})
          }
        })
        router.get('/google', async (req, res, next) => {
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          yt = require('google-it')
        if (!req.query.q) return res.json({ status: false, msg: 'Masukkan Parameter q'})
        ser = await yt({ query: req.query.q})
        res.json({ status: 'success', result: ser})
        })
        router.get('/darkjokes', async (req, res, next) => {
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          bdyyyy = await fetch('https://raw.githubusercontent.com/Caliph71/txt/main/darkjokes.txt')
       bdy = await bdyyyy.text()
        splitnix = bdy.split('\n')
              
         randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
         re = await fetch(randomnix).then(v => v.buffer())
         res.type('jpg')
         res.send(re)
})
        router.get('/wasted', async (req, res, next) => {
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          mim = req.query
          if (!mim.url) return res.json({ status: 404, msg: 'Masukkan Param Url'})
          try {
            canva = await require('canvacord').Canvas.wasted(mim.url)
            res.type('png')
            res.send(canva)
            
          } catch {
            res.json({ status: 404, msg: 'Server Error, Please Report To wa.me/6281215199447'})
          }
        })
        router.get('/trigger', async (req, res, next) => {
          mim = req.query
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          if (!mim.url) return res.json({ status: 404, msg: 'Masukkan Param Url'})
          try {
            canva = await require('canvacord').Canvas.trigger(mim.url)
            res.type('gif')
            res.send(canva)
            
          } catch {
            res.json({ status: 404, msg: 'Server Error'})
          }  
        })
        router.get('/meguminn', async (req, res, next) => { 
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
          data = await fetchJson('https://api.waifu.pics/sfw/megumin')
          buff = await fetch(data.url).then(v => v.buffer())
          res.type('png')
          res.send(buff)
          })

          router.get('/husbu', async (req, res, next) => { 
            apikey = req.query.apikey;
            if (apikey === undefined) return res.status(404).send({
                status: 404,
                message: `Input Parameter apikey`
            });
            let limit = await isLimit(apikey);
            if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
            limitAdd(apikey);
            const check = await cekKey(apikey);
            if (!check) return res.status(403).send({
              status: 403,
              message: `apikey ${apikey} not found, please register first!`
          });
            data = await fetchJson('https://memekgede.herokuapp.com/api/husbuando')
            buff = await fetch(data.image).then(v => v.buffer())
            res.type('png')
            res.send(buff)
            })

            router.get('/waifuu', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/waifu')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })

            router.get('/pokee', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/poke')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('gif')
              res.send(buff)
              })
  

        router.get('/spamcall', async (req, res, next) => {
       no = req.query.no
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
      if (!no) return res.json({ status : false, creator : `${creator}`, message : "masukin nomernya"})

       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/spamcall?no=${no}`))
      .then(response => response.json())
    .then(data => {
    var result = data;
     res.json({
     author: 'IdoGanz',
        result
   })
   })
 })
        router.get('/stalker', async (req, res, next) => {
          username = req.query.username
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        
        fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
               result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
          router.get('/quotes', async (req, res, next) => {
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });      
        fetch(encodeURI(`https://ariarestapii.herokuapp.com/api/quotes1?apikey=aria`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
               result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/cersex', async (req, res, next) => {
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/cersex`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             status: 200,
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/samehadaku', async (req, res, next) => {
          q = req.query.q
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/samehadaku?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             status: 200,
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/kusonime', async (req, res, next) => {
          q = req.query.q
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/kuso?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             status: 200,
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/getsticker', async (req, res, next) => {
          q = req.query.q
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/getsticker?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             status: 200,
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
          router.get('/mediafire2', async (req, res, next) => {
          url = req.query.url
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/mediafire?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/nomorhoki', async (req, res, next) => {
          no = req.query.no
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!no) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter no"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/nomer_hoki?nomer=${no}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
         router.get('/jodoh', async (req, res, next) => {
          nama = req.query.nama
          nama2 = req.query.nama2
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
         if(!nama2) return res.json(loghandler.noname2)
        fetch(encodeURI(`https://restapppp.herokuapp.com/primbon/jodoh?nama1=${nama}&nama2=${nama2}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
               result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/mediafire', async (req, res, next) => {
          if (!req.query.url) return res.send({ status: 500, msg : 'Masukkan Parameter url'})
          apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
          try {
          f = require ('../lib/mediafire')
          res.json(await f(req.query.url))
          } catch {
           res.send('TerJadi Kesalahan, Mungkin Url Tidak Valid')
          }
          })
    router.get('/asupan', async (req, res, next) => {
        apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
          const asupan = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan.json'));
          const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
          let hasil = Asupan.asupan;
          data = await fetch(hasil).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
          res.sendFile(__path +'/tmp/asupan.mp4')
        })        
          
    router.get("/memegen", async (req, res, next) => {
  
        apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
        text = req.query.text;
        text2 = req.query.text2;
        img = req.query.img;
        if(!text) return res.json(loghandler.nottext)  
        if(!text2) return res.json(loghandler.nottext)
        if(!img) return res.json(loghandler.img)
              {
          let hasil = 'https://memekgede.herokuapp.com/api/meme-gen?top='+ text +'&bottom='+ text2 +'&img='+ img +'&apikey=ar'
          data = await fetch(hasil).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/meme-gen.jpg', data)
          res.sendFile(__path +'/tmp/meme-gen.jpg')
        }
      })
      router.get("/nulis", async (req, res, next) => {
  
        apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
        text = req.query.text;
        
        if(!text) return res.json(loghandler.nottext)        
              {
          let hasil = 'https://api.zeks.xyz/api/nulis?text='+ text +'&apikey=AriaGanzTzy' 
          data = await fetch(hasil).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/nulis.jpeg', data)
          res.sendFile(__path +'/tmp/nulis.jpeg')
        }
      })
      router.get("/attp", async (req, res, next) => {
  
        apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
        text = req.query.text;
        
        if(!text) return res.json(loghandler.nottext)        
              {
          let hasil = `https://api.lolhuman.xyz/api/attp?apikey=2d3962dbfca3fd4a7f6f9348&text=${text}`
          data = await fetch(hasil).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/attp.gif', data)
          res.sendFile(__path +'/tmp/attp.gif')
        }
      })
      router.get('/ssweb', async (req, res, next) => {
url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
 {
 let hasil = `http://nurutomo.herokuapp.com/api/ssweb?url=${url}`
data = await fetch(hasil).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/screenshot.png', data)
res.sendFile(__path +'/tmp/screenshot.png')
}
})

router.get('/removebg2', async (req, res, next) => {
img = req.query.img;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
 if (!img) return res.json(loghandler.notimg)
 {
 let hasil = `https://leyscoders-api.herokuapp.com/api/removebg?img=${img}&apikey=IkyOgiwara`
data = await fetch(hasil).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/removebg.png', data)
res.sendFile(__path +'/tmp/removebg.png')
}
})

router.get('/removebg', async (req, res, next) => {
url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
{
let encmedia = await imageToBase64(img)
	let media = Buffer.from(encmedia, 'base64')
	   await fs.writeFileSync(__path + '/tmp/nobg.png', media)
	      let rbg = RemoveBg('HCVrssExQw8DuaWpj2vE5359', 'error.log')
              rbg.remove_background_from_img_file(__path + '/tmp/nobg.png')
	  res.sendFile(__path +'/tmp/nobg.png')
 }
})
      router.get('/textpro/neon', async(req, res, next) => {
      const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const text = req.query.text;
        if(!text) return res.json(loghandler.nottext)
        {
          zrapi 
        .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
          text,
        ])
        .then((data) => {
          var urlnya = data
          download(urlnya, './tmp/pubg.jpg', function(){
            res.sendFile(path.resolve('./tmp/pubg.jpg'))
        })
        })
          }
        })
router.get('/textpro/matrix', async(req, res, next) => {
   const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
    {
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text,
  ])
  .then((data) => {
    var urlnya = data
    download(urlnya, './tmp/pubg.jpg', function(){
      res.sendFile(path.resolve('./tmp/pubg.jpg'))
  })
  })
    }
  })
      router.get('/textpro/joker', async(req, res, next) => {
      const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const text = req.query.text;        
        if(!text) return res.json(loghandler.nottext)
        {
          zrapi 
        .textpro("https://textpro.me/create-logo-joker-online-934.html", [
          text,
        ])
        .then((data) => {
          var urlnya = data
          download(urlnya, './tmp/pubg.jpg', function(){
            res.sendFile(path.resolve('./tmp/pubg.jpg'))
        })
        })
          }
        })
        router.get('/textpro/devil', async(req, res, next) => {
          const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const text = req.query.text;
          if(!text) return res.json(loghandler.nottext)
          {
            zrapi 
          .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
            text,
          ])
          .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function(){
              res.sendFile(path.resolve('./tmp/pubg.jpg'))
          })
          })
            }
          })
          router.get('/textpro/transformers', async(req, res, next) => {
             const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
            const text = req.query.text;
            if(!text) return res.json(loghandler.nottext)
            {
              zrapi 
            .textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
              text,
            ])
            .then((data) => {
              var urlnya = data
              download(urlnya, './tmp/pubg.jpg', function(){
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
            })
              }
            })    
            router.get('/textpro/thunder', async(req, res, next) => {
               const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              const text = req.query.text;
              if(!text) return res.json(loghandler.nottext)
              {
                zrapi 
              .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
                text,
              ])
              .then((data) => {
                var urlnya = data
                download(urlnya, './tmp/pubg.jpg', function(){
                  res.sendFile(path.resolve('./tmp/pubg.jpg'))
              })
              })
                }
              })
     router.get('/textpro/harry', async(req, res, next) => {
          const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
                const text = req.query.text;
                if(!text) return res.json(loghandler.nottext)
                {
                  zrapi 
                .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
                  text,
                ])
                .then((data) => {
                  var urlnya = data
                  download(urlnya, './tmp/pubg.jpg', function(){
                    res.sendFile(path.resolve('./tmp/pubg.jpg'))
                  })
               })
            }
        })
        router.get('/textpro/3d', async(req, res, next) => {
           const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
                 const text = req.query.text;
                 if(!text) return res.json(loghandler.nottext)
                 {
                   zrapi 
                 .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
                   text,
                 ])
                 .then((data) => {
                   var urlnya = data
                   download(urlnya, './tmp/pubg.jpg', function(){
                     res.sendFile(path.resolve('./tmp/pubg.jpg'))
                   })
                })
             }
         })
router.get('/textpro/blackpink', async(req, res, next) => {
   const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
    {
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    var urlnya = data
    download(urlnya, './tmp/pubg.jpg', function(){
      res.sendFile(path.resolve('./tmp/pubg.jpg'))
  })
  })
    }
  })
  
      router.get('/tahta', async(req, res, next) => {
         const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        text = req.query.text;
        
        if(!text) return res.json(loghandler.nottext)        
              {
        let hasil = 'https://api.zeks.xyz/api/hartatahta?text='+ text +'&apikey=AriaGanzTzy' 
        data = await fetch(hasil).then(v => v.buffer())
        await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
        res.sendFile(__path +'/tmp/tahta.jpg')
        }
      })
      router.get('/sideoppaiii', async(req, res, next) => {
         const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});                
              {
        let hasil = 'https://raw.githubusercontent.com/lord-idoq1/nime2x/main/hentai/sideoppai.json'
        data = await fetch(hasil).then(v => v.buffer())
        await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
        res.sendFile(__path +'/tmp/tahta.jpg')
        }
      })
      router.get('/silver/button', async(req, res, next) => {
         const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        text = req.query.text;
        
        if(!text) return res.json(loghandler.nottext)        
              {
        let hasil = 'https://h4ck3rs404-api.herokuapp.com/api/silverplay?text='+ text +'&apikey=404Api' 
        data = await fetch(hasil).then(v => v.buffer())
        await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
        res.sendFile(__path +'/tmp/tahta.jpg')
        }
      })
      router.get('/gold/button', async(req, res, next) => {
         const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        text = req.query.text;
        
        if(!text) return res.json(loghandler.nottext)        
              {
        let hasil = 'https://h4ck3rs404-api.herokuapp.com/api/goldplay?text='+ text +'&apikey=404Api' 
        data = await fetch(hasil).then(v => v.buffer())
        await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
        res.sendFile(__path +'/tmp/tahta.jpg')
        }
      })
      router.get('/tahta2', async(req, res, next) => {
         const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        text = req.query.text;
        
        if(!text) return res.json(loghandler.nottext)        
              {
        let hasil = 'https://leyscoders-api.herokuapp.com/api/harta-tahta?text='+ text +'&apikey=IkyOgiwara' 
        data = await fetch(hasil).then(v => v.buffer())
        await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
        res.sendFile(__path +'/tmp/tahta.jpg')
        }
      })
      router.get('/textpro/pornhub', async(req, res, next) => {
  const text = req.query.text;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);  
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
});
});
      router.get("/magernulis", async (req, res, next) => {
  
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
         status: 403,
         message: `apikey ${apikey} not found, please register first!`
       });
         let limit = await isLimit(apikey);
         if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        nama = req.query.nama;
        kelas = req.query.kelas;
        text = req.query.text
        tinta = req.query.tinta
        if(!text) return res.json(loghandler.nottext)        
              {
          let hasil = 'https://api.zeks.xyz/api/magernulis?nama='+ nama +'&kelas='+ kelas +'&text='+ text +'&tinta='+ tinta +'&apikey=AriaGnzTzy' 
          data = await fetch(hasil).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/magernulis.jpeg', data)
          res.sendFile(__path +'/tmp/magernulis.jpeg')
        }
      })
      
    
router.get('/checkkey', async (req, res) => {
  const apikey = req.query.apikey;
  if (apikey === undefined) return res.status(404).send({
      status: 404,
      message: `Input Parameter apikey`
  });
  limitAdd(apikey);
  const check = await cekKey(apikey);
  if (!check) return res.status(403).send({
   status: 403,
   message: `apikey ${apikey} not found, please register first!`
 });
   let limit = await isLimit(apikey);
   if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    res.send({status: 200, image: 'https://i.ibb.co/3zmmT3p/flaming.jpg', apikey: apikey, limit: limit});
});

router.get('/google', async (req, res, next) => {
     const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    yt = require('google-it')
  if (!req.query.q) return res.json({ status: false, msg: 'Masukkan Parameter q'})
  ser = await yt({ query: req.query.q})
  res.json({ status: 'success', result: ser})
  })

  router.get('/tiny', async (req, res, next) => {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (url === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    limitAdd(apikey);
  request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
     try {
         res.json({
             status : true,
             creator : `${creator}`,
             result : {
                 link : `${body}`,
             },
             message : `Jangan Lupa Bersyukur Hari Ini:)`
         })
     } catch (e) {
         console.log('Error :')
         res.json(loghandler.invalidlink)
     }
  })
  })

  router.get('/joox', async (req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    limitAdd(apikey);
    res.json(await Joox(req.query.q))
    })

    router.get('/cerpen', async (req, res, next) => {
      const apikey = req.query.apikey;
      if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `Input Parameter query & apikey`
      });
      const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
      limitAdd(apikey);

     fetch(encodeURI(`https://memekgede.herokuapp.com/api/cerpen`))
      .then(response => response.json())
      .then(data => {
      var result = data;
           res.json({
               creator : `${creator}`,
               result
           })
       })
       .catch(e => {
         res.json(loghandler.error)
})
})

router.get('/fml', async (req, res, next) => {
  const apikey = req.query.apikey;
  if (apikey === undefined) return res.status(404).send({
      status: 404,
      message: `Input Parameter apikey`
  });
  const check = await cekKey(apikey);
  if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
  limitAdd(apikey);

 fetch(encodeURI(`https://memekgede.herokuapp.com/api/fml`))
  .then(response => response.json())
  .then(data => {
  var result = data;
       res.json({
           creator : `${creator}`,
           result
       })
   })
   .catch(e => {
     res.json(loghandler.error)
})
})

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
