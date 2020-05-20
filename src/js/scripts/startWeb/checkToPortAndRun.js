import detectPort from "detect-port";

import notfoundPort from "./notfoundPort";
import runWithPort from "./runWithPort";

const checkToPortAndRun = (portToCheck) => {
  portToCheck = portToCheck * 1;
  detectPort(portToCheck).then((port) => {
    try {
      if (port === portToCheck) {
        runWithPort(port);
      } else {
        notfoundPort(portToCheck, port);
      }
    } catch (e) {
      console.error(e);
    }
  });
};

export default checkToPortAndRun;
