import { InputForm, MetaSEO, Picture } from "./shared";

export interface Contact {
  data: ContactData;
}

export interface ContactData {
  id: number;
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  messages: Messages;
  form: Form;
  lbl_send: string;
  seo: MetaSEO;
  img: Picture;
}

export interface Messages {
  invalid_tel: string;
  invalid_name: string;
  mail_sent_ok: string;
  invalid_email: string;
  invalid_number: string;
  invalid_required: string;
  validation_error: string;
  invalid_recaptcha: string;
}

export interface Form {
  id: number;
  name: InputForm;
  email: InputForm;
  phone: InputForm;
  category: InputForm;
  message: InputForm;
}
