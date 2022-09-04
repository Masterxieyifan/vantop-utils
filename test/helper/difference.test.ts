/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-spread */
import chai from 'chai';
import { difference, } from '../../index';
function toArgs(array) {
    return (function() { return arguments; }.apply(undefined, array));
}
describe('#difference Function', () => {
    it('difference should return the difference of two arrays', function() {
        const actual = difference([2, 1], [2, 3]);
        chai.assert.deepStrictEqual(actual, [1]);
    });

    it('difference should return the difference of multiple arrays', function() {
        const actual = difference([2, 1, 2, 3], [3, 4], [3, 2]);
        chai.assert.deepStrictEqual(actual, [1]);
    });

    it('difference should match `NaN`', function() {
        chai.assert.deepStrictEqual(difference([1, NaN, 3], [NaN, 5, NaN]), [1, 3]);
    });

    it('difference should ignore values that are not array-like', function() {
        const array = [1, null, 3];

        chai.assert.deepStrictEqual(difference([], array), []);
        chai.assert.deepStrictEqual(difference(array, toArgs([1, 2, 3])), [null]);
    });
});