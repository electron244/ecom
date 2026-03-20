import { Link } from "react-router-dom";
import { MdBolt, MdEmail, MdLock, MdVisibility } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((s) => s.auth);

  const onSubmit = async (data) => {
    console.log("Login Data:", data);
    const result = await dispatch(loginUser(data));
    if (loginUser.fulfilled.match(result)) navigate("/");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 py-4 lg:px-40 bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 text-slate-900">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <MdBolt className="text-white text-xl" />
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">
            MINIMA
          </h2>
        </Link>
        <div className="flex items-center gap-4">
          <a
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            href="#"
          >
            Support
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        </div>
        <div className="relative z-10 w-full max-w-[480px] bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 border border-slate-100">
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-slate-900 text-3xl font-extrabold mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-500">
              Please enter your details to sign in
            </p>
          </div>
          <div className="space-y-4">
            {/* Google Sign In */}
            <button className="w-full flex cursor-pointer items-center justify-center gap-3 rounded-xl h-12 px-5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all font-semibold">
              <FcGoogle className="text-xl" />
              <span>Sign in with Google</span>
            </button>

            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-4 text-xs uppercase tracking-widest text-slate-400 font-bold">
                Or use email
              </span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            {/* ✅ handleSubmit wraps your onSubmit */}
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                  <input
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="name@company.com"
                    type="email"
                    // {/* ✅ register replaces name + required */}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>
                {/* ✅ inline error message */}
                {errors.email && (
                  <p className="text-xs text-red-500 ml-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <a
                    className="text-xs font-bold text-primary hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                  <input
                    className="w-full pl-12 pr-12 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="••••••••"
                    type="password"
                    // {/* ✅ register with min length validation */}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    type="button"
                  >
                    <MdVisibility className="text-xl" />
                  </button>
                </div>
                {/* ✅ inline error message */}
                {errors.password && (
                  <p className="text-xs text-red-500 ml-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember */}
              <div className="flex items-center gap-2 px-1">
                <input
                  className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                  id="remember"
                  type="checkbox"
                  // {/* ✅ register checkbox — no validation needed */}
                  {...register("rememberMe")}
                />
                <label
                  className="text-sm text-slate-600 cursor-pointer"
                  htmlFor="remember"
                >
                  Remember me for 30 days
                </label>
              </div>
              {error && (
                <p className="text-xs text-red-500 text-center">{error}</p>
              )}
              {/* Submit */}
              <button
                className="w-full py-3 bg-primary hover:bg-primary/90 text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
                type="submit"
              >
                Sign In
              </button>
            </form>

            <div className="text-center pt-4">
              <p className="text-sm text-slate-600">
                Don&apos;t have an account?{" "}
                <Link
                  className="font-bold text-primary hover:underline"
                  to="/register"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 text-center">
        <p className="text-xs text-slate-400">
          © 2024 MINIMA Inc. All rights reserved.{" "}
          <span className="mx-2">|</span>
          <a className="hover:text-primary" href="#">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a className="hover:text-primary" href="#">
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
}
