/*
 * @Descripttion: 乘法运算
 * @Author: 蔡远程
 * @Date: 2022-04-13 15:00:34
 * @LastEditTime: 2022-04-22 11:05:38
 * @LastEditors: 蔡远程
 */

import { NumericType, } from '../types/type';
import toNumber from './toNumber';

export default function multiply(multiplier: NumericType, multiplicand: NumericType): number {

    const multiplierTem = toNumber(multiplier).toString();
    const multiplicandTem = toNumber(multiplicand).toString();
    let baseNum = 0;
    baseNum += (multiplierTem.split('.')[1] || '').length;
    baseNum += (multiplicandTem.split('.')[1] || '').length;

    return Number(multiplierTem.replace('.', '')) * Number(multiplicandTem.replace('.', '')) / Math.pow(10, baseNum);
}