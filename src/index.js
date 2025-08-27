module.exports = function reverse(n) {
  const a = n < 0 ? n * -1 : n;
  return a.toString().split('').reverse().join('');
};
