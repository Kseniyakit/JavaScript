export function spy(func) {
  
    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, arguments);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }
  function test(a, b) {
    return Math.sqrt(a * a + b * b);
}
const spyTest = spy(test);
spyTest(4, 2);
spyTest(9, 1);
spyTest.calls 
