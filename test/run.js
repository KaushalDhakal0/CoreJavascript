function scheduleWork() {
    Promise.resolve().then(() => console.log('m1'));
    Promise.resolve().then(() => console.log('m2'));
    setTimeout(() => console.log('t1'), 0);
    setTimeout(() => {
      console.log('t2');
      Promise.resolve().then(() => console.log('m6'));
      setTimeout(() => console.log('t3'), 0);
    }, 0);
  }
  
  Promise.resolve().then(() => console.log('m3'));
  Promise.resolve().then(() => console.log('m4'));
  Promise.resolve().then(() => console.log('m5'));
  const btn = document.getElementById('btn');
  btn.addEventListener('click', scheduleWork);  