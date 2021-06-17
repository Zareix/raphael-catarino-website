import React, { useState } from "react"

import Modal from "react-modal"
import { CgClose } from "react-icons/cg"

import "./contactModal.css"

Modal.setAppElement(`#___gatsby`)

const modalStyles = {
  overlay: {
    backgroundColor: "rgb(47,47,47, 0.75)",
    zIndex: "10",
  },
  content: {
    border: null,
    background: null,
    borderRadius: null,
  },
}

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactModal = (props) => {
  const { visible, close } = props

  const [state, setState] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...state,
      }),
    })
      .then(() => {
        setSent(true)
        console.log("sent")
      })
      .catch((error) => alert(error))
  }

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={visible}
      style={modalStyles}
      onRequestClose={close}
    >
      {sent ? (
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-2xl font-light text-center text-gray-800 dark:text-white grid grid-cols-5 justify-items-center">
            <CgClose
              size={30}
              className="cursor-pointer col-start-5"
              onClick={close}
            />
            <p className="col-start-2 col-span-3 border-b border-gray-400 pb-2">
              Message envoyé !
            </p>
            <p className="col-start-2 col-span-3 pt-2">
              Je vous repondrai au plus vite
            </p>
          </div>
        </div>
      ) : (
        <form
          className="flex w-full space-x-3"
          name="contact"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white grid grid-cols-5 justify-items-center">
              <p className="col-start-2 col-span-3">Contactez moi</p>
              <CgClose size={30} className="cursor-pointer" onClick={close} />
            </div>
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    name="nom"
                    id="contact-form-name"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Votre nom"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="email"
                    id="contact-form-email"
                    name="email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Votre email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-subject"
                    name="sujet"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Sujet"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" htmlFor="name">
                  <textarea
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    id="comment"
                    placeholder="Que voulez-vous me dire ?"
                    name="contenu"
                    rows="5"
                    cols="40"
                    onChange={handleChange}
                  ></textarea>
                </label>
              </div>
              <div className="col-span-2 text-right">
                <button
                  type="submit"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </Modal>
  )
}

export default ContactModal
