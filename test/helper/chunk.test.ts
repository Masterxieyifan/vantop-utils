import chai from 'chai';
import { chunk, } from '../../index';

describe('#chunk Function', () => {
    it('Should return type of array', () => {
        chai.assert.isArray(chunk([1,2,3]));
    });
    it('Should return []', () => {
        chai.assert.deepEqual(chunk([], 1), []);
    });
    it('Should return []', () => {
        chai.assert.deepEqual(chunk([1,2,3], -1), []);
    });
    it('Should return [[1], [2]]', () => {
        chai.assert.deepEqual(chunk([1,2]), [[1],[2]]);
    });
    it('Should return [["1","2","3"]]', () => {
        chai.assert.deepEqual(chunk(["1","2","3"], 5),[["1","2","3"]]);
    });
    it('Should return [[{id: "001"},[1,"2",[3,4]]], [5, "6"], [true]]', () => {
        chai.assert.deepEqual(chunk([{id: "001"},[1,"2",[3,4]],5,"6",true], 2),[[{id: "001"},[1,"2",[3,4]]], [5, "6"], [true]]);
    });
});