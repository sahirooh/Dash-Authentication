import React from "react";
import { useMutation } from "react-query";
import {  useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { verfiyForgotToken } from "../../../api/query/userQuery";
import { Field, Form,Formik } from "formik";
import { object, ref, string } from "yup";

const validationSchema = object({
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Retype Password"),
});

const NewPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["verify-forgot-token"],
    mutationFn: verfiyForgotToken,

    onSettled: () => {
      navigate("/password-reset-done");
    },
    onError: (error) => {
      toast.error("SignUp Error: " + error.message, {
        position: "bottom-center",
      });

      navigate("/signup");
    },
  });

  return (
    <div className="grid justify-center h-[100vh] items-center">
      <div className="p-8 flex min-w-[410px] font-medium flex-col gap-6 rounded-lg shadow-2xl">
        <div>
          <h1 className=" text-2xl">Reset Password</h1>
          <p className="text-gray-500 font-normal mt-1">
            Enter your new password
          </p>
        </div>

        <Formik
          initialValues={{
            password: "",
            repeatPassword: "",
          }}
          onSubmit={(values) => {
            mutate({token, password: values.password});
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <Field name="password">
              {({ field, meta }) => (
                <div
                  isInvalid={!!(meta.error && meta.touched)}
                  className="flex flex-col"
                >
                  <label htmlFor="password">New Password</label>
                  <input
                    {...field}
                    className="border font-normal text-sm rounded-lg p-2 outline-none"
                    type="password"
                  />
                  <h1>{meta.error}</h1>
                </div>
              )}
            </Field>
            <Field name="repeatPassword">
              {({ field, meta }) => (
                <div
                  isInvalid={!!(meta.error && meta.touched)}
                  className="flex flex-col"
                >
                  <label htmlFor="password">Re-type Password</label>
                  <input
                    {...field}
                    className="border font-normal text-sm rounded-lg p-2 outline-none"
                    type="password"
                  />
                  <h1>{meta.error}</h1>
                </div>
              )}
            </Field>
            <button
              type="submit"
              className="bg-[#EEEEF4] rounded-lg py-2 w-full"
            >
              Reset Password
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewPassword;
