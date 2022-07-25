let bio__links = document.getElementsByClassName('bio__links');
let bio__contents = document.getElementsByClassName('bio__contents');
function opentab(tabname) {
    for(bio__link of bio__links) {
        bio__link.classList.remove("head-active");
    }
    for(bio__content of bio__contents) {
        bio__content.classList.remove("content-active");
    }
    event.currentTarget.classList.add("content-active");
    document.getElementById(tabname).classList.add("head-active");
}

$(document).ready(function(){

    /* sticky navigation */
    $('.js--bio').waypoint(function(direction) {
        if (direction =='down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
});