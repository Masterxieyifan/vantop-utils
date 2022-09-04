/*
 * @Descripttion: 减法运算
 * @Author: 蔡远程
 * @Date: 2022-04-22 15:23:05
 * @LastEditTime: 2022-04-22 15:58:13
 * @LastEditors: 蔡远程
 */
import { NumericType, } from '../types/type';
import divide from './divide';
import multiply from './multiply';
import toNumber from './toNumber';

export default function subtract(subtrahend: NumericType, minuend:NumericType): number{
    subtrahend = toNumber(subtrahend);
    minuend = toNumber(minuend);

    const subtrahendDigit = (subtrahend.toString().split('.')[1] || '').length;
    const minuendDigit = (minuend.toString().split('.')[1] || '').length;

    const ratio = Math.pow(10, Math.max(subtrahendDigit, minuendDigit));

    return divide(multiply(subtrahend, ratio) - multiply(minuend, ratio), ratio);
}