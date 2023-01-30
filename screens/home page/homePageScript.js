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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);
  
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }