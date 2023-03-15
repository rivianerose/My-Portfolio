      // ScrollReveal

window.sr = ScrollReveal({reset: true});

sr.reveal('.home', {duration:1000});
sr.reveal(".all-skills", {duration:2000})
sr.reveal('.about-me', {
    rotate: {x:0, y:80, z:0},
    duration:2000
});
sr.reveal('.projects', {duration:2000})


     //  maquina de escrever 

const msg = "Riviane Marques"
let titulo = document.querySelector(".text")

for(var i=0;i<msg.length;i++) {
    (function(pos) {
      setTimeout(function(){
        titulo.innerHTML += msg.charAt(pos)
      },500*pos)
    })(i)
};




