import { useState, useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";
import { NavLink} from "react-router-dom";
import { PiPhoneCallFill } from "react-icons/pi";
import NavbarImg from "../assets/NavbarImg.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Function to handle link click
  const handleLinkClick = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div>
      <header
        className={`w-full fixed top-0 left-0 transition-all duration-300 z-50 ${
          sticky
            ? "bg-[#107869]/15 backdrop-blur-3xl text-white shadow-lg"
            : "bg-transparent text-white navbar"
        }`}
      >
        <nav className="xl:flex hidden justify-between items-center w-full h-16 px-5 py-10 font-semibold lg:px-10 text-base uppercase ">
          <span className="flex items-center">
            <img src={NavbarImg} alt="" className="h-15 w-15 rounded-b-full" />
          </span>
          <div className="flex items-center text gap-8 ">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-ActionColor"
                  : `p-1 rounded ${
                      sticky
                        ? "hover:text-ActionColor"
                        : "text-white hover:text-ActionColor"
                    }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "p-1 rounded text-ActionColor"
                  : `p-1 rounded ${
                      sticky
                        ? "hover:text-ActionColor"
                        : "text-white hover:text-ActionColor"
                    }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="projects"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "p-1 rounded text-ActionColor"
                  : `p-1 rounded ${
                      sticky
                        ? "hover:text-ActionColor"
                        : "text-white hover:text-ActionColor"
                    }`
              }
            >
              Project
            </NavLink>

            
            <NavLink
              to="contacts"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "p-1 rounded text-ActionColor"
                  : `p-1 rounded ${
                      sticky
                        ? "rounded hover:text-ActionColor"
                        : "text-white rounded hover:text-ActionColor"
                    }`
              }
            >
              Contacts
            </NavLink>
          </div>
          <div className="flex gap-2">
            <PiPhoneCallFill size={30} />
            <h1>+234 9035001082</h1>
          </div>
        </nav>
        {/* mobile nav */}
        <nav className="flex justify-between items-center  w-full h-16 bg-white text-black relative py-3 px-8 mr-auto lg:hidden">
           <span className="flex items-center">
            <img src={NavbarImg} alt="" className="h-10 w-10 rounded-b-full" />
          </span>

          <ul
            className={`bg-bgLightBlue/90 text-white flex flex-col items-center gap-3 font-semibold text-lg text-center h-screen fixed top-0 mt-16 w-screen pt-8 pl-6 left-full transition-all 5s ${
              open ? "!left-0" : " "
            }  `}
          >
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "p-1 rounded text-ActionColor"
                  : `p-1 rounded ${
                      sticky
                        ? "text-white hover:text-ActionColor"
                        : "text-white"
                    }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-ActionColor p-1 rounded"
                  : `p-1 rounded ${
                      sticky
                        ? "text-white hover:text-ActionColor"
                        : "text-white  hover:text-white"
                    }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="projects"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "p-1 rounded text-ActionColor"
                  : `p-1 rounded ${
                      sticky
                        ? "text-white hover:text-ActionColor"
                        : "text-white"
                    }`
              }
            >
              Projects
            </NavLink>

           
            <NavLink
              to="contacts"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "p-1 rounded text-ActionColor"
                  : `p-1 rounded ${
                      sticky
                        ? "text-white hover:text-ActionColor"
                        : "text-white"
                    }`
              }
            >
              Contacts
            </NavLink>
          </ul>
          <RiMenuLine onClick={() => setOpen(!open)} color="black" size={30} />
        </nav>
      </header>
    </div>
  );
}

export default Navbar