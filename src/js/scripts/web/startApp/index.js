import express from "express";

import setupApp from "./setupApp";
import setupCompiler from "./setupCompiler";
import setupRequests from "./setupRequests";
import startApp from "./startApp";

const server = (port) => {
  const app = express();
  setupCompiler();
  setupRequests();
  setupApp(app);
  startApp(app, port);
};

export default server;
