const axios = require('axios')
const cheerio = require('cheerio')


function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function porno() {
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
            resolve(hasil)
        })
    })
}

function hentai() {
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
            resolve(hasil)
        })
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function hentaiImage(title) {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random * 10)
        axios.get(`https://rule34.world/${title}/page/${page}`)
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = []
            $('app-post-grid > app-grid > app-loading-block > div > div.box-grid.ng-star-inserted > app-post-preview').each(function (a, b) {
                hasil.push('https://rule34.world'+$(b).find('img').attr('src'))
            })
            resolve(hasil)
        })
    })
}

function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

function emojipedia(emoji) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: 'https://emojipedia.org/'+encodeURI(emoji),
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            }
        })
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const emoji = [];
            const hasil = {};
            hasil.title = $('article').find('h1').text().trim()
            hasil.apple_name = $('section.applenames').find('p').text()
            hasil.unicode_name = $('section.unicodename').find('p').text()
            hasil.description = $('section.description').find('p').text().trim()
            $('section.vendor-list > ul > li').each(function (a, b) {
                emoji.push({
                    type: $(b).find('h2').text(),
                    image: $(b).find('img').attr('src')
                })
            })
            hasil.image = emoji
            resolve(hasil)
        })
    })
}

function iplookup(ip) {
    return new Promise((resolve, reject) => {
        axios.get('https://geolocation.com/en_US?ip='+ip).then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = {
                country: $('table > tbody > tr:nth-child(2) > td:nth-child(1)').text().split('Country')[1].trim(),
                region: $('table > tbody > tr:nth-child(2) > td:nth-child(2)').text().split('Region')[1].trim(),
                city: $('table > tbody > tr:nth-child(2) > td:nth-child(3)').text().split('City')[1].trim(),
                zip: $('table > tbody > tr:nth-child(3) > td:nth-child(1)').text().split('ZIP or Postal Code')[1].trim(),
                latitude: $('table > tbody > tr:nth-child(3) > td:nth-child(2)').text().split('Latitude')[1].trim(),
                longtitude: $('table > tbody > tr:nth-child(3) > td:nth-child(3)').text().split('Longitude')[1].trim(),
                isp: $('table > tbody > tr:nth-child(4) > td:nth-child(1)').text().split('ISP')[1].trim(),
                domain: $('table > tbody > tr:nth-child(4) > td:nth-child(2)').text().split('Domain Name')[1].split(' [')[0].trim(),
                usage_type: $('table > tbody > tr:nth-child(4) > td:nth-child(3)').text().split('Usage Type')[1].trim(),
                weather: $('table > tbody > tr:nth-child(5) > td:nth-child(1) > a').attr('href') || $('table > tbody > tr:nth-child(5) > td:nth-child(1)').text().split('Weather')[1].trim(),
                time_zone: $('table > tbody > tr:nth-child(5) > td:nth-child(2)').text().split('Time Zone')[1].trim(),
                local_time: $('table > tbody > tr:nth-child(5) > td:nth-child(3)').text().split('Local Time')[1].trim(),
                addres_type: $('table > tbody > tr:nth-child(6) > td:nth-child(1)').text().split('Address Type')[1].trim(),
                category: $('table > tbody > tr:nth-child(6) > td:nth-child(2)').text().split('Category')[1].trim(),
                proxy: $('table > tbody > tr:nth-child(7) > td:nth-child(1)').text().split('Proxy')[1].trim(),
                provider: $('table > tbody > tr:nth-child(7) > td:nth-child(2)').text().split('Proxy Provider')[1].trim()
            }
            resolve(hasil)
        })
    })
}

