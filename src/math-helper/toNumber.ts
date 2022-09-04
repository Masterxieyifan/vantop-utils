/*
 * @Descripttion: 转数字函数
 * @Author: 蔡远程
 * @Date: 2022-04-22 10:11:50
 * @LastEditTime: 2022-04-22 10:21:07
 * @LastEditors: 蔡远程
 */

import { NumericType, } from '../types/type';
declare function parseFloat(string: NumericType): number;

export default function toNumber(val: NumericType): number {
    if (val) {
        const num = parseFloat(val);
        if (!isNaN(num)) {
            return num;
        }
    }
    return 0;

}
