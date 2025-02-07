import Logo_white from "../assets/far-logo.png";
import { Instagram, Facebook, Linkedin, Phone, Mail } from "lucide-react";
import qrcode from "../assets/qrcode.png";
const Footer = () => {
  return (
    <footer className="bg-primary px-2 space-y-4 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}

        <div className="md:flex space-y-4  gap-8">
          {/* Site Map Section */}
          <div>
            <img
              src={Logo_white}
              alt="FAR Logo"
              className="h-14 w-56 object-fill"
            />
            <div className="flex gap-4 mt-4">
              {/* social media icons */}
              <Instagram
                size={32}
                className="bg-white text-primary p-2 text-xl rounded-md"
              />
              <Facebook
                size={32}
                className="bg-white text-primary p-2 text-xl rounded-md"
              />
              <Linkedin
                size={32}
                className="bg-white text-primary p-2 text-xl rounded-md"
              />
            </div>
          </div>
          <div>
            <h3 className=" text-secondary mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  News & Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img src={qrcode} loading="eager" />
          </div>
          {/* Join Us Section */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 text-secondary">
                  Contact Us
                </a>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2 border border-white rounded-lg p-2">
                    <Phone
                      size={32}
                      className="bg-white text-primary p-2 text-xl rounded-md"
                    />
                    <span>RW + (250) 793 902 451</span>
                  </li>
                  <li className="flex items-center overflow-hidden gap-2 border border-white rounded-lg p-2">
                    <Mail
                      size={32}
                      className="bg-white  text-primary p-2 text-xl rounded-md"
                    />
                    <span className="text-pretty text-sm md:text-base">
                      fintechprofifesionalanetwork@gmail.com
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Empty Columns for Layout */}
        </div>
        {/* Copyright Section */}
      </div>
      <div className="h-[1px] my-8 w-full bg-white" />
      <div className="container md:flex justify-between items-center mx-auto  text-center">
        <p className="text-sm">©2024 FINTECH ASSOCIATION RWANDA</p>
        <p className="text-sm ">
          <a href="#" className="hover:text-gray-400 text-center text-xs">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
