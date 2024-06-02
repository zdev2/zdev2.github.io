document.addEventListener("DOMContentLoaded", function () {
  var text = document.getElementById("app");

  var typewriter = new Typewriter(text, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(2500)
    .typeString("Youtuber")
    .pauseFor(1500)
    .deleteAll(75)
    .typeString("Web Developer")
    .pauseFor(1500)
    .deleteAll(75)
    .typeString("Software Developer")
    .pauseFor(1500)
    .deleteAll(75)
    .typeString("Game Developer")
    .pauseFor(1500)
    .deleteAll(75)
    .typeString("UI/UX Designer")
    .pauseFor(1500)
    .start();
});
