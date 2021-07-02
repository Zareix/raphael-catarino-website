import React, { useState } from "react"

import Modal from "react-modal"
import { CgClose } from "react-icons/cg"
import { useForm } from "react-hook-form"
import styled from "styled-components"

import "./contactModal.css"

Modal.setAppElement(`#___gatsby`)

const modalStyles = {
  overlay: {
    backgroundColor: "rgb(47,47,47, 0.75)",
    zIndex: "60",
  },
  content: {
    border: null,
    background: null,
    borderRadius: null,
    inset: null,
    padding: null,
  },
}

const ErrorMessage = styled.span`
  color: #ef4444;
`

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactModal = ({ data, visible, close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [sent, setSent] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then(() => {
        setSent(true)
        reset()
      })
      .catch((error) => alert(error))
  }

  const closeModal = () => {
    if (sent) {
      setTimeout(() => {
        setSent(false)
      }, 1000)
    }
    close()
  }

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={visible}
      style={modalStyles}
      onRequestClose={closeModal}
      contentLabel="Formulaire de contact"
      id="formModalContact"
    >
      {sent ? (
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-2xl font-light text-center text-gray-800 dark:text-white grid grid-cols-5 justify-items-center">
            <CgClose
              size={30}
              className="cursor-pointer col-start-5"
              onClick={closeModal}
            />
            <p className="col-start-2 col-span-3 border-b border-gray-400 pb-2">
              {data.contactSentTitle}
            </p>
            <p className="col-start-2 col-span-3 pt-2">
              {data.contactSentSubtitle}
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
          id="formContact"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white grid grid-cols-5 justify-items-center">
              <p className="col-start-2 col-span-3">{data.contactTitle}</p>
              <CgClose
                size={30}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  name="nom"
                  id="contactName"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder={data.contactPlaceholderName}
                  {...register("nom", { required: true })}
                />
                {errors.nom && (
                  <ErrorMessage>{data.contactErreurName}</ErrorMessage>
                )}
              </div>
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder={data.contactPlaceholderEmail}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <ErrorMessage>{data.contactErreurEmail}</ErrorMessage>
                )}
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  id="contactSubject"
                  name="sujet"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder={data.contactPlaceholderSujet}
                  {...register("sujet", { required: true })}
                />
                {errors.sujet && (
                  <ErrorMessage>{data.contactErreurSujet}</ErrorMessage>
                )}
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" htmlFor="contenu">
                  <textarea
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    id="contactContent"
                    placeholder={data.contactPlaceholderContenu}
                    name="contenu"
                    rows="5"
                    cols="40"
                    {...register("contenu", { required: true })}
                  ></textarea>
                </label>
                {errors.contenu && (
                  <ErrorMessage>{data.contactErreurNom}</ErrorMessage>
                )}
              </div>
              <div className="col-span-2 text-right">
                <button
                  type="submit"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  {data.contactSendBtn}
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
