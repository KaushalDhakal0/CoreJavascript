function scheduleWork(){
    Promise.resolve().then(()=> console.log("#1 m1"));
    Promise.resolve().then(()=> console.log("#1 m2"));
    setTimeout(() => console.log('#1 t1'),0);
    setTimeout(() => {
        Promise.resolve().then(()=> console.log("#1 m3"));
        Promise.resolve().then(()=> console.log("#1 m4"));
        Promise.resolve().then(() => Promise.resolve().then(()=> console.log('#1 m6')))

    },0);
    setTimeout(() => console.log('#1 t2'),0);
    setTimeout(() => console.log('#1 t3'),0);
    console.log("#1 Main Thread");
}
const btn = document.getElementById('btn');
btn.addEventListener('click', scheduleWork);

//Clicking through button and clicking through program behaves differently.
//btn.click() is handled synchronously and directly pushed to the callstack
btn.click();

Promise.resolve().then(()=> console.log("P1"));
Promise.resolve().then(()=> console.log("P2"));
Promise.resolve().then(()=> console.log("P3"));
console.log('main program');