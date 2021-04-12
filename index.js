var tl = new TimelineMax();
var c = $("#circle");
var s = $("svg");
var cursor = $(".cursor"),
  follower = $(".cursor-follower");
var posX = 0,
  posY = 0;
var mouseX = 0,
  mouseY = 0;

gsap.fromTo(".cta", 0.9, { y: 25, delay: 2 }, { opacity: 1, y: 0 });

function clickButton() {
  gsap.to("#overlay", {
    scaleY: 1,
    borderTopLeftRadius: "10%",
    borderTopRightRadius: "10%",
    duration: 0.5,
  });
  gsap.to("#overlay", { scaleY: 1, borderRadius: 0, delay: 0.2 });
  gsap.to("#menu-list", { display: "block", delay: 0.8 });
  TweenMax.to("#cancel", { opacity: 1, delay: 0.5 });
  TweenMax.fromTo(
    "#circle",
    1,
    { drawSVG: "10%", stroke: "#ffffff00", ease: Power1.easeInOut },
    {
      drawSVG: "100%",
      stroke: "#00000090",
      ease: Power2.easeInOut,
      delay: 0.4,
    }
  );
  gsap.fromTo(
    "#menu-list li",
    { skewY: 4, y: -35 },
    { stagger: 0.3, skewY: 0, y: 0, opacity: 1, delay: 0.5 }
  );
  gsap.fromTo(
    "#links li",
    { skewY: 4, y: -15 },
    { stagger: 0.1, skewY: 0, y: 0, opacity: 1, delay: 1.9 }
  );
  gsap.fromTo(
    "#email-info",
    { skewY: 4, y: -15 },
    { skewY: 0, y: 0, opacity: 1, delay: 1.7 }
  );
}

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 7;
    posY += (mouseY - posY) / 7;

    TweenMax.set(follower, {
      css: {
        left: posX - 12,
        top: posY - 12,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

const hover = $(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
// yellow circle
$(".burger").on("mouseenter", function () {
  cursor.addClass("burger-active");
  follower.addClass("burger-active");
});
$(".burger").on("mouseleave", function () {
  cursor.removeClass("burger-active");
  follower.removeClass("burger-active");
});
$(".burger").click(function () {
  cursor.addClass("menu");
});
$(".list-text").on("mouseenter", function () {
  cursor.addClass("active");
  gsap.to(".menu-image", 0.2, { opacity: 1, x: -700, y: -250 });
});
$(".list-text").on("mouseleave", function () {
  cursor.removeClass("active");
  gsap.to(".menu-image", 0.2, { x: 0, y: 0 });
});

$(".list-text").click(() => {
  gsap.to(".image2", { transform: "rotate(50deg)", x: 400 });
  gsap.to(".image1", {
    x: "-230%",
    y: "50%",
    transform: "translate(-50%, -50%) rotate(0deg)",
    delay: 0.5,
  })
  redirectPage()
  
 // gsap.to(".image1", 0.3, { width: window.innerWidth, height: "300px", delay: 1})
 // gsap.to("#menu-list", {opacity: 0, display: "none", delay: 1.5})
});

async function redirectPage(){
  window.location.href = "page-1.html"
}
gsap.to('.image', {y: "500px"})
gsap.fromTo('.logo, nav ul', {y: -10}, {opacity: 1, y: 0, delay: 0.6})
gsap.fromTo("h1 p", { y: -10}, {opacity: 1, stagger: 0.8, y:0, delay: 1})
gsap.fromTo(".body-text", { x: 30}, {opacity: 1, x:0, delay: 2.3})