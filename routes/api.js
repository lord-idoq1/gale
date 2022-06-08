const express = require('express');
const router = express.Router();
const axios = require('axios')
var { fetchJson } = require('../lib/fetcher.js')
const path = require('path');
const { readFileTxt, readFileJson } = require('../lib/function');
const { ytMp4, ytMp3, ytPlay } = require('../lib/youtube');
const { cekKey, limitAdd, isLimit } = require('../database/db');
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');
const  request  = require('request');
var zrapi = require("zrapi");
var creatorList = ['Aria Putra Pratama'];
var fetch = require('node-fetch');
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
    yDonlod, 
    yPlay, 
    ySearch 
} = require("../function/yt");

        router.get('/brainly', async (req, res, next) => {
            yt = require('brainly-scraper')
            const q = req.query.q;
            const apikey = req.query.apikey;
            if (q === undefined || apikey === undefined) return res.status(404).send({
                status: 404,
                message: `Input Parameter q & apikey`
            });
            let limit = await isLimit(apikey);
            if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
            limitAdd(apikey);
            const check = await cekKey(apikey);
            if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
          ser = await yt(req.query.q)
          res.json(ser)
          })
          
    

router.get('/ytplay', youtubePlay);

router.get('/ytmp4', youtubeMp4);

router.get('/ytmp3', youtubeMp3);


module.exports = router;
