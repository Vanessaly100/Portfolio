// import React from 'react'
// import ContactUsImg from '../../assets/AboutusIMg.jpg'
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import Form from "./Form";
// import contactformimg from '../../assets/contactformimg.jpg'
import Maps from "./Maps";
import ParticlesBackground from "../../components/Particle";

const Contacts = () => {
  return (
    <div>
       <div className="relative min-h-screen pt-20">
        <ParticlesBackground />
      <section className="text-white">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-col xl:grid-cols-4 md:grid-cols-2 text-center gap-8 py-12">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="flex flex-col items-center  gap-6 border border-gray-500 p-7"
            >
              <div className="bg-bgLightBlue w-fit p-6 rounded-2xl">
                <FaMapLocationDot color="#F59E0B" size={30} />
              </div>
              <div>
                <p className="text-1xl font-bold">123, King Street, NY</p>
                <span>Visit Us</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="flex flex-col items-center  gap-6 border border-gray-500 p-7"
            >
              <div className="bg-bgLightBlue w-fit p-6 rounded-2xl">
                <MdAddCall color="#F59E0B" size={30} />
              </div>
              <div>
                <p className="text-1xl font-bold">09035001082</p>
                <span>Call Us</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex flex-col items-center  gap-6 border border-gray-500 p-7"
            >
              <div className="bg-bgLightBlue w-fit p-6 rounded-2xl">
                <MdAttachEmail color="#F59E0B" size={30} />
              </div>
              <div>
                <p className="text-1xl font-bold">veelydia958@gmail.com</p>
                <span>Email Us</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-col items-center  gap-6 border border-gray-500 p-7"
            >
              <div className="bg-bgLightBlue w-fit p-6 rounded-2xl">
                <IoIosTime color="#F59E0B" size={30} />
              </div>
              <div>
                <p className="text-1xl font-bold">Mon-Fri: 9:00am - 7:00pm</p>
                <span>Business Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-fit text-white xl:p-10 p-5">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="lg:w-[60%] mx-auto w-[100%]"
        >
          <div className="h-fit">
            <Form />
          </div>
        </div>
      </section>
      {/* map */}
      <section>
        <Maps />
      </section>
    </div>
    </div>
  );
}

export default Contacts