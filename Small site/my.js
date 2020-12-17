const d = document;

const query = d.querySelectorAll('.images > img');
const pressedLeft = d.getElementById("left_arrow");
const pressedRight = d.getElementById("right_arrow");
const hero = d.getElementById("hero");

var arrImages = [
    "url(./Radiance_img/bg1.png)",
    "url(./Radiance_img/bg2.png)",
    "url(./Radiance_img/bg3.png)",
    "url(./Radiance_img/bg4.png)",
    "url(./Radiance_img/bg5.png)",
]
 
var i = 0;


pressedRight.onclick = () => {
    query[i].classList.remove('--active');
    if(i < arrImages.length - 1)
    {
        ++i;
    }
    else i = 0;
    query[i].classList.add('--active');
    hero.style.backgroundImage = arrImages[i];
};

pressedLeft.onclick = () => {
    query[i].classList.remove('--active');
    if(i > 0)
    {
        --i;
    }
    else i = arrImages.length - 1;
    hero.style.backgroundImage = arrImages[i];
    query[i].classList.add('--active');
}