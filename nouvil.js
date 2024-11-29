novil=document.getElementById("novil")
stars=document.getElementById("stars")
moon=document.getElementById("moon")
mountains3=document.getElementById("mountains3")
mountains4=document.getElementById("mountains4")
river=document.getElementById("river")
boat=document.getElementById("boat")
let body=document.querySelector("body")
window.onscroll=function(){
    let value=scrollY
    stars.style.left=value +"px"
    moon.style.top=value *3 +"px"
    mountains3.style.top=value *2 +"px"
    mountains4.style.top=value *1.5+"px"
    river.style.top=value +"px"
    boat.style.top=value +"px"
    boat.style.left=value *3+"px"
    novil.style.fontSize=value +"px"
    if(scrollY>=67){
        novil.style.fontSize="67px"
    }
    if(scrollY>=127){
      body.style.background="linear-gradient(#2c44b3,#8b4a77)"
    }else{
        body.style.background="linear-gradient(#200016,#910364)"
    }
}