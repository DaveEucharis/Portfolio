import homehugSS from "../assets/HomeHug.png";
import crashSS from "../assets/Crash.png";

type projectsData = {
  img: string;
  title: string;
  details: string;
  link: string;
}[];

const Projects = () => {
  const projectsData: projectsData = [
    {
      img: homehugSS,
      title: "HomeHug",
      details: "lorem lorem lorem lorem lorem lorem lorem lorem",
      link: "#",
    },
    {
      img: crashSS,
      title: "Crash Insurance",
      details: "lorem lolorem lorem lorem lorem lorem lorem lorem lorem",
      link: "#",
    },
  ];

  return (
    <ul className="mt-20 flex flex-wrap justify-around gap-10">
      {projectsData.map((v, i) => (
        <li
          key={i}
          className="group w-sm cursor-pointer transition-transform hover:-translate-y-10"
        >
          <a href={v.link} target="_blank">
            <img
              src={v.img}
              alt=""
              className="group-hover: h-50 w-full rounded-lg"
            />
            <h2 className="mt-2 text-2xl font-bold">{v.title}</h2>
            <p className="opacity-80">{v.details}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
