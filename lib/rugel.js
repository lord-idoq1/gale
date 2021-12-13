const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")
const creator = 'Muhammad Shulhan Zidni'

function ttdownloader(url){
	return new Promise(async(resolve, reject) => {
		axios.get('https://ttdownloader.com/',{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			let token = $('#token').attr('value')
			let config = {
				'url': url,
				'format': '',
				'token': token
			}
		axios('https://ttdownloader.com/req/',{
			method: 'POST',
			data : new URLSearchParams(Object.entries(config)),
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			}
			})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			resolve({
				nowm: $('div:nth-child(2) > div.download > a').attr('href'),
				wm: $('div:nth-child(3) > div.download > a').attr('href'),
				audio: $('div:nth-child(4) > div.download > a').attr('href')
				})
			})
		})
	.catch(reject)
	})
}

function igdl(url){
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/download-instagram-videos.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const token = $('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url': url,
					'action': 'post',
					'token': token
				}
			}
		axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
		.then(({ data }) => {
		resolve(data.medias)
		   })
		})
	.catch(reject)
	})
}

function lyrics(query) {
    return new Promise((resolve, reject) => {
        axios.get(`http://www.songlyrics.com/index.php?section=search&searchW=${query}&submit=Search`).then(({ data }) => {
            link = []
            const $ = cheerio.load(data)
            $("div.serpresult > a").get().map((rest) => {
                link.push($(rest).attr("href"))
            })
            oke = link[Math.floor(Math.random() * link.length)]
            axios.get(`${oke}`).then(({ data }) => {
                title = []
                lirik = []
                const $ = cheerio.load(data) 
                $("div.pagetitle > h1").each(function(a, b) {
                    title.push($(b).text().trim())
                })
                $("div#songLyricsDiv-outer > p").each(function(a, b) {
                    lirik.push($(b).text().trim())
                })
                const result = []
                result.push({
                    title: title[0],
                    lirik: lirik[0]
                })
                resolve({
                    creator: creator,
                    status: true,
                    result: result
                })
            })
        })
    })
}

function twitter(link){
	return new Promise((resolve, reject) => {
		let config = {
			'URL': link
		}
		axios.post('https://twdown.net/download.php',qs.stringify(config),{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
			}
		})
		.then(({ data }) => {
		const $ = cheerio.load(data)
		resolve({
				desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
				thumb: $('div:nth-child(1) > img').attr('src'),
				HD: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
				SD: $('tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
				audio: 'https://twdown.net/' + $('tr:nth-child(4) > td:nth-child(4) > a').attr('href')
			})
		})
	.catch(reject)
	})
}

function pindl(query) {
  return new Promise((resolve, reject) => {
    let config = {
      'url': query
    }
    axios.post(`https://www.expertstool.com/download-pinterest-video/`, qs.stringify(config), {
      headers: {
       "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
       "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
       "user-agent": "Mozilla/5.0 (Linux; Android 9; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36",
       "cookie": "_ga=GA1.2.103813954.1631764157; _gid=GA1.2.1956752531.1631764157; __gads=ID=a1e08d5627291885-22457165a8cb004f:T=1631764156:RT=1631764156:S=ALNI_MYhNMeAsUDN3fKb0BNKi3WOjCWsLQ; _gat_gtag_UA_179263468_1=1"
      }
    })
    .then(({ data }) => {
      const $ = cheerio.load(data)
      resolve({
      	creator: creator,
        video: $("tbody > tr > td:nth-child(1) > a").attr("href"),
        image: $("tbody > tr > td:nth-child(2) > a").attr("href")
      })
    })
  })
}

function likeedl(query) {
  return new Promise((resolve, reject) => {
    let config = {
      'url': query
    }
    axios.post(`https://www.expertstool.com/like-video-download/`, qs.stringify(config), {
      headers: {
       "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
       "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
       "user-agent": "Mozilla/5.0 (Linux; Android 9; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36",
       "cookie": "_ga=GA1.2.103813954.1631764157; _gid=GA1.2.1956752531.1631764157; __gads=ID=a1e08d5627291885-22457165a8cb004f:T=1631764156:RT=1631764156:S=ALNI_MYhNMeAsUDN3fKb0BNKi3WOjCWsLQ; _gat_gtag_UA_179263468_1=1"
      }
    })
    .then(({ data }) => {
      const $ = cheerio.load(data)
      resolve({
      	creator: creator,
        hd: $("tbody > tr > td:nth-child(1) > a").attr("href")
      })
    })
  })
}

function snapchatdl(query) {
  return new Promise((resolve, reject) => {
    let config = {
      'url': query
    }
    axios.post(`https://www.expertstool.com/snapchat-video-downloader/`, qs.stringify(config), {
      headers: {
       "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
       "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
       "user-agent": "Mozilla/5.0 (Linux; Android 9; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36",
       "cookie": "_ga=GA1.2.103813954.1631764157; _gid=GA1.2.1956752531.1631764157; __gads=ID=a1e08d5627291885-22457165a8cb004f:T=1631764156:RT=1631764156:S=ALNI_MYhNMeAsUDN3fKb0BNKi3WOjCWsLQ; _gat_gtag_UA_179263468_1=1"
      }
    })
    .then(({ data }) => {
      const $ = cheerio.load(data)
      resolve({
      	creator: creator,
        hd: $("tbody > tr > td:nth-child(1) > a").attr("href")
      })
    })
  })
}

