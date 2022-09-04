/*
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2022-04-13 15:11:59
 * @LastEditTime: 2022-04-22 14:43:26
 * @LastEditors: 蔡远程
 */
import { toNumber, } from '../../index';
import chai from 'chai';

describe('#toNumber Function', () => {
    it('Should type of number', () => {
        chai.assert.isNumber(toNumber(10));
    });
    it('Should return 10', () => {
        chai.assert.equal(toNumber('10'), 10);
    });
    it('Should return 10.123', () => {
        chai.assert.equal(toNumber(10.123), 10.123);
    });
    it('Should return 0', () => {
        chai.assert.equal(toNumber(true), 0);
    });
    it('Should return 0', () => {
        chai.assert.equal(toNumber(null), 0);
    });
    it('Should return 0', () => {
        chai.assert.equal(toNumber(undefined), 0);
    });
});