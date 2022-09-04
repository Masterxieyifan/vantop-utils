/*
 * @Descripttion: intersection/intersectionBy
 * @Author: 蔡远程
 * @Date: 2022-01-18 16:16:21
 * @LastEditTime: 2022-01-19 17:04:23
 * @LastEditors: 蔡远程
 */

import { FunctionLike, } from '../types/interface';

export function _baseIntersection<T>(arrays: T[][], iteratee: FunctionLike): T[] {
    let cache = new Map();

    const baseArr = arrays.reverse().shift() as T[];

    for (let i = 0; i < baseArr.length; i++) {
        const item = baseArr[i];
        const key = iteratee(item);
        if (!cache.has(key)) cache.set(key, item);
    }

    for (let i = 0; i < arrays.length; i++) {
        cache = getIntersection(cache, arrays[i], iteratee);
    }
    return [...cache.values()];
}

function getIntersection<T, K>(cache: Map<K, T>, comparator: T[], iteratee: FunctionLike): Map<K, T> {
    const intersection = new Map();
    for (const item of comparator) {
        const key = iteratee(item);
        if (cache.has(key)){
            intersection.set(key, item);
        }
    }
    return intersection;
}
