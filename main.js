
function alertmsg(msg) {
    if (document.getElementById("vidmsgbox")) document.getElementById("vidmsgbox").remove();
    var x = document.createElement("div");
    x.setAttribute("id", "vidmsgbox");
    x.style.position = "absolute";
    x.style.top = "5px";
    x.style.right = "10px";
    x.innerText = msg;
    x.style.fontSize = "30px";
    x.style.maxWidth = "500px";
    x.style.height = "40px";
    x.style.color = "white";
    x.style.backgroundColor = "rgba(0, 0, 0, 0.49)";
    x.style.padding = "2px 3px 2px 3px";
    x.style.webkitTransition = "all 1s linear";
    x.style.transition = "all 1s linear";
    pre = x;
    var y = document.getElementById("c-video");
    y.appendChild(x);
    setInterval(function () {
        x.style.opacity = "0";
        y.removeChild(x);
    }, 1500);
}
function extSectoStr(sec){
    var min=parseInt(sec/60);
    min=min.toString();
    if(min<10)min="0"+min;
    var sec=parseInt(sec%60);
    sec=sec.toString();
    if(sec<10)sec="0"+sec;
    return min+":"+sec;
}

window.addEventListener("keyup", function (event) {

    var ex2 = 0;
    var ex4 = document.getElementById("c-video_html5_api");
    if(document.getElementsByClassName("vjs-overlay").length>0){
        var ex3 = 0;
        var ex1=document.getElementsByClassName("vjs-overlay")[0];
        while (ex1.classList[ex3]) {
            if (ex1.classList[ex3] == "vjs-hidden") {
                ex2 = 1;
                break;
            }
            ex3++;
        }
    }
    else ex2=1;

    if (ex2 == 1) {
        event.preventDefault();
        //Play-pause
        if (event.keycode === 66) {
        }
        //Play-pause
        if (event.keyCode === 80) {
            if (ex4.paused) {
                ex4.play();
                alertmsg("Played");
            }
            else {
                ex4.pause();
                alertmsg("Paused");
            }


        }
        //Playback Speeds
        if (event.keyCode === 61 || event.keyCode === 107) {
            if (ex4.playbackRate <= 3.0) {
                ex4.playbackRate += 0.1;

                alertmsg("Speed: " + ex4.playbackRate.toString().slice(0, 3) + "x");
            }
        }
        if (event.keyCode === 173 || event.keyCode === 109) {
            if (ex4.playbackRate >= 0.4) {
                ex4.playbackRate -= 0.1;
                alertmsg("Speed: " + ex4.playbackRate.toString().slice(0, 3) + "x");
            }
        }

        //Video Quality (Can Uncomment this if you want, it works)
        //if(event.keyCode === 59)document.getElementsByClassName("c-resolution-button")[0].click();
        //if(event.keyCode === 222)document.getElementsByClassName("c-resolution-button")[1].click();

        //Seek
        if (event.keyCode === 188) {
            ex4.currentTime -= 5;
            alertmsg(extSectoStr(ex4.currentTime)+"/"+extSectoStr(ex4.duration));
        }
        if (event.keyCode === 190) {
            ex4.currentTime += 5;
            alertmsg(extSectoStr(ex4.currentTime)+"/"+extSectoStr(ex4.duration));
        }

        //Volume Control
        if (event.keyCode === 219) {
            if (ex4.muted){
                ex4.muted = false;
            }
            if (ex4.volume > 0.15){
                ex4.volume -= 0.15;
            }
            else{
                ex4.volume = 0;
            }
            alertmsg("Volume: " + Math.round(ex4.volume * 100) + "%");
        }
        if (event.keyCode === 221) {
            if (ex4.muted){
                ex4.muted = false;
            }
            if (ex4.volume < 0.85){
                ex4.volume += 0.15;
            }
            else{
                ex4.volume = 1;
            }
            alertmsg("Volume: " + Math.round(ex4.volume * 100) + "%");
        }
        if (event.keyCode === 77) {
            if (ex4.muted) {
                ex4.muted = false;
                alertmsg("Unmuted");
            }
            else {
                ex4.muted = true;
                alertmsg("Muted");
            }
        }


    }
});
