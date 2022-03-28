function _0x5c97(_0x165766, _0x140d90) {
    var _0x4a7851 = _0x4a78();
    return _0x5c97 = function (_0x5c97b3, _0x3136e5) {
        _0x5c97b3 = _0x5c97b3 - 0x12c;
        var _0x1250d8 = _0x4a7851[_0x5c97b3];
        return _0x1250d8;
    }, _0x5c97(_0x165766, _0x140d90);
}
var _0x28b6f5 = _0x5c97;
(function (_0xe607c0, _0x30df8c) {
    var _0x23edf4 = _0x5c97,
        _0x1640f2 = _0xe607c0();
    while (!![]) {
        try {
            var _0x577f27 = -parseInt(_0x23edf4(0x133)) / 0x1 * (-parseInt(_0x23edf4(0x147)) / 0x2) + parseInt(_0x23edf4(0x13a)) / 0x3 + parseInt(_0x23edf4(0x14a)) / 0x4 + parseInt(_0x23edf4(0x14e)) / 0x5 * (parseInt(_0x23edf4(0x143)) / 0x6) + parseInt(_0x23edf4(0x12e)) / 0x7 * (-parseInt(_0x23edf4(0x13f)) / 0x8) + -parseInt(_0x23edf4(0x161)) / 0x9 + parseInt(_0x23edf4(0x151)) / 0xa * (-parseInt(_0x23edf4(0x130)) / 0xb);
            if (_0x577f27 === _0x30df8c) break;
            else _0x1640f2['push'](_0x1640f2['shift']());
        } catch (_0x5a78ef) {
            _0x1640f2['push'](_0x1640f2['shift']());
        }
    }
}(_0x4a78, 0x66560), module[_0x28b6f5(0x150)][_0x28b6f5(0x14f)] = {
    'name': 'file',
    'version': '1.0.1',
    'hasPermssion': 0x2,
    'credits': _0x28b6f5(0x146),
    'description': _0x28b6f5(0x162),
    'commandCategory': _0x28b6f5(0x152),
    'usages': _0x28b6f5(0x13e),
    'cooldowns': 0x5
}, module[_0x28b6f5(0x150)][_0x28b6f5(0x13d)] = ({
    api: _0x5479b7,
    event: _0x599ac8,
    args: _0x171877,
    handleReply: _0x10f067
}) => {
    var _0x4364c6 = _0x28b6f5;
    if (_0x599ac8[_0x4364c6(0x141)] != _0x10f067[_0x4364c6(0x15d)]) return;
    const _0x4f67c4 = require('fs-extra');
    var _0x3b9cb8 = _0x599ac8['body'][_0x4364c6(0x155)](' '),
        _0x166eb0 = '',
        _0x3d6bf2 = _0x3b9cb8[_0x4364c6(0x149)](_0x188b73 => parseInt(_0x188b73));
    for (let _0x5a0f84 of _0x3d6bf2) {
        var _0x250b38 = _0x10f067[_0x4364c6(0x15a)][_0x5a0f84 - 0x1],
            _0x545687 = _0x4f67c4[_0x4364c6(0x156)](__dirname + '/' + _0x250b38);
        if (_0x545687[_0x4364c6(0x12c)]() == !![]) {
            var _0x540cc9 = _0x4364c6(0x15b);
            _0x4f67c4[_0x4364c6(0x14b)](__dirname + '/' + _0x250b38, {
                'recursive': !![]
            });
        } else {
            if (_0x545687[_0x4364c6(0x15e)]() == !![]) {
                var _0x540cc9 = '[File📄]';
                _0x4f67c4['unlinkSync'](__dirname + '/' + _0x250b38);
            }
        }
        _0x166eb0 += _0x540cc9 + ' ' + _0x10f067[_0x4364c6(0x15a)][_0x5a0f84 - 0x1] + '\x0a';
    }
    _0x5479b7[_0x4364c6(0x160)](_0x4364c6(0x138) + _0x166eb0, _0x599ac8[_0x4364c6(0x158)], _0x599ac8['messageID']);
}, module[_0x28b6f5(0x150)][_0x28b6f5(0x144)] = async function ({
    api: _0x552039,
    event: _0x16850f,
    args: _0x4849e9,
    Threads: _0xa57930
}) {
    var _0x58a7b2 = _0x28b6f5;
    const _0x4e8ad1 = [_0x58a7b2(0x13b)];
    if (!_0x4e8ad1[_0x58a7b2(0x134)](_0x16850f[_0x58a7b2(0x141)])) return _0x552039[_0x58a7b2(0x160)](_0x58a7b2(0x148), _0x16850f['threadID'], _0x16850f['messageID']);
    const _0x5434d4 = require(_0x58a7b2(0x145));
    var _0x1846cd = _0x5434d4[_0x58a7b2(0x15f)](__dirname + '/') || [],
        _0x1d7385 = '',
        _0xb3b384 = 0x1;
    if (_0x4849e9[0x0] == _0x58a7b2(0x135)) {
        var _0x1d7385 = '\x0aCách dùng lệnh:\x0a•Key: start <text>\x0a•Tác dụng: Lọc ra file cần xóa có ký tự bắt đầu tùy chọn\x0a•Ví dụ: commands rank\x0a•Key: ext <text>\x0a•Tác dụng: Lọc ra file cần xóa có đuôi tùy chọn\x0a•Tác dụng: lọc ra các file trong tên có text tùy chỉnh\x0a•Ví dụ: commands a\x0a•Key: để trống\x0a•Tác dụng: lọc ra tất cả các file trong cache\x0a•Ví dụ: commands\x0a•Key: help\x0a•Tác dụng: xem cách dùng lệnh\x0a•Ví dụ: commands help';
        return _0x552039['sendMessage'](_0x1d7385, _0x16850f[_0x58a7b2(0x158)], _0x16850f[_0x58a7b2(0x136)]);
    } else {
        if (_0x4849e9[0x0] == _0x58a7b2(0x137) && _0x4849e9[0x1]) {
            var _0x1b58f0 = _0x4849e9[_0x58a7b2(0x14c)](0x1)[_0x58a7b2(0x14d)](' '),
                _0x1846cd = _0x1846cd[_0x58a7b2(0x140)](_0x41e384 => _0x41e384[_0x58a7b2(0x139)](_0x1b58f0));
            if (_0x1846cd[_0x58a7b2(0x12f)] == 0x0) return _0x552039[_0x58a7b2(0x160)](_0x58a7b2(0x159) + _0x1b58f0, _0x16850f[_0x58a7b2(0x158)], _0x16850f[_0x58a7b2(0x136)]);
            var _0x30463c = _0x58a7b2(0x157) + _0x1846cd[_0x58a7b2(0x12f)] + _0x58a7b2(0x131) + _0x1b58f0;
        } else {
            if (_0x4849e9[0x0] == _0x58a7b2(0x153) && _0x4849e9[0x1]) {
                var _0x3605c7 = _0x4849e9[0x1],
                    _0x1846cd = _0x1846cd[_0x58a7b2(0x140)](_0x3c507a => _0x3c507a[_0x58a7b2(0x154)](_0x3605c7));
                if (_0x1846cd[_0x58a7b2(0x12f)] == 0x0) return _0x552039[_0x58a7b2(0x160)]('🐸Không có file nào trong commands có ký tự kết thúc bằng: ' + _0x3605c7, _0x16850f[_0x58a7b2(0x158)], _0x16850f['messageID']);
                var _0x30463c = _0x58a7b2(0x157) + _0x1846cd[_0x58a7b2(0x12f)] + ' file có đuôi là: ' + _0x3605c7;
            } else {
                if (!_0x4849e9[0x0]) {
                    if (_0x1846cd['length'] == 0x0) return _0x552039[_0x58a7b2(0x160)](_0x58a7b2(0x13c), _0x16850f[_0x58a7b2(0x158)], _0x16850f[_0x58a7b2(0x136)]);
                    var _0x30463c = _0x58a7b2(0x132);
                } else {
                    var _0x1b58f0 = _0x4849e9[_0x58a7b2(0x14c)](0x0)[_0x58a7b2(0x14d)](' '),
                        _0x1846cd = _0x1846cd[_0x58a7b2(0x140)](_0x13e256 => _0x13e256['includes'](_0x1b58f0));
                    if (_0x1846cd[_0x58a7b2(0x12f)] == 0x0) return _0x552039[_0x58a7b2(0x160)](_0x58a7b2(0x15c) + _0x1b58f0, _0x16850f[_0x58a7b2(0x158)], _0x16850f[_0x58a7b2(0x136)]);
                    var _0x30463c = _0x58a7b2(0x157) + _0x1846cd[_0x58a7b2(0x12f)] + _0x58a7b2(0x142) + _0x1b58f0;
                }
            }
        }
    }
    _0x1846cd['forEach'](_0x34ea04 => {
        var _0x23c4b0 = _0x58a7b2,
            _0x27c901 = _0x5434d4[_0x23c4b0(0x156)](__dirname + '/' + _0x34ea04);
        if (_0x27c901[_0x23c4b0(0x12c)]() == !![]) var _0xad154f = _0x23c4b0(0x15b);
        if (_0x27c901[_0x23c4b0(0x15e)]() == !![]) var _0xad154f = _0x23c4b0(0x12d);
        _0x1d7385 += _0xb3b384++ + '. ' + _0xad154f + ' ' + _0x34ea04 + '\x0a';
    }), _0x552039['sendMessage']('🐉Reply tin nhắn bằng số để xóa file tương ứng, có thể rep nhiều số, cách nhau bằng dấu cách.\x0a' + _0x30463c + '\x0a\x0a' + _0x1d7385, _0x16850f[_0x58a7b2(0x158)], (_0x419382, _0x1761b7) => global['client']['handleReply']['push']({
        'name': this[_0x58a7b2(0x14f)]['name'],
        'messageID': _0x1761b7['messageID'],
        'author': _0x16850f[_0x58a7b2(0x141)],
        'files': _0x1846cd
    }));
});

