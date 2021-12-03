const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const _math = require('mathjs')
const _url = require('url')
const request = require('request');
const randomarray = async (array) => {
	return array[Math.floor(Math.random() * array.length)]
}


exports.hentaivid = async() => {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            const random = hasil[Math.floor(Math.random() * hasil.length)]
            resolve({
                status: data.status,
                creator: 'Rapa',
                hasil: random
            })
        })
    })
}


exports.porno = async() => {
    return new Promise((resolve, reject) => {
        axios.get('https://tikporntok.com/?random=1')
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = {}
            hasil.title = $('article > h1').text()
            hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
            hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            hasil.desc = $('article > div.intro').text()
            hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
            hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
            hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
            hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
            hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
            hasil.tags = $('article > div.post-tags').text()
            hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            resolve({ status: res.status, creator: 'Rapa', hasil: hasil })
        })
    })
}

exports.asupanfilm = async (query) => {
	return new Promise((resolve) => {
		axios.get(`https://asupanfilm.link/?search=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const desc = [];
				const thumb = [];
				const link = [];
				const result = [];
				$('body > div > div > div.card-body.p-2 > ul > li > div > div > h6 > a').each(function(a, b) {
					deta = $(b).text();
					judul.push(deta)
				})
				$('body > div > div > div.card-body.p-2 > ul > li > div > div').each(function(a, b) {
					deta = $(b).text()
					desc.push(deta.split('   ')[2])
				})
				$('body > div > div > div.card-body.p-2 > ul > li > div > img').each(function(a, b) {
					thumb.push($(b).attr('src').split('UX67_CR0,0,67,98_AL_')[0])
				})
				$('body > div > div > div.card-body.p-2 > ul > li > div > div > h6 > a').each(function(a, b) {
					link.push('https://asupanfilm.link/' + $(b).attr('href'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						deskripsi: desc[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
	})
}
exports.asupanfilminfo = async (link) => {
	return new Promise((resolve) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const info = {
					judul: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(1)').text(),
					thumb: $('body > div > div.card.mb-3 > div.card-footer > a').attr('href'),
					alurcerita_imdb: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(2)').text().split(' Alur Cerita IMDb: ')[1],
					alurcerita_tmdb: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(3)').text().split(' Alur Cerita TMDb: ')[1],
					direksi: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(4)').text().split(' Direksi: ')[1],
					pemeran: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(5)').text().split(' Pemeran: ')[1],
					kategori: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(6)').text().split(' Kategori: ')[1],
					negara: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(7)').text().split(' Negara: ')[1],
					tahun_rilis: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(8)').text().split(' Tahun Rilis: ')[1],
					durasi: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(9)').text().split(' Durasi: ')[1],
					skor: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(10)').text().split(' Skor: ')[1],
					kualitas: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(11)').text().split(' Kualitas: ')[1],
					jenis: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(12)').text().split(' Jenis: ')[1]
				}
				resolve(info)
			})
	})
}