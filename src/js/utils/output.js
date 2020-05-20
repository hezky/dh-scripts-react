import chalk from "chalk";

const NEWLINE = "\n";
const DOUBLE_NEWLINE = `${NEWLINE}${NEWLINE}`;

const clearConsole = () => {
  process.stdout.write("\x1bc");
};

const errorConsole = (str) => chalk.bold.red(`ERROR   : ${str}`);
const warningConsole = (str) => chalk.keyword("orange")(`WARNING : ${str}`);

export { DOUBLE_NEWLINE, NEWLINE, clearConsole, errorConsole, warningConsole };
