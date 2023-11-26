import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

const validationSchema = object({
  email: string().required("Email is required").email("Email is invalid"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
 
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center h-[100vh] items-center">
      <div className="sm:shadow-2xl shadow-none hover:shadow-inner rounded-2xl p-4 flex flex-col gap-4">
        <div className="grid gap-1">
          <h1 className="font-medium text-3xl">Welcome to Crypto App</h1>
          <p className="text-sm text-gray-500">
            Enter your credentials to access the account.
          </p>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <div className="gap-4 flex flex-col">
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
                      <h1 className="text-red-500">{meta.error}</h1>
                    </div>
                  )}
                </Field>

                <Field name="password">
                  {({ field, meta }) => (
                    <div
                      isInvalid={!!(meta.error && meta.touched)}
                      className="flex relative flex-col"
                    >
                      <label>Password</label>
                      <input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Choose Password"
                        className="border  rounded-md px-2 py-1"
                      />
                      <span
                        className="absolute right-2 top-7 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "🙈" : "👁️"}
                      </span>
                      <h1 className="text-red-500">{meta.error}</h1>
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
                <div className="flex flex-col gap-2 justify-center">
                  <button
                    type="submit"
                    className="bg-purple-600 hover:ease-in hover:bg-purple-800 text-white flex-grow rounded-lg p-2"
                  >
                    Log In
                  </button>
                  <Link to={"/signup"}>
                    <button className="bg-transparent text-black w-full border hover:shadow-md border-purple-500 rounded-lg p-2">
                      Create Account
                    </button>
                  </Link>
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

export default SignIn;
