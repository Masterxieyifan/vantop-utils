/*
 * @Descripttion: 验证对象属性值是否为空。
 * @Date: 2021-08-17
 * @LastEditTime: 2021-08-17
 */
import getType from './getType';
import cloneDeep from './cloneDeep';
import isEmpty from '../validator/isEmpty';

export default function filterEmptyAttrs(obj: any, isDeep = false, isCloneDeep = true): unknown {
    if (getType(obj) !== 'object') {
        throw new Error('Value must be an Object!');
    }
    const params = isCloneDeep ? cloneDeep(obj) : obj;
    function recursion(params: any) {
        for (const key in params) {
            if (isEmpty(params[key])) {
                delete params[key];
            } else if (getType(params[key]) === 'object' && isDeep) {
                recursion(params[key]);
            }
        }
    }
    recursion(params);
    return params;
}
