import {exec} from "child_process";

class ExecUtils {
    public execute(commandLine: string) {
        exec(commandLine, (error: any, stdout: string, stderr: string) => {
            console.log(`executing '${commandLine}' ...`);
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }

            console.log(`stdout: ${stdout}`);
        })
    }
}

const execUtilsInstance = new ExecUtils();
export default execUtilsInstance;