import chai from 'chai';
import { calcDuration, } from '../../index';

describe('#calcDuration Function', () => {
    it('Should type of sting', () => {
        chai.assert.isString(calcDuration(7482220));
    });

    it('Should return 0\'0\'0\'\' when empty params', () => {
        chai.assert.equal(calcDuration(0), '0\'0\'0\'\'');
    });

    it('Should return 2\'4\'42\'\'', () => {
        chai.assert.equal(calcDuration(7482220), '2\'4\'42\'\'');
    });

    it('Should return 2h4m42s when params options has set', () => {
        chai.assert.equal(calcDuration(
            7482220,
            {
                h:'h',
                m:'m',
                s:'s',
            }
        ), '2h4m42s');
    });
});