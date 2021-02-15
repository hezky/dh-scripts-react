import { utilsPackageJson } from "dh-scripts-base";
import { CWD } from "dh-scripts-base/lib/js/consts/dirs";

const DIR_NODE_MODULES = "node_modules";

const CWD_NODE_MODULES = `${CWD}/${DIR_NODE_MODULES}`;

const STATIC_DIR = `${CWD_NODE_MODULES}/${utilsPackageJson.name}/static`;
const STATIC_INDEX_HTML = `${STATIC_DIR}/index.html`;

export * from "dh-scripts-run/lib/js/consts/dirs";
export { STATIC_DIR, STATIC_INDEX_HTML };
