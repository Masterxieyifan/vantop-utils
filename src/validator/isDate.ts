/*
 * @Descripttion: 验证类型。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-04-16 16:17:44
 */
import getType from '../helper/getType';

export default function isDate(target: unknown): boolean {
    return getType(target) === 'date';
}