/*
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2022-04-13 15:11:59
 * @LastEditTime: 2022-04-22 15:45:13
 * @LastEditors: 蔡远程
 */
import { add, } from '../../index';
import chai from 'chai';

describe('#add Function', () => {
    it('Should type of number', () => {
        chai.assert.isNumber(add(10, 10));
    });
    it('Should return 0 when error param', () => {
        chai.assert.equal(add(null, null), 0);
    });
    it('Should return 20 when 10+10', () => {
        chai.assert.equal(add(10, 10), 20);
    });
    it('Should return 5.484466 when 0.4598 + 5.024666', () => {
        chai.assert.equal(add(0.4598, 5.024666), 5.484466);
    });
    it('Should return 0.3 when 0.1+0.2', () => {
        chai.assert.equal(add(0.2, 0.1), 0.3);
    });
    it('Should return -0.3 when -0.1 + -0.2', () => {
        chai.assert.equal(add(-0.2, -0.1), -0.3);
    });
});