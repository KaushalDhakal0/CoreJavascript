function throttle(){
    setTimeout(displayName,5000,"XXX");
    setInterval(displayName,10000)
}
function displayName(str = "Hello Kaushal"){
    console.log(str);
}
throttle();