import { Mail, Phone } from "lucide-react";
function Contact() {
  return (
    <main>
      <section id="contact-banner" className="flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white tracking-widest">
          Contact
        </h1>
      </section>
      <article className="container md:grid grid-cols-2 mx-auto py-12">
        <aside className="space-y-6">
          <h1 className="text-primary text-3xl font-bold">
            Contact information
          </h1>
          <p className="text-gray-800 text-sm text-pretty">
            Thank you for reaching out to the Rwanda FinTech Association! We’re
            here to support innovation and collaboration in Rwanda’s FinTech
            ecosystem.
          </p>
          <a className="flex items-center space-x-2" href="#">
            <Mail
              size={32}
              className="bg-secondary-dark text-white font-bold p-2 text-xl rounded-md"
            />
            <span className="text-primary">
              fintechprofffesionalsnetwork@gmail.com
            </span>
          </a>
          <a className="flex items-center space-x-2" href="#">
            <Phone
              size={32}
              className="bg-secondary-dark text-white font-bold fill-white p-2 text-xl rounded-md"
            />
            <span className="text-primary">RW +(250) 793 902 451</span>
          </a>
        </aside>
        <aside className="space-y-6 rounded-md p-8 shadow-lg">
          <h1 className="text-primary text-3xl font-bold">Let's Talk</h1>
          <form className="space-y-6 ">
            <input
              type="text"
              placeholder="Name"
              className="mt-0 block w-full border-0 border-b-2 border-gray-200 px-0.5 focus:border-black focus:ring-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="mt-0 block w-full border-0 border-b-2 border-gray-200 px-0.5 focus:border-black focus:ring-0 
              "
            />
            <textarea
              placeholder="Message"
              className="mt-0 block w-full border-0 border-b-2 border-gray-200 px-0.5 focus:border-black focus:ring-0"
            ></textarea>
            <button className="bg-primary text-white p-2 rounded-3xl w-full hover:bg-secondary hover:text-primary transition-colors ease-in duration-300">
              Submit
            </button>
          </form>
        </aside>
      </article>
    </main>
  );
}

export default Contact;
