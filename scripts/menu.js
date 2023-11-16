const body = document.querySelector('body')
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const headerContent = document.querySelector('.header__text');

navToggle.addEventListener('click', () => {
    body.classList.toggle('nav-open');
    if (body.classList.contains('nav-open')) {
      headerContent.style.display = "none";
    } else {
      headerContent.style.display = "block";
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('nav-open');
        headerContent.style.display = "block";
    })
})
