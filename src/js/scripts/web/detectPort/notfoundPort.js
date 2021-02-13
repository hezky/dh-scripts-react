import prompt from "prompt";

import { DOUBLE_NEWLINE, NEWLINE, clearDisplay, logWarning } from "utils/log";

import checkToPortAndRun from "./checkToPortAndRun";

const QUESTION = (oldPort) =>
  `${NEWLINE}${logWarning(
    `Something is already running on port ${oldPort}.`
  )}${DOUBLE_NEWLINE}Would you like to run the app on another port instead?`;

const START_WITH_OTHER_PORT__PROMPT_PORT_SCHEMA = (port) => ({
  properties: {
    port: {
      pattern: /^[0-9]+$/,
      message: "Port must be a number",
      required: true,
      default: port,
    },
  },
});

const notfoundPort = (oldPort, newPort) => {
  clearDisplay();
  const question = QUESTION(oldPort);
  console.log(question);
  prompt.start();
  const schema = START_WITH_OTHER_PORT__PROMPT_PORT_SCHEMA(newPort);
  prompt.get(schema, (err, result) => {
    err && console.error(err);
    console.log("... ", result);
    checkToPortAndRun(result.port);
  });
};

export default notfoundPort;
