import ContactForm from "@/forms/ContactForm";

const Contact = () => {
  return (
    <section
      className="md:px-12 py-20 bg-gradient-to-br from-black
     via-neutral-900 to-neutral-950">
      <div className=" bg-black text-white rounded-sm w-full lg:grid grid-cols-3">
        <div className="p-8">
          <img
            src="/main/contact.jpg"
            alt="contact"
            className="h-80 w-full block object-cover lg:h-[24rem] lg:col-span-1"
          />
        </div>

        <div className="lg:col-span-2 p-8 pt-0 lg:p-6 lg:pr-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
