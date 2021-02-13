import detectPort from "detect-port";

import notfoundPort from "./notfoundPort";
import runWithPort from "./runWithPort";

const checkToPortAndRun = (portToCheck, runFce) => {
  portToCheck = portToCheck * 1;
  detectPort(portToCheck).then((port) => {
    try {
      if (port === portToCheck) {
        runWithPort(port, runFce);
      } else {
        notfoundPort(portToCheck, port);
      }
    } catch (e) {
      console.error(e);
    }
  });
};

export default checkToPortAndRun;
