const menubtn = document.querySelector('.hamburger');
    const menu = document.querySelector('.header__menu');

    menubtn.addEventListener('click', ()=>{
        menubtn.classList.toggle('active')
        menu.classList.toggle('display')
    })