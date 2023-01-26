let bigImg = document.querySelector('.big-img');
let smallImg = document.querySelectorAll('.small-img');

smallImg.forEach((img)=> {
    console.log("img clicked");
    img.addEventListener('click',function (ev) {
        let imgClicked = ev.target;
        bigImg.src = imgClicked.src;
    })
})

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true
});

$(document).ready(function() {
  $(".btn-left").on("click", function() {
    if ($(".input-box").val() == 0) {
      return;
    }
     $(".input-box").val(parseInt($(".input-box").val())-1);
  }); 
  $(".btn-right").on("click", function() {
     $(".input-box").val(parseInt($(".input-box").val())+1);
  }); 
}); 