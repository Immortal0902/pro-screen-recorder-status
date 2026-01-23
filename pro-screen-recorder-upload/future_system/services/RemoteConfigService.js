import meta from "../config/app_config.json";

export async function getRemoteStatus() {
  try {
    const res = await fetch(meta.remote_endpoint);
    return await res.json();
  } catch {
    return { app_enabled: true };
  }
}