export default function logoAnimation(parent: HTMLDivElement) {
  const children = parent.children;
  let prev = 0;
  let i = 0;

  setInterval(() => {
    children[prev].classList.remove("logoHover");
    children[i].classList.add("logoHover");

    prev = i;
    i++;

    if (i === children.length) i = 0;
  }, 1500);
}
