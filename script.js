const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
   if (links.classList.contains("show-links")) {
     links.classList.remove("show-links");
   } else {
     links.classList.add("show-links");
   }
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

// AOS Animation
AOS.init({
  // once: true,
  // offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});

