let debounce = (fn,delay)=>{
    let timer = null
    return function(){
        setTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },delay)
    }
}
let throttle = (fn,delay) => {
    let run = true
    return  function(){
        if(!run){
            return
        }
        run = false
        let arg = arguments
        setTimeout(()=>{
            fn(...arguments)
            run = true
        },delay)
    }
    
}