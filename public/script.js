const themeButton = document.querySelector('#themeButton')
const themeButton_light = document.querySelector('#themeButton-light')
const mask = document.querySelector('#mask')
const dark = document.querySelector('#dark')
const light = document.querySelector('#light')




themeButton.addEventListener('click', (e) => {
    mask.classList.toggle('mask-slide')
    mask.classList.toggle('mask')
    setTimeout(() => light.classList.toggle('z-10'), 600);
})
themeButton_light.addEventListener('click', (e) => {
    light.classList.toggle('z-10')
    mask.classList.toggle('mask-slide')
    mask.classList.toggle('mask')


})

