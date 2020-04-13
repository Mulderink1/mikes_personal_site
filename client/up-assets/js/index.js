var downArrow = document.getElementsByClassName("down-arrow")[0];
downArrow.onclick = function () {
    document.getElementsByTagName("main")[0].scrollIntoView();
};