function ipweather(ip) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.weatherdatasource.com/'+ip)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = {
                location: $('div.row > div > div:nth-child(1) > div:nth-child(1) > h2').text().trim(),
                cuaca: {
                    awan: $('h5.weather-title').text(),
                    image: 'https://www.weatherdatasource.com'+$('#bg > div.row.justify-content-center.bg-weather > div.col-md-3.my-auto.align-items-center.text-center > img').attr('src'),
                    suhu_f: $('#bg > div.row.justify-content-center.bg-weather > div:nth-child(2) > span:nth-child(1)').text(),
                    suhu_c: $('#bg > div.row.justify-content-center.bg-weather > div:nth-child(2) > span:nth-child(2)').text()
                },
                time: $('div.row > div > div:nth-child(1) > div:nth-child(1) > p').text().trim(),
                wind_direction: $('#bg > div.row.text-center.mt-3 > div:nth-child(1) > p').text().split('Wind Direction: ')[1],
                wind_speed: $('#bg > div.row.text-center.mt-3 > div:nth-child(2) > p').text().split('Wind Speed: ')[1],
                sunrise: $('#bg > div.row.text-center.mt-3 > div:nth-child(3) > p > span').text().split('Sunrise: ')[1],
                sunset: $('#bg > div.row.text-center.mt-3 > div:nth-child(4) > p').text().split('Sunset: ')[1]
            }
            resolve(hasil)
        })
    })
}

function gore() {
    return new Promise((resolve, reject) => {
		const page = Math.floor(Math.random() * 228)
        axios.get('https://seegore.com/gore/page/'+page)
        .then((res) => {
            const $ = cheerio.load(res.data)
            const link = [];
            $('ul > li > article').each(function (a, b) {
                link.push({
                    title: $(b).find('div.content > header > h2').text(),
                    link: $(b).find('div.post-thumbnail > a').attr('href'),
                    thumb: $(b).find('div.post-thumbnail > a > div > img').attr('src'),
                    view: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-views').text(),
                    vote: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-votes').text(),
                    tag: $(b).find('div.content > header > div > div.bb-cat-links').text(),
                    comment: $(b).find('div.content > header > div > div.post-meta.bb-post-meta > a').text()
                })
            })
            const random = link[Math.floor(Math.random() * link.length)]
            axios.get(random.link)
            .then((resu) => {
                const $$ = cheerio.load(resu.data)
                const hasel = {}
                hasel.title = random.title
                hasel.source = random.link
                hasel.thumb = random.thumb
                hasel.tag = $$('div.site-main > div > header > div > div > p').text()
                hasel.upload = $$('div.site-main').find('span.auth-posted-on > time:nth-child(2)').text()
                hasel.author = $$('div.site-main').find('span.auth-name.mf-hide > a').text()
                hasel.comment = random.comment
                hasel.vote = random.vote
                hasel.view = $$('div.site-main').find('span.post-meta-item.post-views.s-post-views.size-lg > span.count').text()
                hasel.video1 = $$('div.site-main').find('video > source').attr('src')
                hasel.video2 = $$('div.site-main').find('video > a').attr('href')
                resolve(hasel)
            })
        })
    })
}

function zerochan (query) {
	return new Promise((resolve, reject) => {
		axios.get('https://www.zerochan.net/search?q=' + query)
			.then(({ data }) => {
			    const $ = cheerio.load(data)
			    let hasil = []
			    $('#thumbs2 > li').each(function (a, b) {
		 		hasil.push({ id: $(b).find('a').attr('href'), title: $(b).find('p > a').text() || $(b).find('img').attr('alt'), image: $(b).find('p > a:nth-child(2)').attr('href') || $(b).find('img').attr('src') })
			    })
			resolve(hasil)
		})
	})
}

function konachan(title) {
    return new Promise((resolve, reject) => {
        let judul = title.replace(/\s/g, "_")
        axios.get('https://konachan.net/post?tags='+judul)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('#post-list-posts > li').each(function (a, b) {
                hasil.push({ title: $(b).find('img').attr('title').split('Tags: ')[1].split('User:')[0], rating: $(b).find('img').attr('title').split('Rating: ')[1].split('Tags: ')[0], user: $(b).find('img').attr('title').split('User: ')[1], image: $(b).find('a.directlink.largeimg').attr('href') || $(b).find('img').attr('src'), size: $(b).find('a > span.directlink-info > span').text() })
            })
            resolve(hasil)
        })
    })
}

