Function.prototype.myBind = function(context, ...args){
    if(typeof this !== "function"){
        throw new TypeError("Error")
    }
    let _this = this
    let con = context || window
    return function F(){
        if(this instanceof F){
            return new _this(...args,...arguments)
        }
        return _this.apply(con,args.concat(...arguments))
    }
}