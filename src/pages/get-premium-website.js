import React from "react";
import { BiChevronDown } from "react-icons/bi";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";

const Process = () => {
  //Accordion Components
  const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className="AccordionTrigger"
          {...props}
          ref={forwardedRef}>
          {children}
          <BiChevronDown size={22} className="Arrow" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  const AccordionContent = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Content
        className="AccordionContent"
        {...props}
        ref={forwardedRef}>
        <div className="AccordionContentText">{children}</div>
      </Accordion.Content>
    )
  );

  return (
    <section className="m-6 md:mx-24 lg:m-0 lg:flex justify-center">
      <div className="lg:w-1/2 p-12 lg:px-24 lg:h-screen bg-sky-200 lg:sticky left-0 top-0">
        <div className="w-full">
          <h2 className="text-3xl lg:text-5xl font-extrabold lg:mt-6">
            LET'S SUPERCHARGE YOUR WEB PRESENCE
          </h2>

          <p className="text-lg my-8">
            We are thrilled about helping you with your website needs. At
            Webspark+, transparency is at the core of what we do. We encourage
            all our prospective clients to get familiar with our working process
            to ensure we are all on the same page from start to finish.
          </p>

          <Link href="/survey-premium">
            <button
              className="w-full p-4 mt-2 font-bold bg-black text-white
         text-xl tracking-widest hover:bg-opacity-80 hidden lg:block">
              START PROJECT
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 lg:px-24 pt-20">
        <h2
          className="text-2xl text-gray text-center mb-6 pb-2 font-bold tracking-wider
        border-b-2 border-sky-300">
          HOW WE WORK
        </h2>
        <Accordion.Root className="AccordionRoot" type="single" collapsible>
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>1. Complete Order Form</AccordionTrigger>
            <AccordionContent>
              Fill out an order form to help us understand your business and
              website goals. The form is designed to gather information
              regarding client and business information, project details and
              preferences, and any additional message, request or enquiries the
              client has.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>2. Pay Initial $100 Deposit</AccordionTrigger>
            <AccordionContent>
              Before work begins, we require the client to make an initial
              deposit or down-payment of only $99. This payment serves as a
              commitment from the client and helps cover the initial expenses
              and resources dedicated to the project.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>3. Review and Consultation</AccordionTrigger>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                Once the form submission and deposit is done, we review all the
                information that's provided. And if necessary, we consult with
                the client to discuss the project in more detail, address any
                lingering concerns, and give the client the opportunity to make
                any further enquiries.
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-4">
            <AccordionTrigger>4. Design and Development Phase</AccordionTrigger>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                After the review, we initiate the actual design and development
                process. We start by creating a wireframe to present the visual
                layout and structure of the website. Based on the mock design,
                we then proceed to building the entire website and ensure it
                reflects the client's vision.
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-5">
            <AccordionTrigger>
              5. Client Approval and Final Payment
            </AccordionTrigger>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                The client gets to review the finished website, provide their
                feedback, and request any necessary changes or refinements. Once
                the client is satisfied with the outcome, they give their
                approval. At this stage, the client is required to make the
                final bulk payment for the remaining balance.
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-6">
            <AccordionTrigger>6. Website Launch and Handover</AccordionTrigger>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                After receiving the final payment, we prepare the website for
                launch by configuring the necessary hosting, domain, security
                and server settings to make the website accessible to the
                public. The website is officially handed over to the client, who
                can choose to handle its maintenance and updates themselves.
                Alternatively, they can
                <Link href="https://www.buymeacoffee.com/websparkplus/membership">
                  <span className="text-blue-500 cursor-pointer hover:underline ml-1">
                    join our membership
                  </span>
                </Link>
                , and get access to our on-going support, site management
                services and more.
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <Link href="/survey-premium">
        <button
          className="w-full p-4 mb-6 font-bold bg-black text-white
         text-xl tracking-widest hover:bg-opacity-80 lg:hidden">
          START PROJECT
        </button>
      </Link>
    </section>
  );
};
export default Process;
