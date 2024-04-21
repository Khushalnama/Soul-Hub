const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/19.jpg"
    },
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/20.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add(active1);
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove(active1);
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});