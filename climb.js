var climbStairs = function (n) {
    let a = b = 1
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b]
    }
    return a
};
console.log(climbStairs(5))