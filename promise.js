class myPromise{
    constructor(){
        let executor = arguments[0]
        this.reason = null
        this.result = null
        this.status = "PENDING"
        this.successList = []
        this.rejectList = []
        this.resolve = (result)=>{
            if(value instanceof Promise){
                return value.then(this.resolve,this.reject)
            }
            setTimeout(()=>{
                if(this.status === "PENDING"){
                    this.value = result
                    this.status = "FULFILLED"
                    this.successList.forEach(fn => fn.call(this,this.result))
                }
            })
        }
        this.reject = (reason) =>{
            if(value instanceof Promise){
                return value.then(this.resolve,this.reject)
            }
            setTimeout(()=>{
                if(this.status === "PENDING"){
                    this.value = result
                    this.status = "REJECTED"
                    this.rejectList.forEach(fn => fn.call(this,this.reason))
                }
            })
        }
        executor(this.resolve,this.reject)
    }
    then(onSuccess,onReject){

        onSuccess = typeof onSuccess === "function" ? onSuccess : data => data
        onReject = typeof onReject === "function" ? onReject : error => {throw error}

        if(this.status === "PENDING"){
            return promise2 = new myPromise((resolve,reject)=>{
                this.successList.push(()=>{
                    try{
                        let result = onSuccess(this.result)
                        resolve(result)
                    }catch(e){
                        reject(e)
                    }
                })
                this.rejectList.push(()=>{
                    try{
                        let result = onReject(this.result)
                        resolve(result)
                    }catch(e){
                        reject(e)
                    }
                })
            })
        }
        if(this.status === "FULFILLED"){
            return promise2 = new myPromise((resolve,reject)=>{
                setTimeout(()=>{
                    try{
                        let result = onSuccess(this.value)
                        resolve(result)
                    }catch(e){
                        reject(e)
                    }
                })
            })
        }
        if(this.status === "REJECTED"){
            // onReject(this.reason)
            return promise2 = new myPromise((resolve,reject) => {
                setTimeout(()=>{
                    try{
                        let result = onReject(this.reason)
                        resolve(result)
                    }catch(e){
                        reject(e)
                    }
                })
            })
        }
    }

    catch(onReject){
        return this.then(null,onReject)
    }
}
myPromise.resolve = (value)=>{
    return new Promise((resolve,reject)=>{
        resolve(value)
    })
}
myPromise.reject = (value)=>{
    return new Promise((resolve,reject)=>{
        reject(value)
    })
}

myPromise.all(promiseArray=>{
    if(!Array.isArray(promiseArray)){
        throw new TypeError("The arguments must be an array")
    }
    return new myPromise((resolve,reject)=>{
        let resultList = []
        const length = promiseArray.length
        for(let i = 0;i<length;i++){
            promiseArray[i].then(data=>{
                resultList.push(data)
                if(resultList.length === length){
                    resolve(resultList)
                }
            },reject)
        }
    })
})

myPromise.race(promiseArray=>{
    if(!Array.isArray(promiseArray)){
        throw new TypeError("The arguments must be an array")
    }
    return new myPromise((resolve,reject)=>{
        try{
            promiseArray.forEach(promise => promise.then(resolve,reject))
        }catch(e){
            reject(e)
        }
    })
})