const openNav = document.querySelector('.main__button');
const closeNav = document.querySelector('.nav-bar__button');
const header = document.getElementById('header');

openNav.addEventListener('click', () => { header.classList.remove('hidden'); });
closeNav.addEventListener('click', () => { header.classList.add('hidden'); });