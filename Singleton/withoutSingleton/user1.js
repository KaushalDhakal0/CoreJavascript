import MainLogger from "./logger";
// const MainLogger  = require('./logger')
const logger = new MainLogger();

module.exports = {
    userOneImplementation: function (){
        console.log("here");
        logger.setLog("Log 1");
        logger.getCountOfLogs();
    } ,
    hhhhh:function (){
        logger.setLog("LOG33")
    },
}