import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../components/auth/Layout";
import { SignInForm } from "../components/auth/sign-in-form";
import { SignUpForm } from "../components/auth/sign-up-form";
import { Layout as DashbaordLayout } from "../components/dashboard/layout";
import { Home } from "../components/dashboard/home";
import { NotFound } from "../components/not-found";
export function RootRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<SignInForm />} />
            <Route path="/registration" element={<SignUpForm />} />
          </Route>
          <Route path="/" element={<DashbaordLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
