import { logProc } from "utils/log";

const runWithPort = (port, runFce) => {
  logProc(`detect free port : ${port}`);
  runFce(port);
};

export default runWithPort;
