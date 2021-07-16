let listDescription = document.querySelector('p.description');
let descriptionButton = document.querySelector('button.description');
let desctiptionInput = document.querySelector('input.description');

descriptionButton.addEventListener('click', () => {
    listDescription.textContent = `Things that are ${desctiptionInput.value}:`
})