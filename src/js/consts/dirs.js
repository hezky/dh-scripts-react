import { CWD } from "dh-scripts-base/lib/js/consts/dirs";

const ACTUAL_PCKG_NAME = "dh-scripts-web";
const DIR_NODE_MODULES = "node_modules";

const FILE_WEBPACK_DEVELOPMENT_APP = "development.app.js";
const FILE_WEBPACK_DEVELOPMENT_MOD = "development.mod.js";
const FILE_WEBPACK_PRODUCTION = "production";

// {cwd}/node_modules === CWD_NM
const CWD_NODE_MODULES = `${CWD}/${DIR_NODE_MODULES}`;

// {cwd}/node_modules/{actualPckg} === CWD_NM_ACTUAL
const CWD_NM_ACTUAL = `${CWD_NODE_MODULES}/${ACTUAL_PCKG_NAME}`;

// {cwd}/node_modules/{actualPckg}/config/webpack === CWD_NM_CONFIG_WEBPACK
const CWD_NM_CONFIG_WEBPACK = `${CWD_NM_ACTUAL}/config/webpack`;
// {cwd}/node_modules/{actualPckg}/config/webpack/development.app.js === CWD_NM_CONFIG_WEBPACK_DEVELOPMENT_APP
const CWD_NM_CONFIG_WEBPACK_DEVELOPMENT_APP = `${CWD_NM_CONFIG_WEBPACK}/${FILE_WEBPACK_DEVELOPMENT_APP}`;
// {cwd}/node_modules/{actualPckg}/config/webpack/development.mod.js === CWD_NM_CONFIG_WEBPACK_DEVELOPMENT_MOD
const CWD_NM_CONFIG_WEBPACK_DEVELOPMENT_MOD = `${CWD_NM_CONFIG_WEBPACK}/${FILE_WEBPACK_DEVELOPMENT_MOD}`;
// {cwd}/node_modules/{actualPckg}/config/webpack/production === CWD_NM_CONFIG_WEBPACK_PRODUCTION
const CWD_NM_CONFIG_WEBPACK_PRODUCTION = `${CWD_NM_CONFIG_WEBPACK}/${FILE_WEBPACK_PRODUCTION}`;

// {cwd}/node_modules/{actualPckg}/static === CWD_NM_STATIC
const CWD_NM_STATIC = `${CWD_NM_ACTUAL}/static`;
// {cwd}/node_modules/{actualPckg}/static/index.html ===
const CWD_NM_STATIC_INDEX = `${CWD_NM_STATIC}/index.html`;

export * from "dh-scripts-run/lib/js/consts/dirs";
export {
  CWD_NM_CONFIG_WEBPACK_DEVELOPMENT_APP,
  CWD_NM_CONFIG_WEBPACK_DEVELOPMENT_MOD,
  CWD_NM_CONFIG_WEBPACK_PRODUCTION,
  CWD_NM_STATIC_INDEX,
};
