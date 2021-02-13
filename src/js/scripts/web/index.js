import detectPort from "./detectPort";
import startApp from "./startApp";

const run = () => {
  const callbackDetectPort = startApp;
  detectPort(callbackDetectPort);
};

export { run };
