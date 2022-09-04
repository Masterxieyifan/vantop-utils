/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-spread */
import chai from 'chai';
import { intersection, } from '../../index';

function toArgs(array) {
    return (function() { return arguments; }.apply(undefined, array));
}

describe('#intersection Function', () => {
    it('Should return type of array', () => {
        chai.assert.isArray(intersection([1], [2]));
    });
    it('intersection should return the intersection of two arrays', function() {
        const actual = intersection([2, 1], [2, 3]);
        chai.assert.deepEqual(actual, [2]);
    });
    it('intersection should return the intersection of multiple arrays', function() {
        const actual = intersection([2, 1, 2, 3], [3, 4], [3, 2]);
        chai.assert.deepEqual(actual, [3]);
    });
    it('intersection should return an array of unique values', function() {
        const actual = intersection([1, 1, 3, 2, 2], [5, 2, 2, 1, 4], [2, 1, 1]);
        chai.assert.deepEqual(actual, [1, 2]);
    });
    it('intersection should work with `arguments` objects', function() {
        const array = [0, 1, null, 3],
            expected = [1, 3];
        chai.assert.deepEqual(intersection(array, toArgs([1, 2, 3])), expected);
        chai.assert.deepEqual(intersection(toArgs([1, 2, 3]), array), expected);
    });
    it('intersection should work with a single array', function() {
        const actual = intersection([1, 1, 3, 2, 2]);
        chai.assert.deepEqual(actual, [1, 3, 2]);
    });
    it('intersection should match `NaN`', function() {
        const actual = intersection([1, NaN, 3], [NaN, 5, NaN]);
        chai.assert.deepEqual(actual, [NaN]);
    });
});