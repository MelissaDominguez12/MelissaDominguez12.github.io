let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#68485f;">Desarrollo sitios web y tengo conocimiento en C.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
