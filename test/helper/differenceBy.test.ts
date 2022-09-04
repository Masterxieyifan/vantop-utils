import chai from 'chai';
import { differenceBy, } from '../../index';
describe('#differenceBy Function', () => {
    it('should accept an `iteratee`', function() {
        const actual1 = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
        chai.assert.deepStrictEqual(actual1, [1.2]);

        const actual2 = differenceBy([{ 'x': 2, }, { 'x': 1, }], [{ 'x': 1, }], 'x');
        chai.assert.deepStrictEqual(actual2, [{ 'x': 2, }]);
    });
});