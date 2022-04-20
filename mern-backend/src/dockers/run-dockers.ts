import execUtilsInstance from "../utils/exec-utils";

const {exec} = require('child_process');

const runDockers = () => {
    const commandLine = "docker start mongo";
    execUtilsInstance.execute(commandLine);
}

runDockers();