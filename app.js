let listDescription = document.querySelector('p.description');
let descriptionButton = document.querySelector('button.description');
let desctiptionInput = document.querySelector('input.description');
let hideButton = document.querySelectorAll('button')[0];
let ul = document.querySelector('UL');

descriptionButton.addEventListener('click', () => {
    listDescription.textContent = `Things that are ${desctiptionInput.value}:`
})

hideButton.addEventListener('click', () => ul.style.display = 'none');