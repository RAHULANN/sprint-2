

var arr=JSON.parse(localStorage.getItem("cart"))||[];
var d=document.getElementById("menu")
var cart=document.getElementById("cart")
async function butt(){
try{

d.innerHTML=null;

    var inpu=document.getElementById("serch").value;

        var data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inpu}`)

        var data1= await data.json();

        showdata(data1)
        console.log("data",data1)
}
catch(err){
console.log(err)
}
}
function showdata(data1){
var N=data1.meals.length;
    for(var i=0;i<N;i++){
        let div1=document.createElement("div")
   let name=document.createElement("h2");
   name.textContent=data1.meals[i].strMeal;

   let img=document.createElement("img");
   img.src=data1.meals[i].strMealThumb;

   let ret=document.createElement("h5")
   ret.textContent=Math.floor( (Math.random()*(500-100))+100 )  
 
   let bu=document.createElement("button")
   bu.textContent="add to cart"
  
   
   div1.append(name,img,ret,bu)
   d.append(div1)
   bu.onclick=function(){
       add(name,img,ret,bu)
    }
}
}
function add(name,img,ret,bu){
var obj={
    name:name.textContent,
    img:img.src,
    ret:ret.textContent,
    
}
arr.push(obj);
cart.textContent=arr.length
localStorage.setItem("cart",JSON.stringify(arr))

}
function goto(){
window.location.href="cart.html"
}