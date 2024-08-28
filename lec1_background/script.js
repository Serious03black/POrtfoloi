gsap
  .timeline()
  .to("#z", {
    height: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
  .to("#y", {
    height: "100%",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut,
  })

  .to("#w", {
    height: "100%",
    duration: 2,
    delay: -1.8,
    ease: Expo.easeInOut,
  });
