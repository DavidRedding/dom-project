let listDescription = document.querySelectorAll('p')[1];
let descriptionButton = document.querySelectorAll('button')[0];
let desctiptionInput = document.querySelectorAll('input')[0];

descriptionButton.addEventListener('click', () => {
    listDescription.textContent = `Things that are ${desctiptionInput.value}:`
})