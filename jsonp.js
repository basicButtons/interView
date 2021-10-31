function jsonp(url,jsonpCallback,success){
    let script = document.createElement("script")
    script.src = url
    script.async = true
    script.type = "text/javascript"
    window[jsonpCallback] = function(data){
        success && success(data)
    }
    document.body.appendChild(script)
}

jsonp("http://localhost:3000/test?callback=callback","callback",function(data){
    console.log(data)
})

xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=state_Change

function state_Change()
{
if (xmlhttp.readyState==4)
  {// 4 = "loaded"
  if (xmlhttp.status==200)
    {// 200 = OK
    // ...our code here...
    }
  else
    {
    
    }
  }
}
xmlhttp.open("GET","http://localhost:3000/test");
xmlhttp.send(null);