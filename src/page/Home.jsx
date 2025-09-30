
import { ReactTyped } from "react-typed";
import heroImg from "../assets/Hero-Image.png";
import Button from "../components/Button";
import ParticlesBackground from "../components/Particle";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <ParticlesBackground />
        <section className="relative text-white z-1 pt-20">
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-center px-6 md:px-20 py-20">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg">👋 Hi, I’m</p>
              <h1
                className="text-5xl md:text-6xl font-bold 
  bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500 
  bg-clip-text text-transparent"
              >
                Vanessa Lydia
              </h1>

              <h2 className="mt-4 text-2xl">
                I specialize in{" "}
                <ReactTyped
                  strings={[
                    "Web Development",
                    "UI/UX Design",
                    "API Integration",
                    "Responsive Websites",
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                />
              </h2>

              <p className="mt-6 text-gray-300 max-w-lg">
                A passionate developer building modern, fast, and responsive web
                apps that solve real problems and create value for clients.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex gap-4 justify-center md:justify-start">
                <Button variant="primary">Hire Me</Button>
                {/* <Button variant="secondary">View Projects</Button> */}
                <Button variant="outline">Contact</Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              {/* Circular Frame */}
              <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[383px] rounded-full bg-bgLightBlue flex items-center justify-center shadow-2xl">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-bgLightBlue opacity-30 blur-2xl"></div>

                <img
                  src={heroImg}
                  alt="Hero"
                  className="relative w-[350px] md:w-[400px] rounded-full"
                />

                {/* Floating stars/icons */}
                <span className="absolute -top-4 -left-4 text-yellow-400 text-xl">
                  ★
                </span>
                <span className="absolute top-10 -right-5 text-yellow-400 text-lg">
                  ✦
                </span>
                <span className="absolute bottom-6 -left-3 text-yellow-400 text-lg">
                  ✧
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
