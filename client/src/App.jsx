import TransactionPage from "./pages/Transactions/TransactionPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SupportPage from "./pages/Support/SupportPage";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import VerifyEmail from "./pages/Auth/VerifyEmail/VerifyEmail";
import VerifySuccess from "./pages/Auth/VerifySuccess/VerifySuccess";
import RecoverPassword from "./pages/Auth/RecoverPassword/RecoverPassword";
import ResetPasswordSent from "./pages/Auth/ResetPasswordSent/ResetPasswordSent";
import NewPassword from "./pages/Auth/NewPassword/NewPassword";
import PasswordResetDone from "./pages/Auth/PasswordResetDone/PasswordResetDone";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "sonner";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AlreadySignin from "./components/Auth/AlreadySignin";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/transaction",
      element: (
        <ProtectedRoute>
          <TransactionPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/support",
      element: (
        <ProtectedRoute>
          <SupportPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySignin>
          <SignUp />
        </AlreadySignin>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlreadySignin>
          <SignIn />
        </AlreadySignin>
      ),
    },
    {
      path: "/verify-email/:email",
      element: (
        <AlreadySignin>
          <VerifyEmail />
        </AlreadySignin>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlreadySignin>
          <VerifySuccess />
        </AlreadySignin>
      ),
    },
    {
      path: "/password-reset",
      element: (
        <AlreadySignin>
          <RecoverPassword />
        </AlreadySignin>
      ),
    },
    {
      path: "/forgot-success/:email",
      element: (
        <AlreadySignin>
          <ResetPasswordSent />
        </AlreadySignin>
      ),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (
        <AlreadySignin>
          <NewPassword />
        </AlreadySignin>
      ),
    },
    {
      path: "/password-reset-done",
      element: (
        <AlreadySignin>
          <PasswordResetDone />
        </AlreadySignin>
      ),
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
