/* My Code */
/* const menu = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
    console.log('clicked')
    navBar.classList.toggle('change');
    navList.classList.toggle('change');
}) */
/* End of My Code */

/* Teacher Code */

/* Navbar */

const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
})

/* End of Navbar */

/* Section 2 Video */

const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playPause = () => {
    if (video.paused) {
        video.play();
        btn.className = 'far fa-pause-circle';
        video.style.opacity = '.7';
    } else {
        video.pause();
        btn.className = 'far fa-play-circle';
        video.style.opacity = '.3';
    }
}

btn.addEventListener('click', () => {
    playPause();
});

video.addEventListener('timeupdate', () => {
    const barWidth = Math.round((video.currentTime / video.duration) * 100);
    bar.style.width = barWidth + '%';
})

/* End of Section 2 Video */

/* End of Teacher Code */