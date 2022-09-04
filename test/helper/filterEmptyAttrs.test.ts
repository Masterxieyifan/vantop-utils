import chai from 'chai';
import { filterEmptyAttrs, } from '../../index';

const OBJ = {
    'size': 20,
    'current': 1,
    'checkStatusList': [],
    'propertyOption': '',
    'brandName': '',
    'brandIdList': [],
    'categoryId': null,
    'cnName': '',
    'enName': '',
    'modelCode': '',
    'sku': '1212',
    'status': null,
    'platformIdList': [],
    'createIdList': [],
    'developerIdList': [],
    'buyerIdList': [],
    'inventoryTypeList': [],
    'skuType': '',
    'aa': {
        'a': 1,
        'b': '',
        'c': [1],
    },
};

describe('#filterEmptyAttrs Function', () => {
    it('Should return type of object', () => {
        chai
            .expect(filterEmptyAttrs(OBJ))
            .to.be.an('object');
    });
    it('Should throw new Error', () => {
        chai.assert.throws(() => filterEmptyAttrs(1), Error, 'Value must be an Object!');
    });
});
