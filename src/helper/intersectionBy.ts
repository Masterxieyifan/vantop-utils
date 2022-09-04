/*
 * @Descripttion: 数组交集
 * @Author: 蔡远程
 * @Date: 2022-01-13 16:05:30
 * @LastEditTime: 2022-01-19 13:49:44
 * @LastEditors: 蔡远程
 */
import { FunctionLike, } from '../types/interface';
import { _baseIntersection, } from './_baseIntersection';
type iterateeType = FunctionLike | string;

export default function intersectionBy<T>(...arrays: [...T[][], iterateeType]): T[] {
    const iteratee = arrays.pop() as iterateeType;
    if (arrays.length <= 0) return [];

    const isFunction = typeof iteratee === 'function';
    const isString = typeof iteratee === 'string';
    if (!isFunction && !isString) {
        throw new TypeError('Expected iteratee is a function or property string');
    }
    const iterateeFunc = isFunction
        ? (item: T) => (iteratee as FunctionLike)(item)
        : isString
            ? (item: Record<string, any>)=>item[iteratee as string]
            : (item: T) => item;

    return _baseIntersection(arrays as T[][], iterateeFunc);
}