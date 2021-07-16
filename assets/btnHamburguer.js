const btnHamburguer = document.getElementById('btn-hamburguer');
let boolNav = false

btnHamburguer.addEventListener('click', () => {
    const navigation = document.getElementById('nav') // implementacion
    if (!boolNav) {
        btnHamburguer.classList.add('active')
        document.querySelector('body').style.overflow = 'hidden'
        navigation.style.left = '0' // implementacion
        boolNav = !boolNav
    } else {
        btnHamburguer.classList.remove('active')
        document.querySelector('body').style.overflow = 'auto'
        navigation.style.left = '100%' // implementacion
        boolNav = !boolNav
    }
})