import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const SignUp = () => {
  return (
    <div className="flex justify-center h-[100vh] items-center">
      <div className="shadow-2xl hover:shadow-inner rounded-2xl p-4 flex flex-col gap-4">
        <div className="grid gap-1">
          <h1 className="font-medium text-3xl">Welcome to Crypto App</h1>
          <p className="text-sm text-gray-500">
            Create a free account by filling data below.
          </p>
        </div>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <div className="gap-4 flex flex-col">
                <div className="flex gap-4">
                  <Field name="firstName">
                    {({ field, meta }) => (
                      <div
                        isInvalid={!!(meta.error && meta.touched)}
                        className="flex flex-col"
                      >
                        <label>First Name</label>
                        <input
                          {...field}
                          type="text"
                          placeholder="James"
                          className="border w-auto flex rounded-md px-2 py-1"
                        />
                      </div>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ field, meta }) => (
                      <div
                        isInvalid={!!(meta.error && meta.touched)}
                        className="flex flex-col"
                      >
                        <label>Last Name</label>
                        <input
                          {...field}
                          type="text"
                          placeholder="Bond"
                          className="border rounded-md px-2 py-1"
                        />
                      </div>
                    )}
                  </Field>
                </div>
                <Field name="email">
                  {({ field, meta }) => (
                    <div
                      isInvalid={!!(meta.error && meta.touched)}
                      className="flex flex-col"
                    >
                      <label>Email</label>
                      <input
                        {...field}
                        type="email"
                        placeholder="name@mail.com"
                        className="border rounded-md px-2 py-1"
                      />
                    </div>
                  )}
                </Field>

                <Field name="password">
                  {({ field, meta }) => (
                    <div
                      isInvalid={!!(meta.error && meta.touched)}
                      className="flex flex-col"
                    >
                      <label>Password</label>
                      <input
                        {...field}
                        type="password"
                        placeholder="Choose Password"
                        className="border rounded-md px-2 py-1"
                      />
                    </div>
                  )}
                </Field>

                <Field name="repeatPassword">
                  {({ field, meta }) => (
                    <div
                      isInvalid={!!(meta.error && meta.touched)}
                      className="flex flex-col"
                    >
                      <label>Repeat Password</label>
                      <input
                        {...field}
                        type="password"
                        placeholder="Retype Password"
                        className="border rounded-md px-2 py-1"
                      />
                    </div>
                  )}
                </Field>

                
                <div>
                  <input
                    type="checkbox"
                    id="form-checkbox"
                    className="opacity-50"
                  />
                  <label htmlFor="form-checkbox" className="ml-1">
                    I agree to the{" "}
                    <span className="text-purple-700">terms of service</span>
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white flex-grow rounded-lg p-2"
                  >
                    Create Account
                  </button>
                </div>
                <p className="flex justify-center">
                  Already have an account?{" "}
                  <Link to={"/signin"}>
                    <span className="text-purple-700">Log In</span>
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
