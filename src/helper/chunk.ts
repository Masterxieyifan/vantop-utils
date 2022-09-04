/*
 * @Descripttion: chunk函数
 * @Author: liululu
 * @Date: 2021-12-20 10:38:36
 * @LastEditTime: 2021-12-20 15:31:21
 */

export default function chunk(arr: unknown[], size = 1) :unknown[] {
    if (!Array.isArray(arr)){
        throw TypeError('The parameter must be array.');
    }
    if (typeof size !== 'number') {
        throw TypeError('The parameter must be number.');
    }
    if (arr.length <= 0 || size < 1) {
        return [];
    }
    const newArr = [];
    let i = 0;
    while (i < arr.length) {
        newArr.push(arr.slice(i, size+i));
        i += size;
    }
    return newArr;
}