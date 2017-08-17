/**
 * Created by TengShinan on 11/8/17.
 */

function placeAnOrder(orderNumber) {
    console.log("Customer order:", orderNumber);

    cookAndDeliverFood(function () {
        console.log("Delivered food order:", orderNumber);
    })
}

// Simulate a 5s operation
function cookAndDeliverFood(callBack) {
    setTimeout(callBack, 5000);
}

// Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);