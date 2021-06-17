import React, { useState } from "react"

import ContactModal from "./ContactModal"

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800  hover:text-white border-2 border-gray-800 focus:outline-none"
      >
        Me contacter
      </button>
      <form hidden name="contact" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="nom" />
        <input type="email" name="email" />
        <input type="text" name="sujet" />
        <input type="text" name="contenu" />
      </form>
      <ContactModal visible={isOpen} close={() => setIsOpen(false)} />
    </>
  )
}

export default Contact
