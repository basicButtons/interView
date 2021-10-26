function debounce(fn,delay){
    let timer = null
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(arguments)
        },delay)
    }
}


const html = document.getElementsByTagName("html")[0]
function setRootSize(){
    console.log("!23123")
    let width = html.clientWidth
    html.setAttribute("style",`font-size:${(width / 720 * 20).toFixed(3)}px`)
}
window.addEventListener("resize",debounce(setRootSize,200))

