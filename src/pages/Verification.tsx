import Logo_black from "../assets/far-logo.png";
import Footer from "../components/Footer";
function Verification() {
  return (
    <main>
      <article className="w-5/12 mx-auto border-2 my-12 rounded-lg">
        <header className="bg-primary p-4 flex justify-center items-center rounded-t-lg">
          <img src={Logo_black} alt="logo" className="h-20" />
        </header>
        <section className="space-y-4 px-12 pb-12 bg-white rounded-b-lg">
          <div className="space-y-2">
            {" "}
            <h5 className="text-lg text-primary font-semibold">
              We’ve Sent You a Verification Code!
            </h5>
            <p className="text-xs w-10/12 text-gray-800">
              Check your inbox for a 6-digit code. Didn’t get it? Check spam or
              resend below.
            </p>
          </div>
          {/* map 6 otp input box */}

          <div className="grid py-2 grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                className="border rounded-md border-gray-300 p-2 text-center"
                maxLength={1}
              />
            ))}
          </div>
          <button className="w-full bg-primary capitalize text-white p-2 rounded-2xl hover:bg-secondary hover:text-primary">
            verify
          </button>
          <div className="flex items-center mt-4">
            <p className="text-sm text-gray-500 mr-2">
              Didn’t receive the code?
            </p>
            <button className="text-sm text-secondary-dark hover:text-secondary">
              Resend
            </button>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}

export default Verification;
