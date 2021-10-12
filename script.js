// $(document).ready(function () {
 // $(".menu-button").click(function () {
   // $(".navbar-links").slideToggle(500);
  // })

// })

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
   if (links.classList.contains("show-links")) {
     links.classList.remove("show-links");
   } else {
     links.classList.add("show-links");
   }
  //links.classList.toggle("show-links"); 
});


// Smooth Scrolling
$('.btn a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// var modal = document.querySelector('.modal-bg');
// var btns = document.querySelectorAll('.button'); 
// var span = document.getElementsByClassName("close")[0];

// [].forEach.call(btns, function(el) {
  // el.onclick = function() {
     // modal.style.display = "block";
 // }
// })
// span.onclick = function() {
    // modal.style.display = "none";
// }
// window.onclick = function(event) {
   // if (event.target == modal) {
      //  modal.style.display = "none";
    // }
// } 

var btns = document.querySelectorAll('.button');

btns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll(".close");

closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = (btn.closest(".modal").style.display = "none");
  };
});

window.onclick = function(e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};


