/*
 * @Descripttion: 数组交集
 * @Author: 蔡远程
 * @Date: 2022-01-13 16:05:30
 * @LastEditTime: 2022-01-19 15:59:46
 * @LastEditors: 蔡远程
 */

import { _baseIntersection, } from './_baseIntersection';

export default function intersection<T>(...arrays: T[][]): T[] {
    if (arrays.length <= 0) return [];
    if (arrays.length === 1) return [...new Set(arrays[0])];

    const iterateeFunc = (item: T) => item;
    return _baseIntersection(arrays, iterateeFunc);
}