import AboutImg from "../assets/About-portfolio-image.jpg";
import ParticlesBackground from "../components/Particle";
import VerticalScroll from "../components/VerticalScroll";
import SkillSection from "../components/SkillSection";

const About = () => {
  return (
    <>
     <div className="relative min-h-screen">
        <ParticlesBackground />
      <section className="relative pt-20 z-1 text-white">
        <div className="w-[88%] mx-auto grid md:grid-cols-2 gap-10 items-center py-20">
          <div className="lg:h-[550px] lg:w-[500px] h-[400px] w-[90%] mx-auto">
            <img src={AboutImg} alt="" className="w-full h-full object-cover rounded-3xl" />
          </div>
          <div className="">
            <div className="relative">
              <h2 className="text-[4rem]">About me</h2>
              <span className="absolute left-0 bottom-0 w-20 h-1 bg-ActionColor"></span>
            </div>
            <p className="py-6 max-w-lg">
              {" "}
              My name is Nduba Chidimma Vanessa. i'm a Fullstack Developer,
              based in Lagos Nigeria and i'm very passionate and dedicated to my
              work, with 2 years experience as a professional Full Stack
              Developer{" "}
            </p>
             <div className="border-2 border-ActionColor flex gap-6 p-5 lg:flex-row flex-col rounded-2xl max-w-lg">
                {/* left */}
            <div className="">
              <div className="flex gap-2">
                <p className="font-bold">Name:
                </p>
                <span className="">Nduba Vanessa</span>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Phone:
                </p>
                <span className="">09036321461</span>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Experience:
                </p>
                <span className="">2 years</span>
              </div>
            </div>
                {/* right*/}
            <div className="">
              <div className="flex gap-2">
                <p className="font-bold">Age:
                </p>
                <span className="">28</span>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Address:
                </p>
                <span className="">SU ifite Awka Anambra State</span>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Freelancer:
                </p>
                <span className="">Available</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section>
        <SkillSection/>
      </section>
       <section>
        <VerticalScroll/>
      </section>
      </div>
    </>
  );
};

export default About;
