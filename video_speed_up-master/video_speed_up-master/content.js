console.log("Speed up all videos...go?");

try {
    var videos = window.document.querySelectorAll('video');
    console.log("There are " + videos.length + " videos found");
    function speed_up_videos() {
        for (i=0;i < videos.length;i++) {
            console.log("video is " + videos[i]);
            videos[i].playbackRate = 2.75;
        }
    }
    speed_up_videos();
    setTimeout(speed_up_videos(), 5000);
    setTimeout(speed_up_videos(), 15000);
    console.log("confirm sped up");
}
catch(err) {
    console.log(err + " couldn't speed up video!");
}

