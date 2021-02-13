import { logError, logInfo } from "utils/log";

const startApp = (app, port) => {
  app.listen(port, (error) => {
    if (error) {
      logError(error);
    } else {
      logInfo(`listening on port : ${port}`);
      logInfo(`open up "http://localhost:${port}" in your browser`);
    }
  });
};

export default startApp;
