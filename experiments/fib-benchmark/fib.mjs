import * as squint_core from 'squint-cljs/core.js';
var fib = function (n) {
if ((n <= 1)) {
return n} else {
return (fib((n - 1)) + fib((n - 2)))};

};

export { fib }
