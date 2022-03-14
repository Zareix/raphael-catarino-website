import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import CloseIcon from "../../../images/svg/icons/close.svg";
import { fadeIn, slideInFromTop } from "../../utils/framer-motion-variants";
import CmsDataContext from "../../utils/context/data-context";

const MyModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);

  textarea {
    max-height: 40vh;
  }
`;

const ErrorMessage = styled.span`
  color: #ef4444;
`;

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const ContactModal = ({ visible, close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [sent, setSent] = useState(false);
  const { contact } = useContext(CmsDataContext);

  const onSubmit = (data) => {
    console.log(data);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then(() => {
        setSent(true);
        reset();
      })
      .catch((error) => alert(error));
  };

  const closeModal = () => {
    if (sent) {
      setTimeout(() => {
        setSent(false);
      }, 1000);
    }
    close();
  };

  return (
    <AnimatePresence>
      {visible && (
        <MyModal
          id="formModalContact"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {sent ? (
            <div className="mx-3 w-full max-w-2xl rounded-lg bg-white px-2 py-10 shadow dark:bg-gray-800 md:m-auto md:px-5">
              <div className="mb-6 grid grid-cols-5 justify-items-center text-center text-2xl font-light text-gray-800 dark:text-white">
                <CloseIcon
                  className="col-start-5 h-7 w-7 cursor-pointer"
                  onClick={closeModal}
                />
                <p className="col-span-3 col-start-2 border-b border-gray-400 pb-2">
                  {contact.contactSentTitle}
                </p>
                <p className="col-span-3 col-start-2 pt-2">
                  {contact.contactSentSubtitle}
                </p>
              </div>
            </div>
          ) : (
            <motion.form
              variants={slideInFromTop}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex w-full space-x-3"
              name="contact"
              method="post"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              id="formContact"
              onSubmit={handleSubmit(onSubmit)}
              drag="y"
              onDragEnd={(_event, info) => {
                if (Math.abs(info.offset.y) > 100) closeModal();
              }}
              dragSnapToOrigin
            >
              <div className="mx-3 w-full max-w-2xl rounded-lg bg-white px-5 py-10 shadow dark:bg-gray-800 md:m-auto">
                <div className="mb-6 grid grid-cols-5 justify-items-center text-center text-3xl font-light text-gray-800 dark:text-white">
                  <p className="col-span-3 col-start-2">
                    {contact.contactTitle}
                  </p>
                  <CloseIcon
                    className="h-7 w-7 cursor-pointer hover:text-gray-600"
                    onClick={closeModal}
                  />
                </div>
                <input type="hidden" name="form-name" value="contact" />
                <div className="m-auto grid max-w-xl grid-cols-2 gap-4">
                  <div className="col-span-2 lg:col-span-1">
                    <input
                      type="text"
                      name="nom"
                      id="contactName"
                      className=" w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder={contact.contactPlaceholderName}
                      {...register("nom", { required: true })}
                    />
                    {errors.nom && (
                      <ErrorMessage>{contact.contactErreurNom}</ErrorMessage>
                    )}
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      className=" w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder={contact.contactPlaceholderEmail}
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <ErrorMessage>{contact.contactErreurEmail}</ErrorMessage>
                    )}
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      id="contactSubject"
                      name="sujet"
                      className=" w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder={contact.contactPlaceholderSujet}
                      {...register("sujet", { required: true })}
                    />
                    {errors.sujet && (
                      <ErrorMessage>{contact.contactErreurSujet}</ErrorMessage>
                    )}
                  </div>
                  <div className="col-span-2">
                    <label className="text-gray-700" htmlFor="contenu">
                      <textarea
                        className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                        id="contactContent"
                        placeholder={contact.contactPlaceholderContenu}
                        name="contenu"
                        rows="5"
                        cols="40"
                        {...register("contenu", { required: true })}
                      ></textarea>
                    </label>
                    {errors.contenu && (
                      <ErrorMessage>
                        {contact.contactErreurContenu}
                      </ErrorMessage>
                    )}
                  </div>
                  <div className="col-span-2 text-right">
                    <button
                      type="submit"
                      className="w-full rounded-lg  bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                    >
                      {contact.contactSendBtn}
                    </button>
                  </div>
                </div>
              </div>
            </motion.form>
          )}
        </MyModal>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
