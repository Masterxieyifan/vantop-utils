/*
 * @Descripttion: difference/differenceBy
 * @Author: 蔡远程
 * @Date: 2022-01-18 16:16:21
 * @LastEditTime: 2022-01-19 17:58:53
 * @LastEditors: 蔡远程
 */

import { FunctionLike, } from '../types/interface';

export function _baseDifference<T>(arrays: T[][], iteratee: FunctionLike): T[] {
    let cache = new Map();
    const baseArr = arrays.shift() as T[];
    for (let i = 0; i < baseArr.length; i++) {
        const item = baseArr[i];
        const key = iteratee(item);
        if (!cache.has(key)) cache.set(key, item);
    }

    for (const array of arrays) {
        cache = getDifference(cache, array, iteratee);
    }
    return [...cache.values()];
}

function getDifference<T, K>(base: Map<K, T>, comparator: T[], iteratee: FunctionLike): Map<K, T> {
    for (const item of comparator) {
        const key = iteratee(item);
        if (base.has(key)){
            base.delete(key);
        }
    }
    return base;
}
