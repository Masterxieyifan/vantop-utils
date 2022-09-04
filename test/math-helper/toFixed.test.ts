/*
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2022-04-13 15:11:59
 * @LastEditTime: 2022-04-22 15:30:47
 * @LastEditors: 蔡远程
 */
import { toFixed, } from '../../index';
import chai from 'chai';

describe('#toFixed Function', () => {
    it('Should type of number', () => {
        chai.assert.isString(toFixed(10.22, 2));
    });
    it('Should return 0 when error param', () => {
        chai.assert.equal(toFixed(null), '0');
    });
    it('Should return 0.00', () => {
        chai.assert.equal(toFixed('0', 2), '0.00');
    });
    it('Should return -21', () => {
        chai.assert.equal(toFixed('-20.5'), '-21');
    });
    it('Should return 123.46', () => {
        chai.assert.equal(toFixed(123.455, 2), '123.46');
    });
    it('Should return 123.45', () => {
        chai.assert.equal(toFixed(123.45, 2), '123.45');
    });
    it('Should return 3.00', () => {
        chai.assert.equal(toFixed(3.00099, 2), '3.00');
    });
    it('Should return 0.15', () => {
        chai.assert.equal(toFixed(0.145, 2), '0.15');
    });
});