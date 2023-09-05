/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['18155545188', 'FAHRUL', true],
  ['6285786539008']
] // Nomor Owner

global.mods = ['6285786539008','18155545188'] 
global.prems = ['6285786539008', '18155545188']

// apikey
global.lann = 'apikeylu'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'MOrQ59H7',
  'https://api.betabotz.org': 'chuDEfcB'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'FAHRUL' // nama owner
global.nomor = '6285786539008' // nomor owner
global.nans = 'F.A BOTZ MD' // nama bot 
global.thumb = 'https://telegra.ph/file/734d7247c478a4f24e455.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/FSbrP6LWWm4A8i8uGdyDTs' // link group yang ada di menu

// Sticker wm
global.packname = 'F.A BOTZ MD' 
global.author = '@ fahrul' 
global.fgig = 'https://www.instagram.com/fahrul_mt' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/Fahrul6868' // bebas tapi jangan kosong
global.fgyt = 'https://www.instagram.com/fahrul_mt' // bebas tapi jangan kosong
global.fgpyp = 'https://www.instagram.com/fahrul_mt' // bebas tapi jangan kosong
global.fglog = 'https://telegra.ph/file/734d7247c478a4f24e455.jpg'

// Other
global.dana = '6285786539008'
global.qris = 'https://telegra.ph/file/db0e40e4880243829ffc4.jpg'
global.web = 'https://instagram.com/fahrul_mt'
global.email = 'rakrohaku@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ғᴀʜʀᴜʟ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})