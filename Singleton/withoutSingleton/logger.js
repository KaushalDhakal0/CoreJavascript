class MainLogger{
    constructor(){
        
        this.logs = [];
        
    }
    setLog(msg){
        
        this.logs.push(msg);
        console.log("logs length==>",this.logs.length);
    }
    getCountOfLogs(){
        console.log(`The value of Log Count is ==> ${this.logs.length} <==`)
    }
}

const logger = new MainLogger();
const logger1 = new MainLogger();
// console.log(logger == logger1);
logger.setLog("sss");
// logger.getCountOfLogs();
// MainLogger.getCountOfLogs();
logger1.setLog("WWW");
logger.setLog("sss1");
logger.setLog("sss2");

// logger1.getCountOfLogs();
// MainLogger.getCountOfLogs();

//Here the problem is every Object has the new instance of logs array.
//In order to share Same logs array to all instances of class MainLogger Singleton design Pattern is used.
