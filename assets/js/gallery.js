// Include Lightbox
import PhotoSwipeLightbox from "./photoswipe-lightbox.esm.js";

const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: "#gallery--getting-started",

  // Elements within gallery (slides)
  children: "a",

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import("./photoswipe.esm.js"),
});
lightbox.init();
