//import Register from "./Register";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Log in</h2>
          <form
            action="/examples/actions/confirmation.php"
            method="post"
            className="space-y-4"
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Log in
              </button>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <Link to="/Resetpassword">
                  <p className="text-blue-500 hover:underline">
                    Forgot Password?
                  </p>
                </Link>
              </div>
            </div>
          </form>
          <Link
            to="/Register"
            className="block mt-6 text-center text-blue-500 hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </>
  );
}
