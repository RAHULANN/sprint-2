var sum=0
var su=document.getElementById("sum")
var di=document.getElementById("item")
var d=JSON.parse(localStorage.getItem("cart"))||[]
console.log(d[0])

for(var i=0;i<d.length;i++){
  var dekho=document.createElement("div")
  dekho.id="dekho"
    let img=document.createElement("img")
    img.src=d[i].img;
    let name=document.createElement("h2")
    name.textContent=d[i].name;
    let ret=document.createElement("h3")
    ret.textContent=d[i].ret;
    sum=sum+Number(d[i].ret);
    let delet=document.createElement("button")
    delet.textContent="remove"
    
delet.onclick=function(){
rem(i)
}
    dekho.append(img,name,ret,delet);
  
    di.append(dekho)
}
let suu=document.createElement("h2")
  
  suu.textContent=`total: ${sum}`;
su.append(suu)
function rem(i){
d.slice(i,1)
console.log(i)
localStorage.setItem("cart",JSON.stringify(d))
}

function buy(){
    window.location.href="chackout.html"
}