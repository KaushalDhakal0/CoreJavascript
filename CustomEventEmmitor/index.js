class MyCustomEventEmitter {
    constructor() {
      this.events = new Map();
    }
    //Registering Event Listeners.
    on(eventName, cb) {
      if (this.events.has(eventName)) {
        this.events.get(eventName).push(cb);
      } else {
        this.events.set(eventName, [cb]);
      }
    }
    //Emitting Events
    emit(callbck, ...rest) {
      rest.forEach(eventX =>{
        if(this.events.has(eventX)){
            this.events.get(eventX).forEach(callBkLists => {
              callBkLists(null,eventX)
            })
        }else{
            callbck(`No any listeners for event: ${eventX}`,null)
        }
      });
    }
    //Removing Event Listeners
    off(eventName, cb){
      if(this.events.has(eventName)){
        this.events.delete(eventName);
      }else{
        cb('No any registered Events for ', eventName);
      }
    }
    //Listeners will listen for request Only One time.
    once(eventName, cb) {
      const wrapper = (...args) => {
        cb(...args);
        this.off(eventName, wrapper);
      }; 
      this.on(eventName, wrapper);
    }
    //retrieving all registered
    getAllListeners(){
      return this.events;
    }
  }
  
  const myEvent = new MyCustomEventEmitter();
  
  myEvent.once('msg', (err, data) => {
    if(err){
        console.log("Failed to register Message");
    }else{
        console.log("This runs only once");
    }
  });
  myEvent.on('idle', (err, data) => {
    if(err){
        console.log("Failed to register idle");
    }else{
        console.log("Message registered..for eventName:",data);
    }
  });
  console.log("All Listeners ===>",myEvent.getAllListeners());
  myEvent.emit((err) =>{
    if(err){
        console.log(err);
    }
  },'msg','msg','idle', 'idle');

  