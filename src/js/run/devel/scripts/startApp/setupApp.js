import { STATIC_INDEX } from "consts/dirs";
import { logProc } from "utils/log";

const setupApp = (app) => {
  logProc("setup app");
  app.get("*", (req, res) => {
    res.sendFile(STATIC_INDEX);
  });
};

export default setupApp;
