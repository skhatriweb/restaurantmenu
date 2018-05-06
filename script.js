var name = "Indian Heaven";
var order = [];


window.addEventListener('DOMContentLoaded', function () {

    updateOrderList();
    //listening click on cancel link to cancel order//
    var linkCancel = document.querySelector("#lnkStartOver");
    linkCancel.addEventListener("click", function () {
        var confirmation = confirm("Are you sure ? Do you want to Cancel order ?");

        if (confirmation) {
            window.order = [];
            updateOrderList();
        } else {

        }
    });

    var meals = document.querySelectorAll('.meal');
    
    var addToOrder=function(){
        var item={
            title:this.dataset.title,
            price:this.dataset.price
        };
        order.push(item);
        updateOrderList();
       
    }
    function updateOrderList(){

        var html="";
        var ul=document.querySelector('#cart ul');
        for(var i=0;i<order.length;i++){
            html = html + '<li>'+ order[i].title +' '+ order[i].price +'</li>';             
        }
        ul.innerHTML=html;
        var cart=document.querySelector("#cart");
        if(order.length == 0){
            cart.style.backgroundColor="grey";
        }else{
            cart.style.backgroundColor="#006";
        }
    }
    for (var i = 0; i < meals.length; i++) {

       meals[i].addEventListener('click',addToOrder);
    }


})




