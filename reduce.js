Array.prototype.myReduce = function(func,initialValue){
    let arr = this
    let base = typeof initialValue === "undefined" ? this[0] : initialValue
    let startPoint = typeof initialValue === "undefined" ? 0 : 1
    for(let i = startPoint;i<this.length;i++){
        base = func(base , this[i], arr)
    }
    return base
}