const ACTUAL_PCKG_NAME = "@dh-scripts/react";
const CWD = process.cwd();

const isScriptsReact = process.env.isScriptsReact;

// -----------------------------------------------------------------------------
// webpack
const FILE_WEBPACK_DEVELOPMENT_APP = "development.app.js";
const FILE_WEBPACK_DEVELOPMENT_MOD = "development.mod.js";
const FILE_WEBPACK_PRODUCTION = "production";
const DIR_CONFIG_WEBPACK = "config/webpack";

let WEBPACK_CONFIG;
if (isScriptsReact) {
  WEBPACK_CONFIG = `${CWD}/${DIR_CONFIG_WEBPACK}`;
} else {
  // {cwd}/node_modules/{actualPckg}/
  WEBPACK_CONFIG = `${CWD}/node_modules/${ACTUAL_PCKG_NAME}/${DIR_CONFIG_WEBPACK}`;
}

const WEBPACK_CONFIG_DEVELOPMENT_APP = `${WEBPACK_CONFIG}/${FILE_WEBPACK_DEVELOPMENT_APP}`;
const WEBPACK_CONFIG_DEVELOPMENT_MOD = `${WEBPACK_CONFIG}/${FILE_WEBPACK_DEVELOPMENT_MOD}`;
const WEBPACK_CONFIG_PRODUCTION = `${WEBPACK_CONFIG}/${FILE_WEBPACK_PRODUCTION}`;
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// static
const DIR_STATIC = "static";
let STATIC_INDEX;
if (isScriptsReact) {
  // {cwd}/static/index.html
  STATIC_INDEX = `${CWD}/${DIR_STATIC}/index.html`;
} else {
  // {cwd}/node_modules/{actualPckg}/static/index.html ===
  STATIC_INDEX = `${CWD}/node_modules/${ACTUAL_PCKG_NAME}/${DIR_STATIC}/index.html`;
}
// -----------------------------------------------------------------------------

export * from "@dh-scripts/run/lib/js/consts/dirs";
export {
  WEBPACK_CONFIG_DEVELOPMENT_APP,
  WEBPACK_CONFIG_DEVELOPMENT_MOD,
  WEBPACK_CONFIG_PRODUCTION,
  STATIC_INDEX,
};
