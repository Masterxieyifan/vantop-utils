/*
 * @Descripttion: 毫秒换算函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-10-22 09:42:10
 */

interface TimeSymbolOptions {
    h?: string;
    m?: string;
    s?: string;
}

export default function calcDuration(ms: number, options: TimeSymbolOptions = {}): string {
    const { h = '\'', m = '\'', s = '\'\'', } = options;
    if (!ms) return `0${h}0${m}0${s}`;

    const hour = Math.floor(ms / 3600000);
    const minute = Math.floor(ms / 60000) % 60;
    const second = Math.floor(ms / 1000) % 60;

    return `${hour}${h}${minute}${m}${second}${s}`;
}