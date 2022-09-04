/*
 * @Author: lingyong.zeng
 * @Date: 2022-03-09 10:31:01
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-03-21 11:16:28
 * @Description: 字符串首字母小写
 * @FilePath: /vantop-util/src/string/lowerFirst.ts
 */
import { typeErrorHandle, } from '../error-handle/TypeError';
const FILE_PATH = 'Validator';

export default function lowerFirst(str: string): string {
    typeErrorHandle(str, 'string', FILE_PATH);

    return str.length ?
        str[0].toLowerCase() + str.slice(1)
        : str;
}