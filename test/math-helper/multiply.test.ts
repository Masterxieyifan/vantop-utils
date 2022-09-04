/*
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2022-04-13 15:11:59
 * @LastEditTime: 2022-04-22 10:38:31
 * @LastEditors: 蔡远程
 */
import { multiply, } from '../../index';
import chai from 'chai';

describe('#multiply Function', () => {
    it('Should type of number', () => {
        chai.assert.isNumber(multiply(10, 10));
    });
    it('Should return 10 when just one parma', () => {
        chai.assert.equal(multiply(10), 0);
    });
    it('Should return 0 when having undefined', () => {
        chai.assert.equal(multiply(null), 0);
    });
    it('Should return 0 when having undefined', () => {
        chai.assert.equal(multiply(undefined), 0);
    });
    it('Should return 200 when 10 * 20', () => {
        chai.assert.equal(multiply(10, 20), 200);
    });
    it('Should return 24.642 when 6.66 * 3.7', () => {
        chai.assert.equal(multiply(6.66, 3.7), 24.642);
    });
    it('Should return 0.02 when 0.2 * 0.1', () => {
        chai.assert.equal(multiply(0.1, 0.2), 0.02);
    });
    it('Should return 0 when 0 * 0.2', () => {
        chai.assert.equal(multiply(0, 0.2), 0);
    });
});