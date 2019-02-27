try {
    function speed_up_videos() {
    console.log("Called speed_up_videos()");
    var videos = window.document.querySelectorAll('video');
    console.log("There are " + videos.length + " videos found");
        for (i=0;i < videos.length;i++) {
            console.log("video is " + videos[i]);
            videos[i].playbackRate = 3.1;
        }
    }
    speed_up_videos();
    setInterval(speed_up_videos(), 1000);
}
catch(err) {
    console.log(err + " couldn't speed up video!");
}

