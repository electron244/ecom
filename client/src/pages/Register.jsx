import { Link } from "react-router-dom";
import {
  MdEco,
  MdPerson,
  MdEmail,
  MdLock,
  MdVisibility,
  MdVerified,
  MdShield,
  MdBolt,
} from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authSlice.js";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((s) => s.auth);

  const onSubmit = async (data) => {
    console.log("Register Data:", data);
    const result = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(result)) navigate("/");
  };

  return (
    <div className="bg-background-light min-h-screen flex flex-col">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col items-center justify-center p-4 md:p-10">
          <div className="w-full max-w-[480px] bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
            {/* Header - Nav */}
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

            {/* Header - Title */}
            <header className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary">
                <MdEco className="text-3xl" />
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">
                  Create account
                </h1>
                <p className="text-slate-500 mt-2">
                  Join our community today and start building.
                </p>
              </div>
            </header>

            <div className="flex flex-col gap-4">
              {/* Google Sign Up */}
              <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                <FcGoogle className="text-xl" />
                Sign up with Google
              </button>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* ✅ handleSubmit wraps your onSubmit */}
              <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Full Name */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Full Name
                  </span>
                  <div className="relative">
                    <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                      placeholder="Enter your name"
                      type="text"
                      //{/* ✅ register with required + min length */}
                      {...register("name", {
                        required: "Full name is required",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters",
                        },
                      })}
                    />
                  </div>
                  {/* ✅ inline error */}
                  {errors.name && (
                    <p className="text-xs text-red-500 ml-1">
                      {errors.name.message}
                    </p>
                  )}
                </label>

                {/* Email */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Email Address
                  </span>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                      placeholder="email@example.com"
                      type="email"
                      //{/* ✅ register with required + pattern */}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                  </div>
                  {/* ✅ inline error */}
                  {errors.email && (
                    <p className="text-xs text-red-500 ml-1">
                      {errors.email.message}
                    </p>
                  )}
                </label>

                {/* Password */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Password
                  </span>
                  <div className="relative">
                    <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-11 pr-12 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                      placeholder="••••••••"
                      type="password"
                      //{/* ✅ register with required + min length + pattern */}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                        pattern: {
                          value: /^(?=.*[A-Z])(?=.*\d)/,
                          message:
                            "Must include at least 1 uppercase letter and 1 number",
                        },
                      })}
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      type="button"
                    >
                      <MdVisibility className="text-xl" />
                    </button>
                  </div>
                  {/* ✅ inline error */}
                  {errors.password && (
                    <p className="text-xs text-red-500 ml-1">
                      {errors.password.message}
                    </p>
                  )}
                </label>

                {/* Terms */}
                <div className="flex items-start gap-3 mt-1">
                  <input
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                    id="terms"
                    type="checkbox"
                    // {/* ✅ register with required validation */}
                    {...register("terms", {
                      required: "You must accept the terms to continue",
                    })}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-slate-500" htmlFor="terms">
                      By signing up, you agree to our{" "}
                      <a className="text-primary hover:underline" href="#">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a className="text-primary hover:underline" href="#">
                        Privacy Policy
                      </a>
                      .
                    </label>
                    {/* ✅ inline error for terms */}
                    {errors.terms && (
                      <p className="text-xs text-red-500">
                        {errors.terms.message}
                      </p>
                    )}
                  </div>
                </div>
                {error && (
                  <p className="text-xs text-red-500 text-center">{error}</p>
                )}
                <button
                  className="mt-2 w-full rounded-lg bg-primary py-3.5 text-sm font-bold text-slate-900 shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 transition-all active:scale-[0.98]"
                  type="submit"
                >
                  Create Account
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  className="font-bold text-primary hover:underline"
                  to="/login"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Decorative Element */}
          <div className="mt-10 flex items-center gap-8 opacity-40">
            <div className="h-px w-12 bg-slate-300"></div>
            <div className="flex gap-4">
              <MdVerified className="text-xl" />
              <MdShield className="text-xl" />
              <MdBolt className="text-xl" />
            </div>
            <div className="h-px w-12 bg-slate-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
