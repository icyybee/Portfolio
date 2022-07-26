var bio__links = document.getElementsByClassName('bio__links');
var bio__contents = document.getElementsByClassName('bio__contents');
function opentab(tabname) {
    for(bio__link of bio__links) {
        bio__link.classList.remove('head-active');
    }
    for(bio__content of bio__contents) {
        bio__content.classList.remove('content-active');
    }
    event.currentTarget.classList.add('head-active');
    document.getElementById(tabname).classList.add('content-active');
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

/*sidemenu*/
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-20rem";
}