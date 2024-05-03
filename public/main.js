var video = document.getElementById('videoPlayer');

function playVideo() {
    video.play();
}
function stopVideo() {
    video.pause();
    video.currentTime = 0;
};

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('nav-tp');
    if (window.scrollY > 80) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled'); 
    }
});


// let animate = document.querySelectorAll(section)

// window.onscroll = () => {
//     animate.forEach( sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//         let height = sec.offsetHeight;

//         if(top >= top < offset + height) {
//             sec.classList.add('show-animate');
//         }
//         else{
//             sec.classList.remove('show-animate');
//         }
//     });
// }

