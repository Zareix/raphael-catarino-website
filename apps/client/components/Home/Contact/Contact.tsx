import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

import styled from "styled-components";
import { useHomeContext } from "..";

const Wrapper = styled.div`
  z-index: 50;
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  animation: fadeIn 200ms forwards;
`;

const Container = styled.div`
  animation: slideInBottom 200ms forwards;
`;

const Or = styled.div`
  position: relative;
  width: 100%;
  isolation: isolate;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    position: absolute;
    content: "";
    z-index: -1;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    inset: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
  }
`;

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { toggleContactOpen } = useHomeContext();
  const intl = useIntl();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!executeRecaptcha) {
      console.error("Execute recaptcha not yet available");
      return;
    }
    const token = axios
      .post(`${process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL}/api/ezforms/submit`, {
        token: await executeRecaptcha("contactFormSubmit"),
        formName: "Contact",
        formData: data,
      })
      .then(() => {
        setSent(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Wrapper
      className="bg-gray-800 bg-opacity-60 backdrop-blur dark:bg-gray-700 dark:bg-opacity-20"
      onClick={() => toggleContactOpen()}
    >
      <Container
        onClick={(e) => e.stopPropagation()}
        className="container relative rounded-md bg-gray-50 px-8 py-6 shadow dark:bg-gray-800 md:min-w-[400px]"
      >
        <button
          onClick={() => toggleContactOpen()}
          className="absolute top-3 right-3"
        >
          X
        </button>
        <h1>Contact</h1>
        {sent ? (
          <p className="my-2">
            <FormattedMessage
              id="contact_sent"
              defaultMessage="Votre message a bien été envoyé !"
              description="Contact sent message"
            />
          </p>
        ) : (
          <div>
            <p className="mt-2 text-center">
              <FormattedMessage
                id="contact_by"
                defaultMessage="Par mail "
                description="Contact by"
              />
              <a
                href="mailto:contact@raphael-catarino.fr"
                className="text-blue-900 underline dark:text-blue-600"
              >
                contact@raphael-catarino.fr
              </a>
            </p>
            <Or className="my-3">
              <p className="bg-gray-50 px-3 dark:bg-gray-800">
                <FormattedMessage
                  id="contact_or"
                  defaultMessage="Ou"
                  description="Contact or"
                />
              </p>
            </Or>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid">
                <label htmlFor="name" className="font-medium">
                  <FormattedMessage
                    id="contact_name_label"
                    defaultMessage="Nom"
                    description="Contact name label"
                  />
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder={intl.formatMessage({
                    id: "contact_name_placeholder",
                    defaultMessage: "Votre nom et prénom",
                    description: "Contact name placeholder",
                  })}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
                {errors.name && (
                  <span className="text-sm text-red-500 dark:text-red-400">
                    <FormattedMessage
                      id="contact_name_error"
                      defaultMessage="Merci de préciser votre nom"
                      description="Contact name error"
                    />
                  </span>
                )}
              </div>
              <div className="mt-2 grid">
                <label htmlFor="email" className="font-medium">
                  <FormattedMessage
                    id="contact_email_label"
                    defaultMessage="Email"
                    description="Contact email label"
                  />
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder={intl.formatMessage({
                    id: "contact_email_placeholder",
                    defaultMessage: "contact@exemple.fr",
                    description: "Contact email placeholder",
                  })}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
                {errors.email && (
                  <span className="text-sm text-red-500 dark:text-red-400">
                    <FormattedMessage
                      id="contact_email_error"
                      defaultMessage="Merci de préciser votre email"
                      description="Contact email error"
                    />
                  </span>
                )}
              </div>
              <div className="mt-2 grid">
                <label htmlFor="message" className="font-medium">
                  <FormattedMessage
                    id="contact_message_label"
                    defaultMessage="Message"
                    description="Contact message label"
                  />
                </label>
                <textarea
                  {...register("message", { required: true })}
                  placeholder={intl.formatMessage({
                    id: "contact_message_placeholder",
                    defaultMessage: "Votre message",
                    description: "Contact message placeholder",
                  })}
                  rows={5}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
                {errors.message && (
                  <span className="text-sm text-red-500 dark:text-red-400">
                    <FormattedMessage
                      id="contact_message_error"
                      defaultMessage="Merci de préciser votre message"
                      description="Contact message error"
                    />
                  </span>
                )}
              </div>
              <div className="flex justify-end">
                <button className="mt-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <FormattedMessage
                    id="contact_send_button"
                    defaultMessage="Envoyer"
                    description="Contact send button"
                  />
                </button>
              </div>
            </form>
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

const Contact = () => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ""}
  >
    <ContactForm />
  </GoogleReCaptchaProvider>
);

export default Contact;
