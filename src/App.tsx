import { useEffect, useRef } from "react";
import "./App.css";

import phIcon from "./assets/ph-flag.svg";

import LogoContainer from "./components/LogoContainer";
import Projects from "./components/Projects";

import logoAnimation from "./utility/LogoAnimation";

const App = () => {
  const logoParent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoParent.current) logoAnimation(logoParent.current);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="flex-center min-h-dvh gap-6 max-sm:flex-col">
        <div className="p-4">
          <h1 className="text-5xl font-bold">Dave Eucharis Payumo</h1>

          <p className="mt-4 max-w-xl text-wrap">
            I've been working with React, Typescript, CSS for 2+ years and I'm
            looking forward to working with you!
          </p>

          <span className="mt-4 font-bold opacity-60">Frontend Developer</span>

          <span className="mt-4 flex gap-0.5 opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M5.99982 0C3.70365 0 1.83562 1.86831 1.83562 4.16453C1.83562 6.37485 5.61387 11.5389 5.77474 11.7576L5.92488 11.9619C5.94244 11.986 5.9704 12 5.99982 12C6.02969 12 6.05747 11.986 6.07521 11.9619L6.22526 11.7576C6.38622 11.5389 10.1644 6.37485 10.1644 4.16453C10.1644 1.86831 8.29604 0 5.99982 0ZM5.99982 2.67281C6.82254 2.67281 7.49155 3.34184 7.49155 4.16453C7.49155 4.9868 6.82251 5.65626 5.99982 5.65626C5.17758 5.65626 4.50809 4.9868 4.50809 4.16453C4.50809 3.34184 5.17755 2.67281 5.99982 2.67281Z"
                fill="white"
              />
            </svg>
            <p className="text-xs">Bulacan, Philippines</p>
            <img src={phIcon} alt="Philippine Flag" className="ml-0.5 w-5" />
          </span>

          <div className="mt-8 flex gap-6 *:cursor-pointer">
            <a href="https://github.com/DaveEucharis" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_2_257)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4628 0C5.57117 0 0 5.72917 0 12.8169C0 18.4826 3.56964 23.2784 8.52168 24.9758C9.14082 25.1034 9.3676 24.7 9.3676 24.3607C9.3676 24.0635 9.34719 23.0451 9.34719 21.9839C5.88036 22.7479 5.15842 20.456 5.15842 20.456C4.60128 18.9706 3.77577 18.5888 3.77577 18.5888C2.64107 17.8036 3.85842 17.8036 3.85842 17.8036C5.11709 17.8885 5.77755 19.1193 5.77755 19.1193C6.89158 21.0714 8.68673 20.5198 9.40893 20.1802C9.51199 19.3526 9.84235 18.7797 10.1931 18.4615C7.42806 18.1643 4.51888 17.0609 4.51888 12.1378C4.51888 10.7372 5.01378 9.59141 5.79796 8.70026C5.67423 8.38203 5.24082 7.06615 5.92194 5.30495C5.92194 5.30495 6.97423 4.96536 9.34694 6.62057C10.3628 6.34002 11.4104 6.1973 12.4628 6.19609C13.5151 6.19609 14.5878 6.34479 15.5783 6.62057C17.9513 4.96536 19.0036 5.30495 19.0036 5.30495C19.6847 7.06615 19.251 8.38203 19.1273 8.70026C19.9321 9.59141 20.4066 10.7372 20.4066 12.1378C20.4066 17.0609 17.4974 18.143 14.7117 18.4615C15.1658 18.8646 15.5577 19.6284 15.5577 20.838C15.5577 22.5568 15.5372 23.9362 15.5372 24.3604C15.5372 24.7 15.7643 25.1034 16.3832 24.976C21.3352 23.2781 24.9048 18.4826 24.9048 12.8169C24.9253 5.72917 19.3337 0 12.4628 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_257">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#sent?compose=GTvVlcSMTthgtlqnlPCpJcKXKMZqTlTHSSrxDfxdfqWtFNTLMDLLSTwxFFGqbxSBRkfJgKVJZRQbf"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_2_266)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25 5.57638V21.0652L18.9562 13.5112L17.8078 14.4303L23.9104 22.0592H1.08964L7.19223 14.4303L6.04376 13.5112L0 21.0652V5.57636L12.4993 16.4154L25 5.57638ZM24.9991 2.9427V3.62795L12.4999 14.467L0.000585938 3.62796V2.9427H24.9991Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.416667"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_266">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        <div
          ref={logoParent}
          className="mt-4 flex flex-col flex-wrap gap-10 px-6 max-sm:flex-row max-sm:justify-around"
        >
          <LogoContainer
            svgLogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M6.125 26.75L4.25 3.3125H26.75L24.875 26.75L15.5 29.5625L6.125 26.75Z"
                  fill="#E44D26"
                />
                <path
                  d="M24.875 5.1875H15.5V28.1562L23 25.8125L24.875 5.1875Z"
                  fill="#F16529"
                />
                <path
                  d="M9.40625 16.9062L8.46875 8H23L22.5312 10.8125H11.2812L11.75 14.0938H22.0625L21.125 23L15.5 24.875L9.875 23L9.40625 18.3125H12.2188L12.6875 20.6562L15.5 21.5938L18.3125 20.6562L18.7812 16.9062H9.40625Z"
                  fill="white"
                />
              </svg>
            }
            name="HTML"
          />

          <LogoContainer
            svgLogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M6.125 26.75L4.25 3.3125H26.75L24.875 26.75L15.5 29.5625L6.125 26.75Z"
                  fill="#1172B8"
                />
                <path
                  d="M24.875 5.1875H15.5V28.1562L23 25.8125L24.875 5.1875Z"
                  fill="#33AADD"
                />
                <path
                  d="M18.7812 16.9062H9.40625L8.9375 13.625L16.4375 11.2812H8.9375L8.46875 8.46875H23L22.5312 11.75L16.4375 14.0938H22.0625L21.125 23L15.5 24.875L9.875 23L9.40625 18.3125H12.2188L12.6875 20.6562L15.5 21.5938L18.3125 20.6562L18.7812 16.9062Z"
                  fill="white"
                />
              </svg>
            }
            name="CSS"
          />
          <LogoContainer
            svgLogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 31"
                fill="none"
              >
                <g clip-path="url(#clip0_2_241)">
                  <path
                    d="M25.5 0.5H4.5C2.01472 0.5 0 2.51472 0 5V26C0 28.4853 2.01472 30.5 4.5 30.5H25.5C27.9853 30.5 30 28.4853 30 26V5C30 2.51472 27.9853 0.5 25.5 0.5Z"
                    fill="#F7DF1E"
                  />
                  <path
                    d="M18.9844 22.1797C19.5703 23.1758 20.3906 23.8789 21.7383 23.8789C22.9102 23.8789 23.6719 23.293 23.6719 22.4727C23.6719 21.5352 22.9102 21.1836 21.6211 20.5977L20.918 20.3047C18.8672 19.4258 17.5195 18.3711 17.5195 16.0859C17.5195 13.9766 19.1016 12.3359 21.6211 12.3359C23.4375 12.3359 24.7266 12.9805 25.6055 14.6211L23.4375 16.0273C22.9688 15.1484 22.4414 14.7969 21.6211 14.7969C20.8008 14.7969 20.2734 15.3242 20.2734 16.0273C20.2734 16.8477 20.8008 17.1992 22.0312 17.7266L22.7344 18.0195C25.1367 19.0742 26.4844 20.0703 26.4844 22.4727C26.4844 24.9922 24.4922 26.3984 21.7969 26.3984C19.1602 26.3984 17.4609 25.168 16.6406 23.5273L18.9844 22.1797ZM9.02344 22.4141C9.49219 23.1758 9.84375 23.8789 10.8398 23.8789C11.7773 23.8789 12.3633 23.5273 12.3633 22.1211V12.3945H15.1758V22.0039C15.1758 24.9336 13.4766 26.2227 10.957 26.2227C8.67188 26.2227 7.38281 25.0508 6.73828 23.6445L9.02344 22.4141Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_241">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            name="JavaScript"
          />
          <LogoContainer
            svgLogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M15.475 17.99C16.8612 17.99 17.985 16.8662 17.985 15.48C17.985 14.0938 16.8612 12.97 15.475 12.97C14.0888 12.97 12.965 14.0938 12.965 15.48C12.965 16.8662 14.0888 17.99 15.475 17.99Z"
                  fill="#00D8FF"
                />
                <path
                  d="M15.475 21.23C11.95 21.23 8.87 20.815 6.565 20.025C5.07 19.515 3.8 18.835 2.895 18.06C1.935 17.24 1.425 16.345 1.425 15.48C1.425 13.82 3.245 12.195 6.3 11.135C8.8 10.265 12.06 9.78 15.47 9.78C18.82 9.78 22.035 10.25 24.52 11.11C25.975 11.61 27.2 12.26 28.07 12.98C29.015 13.77 29.515 14.635 29.515 15.48C29.515 17.205 27.48 18.95 24.2 20.035C21.88 20.805 18.78 21.23 15.475 21.23ZM15.475 10.98C12.24 10.98 9.04 11.45 6.7 12.265C3.89 13.245 2.63 14.585 2.63 15.48C2.63 16.41 3.985 17.875 6.955 18.89C9.135 19.635 12.085 20.03 15.475 20.03C18.655 20.03 21.62 19.63 23.825 18.895C26.91 17.87 28.32 16.405 28.32 15.48C28.32 15.005 27.96 14.445 27.305 13.9C26.55 13.27 25.45 12.695 24.135 12.24C21.77 11.43 18.695 10.98 15.475 10.98Z"
                  fill="#00D8FF"
                />
                <path
                  d="M9.78001 27.99C9.27001 27.99 8.82001 27.88 8.44001 27.66C7.00501 26.83 6.50501 24.44 7.11001 21.265C7.60501 18.66 8.81501 15.6 10.52 12.645C12.195 9.745 14.205 7.195 16.19 5.47C17.35 4.46 18.525 3.72 19.585 3.33C20.74 2.905 21.74 2.905 22.47 3.325C23.965 4.185 24.46 6.825 23.76 10.205C23.265 12.605 22.085 15.5 20.435 18.365C18.675 21.415 16.775 23.875 14.94 25.48C13.75 26.52 12.525 27.28 11.405 27.675C10.82 27.885 10.27 27.99 9.78001 27.99ZM11.035 12.945L11.555 13.245C9.94001 16.045 8.74501 19.05 8.28501 21.49C7.73001 24.415 8.26501 26.175 9.03501 26.62C9.22501 26.73 9.47501 26.79 9.78001 26.79C10.775 26.79 12.34 26.16 14.15 24.58C15.885 23.065 17.7 20.705 19.395 17.77C20.985 15.015 22.115 12.245 22.585 9.97C23.24 6.785 22.675 4.835 21.87 4.37C21.46 4.135 20.795 4.165 19.995 4.46C19.07 4.8 18.025 5.465 16.975 6.38C15.09 8.02 13.165 10.46 11.555 13.25L11.035 12.945Z"
                  fill="#00D8FF"
                />
                <path
                  d="M21.17 28.005C19.81 28.005 18.085 27.185 16.285 25.635C14.275 23.905 12.23 21.33 10.52 18.375C8.84 15.475 7.64 12.46 7.135 9.87499C6.84 8.36499 6.785 6.97999 6.975 5.86499C7.185 4.64999 7.68 3.78499 8.415 3.35999C9.905 2.49499 12.44 3.38499 15.02 5.67999C16.85 7.30499 18.77 9.77499 20.425 12.635C22.19 15.685 23.375 18.56 23.845 20.95C24.15 22.5 24.2 23.94 23.985 25.11C23.755 26.355 23.235 27.24 22.485 27.675C22.11 27.895 21.665 28.005 21.17 28.005ZM11.56 17.775C13.18 20.575 15.19 23.11 17.07 24.725C19.325 26.665 21.115 27.085 21.89 26.635C22.695 26.17 23.285 24.265 22.675 21.185C22.225 18.925 21.09 16.175 19.39 13.24C17.795 10.485 15.96 8.11999 14.225 6.57999C11.795 4.41999 9.825 3.93499 9.02 4.39999C8.61 4.63499 8.305 5.22999 8.16 6.06999C7.995 7.03999 8.045 8.27999 8.315 9.64499C8.795 12.1 9.945 14.985 11.56 17.775Z"
                  fill="#00D8FF"
                />
              </svg>
            }
            name="React"
          />
          <LogoContainer
            svgLogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M22.8378 8.2278C23.6359 8.41346 24.3611 8.83135 24.9219 9.42874C25.2308 9.75204 25.499 10.1119 25.7206 10.5003C25.7309 10.5425 24.2825 11.5156 23.4041 12.0584C23.3722 12.08 23.2456 11.9422 23.1022 11.7303C22.9417 11.4545 22.7139 11.2238 22.4402 11.0598C22.1664 10.8959 21.8555 10.804 21.5366 10.7928C20.5269 10.7234 19.8763 11.2522 19.8809 12.1362C19.8722 12.3534 19.9217 12.569 20.0244 12.7606C20.2466 13.22 20.6591 13.4956 21.9547 14.0572C24.3397 15.0837 25.3634 15.7606 25.9953 16.7225C26.3525 17.3302 26.5725 18.0087 26.6398 18.7104C26.7072 19.4121 26.6203 20.1201 26.3853 20.7847C26.0623 21.5135 25.5501 22.1426 24.9019 22.6067C24.2537 23.0708 23.4931 23.3529 22.6991 23.4237C21.855 23.5206 21.0022 23.5117 20.1603 23.3975C18.8708 23.1856 17.6829 22.5667 16.7703 21.6312C16.4255 21.243 16.1336 20.8108 15.9022 20.3459C15.9995 20.2735 16.102 20.2084 16.2088 20.1509C16.3569 20.0665 16.9175 19.744 17.4463 19.4375L18.4063 18.875L18.6069 19.1675C18.9448 19.6507 19.3749 20.0624 19.8725 20.3787C20.375 20.6544 20.9443 20.785 21.5167 20.756C22.0891 20.7271 22.6422 20.5396 23.1144 20.2147C23.3579 19.9773 23.5102 19.6618 23.5445 19.3234C23.5787 18.9851 23.4929 18.6454 23.3019 18.364C23.0431 17.9937 22.5144 17.6825 21.0116 17.0309C19.8332 16.6336 18.7599 15.975 17.8719 15.1044C17.449 14.6225 17.1367 14.0538 16.9569 13.4384C16.8239 12.7373 16.8043 12.0195 16.8988 11.3122C17.0752 10.4983 17.4975 9.75828 18.1086 9.19248C18.7197 8.62668 19.49 8.26241 20.315 8.14905C21.1551 8.04866 22.0056 8.0752 22.8378 8.2278ZM15.0163 9.61811L15.0266 10.9812H10.6859V23.3075H7.62501V10.984H3.28438V9.6453C3.27284 9.18683 3.28536 8.72808 3.32188 8.27092C3.33782 8.24936 5.97688 8.23905 9.17657 8.24467L14.9994 8.26061L15.0163 9.61811Z"
                  fill="#007ACC"
                />
              </svg>
            }
            name="TypeScript"
          />
          <LogoContainer
            svgLogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  d="M8.4375 13.3437C9.3125 9.84375 11.5 8.09375 15 8.09375C20.25 8.09375 20.9062 12.0312 23.5312 12.6875C25.2812 13.125 26.8125 12.4687 28.125 10.7187C27.25 14.2187 25.0625 15.9687 21.5625 15.9687C16.3125 15.9687 15.6562 12.0312 13.0312 11.375C11.2812 10.9375 9.75 11.5937 8.4375 13.3437ZM1.875 21.2187C2.75 17.7187 4.9375 15.9687 8.4375 15.9687C13.6875 15.9687 14.3438 19.9062 16.9688 20.5625C18.7188 21 20.25 20.3437 21.5625 18.5937C20.6875 22.0937 18.5 23.8437 15 23.8437C9.75 23.8437 9.09375 19.9062 6.46875 19.25C4.71875 18.8125 3.1875 19.4687 1.875 21.2187Z"
                  fill="#44A8B3"
                />
              </svg>
            }
            name="Tailwind"
          />
        </div>
      </section>
      {/* Projects Section */}
      <section>
        <div className="px-8 pt-10">
          <h1 className="text-center text-5xl font-bold">Projects</h1>

          <Projects />
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <h1 className="mt- text-center text-5xl font-bold">About Me</h1>

        <p className="mx-auto mt-12 max-w-4xl px-4 text-wrap">
          {/* Greetings, I'm Dave Eucharis Payumo, I've been coding since I was 12
          years old but for my favorite game "Minecraft", now you might ask,
          how's that relevant? Well, because of Javascript, yes, I've been
          writing code */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur exercitationem aut quae, tempore ab animi quam. Excepturi
          eaque perspiciatis delectus quae enim saepe minima voluptate earum,
          facilis, distinctio dolorem architecto debitis? Velit saepe id
          assumenda libero fuga magnam expedita? lorem
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, atque
          reprehenderit! Doloremque quasi cupiditate nesciunt quam iste optio
          laboriosam. Placeat eius repudiandae, eos assumenda facere veniam
          dicta officiis id! Et, autem veritatis. Unde quae inventore nisi a
          quam perspiciatis ullam laboriosam impedit placeat, nobis quis! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Minus excepturi
          beatae ducimus. Voluptatem voluptas, rem repellat qui sequi explicabo
          quia nobis nostrum earum, assumenda minima quidem maxime ab voluptates
          sed.
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          molestias placeat sunt numquam id non labore cumque, vel expedita eos
          fuga amet doloremque rem asperiores facilis dignissimos et eum officia
          illum, repellat consectetur eligendi ipsam quod quasi. Optio, atque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          reiciendis a quo sed consequatur quae architecto! Quisquam consequatur
          sequi explicabo fugiat incidunt quidem sunt quo neque? Aliquam
          molestiae magni quae! Nesciunt!
        </p>
      </section>

      <footer className="mt-12 border-t-2 border-gray-950 p-8 opacity-60">
        <p className="text-center">By Dave Payumo. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