function braines(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://brainans.com/search?query='+title)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let getres = []
            $('#search-container > div').each(function (a, b) {
                getres.push({ username: $(b).find('div.content__text > a').text(), nickname: $(b).find('div.content__text > p').text(), url_user: 'https://brainans.com'+$(b).find('a').attr('href'), profile_image: $(b).find('img').attr('src') })
            })
            resolve(getres)
        })
    })
}

function brainesUser(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((res)=> {
            let $ = cheerio.load(res.data)
            let list_video = []
            $('#videos_container > div > div.content__list.grid.infinite_scroll.cards > div > div > a').each(function (a, b) {
                list_video.push('https://brainans.com'+$(b).attr('href'))
            })
            let hasil = {
                username: $('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
                nickname: $('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > div > h4').text(),
                video_count: $('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1) > strong').text(),
                followers: $('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2) > strong').text(),
                following: $('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3) > strong').text(),
                likes: $('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(4) > strong').text(),
                desc: $('#user-page > div.user.container > div > div.col-md-5.my-3 > div').text(),
                profile_pic: $('#user-page > div.user.container > div > div.col-md-3.col-4.my-3 > div').attr('style').split("url('")[1].split("');")[0] || '',
                list_media: list_video
            }
            resolve(hasil)
        })
    })
}

function brainesVideo(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((vid) => {
            let $ = cheerio.load(vid.data)
            let hasil = {
                author: $('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__user-info.d-flex > div.main__user-desc.align-self-center.ml-2').text(),
                thumbnail: $('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__image-container > div > video').attr('poster') || 'https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg',
                description: $('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__list').text(),
                likes: $('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(1) > span').text(),
                comment: $('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(2) > span').text(),
                shares: $('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(3) > span').text(),
                video_url: $('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__image-container > div > video').attr('src'),
            }
            resolve(hasil)
        })
    })
}

function ptl(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://brainans.com/search?query='+user)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let getres = []
            $('#search-container > div').each(function (a, b) {
                getres.push({ username: $(b).find('div.content__text > a').text(), nickname: $(b).find('div.content__text > p').text(), url_user: 'https://brainans.com'+$(b).find('a').attr('href'), profile_image: $(b).find('img').attr('src') })
            })
            let random_user = getres[Math.floor(Math.random() * getres.length)]
            axios.get(random_user.url_user)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let list_video = []
                $$('#videos_container > div > div.content__list.grid.infinite_scroll.cards > div > div > a').each(function (a, b) {
                    list_video.push('https://brainans.com'+$$(b).attr('href') || 'https://brainans.com'+$$(b).find('div > a').attr('href'))
                })
                let hasil = {
                    username: $$('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
                    nickname: $$('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > div > h4').text(),
                    video_count: $$('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1) > strong').text(),
                    followers: $$('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2) > strong').text(),
                    following: $$('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3) > strong').text(),
                    likes: $$('#user-page > div.user.container > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(4) > strong').text(),
                    desc: $$('#user-page > div.user.container > div > div.col-md-5.my-3 > div').text(),
                    profile_pic: $$('#user-page > div.user.container > div > div.col-md-3.col-4.my-3 > div').attr('style').split("'")[1].split("'")[0] || '',
                    list_media: list_video
                }
                let random_video = hasil.list_media[Math.floor(Math.random() * hasil.list_media.length)]
                axios.get(random_video)
                .then((vid) => {
                    let $$$ = cheerio.load(vid.data)
                    let hasil_video = {
                        author: {
                            username: hasil.username,
                            nickname: hasil.nickname,
                            video_count: hasil.video_count,
                            followers: hasil.followers,
                            following: hasil.following,
                            likes: hasil.likes,
                            desc: hasil.desc,
                            profile: hasil.profile_pic
                        },
                        thumbnail: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__image-container > div > video').attr('poster') || 'https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg',
                        description: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__list').text(),
                        likes: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(1) > span').text(),
                        comment: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(2) > span').text(),
                        shares: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(3) > span').text(),
                        source: random_video,
                        video_url: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__image-container > div > video').attr('src'),
                    }
                    resolve(hasil_video)
                })
            })
        })
    })
}

