import Link from "next/link";
import React from "react";
import FooterLogo from "../../../modules/home/elements/footer.logo";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-10">
      <div className="w-[95%] md:flex m-auto py-5">
        <div className="w-full md:w-[40%]">
          <Link href={"/"}>
            <FooterLogo />
          </Link>
          <p className="text-2xl py-2">
            Get BuzzLetter updates delivered directly to your inbox.
          </p>
          <div className="flex items-center w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="bg-transparent w-full md:w-[50%] border h-[42px] px-2 rounded rounded-r-[0] outline-none"
            />
            <button className="w-[90px] cursor-pointer  rounded-r h-[43px] bg-blue-500 text-xl outline-none">
              submit
            </button>
          </div>
          <br />
          <p className="text-xs">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
        <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
          <div className="md:w-[50%] flex justify-around">
            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Create</li>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Write</li>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Grow</li>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Monitize</li>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Analayze</li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Carrers</li>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Pricing</li>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Shop</li>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Compare</li>
                <li className="text-xl pb-4 cursor-pointer hover:translate-x-1 transition transition-all duration-250">Love</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg text-center pb-10">
        © 2024 BuzzLetter, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
