import {pickProps} from './index.js';

it ('should give coincidences in array and object', ()=>{
    const result = pickProps({ a: 'a', '17.1': 17.1, 'John Doe': 'John Doe', '21':21, '3':3 },
    ['a', 17.1, 'John Doe', 13, 45]);
expect(result).toEqual({a: "a", 17.1: 17.1, 'John Doe': "John Doe"});
});
it ('should give empty object if there is no coincidences', ()=>{
    const result = pickProps({ a: 'b', '17.2': 17.1, 'John Dob': 'John Doe', '25':21, '4':3 },
    ['c', 17.5, 'John Dog', 13, 45]);
expect(result).toEqual({});
});
it ('should give empty object if it\'s given nuthing', ()=>{
    const result = pickProps();
expect(result).toEqual(null);
});