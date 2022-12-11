import MainLogger from "./logger";
// const MainLogger  = require('./logger')
const logger  = new MainLogger();
module.exports = function userTwoImplementation(){
    logger.setLog("Log 2");
    logger.getCountOfLogs();
}

