import { syncDelay, } from '../../index';
import chai from 'chai';

describe('#snycDelay Function', () => {
    it('Should return type of Promise', () => {
        chai.expect(syncDelay()).to.be.a('promise');
    });

    it('Should delay 1000 call', async () => {
        let callTime;
        const callFunc = () => {
            callTime = Date.now();
        };

        const startTime = Date.now();
        await syncDelay(1000);
        callFunc();

        chai.expect((callTime - startTime)).to.be.at.least(1000);
    });
});

