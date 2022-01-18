const useScrollEvent = () => {
  // call this to Disable
  function disableScroll() {
    let keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

    function preventDefault(e) {
      e.preventDefault()
    }

    function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        preventDefault(e)
        return false
      }
    }

    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true
            return supportsPassive
          },
        })
      )
    } catch (e) {}

    let wheelOpt = supportsPassive ? { passive: false } : false
    let wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel"

    window.addEventListener("DOMMouseScroll", preventDefault, false) // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt) // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false)
  }

  // call this to Enable
  function enableScroll() {
    let keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

    function preventDefault(e) {
      e.preventDefault()
    }

    function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        preventDefault(e)
        return false
      }
    }

    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true
            return supportsPassive
          },
        })
      )
    } catch (e) {}

    let wheelOpt = supportsPassive ? { passive: false } : false
    let wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel"

    window.removeEventListener("DOMMouseScroll", preventDefault, false)
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
    window.removeEventListener("touchmove", preventDefault, wheelOpt)
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false)
  }

  return { enableScroll, disableScroll }
}

export default useScrollEvent
