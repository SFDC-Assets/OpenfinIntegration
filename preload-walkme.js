// Do not inject into iFrames
if (window !== window.top) {
  return;
}
const walkmeUrl =
  "https://cdn.walkme.com/users/bb2caab25e424d66a5e69e08aff6e93c/test/walkme_bb2caab25e424d66a5e69e08aff6e93c_https.js";

window.addEventListener("DOMContentLoaded", function () {
  var walkme = document.createElement("script");
  walkme.type = "text/javascript";
  walkme.async = true;
  walkme.src = walkmeUrl;
  document.head.prepend(walkme);
  window._walkmeConfig = { smartLoad: true };
});