function ssweb(url) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://seotoolscentre.com/website-screenshot-generator-online/output',
            method: 'POST',
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; RMX2020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36"
            },
            data: new URLSearchParams(Object.entries({ 'url': url, 'submit': 'Submit' }))
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let imageUrl = $('#resultBox > img').attr('src')
            resolve(imageUrl)
        })
    })
}


function katabijak() {
    return new Promise((resolve, reject) => {
        let page = Math.floor(Math.random() * 5)
        let url = ["https://jagokata.com/kata-bijak/kata-meninggal.html","https://jagokata.com/kata-bijak/kata-sabar.html","https://jagokata.com/kata-bijak/kata-pernikahan.html","https://jagokata.com/kata-bijak/kata-matahari.html","https://jagokata.com/kata-bijak/kata-mimpi.html","https://jagokata.com/kata-bijak/kata-bahagia.html","https://jagokata.com/kata-bijak/kata-cinta.html","https://jagokata.com/kata-bijak/kata-kebebasan.html","https://jagokata.com/kata-bijak/kata-sendiri.html","https://jagokata.com/kata-bijak/kata-uang.html","https://jagokata.com/kata-bijak/kata-manusia.html","https://jagokata.com/kata-bijak/kata-kebijaksanaan.html","https://jagokata.com/kata-bijak/kata-alam.html"]
        let baseUrl = url[Math.floor(Math.random() *url.length)]
        axios.get(baseUrl+'?page='+page)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('#citatenrijen > li').each(function (a, b) {
                hasil.push({
                    author: {
                        name: $(b).find('div.citatenlijst-auteur > a').text(),
                        detail: $(b).find('div.citatenlijst-auteur > a').attr('href'),
                        profile_pic: $(b).find('img').attr('src')
                    },
                    quotes: $(b).find('q.fbquote').text(),
                    original: $(b).find('div.citatenlijst-oorspronkelijk > div > q').text() || '',
                    source: 'https://'+$(b).find('div.citaatopties > div.images-container > a').attr('href')
                })
            })
            resolve(hasil)
        })
    })
}

function peribahasa(q) {
    return new Promise((resolve, reject) => {
        axios.get(`https://jagokata.com/peribahasa/${q}.html`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let menggunakan = []
            let penggunaan = []
            $('#arti-kata > ul > li').each(function (a, b) {
                menggunakan.push({ peribahasa: $(b).text().split('=')[0], pengertian: $(b).text().split('=')[1] })
            })
            $('#arti-kata > i > ul > li').each(function (a, b) {
                penggunaan.push({ peribahasa: $(b).text().split('=')[0], pengertian: $(b).text().split('=')[1] })
            })
            resolve({ menggunakan, penggunaan })
        })
    })
}

function cerpen(category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase()
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

function umma(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let image = []
            $('#article-content > div').find('img').each(function (a, b) {
                image.push($(b).attr('src')) 
            })
            let hasil = {
                title: $('#wrap > div.content-container.font-6-16 > h1').text().trim(),
                author: {
                    name: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.user-ame.font-6-16.fw').text().trim(),
                    profilePic: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.profile-photo > img.photo').attr('src')
                },
                caption: $('#article-content > div > p').text().trim(),
                media: $('#article-content > div > iframe').attr('src') ? [$('#article-content > div > iframe').attr('src')] : image,
                type: $('#article-content > div > iframe').attr('src') ? 'video' : 'image',
                like: $('#wrap > div.bottom-btns > div > button:nth-child(1) > div.text.font-6-12').text(),
            }
            resolve(hasil)
        })
    })
}

function ringtone(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://meloboom.com/en/search/'+title)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let hasil = []
            $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
                hasil.push({ title: $(b).find('h4').text(), source: 'https://meloboom.com/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src') })
            })
            resolve(hasil)
        })
    })
}

module.exports = { pinterest, wallpaper, wikimedia, hentai, porno, ringtone, umma, hentai, quotesAnime, hentaiImage, styletext, emojipedia, iplookup, ipweather, gore, zerochan, konachan, braines, brainesUser, brainesVideo, ptl, ssweb, katabijak, peribahasa, cerpen }
