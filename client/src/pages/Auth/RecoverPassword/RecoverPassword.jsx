import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { object, string } from "yup";
import { sendForgotMail } from "../../../api/query/userQuery";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const validationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
  });

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: sendForgotMail,
    onSettled: (data) => {
      if (email) {
        navigate(`/forgot-success/${email}`);
      }
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message, {
        position: "bottom-center",
        closeButton: false,
        description: "Please try again later",
        theme: "colored",
      });
    },
  });

  return (
    <div className="grid justify-center min-h-[100vh] items-center">
      <div className="p-8 font-medium rounded-lg shadow-2xl flex flex-col gap-4">
        <Link to={"/signin"}>
          <IoIosArrowRoundBack className="text-4xl" />
        </Link>
        <h1>Forgot Password</h1>

        <p className="max-w-[410px] font-normal text-gray-500">
          Enter your email address for which account you want to reset your
          password.
        </p>

        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            setEmail((prev) => (prev = values.email));

            mutate({ email: values.email });
          }}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <Field name="email">
                {({ field, meta }) => (
                  <div
                    isInvalid={!!(meta.error && meta.touched)}
                    className="flex gap-1 mt-4 flex-col"
                  >
                    <label htmlFor="email">Email</label>
                    <input
                      {...field}
                      className="border font-normal text-sm rounded-lg p-2 outline-none"
                      type="email"
                      placeholder="name@gmail.com"
                    />
                    <h1 className="text-red-500">{meta.error}</h1>
                  </div>
                )}
              </Field>
        <button
          type="submit"
          isLoading={isLoading}
          className="bg-purple-500 w-full text-white mt-2 rounded-lg py-2"
        >
          Reset Password
        </button>
            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
};

export default RecoverPassword;
