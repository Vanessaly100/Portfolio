
function ProjectCard({ image, title, description,link }) {
  return (
    <>
    <div className="bg-gradient-to-b from-bgLightBlue/20 to-transparent p-4 rounded-xl shadow-lg border border-bgLightBlue/40 hover:shadow-ActionColor/40 transition duration-300 flex flex-col items-center text-center">
      <div className="mb-4">
        <img src={image} alt={title} className="w-full h-40 object-contain mx-auto" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer mt-3 px-4 py-2 bg-ActionColor text-white text-sm rounded-xl hover:bg-ActionColor/95 transition"
      >
        View Project
      </a>
    </div>
    </>
  );
}

export default ProjectCard;
