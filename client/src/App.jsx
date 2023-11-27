import TransactionPage from './pages/Transactions/TransactionPage';
import Dashboard from './pages/Dashboard/Dashboard'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SupportPage from "./pages/Support/SupportPage";
import SignUp from './pages/Auth/SignUp/SignUp';
import SignIn from './pages/Auth/SignIn/SignIn';
import VerifyEmail from './pages/Auth/VerifyEmail/VerifyEmail';
import VerifySuccess from './pages/Auth/VerifySuccess/VerifySuccess';
import RecoverPassword from './pages/Auth/RecoverPassword/RecoverPassword';

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
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App