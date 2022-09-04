/*
 * @Descripttion: xor/xorBy
 * @Author: 蔡远程
 * @Date: 2022-01-18 16:16:21
 * @LastEditTime: 2022-01-20 10:22:13
 * @LastEditors: 蔡远程
 */

import { FunctionLike, } from '../types/interface';
import uniqBy from './uniqBy';
import { _baseDifference, } from './_baseDifference';

export function _baseXor<T>(arrays: T[][], iteratee: FunctionLike): T[] {
    const diffResult = [];
    const len = arrays.length;
    for (let i = 0; i < len; i++) {
        const cur = arrays[i];
        const comparator = [...arrays.slice(0, i), ...arrays.slice(i+1, len)];
        const diffence = _baseDifference([cur, ...comparator], iteratee);
        diffResult.push(...diffence);
    }
    const xor = uniqBy(diffResult, iteratee);
    return xor;
}
