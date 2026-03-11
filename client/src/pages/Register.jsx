import { useState } from "react";
import { useForm } from "react-hook-form";

/* ─── SVG Icons ─────────────────────────────────────────────────── */
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
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

const EcoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M6.05 8.31C4.08 9.86 3 12 3 12s3.75 7 9 7c2.07 0 3.96-.75 5.41-1.98L6.05 8.31zm2.43-2.17L17.96 15.6C19.24 14.08 20 12.13 20 10c0-4.42-3.58-8-8-8-1.49 0-2.88.41-4.07 1.12zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 3 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21l3.4 1.5 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#20df60" strokeWidth="2.5" className="w-8 h-8">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ─── Reusable Input ────────────────────────────────────────────── */
const InputField = ({ icon: Icon, hasError, rightSlot, ...props }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 flex pointer-events-none">
      <Icon />
    </span>
    <input
      {...props}
      className={[
        "w-full rounded-lg border bg-white py-3 pl-11 text-sm outline-none transition-all placeholder:text-slate-400",
        rightSlot ? "pr-12" : "pr-4",
        hasError
          ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
          : "border-slate-200 focus:border-[#20df60] focus:ring-2 focus:ring-[#20df60]/20",
      ].join(" ")}
    />
    {rightSlot && (
      <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
    )}
  </div>
);

/* ─── Main Component ────────────────────────────────────────────── */
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { fullName: "", email: "", password: "", terms: false },
  });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Signed up:", data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f8f6] font-[Manrope] text-slate-900">
      {/* Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');`}</style>

      {/* Page wrapper */}
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col items-center justify-center p-4 md:p-10">

          {/* ── Card ──────────────────────────────────────────────── */}
          <div className="w-full max-w-[480px] bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">

            {isSubmitted ? (
              /* ── Success ──────────────────────────────────────── */
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <div className="w-16 h-16 bg-[#20df60]/10 rounded-full flex items-center justify-center">
                  <CheckIcon />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Account Created!
                </h2>
                <p className="text-slate-500 text-sm">
                  Welcome to EcoStream. Start building today.
                </p>
              </div>
            ) : (
              <>
                {/* ── Header ──────────────────────────────────────── */}
                <header className="flex flex-col items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#20df60]/10 text-[#20df60]">
                    <EcoIcon />
                  </div>
                  <div className="text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                      Create account
                    </h1>
                    <p className="text-slate-500 mt-2 text-sm">
                      Join our community today and start building.
                    </p>
                  </div>
                </header>

                <div className="flex flex-col gap-4">

                  {/* Google button */}
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
                  >
                    <GoogleIcon />
                    Sign up with Google
                  </button>

                  {/* Divider */}
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-slate-500 tracking-wider font-medium">
                        Or continue with email
                      </span>
                    </div>
                  </div>

                  {/* ── Form ────────────────────────────────────────── */}
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    {/* Full Name */}
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-slate-700">
                        Full Name
                      </span>
                      <InputField
                        {...register("fullName", {
                          required: "Full name is required",
                          minLength: { value: 2, message: "Name must be at least 2 characters" },
                        })}
                        icon={PersonIcon}
                        type="text"
                        placeholder="John Doe"
                        hasError={!!errors.fullName}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 ml-0.5">{errors.fullName.message}</p>
                      )}
                    </label>

                    {/* Email */}
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-slate-700">
                        Email Address
                      </span>
                      <InputField
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                        icon={MailIcon}
                        type="email"
                        placeholder="name@example.com"
                        hasError={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 ml-0.5">{errors.email.message}</p>
                      )}
                    </label>

                    {/* Password */}
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-slate-700">
                        Password
                      </span>
                      <InputField
                        {...register("password", {
                          required: "Password is required",
                          minLength: { value: 8, message: "Password must be at least 8 characters" },
                        })}
                        icon={LockIcon}
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        hasError={!!errors.password}
                        rightSlot={
                          <button
                            type="button"
                            onClick={() => setShowPassword((p) => !p)}
                            className="text-slate-400 hover:text-slate-600 transition-colors duration-200 flex cursor-pointer bg-transparent border-none p-0"
                          >
                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                          </button>
                        }
                      />
                      {errors.password && (
                        <p className="text-xs text-red-500 ml-0.5">{errors.password.message}</p>
                      )}
                    </label>

                    {/* Terms checkbox */}
                    <div className="flex items-start gap-3 mt-1">
                      <input
                        {...register("terms", {
                          required: "You must agree to the terms to continue",
                        })}
                        id="terms"
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#20df60] cursor-pointer flex-shrink-0"
                      />
                      <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                        By signing up, you agree to our{" "}
                        <a href="#" className="text-[#20df60] hover:underline font-medium">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-[#20df60] hover:underline font-medium">
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-xs text-red-500 -mt-3 ml-0.5">{errors.terms.message}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={[
                        "mt-2 w-full rounded-lg bg-[#20df60] py-3.5 text-sm font-bold text-slate-900",
                        "shadow-lg shadow-[#20df60]/20 transition-all duration-200 active:scale-[0.98] border-none",
                        isSubmitting
                          ? "opacity-75 cursor-not-allowed"
                          : "hover:bg-[#20df60]/90 hover:shadow-[#20df60]/30 cursor-pointer",
                      ].join(" ")}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <SpinnerIcon />
                          Creating Account…
                        </span>
                      ) : (
                        "Create Account"
                      )}
                    </button>
                  </form>

                  {/* Sign-in link */}
                  <p className="mt-6 text-center text-sm text-slate-600">
                    Already have an account?{" "}
                    <a href="#" className="font-bold text-[#20df60] hover:underline">
                      Log in
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>

          {/* ── Footer Decorative ───────────────────────────────── */}
          <div className="mt-10 flex items-center gap-8 opacity-40">
            <div className="h-px w-12 bg-slate-300" />
            <div className="flex gap-4 text-slate-500">
              <VerifiedIcon />
              <ShieldIcon />
              <BoltIcon />
            </div>
            <div className="h-px w-12 bg-slate-300" />
          </div>

        </div>
      </div>
    </div>
  );
}