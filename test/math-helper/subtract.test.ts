/*
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2022-04-13 15:11:59
 * @LastEditTime: 2022-04-22 16:02:33
 * @LastEditors: 蔡远程
 */
import { subtract, } from '../../index';
import chai from 'chai';

describe('#subtract Function', () => {
    it('Should type of number', () => {
        chai.assert.isNumber(subtract(10, 10));
    });
    it('Should return 0 when error param', () => {
        chai.assert.equal(subtract(null, null), 0);
    });
    it('Should return 0 when 10-10', () => {
        chai.assert.equal(subtract(10, 10), 0);
    });
    it('Should return 0.2 when 0.3 - 0.1', () => {
        chai.assert.equal(subtract(0.3, 0.1), 0.2);
    });
    it('Should return -0.3 when -0.2-0.1', () => {
        chai.assert.equal(subtract(-0.2, 0.1), -0.3);
    });
    it('Should return 300693.2 when 324253.1 - 23559.9', () => {
        chai.assert.equal(subtract(324253.1, 23559.9), 300693.2);
    });
});