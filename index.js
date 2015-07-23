// jscs:disable validateIndentation
/*!
 Copyright (c) 2015 Andrew Gurinovich.
 Licensed under the MIT License (MIT)
 */

(function() {
    'use strict';

    function handlers(/* funcs */) {

        var funcs = arguments;
        return function(/* args */) {
            var args = arguments,
                that = this;

            Array.prototype.forEach.call(funcs, function(obj) {
                if (typeof obj == 'function') {
                    obj.apply(that, args);
                } else {
                    if (typeof(obj) != 'undefined') {
                        throw new Error('handlers accepts only functions and undefined values');
                    }
                }
            });
        };

        return result;
    }

    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function() {
            return handlers;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = handlers;
    } else {
        window.reactHandlers = handlers;
    }

}());
