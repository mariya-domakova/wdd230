const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const addItem = () => {
	if (input.value != '') {
		const li = document.createElement('li');
		const deleteButton = document.createElement('button');
		li.textContent = input.value;
		deleteButton.textContent = '❌';
		li.append(deleteButton);
		list.append(li);
		deleteButton.addEventListener('click', function () {
			list.removeChild(li);
			input.focus();
		})
		input.value = '';
	} else {
        alert('Please enter a value before adding.');
		input.focus();
	}
};

button.addEventListener('click', () => {
    addItem();
  })

// Additional feature: creating li element when pressing Enter key.
input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) { 
        addItem();
    }
});