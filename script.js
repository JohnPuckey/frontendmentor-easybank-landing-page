const nav = document.getElementById('nav')
const menuBtn = document.getElementById('menu-btn')

menuBtn.addEventListener('click', (e) => {

    nav.classList.toggle('active')
    menuBtn.classList.toggle('active')
})

