(() => {
  const videos = Array.from(document.querySelectorAll(".research-video"));

  if (videos.length === 0) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const visibility = new WeakMap();

  const syncPlayback = (video) => {
    const shouldPlay =
      !reduceMotion.matches &&
      !document.hidden &&
      visibility.get(video);

    if (!shouldPlay) {
      video.pause();
      return;
    }

    video.muted = true;
    const playRequest = video.play();

    if (playRequest !== undefined) {
      playRequest.catch(() => {
        // The poster remains visible if a browser declines automatic playback.
      });
    }
  };

  const syncAll = () => videos.forEach(syncPlayback);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target, entry.isIntersecting);
          syncPlayback(entry.target);
        });
      },
      { rootMargin: "0px", threshold: 0.05 },
    );

    videos.forEach((video) => {
      visibility.set(video, false);
      observer.observe(video);
    });
  } else {
    videos.forEach((video) => visibility.set(video, true));
    syncAll();
  }

  document.addEventListener("visibilitychange", syncAll);

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", syncAll);
  } else {
    reduceMotion.addListener(syncAll);
  }
})();
