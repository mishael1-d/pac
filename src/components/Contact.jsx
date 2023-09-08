import React from "react";
import location from "../images/location.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import chat from "../images/chat.png";
import fb from "../images/fb-black.png";
import insta from "../images/insta-black.png";
import tw from "../images/tw-black.png";
import link from "../images/link-black.png";

function Contact() {
  return (
    <section id="contact" className="app-container !mt-[4rem]">
      <h3
        
        className="mx-auto mb-[1rem] w-fit border-b-2 border-[#067CA6] text-center text-[1.5rem] font-[600] text-[#0D1A3C] md:text-[2rem]"
      >
        Want to contact us?
      </h3>
      <div class="mx-auto grid w-[80%]">
        <div className="flex items-center justify-center text-center italic">
          <span className="border-r border-black pr-4 text-[1.2rem] ">
          A member of TIAG, TAG Alliances
          </span>
          <span className="ml-4 flex items-center gap-2">
            <p className="text-[1.2rem] italic ">Telephone:</p>
            <p>08033510318/07064171650</p>
          </span>
        </div>
        <div className="mt-[2rem] text-center text-[1.2rem]">
          <p>Phillips Akindele & Co.</p>
          <p>1 Engineering Close, Victoria Island 106104, Lagos</p>
          <span className="flex items-center justify-center gap-2">
            <p className=" italic ">Email:</p>{" "}
            <p>team@phillipsakindeleandco.com</p>
          </span>
          <div className="mt-[2rem]">
            <ul className="flex cursor-pointer items-center justify-center gap-6 text-[1rem] font-normal text-white">
              <li>
                <a
                  href="https://www.facebook.com/PortersWorldConsult/?modal=admin_todo_tour"
                  _target="blank"
                >
                  <img src={fb} alt="" className="w-[.8rem]" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pwconsult/" _target="blank">
                  <img src={insta} alt="" className="w-[1.2rem]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/porter's-world-consult/"
                  _target="blank"
                >
                  <img src={link} alt="" className="w-[1.2rem]" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/PWConsult_" _target="blank">
                  <img src={tw} alt="" className="w-[1.2rem]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="w-full bg-[#009FE3] p-4 text-center text-white" data-aos="fade-up">
          <img
            src={location}
            alt=""
            className="mx-auto w-[2.5rem] text-center"
          />
          <h3 className="my-[1rem] font-bold">OUR MAIN OFFICE</h3>
          <p>1 Engineering Close, Victoria Island 106104, Lagos</p>
        </div>
        <div className="w-full bg-[#009FE3] p-4 text-center text-white" data-aos="fade-up" data-aos-delay="300">
          <img
            src={phone}
            alt=""
            className="mx-auto w-[1.5rem] text-center"
          />
          <h3 className="my-[1rem] font-bold">PHONE NUMBER</h3>
          <p>
            08033510318 <br />
            07064171650
          </p>
        </div>
        <div className="w-full bg-[#009FE3] p-4 text-center text-white" data-aos="fade-up" data-aos-delay="600">
          <img
            src={mail}
            alt=""
            className="mx-auto w-[1.5rem] text-center"
          />
          <h3 className="my-[1rem] font-bold">EMAIL</h3>
          <p className="break-all text-[.8rem]">team@phillipsakindeleandco.com</p>
        </div>
        <div className="w-full bg-[#009FE3] p-4 text-center text-white" data-aos="fade-up" data-aos-delay="900">
          <img
            src={chat}
            alt=""
            className="mx-auto w-[1.5rem] text-center"
          />
          <h3 className="my-[1rem] font-bold">SOCIAL MEDIA</h3>
          <div className="mx-[1rem]">
            <ul className="flex cursor-pointer items-center justify-between text-[.8rem] font-normal text-white">
              <li>
                <a
                  href="https://www.facebook.com/PortersWorldConsult/?modal=admin_todo_tour"
                  _target="blank"
                >
                  <img src={fb} alt="" className="w-[.5rem]"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pwconsult/" _target="blank">
                  <img src={insta} alt=""className="w-[1rem]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/porter's-world-consult/"
                  _target="blank"
                >
                  <img src={link} alt="" className="w-[1rem]"/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/PWConsult_" _target="blank">
                  <img src={tw} alt="" className="w-[1rem]"/>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;