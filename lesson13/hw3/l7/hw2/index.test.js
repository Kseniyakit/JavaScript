import {reverseArray} from './index.js';

it ('should give reverse array', ()=>{
    const result = reverseArray([2, 3, 4, 5, 6]);
    expect(result).toEqual([6, 5, 4, 3, 2]);
});
it ('should give null if there is no array', ()=>{
    const result = reverseArray(2);
    expect(result).toEqual(null);
});
it ('should give null if there is nothing', ()=>{
    const result = reverseArray();
    expect(result).toEqual(null);
});