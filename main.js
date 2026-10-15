const myDiv = document.getElementById('video-player');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
const video5 = document.getElementById('video5');
const video6 = document.getElementById("video6");
const videos=[video1,video2,video3,video4,video5,video6]
let x=0
let locked = false;
function Roll(){
    if (locked) return;
    if (x >= videos.length - 1) return;
    videos[x].style.display = 'none';
    videos[x+1].style.display = 'block';
    videos[x+1].play();
    x = x + 1;
    locked = true;
    setTimeout(() => { locked = false; }, 3000);
}

myDiv.addEventListener('click', Roll);

