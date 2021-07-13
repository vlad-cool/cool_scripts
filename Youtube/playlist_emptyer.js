//WARNING. IT Removes all videos of playlist. We don't guarantee anything
//Paste to console

function start() {
    var videos = document.getElementsByClassName("style-scope ytd-playlist-video-list-renderer");

    console.log(videos.length);

    for (var i = 0; i < videos.length; i++) {
        try {
            var menu = videos[i].querySelector('#menu');

            if (menu.classList[0] != "ytd-playlist-video-renderer" && menu.classList[1] != "ytd-playlist-video-renderer") {
                continue;
            }

            menu.querySelector('#button').click();

            deleter();
        }
        catch
        {
            console.log("AAA")
            continue;
        }
    }
}

function deleter() {
    let spans = document.querySelectorAll('span');

    for (var i = 0; i < spans.length; i++) {
        if (spans[i].textContent == 'Удалить из плейлиста "') {
            spans[i].click();
        }
    }
}

setInterval(start, 1500);