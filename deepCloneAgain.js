let deepClone = (target,map = new WeakMap())=>{
    if (typeof source !== "object") {
        return null;
    }
    
    let result = Array.isArray(target) ? [] : {}
    if(map.has(source)) return map.get(source)
    map.set(source,result)

    Object.keys(target).forEach((key)=>{
        if(typeof target[key] === "object" && target[key] !== null){
            result[key] = deepClone(target[key],map)
        }else{
            result[key] = target[key]
        }
    })
    return result
}