const mario = document.querySelector('.mario-per');
/*selecionando a class mario-per*/
const pipe = document.querySelector('.pipe');

const jump = () => {
   mario.classList.add('jump');

   setTimeout(() => {
   mario.classList.remove('jump'); /*remover a funcao jump, para recomecar*/
 }, 500); 
}

const loop = setInterval(() => {
   
   const pipePosition = pipe.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

   console.log(marioPosition);

   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

   pipe.style.animation = 'none';
   pipe.style.left = `${pipePosition}px`;

   mario.style.animation = 'none';
   mario.style.bottom = `${marioPosition}px`;   

   mario.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80e19859-e026-4a30-a9fe-0a16d9cb41bb/ddmqv2i-3a688b96-f4bd-4aa0-99c7-9898fd057257.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwZTE5ODU5LWUwMjYtNGEzMC1hOWZlLTBhMTZkOWNiNDFiYlwvZGRtcXYyaS0zYTY4OGI5Ni1mNGJkLTRhYTAtOTljNy05ODk4ZmQwNTcyNTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VeIyCiJeJBz0aK_kNCi4KbCnDqxyWO2WLu2We2zZu20';

   clearInterval(loop);

   }

}, 10);


document.addEventListener('keydown', jump); 
/*adicionando o evento // keydown: quando clicarmos // jump: é o evento */
