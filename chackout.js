
    function sub(){

        let val=document.getElementById("con").value;
        if(val.length<10){
            alert("enter right contect number")
        }
        else{

        
        alert("Your order is accepted")
        setTimeout( function(){
            alert("Your order is being cooked ")
        },3000)
        setTimeout( function(){
            alert("Your order is ready ")
        },8000)
        setTimeout( function(){
            alert("Order out for delivery ")
        },10000)
        setTimeout( function(){
            alert("Order delivered ")
        },12000)
    }
    }