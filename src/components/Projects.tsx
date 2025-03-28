import homehugSS from "../assets/HomeHug.png";
import crashSS from "../assets/Crash.png";
import pingpongScorerSS from "../assets/Pingpong-Scorer.png";

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
      details:
        "A landing page for a conduminuim unit in ortigas called Deca-Homes",
      link: "#",
    },
    {
      img: crashSS,
      title: "Crash Insurance",
      details: "An Vehicle Insurance Seller",
      link: "#",
    },
    {
      img: pingpongScorerSS,
      title: "Ping-pong Scorer",
      details: "A scorer for pingpong or table tennis",
      link: "https://pingpong-scorer.vercel.app/",
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
