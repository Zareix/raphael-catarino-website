export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
}

export const fadeInSlow = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "ease",
    },
  },
  exit: {
    opacity: 0,
  },
}

export const slideInFromTop = {
  hidden: {
    y: "-50%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
}
