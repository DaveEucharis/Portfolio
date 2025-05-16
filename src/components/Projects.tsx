import homehugSS from "../assets/HomeHug.webp";
import crashSS from "../assets/Crash.webp";
import pingpongScorerSS from "../assets/Pingpong-Scorer.webp";
import wordFactorySS from "../assets/word-factory.webp";

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
      title: "Home Hug",
      details: "A Condominium Unit, located at Urban Deca-Homes Ortigas",
      link: "https://home-hug.vercel.app/",
    },
    {
      img: crashSS,
      title: "Crash Insurance",
      details: "A local Vehicle Insurance business in Bulacan PH.",
      link: "https://crash-insurance.vercel.app/",
    },
    {
      img: pingpongScorerSS,
      title: "Ping-pong Scorer",
      details: "Helps scoring, tracking service in ping-pong",
      link: "https://pingpong-scorer.vercel.app/",
    },
    {
      img: wordFactorySS,
      title: "Word Factory",
      details: "Full-stack application, a multiplayer game",
      link: "https://word-factory.vercel.app/",
    },
  ];

  return (
    <ul className="mt-20 flex flex-wrap justify-around gap-12 px-4">
      {projectsData.map((v, i) => (
        <li
          key={i}
          className="group w-sm cursor-pointer transition-transform hover:-translate-y-5"
        >
          <a href={v.link} target="_blank">
            <img src={v.img} alt="" className="h-50 w-full rounded-lg" />
            <h2 className="mt-2 text-2xl font-bold">{v.title}</h2>
            <p className="mt-2 text-sm opacity-80">{v.details}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
