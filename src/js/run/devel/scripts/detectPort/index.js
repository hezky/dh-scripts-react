import checkToPortAndRun from "./checkToPortAndRun";

const DEFAULT_PORT = 3000;

const detectPort = (runFce) => {
  const portToCheck = DEFAULT_PORT;
  checkToPortAndRun(portToCheck, runFce);
};

export default detectPort;
