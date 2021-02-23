import { logError, logWarning } from "utils/log";

const compilerError = (err, stats) => {
  if (err) {
    logError(err.stack || err);
    err.details && logError(err.details);
    return;
  }
  const info = stats.toJson();
  stats.hasErrors() && logError(info.errors);
  stats.hasWarnings() && logWarning(info.warnings);
};

export default compilerError;
