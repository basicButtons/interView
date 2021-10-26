let myNew = function(fn,...rest){
    const thisObj = Object.create(fn.prototype)
    const result = fn.apply(thisObj,rest)
    return typeof result === "object" ? result : thisObj
}

Function.prototype.myCall = function(obj,...rest){
    let self = this 
    obj["exec_function"] = self
    let res = obj["exec_function"](...rest)
    delete obj["exec_function"]
    return res
}

Function.prototype.myApply = function(obj,args){
    let self = this
    obj["exec_function"] = self
    let res = obj["exec_function"](...args)
    delete res["exec_function"]
    return res
}

Function.prototype.myBind = function(context,...args){
    let self = this
    return function(...newArgs){
        return func.apply(this instanceof self ? this : context,[...args,...newArgs])
    }
}

function some(name){
    console.log(this)
    console.log(this.__proto__.__proto__ === Object.prototype)
    this.name = name
}
let res = new some("!231")