import { lowerFirst, } from '../../index';
import chai from 'chai';

describe('#lowerFirst Function', () => {
    it('Should throw TypeError when param is not string', () => {
        // in number
        chai.assert.throws(() => lowerFirst(123 as any), TypeError);
        // in array
        chai.assert.throws(() => lowerFirst([] as any), TypeError);
        chai.assert.throws(() => lowerFirst(['a', 'b'] as any), TypeError);
        // in object
        chai.assert.throws(() => lowerFirst({} as any), TypeError);
        chai.assert.throws(() => lowerFirst({ 'name': 'VantopUtil', } as any), TypeError);
    });

    it('Should return empty string', () => {
        chai.assert.equal(lowerFirst(''), '');
    });

    it('Should return right result', () => {
        chai.assert.equal(lowerFirst('Vantop'), 'vantop');
        chai.assert.equal(lowerFirst('vantop'), 'vantop');
        chai.assert.equal(lowerFirst('VanTop'), 'vanTop');
        chai.assert.equal(lowerFirst(' VanTop'), ' VanTop');
    });
});