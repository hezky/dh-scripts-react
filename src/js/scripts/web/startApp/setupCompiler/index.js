import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import { CWD_NM_CONFIG_WEBPACK_DEVELOPMENT_MOD } from "consts/dirs";
import { logProc } from "utils/log";

import compilerError from "./compilerError";

const setupCompiler = (app) => {
  logProc("setup compiler");
  const webpackConfig = require(CWD_NM_CONFIG_WEBPACK_DEVELOPMENT_MOD);
  const compiler = webpack(webpackConfig, compilerError);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(webpackHotMiddleware(compiler));
};

export default setupCompiler;
