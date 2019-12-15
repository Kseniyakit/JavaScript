import {getAdults} from './index.js';
it ('should give adult users', ()=>{
    const result = getAdults({
        'John Doe': 19,
         'Tom': 17,
          'Bob': 18
    } );
    expect(result).toEqual({
        'John Doe': 19,
         Bob: 18})
});
it ('should give empty object, if there aren\'t such users', ()=>{
    const result = getAdults({
        'John Doe': 5,
         'Tom': 7,
          'Bob': 8
    } );
    expect(result).toEqual({});
});
it ('should give empty object, if there is nothing', ()=>{
    const result = getAdults();
    expect(result).toEqual({});
});