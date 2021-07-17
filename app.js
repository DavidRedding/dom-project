let hideButton = document.querySelectorAll("button")[0];
let listDiv = document.querySelector(".listDiv");
let listDescription = document.querySelector("p.description");
let descriptionButton = document.querySelector("button.description");
let descriptionInput = document.querySelector("input.description");
let addItemInput = document.querySelector("input.addItem");
let addItemButton = document.querySelector("button.addItem");

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

let ul = listDiv.children[3];
ul.addEventListener('click', (e) => {
    if (e.target.tagName == ('BUTTON')){
        if (e.target.id == 'remove') {
            let li = e.target.parentNode;
            ul.removeChild(li);   
        }
        if (e.target.id == 'up') {
            let li = e.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) { //checks null (if there is a prevLi)
              ul.insertBefore(li, prevLi); // puts li on top of prevLi
            } 
        }
        if (e.target.id == 'down') {
            let li = e.target.parentNode;
            let ul = li.parentNode;
            let nextLi = li.nextElementSibling;
            if(nextEl){ // checks null
                ul.insertBefore(nextLi,li); // sits nextLi on top of li
            }
        }
    }
})