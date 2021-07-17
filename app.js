let hideButton = document.querySelectorAll("button")[0];
let listDiv = document.querySelector(".listDiv");
let listDescription = document.querySelector("p.description");
let descriptionButton = document.querySelector("button.description");
let descriptionInput = document.querySelector("input.description");
//let ul = document.querySelector('li').parentNode; || alternate transversal
let addItemInput = document.querySelector("input.addItem");
let addItemButton = document.querySelector("button.addItem");
let removeItem = document.querySelector("button.removeItem");

hideButton.addEventListener("click", () => {
  if (listDiv.style.display != "none") {
    listDiv.style.display = "none";
    hideButton.textContent = `Show List`;
  } else{
      listDiv.style.display = 'block';
      hideButton.textContent = `Hide List`;
    }
});

descriptionButton.addEventListener("click", () => {
  listDescription.textContent = `Things that are ${descriptionInput.value}:`;
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
    let li = document.createElement('LI');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
})

removeItem.addEventListener('click', () => {
    let li = document.querySelector('li:last-child');
    ul.removeChild(li); 
})


let ul = listDiv.children[3]

ul.addEventListener('click', (e) => {
    if (e.target.tagName == ('BUTTON')){
        let li = e.target.parentNode;
        ul.removeChild(li); 
    }
})