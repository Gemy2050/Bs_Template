let navbar = document.querySelector(".navbar");
let landing = document.querySelector(".landing");
let links = document.querySelectorAll(".navbar .collapse a");
let scrollBtn = document.querySelector(".scroll-top");
let section = document.querySelector("section");
let playBtn = document.querySelector(".landing .play-video");
let videoBox = document.querySelector(".landing .video-box");
let video = document.querySelector(".landing .video-box video");
let closeBtn = document.querySelector(".landing .video-box .close");

window.addEventListener("scroll", () => {
  if(window.scrollY >= navbar.offsetTop + 200) {
    navbar.classList.remove("transparent")
  } else {
    navbar.classList.add("transparent")
  }

  if(window.scrollY >= section.offsetTop) {
    scrollBtn.style.right="20px";
  } else {
    scrollBtn.style.right="-30px";
  }

});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active")
  })
});

scrollBtn.onclick = ()=> {
  landing.scrollIntoView({behavior: "smooth"})
}
playBtn.onclick = function() {
  videoBox.classList.add("active");
  video.play()
}
closeBtn.onclick = function() {
  videoBox.classList.remove("active");
  video.pause();
}