"use strict"

//create node tr,td. //3
var paymentTable = document.getElementById("payment_table");
var trTitle = document.createElement("tr");
trTitle.setAttribute("class", "title_table");
var strTitle = '<td><label id="product" for="products">Products</label></td>';
strTitle += '<td><label id="quantity" for="quantity">Quantity</label></td>';
strTitle += '<td><label id ="price" for="price">Price</label></td>';
strTitle += '<td><label id="subtotal" for="subtotal">SubTotal</label></td>';
trTitle.innerHTML = strTitle;
paymentTable.appendChild(trTitle);

//create button
var orderData = JSON.parse(localStorage.getItem("orderData"));
var totalPayment = 0;

for (var i = 0; i < orderData.length; i++) {
    var orderItem = orderData[i];
    var orderProduct = orderItem.product;
    var orderQuantity = orderItem.quantity;
    var orderPrice = orderItem.price;
    var subTotalPayment = orderItem.totalCost;
    totalPayment += subTotalPayment;

    var trOrder = document.createElement("tr");
    var strOrder = '<td><label id="product" for="products">' + orderProduct + '</label></td>';
    strOrder += '<td><label id="quantity" for="quantity">' + orderQuantity + '</label></td>';
    strOrder += '<td><label id ="price" for="price">$' + orderPrice + '</label></td>';
    strOrder += '<td><label id="subtotal" for="subtotal">$' + subTotalPayment + '</label></td>';

    trOrder.innerHTML = strOrder;
    paymentTable.appendChild(trOrder);

    console.log(paymentTable);
}

totalPayment *= 1.1;

var trTotal = document.createElement("tr");
var strOrder = '<td><label id="product" for="products"></label></td>';
strOrder += '<td><label id="quantity" for="quantity"></label></td>';
strOrder += '<td><label id ="price" for="price">Total</label></td>';
strOrder += '<td><label id="subtotal" for="subtotal">$' + Math.round(totalPayment*100)/100 + '</label></td>';
trTotal.innerHTML = strOrder;
paymentTable.appendChild(trTotal);


//create event payment
var payment = document.getElementById("payment");
payment.addEventListener("click", function (e) {
    var data = new Array;
    localStorage.setItem("orderData", JSON.stringify(data));
    alert("Your total payment is " + Math.round(totalPayment*100)/100 + ".Please, insert your card to pay.");
});