function _0x4a78() {
    var _0x984ffc = ['endsWith', 'split', 'statSync', '🍀Có ', 'threadID', '🐸Không có file nào trong cache có ký tự bắt đầu bằng: ', 'files', '[Folder🗂️]', '🐸Không có file nào trong tên có ký tự: ', 'author', 'isFile', 'readdirSync', 'sendMessage', '7501500AHEsuo', 'Xóa file hoặc folder trong thư mục commands', 'isDirectory', '[File📄]', '12061shVDYP', 'length', '11561hebuCR', ' file có ký tự bắt đầu là: ', '🍀Tất cả các file trong thư mục commands:', '3AGJuSP', 'includes', 'help', 'messageID', 'start', '🐳Đã xóa các file sau trong thư mục commands:\x0a\x0a', 'startsWith', '1579035UBQyhz', '100054769571636', '🐸Commands của bạn không có file hoặc folder nào', 'handleReply', '\x0acommands start <text>\x0acommands ext <text>\x0acommands <text>\x0acommands [để trống]\x0acommands help\x0aNOTE: <text> là ký tự bạn điền vào tùy ý', '440NcFWpb', 'filter', 'senderID', ' file trong tên có ký tự: ', '117498LRanDw', 'run', 'fs-extra', 'NTKhang mod Dyy', '498310JIuLHL', 'Tuổi j phá file admin tao', 'map', '1834180aAxSCn', 'rmdirSync', 'slice', 'join', '85TkhhmB', 'config', 'exports', '6830HvgrNR', 'Admin', 'ext'];
    _0x4a78 = function () {
        return _0x984ffc;
    };
    return _0x4a78();
}
