/// Configures client to reload when a change is made to the source code

// @ts-ignore
if(ENVIRONMENT === "development") {
  new EventSource("/esbuild").addEventListener("change", () => location.reload());
}
