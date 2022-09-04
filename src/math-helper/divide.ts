/*
 * @Descripttion: 除法运算
 * @Author: 蔡远程
 * @Date: 2022-04-13 15:46:09
 * @LastEditTime: 2022-04-22 10:39:31
 * @LastEditors: 蔡远程
 */

import { NumericType, } from '../types/type';
import multiply from './multiply';
import toNumber from './toNumber';

export default function divide(dividend: NumericType, divisor: NumericType): number {

    const dividendTem = toNumber(dividend).toString();
    const divisorTem = toNumber(divisor).toString();

    const dividendDecimal = (dividendTem.split('.')[1] || '').length;
    const divisorDecimal = (divisorTem.split('.')[1] || '').length;

    const powY =  divisorDecimal - dividendDecimal;
    const isMinus = powY < 0;

    const multiplicand = Math.pow(10, isMinus ? Math.abs(powY) : powY);

    return multiply(
        Number(dividendTem.replace('.', '')) / Number(divisorTem.replace('.', '')),
        isMinus ? 1 / multiplicand : multiplicand
    ) as number;
}