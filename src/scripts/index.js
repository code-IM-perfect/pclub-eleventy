gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

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

  gsap.defaults({
    ease: "power4.out",
  });

  gsap.set(".widget", { display: "none", opacity: 0 });
  gsap.set(".terminal", { display: "none", opacity: 0 });
  gsap.set(
    ".neofetch,.post-command,.man,.links,.sudo,.screenOfDeath,.screenOfDeath .jk",
    {
      display: "none",
    }
  );

  let desktop = gsap.timeline({
    scrollTrigger: {
      trigger: "section.desktop",
      start: "top top",
      end: "+=600%",
      scrub: 3,
      pin: true,
    },
  });

  desktop.delay(1);

  desktop
    .fromTo(
      ".bar",
      {
        scaleX: 0,
        scaleY: 0.1,
      },
      {
        scaleX: 1,
        scaleY: 0.1,
        duration: 0.75,
      }
    )
    .to(".bar", {
      scale: 1,
      duration: 0.25,
    })
    .to(".widget", {
      opacity: 1,
      display: "flex",
      ease: "power2.in",
      duration: 0.5,
    })
    .fromTo(
      ".terminal-window",
      {
        scaleX: 0.01,
        scaleY: 0,
      },
      {
        scaleY: 1,
        ease: "expo.out",
      },
      "+=1"
    )
    .to(
      ".terminal-window",
      {
        scale: 1,
        duration: 2,
        ease: "expo.out",
      },
      "-=15%"
    )
    .to(
      ".terminal",
      {
        display: "block",
        opacity: 1,
        ease: "power2.in",
        duration: 0.5,
      },
      "+=0.25"
    )
    .set(
      ".pre-command .caret",
      {
        animationName: "none",
      },
      "+=1"
    )
    .to(".pre-command .input", {
      text: {
        value: "neofetch",
        speed: 0.5,
      },
    })
    .set(
      ".pre-command .input",
      {
        color: "#7aa2f7",
      },
      "-=0.15"
    )
    .set(".caret", {
      animationName: "blinking",
    })
    .set(
      ".pre-command .caret",
      {
        animationName: "none",
        opacity: 0,
      },
      "+=0.75"
    )
    .set(
      ".neofetch",
      {
        display: "flex",
      },
      "+=0.5"
    )
    .from(".neofetch .output", {
      text: {
        value: "",
        speed: 1,
      },
    })
    .set(".post-command", {
      display: "block",
    })
    .to(
      ".post-command .input",
      {
        text: {
          value: "clear",
          speed: 0.2,
        },
      },
      "+=4"
    )
    .set(
      ".post-command .input",
      {
        color: "#7aa2f7",
      },
      "-=0.10"
    )
    .set(
      ".neofetch, .post-command",
      {
        display: "none",
      },
      "+=1"
    )
    .set(".pre-command .input", {
      text: "",
      color: "#f7768e",
    })
    .set(".pre-command .caret", {
      animationName: "blinking",
    })
    .to(
      ".pre-command .input",
      {
        text: {
          value: "man",
          speed: 0.2,
        },
      },
      "+=1"
    )
    .set(
      ".pre-command .input",
      {
        color: "#7aa2f7",
      },
      "+=0"
    )
    .to(".pre-command .arg", {
      text: {
        value: " pclub",
        speed: 0.2,
      },
    })
    .set(
      ".pre-command",
      {
        display: "none",
      },
      "+=1.5"
    )
    .set(".man", {
      display: "block",
    })
    .set(
      ".man",
      {
        display: "none",
      },
      "+=6"
    )
    .set(".post-command .input", {
      text: "",
      color: "#f7768e",
    })
    .set(".pre-command,.post-command", {
      display: "block",
    })
    .set(".pre-command .caret", {
      animationName: "none",
      opacity: 0,
    })
    .to(
      ".post-command .input",
      {
        text: {
          value: "clear",
          speed: 0.2,
        },
      },
      "+=1.5"
    )
    .set(
      ".post-command .input",
      {
        color: "#7aa2f7",
      },
      "-=0.10"
    )
    .set(
      ".neofetch, .post-command",
      {
        display: "none",
      },
      "+=0.25"
    )
    .set(".pre-command .input", {
      text: "",
      color: "#f7768e",
    })
    .set(".pre-command .arg", {
      text: "",
    })
    .set(".pre-command .caret", {
      animationName: "blinking",
    })
    .to(
      ".pre-command .input",
      {
        text: {
          value: "cat",
          speed: 0.2,
        },
      },
      "+=1"
    )
    .set(
      ".pre-command .input",
      {
        color: "#7aa2f7",
      },
      "+=0"
    )
    .to(".pre-command .arg", {
      text: {
        value: " links",
        speed: 0.2,
      },
    })
    .set(
      ".pre-command .caret",
      {
        animationName: "none",
        opacity: 0,
      },
      "+=0.5"
    )
    .set(".links", {
      display: "block",
    })
    .from(".links", {
      text: {
        value: "",
        speed: 1,
      },
    })
    .set(".post-command .input", {
      text: "",
      color: "#f7768e",
    })
    .set(".post-command", {
      display: "block",
    })
    .to(
      ".post-command .input",
      {
        text: {
          value: "sudo",
          speed: 0.2,
        },
      },
      "+=4"
    )
    .set(
      ".post-command .input",
      {
        color: "#7aa2f7",
      },
      "+=0"
    )
    .to(".post-command .arg", {
      text: {
        value: " rm -rf /",
        speed: 0.2,
      },
    })
    .set(
      ".post-command .caret",
      {
        animationName: "none",
        opacity: 0,
      },
      "+=1"
    )
    .set(".sudo", {
      display: "block",
    })
    .to(
      ".sudoPass",
      {
        text: {
          value: "*************",
          speed: 0.5,
        },
      },
      "+=0.75"
    )
    .set(
      ".sudo .caret",
      {
        animationName: "none",
        opacity: 1,
      },
      "+=1"
    )
    .set(
      "section.desktop",
      {
        animationName: "crash",
      },
      "+=1"
    )
    .set(
      "section.desktop",
      {
        animationName: "none",
      },
      "+=2s"
    )
    .set(
      "section.desktop",
      {
        filter: "url(#filter-2)",
      },
      "+=0.5s"
    )
    .set(
      "section.desktop",
      {
        filter: "url(#filter)",
      },
      "+=0.4s"
    )
    .set(
      "section.desktop",
      {
        filter: "url(#filter-3)",
      },
      "+=0.5s"
    )
    .set(
      "section.desktop",
      {
        filter: "url(#filter)",
      },
      "+=0.3s"
    )
    .set(
      "section.desktop",
      {
        filter: "url(#filter4)",
      },
      "+=0.5s"
    )
    .set(
      "section.desktop",
      {
        filter: "url(#filter)",
      },
      "+=0.4s"
    )
    .set(
      "section.desktop",
      {
        filter: "url(#filter-2)",
      },
      "+=0.7s"
    )
    .set(
      ".terminal-window",
      {
        display: "none",
      },
      "+=2"
    )
    .set("section.desktop", {
      filter: "url(#filter-3)",
    })
    .set(
      ".bar",
      {
        display: "none",
      },
      "+=1.5"
    )
    .set("section.desktop", {
      filter: "none",
      background: "#0081de",
      display: "grid",
    })
    .set(".screenOfDeath", {
      display: "grid",
    })
    .set(
      ".screenOfDeath .jk",
      {
        display: "inline-block",
      },
      "+=3"
    )
    .set(
      "section.desktop",
      {
        display: "grid",
      },
      "+=4"
    );

  //   document.querySelector("section.desktop").addEventListener("click", () => {
  //     desktop.paused() ? desktop.play() : desktop.pause();
  //   });
});
