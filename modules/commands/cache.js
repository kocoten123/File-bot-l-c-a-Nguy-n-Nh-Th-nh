function _0x2bec(_0x33a7ab, _0x1fbe6f) {
    var _0x47b40b = _0x47b4();
    return _0x2bec = function (_0x2bec07, _0x2bbf90) {
        _0x2bec07 = _0x2bec07 - 0xc9;
        var _0x54de31 = _0x47b40b[_0x2bec07];
        return _0x54de31;
    }, _0x2bec(_0x33a7ab, _0x1fbe6f);
}

function _0x47b4() {
    var _0x1c0372 = ['1086402RYHrnH', '1.0.1', 'help', 'Không có file nào trong cache có ký tự bắt đầu bằng: ', ' file trong tên có ký tự: ', '[Folder🗂️]', 'forEach', 'Tất cả các file trong thư mục cache:', ' file có ký tự bắt đầu là: ', 'NTKhang mod by Dyy', 'join', '771054ssklSZ', 'Đã xóa các file sau trong thư mục cache:\x0a\x0a', '3884027xJyMPy', 'Định làm gì thế anh bạn:))', '/cache/', 'client', '798087tAwNEU', '\x0a  👉Module code by NTKhang👈\x0aCách dùng lệnh:\x0a•Key: start <text>\x0a•Tác dụng: Lọc ra file cần xóa có ký tự bắt đầu tùy chọn\x0a•Ví dụ: cache rank\x0a•Key: ext <text>\x0a•Tác dụng: Lọc ra file cần xóa có đuôi tùy chọn\x0a•Ví dụ: cache png\x0a•Key: <text>\x0a•Tác dụng: lọc ra các file trong tên có text tùy chỉnh\x0a•Ví dụ: cache a\x0a•Key: để trống\x0a•Tác dụng: lọc ra tất cả các file trong cache\x0a•Ví dụ: cache\x0a•Key: help\x0a•Tác dụng: xem cách dùng lệnh\x0a•Ví dụ: cache help', 'map', '1632445oQcvkv', 'body', 'messageID', 'isFile', '6zgrVTL', ' file có đuôi là: ', 'Có ', 'threadID', 'cache', 'run', 'Admin', 'unlinkSync', '[File📄]', 'exports', 'Cache của bạn không có file hoặc folder nào', 'Reply tin nhắn bằng số để xóa file tương ứng, có thể rep nhiều số, cách nhau bằng dấu cách.\x0a', 'readdirSync', 'isDirectory', '100054769571636', '7661968qAnlhA', 'length', 'Xóa file hoặc folder trong thư mục cache', '10483623qQYnxh', 'sendMessage', 'push', '12kZAhBS', 'statSync', 'files', 'senderID', 'handleReply', 'includes', 'Không có file nào trong tên có ký tự: ', 'config', 'filter', 'startsWith', 'rmdirSync', 'slice', 'fs-extra', '10UNdlES', 'ext'];
    _0x47b4 = function () {
        return _0x1c0372;
    };
    return _0x47b4();
}
var _0x57eaac = _0x2bec;
(function (_0x4c05f5, _0x1d3281) {
    var _0x2dae68 = _0x2bec,
        _0x34286a = _0x4c05f5();
    while (!![]) {
        try {
            var _0x4d8cbb = parseInt(_0x2dae68(0xff)) / 0x1 + parseInt(_0x2dae68(0xf9)) / 0x2 * (parseInt(_0x2dae68(0xca)) / 0x3) + -parseInt(_0x2dae68(0xdf)) / 0x4 * (-parseInt(_0x2dae68(0x102)) / 0x5) + -parseInt(_0x2dae68(0xee)) / 0x6 + parseInt(_0x2dae68(0xfb)) / 0x7 + -parseInt(_0x2dae68(0xd9)) / 0x8 + parseInt(_0x2dae68(0xdc)) / 0x9 * (-parseInt(_0x2dae68(0xec)) / 0xa);
            if (_0x4d8cbb === _0x1d3281) break;
            else _0x34286a['push'](_0x34286a['shift']());
        } catch (_0x2a41ff) {
            _0x34286a['push'](_0x34286a['shift']());
        }
    }
}(_0x47b4, 0xc3441), module[_0x57eaac(0xd3)][_0x57eaac(0xe6)] = {
    'name': _0x57eaac(0xce),
    'version': _0x57eaac(0xef),
    'hasPermssion': 0x2,
    'credits': _0x57eaac(0xf7),
    'description': _0x57eaac(0xdb),
    'commandCategory': _0x57eaac(0xd0),
    'usages': '\x0acache start <text>\x0acache ext <text>\x0acache <text>\x0acache [để trống]\x0acache help\x0aNOTE: <text> là ký tự bạn điền vào tùy ý',
    'cooldowns': 0x5
}, module[_0x57eaac(0xd3)]['handleReply'] = ({
    api: _0x9287e4,
    event: _0x172674,
    args: _0x23d773,
    handleReply: _0x5086df
}) => {
    var _0xf4a9e6 = _0x57eaac;
    if (_0x172674[_0xf4a9e6(0xe2)] != _0x5086df['author']) return;
    const _0x220595 = require('fs-extra');
    var _0x563e23 = _0x172674[_0xf4a9e6(0x103)]['split'](' '),
        _0x196e5b = '',
        _0x2e946a = _0x563e23[_0xf4a9e6(0x101)](_0x46df72 => parseInt(_0x46df72));
    for (let _0x1e125d of _0x2e946a) {
        var _0x2f25b2 = _0x5086df['files'][_0x1e125d - 0x1],
            _0x101aeb = _0x220595['statSync'](__dirname + '/cache/' + _0x2f25b2);
        if (_0x101aeb['isDirectory']() == !![]) {
            var _0x1e1961 = '[Folder🗂️]';
            _0x220595[_0xf4a9e6(0xe9)](__dirname + _0xf4a9e6(0xfd) + _0x2f25b2, {
                'recursive': !![]
            });
        } else {
            if (_0x101aeb[_0xf4a9e6(0xc9)]() == !![]) {
                var _0x1e1961 = _0xf4a9e6(0xd2);
                _0x220595[_0xf4a9e6(0xd1)](__dirname + _0xf4a9e6(0xfd) + _0x2f25b2);
            }
        }
        _0x196e5b += _0x1e1961 + ' ' + _0x5086df[_0xf4a9e6(0xe1)][_0x1e125d - 0x1] + '\x0a';
    }
    _0x9287e4[_0xf4a9e6(0xdd)](_0xf4a9e6(0xfa) + _0x196e5b, _0x172674[_0xf4a9e6(0xcd)], _0x172674[_0xf4a9e6(0x104)]);
}, module[_0x57eaac(0xd3)][_0x57eaac(0xcf)] = async function ({
    api: _0x202af5,
    event: _0xf80cea,
    args: _0x47e94f,
    Threads: _0x414345
}) {
    var _0x4d00fb = _0x57eaac;
    const _0x3ed43b = [_0x4d00fb(0xd8)];
    if (!_0x3ed43b[_0x4d00fb(0xe4)](_0xf80cea[_0x4d00fb(0xe2)])) return _0x202af5['sendMessage'](_0x4d00fb(0xfc), _0xf80cea[_0x4d00fb(0xcd)], _0xf80cea[_0x4d00fb(0x104)]);
    const _0x40a4ca = require(_0x4d00fb(0xeb));
    var _0x111f29 = _0x40a4ca[_0x4d00fb(0xd6)](__dirname + '/cache') || [],
        _0x16483c = '',
        _0x3a57ad = 0x1;
    if (_0x47e94f[0x0] == _0x4d00fb(0xf0)) {
        var _0x16483c = _0x4d00fb(0x100);
        return _0x202af5[_0x4d00fb(0xdd)](_0x16483c, _0xf80cea[_0x4d00fb(0xcd)], _0xf80cea[_0x4d00fb(0x104)]);
    } else {
        if (_0x47e94f[0x0] == 'start' && _0x47e94f[0x1]) {
            var _0x408e25 = _0x47e94f[_0x4d00fb(0xea)](0x1)[_0x4d00fb(0xf8)](' '),
                _0x111f29 = _0x111f29[_0x4d00fb(0xe7)](_0x24ec27 => _0x24ec27[_0x4d00fb(0xe8)](_0x408e25));
            if (_0x111f29[_0x4d00fb(0xda)] == 0x0) return _0x202af5[_0x4d00fb(0xdd)](_0x4d00fb(0xf1) + _0x408e25, _0xf80cea['threadID'], _0xf80cea['messageID']);
            var _0x207a89 = _0x4d00fb(0xcc) + _0x111f29[_0x4d00fb(0xda)] + _0x4d00fb(0xf6) + _0x408e25;
        } else {
            if (_0x47e94f[0x0] == _0x4d00fb(0xed) && _0x47e94f[0x1]) {
                var _0x42eeaa = _0x47e94f[0x1],
                    _0x111f29 = _0x111f29['filter'](_0x2e2af9 => _0x2e2af9['endsWith'](_0x42eeaa));
                if (_0x111f29['length'] == 0x0) return _0x202af5[_0x4d00fb(0xdd)]('Không có file nào trong cache có ký tự kết thúc bằng: ' + _0x42eeaa, _0xf80cea[_0x4d00fb(0xcd)], _0xf80cea[_0x4d00fb(0x104)]);
                var _0x207a89 = _0x4d00fb(0xcc) + _0x111f29[_0x4d00fb(0xda)] + _0x4d00fb(0xcb) + _0x42eeaa;
            } else {
                if (!_0x47e94f[0x0]) {
                    if (_0x111f29[_0x4d00fb(0xda)] == 0x0) return _0x202af5[_0x4d00fb(0xdd)](_0x4d00fb(0xd4), _0xf80cea[_0x4d00fb(0xcd)], _0xf80cea[_0x4d00fb(0x104)]);
                    var _0x207a89 = _0x4d00fb(0xf5);
                } else {
                    var _0x408e25 = _0x47e94f[_0x4d00fb(0xea)](0x0)['join'](' '),
                        _0x111f29 = _0x111f29[_0x4d00fb(0xe7)](_0x1fb8b7 => _0x1fb8b7[_0x4d00fb(0xe4)](_0x408e25));
                    if (_0x111f29[_0x4d00fb(0xda)] == 0x0) return _0x202af5['sendMessage'](_0x4d00fb(0xe5) + _0x408e25, _0xf80cea[_0x4d00fb(0xcd)], _0xf80cea[_0x4d00fb(0x104)]);
                    var _0x207a89 = _0x4d00fb(0xcc) + _0x111f29[_0x4d00fb(0xda)] + _0x4d00fb(0xf2) + _0x408e25;
                }
            }
        }
    }
    _0x111f29[_0x4d00fb(0xf4)](_0x5d0974 => {
        var _0x4627a5 = _0x4d00fb,
            _0x3aad2b = _0x40a4ca[_0x4627a5(0xe0)](__dirname + _0x4627a5(0xfd) + _0x5d0974);
        if (_0x3aad2b[_0x4627a5(0xd7)]() == !![]) var _0x53cd0c = _0x4627a5(0xf3);
        if (_0x3aad2b[_0x4627a5(0xc9)]() == !![]) var _0x53cd0c = _0x4627a5(0xd2);
        _0x16483c += _0x3a57ad++ + '. ' + _0x53cd0c + ' ' + _0x5d0974 + '\x0a';
    }), _0x202af5[_0x4d00fb(0xdd)](_0x4d00fb(0xd5) + _0x207a89 + '\x0a\x0a' + _0x16483c, _0xf80cea[_0x4d00fb(0xcd)], (_0x5dae4e, _0x4a9312) => global[_0x4d00fb(0xfe)][_0x4d00fb(0xe3)][_0x4d00fb(0xde)]({
        'name': this['config']['name'],
        'messageID': _0x4a9312[_0x4d00fb(0x104)],
        'author': _0xf80cea['senderID'],
        'files': _0x111f29
    }));
});
