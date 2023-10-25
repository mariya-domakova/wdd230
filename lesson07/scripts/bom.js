const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// const addItem = () => {
// 	if (input.value != '') {
// 		const li = document.createElement('li');
// 		const deleteButton = document.createElement('button');
// 		li.textContent = input.value;
// 		deleteButton.textContent = '❌';
// 		li.append(deleteButton);
// 		list.append(li);
// 		deleteButton.addEventListener('click', function () {
// 			list.removeChild(li);
// 			input.focus();
// 		})
// 		input.value = '';
// 	} else {
//         alert('Please enter a value before adding.');
// 		input.focus();
// 	}
// };


// // Additional feature: creating li element when pressing Enter key.
// input.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) { 
//         addItem();
//     }
// });


let chaptersArray = getChapterList() || [];
chaptersArray.forEach( chapter => {
	displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
		displayList(input.value);
		chaptersArray.push(input.value);
		setChapterList();
		input.value = '';
		input.focus();
	}
})

function displayList(item) {
	const li = document.createElement('li');
	const deleteButton = document.createElement('button');
	li.textContent = item;
	deleteButton.textContent = '❌';
	li.append(deleteButton);
	list.append(li);
	deleteButton.addEventListener('click', function () {
		list.removeChild(li);
		input.focus();
	});
}

function setChapterList() {
	localStorage.setItem('myFavBOMChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
	return JSON.parse(localStorage.getItem('myFavBOMChapters'));
}

function deleteChapter(chapter) {
	chapter = chapter.slice(0, chapter.length - 1);
	chaptersArray = chaptersArray.filter((item) => item !== chapter);
	setChapterList();
}
  