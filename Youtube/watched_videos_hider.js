// ==UserScript==
// @name     Youtube watched videos hider
// @version  1
// @grant    none
// ==/UserScript==

//Use with greasemonkey, or paste to console.
//It just hide all watched wideos before page refresh.

function main() {
    var arr = document.getElementsByClassName("ytd-thumbnail-overlay-resume-playback-renderer");

    console.log(arr.length);

    for (var j = 0; j < arr.length; j++) {
        var element = arr[j];

        if (element.style.width == "100%") {
            var parent = element;
            for (var i = 0; i < 6; i++) {
                parent = parent.parentNode;
            }
            for (var i = 0; i < 5; i++) {
                parent.remove();
            }
            console.log(element.outerHTML);
            console.log("Removed");
        }
    }
}

let timerId = setInterval(main, 1500);