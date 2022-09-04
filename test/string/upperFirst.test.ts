/*
 * @Author: lingyong.zeng
 * @Date: 2022-03-21 10:45:45
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-03-21 13:42:41
 * @Description:
 * @FilePath: /vantop-util/test/string/upperFirst.test.ts
 */
import { upperFirst, } from '../../index';
import chai from 'chai';

describe('#upperFirst Function', () => {
    it('Should throw TypeError when param is not string', () => {
        // in number
        chai.assert.throws(() => upperFirst(123 as any), TypeError);
        // in array
        chai.assert.throws(() => upperFirst([] as any), TypeError);
        chai.assert.throws(() => upperFirst(['a', 'b'] as any), TypeError);
        // in object
        chai.assert.throws(() => upperFirst({} as any), TypeError);
        chai.assert.throws(() => upperFirst({ 'name': 'VantopUtil', } as any), TypeError);
    });

    it('Should return empty string', () => {
        chai.assert.equal(upperFirst(''), '');
    });

    it('Should return right result', () => {
        chai.assert.equal(upperFirst('Vantop'), 'Vantop');
        chai.assert.equal(upperFirst('vantop'), 'Vantop');
        chai.assert.equal(upperFirst('VanTop'), 'VanTop');
        chai.assert.equal(upperFirst(' VanTop'), ' VanTop');
    });
});