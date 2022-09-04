/*
 * @Descripttion: 数组并集
 * @Author: 蔡远程
 * @Date: 2022-01-13 16:05:30
 * @LastEditTime: 2022-01-18 14:28:31
 * @LastEditors: 蔡远程
 */

export default function union(...arrays: unknown[][]): unknown[] {
    const result = [];
    const _map = new Map();
    for (const array of arrays) {
        for (const item of array) {
            const key = item;
            if (!_map.has(key)) {
                _map.set(key, true);
                result.push(item);
            }
        }
    }
    return result;
}