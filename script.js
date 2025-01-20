const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('links')[0]
const navLinks = navbarLinks.getElementsByTagName('a');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

navbarLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navbarLinks.classList.remove('active'); // Remove the 'active' class to hide the navbar
    }
});
