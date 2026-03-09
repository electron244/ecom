import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "auth/loginUser",
      payload: { email, password }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">

      <form
        onSubmit={submitHandler}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center">
            {error}
          </p>
        )}

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

        <div className="mb-6">

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

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  );
};

export default Login;