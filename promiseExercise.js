// 1. What are Promises?
// Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//  2. Importance of Promises:
// a) Promises can help us to write trust worthy code.
// b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
// c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
// d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
// e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.
const cart = ["Shirt", "Pant" , "Shoes", "Apple"];
//CreTE oRDER MUST RETURN A PROMISE WITH DATA OEDER iD

//First way of consuming. with error handling
createOrder(cart).then(orderId => {
    proceedToPayment(orderId).then(paymentID => {
        showPaymentSummary(paymentID).then(finalData => {
            console.log("Data From First Chain ==>",finalData);
        }).catch(err => console.log("=======>>>>>",err));
    }).catch(err => console.log("=======>>>>>",err));
}).catch(err => console.log("=======>>>>>",err));

// second way 
createOrder(cart)
    .then(orderId => {
        return orderId;
    })
    .then(orderId => {
        return proceedToPayment(orderId);
    })
    .then(paymentID =>{
        return showPaymentSummary(paymentID);
    })
    .then(data => {
        console.log("Data From Second Chain====>",data);
    })
    .catch(err => {
        console.log("45:Second Error occured ==>", err);
    })
// console.log("promiseConsumer======>",promiseConsumer);

function createOrder(cart){
    return new Promise((resolve, reject) => {
        if(!validateCart(cart)){
            reject(new Error("Cart not Valid."));
        }
        //Some Logic
        const orderId = "123456";
        if(orderId){
            resolve(orderId);
        }
        
    })
}

function validateCart(cart){
    if(cart.length > 0 ){
        return true;
    }
    return false;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        if(orderId != '123456') reject(new Error("Order ID not valid"));
        //Do some logic here
        paymentDetails = "payment Success";
        resolve(paymentDetails);
    });
}

function showPaymentSummary(paymentDetails){
    return new Promise(function(resolve,reject){
        if(paymentDetails != "payment Success"){
            reject(new Error("Can't Show Summary..."));
        }
        resolve({
            paymentDetails:paymentDetails,
            remainingBalance:1050
        })
    })
}


//seconde way
async function hh(){
    const xxxx  = await createOrder(cart);
    console.log("=====>>>>>",xxxx);
}
const ss =  hh();
console.log("CCCCCC====>",ss);