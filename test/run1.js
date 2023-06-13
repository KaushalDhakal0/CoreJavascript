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
function scheduleWorkAgain(){
    Promise.resolve().then(()=> console.log("#2 m1"));
    Promise.resolve().then(()=> console.log("#2 m2"));
    setTimeout(() => console.log('#2 t1'),0);
    setTimeout(() => {
        Promise.resolve().then(()=> console.log("#2 m3"));
        Promise.resolve().then(()=> console.log("#2 m4"));
        Promise.resolve().then(() => Promise.resolve().then(()=> console.log('#2 m6')))

    },0);
    setTimeout(() => console.log('#2 t2'),0);
    setTimeout(() => console.log('#2 t3'),0);
    console.log("#2 Main Thread");
}
const btn = document.getElementById('btn');
const btn2 = document.getElementById('autoBtn');
btn.addEventListener('click', scheduleWork);//p1,p2,p3,"#1 main thread",m1,m2,t1,m3,m4,m6,t2,t3
//Here scheduleWorkAgain goes to taskQueue.If clicked programatically it goes directly to call stack.
btn.addEventListener('click', scheduleWorkAgain);
// btn2.addEventListener('click', scheduleWorkAgain);//#2, main thread,m1,m2,t1,m3,m4,m6,t2,t3

// btn2.addEventListener('click',() => btn.click());

Promise.resolve().then(()=> console.log("P1"));
Promise.resolve().then(()=> console.log("P2"));
Promise.resolve().then(()=> console.log("P3"));
console.log('main program');
