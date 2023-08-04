import { fail } from "@sveltejs/kit";
import { object, string, number, date, InferType } from "yup";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(name, email, message);

    const contactFormSchema = object({
      name: string().min(2, "too short").required("We only accept named users"),
      email: string().required().email(),
      message: string().required(),
    });

    try {
      const result = await contactFormSchema.validate(
        { name, email, message },
        { abortEarly: false }
      );

      const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfIccJ6xD8xhG1Ddj98HxT-pXaGI7nCFrgP_0fJmcKA3cOpdg/formResponse?usp=pp_url&entry.781048053=${name}&entry.687608453=${email}&entry.1829882901=${message}&submit=Submit`;

      const res = await fetch(prefilledLink);
      console.log(res);

      return {
        success: true,
        status: "Thank you for your submission!",
      };
    } catch (error) {
      console.log({ error });
      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return {
        errors,
        name,
        email,
        message,
      };
    }
  },
};
