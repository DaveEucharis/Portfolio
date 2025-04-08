export default function devAnimation(element: HTMLHeadingElement) {
  const devNames = ["UI/UX Designer", "React Developer", "Frontend Developer"];
  let index = 0;

  setInterval(() => {
    index = index >= devNames.length ? 0 : index;

    element.style.width = "0";

    element.ontransitionend = () => {
      element.innerHTML = devNames[index];

      element.style.width = "10rem";

      index++;

      element.ontransitionend = null;
    };
  }, 5000);
}
