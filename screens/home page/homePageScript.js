const targetDiv = document.getElementById("overlay");
const btn = document.getElementById("burgerMenuBtn");
const signupBtnNav = document.getElementById("signUpBtnNav");
const loginBtnNav = document.getElementById("loginBtnNav");

btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};

function openPage(pageUrl){
    window.location.href=pageUrl
}

signupBtnNav.onclick = function () {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("loginFooter").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
    document.getElementById("signUpFooter").style.display = "block";
};

loginBtnNav.onclick = function () {
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("signUpFooter").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("loginFooter").style.display = "block";
    
};

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tags");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });