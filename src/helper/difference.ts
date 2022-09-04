/*
 * @Descripttion: 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
 * @Author: 蔡远程
 * @Date: 2022-01-13 16:05:30
 * @LastEditTime: 2022-01-19 18:16:44
 * @LastEditors: 蔡远程
 */

import { _baseDifference, } from './_baseDifference';


export default function difference<T>(...arrays: T[][]): T[] {
    if (arrays.length <= 0) return [];
    if (arrays.length === 1) return arrays[0];

    const iterateeFunc = (item: T) => item;
    return _baseDifference(arrays, iterateeFunc);
}
