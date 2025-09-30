import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="bg-bgLightBlue text-white">
        <section className="py-5 flex justify-between items-center border-b border-gray-600  mx-auto lg:w-[95%] w-[100%]">
            {/* company Details */}
            <div className="">
              <h1 className="sm:text-3xl text-xl font-bold hidden lg:block">
                Vanessa
              </h1>
            </div>
            <div className="">
              <p>Copyright ©2025Nessa</p>
            </div>
              {/* Social Handle */}
              <div className="flex items-center gap-4">
                <a href="#">
                  <FaInstagram className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl hover:text-primary duration-300 mr-12" />
                </a>
              </div>
        </section>
      </div>
    </div>
  );
}

export default Footer