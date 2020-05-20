import { run } from "scripts/startWeb.js";

const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "START_WEB";
run();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;
