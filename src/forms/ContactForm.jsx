import { MdOutlineForwardToInbox } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().label("name").required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.number(),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string()
        .required("Message is required")
        .max(500, "Message must be 500 characters or less"),
    }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    formik.resetForm();

    //Send data over to server
    const payload = formik.values;
    try {
      const { data } = await axios({
        url: "/api/contactmail",
        method: "POST",
        data: payload,
      });

      console.log("Response back: ", data);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <div id="contact">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-4 lg:mb-0">
          {formik.touched.name && formik.errors.name ? (
            <span className="error-message">{formik.errors.name}</span>
          ) : (
            <label>FULL NAME</label>
          )}
          <input
            type="text"
            name="name"
            id="name"
            maxLength={50}
            required
            className={
              formik.touched.name && formik.errors.name
                ? "error-input"
                : "contact-input"
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>

        <div className="mb-4 lg:mb-0">
          {formik.touched.email && formik.errors.email ? (
            <span className="error-message">{formik.errors.email}</span>
          ) : (
            <label>EMAIL</label>
          )}
          <input
            type="email"
            name="email"
            id="email"
            maxLength={50}
            required
            className={
              formik.touched.email && formik.errors.email
                ? "error-input"
                : "contact-input"
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>

        <div className="mb-4 lg:mb-0">
          {formik.touched.phone && formik.errors.phone ? (
            <span className="error-message">{formik.errors.phone}</span>
          ) : (
            <label>
              PHONE <span className="font-light">(optional)</span>
            </label>
          )}

          <input
            name="phone"
            id="phone"
            maxLength={20}
            className={
              formik.touched.phone && formik.errors.phone
                ? "error-input"
                : "contact-input"
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>

        <div className="mb-4 lg:mb-0">
          {formik.touched.subject && formik.errors.subject ? (
            <span className="error-message">{formik.errors.subject}</span>
          ) : (
            <label>SUBJECT</label>
          )}
          <input
            type="text"
            name="subject"
            id="subject"
            maxLength={100}
            required
            className={
              formik.touched.subject && formik.errors.subject
                ? "error-input"
                : "contact-input"
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
        </div>

        <div className="mb-4 lg:mb-0 col-span-2">
          {formik.touched.message && formik.errors.message ? (
            <span className="error-message">{formik.errors.message}</span>
          ) : (
            <label>MESSAGE</label>
          )}
          <textarea
            name="message"
            id="message"
            maxLength={501}
            required
            className={
              formik.touched.message && formik.errors.message
                ? "error-textfield"
                : "textfield"
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </div>

        <div className="text-center col-span-2">
          <button type="submit" className="send-button">
            <span className="font-bold tracking-widest">SEND</span>
            <MdOutlineForwardToInbox />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
