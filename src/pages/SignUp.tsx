import { Link } from "react-router-dom";
import Logo_black from "../assets/far-logo.png";
import Footer from "../components/Footer";
function SignUp() {
  return (
    <main>
      <article className="w-5/12 mx-auto border-2 my-12 rounded-lg">
        <header className="bg-primary p-4 flex justify-center items-center rounded-t-lg">
          <img src={Logo_black} alt="logo" className="h-20" />
        </header>
        <section className="space-y-4 p-4 pb-12 bg-white rounded-b-lg">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Enter your email
            </label>
            <input
              type="text"
              className="p-2 rounded-md border w-full"
              placeholder="Email address"
              autoComplete="false"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Create your password
            </label>
            <input
              type="password"
              className="p-2 rounded-md border w-full"
              placeholder="Password"
              autoComplete="false"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm your password
            </label>
            <input
              type="password"
              className="p-2 rounded-md border w-full"
              placeholder="Password"
              autoComplete="false"
            />
          </div>
          {/* reCAPTHA */}

          <div>
            <button className="w-full bg-primary text-white p-2 rounded-lg">
              Sign In
            </button>
          </div>
          {/* or divider */}
          <div className="flex items-center py-8 justify-center space-x-2">
            <div className="w-full h-0.5 bg-gray-300"></div>
            <span className="text-gray-500">OR</span>
            <div className="w-full h-0.5 bg-gray-300"></div>
          </div>
          {/* signup with google icon button */}
          <button className="w-full bg-white p-2 rounded-2xl border flex items-center justify-center space-x-2">
            <img
              src="https://img.icons8.com/color/32/000000/google-logo.png"
              className="h-6"
              loading="eager"
            />
            <span>Sign in with Google</span>
          </button>

          {/* signin with microsoft icon button */}
          <button className="w-full bg-white p-2 rounded-2xl border flex items-center justify-center space-x-2">
            <img
              src="https://img.icons8.com/color/32/000000/microsoft.png"
              className="h-6"
              loading="eager"
            />
            <span>Sign in with Microsoft</span>
          </button>
          <div className="flex items-center gap-x-2">
            <p className="text-center text-gray-500 text-sm">
              Already have an account?
            </p>
            <Link
              to="/signin"
              className="text-secondary-dark hover:text-secondary font-semibold text-center"
            >
              Sign in
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}

export default SignUp;
