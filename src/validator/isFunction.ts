/*
 * @Descripttion: 验证类型。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2022-06-28 18:21:22
 */
import getType from '../helper/getType';

export default function isFunction(target: unknown): boolean {
    return ['asyncfunction', 'function', 'asyncgeneratorfunction', 'generatorfunction'].includes(getType(target));
}