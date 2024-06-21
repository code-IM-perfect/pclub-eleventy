gsap.registerPlugin(TextPlugin);
// split text in iitk
let iitk = document.querySelector("h1 span.iitk");
let text = iitk.textContent.split("");
let result = "";
text.forEach(function (char) {
  result += char.trim() === "" ? " " : "<span>" + char + "</span>";
});
iitk.innerHTML = result;

gsap.set("h1 span.pclub", {
  text: "",
});

gsap.set("h1 span.iitk span", {
  opacity: 0,
});

console.log("Yo this is the Pclub Website");

document.addEventListener("DOMContentLoaded", () => {
  let heroIntro = gsap.timeline({
    ease: "expo.out",
  });

  heroIntro
    .to(
      "h1 span.pclub",
      {
        text: {
          value: "Programming Club",
          speed: 0.9,
        },
      },
      "+=2"
    )
    .fromTo(
      "h1 span.iitk span",
      {
        y: "100%",
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        ease: "expo.out",
        duration: 0.5,
      },
      "+=0.1"
    )
    .from(
      "section.hero p",
      {
        opacity: 0,
        filter: "blur(10rem)",
        ease: "power3.out",
        duration: 1,
        scale: 0,
      },
      "+=0"
    );

});
