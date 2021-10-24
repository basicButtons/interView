function deepCopy(source,map = new WeakMap()) {
    if (typeof source !== "object") {
        return null;
    }
    let result = Array.isArray(source) ? [] : {};
    if(map.has(source)) return map.get(source)
    map.set(source,result)

    Object.keys(source).forEach((property) => {
        if (typeof source[property] !== "object") {
            result[property] = source[property];
        }
        else {
            result[property] = deepCopy(source[property],map);
        }
        console.log(property)
    });
    return result;
}

var man = {
    name: 'aepkill',
    sex: 'male'
};
man['deefRef'] = man;

console.log(deepCopy(man));