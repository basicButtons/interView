var addStrings = function(num1, num2) {
    let len1 = num1.length,
        len2 = num2.length,
        pointer1 = num1.length - 1,
        pointer2 = num2.length - 1,
        carry = 0,
        position = 0,
        res = 0
    while(pointer1 >= 0 || pointer2 >= 0 || carry > 0){
        let number1 = parseInt(num1.charAt(pointer1 --)) || 0
        let number2 = parseInt(num2.charAt(pointer2 --)) || 0
        let cur = (number1+number2+carry)%10
        carry = parseInt((carry + number1 + number2) / 10)
        res = Math.pow(10,position ++)*cur + res
        console.log(res)
    }
    return res
};
console.log(addStrings("11","123"))

