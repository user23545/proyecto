
//   MENU DESPLEGABLE PC

const IconoMenu = document.querySelector('#icono-menu1');
menu1 = document.querySelector('#menu1');

IconoMenu.addEventListener('click', (a) => {
    menu1.classList.toggle('active1');
    document.body.classList.toggle('opacity');
    
    const rutaActual = a.target.getAttribute('src');
    
    if(rutaActual =='588a6507d06f6719692a215.png'){
        a.target.setAttribute('src', '588a6507d06f6719692a2d15.png')
    }else{
        a.target.setAttribute('src', '588a6507d06f6719692a2d1.png')
    }
})  

// MENU DESPLEGABLE TABLET Y CELULAR

const iconoMenu = document.querySelector('#icono-menu');
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
menu.classList.toggle('active');
document.body.classList.toggle('opacity');

const rutaActual = e.target.getAttribute('src');

if(rutaActual =='588a6507d06f6719692a2d15.png'){
e.target.setAttribute('src', '588a6507d06f6719692a2d15.png')
}else{
e.target.setAttribute('src', '588a6507d06f6719692a2d1.png')
}
})