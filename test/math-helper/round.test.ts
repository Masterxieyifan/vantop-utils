/*
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2022-04-13 15:11:59
 * @LastEditTime: 2022-04-22 14:38:13
 * @LastEditors: 蔡远程
 */
import { round, } from '../../index';
import chai from 'chai';

describe('#round Function', () => {
    it('Should type of number', () => {
        chai.assert.isNumber(round(10.22, 2));
    });
    it('Should return 0 when error param', () => {
        chai.assert.equal(round(null), 0);
    });
    it('Should return 0', () => {
        chai.assert.equal(round('0', 2), 0);
    });
    it('Should return -21', () => {
        chai.assert.equal(round('-20.5'), -21);
    });
    it('Should return 123.46', () => {
        chai.assert.equal(round(123.455, 2), 123.46);
    });
    it('Should return 123.45', () => {
        chai.assert.equal(round(123.45, 2), 123.45);
    });
    it('Should return 123', () => {
        chai.assert.equal(round(123.45), 123);
    });
    it('Should return 3', () => {
        chai.assert.equal(round(3.00099, 2), 3);
    });
});