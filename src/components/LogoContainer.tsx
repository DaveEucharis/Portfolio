import { ReactNode } from "react";

type LogoContainer = { svgLogo: ReactNode; name: string };

const LogoContainer = ({ svgLogo, name }: LogoContainer) => {
  return (
    <span className="group transition-1 flex items-center gap-2 opacity-60 hover:scale-150 hover:opacity-100 max-sm:w-15 max-sm:flex-col max-sm:gap-0 [&>svg]:w-10">
      {svgLogo}
      <p className="opacity-0 transition-opacity group-hover:opacity-100">
        {name}
      </p>
    </span>
  );
  ``;
};

export default LogoContainer;
