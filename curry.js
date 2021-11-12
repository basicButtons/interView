function curry(fn,...args){
    const storeArgs = args
    console.log(storeArgs)
    return function(...newArgs){
        if(newArgs.length > 0){
            storeArgs.push(...newArgs)
            return curry(fn,...storeArgs)
        }else{
            return fn(...storeArgs)
        }
    }
}
let tem_add =(...args)=>{
    console.log(args)
    return args.reduce( (a,b)=> a+b )
}
let add = curry(tem_add)
let res = add(1)(2,3)(4,5,6)(7,8,9,10)(1,2,3,4,5)
console.log(res())
