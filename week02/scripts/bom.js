const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton');
const list = document.querySelector('#chapterList');

// Add Chapter button click
button.addEventListener('click', () => {
  if (input.value.trim() === '') {
    alert('Please enter a chapter!');
    input.focus();
    return;
  }

  const li = document.createElement('li');
  li.textContent = input.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
  li.append(deleteButton);

  list.append(li);

  input.value = '';
  input.focus();
});

// Event delegation for delete buttons
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});
