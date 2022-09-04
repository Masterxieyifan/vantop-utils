/* eslint-disable prefer-rest-params */
import chai from 'chai';
import { xorBy, } from '../../index';
describe('#xor Function', () => {
    it('should accept an `iteratee`', function() {
        const actual1 = xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
        chai.assert.deepStrictEqual(actual1, [1.2, 3.4]);

        const actual2 = xorBy([{ 'x': 1, }], [{ 'x': 2, }, { 'x': 1, }], 'x');
        chai.assert.deepStrictEqual(actual2, [{ 'x': 2, }]);
    });

    it('should provide correct `iteratee` arguments', function() {
        let args;

        xorBy([2.1, 1.2], [2.3, 3.4], function() {
            args || (args = Array.prototype.slice.call(arguments));
        });

        chai.assert.deepStrictEqual(args, [2.1]);
    });
});