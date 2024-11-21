import React, { useEffect, useRef } from "react";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";
import { useForm } from "@/hooks";
import { useNavbarContext } from "@/context/navbar.context";
import { Loader } from "../atoms/Loader";
import { Form, Messages } from "@/interfaces/contact";
import Submit from "../atoms/Submit";

interface ContactFormProps {
  form: Form;
  messages: Messages;
  categories: any[];
  send: string;
}

function MejorarText(text: string): string {
  const ogTitle = text.split("/");
  const upperText = ogTitle[0].toLowerCase();

  const capitalizedText = upperText[0].toUpperCase() + upperText.slice(1);
  return capitalizedText;
}

export default function ContactForm({
  form,
  messages,
  categories,
  send,
}: ContactFormProps) {
  const { serviceSelected } = useNavbarContext();
  const { name, email, phone, category, message } = form;

  const captchaRef = useRef<ReCAPTCHAType>(null);
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string;

  const {
    failure,
    sending,
    errors,
    formState,
    responseMessage,
    validateInput,
    validateSelect,
    handleInput,
    handleSubmit,
    setFormState,
    phoneRef,
    phoneNumberFormatter,
  } = useForm(messages, "/ezforms/submit", captchaRef);

  const onChangeRecaptcha = () => {
    if (captchaRef.current?.getValue()) {
      setFormState({
        ...formState,
        captcha: captchaRef.current?.getValue() as string,
      });
    }
  };

  useEffect(() => {
    setFormState((prevState) => {
      return { ...prevState, category: serviceSelected };
    });
  }, [setFormState, serviceSelected]);

  return (
    <form onSubmit={handleSubmit} className="contactFormCont">
      <div className="contactFormCont__InputArea">
        <div className="contactFormCont__InputArea__item">
          <input
            type="text"
            onInput={validateInput}
            placeholder={name.placeholder}
            id={name.name}
            name={name.name}
            value={formState.name}
          />
          {errors.name && <span className="Form-error">{errors.name}</span>}
        </div>
        <div className="contactFormCont__InputArea__item">
          <input
            type="text"
            onInput={validateInput}
            placeholder={email.placeholder}
            id={email.name}
            name={email.name}
            value={formState.email}
          />
          {errors.email && <span className="Form-error">{errors.email}</span>}
        </div>
        <div className="contactFormCont__InputArea__item">
          <input
            type="text"
            onInput={validateInput}
            placeholder={phone.placeholder}
            id={phone.name}
            ref={phoneRef}
            onKeyDown={phoneNumberFormatter}
            name={phone.name}
            value={formState.phone}
          />

          {errors.phone && <span className="Form-error">{errors.phone}</span>}
        </div>
        <div className="contactFormCont__InputArea__item">
          <div className="select-category">
            <select
              id={category.name}
              onInput={validateSelect}
              name="category"
              value={formState.category}
              placeholder={category.placeholder}
            >
              <option value="" disabled>
                {category.placeholder}
              </option>
              {categories.map((item, index) => (
                <option className="" key={index}>
                  {MejorarText(item)}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="Form-error">{errors.category}</span>
            )}
          </div>
        </div>
      </div>

      <div className="contactFormCont__TextArea">
        <textarea
          value={formState.message}
          id={message.name}
          onInput={handleInput}
          name={message.name}
          placeholder={message.placeholder}
        ></textarea>
      </div>

      <div className="my-5 ">
        <ReCAPTCHA
          sitekey={captchaKey}
          onChange={onChangeRecaptcha}
          ref={captchaRef}
        />
        {errors.captcha && <p className="Form-error">{errors.captcha}</p>}
      </div>

      <div className="ButtonArea">
        <Submit text={send} iconCLass="icon-arrows" />
        {sending && <Loader />}
      </div>

      <div className="messages">
        {responseMessage && (
          <span className={`feedback-message init ${failure && "failure"}`}>
            {responseMessage}
          </span>
        )}
      </div>
    </form>
  );
}
