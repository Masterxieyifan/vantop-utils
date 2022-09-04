import chai from 'chai';
import { intersectionBy, } from '../../index';

describe('#intersectionBy Function', () => {
    it('should accept an `iteratee`', function() {
        const actual1 = intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
        chai.assert.deepEqual(actual1, [2.1]);

        const actual2 = intersectionBy([{ 'x': 1, }], [{ 'x': 2, }, { 'x': 1, }], 'x');
        chai.assert.deepEqual(actual2, [{ 'x': 1, }]);
    });

    it('should provide correct `iteratee` arguments', function() {
        let args;
        intersectionBy([2.1, 1.2], [2.3, 3.4], function() {
            // eslint-disable-next-line prefer-rest-params
            args || (args = Array.prototype.slice.call(arguments));
        });

        chai.assert.deepEqual(args, [2.3]);
    });
});