import { getRemoteStatus } from "../services/RemoteConfigService.js";

export async function runAppChecks(APP_VERSION) {
  const status = await getRemoteStatus();

  if (status.app_enabled === false) {
    return { status: "BLOCKED", message: status.message };
  }

  if (status.force_update && APP_VERSION !== status.latest_version) {
    return { status: "FORCE_UPDATE", message: status.message };
  }

  if (APP_VERSION !== status.latest_version) {
    return { status: "UPDATE_AVAILABLE", message: status.message };
  }

  return { status: "OK" };
}