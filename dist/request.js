'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setRequest = exports.setResponse = exports.setBefore = exports.setProxy = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('./utils');

var _wait = require('./wait');

var _wait2 = _interopRequireDefault(_wait);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * xl_pup request
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author Xiaolong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var requestList = {};
var Interception = null;
var requestInfo = {
    status: 200,
    headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*"
    },
    contentType: 'application/json;charset=utf-8'
};
var before = function before(request) {
    var type = request.resourceType();
    var methods = request.method();
    var postData = request.postData();
    var url = request.url();
    postData = JSON.parse(postData);
    return {
        request: request,
        type: type,
        methods: methods,
        postData: postData,
        url: url
    };
};
var beforeProxy = null;

var dealRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request) {
        var type, methods, param, _param, postData, url, requestProxy, _ref2, proxy, call;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        type = request.resourceType();
                        methods = request.method();

                        if (!(type !== 'xhr' || methods === 'OPTIONS')) {
                            _context.next = 5;
                            break;
                        }

                        request.continue();
                        return _context.abrupt('return');

                    case 5:
                        param = before(request);

                        if (beforeProxy) param = beforeProxy(request);
                        _param = param, postData = _param.postData, url = _param.url;
                        requestProxy = requestList[url];

                        if (!(!requestProxy && !Interception)) {
                            _context.next = 12;
                            break;
                        }

                        request.continue();
                        return _context.abrupt('return');

                    case 12:
                        (0, _utils.log)('\u8BF7\u6C42\u63A5\u53E3__request__' + url);
                        _ref2 = requestProxy || Interception, proxy = _ref2.proxy, call = _ref2.call;
                        _context.next = 16;
                        return proxy({
                            request: request,
                            type: type,
                            postData: postData,
                            url: url
                        }, function (data, clear) {
                            request.respond(_extends({}, requestInfo, {
                                body: JSON.stringify(data)
                            }));
                            if (clear) call();
                        });

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function dealRequest(_x) {
        return _ref.apply(this, arguments);
    };
}();

var setProxy = exports.setProxy = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(proxy, option, time) {
        var promise, path, type;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        Interception = {
                            proxy: proxy
                        };
                        promise = new Promise(function (resolve) {
                            Interception.call = function () {
                                resolve();
                                Interception = null;
                            };
                        });
                        path = option.path, type = option.type;
                        _context2.next = 5;
                        return (0, _wait2.default)(time);

                    case 5:
                        _context2.next = 7;
                        return (0, _wait.dispatchNext)(path, type, option);

                    case 7:
                        return _context2.abrupt('return', promise);

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function setProxy(_x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
    };
}();

var setBefore = exports.setBefore = function setBefore(deal) {
    beforeProxy = function beforeProxy(request) {
        var param = before(request);
        var params = deal(param);
        return _extends({}, param, params);
    };
};

var setResponse = exports.setResponse = function setResponse() {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    requestInfo = _extends({}, requestInfo, info);
};

var setRequest = exports.setRequest = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, option, time) {
        var promise, path, type;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        promise = new Promise(function (resolve) {
                            if ((0, _utils.isArray)(request)) {
                                request.forEach(function (item) {
                                    var name = item.name,
                                        data = item.data,
                                        _item$clear = item.clear,
                                        clear = _item$clear === undefined ? false : _item$clear;

                                    requestList[name] = {
                                        proxy: function () {
                                            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, end) {
                                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                                    while (1) {
                                                        switch (_context3.prev = _context3.next) {
                                                            case 0:
                                                                if ((0, _utils.isFunction)(data)) data = data(req);
                                                                end(data, clear);

                                                            case 2:
                                                            case 'end':
                                                                return _context3.stop();
                                                        }
                                                    }
                                                }, _callee3, undefined);
                                            }));

                                            return function proxy(_x9, _x10) {
                                                return _ref5.apply(this, arguments);
                                            };
                                        }(),
                                        call: function call() {
                                            resolve();
                                        }
                                    };
                                });
                            } else {
                                var name = request.name,
                                    data = request.data,
                                    _request$clear = request.clear,
                                    clear = _request$clear === undefined ? true : _request$clear;

                                requestList[name] = {
                                    proxy: function () {
                                        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, end) {
                                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                                while (1) {
                                                    switch (_context4.prev = _context4.next) {
                                                        case 0:
                                                            if ((0, _utils.isFunction)(data)) data = data(req);
                                                            end(data, clear);

                                                        case 2:
                                                        case 'end':
                                                            return _context4.stop();
                                                    }
                                                }
                                            }, _callee4, undefined);
                                        }));

                                        return function proxy(_x11, _x12) {
                                            return _ref6.apply(this, arguments);
                                        };
                                    }(),
                                    call: function call() {
                                        resolve();
                                    }
                                };
                            }
                        });
                        path = option.path, type = option.type;
                        _context5.next = 4;
                        return (0, _wait2.default)(time);

                    case 4:
                        _context5.next = 6;
                        return (0, _wait.dispatchNext)(path, type, option);

                    case 6:
                        return _context5.abrupt('return', promise);

                    case 7:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function setRequest(_x6, _x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var request = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _global, PAGE;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _global = global, PAGE = _global.PAGE;
                        _context6.next = 3;
                        return PAGE.setRequestInterception(true);

                    case 3:
                        _context6.next = 5;
                        return PAGE.on('request', dealRequest);

                    case 5:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, undefined);
    }));

    return function request() {
        return _ref7.apply(this, arguments);
    };
}();

exports.default = request;
