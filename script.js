//dino
const dino = document.querySelector('.dino');
let isjump = false;
const fundo = document.querySelector('.fundo');
let position = 0;

// reconhecendo a tecla espaço
function handleKeyUp(event) 
{
if(event.keyCode === 32) 
{
    if(!isjump)
    {
  jump();
    }
}
}
// pular
function jump()
{

  isjump = true;
  let upintervalo = setInterval(() => 
  {
    if(position >= 150)
    {
       clearInterval(upintervalo);
       // descer
       let downintervalo = setInterval(() => 
       {
           if(position <= 0)
           {
        clearInterval(downintervalo);
           isjump = false;
           }
           else
           {
           position -= 20;
           dino.style.bottom = position + 'px';
           }
       }, 20)
    } 
           else 
    {
        //subir
            position += 20;
            dino.style.bottom = position + 'px';
    }
        }, 20)
}

function createCactus() 
{
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    fundo.appendChild(cactus);

    let leftinvertavalo = setInterval(() => 
    {

    if(cactusPosition < -60)
    {
        clearInterval(leftinvertavalo);
        fundo.removeChild(cactus);
    } 
    else if (cactusPosition > 0 && cactusPosition < 60 && position < 60)
    {
      clearInterval(leftinvertavalo);
      document.body.innerHTML = '<h1 class="game-over"> Fim de jogo </h1>';
    }
    {
        cactusPosition -=10;
        cactus.style.left = cactusPosition + 'px';

    }

    },30)

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);