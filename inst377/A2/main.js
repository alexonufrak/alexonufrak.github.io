const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
//reference: https://mdn.github.io/learning-area/javascript/building-blocks/gallery/

for(let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    let xxx = 'images/pic' + i + '.jpg';
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);
    newImage.onclick = function(replace) {
      displayedImage.src = replace.target.src;
      var imgsize = document.getElementsByClassName('displayed-img');
      imgsize.height = 640;
      imgsoze.width = 480;
    }
  }


/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  const btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}