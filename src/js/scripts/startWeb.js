import checkToPortAndRun from "./startWeb/checkToPortAndRun";

const DEFAULT_PORT = 3000;

const run = () => {
  const portToCheck = DEFAULT_PORT;
  checkToPortAndRun(portToCheck);
};

export { run };
