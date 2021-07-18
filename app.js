let hideButton = document.querySelectorAll("button")[0];
let listDiv = document.querySelector(".listDiv");
let listDescription = document.querySelector("p.description");
let descriptionButton = document.querySelector("button.description");
let descriptionInput = document.querySelector("input.description");
let addItemInput = document.querySelector("input.addItem");
let addItemButton = document.querySelector("button.addItem");
let ul = listDiv.children[3];

let addButtons = ul => {        //ul = ul.children
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].innerHTML += `
      <button id="up">Up</button>
      <button id='remove'>Remove</button>
      <button id='down'>Down</button>
      `;
}}

addButtons(ul);

let addSingleButton = (li) => {
    li.innerHTML += `
    <button id="up">Up</button>
    <button id='remove'>Remove</button>
    <button id='down'>Down</button>
    `;
}

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
    addSingleButton(li);
    addItemInput.value = '';
})


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
            if(nextLi){ // checks null
                ul.insertBefore(nextLi,li); // sits nextLi on top of li
            }
        }
    }
})

                                

