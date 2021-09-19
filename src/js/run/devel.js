import { run } from "scripts/devel";

const lastScriptsRun = process.env.DH_SCRIPTS_RUN;
process.env.DH_SCRIPTS_RUN = "WEB";
run();
process.env.DH_SCRIPTS_RUN = lastScriptsRun;
