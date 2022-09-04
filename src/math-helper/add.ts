/*
 * @Descripttion: 加法运算
 * @Author: 蔡远程
 * @Date: 2022-04-22 15:23:05
 * @LastEditTime: 2022-04-22 15:51:18
 * @LastEditors: 蔡远程
 */
import { NumericType, } from '../types/type';
import multiply from './multiply';
import toNumber from './toNumber';

export default function add(addend: NumericType, augend:NumericType): number{
    addend = toNumber(addend);
    augend = toNumber(augend);

    const addendDigit = (addend.toString().split('.')[1] || '').length;
    const augendDigit = (augend.toString().split('.')[1] || '').length;

    const ratio = Math.pow(10, Math.max(addendDigit, augendDigit));

    return (multiply(addend, ratio) + multiply(augend, ratio)) / ratio;
}