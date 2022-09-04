/*
 * @Descripttion: 四舍五入，且格式化为字符串函数
 * @Author: 蔡远程
 * @Date: 2022-04-21 11:00:20
 * @LastEditTime: 2022-04-22 14:46:09
 * @LastEditors: 蔡远程
 */

import { NumericType, } from '../types/type';
import round from './round';

export default function toFixed(num: NumericType, digits: number): string {
    digits = digits >> 0;
    const str = round(num, digits).toString();
    const nums = str.split('.');
    const intStr = nums[0];
    const floatStr = nums[1] || '';
    const digitOffsetIndex = digits - floatStr.length;
    if (digits) {
        if (digitOffsetIndex > 0) {
            return intStr + '.' + floatStr + '0'.repeat(digitOffsetIndex);
        }
        return intStr + numOffsetPoint(floatStr, Math.abs(digitOffsetIndex));
    }
    return intStr;
}

function numOffsetPoint(str: string, offsetIndex: number): string {
    return str.substring(0, offsetIndex) + '.' + str.substring(offsetIndex, str.length);
}