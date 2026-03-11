import { useState } from "react";
import { useForm } from "react-hook-form";

/* ─── Inline SVG Icons ─────────────────────────────────────────── */
const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
    <path d="M13 2L4.09 12.97H11L10 22L19.91 11.03H13L13 2Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const SpinnerIcon = () => (
  <svg
    className="animate-spin w-[1.125rem] h-[1.125rem]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#20df60" strokeWidth="2.5" className="w-8 h-8">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ─── Reusable Input ────────────────────────────────────────────── */
const InputField = ({ hasError, hasRightPadding, ...props }) => (
  <input
    {...props}
    className={[
      "w-full pl-12 py-3 rounded-xl border bg-white text-slate-900",
      "outline-none transition-all duration-200 text-[0.9375rem] placeholder:text-slate-400",
      hasRightPadding ? "pr-12" : "pr-4",
      hasError
        ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
        : "border-slate-200 focus:border-[#20df60] focus:ring-2 focus:ring-[#20df60]/20",
    ].join(" ")}
  />
);

/* ─── Main Component ────────────────────────────────────────────── */
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f8f6] font-[Manrope]">
      {/* Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');`}</style>

      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

        {/* ── Header ──────────────────────────────────────────────── */}
        <header className="flex items-center justify-between px-6 lg:px-40 py-4 border-b border-[#20df60]/10 bg-[#f6f8f6]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#20df60] rounded-lg flex items-center justify-center">
              <BoltIcon />
            </div>
            <h2 className="text-lg font-extrabold tracking-tight text-slate-900">
              EcoStream
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-[#20df60] transition-colors duration-200"
          >
            Support
          </a>
        </header>

        {/* ── Main ────────────────────────────────────────────────── */}
        <main className="flex-1 flex items-center justify-center px-4 py-12 relative">

          {/* Ambient glow blobs */}
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#20df60]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#20df60]/5 blur-[120px] rounded-full pointer-events-none" />

          {/* ── Card ──────────────────────────────────────────────── */}
          <div className="relative z-10 w-full max-w-[480px] bg-white p-8 rounded-2xl shadow-xl shadow-[#20df60]/5 border border-slate-100">

            {isSubmitted ? (
              /* Success */
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <div className="w-16 h-16 bg-[#20df60]/10 rounded-full flex items-center justify-center">
                  <CheckIcon />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Signed In!
                </h2>
                <p className="text-slate-500 text-[0.9375rem]">
                  Welcome back to EcoStream.
                </p>
              </div>
            ) : (
              <>
                {/* Heading */}
                <div className="flex flex-col items-center text-center mb-8">
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-slate-500 text-[0.9375rem]">
                    Please enter your details to sign in
                  </p>
                </div>

                <div className="flex flex-col gap-4">

                  {/* Google OAuth button */}
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 h-12 px-5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold hover:bg-slate-100 transition-all duration-200 cursor-pointer"
                  >
                    <GoogleIcon />
                    <span>Sign in with Google</span>
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-4 py-1">
                    <div className="flex-1 h-px bg-slate-200" />
                    <span className="text-[0.6875rem] uppercase tracking-widest text-slate-400 font-bold whitespace-nowrap">
                      Or use email
                    </span>
                    <div className="flex-1 h-px bg-slate-200" />
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    {/* Email field */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 flex">
                          <MailIcon />
                        </span>
                        <InputField
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Enter a valid email address",
                            },
                          })}
                          type="email"
                          placeholder="name@company.com"
                          hasError={!!errors.email}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[0.8125rem] text-red-500 ml-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Password field */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center ml-1">
                        <label className="text-sm font-semibold text-slate-700">
                          Password
                        </label>
                        <a
                          href="#"
                          className="text-xs font-bold text-[#20df60] hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 flex">
                          <LockIcon />
                        </span>
                        <InputField
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 8,
                              message: "Password must be at least 8 characters",
                            },
                          })}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          hasError={!!errors.password}
                          hasRightPadding
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((p) => !p)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 flex text-slate-400 hover:text-slate-600 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                        >
                          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-[0.8125rem] text-red-500 ml-1">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center gap-2 px-1">
                      <input
                        {...register("rememberMe")}
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 accent-[#20df60] cursor-pointer"
                      />
                      <label
                        htmlFor="remember"
                        className="text-sm text-slate-600 cursor-pointer"
                      >
                        Remember me for 30 days
                      </label>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={[
                        "w-full py-3 rounded-xl bg-[#20df60] text-slate-900 font-extrabold text-[0.9375rem]",
                        "shadow-lg shadow-[#20df60]/25 tracking-tight border-none",
                        "transition-all duration-200 active:scale-[0.98]",
                        isSubmitting
                          ? "opacity-75 cursor-not-allowed"
                          : "hover:bg-[#1ac954] cursor-pointer",
                      ].join(" ")}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <SpinnerIcon />
                          Signing In…
                        </span>
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </form>

                  {/* Sign-up link */}
                  <div className="text-center pt-2">
                    <p className="text-sm text-slate-600">
                      Don't have an account?{" "}
                      <a
                        href="#"
                        className="font-bold text-[#20df60] hover:underline"
                      >
                        Sign up for free
                      </a>
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <footer className="py-8 px-6 text-center">
          <p className="text-xs text-slate-400">
            © 2024 EcoStream Inc. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-[#20df60] transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-[#20df60] transition-colors duration-200">
              Terms of Service
            </a>
          </p>
        </footer>

      </div>
    </div>
  );
}