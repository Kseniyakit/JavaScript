import {squareArray} from './index.js';
it ('shold give squared array',()=>{
    const result = squareArray([2, 3, 4, 5, 6]);
    expect(result).toEqual([4, 9, 16, 25, 36]);
});
it ('shold give null if array is not array',()=>{
    const result = squareArray(2);
    expect(result).toEqual(null);
});
it ('shold give null if array it\'s given nuthing',()=>{
    const result = squareArray();
    expect(result).toEqual(null);
});