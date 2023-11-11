const darkCheckbox = document.getElementById('dark');

darkCheckbox.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});