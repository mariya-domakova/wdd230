// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu-btn');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	hambutton.classList.toggle('open');
    if (hambutton.innerText === "x")
        hambutton.innerText = '≡';
    else
        hambutton.innerHTML = 'x';
});