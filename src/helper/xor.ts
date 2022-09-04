/*
 * @Descripttion: 数组差集
 * @Author: 蔡远程
 * @Date: 2022-01-13 16:05:30
 * @LastEditTime: 2022-01-20 10:24:05
 * @LastEditors: 蔡远程
 */

import { _baseXor, } from './_baseXor';


export default function xor<T>(...arrays: T[][]): T[] {
    if (arrays.length <= 0) return [];
    if (arrays.length === 1) return [...new Set(arrays[0])];

    const iterateeFunc = (item: T) => item;
    return _baseXor(arrays, iterateeFunc);
}