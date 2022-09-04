/*
* @Descripttion: 数值四舍五入函数
* @Author: 蔡远程
* @Date: 2022-04-22 10:02:53
 * @LastEditTime: 2022-04-22 14:37:09
 * @LastEditors: 蔡远程
*/
import { NumericType, } from '../types/type';
import divide from './divide';
import multiply from './multiply';
import toNumber from './toNumber';

export default function round(num: NumericType, digits: number): number {
    num = toNumber(num);
    let res = num;
    digits = digits >> 0;
    if (num && digits >=0 ) {
        const nums = num.toString().split('.'),
            intStr = nums[0],
            floatStr = nums[1] || '',
            fStr = floatStr.substring(0, digits + 1);
        const subRest = intStr + (fStr ? ('.' + fStr) : '');
        if (digits >= floatStr.length) {
            res = toNumber(subRest);
        } else {
            const ratio = Math.pow(10, digits + 1);

            let resTemp = multiply(subRest, ratio).toString();
            let intTemp = toNumber(resTemp.slice(0, -1)),
                lastTemp = toNumber(resTemp.slice(-1));

            if (lastTemp > 4) {
                intTemp < 0 ? intTemp -- : intTemp ++;
                lastTemp = 0;
            } else {
                lastTemp = 0;
            }
            resTemp = `${intTemp}${lastTemp}`;

            res = divide(resTemp, ratio);
        }
    }
    return res;
}