import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { signupUser } from "../../../api/query/userQuery";

const validationSchema = object({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  email: string().required("Email is required").email("Email is invalid"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Retype Password"),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,
    onSuccess: (data) => {
      
      if (email) {
        navigate(`/verify-email/${email}`);
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
    <div className="flex justify-center h-[100vh] items-center">
      <div className="sm:shadow-2xl shadow-none hover:shadow-inner rounded-2xl p-4 flex flex-col gap-4">
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
            setEmail(values.email)
            mutate({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            });
          }}
          validationSchema={validationSchema}
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
                        <h1 className="text-red-500">{meta.error}</h1>
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
                        <h1 className="text-red-500">{meta.error}</h1>
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
                        placeholder="Re-type Password"
                        className="border rounded-md px-2 py-1"
                      />
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
                <div className="flex justify-center">
                  <button
                    type="submit"
                    isLoading={isLoading}
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
