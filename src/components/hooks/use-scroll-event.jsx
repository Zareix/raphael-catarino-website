const useScrollEvent = () => {
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const preventDefaultForScrollKeys = (e) => {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  // call this to Disable
  const disableScroll = () => {
    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
            return supportsPassive;
          },
        })
      );
    } catch (e) {}

    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  };

  // call this to Enable
  const enableScroll = () => {
    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
            return supportsPassive;
          },
        })
      );
    } catch (e) {}

    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  };

  return { enableScroll, disableScroll };
};

export default useScrollEvent;
