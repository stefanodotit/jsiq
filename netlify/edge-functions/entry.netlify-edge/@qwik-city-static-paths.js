const staticPaths = new Set(["/_headers","/favicon.svg","/hearth.gif","/manifest.json","/old_internet.gif","/q-manifest.json","/service-worker.js","/sitemap.xml"]);
function isStaticPath(p) {
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  return false;
}
export { isStaticPath };