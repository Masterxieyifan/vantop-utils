/*
 * @Author: lingyong.zeng
 * @Date: 2022-03-21 10:12:13
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2022-03-21 13:45:08
 * @Description: 同步延迟
 * @FilePath: /vantop-util/src/helper/syncDelay.ts
 */

export default function syncDelay(wait = 0):  Promise<any> {
    return new Promise<any>((res) => {
        setTimeout(res, +wait || 0);
    });
}