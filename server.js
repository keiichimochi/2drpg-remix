import { createRequestHandler } from "@remix-run/node";

export default createRequestHandler({
  build: "./build",
  getLoadContext() {
    return {};
  },
});
