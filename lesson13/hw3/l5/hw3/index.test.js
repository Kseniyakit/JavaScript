import {increaser} from './index.js';
it ('should increase first number on second number',() => {
    const result = increaser(2,1);
    expect(result).toEqual(3);
});
it ('should leave the number as it is, if increaser>number',() => {
    const result = increaser(2,3);
    expect(result).toEqual(2);
});
it ('should give undefiend if it\'s given nuthing',() => {
    const result = increaser();
    expect(result).toEqual(undefined);
});

