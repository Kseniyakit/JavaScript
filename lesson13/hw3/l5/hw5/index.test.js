import {findDivCount} from './index.js';
it ('should give 4', ()=>{
    const result = findDivCount(2,8,2);
    expect(result).toEqual(4);
});
it ('should give 0', ()=>{
    const result = findDivCount(2,8,9);
    expect(result).toEqual(0);
});
it ('should give 0', ()=>{
    const result = findDivCount();
    expect(result).toEqual(0);
});