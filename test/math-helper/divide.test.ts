/*
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2022-04-13 15:11:59
 * @LastEditTime: 2022-04-22 10:42:48
 * @LastEditors: 蔡远程
 */
import { divide, } from '../../index';
import chai from 'chai';

describe('#divide Function', () => {
    it('Should type of number', () => {
        chai.assert.isNumber(divide(10, 10));
    });
    it('Should return Infinity when divisor was none', () => {
        chai.assert.equal(divide(10), Infinity);
    });
    it('Should return 0 when error param', () => {
        chai.assert.equal(divide(null), 0);
    });
    it('Should return 2 when 20 / 10', () => {
        chai.assert.equal(divide(20, 10), 2);
    });
    it('Should return 3.33 when 2.997 / 0.9', () => {
        chai.assert.equal(divide(2.997, 0.9), 3.33);
    });
    it('Should return 7.1 when 182.967 / 25.77', () => {
        chai.assert.equal(divide(182.967, 25.77), 7.1);
    });
    it('Should return 3 when 0.3 / 0.1', () => {
        chai.assert.equal(divide(0.3, 0.1), 3);
    });
});