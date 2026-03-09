import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch({
      type: "auth/registerUser",
      payload: { name, email, password }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">

      <form
        onSubmit={submitHandler}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        {/* NAME */}

        <div className="mb-4">

          <label className="block mb-1 font-medium">
            Name
          </label>

          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

        </div>

        {/* EMAIL */}

        <div className="mb-4">

          <label className="block mb-1 font-medium">
            Email
          </label>

          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        </div>

        {/* PASSWORD */}

        <div className="mb-4">

          <label className="block mb-1 font-medium">
            Password
          </label>

          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        </div>

        {/* CONFIRM PASSWORD */}

        <div className="mb-6">

          <label className="block mb-1 font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />

        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

      </form>

    </div>
  );
};

export default Register;