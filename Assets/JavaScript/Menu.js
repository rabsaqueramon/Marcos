const abrirMenu = document.querySelector('#Menu');
const divMenu = document.querySelector('.divMenu');
const closebtn = document.querySelector('.closebtn');

closebtn.addEventListener('click', closeNav);

abrirMenu.addEventListener('click', openMenu);

function openMenu() {
    divMenu.style.width = '100%';
    divMenu.style.transitionDuration = '0.4s'
}

function closeNav() {
    divMenu.style.width = "0";
}

function miniMenu() {
    const expandMenu = document.querySelector('#expandMenu');
    const ulPlanos = document.querySelector('.ulPlanos');

    expandMenu.addEventListener('click', menuPlanos);

    function menuPlanos(e) {

        if (ulPlanos.style.display != 'flex') {
            ulPlanos.style.display = 'flex';

        } else {
            ulPlanos.style.display = 'none';
        };

    }
}
miniMenu();




