gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

// gsap.set("h1 span.pclub", {
//   text: "",
// });

// gsap.set("h1 span.iitk span", {
//   opacity: 0,
// });

gsap.set(".widget", { display: "none", opacity: 0 });
gsap.set(".terminal", { display: "none", opacity: 0 });
gsap.set(
  ".neofetch,.post-command,.man,.links,.sudo,.screenOfDeath,.screenOfDeath .jk",
  {
    display: "none",
  }
);

console.log("Yo this is the Pclub Website");

document.addEventListener("DOMContentLoaded", () => {
  let heroIntro = gsap.timeline();

  heroIntro
    .to(
      ".entry",
      {
        scale: 1,
        duration: 1,
        ease: "expo.inOut",
      },
      "+=1"
    )
    .set(
      "h1 span.p",
      {
        display: "inline-block",
      },
      "+=0.5"
    )
    .set(
      "h1 span",
      {
        display: "inline-block",
      },
      "+=0.5"
    )
    .set(".entry", {
      background: "var(--primary)",
    })
    .set(
      "h1 div.iitk",
      {
        opacity: 1,
      },
      "+=0.5"
    )
    .set(".entry", {
      background: "var(--secondary)",
    })
    .to(
      ".entry",
      {
        opacity: 0,
        filter: "blur(5rem)",
        ease: "expo.inOut",
      },
      "+=0.5"
    )
    .to(
      "h1 img",
      {
        opacity: 1,
        ease: "expo.inOut",
      },
      "<"
    )
    .to(
      ".entry",
      {
        background: "#94dfff",
        ease: "expo.out",
        duration: 1,
      },
      "<+=0.2"
    )
    .to(
      "h1 span",
      {
        color: "var(--secondary)",
        ease: "expo.inOut",
      },
      "-=1"
    )
    .to(
      "h1 div.iitk",
      {
        color: "var(--primary)",
        ease: "expo.inOut",
      },
      "<"
    )
    .to("header", {
      opacity: 1,
      ease: "expo.inOut",
    })
    .to(
      "h1 img",
      {
        opacity: 0,
        ease: "expo.inOut",
      },
      "<"
    )
    .to(
      "section.hero p",
      {
        opacity: 1,
        ease: "expo.inOut",
      },
      "<"
    );
  //   .to(
  //     "h1 span.pclub",
  //     {
  //       text: {
  //         value: "Programming Club",
  //         speed: 0.9,
  //       },
  //     },
  //     "+=1.5"
  //   )
  //   .fromTo(
  //     "h1 span.iitk span",
  //     {
  //       y: "100%",
  //       scaleY: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       scaleY: 1,
  //       stagger: 0.08,
  //       ease: "elastic.out(0.6,0.4)",
  //       duration: 0.5,
  //     },
  //     "+=0.1"
  //   )
  //   .to(
  //     "section.hero p",
  //     {
  //       opacity: 1,
  //       filter: "blur(0rem)",
  //       ease: "power3.out",
  //       duration: 0.8,
  //       scale: 1,
  //     },
  //     "+=0"
  //   );

  gsap.defaults({
    ease: "power4.out",
  });

  let desktop = gsap.timeline({
    scrollTrigger: {
      trigger: "section.desktop",
      start: "top top",
      end: "+=600%",
      scrub: 3,
      pin: true,
    },
  });

  desktop
    .from("section.desktop", {
      opacity: 0,
      scale: 0.5,
      filter: "blur(3rem)",
      duration: 1,
    })
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
      },
      "+=1"
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
      "+=2"
    )
    .set(".man", {
      display: "block",
    })
    .set(
      ".man",
      {
        display: "none",
      },
      "+=4"
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
      "+=0"
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
      "+=0s"
    )
    .set(
      "section.desktop",
      {
        filter: "none",
      },
      "+=1s"
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
        filter: "none",
      },
      "+=1s"
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
        filter: "none",
      },
      "+=1s"
    )
    .set(
      "section.desktop",
      {
        filter: "url(#filter-2)",
      },
      "+=0.5s"
    )
    .set(
      ".terminal-window",
      {
        display: "none",
      },
      "+=1.5"
    )
    .set("section.desktop", {
      filter: "url(#filter-3)",
    })
    .set(
      ".bar",
      {
        display: "none",
      },
      "+=2"
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
