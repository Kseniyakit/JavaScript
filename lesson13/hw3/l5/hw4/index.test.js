import {compareSums} from './index.js';
it ('should give true', () =>{
    const result = compareSums(2,5,1,2);
    expect(result).toEqual(true);
});
it ('should give false', () =>{
    const result = compareSums(1,2,1,20);
    expect(result).toEqual(false);
});
it ('should give false in case when it\'s given nuthing', () =>{
    const result = compareSums();
    expect(result).toEqual(false);
});