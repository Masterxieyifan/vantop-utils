/*
 * @Author: lingyong.zeng
 * @Date: 2022-03-09 10:31:01
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-03-21 13:37:36
 * @Description: 字符串首字母大写
 * @FilePath: /vantop-util/src/string/upperFirst.ts
 */
import { typeErrorHandle, } from '../error-handle/TypeError';
const FILE_PATH = 'Validator';

export default function upperFirst(str: string): string {
    typeErrorHandle(str, 'string', FILE_PATH);

    return str.length ?
        str[0].toUpperCase() + str.slice(1)
        : str;
}