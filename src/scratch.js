export const fibonacci = (num, start = 0) => {
  let acc = [0, 1];

  function fib(fibNum = 2) {
    const truncated = start === 1 ? acc.slice(2) : acc.filter(o => o >= start);

    if (truncated.length > num - 1) {
      return truncated;
    } else {
      if (fibNum <= 1) {
        acc.push(fibNum);
      } else {
        acc.push(acc[fibNum - 1] + acc[fibNum - 2]);
      }

      return fib(fibNum + 1);
    }
  }

  return fib();
};

export const fiboEvenSum = n => {
  const nums = fibonacci(n, 2);

  return nums.filter(o => o % 2 === 0).reduce((acc, o) => acc + o);
};

export default fibonacci;
