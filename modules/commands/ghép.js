module.exports.config = {
  name: 'ghép',
  version: '1.0.1',
  hasPermssion: 0,
  credits: 'Adonis',
  description: 'Ghép đôi với những người trong nhóm',
  commandCategory: 'minigame',
  cooldowns: 5,
  dependencies: {
    axios: '',
    'fs-extra': '',
  },
  envConfig: { APIKEY: 'nhatdepzaivl' },
}
module.exports.onLoad = async () => {
  const { resolve: _0x5c62e2 } = global.nodemodule.path,
    { existsSync: _0x5179a5, mkdirSync: _0x5dfa72 } =
      global.nodemodule['fs-extra'],
    { downloadFile: _0x256b94 } = global.utils,
    _0x18cb35 = __dirname + '/cache/canvas/',
    _0x2eed56 = _0x5c62e2(__dirname, 'cache/canvas', 'pairing.png')
  if (!_0x5179a5(_0x18cb35 + 'canvas')) {
    _0x5dfa72(_0x18cb35, { recursive: true })
  }
  if (!_0x5179a5(_0x2eed56)) {
    await _0x256b94(
      'https://i.postimg.cc/X7R3CLmb/267378493-3075346446127866-4722502659615516429-n.png',
      _0x2eed56
    )
  }
}
async function makeImage({ one: _0x146fb6, two: _0x7dfb3e }) {
  const _0x16da63 = global.nodemodule['fs-extra'],
    _0x44b64a = global.nodemodule.path,
    _0x5a1554 = global.nodemodule.axios,
    _0x4cce9d = global.nodemodule.jimp,
    _0x38f2ad = _0x44b64a.resolve(__dirname, 'cache', 'canvas')
  let _0x51ecbb = await _0x4cce9d.read(_0x38f2ad + '/pairing.png'),
    _0x56eea6 =
      _0x38f2ad + ('/pairing_' + _0x146fb6 + '_' + _0x7dfb3e + '.png'),
    _0x4de79b = _0x38f2ad + ('/avt_' + _0x146fb6 + '.png'),
    _0x33ab98 = _0x38f2ad + ('/avt_' + _0x7dfb3e + '.png'),
    _0x3e4b6f = (
      await _0x5a1554.get(
        'https://graph.facebook.com/' +
          _0x146fb6 +
          '/picture?width=512&height=512&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de',
        { responseType: 'arraybuffer' }
      )
    ).data
  _0x16da63.writeFileSync(_0x4de79b, Buffer.from(_0x3e4b6f, 'utf-8'))
  let _0x2281db = (
    await _0x5a1554.get(
      'https://graph.facebook.com/' +
        _0x7dfb3e +
        '/picture?width=512&height=512&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de',
      { responseType: 'arraybuffer' }
    )
  ).data
  _0x16da63.writeFileSync(_0x33ab98, Buffer.from(_0x2281db, 'utf-8'))
  let _0x58b35f = await _0x4cce9d.read(await circle(_0x4de79b)),
    _0x4c1633 = await _0x4cce9d.read(await circle(_0x33ab98))
  _0x51ecbb
    .composite(_0x58b35f.resize(150, 150), 980, 200)
    .composite(_0x4c1633.resize(150, 150), 140, 200)
  let _0x13de81 = await _0x51ecbb.getBufferAsync('image/png')
  return (
    _0x16da63.writeFileSync(_0x56eea6, _0x13de81),
    _0x16da63.unlinkSync(_0x4de79b),
    _0x16da63.unlinkSync(_0x33ab98),
    _0x56eea6
  )
}
async function circle(_0x12705e) {
  const _0x2ad2ce = require('jimp')
  return (
    (_0x12705e = await _0x2ad2ce.read(_0x12705e)),
    _0x12705e.circle(),
    await _0x12705e.getBufferAsync('image/png')
  )
}
module.exports.run = async function ({
  api: _0xc7337e,
  event: _0x29284c,
  args: _0xf61ab7,
  models: _0x24a5a8,
  Users: _0x134eab,
  Threads: _0x1362e2,
  Currencies: _0x4a8ddc,
  permssion: _0xf41320,
}) {
  const {
      threadID: _0x50ee6c,
      messageID: _0x50c3e8,
      senderID: _0x48aace,
    } = _0x29284c,
    _0x57eb93 = require('axios')
  var _0x44a0ff = global.configModule[this.config.name].APIKEY
  const _0x3f5094 = (
    await _0x57eb93.get(
      'https://apipokemon.ryder447.repl.co/adminkey?key=nhatdepzaivl'
    )
  ).data
  if (_0x3f5094.status !== true) {
    return _0xc7337e.sendMessage(
      'Key của bạn đã hết hạn, vui lòng liên hệ Nhất để nhận key mới\n\u26A1️FB: facebook.com/vnhat03',
      _0x50ee6c,
      _0x50c3e8
    )
  }
  const {
      readFileSync: _0x32b222,
      writeFileSync: _0x30fb8b,
    } = require('fs-extra'),
    _0x2089ae = require('fs-extra')
  var _0x201985 = [
      '21%',
      '11%',
      '55%',
      '89%',
      '22%',
      '45%',
      '1%',
      '4%',
      '78%',
      '15%',
      '91%',
      '77%',
      '41%',
      '32%',
      '67%',
      '19%',
      '37%',
      '17%',
      '96%',
      '52%',
      '62%',
      '76%',
      '83%',
      '100%',
      '99%',
      '0%',
      '48%',
    ],
    _0x2c9d2c = _0x201985[Math.floor(Math.random() * _0x201985.length)]
  let _0x2cdec6 = await _0xc7337e.getUserInfo(_0x29284c.senderID),
    _0x44f1b9 = await _0x2cdec6[_0x29284c.senderID].name,
    _0x27e8d7 = await _0xc7337e.getThreadInfo(_0x29284c.threadID)
  var _0x19252d = _0x27e8d7.participantIDs,
    _0x38cd5a = _0x19252d[Math.floor(Math.random() * _0x19252d.length)]
  let _0x58eb45 = await _0xc7337e.getUserInfo(_0x38cd5a),
    _0x142a92 = await _0x58eb45[_0x38cd5a].name
  var _0x4ca579 = []
  _0x4ca579.push({
    id: _0x29284c.senderID,
    tag: _0x44f1b9,
  })
  _0x4ca579.push({
    id: _0x38cd5a,
    tag: _0x142a92,
  })
  var _0x2138f9 = await _0x58eb45[_0x38cd5a].gender,
    _0x486f21 =
      _0x2138f9 == 2
        ? 'Nam'
        : _0x2138f9 == 1
        ? 'Nữ'
        : 'Trần Đức Bo',
    _0x22de19 = _0x48aace,
    _0x433568 = _0x38cd5a
  return makeImage({
    one: _0x22de19,
    two: _0x433568,
  }).then((_0xc11c76) =>
    _0xc7337e.sendMessage(
      {
        body:
          'Chúc mừng ' +
          _0x44f1b9 +
          ' đã được ghép đôi với ' +
          _0x142a92 +
          'Tỉ Lệ Hợp Đôi là: ' +
          _0x2c9d2c,
        mentions: _0x4ca579,
        attachment: _0x2089ae.createReadStream(_0xc11c76),
      },
      _0x50ee6c,
      () => _0x2089ae.unlinkSync(_0xc11c76),
      _0x50c3e8
    )
  )
}
