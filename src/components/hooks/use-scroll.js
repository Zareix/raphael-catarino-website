import { useState, useEffect } from "react"

const useScrolled = (offset) => {
  const [scrolled, setScrolled] = useState(false)
  const scrollOffset = offset ? offset : 140

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > scrollOffset) setScrolled(true)
      else setScrolled(false)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { scrolled }
}

export default useScrolled
