import {getSum} from './index.js';
it ('should get sum of even numbers',()=>{
    const result = getSum(1,3);
    expect(result).toEqual(2);
});
it ('should return 0, if numbers are odd',()=>{
    const result = getSum(3);
    expect(result).toEqual(0);
});
it ('should return 0, if ther is a string',()=>{
    const result = getSum('3');
    expect(result).toEqual(0);
});