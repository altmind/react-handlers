// jscs:disable validateIndentation
'use strict';
var assert = require("assert");
var handlers = require('./');

describe('react-handlers', function() {

    it('executes single function', function() {
        var test = '';
        var h = handlers(function() {
            test += 'a'
        });
        h();
        assert.equal(test, 'a');
    });

    it('executes multiple functions in order', function() {
        var test = '';
        var h = handlers(function() {
                test += 'a'
            },
            function() {
                test += 'b'
            },
            function() {
                test += 'c'
            }
        );
        h();
        assert.equal(test, 'abc');
    });

    it('executes function with bound context', function() {
        var test = '';
        var ctx = {val: 'a'};
        var h = handlers(function() {
                test += this.val;
            }.bind(ctx)
        );
        h();
        assert.equal(test, 'a');
    });

    it('executes function with handlers "this" context', function() {
        var test = '';
        var ctx = {val: 'a'};
        (function() {
            var h = handlers(function() {
                    test += this.val;
                }
            );
            h.apply(this);
        }).apply(ctx);

        assert.equal(test, 'a');
    });
    
    it('skips undefineds', function() {
        var test = '';
        var h = handlers(function() {
                test += 'a'
            },
            undefined,
            function() {
                test += 'b'
            }
        );
        h();
        assert.equal(test, 'ab');
    });

    it('throws if non-function is passed', function() {
        var test = '';
        var h = handlers(function() {
            },
            {},
            function() {
            }
        );
        assert.throws(function() {
            h();
        });
    });

    it('args are passed to function', function() {
        var h = handlers(function() {
                assert.equal(arguments.length, 3);
                assert.equal(arguments[0], 'a');
                assert.equal(arguments[1], 'b');
                assert.equal(arguments[2], 'c');
            },
            function() {
                assert.equal(arguments.length, 3);
                assert.equal(arguments[0], 'a');
                assert.equal(arguments[1], 'b');
                assert.equal(arguments[2], 'c');
            }
        );
        h('a', 'b', 'c');
    });

})