const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector("#menu"),
      overlay = document.querySelector(".menu__overlay"),
      close = document.querySelector(".menu_close");

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active')
    menu.classList.remove('no-active')
    overlay.classList.add('active')
    overlay.classList.remove('no-active')
});

close.addEventListener('click', ()=>{
    menu.classList.remove('active')
    menu.classList.add('no-active')
    overlay.classList.remove('active')
    overlay.classList.add('no-active')
});