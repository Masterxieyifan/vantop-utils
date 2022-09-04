/*
 * @Author: lingyong.zeng
 * @Date: 2021-12-13 12:19:02
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2021-12-13 14:20:54
 * @Description:
 * @FilePath: /vantop-util/test/helper/mapMetaData.test.ts
 */
import chai from 'chai';
import { mapMetaData, } from '../../index';

const STATUS_BASE_DATA = [
    {
        value: 1,
        label: '已处理',
        enumKey: 'DONE',
        iconClass: 'success',
    },
    {
        value: 2,
        label: '未处理',
        enumKey: 'WAIT',
        iconClass: 'danger',
    }
];

describe('#mapMetaData Function', () => {
    it('Should return type of object', () => {
        chai
            .expect(mapMetaData(null, null))
            .to.be.an('object')
            .that.is.empty;

        chai
            .expect(mapMetaData(STATUS_BASE_DATA, null))
            .to.be.an('object')
            .that.is.empty;
    });

    it('Should return the right result', () => {
        chai
            .expect(
                mapMetaData(
                    STATUS_BASE_DATA,
                    [
                        ['STATUS_ENUM', 'enumKey', 'value'],
                        ['STATUS_DESC', 'value', 'label'],
                        ['STATUS_ICONCLASS', 'value', 'iconClass'],
                        ['STATUS_CUSTOM', 'value', ['label', 'enumKey']]
                    ]
                )
            )
            .to.deep.equal(
                {
                    'STATUS_ENUM': {
                        'DONE': 1,
                        'WAIT': 2,
                    },
                    'STATUS_DESC': {
                        '1': '已处理',
                        '2': '未处理',
                    },
                    'STATUS_ICONCLASS': {
                        '1': 'success',
                        '2': 'danger',
                    },
                    'STATUS_CUSTOM': {
                        '1': {
                            label: '已处理',
                            enumKey: 'DONE',
                        },
                        '2': {
                            label: '未处理',
                            enumKey: 'WAIT',
                        },
                    },
                }
            );
    });
});