function IGVideo(url) {
  return new Promise((resolve, reject) => {
    let config = {
      'url': url
    }
    axios.post(`https://snapinsta.app/action.php`, qs.stringify(config), {
    })
    .then(({ data }) => {
      url = []
      type = []
      const $ = cheerio.load(data)
      $("div.download-items__btn > a").each(function(a, b) {
      	url.push($(b).attr("href"))
      	})
      $("div.download-items__btn > a").each(function(a, b) {
      	type.push($(b).text().replace('Download ', ''))
      	})
      const result = []
      for(let i = 0; i < url.length; i++) {
      	result.push({
      	url: url[i].replace('/dl.php?token=', 'https://snapinsta.app/dl.php?token=')
      	})
        }
      resolve({
      download: result,
      type: 'Instagram ' + type[0]
      })
    })
  })
}

function IGStory(url) {
  return new Promise((resolve, reject) => {
    let config = {
      'url': url
    }
    axios.post(`https://snapinsta.app/action.php`, qs.stringify(config), {
    })
    .then(({ data }) => {
      url = []
      type = []
      const $ = cheerio.load(data)
      $("div.download-items__btn > a").each(function(a, b) {
      	url.push($(b).attr("href"))
      	})
      $("div.download-items__btn > a").each(function(a, b) {
      	type.push($(b).text().replace('Download ', ''))
      	})
      const result = []
      for(let i = 0; i < url.length; i++) {
      	result.push({
      	url: url[i].replace('/dl.php?token=', 'https://snapinsta.app/dl.php?token=')
      	})
        }
      resolve({
      download: result,
      type: 'Instagram Story ' + type[0]
      })
    })
  })
}

function IGPhoto(url) {
  return new Promise((resolve, reject) => {
    let config = {
      'url': url
    }
    axios.post(`https://snapinsta.app/action.php`, qs.stringify(config), {
    })
    .then(({ data }) => {
      url = []
      type = []
      const $ = cheerio.load(data)
      $("div.download-items__btn > a").each(function(a, b) {
      	url.push($(b).attr("href"))
      	})
      $("div.download-items__btn > a").each(function(a, b) {
      	type.push($(b).text().replace('Download ', ''))
      	})
      const result = []
      for(let i = 0; i < url.length; i++) {
      	result.push({
      	url: url[i].replace('/dl.php?token=', 'https://snapinsta.app/dl.php?token=')
      	})
        }
      resolve({
      download: result,
      type: 'Instagram ' + type[0]
      })
    })
  })
}

function IGReels(url) {
  return new Promise((resolve, reject) => {
    let config = {
      'url': url
    }
    axios.post(`https://snapinsta.app/action.php`, qs.stringify(config), {
    })
    .then(({ data }) => {
      const $ = cheerio.load(data)
      resolve({
      url: 'https://snapinsta.app' + $("div.download-items__btn > a").attr("href"),
      type: 'Instagram Reels ' + $("div.download-items__btn > a").text().replace('Download ', '')
      })
    })
  })
}

function ShorterUrl(url) {
  return new Promise((resolve, reject) => {
    if (!url) return console.log('Enter url!')
    let config = {
      'url': url
    }
    axios.post(`http://url.ojansenpai.ml/shorten`, qs.stringify(config), {
    	headers: {
       "user-agent": "Mozilla/5.0 (Linux; Android 9; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36"
      }
    })
    .then(({ data }) => {
      resolve(data)
    })
  })
}

function CaptainA(text1, text2) {
  return new Promise((resolve, reject) => {
    let config = {
      'text_1': text1,
      'text_2': text2,
      'login': 'OK'
    }
    axios.post(`https://photooxy.com/captain-america-text-generator-403.html`, qs.stringify(config), {
    	headers: {
    	"user-agent": "Mozilla/5.0 (Linux; Android 9; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36",
    	"cookie": "__gads=ID=770740ae845db259-22532079bdcb0021:T=1632202414:RT=1632202414:S=ALNI_Mb9WPELJxu6lQy3KBl3yL34Q3-uIA; _ga=GA1.2.1606067689.1632202414; _gat_gtag_UA_111543820_4=1; _gid=GA1.2.345673294.1632202414"
    	}
    })
    .then(({ data }) => {
      const $ = cheerio.load(data)
      resolve({
      creator: creator,
      url: $("div.btn-group > a").attr("href")
      })
    })
  })
}

function fbdl(url) {
  return new Promise((resolve, reject) => {
    axios.get(`https://aiovideodl.ml/facebook-video-downloader/`, {
      headers: {
        "user-agent": "Mozilla/5.0 (Linux; Android 9; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36",
        "cookie": "PHPSESSID=qdgrrlihpqleqjgfr77vst1fqn; _ga=GA1.2.1253195356.1632828023; _gid=GA1.2.1308380467.1632828023; pll_language=en"
      }
    }).then(({ data }) => {
      const $ = cheerio.load(data)
      const token = $("#token").attr("value")
      let config = {
        "url": url,
        "token": token
      }
      axios.post(`https://aiovideodl.ml/facebook-video-downloader/`, qs.stringify(config), {
        headers: {
          "user-agent": " Mozilla/5.0 (Linux; Android 9; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36",
          "cookie": "PHPSESSID=qdgrrlihpqleqjgfr77vst1fqn; _ga=GA1.2.1253195356.1632828023; _gid=GA1.2.1308380467.1632828023; pll_language=en"
        }
      })
      .then(({ data }) => {
        resolve({
        	ya: data,
        tk: token,
          sd: $("div.col-md-8.col-sm-12 > a").attr("href")
        })
      })
     })
    })
}

module.exports = { ttdownloader, igdl, lyrics, twitter, pindl, likeedl, snapchatdl, IGVideo, IGStory, IGPhoto, ShorterUrl, CaptainA, fbdl }
