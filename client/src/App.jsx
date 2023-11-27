import TransactionPage from './pages/Transactions/TransactionPage';
import Dashboard from './pages/Dashboard/Dashboard'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SupportPage from "./pages/Support/SupportPage";
import SignUp from './pages/Auth/SignUp/SignUp';
import SignIn from './pages/Auth/SignIn/SignIn';
import VerifyEmail from './pages/Auth/VerifyEmail/VerifyEmail';
import VerifySuccess from './pages/Auth/VerifySuccess/VerifySuccess';
import RecoverPassword from './pages/Auth/RecoverPassword/RecoverPassword';
import ResetPasswordSent from './pages/Auth/ResetPasswordSent/ResetPasswordSent';
import NewPassword from './pages/Auth/NewPassword/NewPassword';
import PasswordResetDone from './pages/Auth/PasswordResetDone/PasswordResetDone';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <SupportPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/verify-success",
    element: <VerifySuccess />,
  },
  {
    path: "/password-reset",
    element: <RecoverPassword />,
  },
  {
    path: "/password-reset-sent",
    element: <ResetPasswordSent />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/password-reset-done",
    element: <PasswordResetDone />,
  },
]);

const App = () => {



  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App