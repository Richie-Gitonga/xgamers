const menuBar = document.getElementById('display-menu');
const closeMenu = document.getElementById('close-menu');
const navBar = document.querySelector('nav .nav-items');


function displayMenu() {

}

menuBar.addEventListener('click', () => {
    navBar.style.display = 'flex'
    menuBar.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
     navBar.style.display = 'none'
    menuBar.style.display = 'block'
    closeMenu.style.display = 'none'
})