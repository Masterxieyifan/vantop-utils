import chai from 'chai';
import { union, } from '../../index';


describe('#union Function', () => {
    it('union should return the union of two arrays', function() {
        const actual = union([2], [1, 2]);
        chai.assert.deepEqual(actual, [2, 1]);
    });

    it('union should return the union of multiple arrays', function() {
        const actual = union([2], [1, 2], [2, 3]);
        chai.assert.deepEqual(actual, [2, 1, 3]);
    });

    it('union should not flatten nested arrays', function() {
        const actual = union([1, 3, 2], [1, [5]], [2, [4]]);
        chai.assert.deepEqual(actual, [1, 3, 2, [5], [4]]);
    });

    it('Should return [true, false, null, undefined, "string"]', () => {
        chai.assert.deepEqual(union(
            [true, false, null, undefined],
            [true, false, null, undefined, 'string']
        ), [true, false, null, undefined, 'string']);
    });
});
