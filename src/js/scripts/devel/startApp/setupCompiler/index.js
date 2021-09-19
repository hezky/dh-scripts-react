import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import { WEBPACK_CONFIG_DEVELOPMENT_MOD } from "consts/dirs";
import { logProc } from "utils/log";

const setupCompiler = (app) => {
  logProc("setup compiler");
  const webpackConfig = require(WEBPACK_CONFIG_DEVELOPMENT_MOD);
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(webpackHotMiddleware(compiler));
};

export default setupCompiler;
