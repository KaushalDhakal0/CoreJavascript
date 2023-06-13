function scheduleWork() {
    Promise.resolve().then(() => console.log('m1'));
    Promise.resolve().then(() => console.log('m2'));
    setTimeout(() => console.log('t1'), 0);
    setTimeout(() => {
      console.log('t2');
      Promise.resolve().then(() => console.log('m6'));
      setTimeout(() => console.log('t3'), 0);
    }, 0);
  };
  const btn = document.getElementById('btn');
  btn.addEventListener('click', scheduleWork); 
  //Order when button is clicked through page.by clicking on button ====> m3, m4, m5, m1, m2, t1, t2, m6, t3
  //If we click button programmatically it will act Synchronously as schedule work will go to callStack directly instead of Task Queue.
  // btn.click(); //===>m1,m2,m3,m4,m5,t1,t2,m6,t3
  Promise.resolve().then(() => console.log('m3'));
  Promise.resolve().then(() => console.log('m4'));
  Promise.resolve().then(() => console.log('m5'));
  