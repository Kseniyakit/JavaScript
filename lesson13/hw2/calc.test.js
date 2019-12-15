import { calc } from './calc.js';
it ('should sum two numbers', () =>{
    const result = calc ('2 + 3');
    expect(result).toEqual('2 + 3 = 5');
});
it ('should substract two numbers', () =>{
    const result = calc ('3 - 2');
    expect(result).toEqual('3 - 2 = 1');
});
it ('should multiply two numbers', () =>{
    const result = calc ('3 * 2');
    expect(result).toEqual('3 * 2 = 6');
});
it ('should divide two numbers', () =>{
    const result = calc ('6 / 2');
    expect(result).toEqual('6 / 2 = 3');
});
it ('should take only a string', () =>{
    const result = calc (25);
    expect(result).toEqual(null);
});