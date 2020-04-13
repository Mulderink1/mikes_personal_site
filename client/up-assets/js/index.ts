const downArrow = document.getElementsByClassName(
  "down-arrow"
)[0] as HTMLImageElement;

downArrow.onclick = (): void => {
  document.getElementsByTagName("main")[0].scrollIntoView();
};
