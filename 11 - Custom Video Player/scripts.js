const playBtn = document.querySelector('.player__button');
const vid = document.querySelector('.player__video');
const volCtrl = document.querySelector('[name=volume]');
const playBackRate = document.querySelector('[name=playbackRate]');
const forward = document.querySelector('[data-skip="25"]');
const backward = document.querySelector('[data-skip="-10"]');
const playback = document.querySelector('.progress__filled');
playback.style.flexBasis = 0;
let isPlaying = false;

// play button
playBtn.addEventListener('click', function(){
    isPlaying=!isPlaying;

    if(isPlaying){
        vid.play();
        //playback.style.width = vid.currentTime;
        playBtn.innerHTML='&#x23F8';
        //console.log(vid.currentTime);
        //console.log(vid.duration);
        //console.log(vid.currentTime/vid.duration*100);
    } else{
        vid.pause();
        playBtn.innerHTML='►';
    }

});

vid.addEventListener('timeupdate', function(){
    playback.style.flexBasis = vid.currentTime/vid.duration*100+"%";
})

// progress_bar

// volume bar
volCtrl.addEventListener('change', function(){
    vid.volume = volCtrl.value;
});

// playback Rate bar
playBackRate.addEventListener('change', function(){
    vid.playbackRate = playBackRate.value;
});

// 25s forward
forward.addEventListener('click', function(){
    vid.currentTime += 25;
});

// 10s backward
backward.addEventListener('click', function(){
    vid.currentTime -= 10;
});

