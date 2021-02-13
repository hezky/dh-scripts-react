import DIRS from "dh-scripts-run/js/consts/dirs";

const PROJECT_NAME = "dh-scripts-web";

const STATIC_DIR = `${DIRS.CWD_NODE_MODULES}/${PROJECT_NAME}/static`;
const STATIC_INDEX_HTML = `${STATIC_DIR}/index.html`;

export * from "dh-scripts-run/consts/dirs";
export { STATIC_DIR, STATIC_INDEX_HTML };
