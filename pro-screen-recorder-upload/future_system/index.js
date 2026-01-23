import { runAppChecks } from "./core/AppController.js";

export async function initFutureSystem(APP_VERSION) {
  return await runAppChecks(APP_VERSION);
}