var downArrow = document.getElementsByClassName("down-arrow")[0];
downArrow.onclick = function () {
    document.getElementsByTagName("main")[0].scrollIntoView();
};
var pictureModal = function (thisObject) {
    if (window.innerWidth > 1155) {
        var imageData = {
            src: thisObject.childNodes[1].src,
            text: thisObject.childNodes[3].childNodes[1].innerHTML
        };
        var backgoundDiv_1 = document.createElement("div");
        backgoundDiv_1.setAttribute("class", "background-div");
        var modalDiv = document.createElement("div");
        var imageTag = document.createElement("img");
        imageTag.setAttribute("src", imageData.src);
        var paragraphTag = document.createElement("p");
        paragraphTag.innerHTML = imageData.text;
        modalDiv.appendChild(imageTag);
        modalDiv.appendChild(paragraphTag);
        backgoundDiv_1.appendChild(modalDiv);
        document.getElementsByTagName("main")[0].appendChild(backgoundDiv_1);
        window.onclick = function (event) {
            if (event.target === backgoundDiv_1) {
                backgoundDiv_1.style.display = "none";
                window.onclick = undefined;
            }
        };
    }
};
