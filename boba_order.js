"use strict"
//get link img and alt img
var imgOrder = document.getElementById("img_order");
var imgSource = localStorage.getItem("imgSource");
var imgName = localStorage.getItem("imgName");
console.log(imgName);
imgOrder.setAttribute("src", imgSource);
document.getElementById("name_product").innerText = imgName;

//create event button
var button = document.getElementById("button_AddToCart");
var getItems = button.addEventListener("click", Order);

var order_t = function (product, quantity, price, totalCost) {
    this.product = product;
    this.quantity = quantity;
    this.price = price;
    this.totalCost = totalCost;
}


//2.
// call order
window.addEventListener("load",function(){
    alert("Please, order topping for your drink!");
});

function Order() {
    var data;
    if ("orderData" in localStorage)
        data = JSON.parse(localStorage.getItem("orderData"));
    else
        data = new Array();

    var product = GetProduct();
    //3
    var quantity = parseInt(document.querySelector('select[name="qty"]').value);
    var price = CalcPrice();
    var totalCost = price * quantity;

    var orderItem = new order_t(product, quantity, price, totalCost);
    data.push(orderItem);

    console.log(data);
    localStorage.setItem("orderData", JSON.stringify(data));
    alert("Your item is added! Please, you go back to get more items or go to Payment");
}

// get products that customer order
function GetProduct() {
    //3.
    var name_product = document.getElementById("name_product").innerText;
 
    //3.
    var toppingcheckboxs = document.querySelectorAll('input[class="topping_order"]');
    for (var i = 0; i < toppingcheckboxs.length; i++) {
        if (toppingcheckboxs[i].checked == true) {
            name_product += " ," + toppingcheckboxs[i].name;
        }
    }

    //add sweet
    var sweet_radiobuttons = document.getElementsByClassName("sweet_order");
    for (var i = 0; i < sweet_radiobuttons.length; i++) {
        if (sweet_radiobuttons[i].checked == true) {
            name_product += " ," + sweet_radiobuttons[i].name;
        }

    }

    //add size
    var size_radiobuttons = document.getElementsByClassName("size_order");
    for (var i = 0; i < size_radiobuttons.length; i++) {
        if (size_radiobuttons[i].checked == true) {
            name_product += " ," + size_radiobuttons[i].name;
        }
    }
    return name_product;
}

// Calc Price
function CalcPrice() {
    var subTotal = 0;
    //add topping
    var toppingcheckboxs = document.getElementsByClassName("topping_order");
    var toppingValue;
    for (var i = 0; i < toppingcheckboxs.length; i++) {
        if (toppingcheckboxs[i].checked == true) {
            toppingValue = toppingcheckboxs[i].value;
            subTotal += parseFloat(toppingValue);
        }
    }

    //add sweet
    var sweet_radiobuttons = document.getElementsByClassName("sweet_order");
    var sweetValue;
    for (var i = 0; i < sweet_radiobuttons.length; i++) {
        if (sweet_radiobuttons[i].checked == true) {
            sweetValue = sweet_radiobuttons[i].value;
        }

    }

    //add size
    var size_radiobuttons = document.getElementsByClassName("size_order");
    var sizeValue;
    for (var i = 0; i < size_radiobuttons.length; i++) {
        if (size_radiobuttons[i].checked == true) {
            sizeValue = size_radiobuttons[i].value;
            subTotal += parseFloat(sizeValue);
        }
    }
    return subTotal;
}
