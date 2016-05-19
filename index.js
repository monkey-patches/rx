function patchTypeFilter(Rx) {
    Rx.Observable.prototype.isTruthty = function () {
        return this.filter(function (x) {
            return !!x === true;
        });
    };
    Rx.Observable.prototype.isFalsey = function () {
        return this.filter(function (x) {
            return !!x === false;
        });
    };
    Rx.Observable.prototype.isDefined = function () {
        return this.filter(function (x) {
            return x !== undefined;
        });
    };
    Rx.Observable.prototype.isNull = function () {
        return this.filter(function (x) {
            return x === null;
        });
    };
    Rx.Observable.prototype.isUndefined = function () {
        return this.filter(function (x) {
            return x === undefined;
        });
    };
    Rx.Observable.prototype.isString = function () {
        return this.filter(function (x) {
            return typeof x === 'string' || x instanceof String;
        });
    };
}

module.exports = function (Rx, options) {
    options = options || {};
    if (options.all || options.typeFilter) {
        patchTypeFilter(Rx);
    }
};