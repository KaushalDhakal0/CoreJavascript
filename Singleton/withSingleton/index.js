class MainLogger{
    constructor(){
        
        if(!MainLogger.instance){
            this.logs = [];
            MainLogger.instance = this;
        }
        return MainLogger.instance;
        
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
console.log("instance Offf==>",logger instanceof MainLogger);

// logger1.getCountOfLogs();
// MainLogger.getCountOfLogs();

