
// document.getElementById("lessons").onmouseover = function() {mouseOver()};
// document.getElementById("lessons").onmouseout = function() {mouseOut()};

// function mouseOver() {
//     document.getElementById("lessons").style.color = "purple";
// }

// function mouseOut() {
//     document.getElementById("lessons").style.color = "white";
// }

// document.getElementById("elmhurstLink").onmouseover = function() {mouseOver()};
// document.getElementById("elmhurstLink").onmouseout = function() {mouseOut()};

// function mouseOver() {
//     document.getElementById("elmhurstLink").style.color = "purple";
// }

// function mouseOut() {
//     document.getElementById("elmhurstLink").style.color = "white";
// }

// const secureLinks=$("a['href^=https://']");
// $secureLinks.attr("target","_blank");

// $('a[href^="https://"]').attr('target','_blank');

const secureLinks=$('a[href^="http"]');
$(secureLinks).attr('target','_blank');

// $('a[href^="https://"]').attr('target', '_blank');


function myFunction() {
    alert('Pricing Coming Soon!');
}

