class MyCustomEventEmitter {
    constructor() {
      this.events = new Map();
    }
  
    on(eventName, cb) {
      if (this.events.has(eventName)) {
        this.events.get(eventName).push(cb);
      } else {
        this.events.set(eventName, [cb]);
      }
    }
  
    emit(callbck, ...rest) {
      rest.forEach(eventX =>{
        if(this.events.has(eventX)){
            this.events.get(eventX).forEach(callBkLists => {
              callBkLists(null,eventX)
            })
        }else{
            callbck(`No any listeners for event ==> ${eventX}`,null)
        }
      });
    }
  }
  
  const myEvent = new MyCustomEventEmitter();
  
  myEvent.on('msg', (err, data) => {
    if(err){
        console.log("Failed to register Message");
    }else{
        console.log("Message registered...1",data);
    }
  });
  myEvent.on('msg', (err, data) => {
    if(err){
        console.log("Failed to register Message");
    }else{
        console.log("Message registered...2",data);
    }
  });
  
  myEvent.on('hunger', (err, data) => {
    if(err){
        console.log("Failed to register Hunger");
    }else{
        console.log("Hunger registered..1.",data);
    }
  });
  myEvent.on('hunger', (err, data) => {
    if(err){
        console.log("Failed to register Hunger");
    }else{
        console.log("Hunger registered..2.",data);
    }
  });
  
  myEvent.emit((err) =>{
    if(err){
        // throw new Error(err);
        console.log(err);
    }
  },'hunger','msg','sd');

  