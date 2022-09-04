/*
 * @Author: lingyong.zeng
 * @Date: 2021-12-13 11:23:22
 * @LastEditors: 蔡远程
 * @LastEditTime: 2021-12-20 14:49:03
 * @Description:
 * @FilePath: /vantop-util/src/helper/mapMetaData.ts
 */

// 映射元数据
export default function mapMetaData <T extends Record<string, any>>(
    metaData: Array<T>,
    mapCfgs: [string, string, string|string[]][]
): Record<string, number>  {
    const obj: Record<string | number, any> = {};

    // 元数据判断
    if (!Array.isArray(metaData) || metaData.length === 0) {
        return {};
    }
    // 映射配置判断
    if (!Array.isArray(mapCfgs) || mapCfgs.length === 0) {
        return {};
    }

    for (const item of metaData) {
        for (
            const [ attrName, keyName, valName ] of mapCfgs) {
            let val: any;
            if (Array.isArray(valName)) {
                val = {};
                valName.forEach(v => val[v] = item[v]);
            } else {
                val = item[valName];
            }
            if (!obj[attrName]) {
                obj[attrName] = {};
            }
            const key = item[keyName];
            obj[attrName][key] = val;
        }
    }
    return obj;
}