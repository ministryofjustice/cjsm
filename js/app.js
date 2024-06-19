/**
 * Using video.js to normalise video function and controls
 */
if (typeof videojs === "function") {
  videojs('cjsm-video', {
    autoplay: 'muted'
  })
}
