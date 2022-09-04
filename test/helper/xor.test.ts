/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-spread */
import chai from 'chai';
import { xor, } from '../../index';
function toArgs(array) {
    return (function() { return arguments; }.apply(undefined, array));
}
describe('#xor Function', () => {
    it('xor should return the symmetric difference of two arrays', function() {
        const actual = xor([2, 1], [2, 3]);
        chai.assert.deepStrictEqual(actual, [1, 3]);
    });

    it('xor should return the symmetric difference of multiple arrays', function() {
        let actual = xor([2, 1], [2, 3], [3, 4]);
        chai.assert.deepStrictEqual(actual, [1, 4]);

        actual = xor([1, 2], [2, 1], [1, 2]);
        chai.assert.deepStrictEqual(actual, []);
    });

    it('xor should return an empty array when comparing the same array', function() {
        const array = [1],
            actual = xor(array, array, array);

        chai.assert.deepStrictEqual(actual, []);
    });

    it('xor should return an array of unique values', function() {
        let actual = xor([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
        chai.assert.deepStrictEqual(actual, [1, 4]);

        actual = xor([1, 1]);
        chai.assert.deepStrictEqual(actual, [1]);
    });

    it('xor should return a new array when a single array is given', function() {
        const array = [1];
        chai.assert.notStrictEqual(xor(array), array);
    });

    it('xor should ignore individual secondary arguments', function() {
        const array = [0];
        chai.assert.deepStrictEqual(xor(array), array);
    });

    it('xor should ignore values that are not arrays or `arguments` objects', function() {
        const array = [1, 2];
        chai.assert.deepStrictEqual(xor(array, [2, 3]), [1, 3]);
        chai.assert.deepStrictEqual(xor(array, toArgs([1, 2, 3])), [3]);
    });
});