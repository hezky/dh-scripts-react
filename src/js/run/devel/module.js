import detectPort from "./scripts/detectPort";
import startApp from "./scripts/startApp";

const run = () => {
  const callbackDetectPort = startApp;
  detectPort(callbackDetectPort);
};

export default run;
