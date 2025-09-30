import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import skills from "../data/skillSet"


const SkillBar = ({ name, level, inView }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-sm font-medium text-gray-200">
        <span>{name}</span>
        <span>
          {inView ? (
            <CountUp end={level} duration={2} suffix="%" />
          ) : (
            "0%"
          )}
        </span>
      </div>
     <div className="w-full bg-bgLightBlue/30 rounded-full h-2.5">
  <div
    className={`h-2.5 rounded-full bg-gradient-to-r from-[#22c55e] via-[#facc15] to-[#a855f7] transition-all duration-1000`}
    style={{ width: inView ? `${level}%` : "0%" }}
  ></div>
</div>
    </div>
  );
};

const SkillSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // start animation when 20% visible
  });

  return (
    <section ref={ref} className="py-16 text-white">
        <div className="flex flex-col items-center mb-12 text-center px-6 gap-3">
            <h2 className="text-4xl font-bold">My Skills</h2>
            <p>Technologies and tools I work with to bring ideas to life.</p>
        </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Frontend */}
        <div className="bg-bgLightBlue rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-ActionColor">Frontend</h3>
          {skills.frontend.map((skill, i) => (
            <SkillBar key={i} {...skill} inView={inView} />
          ))}
        </div>

        {/* Backend */}
        <div className="bg-bgLightBlue rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-ActionColor">Backend</h3>
          {skills.backend.map((skill, i) => (
            <SkillBar key={i} {...skill} inView={inView} />
          ))}
        </div>

        {/* Tools & Others */}
        <div className="bg-bgLightBlue rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-ActionColor">
            Tools & Others
          </h3>
          {skills.tools.map((skill, i) => (
            <SkillBar key={i} {...skill} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;