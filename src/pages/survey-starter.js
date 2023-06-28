import { useState } from "react";
import { useRouter } from "next/router";
import { BiLoaderAlt } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import { ClientForm } from "@/forms/ClientForm";
import { BusinessForm } from "@/forms/BusinessForm";
import { MessageForm } from "@/forms/MessageForm";
import { ProjectForm } from "@/forms/ProjectForm";
import { useSurvey } from "@/hooks/useSurvey";
import axios from "axios";
import * as Form from "@radix-ui/react-form";

const INITIAL_DATA = {
  order: "STARTER ($0.00)",
  name: "",
  phone: "",
  email: "",
  businessName: "",
  businessDescription: "",
  previousWebsite: "",
  socialMedia: "",
  message: "",
};

function Survey() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useSurvey([
      // <OrderForm {...data} updateFields={updateFields} />,
      <ClientForm {...data} updateFields={updateFields} />,
      <BusinessForm {...data} updateFields={updateFields} />,
      <ProjectForm {...data} updateFields={updateFields} />,
      <MessageForm {...data} updateFields={updateFields} />,
    ]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    setLoading(true)

    //Send data over to server
    const payload = data;
    try {
      const { data } = await axios({
        url: "/api/surveymail",
        method: "POST",
        data: payload,
      });

      console.log("Response back: ", data);
    } catch (err) {
      console.log("error: ", err);
    }

    router.push({ pathname: "/success", query: data });
  };

  const currentStep = currentStepIndex + 1;

  return (
    <section className="m-6 mt-8 lg:mt-0 lg:grid place-items-center h-screen">
      <Form.Root
        onSubmit={sendEmail}
        className="grid place-items-center mx-auto w-full md:w-[24rem] lg:w-[34rem]"
      >
        <img src="/main/logo-white.jpg" alt="webspark logo" className="w-48" />

        <div className="my-6 flex items-center w-full">
          <span
            className={currentStep > 0 ? "completed" : "uncompleted"}
          ></span>
          <span
            className={currentStep > 1 ? "completed" : "uncompleted"}
          ></span>
          <span
            className={currentStep > 2 ? "completed" : "uncompleted"}
          ></span>
          <span
            className={currentStep > 3 ? "completed" : "uncompleted"}
          ></span>
        </div>

        {step}

        <div
          className={
            isFirstStep
              ? "mt-4 flex justify-end"
              : "mt-4 flex justify-between items-center gap-6"
          }
        >
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="text-xl bg-black text-white tracking-wider p-3 w-40 hover:shadow-lg hover:drop-shadow-lg"
            >
              <div className="flex items-center justify-center font-normal gap-2">
                <FaAngleLeft size={20} />
                <span className="-mt-1">Back</span>
              </div>
            </button>
          )}
          <button
            type="submit"
            className={
              isFirstStep && data.order === ""
                ? "hidden"
                : "text-xl bg-sky-100 p-3 w-40 shadow drop-shadow-md hover:shadow-md"
            }
          >
            {isLastStep ? (
              <div>
                {loading ? (
                  <BiLoaderAlt className="mx-auto animate-spin delay-500" />
                ) : (
                  <div className="flex items-center justify-center gap-2 font-normal tracking-wide">
                    <span className="-mt-1">Finish</span>
                    <FaCheck size={16} />
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 font-normal tracking-wide">
                <span className="-mt-1">Next</span>
                <FaAngleRight size={20} />
              </div>
            )}
          </button>
        </div>
      </Form.Root>
    </section>
  );
}

export default Survey;
