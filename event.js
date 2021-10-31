// 主要是为了验证冒泡是捕获行为的拦截情况

let node = document.getElementById("test")
node.addEventListener("click",
    (event)=>{
        event.stopImmediatePropagation()
        console.log("捕获")
    },
    true
)

node.addEventListener("click",
    (event)=>{
        event.stopImmediatePropagation()
        console.log("冒泡")
    },
    false
)